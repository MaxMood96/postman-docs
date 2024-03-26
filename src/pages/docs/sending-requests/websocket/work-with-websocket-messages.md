---
title: "Work with WebSocket messages"
updated: 2023-11-01
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "WebSocket Requests | Postman Level Up"
    url: "https://youtu.be/H-7EZVj9D-k"
  - type: link
    name: "Set Up a WebSockets Server in Node.js"
    url: "https://youtu.be/e__oWJ4wNtw"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Save and Document WebSocket Requests in Collections"
    url: "https://blog.postman.com/save-and-document-websocket-requests-in-collections/"
  - type: link
    name: "Powering home automation with WebSocket APIs"
    url: "https://blog.postman.com/powering-home-automation-with-websocket-apis/"
  - type: link
    name: "Postman Supports Socket.IO"
    url: "https://blog.postman.com/postman-now-supports-socket-io/"
---

_WebSocket messages_ are data packets sent over a WebSocket connection. WebSocket messages include information about the type and length of the message, and whether it's the final message or part of a larger set of messages. You can send, save, and view WebSocket messages in Postman. You can also add names and arguments to Socket.IO events.

## Contents

* [Send WebSocket messages](#send-websocket-messages)
* [Save and load WebSocket messages](#save-and-load-websocket-messages)
* [View WebSocket messages](#view-websocket-messages)
* [Add Socket.IO event names and arguments](#add-socketio-event-names-and-arguments)

## Send WebSocket messages

After making a WebSocket connection, you can use the editor pane to compose and send messages.

![WebSocket message editor](https://assets.postman.com/postman-docs/websocket-message-editor.jpg)

In the bottom left corner of the editor, you can select the format of your message: **Text**, **JSON**, **XML**, **HTML**, or **Binary**. If you select **Binary**, you can then select **Base64** or **Hexadecimal**. The editor has syntax highlighting according to the selected format. You can also select **{}** to beautify JSON, XML, or HTML messages.

After you finish composing your message, select **Send**. The sent message remains in the window, in case you want to change it and resend, or save it.

## Save and load WebSocket messages

You can save composed messages, then load and resend them later.

To save a message, do the following:

1. Compose a message (see [Send WebSocket messages](#send-websocket-messages)).
1. Select **Save** to save the message with the request.
1. (Optional) Select  **Saved messages**, then select the **Add message** icon <img alt="Add message icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px"> to create a new blank message and add it to the list of saved messages.

To load a saved message, do the following:

1. Select **Saved messages** to open the **Saved messages** pane.
1. Select a saved message. It appears in the editor pane.

You can then [send](#send-websocket-messages) the message or edit it and select **Save** to save the changes.

## View WebSocket messages

The **Response** pane displays a list of messages for the WebSocket connection, including incoming, outgoing, and network messages.

At the top of the **Response** pane is a connection details badge. It shows if the connection is connecting, connected, disconnecting, or disconnected. Hover over the badge to show connection details. Select the arrow next to the badge to show or hide the **Response** pane.

![WebSocket messages](https://assets.postman.com/postman-docs/websocket-messages.jpg)

The **Response** pane has the following controls:

* Search control - Enter a search term to display messages containing the term. Select <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> to end the search.
* Message type list - Choose to view all messages, sent messages, or received messages.
* **Clear messages** - Select to clear all messages.

The following are displayed for each message:

* If you hover over a message, a checkbox and three icons appear.
    * To see the time difference between two messages, select their checkboxes. Clear the checkboxes to remove the time display.
    * Select the Copy message icon <img alt="Copy message icon" src="https://assets.postman.com/postman-docs/icons/websocket-copy-icon-v10-19.jpg#icon" width="18px"> to copy the message to your clipboard.
    * Select the Save message icon <img alt="Save message icon" src="https://assets.postman.com/postman-docs/icons/websocket-save-icon-v10-19.jpg#icon" width="16px"> to [save](#save-and-load-websocket-messages) the message
    * To see a message's size, time, and MIME type, hover over the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icons/websocket-info-icon-v10-19.jpg#icon" width="18px">.
* The time is displayed as your local time.
* Select a message to expand or collapse it.

In an expanded message:

* To change the formatting of the message, select **Text**, **HTML**, **JSON**, or **XML**.
* To add or remove line wraps, select **Wrap Line**.
* To show the message in hex or text, select **Show Hexdump** or **Show Message**.
* To search the body of the message, use the search control.
* To expand or collapse message blocks, hover over a line number and select the arrow.

## Add Socket.IO event names and arguments

To listen to specific events, you can add names and arguments to events you send with a Socket.IO connection.

For a Socket.IO connection, you can enter an event name to publish next to **Send**. If you select **Send** without entering a name, the default name `message` is used.

If you select the **Ack** option, the server will acknowledge that it has received the message.

You can also add arguments to a Socket.IO connection. Select **+ Arg** in the editor pane. A sidebar opens with a new argument that you can use to add the argument’s message. Hover over an existing argument and select **x** to delete it. The workflow to inspect each argument’s message is similar.

<img src="https://assets.postman.com/postman-docs/socketio-second-arg.jpg" alt="Socket.IO arguments" width="400px">
