#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { OAwsLambdaVersionCdkStack } from '../lib/o-aws-lambda-version-cdk-stack';

const app = new cdk.App();
new OAwsLambdaVersionCdkStack(app, 'OAwsLambdaVersionCdkStack');
