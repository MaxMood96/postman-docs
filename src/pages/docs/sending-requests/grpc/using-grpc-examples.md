---
title: "Save, edit, and share gRPC request-response examples"
updated: 2023-02-09
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working with gRPC | The Exploratory"
    url: "https://youtu.be/RbHOs2xchGE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Show your gRPC APIs in action with examples"
    url: "https://blog.postman.com/show-your-grpc-apis-in-action-with-examples/"
---

You can save, edit, and share gRPC request-response pairs as [examples](/docs/sending-requests/response-data/examples/). You can even create gRPC examples from scratch.

APIs can be complex, and so can the guidelines for using them. Examples help you understand APIs by capturing the request sent from the client and the response received from the server in a single visual snapshot. You can combine these snapshots in a request and store the request in a collection to illustrate how the API functions under different scenarios. Examples help API producers tell the world beautifully what their API is about.

## Contents

* [Saving a gRPC example](#saving-a-grpc-example)
* [Editing a gRPC example](#editing-a-grpc-example)
* [Creating a gRPC example from scratch](#creating-a-grpc-example-from-scratch)
* [Creating example-specific documentation](#creating-example-specific-documentation)

## Saving a gRPC example

This walkthrough creates and executes a unary request, then saves the response as a gRPC example.

> If you are using the Postman web app, you must use the Postman Desktop Agent. See [About the Postman Agent](/docs/getting-started/basics/about-postman-agent/) for more information.

1. In Postman, select  **New > gRPC** to open a request in a new tab.

1. Select **Enter Server URL** and enter `grpc.postman-echo.com`.

1. Select the **Select a method** dropdown list. When the list of methods has loaded, select **SayHello**.

    ![New gRPC request](https://assets.postman.com/postman-docs/v10/using-server-reflection-v10-22.jpg)

1. Save the gRPC request to a collection.

    > gRPC examples can't be saved unless the request is in a collection.

1. Select **Invoke**. A `reply` message appears in the response section.

1. Select **Save as Example**. The saved example opens in a new tab and you can see the saved example under the request in the sidebar.

    ![gRPC Save example button](https://assets.postman.com/postman-docs/v10/grpc-save-example-v10-22-1.jpg)

## Editing a gRPC example

This walkthrough edits a gRPC example.

1. [Create a unary gRPC request, save it in a collection, and save a gRPC example.](#saving-a-grpc-example)

1. Select the gRPC example in the sidebar.

1. In the response section, select the **Status code** dropdown and select **2 UNKNOWN**. The response updates automatically.

    > The status codes are automatically populated based on the protobuf schema.

    ![Select a status code](https://assets.postman.com/postman-docs/v10/grpc-save-example-2status-2-v10-22.jpg)

1. Select **Save**.

## Creating a gRPC example from scratch

This walkthrough uses a streaming method to create a gRPC example. Note how streaming method messages differ from unary method messages.

1. Create a gRPC request with the `LotsOfReplies` method (or any streaming method) and save it in a collection.

1. Hover over the gRPC request you created and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Add example**. An empty example opens in the workbench and appears below the request in the sidebar.

1. Select the **Add a Message** dropdown and select **Message stream**. This creates a sample message stream automatically using the message structure defined in the protobuf schema.

    ![Select Message stream](https://assets.postman.com/postman-docs/v10/grpc-create-example-3stream-3-v10-22.jpg)

1. Select **Save**.

## Creating example-specific documentation

1. [Create a gRPC request, save it in a collection, and save a gRPC example.](#saving-a-grpc-example)

1. Select the gRPC example in the sidebar.

1. In the right sidebar, select the the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px">.

1. Select **Add example description**.

1. Enter your documentation for the gRPC example. Your documentation automatically saves.

## Using messages from saved examples

While invoking a request, you can work with message payloads stored in the examples. This not only enables you to test the example scenarios by yourself, but also speeds up your debugging workflow.

This walkthrough shows how you can invoke a client streaming request with messages stored in the examples:

1. Create a gRPC request with the `LotsOfGreetings` method, and save it in a collection.

1. [Create an example for the request](#creating-a-grpc-example-from-scratch) with two different `"greeting"` messages.

    ![Create an example](https://assets.postman.com/postman-docs/v10/grpc-example-message1-2-v10-22.jpg)

1. Select the request and select **Invoke**.

1. Select the dropdown next to **Use Example Message**. Both messages from the example appear.

    ![Example messages](https://assets.postman.com/postman-docs/v10/grpc-example-message2-2-v10-22.jpg)

1. Select a message from the dropdown list and select **Send**.

1. Open the dropdown again and select a different message.
