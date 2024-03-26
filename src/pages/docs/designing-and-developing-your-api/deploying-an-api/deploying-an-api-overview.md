---
title: "Manage API deployments in Postman"
updated: 2024-01-30
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Deploying APIs | Postman Enterprise"
    url: "https://youtu.be/plykCPwt32M"
  - type: link
    name: "API Lifecycle, Part 2: Monitor and Deploy an API | Postman Intergalactic"
    url: "https://youtu.be/voAUfBx8fnE"
  - type: link
    name: "Testing and Deploying APIs with Docker and Postman"
    url: "https://www.youtube.com/live/AB78LyHtmHU?feature=share"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"
---

Postman enables you to manage your API deployments by connecting to an API gateway. When you connect Postman to an API gateway, you can track your API deployment status and history. Postman offers integration with popular API gateways, such as [Apigee X](https://cloud.google.com/apigee), [Amazon API Gateway](https://aws.amazon.com/api-gateway/), and [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/).

## Contents

* [Connecting to an API Gateway](#connecting-to-an-api-gateway)
* [Viewing API deployments in Postman](#viewing-api-deployments-in-postman)

## Connecting to an API gateway

To connect to an API gateway in Postman, select **APIs** in the sidebar and select an API. Select **Deployments**, then select **Apigee X**, **AWS API Gateway**, or **Microsoft Azure**.

Enter the required information to configure the API gateway integration. For more information, see the detailed steps for your API gateway:

* [Deploying to an Apigee API gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/)
* [Deploying to an Amazon API Gateway](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/)
* [Deploying to Azure API Management](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/)

![Connecting to an API Gateway](https://assets.postman.com/postman-docs/v10/api-builder-connect-deployments-v10-22-1.jpg)

## Viewing API deployments in Postman

After connecting to an API gateway, you can view the deployment history for your API definitions in Postman. Select **APIs** in the sidebar and select an API, then select **Deployments**.

* **Apigee X** - View details about your Apigee API proxy and proxy endpoints. You can also view details about your Apigee environments. Learn more about [Viewing Apigee X deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/#viewing-apigee-x-deployments).
* **Amazon API Gateway** - View the active deployment for each stage, recent exports from Postman, and details about each deployment. You can also export or deploy your HTTP API definition from Postman to your gateway. Learn more about [Viewing Amazon API gateway deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/#viewing-amazon-api-gateway-deployments).
* **Azure API Management** - View deployments for each of your Azure API Management services. You can view the revision history, changelog, and export history. You can also export your API definition from Postman to Azure API Management. Learn more about [Viewing Azure API deployments](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/#viewing-azure-api-deployments).
