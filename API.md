# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Domain <a name="Domain" id="@renovosolutions/cdk-library-aws-codeartifact.Domain"></a>

- *Implements:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain">IDomain</a>

A CodeArtifact domain.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.Initializer"></a>

```typescript
import { Domain } from '@renovosolutions/cdk-library-aws-codeartifact'

new Domain(scope: Construct, id: string, props: DomainProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.DomainProps">DomainProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.DomainProps">DomainProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.addRepository">addRepository</a></code> | Add a repository to this domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.grantRead">grantRead</a></code> | Grant read permissions to the given principal on this domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.grantReadWrite">grantReadWrite</a></code> | Grant read and write permissions to the given principal on this domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.grantWrite">grantWrite</a></code> | Grant write permissions to the given principal on this domain. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addRepository` <a name="addRepository" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.addRepository"></a>

```typescript
public addRepository(id: string, props: RepositoryOptions): IRepository
```

Add a repository to this domain.

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.addRepository.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.addRepository.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions">RepositoryOptions</a>

---

##### `grantRead` <a name="grantRead" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.grantRead"></a>

```typescript
public grantRead(principal: IGrantable): Grant
```

Grant read permissions to the given principal on this domain.

###### `principal`<sup>Required</sup> <a name="principal" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.grantRead.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantReadWrite` <a name="grantReadWrite" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.grantReadWrite"></a>

```typescript
public grantReadWrite(principal: IGrantable): Grant
```

Grant read and write permissions to the given principal on this domain.

###### `principal`<sup>Required</sup> <a name="principal" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.grantReadWrite.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.grantWrite"></a>

```typescript
public grantWrite(principal: IGrantable): Grant
```

Grant write permissions to the given principal on this domain.

###### `principal`<sup>Required</sup> <a name="principal" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.grantWrite.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.fromDomainArn">fromDomainArn</a></code> | Reference an existing domain by its ARN. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.fromDomainAttributes">fromDomainAttributes</a></code> | Import an existing domain given its attributes. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.isConstruct"></a>

```typescript
import { Domain } from '@renovosolutions/cdk-library-aws-codeartifact'

Domain.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.isOwnedResource"></a>

```typescript
import { Domain } from '@renovosolutions/cdk-library-aws-codeartifact'

Domain.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.isResource"></a>

```typescript
import { Domain } from '@renovosolutions/cdk-library-aws-codeartifact'

Domain.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromDomainArn` <a name="fromDomainArn" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.fromDomainArn"></a>

```typescript
import { Domain } from '@renovosolutions/cdk-library-aws-codeartifact'

Domain.fromDomainArn(scope: Construct, id: string, domainArn: string)
```

Reference an existing domain by its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.fromDomainArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.fromDomainArn.parameter.id"></a>

- *Type:* string

---

###### `domainArn`<sup>Required</sup> <a name="domainArn" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.fromDomainArn.parameter.domainArn"></a>

- *Type:* string

---

##### `fromDomainAttributes` <a name="fromDomainAttributes" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.fromDomainAttributes"></a>

```typescript
import { Domain } from '@renovosolutions/cdk-library-aws-codeartifact'

Domain.fromDomainAttributes(scope: Construct, id: string, attrs: DomainAttributes)
```

Import an existing domain given its attributes.

Either `domainArn` or `domainName` is required.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.fromDomainAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.fromDomainAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.fromDomainAttributes.parameter.attrs"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes">DomainAttributes</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.property.cfnDomain">cfnDomain</a></code> | <code>aws-cdk-lib.aws_codeartifact.CfnDomain</code> | The underlying CfnDomain resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.property.domainArn">domainArn</a></code> | <code>string</code> | The ARN of the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.property.domainName">domainName</a></code> | <code>string</code> | The name of the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.property.domainEncryptionKey">domainEncryptionKey</a></code> | <code>string</code> | The key used to encrypt the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.property.domainOwner">domainOwner</a></code> | <code>string</code> | The account that owns the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The key used to encrypt the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.property.readActions">readActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain.property.writeActions">writeActions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `cfnDomain`<sup>Required</sup> <a name="cfnDomain" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.property.cfnDomain"></a>

```typescript
public readonly cfnDomain: CfnDomain;
```

