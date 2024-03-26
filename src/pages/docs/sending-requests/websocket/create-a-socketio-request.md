---
title: "Create a Socket.IO request"
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

You can create a Socket.IO request from the sidebar in Postman.

1. Select **New > Socket.IO** to open a Socket.IO request in a new tab. (In the Postman desktop app, you can also select **⌘+N** or **Ctrl+N**.)
1. Enter a [WebSocket](/docs/sending-requests/websocket/websocket-overview/) server URL. A WebSocket URL begins with `ws://` or `wss://`.
1. Select **Connect**.

To disconnect your WebSocket request's connection, select **Disconnect**.

> If you’re using the Postman web app, for the best experience consider using the Postman Desktop Agent. See [About the Postman Agent](/docs/getting-started/basics/about-postman-agent/) for more information.
<!-- -->
> Socket.IO typically uses WebSockets as its transport layer, but sometimes uses HTTP _long polling_ as a fallback when WebSockets can't be used. Postman doesn't support long-polling mode in Socket.IO.
