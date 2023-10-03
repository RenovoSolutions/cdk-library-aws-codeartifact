import { IResource, Resource, Stack } from 'aws-cdk-lib';
import * as codeartifact from 'aws-cdk-lib/aws-codeartifact';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import * as domain from './domain';
import { repositoryArnComponentsFromNames, repositoryParseArn } from './private/respository-common';

/**
 * CodeArtifact supports an external connection to the following public repositories.
 *
 * @see https://docs.aws.amazon.com/codeartifact/latest/ug/external-connection.html#supported-public-repositories
 */
export enum ExternalConnection {
  /**
   * npm public registry
   */
  NPM = 'public:npmjs',
  /**
   * NuGet Gallery
   */
  DOTNET_NUGETORG = 'public:nuget-org',
  /**
   * Python Package Index
   */
  PYTHON_PYPI = 'public:pypi',
  /**
   * Maven Central
   */
  MAVEN_CENTRAL = 'public:maven-central',
  /**
   * Google Android repository
   */
  MAVEN_GOOGLEANDROID = 'public:maven-googleandroid',
  /**
   * Gradle plugins repository
   */
  MAVEN_GRADLEPLUGINS = 'public:maven-gradleplugins',
  /**
   * CommonsWare Android repository
   */
  MAVEN_COMMONSWARE = 'public:maven-commonsware',
}

/**
 * This interface represents a CodeArtifact Repository resource
 *
 * @experimental
 */
export interface IRepository extends IResource {
  /**
   * The ARN of the repository.
   *
   * @attribute
   */
  readonly repositoryArn: string;

  /**
   * The name of the repository.
   *
   * @attribute
   */
  readonly repositoryName: string;

  /**
   * The name of the domain that contains the repository.
   *
   * @attribute
   */
  readonly repositoryDomainName?: string;

  /**
   * The account that owns the domain that contains the repository.
   */
  readonly repositoryDomainOwner?: string;

  /**
   * The domain that contains the repository.
   */
  readonly domain: domain.IDomain;

  /**
   * Grant read permissions to the given principal on this repository.
   */
  grantRead(grantee: iam.IGrantable): iam.Grant;

  /**
   * Grant write permissions to the given principal on this respository.
   */
  grantWrite(grantee: iam.IGrantable): iam.Grant;

  /**
   * Grant read and write permissions to the given principal on this repository.
   */
  grantReadWrite(grantee: iam.IGrantable): iam.Grant;
}

/**
 * The base respository class
 */
abstract class RepositoryBase extends Resource implements IRepository {
  public abstract readonly repositoryArn: string;
  public abstract readonly repositoryName: string;
  public abstract readonly repositoryDomainName?: string;
  public abstract readonly repositoryDomainOwner?: string;
  public abstract readonly domain: domain.IDomain;

  readActions = [
    'codeartifact:DescribePackageVersion',
    'codeartifact:DescribeRepository',
    'codeartifact:GetPackageVersionReadme',
    'codeartifact:GetRepositoryEndpoint',
    'codeartifact:ListPackages',
    'codeartifact:ListPackageVersions',
    'codeartifact:ListPackageVersionAssets',
    'codeartifact:ListPackageVersionDependencies',
    'codeartifact:ReadFromRepository',
  ];

  writeActions = [
    'codeartifact:PublishPackageVersion',
    'codeartifact:PutPackageMetadata',
  ];

  private grant(principal: iam.IGrantable, iamActions: string[]): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee: principal,
      actions: iamActions,
      resourceArns: [this.repositoryArn],
    });
  }

  public grantRead(principal: iam.IGrantable): iam.Grant {
    return this.grant(principal, this.readActions);
  }

  public grantWrite(principal: iam.IGrantable): iam.Grant {
    return this.grant(principal, this.writeActions);
  }

  public grantReadWrite(principal: iam.IGrantable): iam.Grant {
    return this.grant(principal, this.readActions.concat(this.writeActions));
  }
}

/**
 * Attributes of a repository
 */
export interface RepositoryAttributes {
  /**
   * The ARN of the repository
   */
  readonly repositoryArn?: string;

  /**
   * The name of the repository
   */
  readonly repositoryName?: string;

  /**
   * The name of the domain that contains the repository
   */
  readonly repositoryDomainName?: string;

  /**
   * The account that owns the domain that contains the repository
   */
  readonly repositoryDomainOwner?: string;

  /**
   * The domain that contains the repository
   */
  readonly domain?: domain.IDomain;
}

/**
 * The options for creating a new repository
 */
export interface RepositoryOptions {
  /**
   * The name of the repository
   */
  readonly name: string;

