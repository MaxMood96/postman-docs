---
title: "Publish documentation in Postman"
updated: 2023-04-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Documentation | The Exploratory"
    url: "https://youtu.be/XNVo9WkCoak"
  - type: link
    name: "Customize Public Documentation | Postman Level Up"
    url: "https://youtu.be/X6Yi8aJOLds"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing more customization for published collection documentation"
    url: "https://blog.postman.com/introducing-more-customization-for-published-collection-documentation/"
  - type: link
    name: "Introducing Governance for Publishing Collection Documentation"
    url: "https://blog.postman.com/introducing-governance-publishing-collection-documentation/"
  - type: link
    name: "How to publish and market your API to maximize adoption"
    url: "https://blog.postman.com/how-to-publish-and-market-your-api-to-maximize-adoption/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Axis Bank shortens development pipelines using public URLs"
    url: "https://www.postman.com/case-studies/axis-bank/"
---

Publishing your documentation makes it publicly available to anyone with the link to the documentation and a web browser. Publish your documentation to help people around the world learn how to use your collection or interact with your Public API.

Public documentation automatically includes details for each request or endpoint in the published collection, along with sample code in various client languages. As you update your collection, the published documentation automatically stays in sync with  your latest changes. There's no need to publish the documentation again after making changes.

> Your public documentation includes the **Run in Postman** button so users can interact with your collection or API directly in Postman. For an example, check out the [Postman API documentation](https://documenter.getpostman.com/view/12959542/UV5XjJV8) which was published from a Postman Collection.

## Contents

* [Making your documentation public](#making-your-documentation-public)
* [Sharing your public docs](#sharing-your-public-docs)
* [Changing publication settings](#changing-publication-settings)
* [Unpublishing your docs](#unpublishing-your-docs)

## Making your documentation public

To publish [documentation](/docs/publishing-your-api/document-a-collection/), it must be part of a collection. You can publish documentation for any collections that you created or have permission to edit.

> You can't publish a collection that has [gRPC requests](/docs/sending-requests/grpc/grpc-request-interface/#the-right-sidebar) or [WebSocket requests](/docs/sending-requests/websocket/websocket-overview/). Also, you can't publish a collection that has been added to an API. Instead, you can [publish a version of the API](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/). A published version includes the API's definition and collections.

To publish the documentation for a collection, do the following:

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection, and then select **View Documentation**.
1. Select **Publish** at the upper right.

    <img alt="Publish documentation" src="https://assets.postman.com/postman-docs/documentation-publish-button-v9.jpg" width="753px">

1. Change any publication settings as needed:

    * **Version** - If the collection has multiple versions, select the versions to publish. (You can no longer create versions or releases for collections in Postman v10, but you can [publish versions of an API](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).)
    * **Environment** - Select an [environment](/docs/publishing-your-api/document-a-collection/#associate-environments-with-documentation) to publish environment variables with your documentation. *The initial values of all variables are published with your documentation, so make sure they don't contain sensitive information such as passwords or tokens.*
    * **Custom domain** - Select a [custom domain](/docs/publishing-your-api/custom-doc-domains/) where you want to publish your documentation.
    * **Default layout** - Select a layout style for your documentation. **Double column** displays sample code in a column next to the documentation. **Single column** displays sample code inline beneath each request.
    * **Default Theme** - Select a light or dark theme for your documentation. You can also choose to use the system theme. Your documentation will use the selected theme by default, but users can switch between themes.
    * **Logo** - By default, public documentation uses your [team logo](/docs/administration/managing-your-team/team-settings/#edit-your-team-profile). You can also select a custom logo for each theme (light and dark):

        * To add a logo, select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> and select **Upload**. Drag and drop an image file, or select an image file. Drag the handles to adjust the part of the image you want to display, then select **Upload**.
        * To delete a logo, select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> and select **Delete**.

        > You can use different logos for each collection you publish. Logos must be 2 MB or less in size and must be in JPEG or PNG format. The logo can be any aspect ratio (square or rectangle.)

    * **Colors** - You can customize the colors for each theme (light and dark):

        * **Header background** - Specify a color (hex format) for the header at the top of the documentation window.
        * **Code background** - Specify a color (hex format) for sample code blocks.
        * **Highlight** - Specify a color (hex format) for hyperlinks.

    * **SEO** - You can add metadata to your documentation to make it more discoverable on the web:

        * **Title** - Add a title for your documentation (60 characters or less). The title will appear in web searches and in browser tabs.
        * **Description** - Add a brief description to let users know what your documentation is about (160 characters or less). You can also add relevant keywords to help users find your documentation when searching the web.

1. To preview your documentation using the current settings, select **Preview Documentation**. The preview automatically updates as you change settings.

    > If Postman detects a possibly sensitive token or other secret, a warning appears at the top of the preview window. Postman also highlights the token so you can remove it from the documentation before publishing.

1. When you're finished changing settings, publish your documentation:

    * **Postman Free, Basic, and Professional plans** - You can optionally select a [public workspace](/docs/collaborating-in-postman/using-workspaces/public-workspaces/) to move the collection to. This will make the collection discoverable on the [Public API Network](https://www.postman.com/explore). When you're ready, select **Publish**. You can view your public documentation at the provided URL.

    * **Postman Enterprise plans** - Your [Community Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) controls the Postman elements your team makes public. Enter a note for your Community Manager and select **Request Publish**. When your request is approved, you will receive an email notification with a link to the public documentation. To retract your publish request, [change the pending publication settings](#changing-publication-settings) and select **Retract request**.

![Published documentation example](https://assets.postman.com/postman-docs/v10/documentation-published-docs-v10.jpg)

## Sharing your public docs

To share your public documentation, share the published URL with your team members, other users, or the community. If you have forgotten the URL of your published documentation, you can get it at any time.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection with published docs, and then select **View Documentation**.
1. Select **Published** at the upper right, and then select **Copy published link**.

<img alt="Copy published link" src="https://assets.postman.com/postman-docs/documentation-published-link-v9.jpg" width="753px">

If your collection is in a public workspace, others can search for and find your collection on the [Public API Network](https://www.postman.com/explore), along with its documentation. If you haven't already moved your collection to a public workspace, you can do so at any time by [changing the publication settings](#changing-publication-settings).

> By sharing your documentation with the Public API Network, you increase the visibility of your API to a wider range of consumers in the Postman community. Learn more about [public workspaces](/docs/collaborating-in-postman/using-workspaces/public-workspaces/).

## Changing publication settings

Change the publication settings for your documentation to update your documentation's look or make your collection public. You can change the publication settings at any time after publishing your documentation.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection with published docs, and then select **View Documentation**.
1. Select **Published** at the upper right, and then select **Edit published documentation**.

    <img alt="Edit published documentation" src="https://assets.postman.com/postman-docs/documentation-edit-published-docs-v9.jpg" width="753px">

1. Select **Edit settings**, and then change the [publication settings](#making-your-documentation-public) as needed.
1. Select **Save and republish**.

## Unpublishing your docs

If you no longer want your documentation to be publicly available, you can unpublish it.

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection with published docs, and then select **View Documentation**.
1. Select **Published** at the upper right, and then select **Edit published documentation**.
1. Select **Unpublish**.

If you change your mind, you can [publish your documentation](#making-your-documentation-public) again at any time.

<img alt="Unpublish documentation" src="https://assets.postman.com/postman-docs/v10/documentation-unpublish-v10.jpg">
