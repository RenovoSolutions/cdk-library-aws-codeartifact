import { ArnComponents, Arn, ArnFormat } from 'aws-cdk-lib';

export function domainArnComponentsFromName(domainName: string): ArnComponents {
  return {
    service: 'codeartifact',
    resource: 'domain',
    resourceName: domainName,
  };
}

export function kmsKeyArnComponentsFromId(keyId: string): ArnComponents {
  return {
    service: 'kms',
    resource: 'key',
    resourceName: keyId,
  };
}

export function domainParseArn(repositoryArn: string): ArnComponents {
  return Arn.split(repositoryArn, ArnFormat.SLASH_RESOURCE_NAME);
}
