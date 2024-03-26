---
title: "Document a collection in Postman"
updated: 2023-09-21
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Collaboration & Documentation | Postman Enterprise"
    url: "https://youtu.be/u1yEOo0dPfk"
  - type: link
    name: "API Publishers Series, Part 1: Introduction to Documentation"
    url: "https://youtu.be/z4egejVO20M"
  - type: link
    name: "API Publishers Series, Part 2: Increase Adoption of your Public API"
    url: "https://youtu.be/52pXP3X4a_8"
  - type: dynamic_blog
    name: "Blog posts"
    blog_tag: "documentation"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "WhatsApp uses API documentation tools to enhance collaboration"
    url:  "https://www.postman.com/case-studies/whatsapp/"
  - type: link
    name: "SEI Novus uses documentation to keep business use cases solved"
    url: "https://www.postman.com/case-studies/sei-novus/"
---

Postman automatically generates basic documentation for any collection you create. The documentation includes details about all of the requests in your collection, along with sample code in various client languages. Request details include the method, authorization type, URL, headers, request and response structures, and examples. In addition, the documentation displays all key-value pairs for request parameters, headers, and bodies.

To make your documentation even more valuable to users, [add descriptions](/docs/publishing-your-api/authoring-your-documentation/#adding-descriptions-to-your-documentation) to the items in your collection. Any descriptions you add are automatically included in the documentation for your collection.

## Contents

* [Add descriptions to a collection](#add-descriptions-to-a-collection)
* [Document gRPC and WebSocket collections](#document-grpc-and-websocket-collections)
* [Associate environments with documentation](#associate-environments-with-documentation)
* [Next steps](#next-steps)

## Add descriptions to a collection

Add descriptions to your collections (including [collections linked to an API](/docs/publishing-your-api/documenting-your-api/)) to enhance your documentation and add more detail. You can use the Postman editor to view how your content will look as you write it, or use standard Markdown syntax to write content. With either editor, you can format text, add links, and insert images and videos in your documentation.

To add a description to a collection or folder, do the following:

1. Select **Collections** in the sidebar, and then select a collection or a folder.
1. Enter a description in the **Overview** tab. To learn more about using Postman's built-in editing tools, see [Write your docs](/docs/publishing-your-api/authoring-your-documentation/).
1. Select outside of the editor to save your new content.

<img alt="Documenting a collection" src="https://assets.postman.com/postman-docs/v10/documentation-overview-tab-v10.jpg" >

To add a description to a request, do the following:

1. Select **Collections** in the sidebar, and then select a request.
1. Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> in the right sidebar.
1. Enter a description in the right sidebar. To learn more about using Postman's built-in editing tools, see [Write your docs](/docs/publishing-your-api/authoring-your-documentation/).
1. Select outside of the editor to save your new content.

<img alt="Documenting a request" src="https://assets.postman.com/postman-docs/v10/documentation-pane-v10.jpg" width="600px">

> You can also edit descriptions when viewing the complete documentation for a collection. Select a collection in the sidebar, then select **View complete documentation** in the **Overview** tab. From here, you can add a description to any item in the collection.

## Document gRPC and WebSocket collections

Collections with gRPC or WebSocket requests use a different format than collections with HTTP requests. You can view documentation and add descriptions for gRPC or WebSocket requests. You can also add a description on the collection's **Overview** tab, but you can't view or edit documentation for the full collection. Learn more about [documenting gRPC requests](/docs/sending-requests/grpc/grpc-request-interface/#the-right-sidebar) or [documenting WebSocket requests](/docs/sending-requests/websocket/document-websocket-requests).

## Associate environments with documentation

An [environment](/docs/sending-requests/variables/managing-environments/) is a set of related [variables](/docs/sending-requests/variables/variables/) you can use in Postman requests. You can also refer to variables when [writing descriptions](/docs/publishing-your-api/authoring-your-documentation/) in a collection. In each case, the initial value of the variable is automatically populated in the documentation.

Anyone using your collection will be able to view the variables in the documentation if the associated environment is also shared with them. For public documentation, you can select an environment during the [publishing process](/docs/publishing-your-api/publishing-your-docs/). Publishing an environment makes it available to anyone [viewing public documentation](/docs/publishing-your-api/viewing-documentation/).

To use an environment variable in your documentation, do the following:

1. [Create a new environment](/docs/sending-requests/variables/managing-environments/) if one doesn't already exist.
1. Make the environment active by selecting it in the [environment dropdown list](/docs/sending-requests/variables/managing-environments/#switch-between-environments).
1. If needed, [add a new variable](/docs/sending-requests/variables/managing-environments/#add-environment-variables) to the environment.
1. Add a [reference to the variable](/docs/sending-requests/variables/variables/#using-variables) to requests or descriptions in your collection.

<img alt="Referencing a variable" src="https://assets.postman.com/postman-docs/v10/documentation-add-variable-v10-16.jpg" width="566px">

> If someone imports a collection using the **Run in Postman** button from your documentation, they will also import the environment and any associated variables. The initial values for variables are published in your documentation, so make sure they don't contain any sensitive data.

## Next steps

After documenting a collection in Postman, you can edit and format the docs and publish them.

* To document an API in Postman, go to [Add documentation to an API](/docs/publishing-your-api/documenting-your-api/).
* To learn more about editing and formatting your documentation, go to [Write your docs](/docs/publishing-your-api/authoring-your-documentation/).
* To learn how users can access your documentation, go to [View documentation](/docs/publishing-your-api/viewing-documentation/). By default your documentation is private, so you must share a collection with others before they can access it.
* To make your documentation publicly available, visit [Publish your docs](/docs/publishing-your-api/publishing-your-docs/).

> <img alt="Collections icon" src="https://assets.postman.com/postman-docs/Collections.png#icon" width="24px"> See how to document an API with a collection template that's a boilerplate for documentation that you can customize and reuse. To try out this template, select [API documentation](https://www.postman.com/templates/e9c28f47-1253-44af-a2f3-20dce4da1f18/API-documentation).