- *Type:* aws-cdk-lib.aws_codeartifact.CfnDomain

The underlying CfnDomain resource.

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

The ARN of the domain.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the domain.

---

##### `domainEncryptionKey`<sup>Optional</sup> <a name="domainEncryptionKey" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.property.domainEncryptionKey"></a>

```typescript
public readonly domainEncryptionKey: string;
```

- *Type:* string

The key used to encrypt the domain.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

The account that owns the domain.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The key used to encrypt the domain.

---

##### `readActions`<sup>Required</sup> <a name="readActions" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.property.readActions"></a>

```typescript
public readonly readActions: string[];
```

- *Type:* string[]

---

##### `writeActions`<sup>Required</sup> <a name="writeActions" id="@renovosolutions/cdk-library-aws-codeartifact.Domain.property.writeActions"></a>

```typescript
public readonly writeActions: string[];
```

- *Type:* string[]

---


### Repository <a name="Repository" id="@renovosolutions/cdk-library-aws-codeartifact.Repository"></a>

- *Implements:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository">IRepository</a>

A CodeArtifact domain.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.Initializer"></a>

```typescript
import { Repository } from '@renovosolutions/cdk-library-aws-codeartifact'

new Repository(scope: Construct, id: string, props: RepositoryProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps">RepositoryProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps">RepositoryProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.grantRead">grantRead</a></code> | Grant read permissions to the given principal on this repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.grantReadWrite">grantReadWrite</a></code> | Grant read and write permissions to the given principal on this repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.grantWrite">grantWrite</a></code> | Grant write permissions to the given principal on this respository. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grantRead` <a name="grantRead" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.grantRead"></a>

```typescript
public grantRead(principal: IGrantable): Grant
```

Grant read permissions to the given principal on this repository.

###### `principal`<sup>Required</sup> <a name="principal" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.grantRead.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantReadWrite` <a name="grantReadWrite" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.grantReadWrite"></a>

```typescript
public grantReadWrite(principal: IGrantable): Grant
```

Grant read and write permissions to the given principal on this repository.

###### `principal`<sup>Required</sup> <a name="principal" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.grantReadWrite.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.grantWrite"></a>

```typescript
public grantWrite(principal: IGrantable): Grant
```

Grant write permissions to the given principal on this respository.

###### `principal`<sup>Required</sup> <a name="principal" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.grantWrite.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.fromRepositoryArn">fromRepositoryArn</a></code> | Reference an existing repository by its ARN. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.fromRepositoryAttributes">fromRepositoryAttributes</a></code> | Reference an existing repository by its attributes. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.isConstruct"></a>

```typescript
import { Repository } from '@renovosolutions/cdk-library-aws-codeartifact'

Repository.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.isOwnedResource"></a>

```typescript
import { Repository } from '@renovosolutions/cdk-library-aws-codeartifact'

Repository.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.isResource"></a>

```typescript
import { Repository } from '@renovosolutions/cdk-library-aws-codeartifact'

Repository.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromRepositoryArn` <a name="fromRepositoryArn" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.fromRepositoryArn"></a>

```typescript
import { Repository } from '@renovosolutions/cdk-library-aws-codeartifact'

Repository.fromRepositoryArn(scope: Construct, id: string, repositoryArn: string)
```

Reference an existing repository by its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.fromRepositoryArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.fromRepositoryArn.parameter.id"></a>

- *Type:* string

---

###### `repositoryArn`<sup>Required</sup> <a name="repositoryArn" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.fromRepositoryArn.parameter.repositoryArn"></a>

- *Type:* string

---

##### `fromRepositoryAttributes` <a name="fromRepositoryAttributes" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.fromRepositoryAttributes"></a>

```typescript
import { Repository } from '@renovosolutions/cdk-library-aws-codeartifact'

Repository.fromRepositoryAttributes(scope: Construct, id: string, attrs: RepositoryAttributes)
```

