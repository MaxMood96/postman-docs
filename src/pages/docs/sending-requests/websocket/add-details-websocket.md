---
title: "Add details to a WebSocket request"
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

You can add details to your request, for example, to send more parameters and headers. You can also configure the connection. Select the **Params**, **Headers**, or **Settings** tab to make changes.

> You can't change request details while you’re connected. You must make any changes before you connect, or select **Disconnect** to stop the current connection.

## Contents

* [Change protocols](#change-protocols)
* [Send parameters](#send-parameters)
* [Configure headers](#configure-headers)
* [Configure request settings](#configure-request-settings)

### Change protocols

To change the protocol for a new request, do the following:

1. Select **New** in the sidebar.
1. Select a request protocol, or select **+** to open a new tab.
1. Select the protocol dropdown list next to the request's name.
1. Select a different request protocol.

> You can't change the request protocol after you select **Save**.

### Send parameters

On the **Params** tab, add any parameters you’d like to append to the WebSocket URL. This works similarly to [sending parameters](/docs/sending-requests/create-requests/parameters/) in a REST request.

### Configure headers

On the **Headers** tab, enter any headers you’d like to send with your message. This works similarly to [configuring request headers](/docs/sending-requests/create-requests/headers/) in a REST request.

### Configure request settings

The following settings can be configured for your WebSocket request:

| Setting | Description |
|-----|-----|
| Client version  | The Socket.IO client version to be used to connect with the server. (Socket.IO only)|
| Handshake path | The server-side path to be captured. (Socket.IO only)  |
| Handshake request timeout | How long the handshake request waits before timing out, in milliseconds. This is reset after every redirection. |
| Reconnection attempts | The maximum number of reconnection attempts before disconnecting. |
| Reconnection intervals | The period in milliseconds between reconnection attempts. |
