import { ArnComponents, Arn, ArnFormat } from 'aws-cdk-lib';

export function repositoryArnComponentsFromNames(repositoryName: string, domainName: string): ArnComponents {
  return {
    service: 'codeartifact',
    resource: 'repository',
    resourceName: `${domainName}/${repositoryName}`,
  };
}

export function repositoryParseArn(repositoryArn: string): ArnComponents {
  return Arn.split(repositoryArn, ArnFormat.SLASH_RESOURCE_NAME);
}
