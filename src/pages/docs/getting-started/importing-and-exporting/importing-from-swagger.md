---
title: "Import Swagger APIs"
updated: 2023-10-18
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Import and Export Data in Postman"
    url: "https://youtu.be/KdaiVdNMgL4"
  - type: link
    name: "Collection Format | Postman Level Up"
    url: "https://youtu.be/cRXSblrGrao"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Essentials: Exploring the Collection Format"
    url: "https://blog.postman.com/postman-essentials-exploring-the-collection-format/"
  - type: link
    name: "Differences between Postman Collections and the collection format"
    url: "https://blog.postman.com/differences-between-postman-collections-and-collection-format/"
---

Postman can import APIs created with the Swagger toolset and any API that follows a [supported version of the OpenAPI specification](/docs/designing-and-developing-your-api/importing-an-api/#supported-api-definitions-formats).

The terms _Swagger_ and _OpenAPI_ can be confusing because the OpenAPI specification was previously named Swagger, and people sometimes use the terms interchangeably. To clarify, in this document, _Swagger API_ refers to an API created with the Swagger toolset.

## Import a Swagger API

1. In Postman, select **Import** in the sidebar.

1. Select an API definition file, enter a link to the API, or paste your raw text.

1. You can choose to import the definition as a collection or as an API along with a collection.

    <img alt="API definition import options" src="https://assets.postman.com/postman-docs/v10/import-definition-options-v10-19.jpg" width="651px" />

    > Select **View Import Settings** for more configuration options. These options will vary depending on your API specification.

1. Select **Import**.

1. An **Import Complete** message displays in the footer. In the message, select the link icon <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> next to a collection or API  to open the imported element.

      <img alt="Import complete message" src="https://assets.postman.com/postman-docs/v10/import-complete-message-v10-19.jpg" width="697px" />

> You can also [import an API from a code repository](/docs/getting-started/importing-and-exporting/importing-from-git/). To learn more ways to import APIs, go to [Import an API into Postman](/docs/designing-and-developing-your-api/importing-an-api/).