Reference an existing repository by its attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.fromRepositoryAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.fromRepositoryAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.fromRepositoryAttributes.parameter.attrs"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes">RepositoryAttributes</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.property.cfnRepository">cfnRepository</a></code> | <code>aws-cdk-lib.aws_codeartifact.CfnRepository</code> | The underlying CfnRepository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.property.domain">domain</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain">IDomain</a></code> | The name of the repository domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.property.repositoryArn">repositoryArn</a></code> | <code>string</code> | The ARN of the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.property.repositoryDomainName">repositoryDomainName</a></code> | <code>string</code> | The name of the domain that contains the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.property.repositoryDomainOwner">repositoryDomainOwner</a></code> | <code>string</code> | The account that owns the domain that contains the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.property.readActions">readActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository.property.writeActions">writeActions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `cfnRepository`<sup>Required</sup> <a name="cfnRepository" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.property.cfnRepository"></a>

```typescript
public readonly cfnRepository: CfnRepository;
```

- *Type:* aws-cdk-lib.aws_codeartifact.CfnRepository

The underlying CfnRepository.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.property.domain"></a>

```typescript
public readonly domain: IDomain;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain">IDomain</a>

The name of the repository domain.

---

##### `repositoryArn`<sup>Required</sup> <a name="repositoryArn" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.property.repositoryArn"></a>

```typescript
public readonly repositoryArn: string;
```

- *Type:* string

The ARN of the repository.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name of the repository.

---

##### `repositoryDomainName`<sup>Optional</sup> <a name="repositoryDomainName" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.property.repositoryDomainName"></a>

```typescript
public readonly repositoryDomainName: string;
```

- *Type:* string

The name of the domain that contains the repository.

---

##### `repositoryDomainOwner`<sup>Optional</sup> <a name="repositoryDomainOwner" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.property.repositoryDomainOwner"></a>

```typescript
public readonly repositoryDomainOwner: string;
```

- *Type:* string

The account that owns the domain that contains the repository.

---

##### `readActions`<sup>Required</sup> <a name="readActions" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.property.readActions"></a>

```typescript
public readonly readActions: string[];
```

- *Type:* string[]

---

##### `writeActions`<sup>Required</sup> <a name="writeActions" id="@renovosolutions/cdk-library-aws-codeartifact.Repository.property.writeActions"></a>

```typescript
public readonly writeActions: string[];
```

- *Type:* string[]

---


## Structs <a name="Structs" id="Structs"></a>

### DomainAttributes <a name="DomainAttributes" id="@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes"></a>

Attributes of a domain.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes.Initializer"></a>

```typescript
import { DomainAttributes } from '@renovosolutions/cdk-library-aws-codeartifact'

const domainAttributes: DomainAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes.property.domainArn">domainArn</a></code> | <code>string</code> | The ARN of the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes.property.domainEncryptionKey">domainEncryptionKey</a></code> | <code>string</code> | The key used to encrypt the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes.property.domainName">domainName</a></code> | <code>string</code> | The name of the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes.property.domainOwner">domainOwner</a></code> | <code>string</code> | The account that owns the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The key used to encrypt the domain. |

---

##### `domainArn`<sup>Optional</sup> <a name="domainArn" id="@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

The ARN of the domain.

---

##### `domainEncryptionKey`<sup>Optional</sup> <a name="domainEncryptionKey" id="@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes.property.domainEncryptionKey"></a>

```typescript
public readonly domainEncryptionKey: string;
```

- *Type:* string

The key used to encrypt the domain.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the domain.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

The account that owns the domain.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@renovosolutions/cdk-library-aws-codeartifact.DomainAttributes.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The key used to encrypt the domain.

---

### DomainProps <a name="DomainProps" id="@renovosolutions/cdk-library-aws-codeartifact.DomainProps"></a>

The properties for a new domain.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-codeartifact.DomainProps.Initializer"></a>

```typescript
import { DomainProps } from '@renovosolutions/cdk-library-aws-codeartifact'

const domainProps: DomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.DomainProps.property.name">name</a></code> | <code>string</code> | A string that specifies the name of the requested domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.DomainProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The key used to encrypt the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.DomainProps.property.permissionsPolicyDocument">permissionsPolicyDocument</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The document that defines the resource policy that is set on a domain. |

---

##### `name`<sup>Required</sup> <a name="name" id="@renovosolutions/cdk-library-aws-codeartifact.DomainProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A string that specifies the name of the requested domain.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@renovosolutions/cdk-library-aws-codeartifact.DomainProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* An AWS managed key is created automatically.

The key used to encrypt the domain.

---

##### `permissionsPolicyDocument`<sup>Optional</sup> <a name="permissionsPolicyDocument" id="@renovosolutions/cdk-library-aws-codeartifact.DomainProps.property.permissionsPolicyDocument"></a>

```typescript
public readonly permissionsPolicyDocument: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument
- *Default:* No policy is set. The account will have full permissions to the domain.

