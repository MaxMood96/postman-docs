---
title: "Use variables in WebSocket requests"
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

You can use Postman variables in the URL of a WebSocket connection or the body of a message. For example, you can create a variable named `my_host`, set the value to `example.com`, and then use `ws://{{my_host}}/api/example` as a URL. If you enter `{{` in either the URL box or message editor, you can autocomplete your variables.

See [Using variables](/docs/sending-requests/variables/variables/) for more information on how to store and reuse values in Postman.
