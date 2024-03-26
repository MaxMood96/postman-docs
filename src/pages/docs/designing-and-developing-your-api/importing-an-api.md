---
title: "Import an API into Postman"
updated: 2022-10-18
search_keyword: "import, aws, api gateway"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Import Multi File API Definitions | Postman Level Up"
    url: "https://youtu.be/RqVJV9LQORc"
  - type: link
    name: "Import OpenAPI definitions from Azure API Management to Postman"
    url: "https://youtu.be/0XWReDRibmU"
  - type: link
    name: "Designing APIs | Postman Enterprise"
    url: "https://youtu.be/IRl40Nl8dwo"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Bring your APIs into Postman faster than ever"
    url: "https://blog.postman.com/bring-your-apis-into-postman-faster-than-ever/"
  - type: link
    name: "Stay on Top of Your API Deployments: AWS API Gateway Integration"
    url: "https://blog.postman.com/deployments-aws-api-gateway-integration/"
---

You can import an existing API definition into Postman. API definitions can be imported from a local file or directory, a URL, raw text, or an API gateway.

> You can also import an API definition from a code repository. Learn more about [importing data from a Git repository](/docs/getting-started/importing-and-exporting/importing-from-git/).

## Contents

* [Import an API definition](#import-an-api-definition)
* [Import a multi-file API definition](#import-a-multi-file-api-definition)
* [Import API definitions from Amazon API Gateway](#import-api-definitions-from-amazon-api-gateway)
* [Import API definitions from Azure API Management](#import-api-definitions-from-azure-api-management)
* [Supported API definitions formats](#supported-api-definitions-formats)

## Import an API definition

1. In Postman, select **Import** in the sidebar.

1. Select an API definition file, enter a link to the API, or paste your raw text.

1. You can choose to import the definition as a collection or as an API along with a collection.

    <img alt="API definition import options" src="https://assets.postman.com/postman-docs/v10/import-definition-options-v10-19.jpg" width="651px" />

    > Select **View Import Settings** for more configuration options. These options will vary depending on your API specification.

1. Select **Import**.

1. An **Import Complete** message displays in the footer. In the message, select the link icon <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> next to a collection or API  to open the imported element.

      <img alt="Import complete message" src="https://assets.postman.com/postman-docs/v10/import-complete-message-v10-19.jpg" width="697px" />

## Import a multi-file API definition

1. In Postman, select **Import** in the sidebar.

1. Select **folders**, then select a local folder with your API files.

1. Select the files you want to import into Postman. By default, API definitions are imported as collections. Select the **Import (API specification) files** checkbox to import the definition as an API along with a collection.

    <img alt="File import options" src="https://assets.postman.com/postman-docs/v10/import-files-options-v10-19.jpg" width="651px" />

    > Select **View Import Settings** for more configuration options. These options will vary depending on your API specification.

1. Select **Import**.

1. An **Import Complete** message displays in the footer. In the message, select the link icon <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> next to a collection or API  to open the imported element.

      <img alt="Import complete message" src="https://assets.postman.com/postman-docs/v10/import-complete-message-v10-19.jpg" width="697px" />

> To learn more about working with multi-file API definitions, see [Working with multi-file API definitions](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#working-with-multi-file-api-definitions).

## Import API definitions from Amazon API Gateway

[Amazon API Gateway](https://aws.amazon.com/api-gateway/) enables developers to publish and manage APIs that access AWS and other web services and data sources. You can import APIs directly from AWS Gateway to Postman. This creates an integration with API Gateway. Once connected, you can view your API deployment status and history from within Postman. You can also view [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) metrics for each stage to get operational insight into your API.

This integration supports importing OpenAPI 3.0 definitions for both HTTP and REST APIs. Importing a definition will create a new API in Postman and will also configure an integration with AWS API Gateway.

To import an API from AWS API Gateway, do the following:

1. Select **Import** in the sidebar, then select **Other Sources > AWS API Gateway**.
1. Connect to the AWS API Gateway as follows.

When importing an API from AWS API Gateway, you can choose to authenticate by creating an AWS IAM role or by using an AWS access key. Follow the steps for your chosen method:

* [Authenticate with an AWS IAM role](#authenticate-with-an-aws-iam-role)
* [Authenticate with an AWS access key](#authenticate-with-an-aws-access-key)

### Authenticate with an AWS IAM role

To set up a connection to Amazon API Gateway using an AWS IAM role, do the following:

1. Select **IAM** under **AWS Authentication Mechanism**.

    <img alt="Connecting with AWS IAM role" src="https://assets.postman.com/postman-docs/import-from-api-gateway-with-iam-role-v9.jpg" width="484px" />

1. Select the **AWS API Type** (HTTP or REST).

To create an IAM role for Postman in AWS, do the following:

1. Open the [AWS IAM console](https://console.aws.amazon.com/iam/home#/roles) and select **Create role**.
1. Under **Select type of trusted entity**, select **Another AWS account**.
1. Enter Postman's **AWS Account ID**: `258201882842`
1. Under options, select the **Require external ID** checkbox and enter the **External ID** from Postman. You can find the external ID under **Step 1: Create an IAM role**.

    > For more information, refer to the [AWS IAM guide on using external IDs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html).

1. Select **Next: Permissions**.
1. Select an existing IAM policy or select **Create policy**. If you are creating a policy, use the following JSON code:

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "Stmt909923626743",
                "Effect": "Allow",
                "Action": [
                    "apigateway:GET",
                    "apigateway:PUT",
                    "apigateway:POST",
                    "cloudwatch:GetMetricData"
                ],
                "Resource": [
                    "*"
                ]
            }
        ]
    }
    ```

    This policy will enable exporting and deploying for HTTP API definitions. (Exporting and deploying aren't supported for REST API definitions.) You can customize the `Action` section in the IAM policy based on your needs:

    * `"apigateway:GET"` - (Required) Enables viewing API Gateway deployments for HTTP and REST APIs in Postman.
    * `"apigateway:PUT"` - Enables [exporting](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/#exporting-and-deploying-your-api) HTTP API definitions to the API Gateway.
    * `"apigateway:POST"` - Enables [deploying](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/#exporting-and-deploying-your-api) HTTP API definitions to a stage on the API Gateway.
    * `"apigateway:*"` - Assigns all GET, PUT, POST, PATCH, DELETE permissions to the IAM role.
    * `"cloudwatch:GetMetricData"` - Enables [viewing CloudWatch metrics](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/#viewing-cloudwatch-metrics) in Postman.

1. Select **Next: Tags**.
1. Select **Next: Review**.
1. Add a **Role name** and **Role description**, then select **Create role**.

Copy the **Role ARN** from AWS and paste it in Postman under **Step 2: Enter role ARN and region**. Next, enter the **AWS Region** where the API Gateway is located and select the **API Gateway**. Then, enter an **API Name** for the imported API. When you're ready, select **Connect**.

### Authenticate with an AWS access key

To set up a connection to Amazon API Gateway using an AWS access key, select **Access Key** under **AWS Authentication Mechanism**.

<img alt="Connecting with AWS access key" src="https://assets.postman.com/postman-docs/import-from-api-gateway-with-access-key.jpg" width="483px" />

Next, enter information about the connection:

* Select the **AWS API Type** (HTTP or REST).
* Enter the **Access Key ID** and **Secret Access Key** for your AWS account. (Learn how to [find your credentials in AWS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html).)
* Enter the **AWS Region** where the API Gateway is located and select the **API Gateway**.
* Enter an **API Name** for the imported API.

When you're ready, select **Import**. After importing your API definition, you can [view API deployments in Postman](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/).

## Import API definitions from Azure API Management

You can import a definition from a connected Azure API Management service to an API in Postman. Importing a definition will create a new API in Postman and will also configure an integration with Azure API Management. Learn more about [integrating with Azure API Management](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/).

To import an API definition from Azure API Management, do the following:

1. Select **Import** in the sidebar, then select **Other Sources > Azure API Management**.
1. You'll be prompted to authorize Postman to access your Microsoft Azure account. After you grant access, you can close the browser tab and return to Postman.
1. Enter information about the Azure API Management service you want to import a definition from:

    * **Subscription** - The [subscription](https://docs.microsoft.com/en-us/azure/api-management/api-management-subscriptions) where the service was created.
    * **Resource Group** - The [resource group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) that has the service.
    * **Service** - The Azure API Management [service instance](https://docs.microsoft.com/en-us/azure/api-management/api-management-key-concepts) used for deploying your API.
    * **Azure API Version** - The Azure API [version](https://docs.microsoft.com/en-us/azure/api-management/api-management-versions) you want to import.
    * **Definition type** - Select the specification for the definition you want to import (OpenAPI 2.0 or OpenAPI 3.0).
    * **API name** - The name to use for the new API that will be created in Postman using the imported definition.

1. Select **Import**.

    <img alt="Importing an API definition from Azure API Management" src="https://assets.postman.com/postman-docs/v10/import-definition-from-azure-apim-v10-0-25.jpg" width="523px"/>

## Supported API definitions formats

Postman directly supports importing the following formats:

* [OpenAPI 3.0 and 3.1](https://github.com/postmanlabs/openapi-to-postman)
* Swagger [1.2](https://github.com/postmanlabs/swagger1-to-postman) and [2.0](https://github.com/postmanlabs/swagger2-postman2-lambda)
* Protobuf 2 and 3
* [GraphQL](https://github.com/postmanlabs/graphql-to-postman)
* [cURL](https://github.com/postmanlabs/curl-to-postman)
* RAML [0.8](https://github.com/postmanlabs/raml-to-postman) and [1.0](https://github.com/postmanlabs/raml1-to-postman)
* [WSDL 1.1 and 2.0](https://github.com/postmanlabs/wsdl-to-postman)
* [HTTP Archive (HAR)](https://github.com/postmanlabs/har-to-postman)
* Web Application Description Language (WADL)

There are also tools on GitHub to convert different API specifications into a Postman Collection that can be imported:

* [`runscope-to-postman`](https://github.com/postmanlabs/runscope-to-postman)

* [`DHC-to-postman`](https://github.com/postmanlabs/dhc-to-postman)