The document that defines the resource policy that is set on a domain.

---

### RepositoryAttributes <a name="RepositoryAttributes" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes"></a>

Attributes of a repository.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes.Initializer"></a>

```typescript
import { RepositoryAttributes } from '@renovosolutions/cdk-library-aws-codeartifact'

const repositoryAttributes: RepositoryAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes.property.domain">domain</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain">IDomain</a></code> | The domain that contains the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes.property.repositoryArn">repositoryArn</a></code> | <code>string</code> | The ARN of the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes.property.repositoryDomainName">repositoryDomainName</a></code> | <code>string</code> | The name of the domain that contains the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes.property.repositoryDomainOwner">repositoryDomainOwner</a></code> | <code>string</code> | The account that owns the domain that contains the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of the repository. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes.property.domain"></a>

```typescript
public readonly domain: IDomain;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain">IDomain</a>

The domain that contains the repository.

---

##### `repositoryArn`<sup>Optional</sup> <a name="repositoryArn" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes.property.repositoryArn"></a>

```typescript
public readonly repositoryArn: string;
```

- *Type:* string

The ARN of the repository.

---

##### `repositoryDomainName`<sup>Optional</sup> <a name="repositoryDomainName" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes.property.repositoryDomainName"></a>

```typescript
public readonly repositoryDomainName: string;
```

- *Type:* string

The name of the domain that contains the repository.

---

##### `repositoryDomainOwner`<sup>Optional</sup> <a name="repositoryDomainOwner" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes.property.repositoryDomainOwner"></a>

```typescript
public readonly repositoryDomainOwner: string;
```

- *Type:* string

The account that owns the domain that contains the repository.

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryAttributes.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name of the repository.

---

### RepositoryOptions <a name="RepositoryOptions" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions"></a>

The options for creating a new repository.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions.Initializer"></a>

```typescript
import { RepositoryOptions } from '@renovosolutions/cdk-library-aws-codeartifact'

const repositoryOptions: RepositoryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions.property.name">name</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions.property.description">description</a></code> | <code>string</code> | The description of the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions.property.externalConnections">externalConnections</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection">ExternalConnection</a>[]</code> | An array of external connections associated with the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions.property.permissionsPolicyDocument">permissionsPolicyDocument</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The document that defines the permissions policy for the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions.property.upstreams">upstreams</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository">IRepository</a>[]</code> | An array of upstream repositories associated with the repository. |

---

##### `name`<sup>Required</sup> <a name="name" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the repository.

---

##### `description`<sup>Optional</sup> <a name="description" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the repository.

---

##### `externalConnections`<sup>Optional</sup> <a name="externalConnections" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions.property.externalConnections"></a>

```typescript
public readonly externalConnections: ExternalConnection[];
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection">ExternalConnection</a>[]

An array of external connections associated with the repository.

