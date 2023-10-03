import { Stack, App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Domain } from '../lib/domain';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  createDomain(stack);

  expect(Template.fromStack(stack)).toMatchSnapshot();
});

test('Create Domain', () => {
  const stack = new Stack();

  createDomain(stack);

  Template.fromStack(stack).hasResourceProperties('AWS::CodeArtifact::Domain', {
    DomainName: 'example',
  });
});

test('Create Domain from Arn', () => {
  const stack = new Stack();

  const domain = Domain.fromDomainArn(stack, 'domain', 'arn:aws:codeartifact:us-east-1:123456789012:domain/example');

  expect(domain.domainName?.toString()).toBe('example');

  // Imported resource should not be in the template
  Template.fromStack(stack).resourceCountIs('AWS::CodeArtifact::Domain', 0);
});

test('Create Domain from Attributes', () => {
  const stack = new Stack();

  const domain = Domain.fromDomainAttributes(stack, 'domain', {
    domainName: 'example',
  });

  expect(domain.domainName?.toString()).toBe('example');

  // Imported resource should not be in the template
  Template.fromStack(stack).resourceCountIs('AWS::CodeArtifact::Domain', 0);
});

function createDomain(stack: Stack) {
  const domain = new Domain(stack, 'domain', {
    name: 'example',
  });

  return { domain };
}
