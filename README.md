# AWS::CodeArtifact Construct Library
<!--BEGIN STABILITY BANNER-->

---

![cfn-resources: Stable](https://img.shields.io/badge/cfn--resources-stable-success.svg?style=for-the-badge)

> All classes with the `Cfn` prefix in this module ([CFN Resources]) are always stable and safe to use.
>
> [CFN Resources]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html#constructs_lib

![cdk-constructs: Experimental](https://img.shields.io/badge/cdk--constructs-experimental-important.svg?style=for-the-badge)

> The APIs of higher level constructs in this module are experimental and under active development.
> They are subject to non-backward compatible changes or removal in any future version. These are
> not subject to the [Semantic Versioning](https://semver.org/) model and breaking changes will be
> announced in the release notes. This means that while you may use them, you may need to update
> your source code when upgrading to a newer version of this package.

---

<!--END STABILITY BANNER-->

AWS CodeArtifact is a fully managed artifact repository service that makes it easy for organizations of any size to securely store, publish, and share software packages used in their software development process. CodeArtifact can be configured to automatically fetch software packages and dependencies from public artifact repositories so developers have access to the latest versions. CodeArtifact works with commonly used package managers and build tools like Maven, Gradle, npm, yarn, twine, pip, and NuGet making it easy to integrate into existing development workflows.

For further information on AWS CodeArtifact, see the [AWS CodeArtifact documentation](https://docs.aws.amazon.com/codeartifact/).

Add a CodeArtifact Domain to your stack:

```ts
import * as codeartifact from '@renovosolutions/cdk-library-aws-codeartifact';

new codeartifact.Domain(stack, 'domain', { domainName: 'example-domain' });
```

Add a CodeArtifact Repository to your stack:

```ts
import * as codeartifact from '@renovosolutions/cdk-library-aws-codeartifact';

const domain = new codeartifact.Domain(stack, 'domain', { domainName: 'example-domain' });
const repository = new codeartifact.Repository(stack, 'repository', {
    repositoryName: 'repository',
    domain,
});
```

It is also possible to use the `addRepository` method on `codeartifact.Domain` to add a repository.

```ts
import * as codeartifact from '@renovosolutions/cdk-library-aws-codeartifact';

const domain = new codeartifact.Domain(stack, 'domain', { domainName: 'example-domain' });

domain.addRepository('repo', {
  repositoryName: 'repository'
});

```
