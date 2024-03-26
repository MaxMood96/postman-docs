---
title: "Mock your API using saved response examples"
updated: 2023-10-23
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Mock Servers | The Exploratory"
    url: "https://youtu.be/n_7UUghLpco"
  - type: link
    name: "Dynamic Mock Behavior | Postman Level Up"
    url: "https://youtu.be/av7SZo9sZAE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Shifting Left with Postman"
    url: "https://blog.postman.com/shifting-left-with-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Axis Bank uses mock servers to expedite development pipelines"
    url: "https://www.postman.com/case-studies/axis-bank/"
---

[Mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) simulate an API by returning predefined data, enabling you to develop or test an API before it's ready for production (or without using production data). In Postman, mock servers rely on [examples](/docs/sending-requests/response-data/examples/) saved in a collection to return mock data. Follow the steps below for a demonstration of how mock servers and examples work together, and to learn how you can integrate them into your API workflow.

## Contents

* [Creating a mock server](#creating-a-mock-server)
    * [Send a request](#send-a-request)
    * [Save the request to a collection](#save-the-request-to-a-collection)
    * [Save a response as an example](#save-a-response-as-an-example)
    * [Create a mock server for the collection](#create-a-mock-server-for-the-collection)
    * [Send a request to the mock server](#send-a-request-to-the-mock-server)
    * [Add another example](#add-another-example)
* [Using query parameters](#using-query-parameters)
* [Mocking GraphQL queries](#mocking-graphql-queries)

## Creating a mock server

The steps below walk you through the process of creating a mock server in Postman. First, you'll set up some basics that are required for mock servers to work. Once your mock server is up and running, you'll send requests to it and learn how your examples are used to return data.

### Send a request

Create an HTTP `GET` request that calls the [Postman Echo](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722) service. You can use this service to test REST or SOAP clients and make sample API calls.

To create and send a request, do the following:

1. Select **New > HTTP**, or select **+** to open a new tab.
1. Select `GET` as the method, and enter `https://postman-echo.com/get?test=123` as the request URL.
1. Select **Send**.

<img alt="Send a request" src="https://assets.postman.com/postman-docs/v10/mock-examples-step1-v10-2.jpg" width="750px">

### Save the request to a collection

Create a new collection and save the request to it. [Collections](/docs/collections/collections-overview/) are groups of requests that you can use to organize your work and create API workflows.

To save the request in a new collection, do the following:

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save the request.

    <img alt="Save a request" src="https://assets.postman.com/postman-docs/v10/mock-examples-step2a-v10.jpg" width="808px">

1. (Optional) Give your request a new name.
1. Select **New Collection** to create a new collection.
1. Enter `C1` for the collection name and select **Create**.
1. Select **Save** to save the request to the new collection.

    <img alt="Save a request to a new collection" src="https://assets.postman.com/postman-docs/v10/mock-examples-step2b-v10.jpg" width="482px">

### Save a response as an example

Save the response you received from the Postman Echo service as an example.

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save as Example**. The example is saved underneath the request in the sidebar, inside the `C1` collection.

    <img alt="Save an example" src="https://assets.postman.com/postman-docs/v10/mock-examples-step3a-v10-2.jpg" width="350px">

1. To rename the example, select the example name and rename the example to `E1`. The request method, URL, and status code are all saved as part of the example. Postman uses these items to decide which responses the mock server returns.

    <img alt="Rename an example" src="https://assets.postman.com/postman-docs/v10/mock-examples-step3c-v10-20.jpg" width="600px">

### Create a mock server for the collection

After you [add an example to your collection](#save-a-response-as-an-example), you can set up the mock server.

> You can also create a mock server [using the Postman API](/docs/designing-and-developing-your-api/mocking-data/mock-with-api/).

To create a mock server for the collection, do the following:

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the `C1` collection, and then select **Mock collection**.

    <img alt="Mock a collection" src="https://assets.postman.com/postman-docs/mock-examples-step4a-v9-1.jpg" width="455px">

1. For **Mock Server Name**, enter `M1`. You can also specify optional details for your mock server, such as the environment if your example uses variables and whether you want to make the mock server private.
1. Select **Create Mock Server**. You can access the mock server by selecting **Mock Servers** in the sidebar.

    <img alt="Create a mock server" src="https://assets.postman.com/postman-docs/v10/mock-examples-step4b-v10.jpg" width="779px">

### Send a request to the mock server

After you [create the mock server](#create-a-mock-server-for-the-collection), you can send a request to the mock endpoint.

1. Select **Mock Servers** in the sidebar.
1. Select the `M1` mock server, then select the copy icon <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to copy the mock server URL.

    <img alt="Copy mock URL" src="https://assets.postman.com/postman-docs/v10/mock-examples-step5a-v10.jpg" width="808px">

1. Create a new request by selecting **New > HTTP**, or selecting **+** to open a new tab.
1. Paste the mock URL as the request URL, then select **Send**.

    <img alt="Mock server error response" src="https://assets.postman.com/postman-docs/v10/mock-examples-step5b-v10-2.jpg" width="750px">

    The request returns an error because the mock server URL doesn't have a path appended to the end. The path appended to the end of the mock server URL must match the path in the example's request URL (`/get`). The method selected in the mock server and example must also match. Responses returned by the mock service depend on the URL and method in your saved examples.

1. To successfully send a request to the mock server, add `/get` to the end of the mock server URL and select **Send**.

    <img alt="Mock server correct response" src="https://assets.postman.com/postman-docs/v10/mock-examples-step5c-v10-2.jpg" width="750px">

### Add another example

You can add another example to test how responses from the mock service depend on saved examples.

1. [Create and send a request](#send-a-request). Select `GET` as the method, and enter `https://postman-echo.com/test` as the request URL.
1. [Save the request](#save-the-request-to-a-collection) to the `C1` collection.
1. [Save the response as an example](#save-a-response-as-an-example). Rename the example to `E2`.

    <img alt="Add a second example" src="https://assets.postman.com/postman-docs/v10/mock-examples-step6a-v10-20.jpg" width="808px">

    The `GET` request to `https://postman-echo.com/test` returns a `404 Not Found` status code.
1. [Send a request to the mock server](#send-a-request-to-the-mock-server). Update the path at the end of the mock server URL to `/test` and select **Send**. The mock server returns the expected `404 Not Found` status code.

    <img alt="Send another request to the mock server" src="https://assets.postman.com/postman-docs/v10/mock-examples-step6b-v10-2.jpg" width="750px">

> **Your examples can vary depending on the URL endpoint, request method, or status code.** If you have multiple examples, you can choose to save each example under a unique endpoint URL, like you saw in this demonstration with `/get` and `/test`. If you have saved examples with different response status codes, you can send an authenticated request to the mock server along with the `x-mock-response-code` header specifying which integer response code your returned response needs to match.

## Using query parameters

Postman's mock service uses a [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) to select the best saved example to return in response to a request. As part of this algorithm, the mock server looks at the request path and its query parameters, matching requests to saved examples. If you have examples with the same request path but different query parameters, you can mock different responses for different query parameters on the same request path.

The following scenario demonstrates how the matching algorithm selects the best saved example:

* The collection **Query Params Demo** has one request **Request1** with two examples: **Example1** and **Example2**.
* In **Example1**, the parameter `id` has a value of `1`.

    <img alt="Query parameters example 1" src="https://assets.postman.com/postman-docs/v10/mock-examples-params1-v10-20.jpg" width="808px">

* In **Example2**, the parameter `id` has a value of `5`.

    <img alt="Query parameters example 2" src="https://assets.postman.com/postman-docs/v10/mock-examples-params2-v10-20.jpg" width="808px">

* In this scenario, **Example1** and **Example2** have the same request path (`/get`) but they each have a query parameter (`id`) with different values. When you send a request to the mock server URL and pass these different query parameters, Postman returns the exact response that matches both the path and the query parameters.

    <img alt="Query parameters mock response" src="https://assets.postman.com/postman-docs/v10/mock-examples-params3-v10-2.jpg" width="808px">

> If no exact match is found, Postman returns the best response based on its [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/).

## Mocking GraphQL queries

Postman's mock service enables you to mock GraphQL queries. To mock GraphQL queries, make a request to the mock server using the request path and request body saved in the examples in the mocked collection.

Make sure to set the `Content-type` header to `application/json` in your examples.

<img alt="Query parameters example 1" src="https://assets.postman.com/postman-docs/v10/mock-examples-graphql1-v10-20.jpg" width="809px">

Also make sure to pass the `x-mock-match-request-body` header with a value of `true` when sending a request to the mock server URL.

<img alt="Query parameters example 1" src="https://assets.postman.com/postman-docs/v10/mock-examples-graphql2-v10.jpg" width="809px">
