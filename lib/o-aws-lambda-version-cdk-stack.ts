import * as cdk from '@aws-cdk/core';
import lambda = require('@aws-cdk/aws-lambda');
const sha256 = require('sha256-file');
const path = require('path');

export class OAwsLambdaVersionCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const codePath = path.join(__dirname, 'functions/api');
    const fn = new lambda.Function(this, 'CdkLambdaFunction', {
      functionName: `cdk-lambda-function`,
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(codePath),
    });
    fn.addVersion(sha256(`${codePath}/index.js`));
  }
}
