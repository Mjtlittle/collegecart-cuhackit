import { Stack, StackProps, RemovalPolicy, CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { aws_s3 as s3 } from "aws-cdk-lib";
import { aws_s3_deployment as s3Deploy } from "aws-cdk-lib";
import { aws_cloudfront as cloudfront } from "aws-cdk-lib";

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const frontend_bucket = new s3.Bucket(this, "frontend-bucket", {
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
      cors: [
        {
          allowedOrigins: ["*"],
          allowedMethods: [
            s3.HttpMethods.GET,
            s3.HttpMethods.POST,
            s3.HttpMethods.PUT,
            s3.HttpMethods.DELETE,
            s3.HttpMethods.HEAD,
          ],
        },
      ],
    });

    new CfnOutput(this, "frontBucket", {
      value: frontend_bucket.bucketName,
      description: "",
      exportName: "frontendBucket",
    });

    const frontend_dist = new cloudfront.CloudFrontWebDistribution(
      this,
      `cf-frontend`,
      {
        defaultRootObject: "index.html",
        originConfigs: [
          {
            s3OriginSource: { s3BucketSource: frontend_bucket },
            behaviors: [
              {
                cachedMethods:
                  cloudfront.CloudFrontAllowedCachedMethods.GET_HEAD_OPTIONS,
                isDefaultBehavior: true,
                allowedMethods:
                  cloudfront.CloudFrontAllowedMethods.GET_HEAD_OPTIONS,
              },
            ],
          },
        ],
      }
    );

    new s3Deploy.BucketDeployment(this, "DeployWithInvalidation", {
      sources: [s3Deploy.Source.asset("./site-contents")],

      destinationBucket: frontend_bucket,
      // frontend_dist,
      // distributionPaths: ["/*"],
    });

    // example resource
    // const queue = new sqs.Queue(this, 'CdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
