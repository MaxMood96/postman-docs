---
title: "Test and debug values in gRPC requests using JavaScript in Postman"
updated: 2023-04-12
---

Postman has a powerful scripting environment that enables you to add JavaScript code (scripts) in your gRPC requests. You can define scripts for two hooks available during the request execution lifecycle:

* Before invoking the method and establishing a connection with the server, in the **Before invoke** tab.
* After closing the connection with the server, in the **After response** tab.

You can use scripts to write API tests, debug your requests (by logging to [Postman Console](/docs/sending-requests/response-data/troubleshooting-api-requests/), or dynamically read/update the values of [variables](/docs/sending-requests/variables/variables/).

![gRPC scripts](https://assets.postman.com/postman-docs/v10/grpc-scripts-v10-22.jpg)

This is all powered by the [Postman Sandbox](/docs/sending-requests/grpc/postman-sandbox-api/), a JavaScript execution environment available to you while writing your **Before invoke** and **After response** scripts. Whatever code you write in these scripts is executed in the sandbox.

To learn more about writing tests, see [writing tests](/docs/writing-scripts/test-scripts/).
