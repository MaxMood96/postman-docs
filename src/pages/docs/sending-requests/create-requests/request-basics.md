---
title: "Send a request with the Postman API client"
updated: 2024-02-05
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Part 1: Send a Request"
    url: "https://youtu.be/2oOSnxZ28fA"
  - type: link
    name: "How to use an API? | Intro to APIs Part 2"
    url:  "https://youtu.be/woRuedXZyi4"
---

The Postman API client enables you to send API requests using HTTP, GraphQL, gRPC, or other common protocols. To create a new request, specify the request URL and the request method, such as `GET` or `POST`. After you save the request, you can share it with your team.

## Contents

* [Create a new request](#create-a-new-request)
    * [Select request protocols](#select-request-protocols)
    * [Specify request URLs](#specify-request-urls)
    * [Select request methods](#select-request-methods)
* [Send a request](#send-a-request)
* [Share your requests](#share-your-requests)

## Create a new request

Your requests can include multiple details determining the data Postman will send to the API you are working with. Enter a URL and choose a method, then optionally specify a variety of other details.

You can create a new request from a workspace, by using **New > HTTP**, or by selecting **+** to open a new tab.

<img alt="Create new request" src="https://assets.postman.com/postman-docs/v10/create-new-http-v10-6.jpg" width="500px"/>

Select **Save** to save your request. You can give your request a name and description, and choose or create a [collection](/docs/sending-requests/create-requests/intro-to-collections/) to save it in.

Once your new tab is open, you can specify the details you need for your request. You will need to know the URL and method. You can also specify optional values such as authorization, parameters and body data, and headers.

To test sending a request in Postman, you can set the URL to the Postman Echo sample API endpoint `https://postman-echo.com/get` and the method to `GET`, then select __Send__.

<img alt="New Request" src="https://assets.postman.com/postman-docs/v10/empty-request-v10-21-11.jpg" />

> You can turn on autosave to automatically save your changes to collections, requests, and environments. Learn more about [autosave](/docs/getting-started/installation/settings/#application).

### Select request protocols

You can change the protocol for a new request. Select **New** in the sidebar and then select a request protocol, or select **+** to open a new tab. Select the protocol dropdown menu to the left of the request's name, and then select a different request protocol.

In addition to HTTP, Postman supports sending requests using [GraphQL](/docs/sending-requests/graphql/graphql-overview/), [gRPC](/docs/sending-requests/grpc/grpc-client-overview/), [WebSocket](/docs/sending-requests/websocket/websocket-overview/), [MQTT](/docs/sending-requests/mqtt-client/mqtt-client-overview/), and [SOAP](/docs/sending-requests/soap/making-soap-requests/) protocols.

<img alt="Select protocol" src="https://assets.postman.com/postman-docs/v10/select-protocol-v10.jpg" width="200px" />

> You can't change the request protocol after you select **Save**.

### Specify request URLs

Each request you send in Postman requires a URL representing the API endpoint you are working with. Each operation you can perform using an API is typically associated with an endpoint. Each endpoint in an API is available at a particular URL. This is what you enter into Postman to access the API.

* If you're building an API, the URL will typically be the base location plus path. For example, in the request `https://postman-echo.com/get`, `https://postman-echo.com` is the base URL, and `/get` is the endpoint path.
* If you're using a third-party API, your API provider will supply the URLs you need, for example within their developer documentation.

When you start typing in the URL box, Postman will present a dropdown list of locations you've used before, which you can use to autocomplete.

> Postman will automatically add `http://` to the start of your URL if you don't specify a protocol.

You can optionally enter _query_ parameters in the URL box, or you can enter them in the **Params** tab. If your request uses _path_ parameters, you can enter them in the URL box. Learn more about [sending parameters and body data with API requests in Postman](/docs/sending-requests/create-requests/parameters/).

> You can use [next generation URL encoding](/docs/sending-requests/create-requests/request-settings/#encode-your-request-urls) in your requests.

### Select request methods

By default, Postman will select the `GET` method for new request. `GET` methods are typically for retrieving data from an API. You can use a variety of other methods to send data to your APIs, including the following most common options:

* `POST` - add new data
* `PUT` - replace existing data
* `PATCH` - update some existing data fields
* `DELETE` - delete existing data

<img alt="Request Methods" src="https://assets.postman.com/postman-docs/v10/request-methods-v10-2.jpg" width="340px"/>

For example, if you're working with an API for a to-do list application, you might use a `GET` method to retrieve the current list of tasks. Then you can use a `POST` method to create a new task, or you can use a `PUT` or `PATCH` method to edit an existing task.

Postman supports a number of extra request methods by default, and you can use custom methods. Select the method dropdown list, edit the method name text, and save your new method. To delete a method, hover over it in the list and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.

> To test the `https://postman-echo.com/get` endpoint, leave the `GET` method selected and select __Send__.

The same location (sometimes called _route_) can provide more than one endpoint by accepting different methods. For example, an API might have a `POST` `/customer` endpoint for adding a new customer, and a `GET` `/customer` endpoint for retrieving an existing customer.

## Send a request

After you specify the request protocol, method, and URL, add any other details required by the API you're sending the request to:

* Specify any [parameters and body data](/docs/sending-requests/create-requests/parameters/) or request [headers](/docs/sending-requests/create-requests/headers/) you need to send with the request.
* Set up any required [authentication and authorization](/docs/sending-requests/authorization/authorization/).
* You can also [use cookies with your requests](/docs/sending-requests/response-data/cookies/) by selecting **Cookies** (under **Send**).

After you enter all the request details, select **Send** to send the request to the API server. You can view the response from the server in the response pane. Learn more about [API response structure in Postman](/docs/sending-requests/response-data/responses/).

You can view requests you've sent in **History** in the sidebar and send them again. You can also save and organize requests in a [collection](/docs/sending-requests/create-requests/intro-to-collections/).

<img alt="Send a request" src="https://assets.postman.com/postman-docs/v10/send-first-request-v10-21-11.jpg">

## Share your requests

You can share requests with collaborators by opening the request you want to share in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the request, then select **Share**. Learn more about [sharing your work in Postman](/docs/collaborating-in-postman/sharing/).

<img alt="Share request" src="https://assets.postman.com/postman-docs/v10/share-request-v10-21.jpg"/>

> <img alt="Collections icon" src="https://assets.postman.com/postman-docs/Collections.png#icon" width="24px"> To try out a collection template that has a typical REST API, select [REST API Basics](https://www.postman.com/templates/ddb19591-3097-41cf-82af-c84273e56719/REST-API-basics).
