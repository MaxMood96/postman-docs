---
title: "Send API requests and get response data in Postman"
updated: 2024-02-06
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
  - type: link
    name: "Upload a File via POST Request | Postman Level Up"
    url: "https://youtu.be/S7bwkys6D0E"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing file storage for tests and requests"
    url: "https://blog.postman.com/introducing-file-storage-for-tests-and-requests/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman Answers"
    url:  "https://www.postman.com/postman/workspace/aa5fb3b8-0090-4b5e-b3b4-fa5c1f2d080d"
---

Whether you're building or testing your own API, or integrating with a third-party API, you can send requests in Postman to connect to APIs you're working with. Your requests can retrieve, add, or delete data, and can send parameters and authorization details.

For example, if you're building a client application (such as a mobile or web app) for a store, you might send one request to retrieve the list of available products, another request to create a new order (including the selected product details), and yet another request to log a customer in to their account.

When you send a request, Postman displays the response received from the API server in a way that lets you examine, visualize, and troubleshoot it.

<img alt="Request builder with a successful response" src="https://assets.postman.com/postman-docs/v10/postman-request-builder-v10-21-11.jpg" />

## Get started sending requests

> If you've never sent a request before, check out [sending your first request](/docs/getting-started/first-steps/sending-the-first-request/) before you continue.

View the following topics to get started sending API requests in Postman:

* To learn the basics of building requests—including adding parameters, headers, and body data—go to [Create and send API requests in Postman](/docs/sending-requests/create-requests/create-requests/).

* If the API you're connecting to requires verifying your identity or access, you can learn more about [API authentication and authorization in Postman](/docs/sending-requests/authorization/authorization/).

* Postman provides tools for viewing or visualizing API response data and for managing cookies. To learn more, go to [Work with API response data and cookies in Postman](/docs/sending-requests/response-data/response-data/).

* Variables enable you to use reuse data throughout your requests and change values based on your working environment. To learn more, go to [Reuse data with variables and environments in Postman](/docs/sending-requests/variables/variables-intro/).

* You can capture and inspect API traffic using Postman's built-in proxy or Postman Interceptor. To learn more, go to [Capture HTTP traffic and sync cookies in Postman](/docs/sending-requests/capturing-request-data/capture-overview/).

* In addition to sending HTTP requests, you can use Postman to send API requests using different protocols including [GraphQL](/docs/sending-requests/graphql/graphql-overview/), [gRPC](/docs/sending-requests/grpc/grpc-client-overview/), [WebSocket](/docs/sending-requests/websocket/websocket-overview/), [MQTT](/docs/sending-requests/mqtt-client/mqtt-client-overview/), and [SOAP](/docs/sending-requests/soap/making-soap-requests/).
