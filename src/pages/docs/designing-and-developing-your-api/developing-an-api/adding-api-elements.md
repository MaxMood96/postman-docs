---
title: "Add elements to an API in Postman"
updated: 2023-03-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Update Collections Linked to an API"
    url: "https://youtu.be/pbkS4XVsUNI"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "The Reimagined API-First Workflow, Part 1: for Developers"
    url: "https://blog.postman.com/the-reimagined-api-first-workflow-for-developers/"
---

Your API in Postman can include more than an API definition. You can add elements such as collections to help you document and test your API.

> When you add a collection, an independent copy of the collection is added to the API. The copy in the API will no longer be in sync with the original. If you move or delete an API, any collections contained in the API are moved or deleted with it.

## Contents

* [Adding a collection](#adding-a-collection)
* [Keeping a collection in sync with an API](#keeping-a-collection-in-sync-with-an-api)
* [Forking a collection](#forking-a-collection)
* [Deleting elements from an API](#deleting-elements-from-an-api)

## Adding a collection

Add a collection to document your API or help others test your API's endpoints. You can add an existing collection or generate a new collection from your API definition.

> You can also add a test suite to your API. Learn more about [testing an API](/docs/designing-and-developing-your-api/testing-an-api/).

### Adding a new collection

To add a new collection to your API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, next to **Collections**, select **+** and select **Add new collection**.
1. Enter a new name for the collection.

### Adding an existing collection

To add an existing collection to your API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, next to **Collections**, select **+** and select **Copy existing collection**.
1. Select an available collection and select **Copy Collection**.

The copy of the collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, select the collection and select **View complete documentation**.

### Generating a collection

To generate a new collection from your API definition, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, next to **Collections**, select **+** and select **Generate from definition**.
1. Select the checkbox if you want Postman to suggest updates for the collection when the API definition changes. This checkbox is selected by default. Learn more about [keeping a collection in sync with an API](#keeping-a-collection-in-sync-with-an-api).
1. Change any settings to customize the new collection.
1. Select **Generate Collection**.

The collection displays on your API's overview and under your API in the sidebar. To view documentation for the collection, select the collection and select **View complete documentation**.

> You can also generate a collection when you import an API. For more information, see [importing an API](/docs/designing-and-developing-your-api/importing-an-api/).

## Keeping a collection in sync with an API

When you [generate a collection](#generating-a-collection) from an API definition, Postman creates a collection with requests that match what's defined in the API. If you update the API definition, for example by adding a path, those changes won't be reflected in the generated collection.

In this case, you could repeat the process of generating a collection from the API definition. However, this new collection wouldn't include any changes you might have made to the first collection you generated. For example, you might have added documentation content or endpoints for test setup that you want to keep. Instead, Postman can offer suggestions for updating the collection based on the changes to the API definition.

> Collection update suggestions are supported for OpenAPI 3.0 and 3.1 definitions.

### Enabling collection update suggestions

You can enable update suggestions for any collection that's been added to an API. When suggestions are enabled, Postman will detect when there are differences between the API definition and the collection and will offer suggestions for updating the collection.

To enable update suggestions for a collection, do the following:

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection and select **Enable update suggestions from definition**.

> If you want to turn off suggestions, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection and select **Disable update suggestions from definition**.

### Updating a collection based on the API definition

When suggestions are enabled, the update collection icon <img alt="Update collection icon" src="https://assets.postman.com/postman-docs/v10/icon-update-collection-v10-12.jpg#icon" width="18px"> appears next to a collection if Postman detects differences between the collection and the API definition. Differences can occur if the API definition is changed, for example by adding, removing, or modifying endpoints. Differences can also occur if requests are added, removed, or modified in the collection. You can review the differences and, if you choose, update the collection with the suggested changes.

To update a collection based on the API definition, do the following:

1. Select the update collection icon <img alt="Update collection icon" src="https://assets.postman.com/postman-docs/v10/icon-update-collection-v10-12.jpg#icon" width="18px"> next to the collection on the API's overview.

    <img alt="Update collection icon" src="https://assets.postman.com/postman-docs/v10/schema-sync-update-collection-v10-12.jpg" width="630px" >

1. Review the suggested updates to the collection:

    * **Add requests** - These requests will be added to the collection based on paths found in the API definition. Select the arrow next to a request for more details.
    * **Modify requests** - These requests will be updated to match the paths in the API definition. Select the arrow next to a request for more details.
    * **Remove requests** - These requests don't match any paths in the API definition. Select the checkbox next to a request if you want to remove it from the collection. Clear the checkbox next to a request if you want to keep it in the collection.

1. When you're ready to make the suggested updates to the collection, select **Update Collection**.

<img alt="Review collection update suggestions" src="https://assets.postman.com/postman-docs/v10/schema-sync-review-v10-12.jpg" >

## Forking a collection

Collections added to an API can't be used with monitors, mock servers, or CI integrations. To use a collection in an API with these features, you must fork the collection.

To fork a collection from an API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. Select the collection in the sidebar.
1. Select the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> at the upper right.

> Learn more about [forking elements](/docs/collaborating-in-postman/using-version-control/forking-elements/) in Postman.

## Deleting elements from an API

To delete a collection from an API, do the following:

1. Select **APIs** in the sidebar and select an API.
1. In the sidebar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection and select **Delete**.

> You can also delete a collection from the API's overview. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection and select **Delete**.
