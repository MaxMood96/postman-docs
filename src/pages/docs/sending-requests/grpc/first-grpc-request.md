---
title: "Invoke a gRPC request in Postman"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "gRPC Requests | Postman Level Up"
    url: "https://youtu.be/gfYGqMb81GQ"
  - type: link
    name: "Working with gRPC | The Exploratory"
    url: "https://youtu.be/RbHOs2xchGE"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Public gRPC APIs"
    url:  "https://www.postman.com/devrel/workspace/public-grpc-apis"
---

To get started with gRPC, create a request and invoke it using an echo endpoint.

## Contents

* [About API requests](#about-api-requests)
* [Creating and invoking a request](#creating-and-invoking-a-request)
* [Next steps](#next-steps)

## About API requests

APIs provide a structured way for one application to access the capabilities of another application. Typically, this communication happens over the internet by way of an API server. A client application (like a mobile app) sends a request to the server, and after the request processes, the server returns a response to the client.

A gRPC request consists of the server URL where the service is hosted, the method to be invoked on the server, and a request payload that has the message and required information on how the request will be executed. Since gRPC is a schema-driven framework, the request also needs to have a service definition (schema) reference that has information on the services, methods, message fields, and data types supported by the server. The client must follow the service definition to avoid errors.

gRPC supports four types of methods that allow the client and server to interact in different ways as per the required use case:

* **Unary** - The traditional request-response communication pattern also seen in HTTP where the client makes a request and the server returns a response.

* **Client streaming** - The client sends a series of messages to the server and the server returns a response after processing them.

* **Server streaming** - The client needs to make a single request for the server to return a response with a stream of messages.

* **Bidirectional streaming** - The client and server can communicate with each other asynchronously over a persistent session.

## Creating and invoking a request

This example will create and execute a unary request. To learn about invoking the other method types, see [Using the gRPC request interface](/docs/sending-requests/grpc/grpc-request-interface/).

> If you are using the Postman web app, Postman recommends using the Postman Desktop Agent for the best experience. See [About the Postman Agent](/docs/getting-started/basics/about-postman-agent/) for more information.

1. In Postman, select  **New > gRPC** to open a request in a new tab. (In the Postman desktop app, you can also select **⌘+N** or **Ctrl+N**, then select **gRPC**.)

    <img src="https://assets.postman.com/postman-docs/v10/create-new-grpc-v10-3.jpg" alt="New gRPC request" width="500px"/>

1. Enter a URL into **Server URL**. For this example, use the Postman gRPC echo service, which is `grpc.postman-echo.com`.

1. Select the **Method selection** dropdown and browse through the supported services and methods. When you enter the URL, Postman automatically loads the service definition using server reflection (if supported by the server). If server reflection isn't supported on the server, you will have to load the service definition manually. Learn more about [working with service definitions](/docs/sending-requests/grpc/using-service-definition/).

1. From the list of methods, scroll down and select **SayHello**. This is a unary method.

1. Go to the **Message area** and select **Generate example message**. This creates a sample message using the service definition itself so that you don’t have to set the correct fields and data types.

1. Replace the sample string data with your name (or any other string) and select **Invoke**.

Once the method is invoked, the server processes the information passed and returns a response.

## Next steps

Try invoking some other methods available on the gRPC bin server and see how things act differently.

When you’re done, learn more about [using the gRPC request interface](/docs/sending-requests/grpc/grpc-request-interface/).