> [https://docs.aws.amazon.com/codeartifact/latest/ug/external-connection.html](https://docs.aws.amazon.com/codeartifact/latest/ug/external-connection.html)

---

##### `permissionsPolicyDocument`<sup>Optional</sup> <a name="permissionsPolicyDocument" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions.property.permissionsPolicyDocument"></a>

```typescript
public readonly permissionsPolicyDocument: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The document that defines the permissions policy for the repository.

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions.property.upstreams"></a>

```typescript
public readonly upstreams: IRepository[];
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository">IRepository</a>[]

An array of upstream repositories associated with the repository.

> [https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html](https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html)

---

### RepositoryProps <a name="RepositoryProps" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps"></a>

The properties of a CodeArtifact Repository.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.Initializer"></a>

```typescript
import { RepositoryProps } from '@renovosolutions/cdk-library-aws-codeartifact'

const repositoryProps: RepositoryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.name">name</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.description">description</a></code> | <code>string</code> | The description of the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.externalConnections">externalConnections</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection">ExternalConnection</a>[]</code> | An array of external connections associated with the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.permissionsPolicyDocument">permissionsPolicyDocument</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The document that defines the permissions policy for the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.upstreams">upstreams</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository">IRepository</a>[]</code> | An array of upstream repositories associated with the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.domain">domain</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain">IDomain</a></code> | The domain that the repository will be created in. |

---

##### `name`<sup>Required</sup> <a name="name" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the repository.

---

##### `description`<sup>Optional</sup> <a name="description" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the repository.

---

##### `externalConnections`<sup>Optional</sup> <a name="externalConnections" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.externalConnections"></a>

```typescript
public readonly externalConnections: ExternalConnection[];
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection">ExternalConnection</a>[]

An array of external connections associated with the repository.

> [https://docs.aws.amazon.com/codeartifact/latest/ug/external-connection.html](https://docs.aws.amazon.com/codeartifact/latest/ug/external-connection.html)

---

##### `permissionsPolicyDocument`<sup>Optional</sup> <a name="permissionsPolicyDocument" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.permissionsPolicyDocument"></a>

```typescript
public readonly permissionsPolicyDocument: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The document that defines the permissions policy for the repository.

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.upstreams"></a>

```typescript
public readonly upstreams: IRepository[];
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository">IRepository</a>[]

An array of upstream repositories associated with the repository.

> [https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html](https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html)

---

##### `domain`<sup>Required</sup> <a name="domain" id="@renovosolutions/cdk-library-aws-codeartifact.RepositoryProps.property.domain"></a>

```typescript
public readonly domain: IDomain;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain">IDomain</a>

The domain that the repository will be created in.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IDomain <a name="IDomain" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.Domain">Domain</a>, <a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain">IDomain</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.addRepository">addRepository</a></code> | Add a repository to this domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.grantRead">grantRead</a></code> | Grant read permissions to the given principal on this domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.grantReadWrite">grantReadWrite</a></code> | Grant read and write permissions to the given principal on this domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.grantWrite">grantWrite</a></code> | Grant write permissions to the given principal on this domain. |

---

##### `addRepository` <a name="addRepository" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.addRepository"></a>

```typescript
public addRepository(id: string, props: RepositoryOptions): IRepository
```

Add a repository to this domain.

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.addRepository.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.addRepository.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.RepositoryOptions">RepositoryOptions</a>

---

##### `grantRead` <a name="grantRead" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Grant read permissions to the given principal on this domain.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantReadWrite` <a name="grantReadWrite" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.grantReadWrite"></a>

```typescript
public grantReadWrite(grantee: IGrantable): Grant
```

Grant read and write permissions to the given principal on this domain.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.grantReadWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.grantWrite"></a>

```typescript
public grantWrite(grantee: IGrantable): Grant
```

Grant write permissions to the given principal on this domain.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.grantWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.domainArn">domainArn</a></code> | <code>string</code> | The ARN of the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.domainName">domainName</a></code> | <code>string</code> | The name of the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.domainEncryptionKey">domainEncryptionKey</a></code> | <code>string</code> | The key used to encrypt the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.domainOwner">domainOwner</a></code> | <code>string</code> | The account that owns the domain. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The key used to encrypt the domain. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

The ARN of the domain.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the domain.

---

##### `domainEncryptionKey`<sup>Optional</sup> <a name="domainEncryptionKey" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.domainEncryptionKey"></a>

```typescript
public readonly domainEncryptionKey: string;
```

- *Type:* string

The key used to encrypt the domain.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

The account that owns the domain.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@renovosolutions/cdk-library-aws-codeartifact.IDomain.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The key used to encrypt the domain.

---

### IRepository <a name="IRepository" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.Repository">Repository</a>, <a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository">IRepository</a>

This interface represents a CodeArtifact Repository resource.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository.grantRead">grantRead</a></code> | Grant read permissions to the given principal on this repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository.grantReadWrite">grantReadWrite</a></code> | Grant read and write permissions to the given principal on this repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository.grantWrite">grantWrite</a></code> | Grant write permissions to the given principal on this respository. |

---

##### `grantRead` <a name="grantRead" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Grant read permissions to the given principal on this repository.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantReadWrite` <a name="grantReadWrite" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.grantReadWrite"></a>

```typescript
public grantReadWrite(grantee: IGrantable): Grant
```

Grant read and write permissions to the given principal on this repository.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.grantReadWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.grantWrite"></a>

```typescript
public grantWrite(grantee: IGrantable): Grant
```

Grant write permissions to the given principal on this respository.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.grantWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.domain">domain</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain">IDomain</a></code> | The domain that contains the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.repositoryArn">repositoryArn</a></code> | <code>string</code> | The ARN of the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.repositoryDomainName">repositoryDomainName</a></code> | <code>string</code> | The name of the domain that contains the repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.repositoryDomainOwner">repositoryDomainOwner</a></code> | <code>string</code> | The account that owns the domain that contains the repository. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.domain"></a>

```typescript
public readonly domain: IDomain;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-codeartifact.IDomain">IDomain</a>

The domain that contains the repository.

---

##### `repositoryArn`<sup>Required</sup> <a name="repositoryArn" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.repositoryArn"></a>

```typescript
public readonly repositoryArn: string;
```

- *Type:* string

The ARN of the repository.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name of the repository.

---

##### `repositoryDomainName`<sup>Optional</sup> <a name="repositoryDomainName" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.repositoryDomainName"></a>

```typescript
public readonly repositoryDomainName: string;
```

- *Type:* string

The name of the domain that contains the repository.

---

##### `repositoryDomainOwner`<sup>Optional</sup> <a name="repositoryDomainOwner" id="@renovosolutions/cdk-library-aws-codeartifact.IRepository.property.repositoryDomainOwner"></a>

```typescript
public readonly repositoryDomainOwner: string;
```

- *Type:* string

The account that owns the domain that contains the repository.

---

## Enums <a name="Enums" id="Enums"></a>

### ExternalConnection <a name="ExternalConnection" id="@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection"></a>

CodeArtifact supports an external connection to the following public repositories.

> [https://docs.aws.amazon.com/codeartifact/latest/ug/external-connection.html#supported-public-repositories](https://docs.aws.amazon.com/codeartifact/latest/ug/external-connection.html#supported-public-repositories)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.NPM">NPM</a></code> | npm public registry. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.DOTNET_NUGETORG">DOTNET_NUGETORG</a></code> | NuGet Gallery. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.PYTHON_PYPI">PYTHON_PYPI</a></code> | Python Package Index. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.MAVEN_CENTRAL">MAVEN_CENTRAL</a></code> | Maven Central. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.MAVEN_GOOGLEANDROID">MAVEN_GOOGLEANDROID</a></code> | Google Android repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.MAVEN_GRADLEPLUGINS">MAVEN_GRADLEPLUGINS</a></code> | Gradle plugins repository. |
| <code><a href="#@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.MAVEN_COMMONSWARE">MAVEN_COMMONSWARE</a></code> | CommonsWare Android repository. |

---

##### `NPM` <a name="NPM" id="@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.NPM"></a>

npm public registry.

---


##### `DOTNET_NUGETORG` <a name="DOTNET_NUGETORG" id="@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.DOTNET_NUGETORG"></a>

NuGet Gallery.

---


##### `PYTHON_PYPI` <a name="PYTHON_PYPI" id="@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.PYTHON_PYPI"></a>

Python Package Index.

---


##### `MAVEN_CENTRAL` <a name="MAVEN_CENTRAL" id="@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.MAVEN_CENTRAL"></a>

Maven Central.

---


##### `MAVEN_GOOGLEANDROID` <a name="MAVEN_GOOGLEANDROID" id="@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.MAVEN_GOOGLEANDROID"></a>

Google Android repository.

---


##### `MAVEN_GRADLEPLUGINS` <a name="MAVEN_GRADLEPLUGINS" id="@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.MAVEN_GRADLEPLUGINS"></a>

Gradle plugins repository.

---


##### `MAVEN_COMMONSWARE` <a name="MAVEN_COMMONSWARE" id="@renovosolutions/cdk-library-aws-codeartifact.ExternalConnection.MAVEN_COMMONSWARE"></a>

CommonsWare Android repository.

---

