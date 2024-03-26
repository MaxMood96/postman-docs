---
title: "Create an API in Postman"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Designing APIs | Postman Enterprise"
    url: "https://youtu.be/IRl40Nl8dwo"
  - type: link
    name: "Postman Intergalactic | Design and Prototype an API in Postman"
    url: "https://youtu.be/r4kb3jOSsmk"
  - type: link
    name: "API Builder | The Exploratory"
    url: "https://youtu.be/BUZiRtGRHj0"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to build an API"
    url: "https://blog.postman.com/how-to-build-an-api/"
---

To start using the API Builder, you can create a new API in your workspace. You can also upgrade, rename, or delete existing APIs.

> You must be signed in to your Postman account to create an API.

## Contents

* [Creating an API](#creating-an-api)
* [Upgrading an API](#upgrading-an-api)
* [Renaming an API](#renaming-an-api)
* [Deleting an API](#deleting-an-api)

## Creating an API

1. Select **APIs** in the sidebar and select **+**.

    <img alt="Create a new API" src="https://assets.postman.com/postman-docs/v10/api-builder-create-v10.jpg" width ="382px"/>

1. Enter a name for your new API.
1. Select an option for creating your API:

    * Connect to a Git repository and import your API definitions and collections into Postman. Learn more about [API version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/).
    * Continue without a repository.

1. To start working with your new API:

    * [Create a new API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-an-example-api-definition) for your API.
    * [Use a collection as a starting point for your API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/). Select a collection in your workspace you want to use and add a copy of it to your API. You can also create new collections in your API.
    * [Import an existing API definition](/docs/designing-and-developing-your-api/importing-an-api/) from a file, a folder, a code repository, or an API gateway.

> Postman supports OpenAPI (versions 1.0, 2.0, 3.0, and 3.1), RAML (0.8 and 1.0), protobuf (protocol buffer) (2.0 and 3.0), GraphQL, or WSDL (1.0 and 2.0) definitions. OpenAPI definitions can be JSON or YAML. RAML definitions must be YAML. Protobuf definitions are `.proto` files. GraphQL definitions can be JSON or GraphQL SDL. WSDL definitions must be XML.

## Upgrading an API

> **Postman recommends upgrading your APIs to the latest format.** The Postman v9 API format has been deprecated. If you have v9 APIs, you can upgrade them to the v10 format. After upgrading, you can continue working with your APIs in Postman. In the future, all APIs that are still in v9 format will be automatically upgraded to v10.
>
> The Postman API v9 endpoints have also been deprecated. Any workflows that use the v9 endpoints will no longer work with an API that's been upgraded to the v10 format. Instead, use the [new Postman API v10 endpoints](/docs/developer/postman-api/intro-api/#about-v9-and-v10-apis) for your workflows.

Postman v10 can display APIs created in prior versions of Postman. To work with the API in Postman v10, you need to upgrade the API to the new v10 format. You'll be prompted to upgrade the API when you make changes to it, for example, adding a collection, adding a definition, or connecting to a Git repository. Select **Upgrade this API** to complete the upgrade.

<img alt="Upgrading an API to v10" src="https://assets.postman.com/postman-docs/v10/api-builder-upgrade-v10.jpg" width ="618px"/>

There are some differences in the way API versions work in Postman v10 compared to v9:

* In Postman v9, versions were major iterations of your API you could work on at the same time. In Postman v10, [published versions](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/) are static representations of your API that consumers can reference (like releases in Postman v9).
* If you need to work on more than one major iteration of your API in Postman v10, create separate APIs.
* If an API created in Postman v9 had multiple versions, each version will appear as a separate API in Postman v10. For example, if you had an API named `sample-api` with two versions `v1` and `v2`, they would appear as `sample-api:v1` and `sample-api:v2`.

## Renaming an API

To change the name of an API, select **APIs** in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an API and select **Rename**. You can also select the API name in the overview tab and enter a new name.

## Deleting an API

> You must have the [Admin role for an API](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) or the [Workspace Admin role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) to delete an API.

1. Select **APIs** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an API and select **Delete**.

When you delete an API, the following items are deleted with it:

* API definitions or collections contained in the API
* Published API versions (including versions published to the Private API Network)
* The Private API Network listing for the API
* Integrations configured for the API
