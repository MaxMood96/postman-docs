---
title: "GraphQL in Postman"
updated: 2023-11-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working with GraphQL APIs in Postman"
    url: "https://youtu.be/xV2Ujx0iUlw?si=U8moFWv1M22pnrs5"
  - type: link
    name: "GraphQL introspection | Postman Level Up"
    url: "https://youtu.be/k-j3FwTjJkE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Don’t Panic: A Developer’s Guide to Building Secure GraphQL APIs"
    url: "https://blog.postman.com/how-to-build-secure-graphql-apis/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Public GraphQL APIs"
    url: "https://www.postman.com/cs-demo/workspace/9e8c8a19-bb76-46af-9e8d-5747bf8fcce5"
  - type: link
    name: "GraphQL Examples"
    url:  "https://www.postman.com/devrel/workspace/f12c0652-9c9d-4813-968b-c8ed0b3f0022"
  - type: link
    name: "Working with GraphQL collection"
    url: "https://www.postman.com/postman/workspace/postman-team-collections/collection/1559645-c0dd3eb3-5258-4ddd-a6e4-2780c5212e33?ctx=documentation"
warning: false

---

Postman can make requests using GraphQL, an open-source query language and runtime for APIs.

## Contents

* [About GraphQL](#about-graphql)
* [GraphQL requests](#graphql-requests)
* [The Postman GraphQL client](#the-postman-graphql-client)
* [Next steps](#next-steps)

## About GraphQL

APIs that support GraphQL enable clients to ask the server for only the data they need, using GraphQL’s powerful query language and runtime. Unlike REST, which uses multiple endpoints to access different data sets, GraphQL streamlines querying by accessing all data through a single endpoint.

GraphQL is schema-driven, providing insight into an API’s functionality and reducing dependency between teams building the client and the server. A client can introspect the schema from the server to see the available data fields, and then send queries specifying which fields to retrieve or manipulate. The server returns or modifies only the data requested in the query, which prevents overfetching or underfetching data.

## GraphQL requests

Every GraphQL request has a URL and a query. The URL is the endpoint where the data is hosted, and the query defines what data to retrieve or manipulate. The API’s schema defines available data fields. The request can also contain authentication, headers, and settings based on the requirements specified by the API.

GraphQL requests can perform three types of operations:

* **Query** - Retrieves data from the server. Queries specify the required data fields and can include arguments for more precise data retrieval.

* **Mutation** - Manipulates data on the server, including creating, updating, or deleting records. Mutations specify the fields to be returned after the operation and use arguments to detail the manipulation.

* **Subscription** - Gets real-time data updates from the server. Subscriptions enable clients to listen to specific data fields and receive updates automatically over a persistent connection.

## The Postman GraphQL client

Postman's [GraphQL client](/docs/sending-requests/graphql/graphql-client-interface/) loads automatically when you create a new GraphQL request. The GraphQL client interface is specifically designed for crafting GraphQL requests, enabling you to explore an API's data fields and construct queries by selecting fields.

> You can also make GraphQL requests using Postman's regular request interface. To learn more, see [Make an HTTP call with GraphQL](/docs/sending-requests/graphql/graphql-http/).

## Next steps

To learn more about the GraphQL client and making GraphQL requests, see the following topics:

* [Create GraphQL requests in Postman](/docs/sending-requests/graphql/graphql-client-first-request/)
* [The GraphQL client interface](/docs/sending-requests/graphql/graphql-client-interface/)
