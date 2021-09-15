# Issue 367

Steps to reproduce [issue 367](https://github.com/awslabs/aws-solutions-constructs/issues/367) after cloning the repository:

1. `cd cdk`
1. `npm ci`
1. `npx cdk synth`

### Result

```shell script
$ npx cdk synth
Cannot read property 'metadata' of undefined
Subprocess exited with error 1
```

## Extra debugging

```shell script
$ ts-node bin/cdk.ts

/Users/tmarcinkowski/work_personal/demo-aws-solutions-constructs-issue-367/cdk/node_modules/@aws-solutions-constructs/core/lib/utils.ts:144
  if (resource.cfnOptions.metadata?.cfn_nag?.rules_to_suppress) {
                          ^
TypeError: Cannot read property 'metadata' of undefined
    at Object.addCfnSuppressRules (/Users/tmarcinkowski/work_personal/demo-aws-solutions-constructs-issue-367/cdk/node_modules/@aws-solutions-constructs/core/lib/utils.ts:144:27)
    at updateSecurityPolicy (/Users/tmarcinkowski/work_personal/demo-aws-solutions-constructs-issue-367/cdk/node_modules/@aws-solutions-constructs/core/lib/cloudfront-distribution-helper.ts:31:3)
    at Object.CloudFrontDistributionForS3 (/Users/tmarcinkowski/work_personal/demo-aws-solutions-constructs-issue-367/cdk/node_modules/@aws-solutions-constructs/core/lib/cloudfront-distribution-helper.ts:99:3)
    at new CloudFrontToS3 (/Users/tmarcinkowski/work_personal/demo-aws-solutions-constructs-issue-367/cdk/node_modules/@aws-solutions-constructs/aws-cloudfront-s3/lib/index.ts:55:20)
    at new Issue367Stack (/Users/tmarcinkowski/work_personal/demo-aws-solutions-constructs-issue-367/cdk/bin/cdk.ts:11:9)
    at Object.<anonymous> (/Users/tmarcinkowski/work_personal/demo-aws-solutions-constructs-issue-367/cdk/bin/cdk.ts:16:1)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Module.m._compile (/Users/tmarcinkowski/.nvm/versions/node/v14.17.0/lib/node_modules/ts-node/src/index.ts:1225:23)
    at Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/tmarcinkowski/.nvm/versions/node/v14.17.0/lib/node_modules/ts-node/src/index.ts:1228:12)

``` 

```shell script
$ npx cdk --version
1.120.0 (build 6c15150)
```

```shell script
$ npm ls @aws-cdk/core aws-cdk @aws-cdk/assert @aws-solutions-constructs/aws-cloudfront-s3
cdk@0.1.0 /Users/tmarcinkowski/work_personal/demo-aws-solutions-constructs-issue-367/cdk
├─┬ @aws-cdk/assert@1.120.0 
│ └── @aws-cdk/core@1.120.0 
├── @aws-cdk/core@1.120.0 
├─┬ @aws-solutions-constructs/aws-cloudfront-s3@1.120.0 
│ ├─┬ @aws-cdk/aws-certificatemanager@1.120.0
│ │ ├─┬ @aws-cdk/aws-cloudwatch@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-iam@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-route53@1.120.0
│ │ │ ├── @aws-cdk/core@1.120.0 
│ │ │ └─┬ @aws-cdk/custom-resources@1.120.0
│ │ │   ├─┬ @aws-cdk/aws-cloudformation@1.120.0
│ │ │   │ └── @aws-cdk/core@1.120.0 
│ │ │   └── @aws-cdk/core@1.120.0 
│ │ └── @aws-cdk/core@1.120.0 
│ ├─┬ @aws-cdk/aws-cloudfront@1.120.0
│ │ ├─┬ @aws-cdk/aws-ec2@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-kms@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-ssm@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ └── @aws-cdk/core@1.120.0 
│ ├─┬ @aws-cdk/aws-cloudfront-origins@1.120.0
│ │ ├─┬ @aws-cdk/aws-elasticloadbalancingv2@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ └── @aws-cdk/core@1.120.0 
│ ├─┬ @aws-cdk/aws-lambda@1.120.0
│ │ ├─┬ @aws-cdk/aws-applicationautoscaling@1.120.0
│ │ │ ├─┬ @aws-cdk/aws-autoscaling-common@1.120.0
│ │ │ │ └── @aws-cdk/core@1.120.0 
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-codeguruprofiler@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-ecr@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-ecr-assets@1.120.0
│ │ │ ├─┬ @aws-cdk/assets@1.120.0
│ │ │ │ └── @aws-cdk/core@1.120.0 
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-efs@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-events@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-logs@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-s3-assets@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-signer@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ ├─┬ @aws-cdk/aws-sqs@1.120.0
│ │ │ └── @aws-cdk/core@1.120.0 
│ │ └── @aws-cdk/core@1.120.0 
│ ├─┬ @aws-cdk/aws-s3@1.120.0
│ │ └── @aws-cdk/core@1.120.0 
│ ├── @aws-cdk/core@1.120.0 
│ └─┬ @aws-solutions-constructs/core@1.120.0
│   ├─┬ @aws-cdk/aws-apigateway@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-cognito@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-dynamodb@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-elasticsearch@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-glue@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-iot@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-kinesis@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-kinesisanalytics@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-kinesisfirehose@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-lambda-event-sources@1.120.0
│   │ ├─┬ @aws-cdk/aws-sns-subscriptions@1.120.0
│   │ │ └── @aws-cdk/core@1.120.0 
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-mediastore@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-s3-notifications@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-sagemaker@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-secretsmanager@1.120.0
│   │ ├─┬ @aws-cdk/aws-sam@1.120.0
│   │ │ └── @aws-cdk/core@1.120.0 
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-sns@1.120.0
│   │ ├─┬ @aws-cdk/aws-codestarnotifications@1.120.0
│   │ │ └── @aws-cdk/core@1.120.0 
│   │ └── @aws-cdk/core@1.120.0 
│   ├─┬ @aws-cdk/aws-stepfunctions@1.120.0
│   │ └── @aws-cdk/core@1.120.0 
│   └── @aws-cdk/core@1.120.0 
└── aws-cdk@1.120.0 
```

```shell script
$ npx --version
6.14.13
```

```shell script
$ ts-node --version
v10.1.0
```
