---
title: "Document your APIs in Postman"
updated: 2024-01-17
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

[Documentation](https://www.postman.com/api-platform/api-documentation/) is an important part of your API. You can add documentation to any Postman Collection and its API requests. You can also use Postman to create API documentation and share it with your API's consumers, so they know what endpoints are available and how to interact with them.

Postman automatically generates documentation for your collections and APIs. To give your users more help and context, use Postman's built-in editing tools to add descriptions, images, videos, and more to your documentation.

## Contents

* [Document collections and APIs](#document-collections-and-apis)
* [Write your documentation](#write-your-documentation)
* [Publish and view documentation](#publish-and-view-documentation)
* [Create a Run in Postman button](#create-a-run-in-postman-button)

## Document collections and APIs

Postman automatically creates documentation for your collections, including request details, authorization type, and sample code. To provide more information for users, you can [add descriptions to the items in your collection](/docs/publishing-your-api/document-a-collection/).

Postman also generates documentation based on your API definition (for OpenAPI 2.0 and 3.0 APIs). To create more detailed API documentation, [add one or more collections to your API](/docs/publishing-your-api/documenting-your-api/), and then add descriptions to the collections. You can add an existing collection or generate a collection based on your API definition.

## Write your documentation

Add descriptions to your collections to [enhance your documentation and provide more detail](/docs/publishing-your-api/authoring-your-documentation/). You can use the Postman editor to view how your content will look as you write it, or use standard Markdown syntax to write content. With either editor, you can format text, add links, and insert images and videos.

> **Postbot can write documentation for you.** Use Postman's AI assistant, Postbot, to automatically add descriptions to your API requests, including parameters and response examples. Learn more about [writing documentation with Postbot](/docs/publishing-your-api/authoring-your-documentation/#writing-documentation-with-postbot).

## Publish and view documentation

To learn more about how to use a collection or an API, you can [view documentation in Postman](/docs/publishing-your-api/viewing-documentation/). Collection documentation provides details for each request, along with sample code. To view API documentation, open an API in Postman, or search for APIs on the [Private API Network](https://go.postman.co/network/private) or [Public API Network](https://www.postman.com/explore/apis).

[Publishing a collection](/docs/publishing-your-api/publishing-your-docs/) makes your documentation publicly available on `getpostman.com` or your own [custom domain](/docs/publishing-your-api/custom-doc-domains/). As you update your collection, the published documentation automatically stays in sync with your latest changes.

> You can't publish a collection that's linked to an API. Instead, you can [publish a version of an API](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/) to make your API and its documentation available to consumers.

## Create a Run in Postman button

You can [create a **Run in Postman** button](/docs/publishing-your-api/run-in-postman/introduction-run-button/) to share a collection and its documentation with users. When users select the button, they have the option to
fork the collection to their workspace, view the collection in a public workspace, or import the collection into Postman.
