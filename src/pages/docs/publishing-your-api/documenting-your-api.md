---
title: "Add API documentation in Postman"
updated: 2023-09-23
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

The API Builder provides one place to view, create, and manage all of your API's documentation. Postman automatically generates API docs for any OpenAPI 2.0 or 3.0 definition. You can also add detailed documentation to any API by generating a collection from the API or by adding a copy of an existing collection.

## Contents

* [View schema documentation](#view-schema-documentation)
* [Create new documentation for an API](#create-new-documentation-for-an-api)
* [Add existing documentation to an API](#add-existing-documentation-to-an-api)
* [Edit API documentation](#edit-api-documentation)
* [Delete API documentation](#delete-api-documentation)
* [Next steps](#next-steps)

## View schema documentation

If you are [designing an API](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) based on the OpenAPI 2.0 or 3.0 specification, Postman automatically creates documentation based on your API definition.

The API documentation includes complete API, path, and operation information, such as authentication methods, parameters, request bodies, response bodies and headers, and examples. The documentation also includes information for various data models, such as required attributes, default, minimum, and maximum values, and other constraints.

To view the documentation for an OpenAPI 2.0 or 3.0 API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, under **Definition**, select **View schema documentation**.

<img alt="Viewing schema documentation" src="https://assets.postman.com/postman-docs/v10/documentation-view-schema-docs-v10-16.jpg" />

> You can also view schema documentation while editing your OpenAPI 2.0 or 3.0 definition. Postman displays a live preview of the documentation as you work on your API. Learn more about [previewing schema documentation](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#previewing-schema-documentation).

## Create new documentation for an API

To generate a new collection for API documentation, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, next to **Collections**, select **+** and select **Generate from definition**.
1. Select the checkbox if you want Postman to suggest updates for the collection when the API definition changes. This checkbox is selected by default. Learn more about [keeping a collection in sync with an API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/#keeping-a-collection-in-sync-with-an-api).
1. Change any settings to customize the new collection.
1. Select **Generate Collection**.

The new collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, select the collection and select **View complete documentation**.

<img alt="Generating new API documentation" src="https://assets.postman.com/postman-docs/v10/documentation-generate-api-docs-v10-16.jpg" />

## Add existing documentation to an API

To use an existing collection for API documentation, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, next to **Collections**, select **+** and select **Copy existing collection**.
1. Select an available collection and select **Copy Collection**.

The copy of the collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, select the collection and select **View complete documentation**.

<img alt="Adding existing API documentation" src="https://assets.postman.com/postman-docs/v10/documentation-add-api-docs-v10-16.jpg" />

> When you add a collection, an independent copy of the collection is added to the API. The copy in the API will no longer be in sync with the original. If you move or delete an API, any collections contained in the API are moved or deleted with it.

## Edit API documentation

You can add to your API documentation collections from the API Builder.

To edit a documentation collection for an API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, select a collection and select **View complete documentation**.
1. Enter a description for any item. To learn more about using Postman's built-in editing tools, see [Write your docs](/docs/publishing-your-api/authoring-your-documentation/).
1. Select outside of the editor to save your new content.

> Schema documentation can't be edited directly. Instead, [edit your API's definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) and then select **Save**. Postman automatically updates the API docs to reflect the latest changes to your definition.

<img alt="Editing API documentation" src="https://assets.postman.com/postman-docs/v10/documentation-editing-api-docs-v10-16.jpg" />

## Delete API documentation

To delete a documentation collection from an API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection and select **Delete**.

## Next steps

After adding documentation to an API in Postman, you can edit and format the docs. You can also publish your API, including the documentation.

* To learn more about adding descriptions to a collection, including collections linked to an API, go to [Document a collection](/docs/publishing-your-api/document-a-collection/).
* To learn more about editing and formatting your documentation, go to [Write your docs](/docs/publishing-your-api/authoring-your-documentation/).
* To learn how users can access your documentation, go to [View documentation](/docs/publishing-your-api/viewing-documentation/). By default your documentation is private, so you must share an API with others before they can access it.
* To learn how to publish your API to make it available to consumers, go to [Publishing an API version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).

> <img alt="Collections icon" src="https://assets.postman.com/postman-docs/Collections.png#icon" width="24px"> See how to document an API with a collection template that's a boilerplate for documentation that you can customize and reuse. To try out this template, select [API documentation](https://www.postman.com/templates/e9c28f47-1253-44af-a2f3-20dce4da1f18/API-documentation).
