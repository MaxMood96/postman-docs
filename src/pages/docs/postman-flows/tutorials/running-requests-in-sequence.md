---
title: "Run requests in sequence using Postman Flows"
updated: 2023-08-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Run Requests in Sequence | Postman Flows"
    url: "https://youtu.be/kvg7Jmgnivo"
  - type: link
    name: "Create Charts, Tables, and Output | Postman Flows"
    url: "https://youtu.be/8zWlY4W7SWE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

If you have several requests that have no dependency on each other but have to be executed in a particular order, you can use send events to connect your [blocks](/docs/postman-flows/gs/flows-overview/).

> Check out the example Flow: [Chaining requests](https://www.postman.com/postman/workspace/flows-snippets/flow/6267f9315d367a64e7ba06e5)

1. **Add a Send Request block**

   Select **+ Block** on the toolbar and select the **Send Request** block from the list to add it to your canvas, then select the request. Repeat this until all the requests are added to the canvas.

    <img src="https://assets.postman.com/postman-docs/v10/flows-chain-requests-v10-1.gif" alt="Add Send Request blocks" fetchpriority="low" loading="lazy" />

1. **Connect the send events**

   Select the port (success output) of the source block and connect it to the send input of the target block in the order you want the requests to execute.

   <img src="https://assets.postman.com/postman-docs/v10/flows-select-requests-v10-1.gif" alt="Select requests" fetchpriority="low" loading="lazy" />

1. **Start the Flow**

   Start the Flow and see the requests run in the order they're configured:

   <img src="https://assets.postman.com/postman-docs/v10/flows-run-requests-v10-1.gif" alt="Start the Flow" fetchpriority="low" loading="lazy" />

If you want to use data from one request in another request, you can learn how to do so in [Send information from one system to another](/docs/postman-flows/tutorials/send-information-from-one-system-to-another/).
