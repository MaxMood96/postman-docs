---
title: "View documentation in Postman"
updated: 2023-07-21
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Documentation | The Exploratory"
    url: "https://youtu.be/XNVo9WkCoak"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Axis Bank shortens development pipelines using public URLs"
    url: "https://www.postman.com/case-studies/axis-bank/"
---

[Documentation](/docs/publishing-your-api/api-documentation-overview/) helps you get more out of the collections and APIs that you work with in Postman. View documentation to learn more about the requests in a collection or how to interact with an API's endpoints.

By default, documentation for a collection or API is private. You can view the documentation for any collections or APIs that have been shared with you directly or through a team workspace.

Documentation authors can also choose to [publish their documentation](/docs/publishing-your-api/publishing-your-docs/) to make it publicly available. Anyone in the world can view the public documentation using a web browser. If the associated collection is in a public workspace, people can also view the collection in Postman.

## Contents

* [Viewing documentation for a collection](#viewing-documentation-for-a-collection)
* [Viewing API documentation](#viewing-api-documentation)
* [Viewing public documentation](#viewing-public-documentation)
* [Linking to public documentation](#linking-to-public-documentation)

## Viewing documentation for a collection

You can view the documentation for any collection that you created or for collections that have been [shared with you](/docs/collaborating-in-postman/sharing/).

> Postman teammates with the Viewer role can view documentation, while teammates with the Editor role can also create and update documentation. Learn more about [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

To view documentation for a collection, do the following:

1. Select **Collections** in the sidebar, then select a collection.

    > You can also search for collections on the [Public API Network](https://www.postman.com/explore/collections).

1. In the **Overview** tab, select **View complete documentation**.

<img alt="View complete documentation" src="https://assets.postman.com/postman-docs/v10/documentation-view-complete-v10-16.jpg" />

> You can't view complete documentation if your collection has [gRPC requests](/docs/sending-requests/grpc/grpc-request-interface/#the-right-sidebar) or [WebSocket requests](/docs/sending-requests/websocket/document-websocket-requests/). To view the description for a collection or folder, select it in the sidebar. To view the request description, open the request and select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> in the right sidebar.

The documentation includes a [description](/docs/publishing-your-api/authoring-your-documentation/#adding-descriptions-to-your-documentation) of each request and details such as the method and URL, the required authorization type, and any headers or parameters. For each request, you can view sample code in various client languages, together with example response bodies and headers.

Use the following options to customize the appearance of the documentation:

* **Version** - If the documentation has multiple versions, you can select a specific version to view. (You can no longer create versions or releases for collections in Postman v10, but API producers can [publish versions of an API](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).)
* **Language** - Select a language to use for sample code.
* **Code Generation Settings** - Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> to customize settings for the selected language.

<img alt="Viewing collection documentation" src="https://assets.postman.com/postman-docs/v10/documentation-view-full-docs-v10-16.jpg" />

> Another way to view documentation is to visit your [user profile](https://postman.co/me/collections). Select the **Collections** tab for a list of collections that have been shared with you and your own collections. Select a collection to view its documentation.

## Viewing API documentation

Postman automatically generates API docs for any OpenAPI 2.0 or 3.0 API [defined in the API Builder](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/). API developers can also [create detailed documentation](/docs/publishing-your-api/documenting-your-api/) for any API to help consumers understand and interact with their API's endpoints.

To view documentation for an API, do the following:

1. Select **APIs** in the sidebar, then select an API.

    > You can also search for APIs on the [Private API Network](https://go.postman.co/network/private) or the [Public API Network](https://www.postman.com/explore/apis).

1. Select a documentation source on the API's overview:

    * To view schema documentation, under **Definition**, select **View schema documentation**. (Schema documentation is available for OpenAPI 2.0 and 3.0 definitions.)
    * To view collection documentation, select a collection and select **View complete documentation**. To get sample code in a different language, select it in the **Language** menu.

<img alt="Viewing API documentation" src="https://assets.postman.com/postman-docs/v10/documentation-view-schema-docs-v10-16.jpg" />

> API developers can publish different versions of an API. You can view documentation for each published version. Learn more about [viewing a published API version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/#viewing-a-published-api-version).

## Viewing public documentation

Public documentation is hosted on the web by Postman. To access public documentation, enter the documentation URL in the address bar of your web browser. The URL is generated by Postman during the [publication process](/docs/publishing-your-api/publishing-your-docs/#sharing-your-public-docs).

Each request entry has a description of the request, the method and URL, the required authorization type, and any headers or parameters. Postman also provides sample client code for the request, along with example response bodies and headers.

Use the options in the header to customize the appearance of the documentation:

* **Version** - If the documentation has multiple versions, you can select a specific release to view. (You can no longer create versions or releases for collections in Postman v10, but API producers can [publish versions of an API](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).)
* **Environment** - If an [environment](/docs/publishing-your-api/document-a-collection/#associate-environments-with-documentation) was published with the documentation, you can select it to populate any variables.
* **Layout** - **Double column** displays sample code in a column next to the documentation. **Single column** displays sample code inline beneath each request.
* **Language** - Select a language to use for sample code.
* **Language Settings** - Select the language settings icon <img alt="Language settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> to customize settings for any of the available languages.
* **Theme** - Select the theme icon (<img alt="Light theme icon" src="https://assets.postman.com/postman-docs/v10/icon-theme-light-v10.jpg#icon" width="16px"> or <img alt="Dark theme icon" src="https://assets.postman.com/postman-docs/v10/icon-theme-dark-v10.jpg#icon" width="16px">) to switch between light and dark themes.

![Published documentation example](https://assets.postman.com/postman-docs/v10/documentation-published-docs-v10.jpg)

> Postman supports [various programming languages and frameworks](/docs/sending-requests/create-requests/generate-code-snippets/#supported-languagesframeworks) for displaying sample code. Is a language you want to use not available? Is there a setting missing that you'd find useful? Select the language settings icon <img alt="Language settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> and then select **Contribute on GitHub** to contribute to [the open-source project](https://github.com/postmanlabs/postman-code-generators).

## Linking to public documentation

Want to share a specific endpoint with someone or bookmark it for later? You can save links to sections in public documentation, including the introduction, requests, folders, and responses.

To save a link, select a section, folder, or request in the sidebar. Copy the URL in your browser's address bar, or save it as a bookmark. Next time, you can use the URL to link directly to the selected section.

<img alt="Documentation links" src="https://assets.postman.com/postman-docs/documentation-copy-link-v9.jpg" width="773px"/>
