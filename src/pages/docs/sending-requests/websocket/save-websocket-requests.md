---
title: "Save WebSocket requests"
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

You can save your WebSocket requests into a collection. This enables you to reuse requests, share them with other team members, and add documentation to the collection of requests.

To save a new request, do the following:

1. Select **Save** in the request tab.
1. Under **Save to**, select a collection, or select **New collection**.

    > There are limitations to WebSocket requests in collections. Keep reading for more information.
1. If you are creating a new collection, enter a name and select **Create**.
1. Select **Save**.

Postman displays your collection and saved request in **Collections** in the sidebar.

Because WebSocket requests have different features than HTTP requests, adding them to a collection puts the collection in a beta state with certain limitations.

When in this state, a collection can contain WebSocket or gRPC requests. It can't contain HTTP requests. Some features related to collections aren't supported, such as collaboration, version control, or scripting.
