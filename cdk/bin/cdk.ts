#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CloudFrontToS3 } from '@aws-solutions-constructs/aws-cloudfront-s3';

export class Issue367Stack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props: cdk.StackProps) {
        super(scope, id, props);

        new CloudFrontToS3(this, 'CloudFrontToS3', {});
    }
}

const app = new cdk.App();
new Issue367Stack(app, 'AWS-CDK-Issue367-TMarcinkowski', {});
