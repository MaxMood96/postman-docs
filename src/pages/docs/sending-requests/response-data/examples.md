---
title: "Create examples of request responses to illustrate API use cases"
updated: 2023-02-13
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Sending Saved Request Examples | Postman Level Up"
    url: "https://youtu.be/hZ1AkgW6p6U"
  - type: link
    name: "Provide Examples | Postman Level Up"
    url: "https://www.youtube.com/watch?v=C0Z3OMuCGBw&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=5"
---

Examples show your API endpoints in action and give more details on how requests and responses work. You can add an example to a request by saving a response, or you can create an example with a custom response to illustrate a specific use case. Once you've created examples, you can use them to set up a mock server or add more detail to your API documentation.

## Contents

* [Understanding examples](#understanding-examples)
* [Adding an example](#adding-an-example)
    * [Saving a response as an example](#saving-a-response-as-an-example)
    * [Adding a custom example](#adding-a-custom-example)
* [Trying an example](#trying-an-example)
* [Editing an example](#editing-an-example)
* [Sharing an example](#sharing-an-example)
* [Adding comments to an example](#adding-comments-to-an-example)
* [Duplicating an example](#duplicating-an-example)
* [Deleting an example](#deleting-an-example)
* [Using examples in documentation](#using-examples-in-documentation)
* [Next steps](#next-steps)

## Understanding examples

In Postman, an example is a pairing made up of a _request_ and a related _response_. Each example includes a request part (method, URL, parameters, headers, and body) and a response part (status code, body, and headers). You create examples by adding them to requests in collections, and one request can have multiple examples.

Having multiple examples for one request is useful for illustrating the different ways an endpoint can respond to a request. You might have examples that respond with different status codes (such as 200 or 404) or that return different data (or no data at all).

Examples are useful in several ways. Developers and testers can refer to examples to better understand how an endpoint functions in different scenarios. Examples can also be used to [set up mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/), so developers and testers can start [writing code](/docs/writing-scripts/test-scripts/) against your API—even before it's complete. In addition, you can include examples in your API's [public documentation](/docs/publishing-your-api/publishing-your-docs/) to help anyone in the world who uses your API.

## Adding an example

An example is always associated with a [request](/docs/sending-requests/create-requests/create-requests/) in a [collection](/docs/sending-requests/create-requests/intro-to-collections/), and a request can have more than one example. To add an example to a request, send the request and then save the response as an example. You can also manually add an example to a request and define a custom response. After adding an example using either method, you can edit it at any time to make changes.

> For optimal Postman performance, example responses must be smaller than 5 MB.

### Saving a response as an example

When saving a [response](/docs/sending-requests/response-data/responses/) in Postman, you have the option to save it as an example.

1. Select **Collections** in the sidebar.
1. Open a request and select **Send**.
1. In the response pane, select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save as Example**.

    <img alt="Save a response as an example" src="https://assets.postman.com/postman-docs/v10/examples-save-response-v10-22.jpg">

> You can't add examples to WebSocket requests. For WebSocket requests, you can [save messages](/docs/sending-requests/websocket/save-websocket-requests/) with the request.
<!-- -->
> For [gRPC examples](/docs/sending-requests/grpc/using-grpc-examples/) with streaming methods, you must end the stream before saving the response/message stream as an example.

### Adding a custom example

With a custom example, you can define how both the [request](/docs/sending-requests/create-requests/create-requests/) and the [response](/docs/sending-requests/response-data/responses/) look, including the status code and response body.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a request and then select **Add example**.
1. Enter a name for the example.
1. Edit the request part of the example.
    * Add any parameters or headers as needed.
    * Enter the request body and select a content type.
1. Edit the response part of the example.
    * Enter a **Status Code** (such as `200` or `404`).
    * Enter the response body and select a content type.
    * Add any headers as needed.
1. Select **Save** to save the example.

<img alt="Add a custom example" src="https://assets.postman.com/postman-docs/examples-add-custom-v9-1.jpg" width="365px">

## Trying an example

Examples are stored in a collection with their associated requests. You can try an example by opening the example as a request in a new tab.

1. Select **Collections** in the sidebar.
1. Select a request, and then select an example to open it.
1. Select **Try** to open the example as a request in a new tab. The request will automatically send in the new tab.

    ![Trying example](https://assets.postman.com/postman-docs/v10/sending-example-response-v10-22.jpg)

1. Review the request and response details.

    ![Open example as a request](https://assets.postman.com/postman-docs/v10/sending-example-response-duplicate-request-v10-22.jpg)

    > The new request isn't automatically saved.

    The name of the example you're trying is next to the request's name in the workbench. Select the example's name to open it in a separate tab.

    <img alt="Select example name" src="https://assets.postman.com/postman-docs/v10/example-response-name-v10-22.jpg">

1. Optionally, you can select **Save** to save the new request to a new or existing collection in your workspace.
1. Choose a location to save the new request, and then select **Save**.

    <img alt="Save request" src="https://assets.postman.com/postman-docs/v10/sending-example-response-save-request-v10-22.jpg" width="647px">

## Editing an example

You can edit an example at any time to remove sensitive tokens, change the status code, or make any other adjustments.

To edit an example, do the following:

1. Select **Collections** in the sidebar.
1. Select a request, and then select an example to open it.
1. Make any changes to the example request or response.
1. Select **Save** to save the example.

To edit an example after trying it, do the following:

1. Select **Collections** in the sidebar.
1. Select a request, and then select an example to open it.
1. Select **Try** to open the example as a request in a new tab.

    ![Trying example](https://assets.postman.com/postman-docs/v10/sending-example-response-v10-22.jpg)

1. Make any changes to the new request.
1. Select **Send**.
1. In the response pane, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and then select **Update example**. You will receive confirmation once the example is updated.

    ![Updating example](https://assets.postman.com/postman-docs/v10/updating-example-response-v10-22.jpg)

    > The new request isn't automatically saved.

1. Optionally, you can select **Save** to save the new request to a new or existing collection in your workspace.
1. Choose a location to save the new request, and then select **Save**.

    <img alt="Save request" src="https://assets.postman.com/postman-docs/v10/sending-example-response-save-request-v10-22.jpg" width="647px">

## Sharing an example

You can share examples with collaborators by going to the example you want to share in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the example you want to share, then select **Share**.

<img alt="Share example" src="https://assets.postman.com/postman-docs/v10/share-request-v10-22.jpg"/>

For more details about sharing examples, see [Share your work in Postman](/docs/collaborating-in-postman/sharing/).

## Adding comments to an example

1. Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar and enter your comment.
1. (Optional) Select the **Watch collection** checkbox to be notified when there are changes to the collection that the example is in.
1. Select **Comment** to add your comment.

You can learn more about [using comments to collaborate on examples](/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/).

## Duplicating an example

Duplicate an example to add a new example using an existing example as a base. You can then edit the copied example to change the name, status code, or any other part of the request or response.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an example, and then select **Duplicate**.
1. Make any changes to the example request or response.
1. Select **Save** to save the example.

## Deleting an example

Deleting an example removes it from the collection and from the associated API documentation. Any mock servers you have set up can no longer use the example to return a response.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an example, and then select **Delete**.
1. Select **Delete** to confirm.

## Using examples in documentation

Postman automatically [generates documentation](/docs/publishing-your-api/document-a-collection/) for every collection you create. The generated documentation [includes any examples](/docs/publishing-your-api/authoring-your-documentation/#including-examples) that have been added to the collection. If you edit an example, the documentation is automatically updated with your changes.

<img alt="Examples in documentation" src="https://assets.postman.com/postman-docs/documentation-including-examples-v9.jpg" width="663px">

Examples give more details and clarification for your API and help your team to work together on API development. Front-end developers, back-end developers, and testers can all work in parallel, using the examples in the documentation for guidance or to set up [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/).

> You can [publish your documentation](/docs/publishing-your-api/publishing-your-docs/) to make your examples publicly available to anyone in the world.

## Next steps

You can use examples to set up a mock server and enhance your documentation.

* To learn how to use examples to set up a mock server, visit [Setting up mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/).
* To learn how to include examples in your API documentation, visit [Documenting your API](/docs/publishing-your-api/document-a-collection/).
