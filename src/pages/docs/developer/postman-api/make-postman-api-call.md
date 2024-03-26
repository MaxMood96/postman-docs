---
title: "Access Postman data programmatically"
updated: 2023-06-22
search_keyword: "postman-api"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=iEtsp6o4AJg"
  - type: link
    name: "User Info from the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=k2bvdqxDcsU"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Filtering and Sorting APIs Using the Postman API"
    url: "https://blog.postman.com/filtering-and-sorting-apis-using-the-postman-api/"
  - type: link
    name: "Introducing an API to Access Mock Server Call Logs"
    url: "https://blog.postman.com/introducing-an-api-to-access-mock-server-call-logs/"
  - type: link
    name: "Introducing APIs to Access and Manage Server-Level Responses on a Mock Server"
    url: "https://blog.postman.com/apis-to-access-manage-server-level-responses-mock-server/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman API collection"
    url:  "https://www.postman.com/postman/workspace/postman-public-workspace/collection/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a?ctx=documentation"
  - type: link
    name: "Postman API definition"
    url:  "https://www.postman.com/postman/workspace/postman-public-workspace/api/72a32ca3-f06a-4e83-a933-2821a0e6616f/definition/d429098b-1789-4c62-b77b-cf02024aba53?view=documentation"
---

The Postman API enables you to programmatically access data stored in your Postman account. You can use the API to perform actions such as managing your collections, APIs, workspaces, and more.

> The access rate limits for your Postman account depend on your Postman plan. For more information, see [Postman API rate limits](/docs/developer/postman-api/postman-api-rate-limits/).

This tutorial shows you how to make your first call to the Postman API. You can also learn more about the Postman API by reading the [Postman API documentation](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a). There you will find information to help you get started and information about each endpoint and operation.

## Contents

- [Get your API key](#get-your-api-key)
- [Store your API key as an environment variable](#store-your-api-key-as-an-environment-variable)
- [Make your first request](#make-your-first-request)

## Get your API key

Before you can use the Postman API, you’ll need an API key. An API key is a way to identify who you are when you make a request to the Postman API endpoints. It also lets the system know what you can do with the Postman API. For more details, see the [Generate a Postman API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key).

## Store your API key as an environment variable

After you create your API key, store it as a [Postman environment variable](/docs/sending-requests/variables/managing-environments/#add-environment-variables) named `postman-api-key`. You can use environments to store values that you can later use to make your requests.

For best security practices, make sure that you:

- Store your API key as a [**Secret type** variable](/docs/sending-requests/variables/variables/#variable-types).
- Store your API key as a [**Current value**](/docs/sending-requests/variables/variables/#specifying-variable-detail) so you don’t share it with other team members.

## Make your first request

For your first request, use the `/me` endpoint. This is a basic GET endpoint that does not change any data. It returns information about the user that owns the API key that is being used to authenticate the call.

### Fork the Postman API collection

Before you call the `/me` endpoint, fork the [Postman API collection](https://www.postman.com/postman/workspace/postman-public-workspace/collection/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a?ctx=documentation). [Forking](/docs/collaborating-in-postman/using-version-control/forking-elements/) creates a copy of the collection that you can change but does not affect the parent element.

1. In the Postman API collection you can find the **Fork** option in the overview tab. Select <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> **Fork**. You can also select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection's name, then **Create a fork**.

2. Enter a label for your forked collection in the **Fork label** box. You’ll also need to select the workspace in which to create the forked collection in the **Workspace** box.

    <img src="https://assets.postman.com/postman-docs/v10/postman-api-fork-collection.jpg" alt="Fork the Postman API collection" width="400px"/>

3. Select **Fork Collection** to create the fork. Postman will redirect you to the workspace you selected to create the forked Postman API collection.

### Make the API call

1. In the forked Postman API collection, select the **User** folder. This folder contains the **Get authenticated user** (`/me`) endpoint.

    ![The Postman API collection's folders](https://assets.postman.com/postman-docs/v10/postman-api-collection-folders.jpg)

1. Select the **Get authenticated user** request, then **Send**.

    ![The Get authenticated user endpoint](https://assets.postman.com/postman-docs/v10/postman-api-me-endpoint.jpg)

1. When you select **Send**, Postman returns an HTTP `401 Unauthorized` response. This is because the endpoint requires authorization before it returns information about the API key's owner.

    ![The Invalid API Key authentication error](https://assets.postman.com/postman-docs/v10/postman-api-401-error.jpg)

1. Use the API key that you stored in your Postman environment. To do this, select the environment where you stored your API key.

    ![Select the Postman environment](https://assets.postman.com/postman-docs/v10/postman-api-environment-select.jpg)

1. Select **Send**. Postman will return a successful response.

    ![A successful Get authenticated user endpoint response](https://assets.postman.com/postman-docs/v10/postman-api-success-response.jpg)

Congratulations! You have made your first call to the Postman API.
