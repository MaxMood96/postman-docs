---
title: "Test requests in Postman using the Echo API"
updated: 2023-07-31
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "10 Postman Features Everyone Should Know"
    url: "https://blog.postman.com/10-postman-features-everyone-should-know/"
  - type: link
    name: "Introducing Postman’s WebSocket Echo Service"
    url: "https://blog.postman.com/introducing-postman-websocket-echo-service/"

---

You can use the Postman Echo service to test requests in Postman. The Echo service returns a JSON response that includes all details from the request you sent, including any data items you included.

Many Postman learning resources, including the documentation here in the Learning Center, use the Echo service because it provides a quick way to send a request without worrying about authentication or request configuration. If you want to learn how to do something in Postman without connecting to a "real" API, you can use the Echo service.

## Using the Echo API

The Echo API includes endpoints to test different request methods, parameters, authentication, and a variety of supporting utilities.

To test the Echo API in a REST request, do the following:

1. Open a new request in Postman and enter the path `https://postman-echo.com/get` in the URL box:

1. Select the `GET` method, then select __Send__.

The Echo API will return a JSON object that has details from the request.

![Postman Echo response](https://assets.postman.com/postman-docs/v10/postman-echo-api-response-v10.jpg)

## Echo for other protocols

You can also use the Postman echo service with protocols other than REST:

* GraphQL: `https://graphql.postman-echo.com/graphql`
* gRPC: `grpc.postman-echo.com`
* WebSocket: `wss://ws.postman-echo.com/raw`
* SocketIO: `wss://ws.postman-echo.com/socketio`

## Next steps

To continue working with the Echo service:

* View the full documentation for the Echo service at [https://postman-echo.com/](https://postman-echo.com/) to learn more about advanced Echo service features.
* You can fork the [Echo collection](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation) to use pre-built requests to the API. You can also edit the requests in the forked collection to suit your needs.