  /**
   * The description of the repository
   *
   * @defualt - No description
   */
  readonly description?: string;

  /**
   * An array of external connections associated with the repository
   *
   * @see https://docs.aws.amazon.com/codeartifact/latest/ug/external-connection.html
   */
  readonly externalConnections?: ExternalConnection[];

  /**
    * The document that defines the permissions policy for the repository
    */
  readonly permissionsPolicyDocument?: iam.PolicyDocument;

  /**
    * An array of upstream repositories associated with the repository
    *
    * @see https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html
    */
  readonly upstreams?: IRepository[];
}

/**
 * The properties of a CodeArtifact Repository
 */
export interface RepositoryProps extends RepositoryOptions {
  /**
   * The domain that the repository will be created in
   */
  readonly domain: domain.IDomain;
}

/**
 * A CodeArtifact domain.
 */
export class Repository extends RepositoryBase {
  /**
   * Reference an existing repository by its ARN
   */
  public static fromRepositoryArn(scope: Construct, id: string, repositoryArn: string): IRepository {
    return Repository.fromRepositoryAttributes(scope, id, {
      repositoryArn,
    });
  }

  /**
   * Reference an existing repository by its attributes
   */
  public static fromRepositoryAttributes(scope: Construct, id: string, attrs: RepositoryAttributes): IRepository {
    if (!attrs.repositoryArn && (!attrs.repositoryName && !attrs.repositoryDomainName)) {
      throw new Error('Either repositoryArn or both repositoryName and repositoryDomainName must be specified');
    };

    const stack = Stack.of(scope);

    let repositoryDomain: domain.IDomain;

    if (!attrs.domain) {
      if (attrs.repositoryDomainName) {
        repositoryDomain = domain.Domain.fromDomainAttributes(stack, 'domain', {
          domainName: attrs.repositoryDomainName,
        });
      }

      if (attrs.repositoryArn) {
        repositoryDomain = domain.Domain.fromDomainAttributes(stack, 'domain', {
          domainName: repositoryParseArn(attrs.repositoryArn).resourceName!.split('/')[0],
        });
      }
    }

    class Import extends RepositoryBase {
      repositoryArn = attrs.repositoryArn ?? '';
      repositoryName = attrs.repositoryName ?? '';
      repositoryDomainName = attrs.repositoryDomainName || attrs.domain?.domainName || repositoryDomain?.domainName;
      repositoryDomainOwner = attrs.repositoryDomainOwner || attrs.domain?.domainOwner;
      domain = attrs.domain || repositoryDomain;
    }

    const repository = new Import(scope, id);

    if (attrs.repositoryArn) {
      repository.repositoryName = attrs.repositoryName ?? repositoryParseArn(attrs.repositoryArn).resourceName!.split('/')[1];
    }

    if (attrs.repositoryName && attrs.repositoryDomainName && !attrs.repositoryArn) {
      repository.repositoryArn = stack.formatArn(repositoryArnComponentsFromNames(attrs.repositoryName, attrs.repositoryDomainName));
    }

    return repository;
  }

  /**
   * The underlying CfnRepository.
   */
  public readonly cfnRepository: codeartifact.CfnRepository;

  /**
   * The ARN of the repository
   */
  public readonly repositoryArn: string;

  /**
   * The name of the repository
   */
  public readonly repositoryName: string;

  /**
   * The name of the domain that contains the repository
   */
  public readonly repositoryDomainName?: string;

  /**
   * The account that owns the domain that contains the repository
   */
  public readonly repositoryDomainOwner?: string;

  /**
   * The name of the repository domain
   */
  public readonly domain: domain.IDomain;

  constructor(scope: Construct, id: string, props: RepositoryProps) {
    super(scope, id);

    const upstreams: string[] = [];
    if (props.upstreams) {
      props.upstreams.forEach(upstream => {
        upstreams.push(upstream.repositoryName);
      });
    };

    this.cfnRepository = new codeartifact.CfnRepository(this, 'Resource', {
      domainName: props.domain.domainName,
      repositoryName: props.name,
      description: props.description,
      domainOwner: props.domain.domainOwner,
      externalConnections: props.externalConnections,
      permissionsPolicyDocument: props.permissionsPolicyDocument,
      upstreams,
    });

    this.repositoryArn = this.cfnRepository.attrArn;
    this.repositoryName = this.cfnRepository.attrName;
    this.repositoryDomainName = this.cfnRepository.attrDomainName;
    this.repositoryDomainOwner = this.cfnRepository.attrDomainOwner;
    this.domain = props.domain;
  }
}
