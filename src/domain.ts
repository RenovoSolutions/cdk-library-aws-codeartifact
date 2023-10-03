import { IResource, Resource, Stack } from 'aws-cdk-lib';
import * as codeartifact from 'aws-cdk-lib/aws-codeartifact';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import { Construct } from 'constructs';
import { domainArnComponentsFromName, kmsKeyArnComponentsFromId, domainParseArn } from './private/domain-common';
import * as repository from './repository';

export interface IDomain extends IResource {
  /**
   * The ARN of the domain.
   *
   * @attribute
   */
  readonly domainArn: string;
  /**
   * The name of the domain.
   *
   * @attribute
   */
  readonly domainName: string;

  /**
   * The account that owns the domain.
   *
   * @attribute
   */
  readonly domainOwner?: string;

  /**
   * The key used to encrypt the domain.
   *
   * @attribute
   */
  readonly domainEncryptionKey?: string;

  /**
   * The key used to encrypt the domain.
   *
   * @attribute
   */
  readonly encryptionKey?: kms.IKey;

  /**
   * Grant read permissions to the given principal on this domain.
   */
  grantRead(grantee: iam.IGrantable): iam.Grant;

  /**
   * Grant write permissions to the given principal on this domain.
   */
  grantWrite(grantee: iam.IGrantable): iam.Grant;

  /**
   * Grant read and write permissions to the given principal on this domain.
   */
  grantReadWrite(grantee: iam.IGrantable): iam.Grant;

  /**
   * Add a repository to this domain.
   */
  addRepository(id: string, props: repository.RepositoryOptions): repository.IRepository;
}

/**
 * The base domain class
 */
abstract class DomainBase extends Resource implements IDomain {
  public abstract domainArn: string;
  public abstract domainName: string;
  public abstract domainOwner?: string;
  public abstract domainEncryptionKey?: string;
  public abstract encryptionKey?: kms.IKey;

  readActions = [
    'codeartifact:GetDomainPermissionsPolicy',
    'codeartifact:ListRepositoriesInDomain',
    'codeartifact:DescribeDomain',
    'codeartifact:GetAuthorizationToken',
  ];

  writeActions = [
    'codeartifact:CreateRepository',
    'codeartifact:GetAuthorizationToken',
  ];

  private grant(principal: iam.IGrantable, iamActions: string[]): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee: principal,
      actions: iamActions,
      resourceArns: [this.domainArn],
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

  public addRepository(id: string, props: repository.RepositoryOptions): repository.IRepository {
    return new repository.Repository(this, id, {
      ...props,
      domain: this,
    });
  }
}

/**
 * Attributes of a domain
 */
export interface DomainAttributes {
  /**
   * The ARN of the domain.
   */
  readonly domainArn?: string;

  /**
   * The name of the domain.
   */
  readonly domainName?: string;

  /**
   * The account that owns the domain.
   */
  readonly domainOwner?: string;

  /**
   * The key used to encrypt the domain.
   */
  readonly domainEncryptionKey?: string;

  /**
   * The key used to encrypt the domain.
   */
  readonly encryptionKey?: kms.IKey;
}

/**
 * The properties for a new domain.
 */
export interface DomainProps {
  /**
   * A string that specifies the name of the requested domain.
   */
  readonly name: string;

  /**
   * The key used to encrypt the domain.
   *
   * @default - An AWS managed key is created automatically.
   */
  readonly encryptionKey?: kms.IKey;

  /**
   * The document that defines the resource policy that is set on a domain.
   *
   * @default - No policy is set. The account will have full permissions to the domain.
   */
  readonly permissionsPolicyDocument?: iam.PolicyDocument;
}

/**
 * A CodeArtifact domain.
 */
export class Domain extends DomainBase {
  /**
   * Reference an existing domain by its ARN
   */
  public static fromDomainArn(scope: Construct, id: string, domainArn: string): IDomain {
    return Domain.fromDomainAttributes(scope, id, {
      domainArn,
    });
  }

  /**
   * Import an existing domain given its attributes. Either `domainArn` or `domainName` is required.
   */
  public static fromDomainAttributes(scope: Construct, id: string, attrs: DomainAttributes): IDomain {
    if (!attrs.domainArn && !attrs.domainName) {
      throw new Error('Either `domainArn` or `domainName` is required to import a domain.');
    };

    class Import extends DomainBase {
      domainArn = attrs.domainArn ?? '';
      domainName = attrs.domainName ?? '';
      domainOwner = attrs.domainOwner;
      domainEncryptionKey = attrs.domainEncryptionKey;
      encryptionKey = attrs.encryptionKey;
    }

    const domain = new Import(scope, id);

    const stack = Stack.of(scope);

    if (attrs.domainArn && !attrs.domainName) {
      domain.domainName = domainParseArn(attrs.domainArn).resourceName!;
    }

    if (attrs.domainName && !attrs.domainArn) {
      domain.domainArn = stack.formatArn(domainArnComponentsFromName(attrs.domainName));
    }

    if (attrs.domainEncryptionKey && !attrs.encryptionKey) {
      domain.encryptionKey = kms.Key.fromKeyArn(scope, 'EncryptionKey', stack.formatArn(kmsKeyArnComponentsFromId(attrs.domainEncryptionKey)));
    }

    if (!attrs.domainEncryptionKey && attrs.encryptionKey) {
      domain.domainEncryptionKey = domainParseArn(domain.domainArn).resourceName;
    }

    return domain;
  }

  /**
   * The underlying CfnDomain resource.
   */
  public readonly cfnDomain: codeartifact.CfnDomain;

  /**
   * The ARN of the domain.
   */
  public readonly domainArn: string;

  /**
   * The name of the domain.
   */
  public readonly domainName: string;

  /**
   * The account that owns the domain.
   */
  public readonly domainOwner?: string;

  /**
   * The key used to encrypt the domain.
   */
  public readonly domainEncryptionKey?: string;

  /**
   * The key used to encrypt the domain.
   */
  public readonly encryptionKey?: kms.IKey;

  constructor(scope: Construct, id: string, props: DomainProps) {
    super(scope, id);

    this.cfnDomain = new codeartifact.CfnDomain(this, 'Resource', {
      domainName: props.name,
      encryptionKey: props.encryptionKey?.keyId,
      permissionsPolicyDocument: props.permissionsPolicyDocument?.toJSON() ?? undefined,
    });

    this.domainArn = this.cfnDomain.attrArn;
    this.domainName = this.cfnDomain.attrName;
    this.domainOwner = this.cfnDomain.attrOwner;
    this.domainEncryptionKey = this.cfnDomain.attrEncryptionKey;
    this.encryptionKey = props.encryptionKey;

    if (!props.encryptionKey && this.domainEncryptionKey) {
      this.encryptionKey = kms.Key.fromKeyArn(this, 'EncryptionKey', this.stack.formatArn(kmsKeyArnComponentsFromId(this.domainEncryptionKey)));
    }
  }
}
