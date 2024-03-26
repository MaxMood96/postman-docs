---
title: "Write documentation in Postman"
updated: 2023-07-21
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
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Postman’s WYSIWYG Editing Experience"
    url: "https://blog.postman.com/introducing-postmans-wysiwyg-editing-experience/"
  - type: link
    name: "Introducing New Image Support: Drag-and-Drop, Resize, and Add Captions in Postman Editor"
    url: "https://blog.postman.com/resize-images-add-captions-in-postman-editor/"
---

Postman [automatically generates documentation](/docs/publishing-your-api/document-a-collection/) for every collection you create, including [collections linked to an API](/docs/publishing-your-api/documenting-your-api/). The documentation includes all of the requests in your collection, along with examples, authorization details, and example code.

To help your teammates ([or the world](/docs/publishing-your-api/publishing-your-docs/)) better understand what you're building, add detailed descriptions to your collection and the items in it. Use the Postman editor to view how your content will look as you write it. Or use the classic Markdown editor to structure and format your descriptions using [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). All of your descriptions are included in the documentation for your collection.

> You can also add a description when [creating a new request](/docs/sending-requests/create-requests/create-requests/).

## Contents

* [Adding descriptions to your documentation](#adding-descriptions-to-your-documentation)
    * [Writing descriptions in the Postman editor](#writing-descriptions-in-the-postman-editor)
    * [Writing descriptions in Markdown](#writing-descriptions-in-markdown)
    * [Selecting a default documentation editor](#selecting-a-default-documentation-editor)
    * [Adding descriptions to parameters and headers](#adding-descriptions-to-parameters-and-headers)
* [Including authorization details](#including-authorization-details)
* [Including examples](#including-examples)
* [Adding links](#adding-links)
* [Adding images](#adding-images)
* [Embedding videos](#embedding-videos)
* [Writing documentation with Postbot](#writing-documentation-with-postbot)
* [Finding help and inspiration](#finding-help-and-inspiration)

## Adding descriptions to your documentation

Use descriptions to tell people who use your collection more about what your collection does and the purpose of each request. Structure your descriptions with headings and add content such as text, tables, images, and links.

To add a description to a collection or folder, do the following:

1. Select **Collections** in the sidebar, and then select a collection or a folder.
1. Enter a description in the **Overview** tab. You can write your description using the visual [Postman editor](#writing-descriptions-in-the-postman-editor) or the classic [Markdown editor](#writing-descriptions-in-markdown). Both are compatible, so feel free to switch between the two editors as you work.

    <img alt="Switching editors" src="https://assets.postman.com/postman-docs/v10/documentation-switch-editor-menu-v10-16.jpg" width="660px">

1. Select outside of the editor to save your new content. If you ever need to make changes, you can edit the description again.

To add a description to a request, do the following:

1. Select **Collections** in the sidebar, and then select a request.
1. Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> in the right sidebar.
1. Enter a description in the right sidebar. You can write your description using the visual [Postman editor](#writing-descriptions-in-the-postman-editor) or the classic [Markdown editor](#writing-descriptions-in-markdown). Both are compatible, so feel free to switch between the two editors as you work.

    <img alt="Switching editors" src="https://assets.postman.com/postman-docs/v10/documentation-switch-editor-icon-v10-16.jpg" width="600px">

1. Select outside of the editor to save your new content. If you ever need to make changes, you can edit the description again.

> To give users even more details about requests in your collection, add descriptions to the request [parameters and headers](#adding-descriptions-to-parameters-and-headers).

### Writing descriptions in the Postman editor

To write a description using rich text editing tools, select the **Postman editor** option. You can use the Postman editor to write a description without having to write any Markdown code. Use the tools on the toolbar to work with text and other content, as you would in a typical word processor. Or use common keyboard shortcuts to format text, like **⌘+B** or **Ctrl+B** to make text bold.

<img alt="Postman editor" src="https://assets.postman.com/postman-docs/v10/documentation-use-postman-editor-v10-16a.jpg" width="600px">

**View the tooltips to get help as you work.** Hold your cursor over an item on the toolbar to see a description of the tool and the associated keyboard shortcut. If all of the tools aren't visible on the toolbar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

<img alt="Postman editor toolbar" src="https://assets.postman.com/postman-docs/v10/documentation-wysiwyg-toolbar-v10-16.jpg" width="600px">

**Create tables without Markdown.** No need to fuss with Markdown code to get your tables to work. To add a table, select the **Table** tool. To add or remove columns or rows, or to delete the table, select a cell and then select the shortcut menu.

<img alt="Postman editor table shortcuts" src="https://assets.postman.com/postman-docs/v10/documentation-wysiwyg-table-tool-v10-16.jpg" width="600px">

**The Postman editor understands Markdown syntax.** If you're comfortable using Markdown, enter any standard [Markdown code](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to format text. For example, enter `#` followed by a space to start a new heading, or enter `---` to add a horizontal line. To reuse documentation that's already written in Markdown, copy the existing Markdown code and paste it into the editor to instantly format it.

> If you copy content from the Postman editor, the content will retain its formatting when you paste it into another application like a word processor or an email.

<img alt="Using Markdown shortcuts" src="https://assets.postman.com/postman-docs/v10/documentation-trigger-markdown-v10-16.gif" width="600px">

### Writing descriptions in Markdown

To write a description using Markdown, select the **Classic Markdown editor** option. Use standard [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to create your content:

* Structure content with headings, lists, and tables
* Format text with bold, emphasis, and blockquotes
* Add images, links, and code blocks

As you work, select the **Preview** tab to review how your documentation will appear and to make sure the formatting is correct. To continue editing, select the **Markdown** tab.

> Leave a blank line before and after [block elements](https://daringfireball.net/projects/markdown/syntax#block) (such as headings, paragraphs, and lists) to avoid any formatting issues.

<img alt="Markdown editor" src="https://assets.postman.com/postman-docs/v10/documentation-use-markdown-editor-v10-16.jpg" width="600px">

### Selecting a default documentation editor

You can choose the default editor you want to use for editing documentation descriptions in Postman. When you edit a description, Postman will switch to your preferred editor. (You can still switch between the Postman and Markdown editors while editing a description.)

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and then select **Settings**.
1. Under **User Interface**, select a **Default documentation editor** (Postman editor or Markdown editor).

### Adding descriptions to parameters and headers

Add descriptions to parameters and headers to help others understand and use the requests in your collection. Open a request and enter the description in the box next to the key-value pair.

![Parameter descriptions](https://assets.postman.com/postman-docs/v10/documentation-parameter-descriptions-v10-16.jpg)

The parameter and header descriptions are visible to people who have access to your collection or anyone viewing your [published documentation](/docs/publishing-your-api/publishing-your-docs/). The descriptions appear in the documentation along with the request, next to the parameter or header name.

> All key-value pairs are included in your documentation even if their checkboxes aren't selected. Use the description to note which parameters and headers are required and which are optional. Anyone using your collection can choose which key-value pairs to include when sending requests or [generating code snippets](/docs/sending-requests/create-requests/generate-code-snippets/).

## Including authorization details

Your documentation automatically includes the type of authorization required to access your endpoints. The authorization details appear below the collection description and also below each request in your documentation.

If you [specify authorization details](/docs/sending-requests/authorization/specifying-authorization-details/) for the collection, those authorization requirements are inherited by every request in the collection. If one of your endpoints requires a different authorization type, open the request and [change the authorization details](/docs/sending-requests/authorization/specifying-authorization-details/#inherit-authorization). The changes are reflected in your documentation.

<img alt="Authorization type in documentation" src="https://assets.postman.com/postman-docs/v10/documentation-authorization-v10-16.jpg" width="600px">

## Including examples

Examples are paired requests and responses that show your endpoints in action. Any [examples you add to a collection](/docs/sending-requests/response-data/examples/#adding-an-example) are automatically included in the documentation. For each request, your documentation shows the example code snippets as well the example response body and headers.

> Examples are displayed when you [view the complete documentation](/docs/publishing-your-api/viewing-documentation/#viewing-documentation-for-a-collection) for a collection or when you [view published documentation](/docs/publishing-your-api/viewing-documentation/#viewing-public-documentation).

<img alt="Examples in documentation" src="https://assets.postman.com/postman-docs/v10/documentation-including-examples-v10-16.jpg" width="708px">

## Adding links

Use links to direct users to your repository, website, or other online resources.

* To add a link using the Postman editor, select the **Link** tool. Paste or enter the URL and the link text, and then select **Add**. (If you need to change the link later, select it and then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.)

    <img alt="Adding a link" src="https://assets.postman.com/postman-docs/v10/documentation-link-tool-v10-16.jpg" width="600px">

* To add a link using the Markdown editor, use the following syntax:

    ```md
    [link text to display](https://your-link-url.com)
    ```

## Adding images

Images liven up your documentation and help your ideas come across with more clarity. You can upload an image file from your computer or embed an image that's hosted online.

### Uploading an image

To upload an image using the Postman editor, select the **Image** tool and select **Browse**. Select the image you want to upload and select **Open**. The Postman editor supports GIF, JPG, PNG, and SVG formats. The maximum supported image size is 5 MB.

> You can also upload an image by copying and pasting an image into the Postman editor, or by dragging an image file into the Postman editor.

<img alt="Uploading an image" src="https://assets.postman.com/postman-docs/v10/documentation-upload-image-v10-16.jpg" width="600px">

### Embedding an image

Your image must be hosted online (for example, on a website) before you can embed it in your documentation.

* To embed an image using the Postman editor, select the **Image** tool and select **Embed URL**. Paste or enter the URL of the image, and then select **Embed**.

    <img alt="Embedding an image" src="https://assets.postman.com/postman-docs/v10/documentation-embed-image-v10-16.jpg" width="600px">

* To embed an image using the Markdown editor, use the following syntax:

    ```md
    ![image alt text](https://your-image-location.com)
    ```

### Editing images

You can change an image after uploading or embedding it:

* To change an image in the Postman editor, first select it and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">. Then upload or embed a new image.

* To change an image in the Markdown editor, edit the Markdown code as needed.

* To resize an image, select the image in the Postman editor and drag the resize handles. You can also specify a new value for `width` in the Markdown editor.

* To add or edit a caption, select the image in the Postman editor and enter a caption below the image.

### Image storage limits

If you are on a [Postman Free plan](https://www.postman.com/pricing/) and aren't part of a team, the total size of your uploaded images is limited to 20 MB. If you are part of a team ([free or paid plans](https://www.postman.com/pricing/)), the total size of your team's uploaded images is limited to 100 MB.

To check how much storage you're using, go to your [billing dashboard](http://go.postman.co/billing) and select **Resource Usage**. The amount of space used by uploaded images and files appears under **Storage Usage**. To upgrade your available storage, contact [Postman support](https://www.postman.com/support/).

> When you reach 90% of your storage limit and above, you will get a warning each time you try to add an image. To learn more about the resources included with your Postman plan and what happens when you reach your usage limits, go to [About resource usage](/docs/billing/resource-usage/).

## Embedding videos

You can embed videos hosted on YouTube or Vimeo in your documentation. Your documentation displays a preview of the video, and users can select the preview to start playback without leaving Postman.

> You can't embed a video hosted on a service other than YouTube and Vimeo, but you can [add a link](#adding-links) to the video.

* To embed a video using the Postman editor, select the **Video** tool. Paste or enter the URL of the video, and then select **Embed**.

    <img alt="Embedding a video" src="https://assets.postman.com/postman-docs/v10/documentation-embed-video-10-16.jpg" width="600px">

* To embed a video using the Markdown editor, use the following syntax:

    ```md
    <video src="https://www.youtube.com/embed/FeqSWgx6FxY?si=-5pR5tgUQtPN8P6z" alt="View Public Workspace Metrics" width="340" height="170"></video>
    ```

> You can't play videos when editing documentation. Select **Save**, and then select the video to start playback.

You can change a video after uploading or embedding it:

* To change a video in the Postman editor, first select it and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">. Then embed a new video.

* To change a video in the Markdown editor, edit the Markdown code as needed.

* To resize a video preview, select the video in the Postman editor and drag the resize handles. You can also specify a new value for `width` in the Markdown editor.

* To add or edit a caption, select the video in the Postman editor and enter a caption below the video.

## Writing documentation with Postbot

Postbot can write documentation for your requests. Use Postbot to automatically add descriptions, including request parameters and response examples to your requests.

To write request docs with Postbot, do the following:

1. Select **Collections** in the sidebar, and then select a request.
1. Send the request so there is a response for Postbot to analyze.
1. Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> in the right sidebar and select the Postbot icon <img alt="Postbot icon" src="https://assets.postman.com/postman-docs/v10/icon-postbot-v10-16.jpg#icon" width="18px">. You can also select the Postbot icon in the footer.
1. Ask Postbot to add documentation to the request. You can simply enter “add documentation”, or ask for specific details, like “add docs and describe the 401 status code”.

  > You must start with an empty response description for Postbot to generate documentation. If there's already text in the description, clear it first.

For more information on Postbot, see [About Postbot](/docs/getting-started/basics/about-postbot/).

## Finding help and inspiration

**Need some help using Markdown?** Check out the Postman [Markdown demo collection](https://documenter.postman.com/view/4630964/S1LsXVJy) to learn how Markdown is formatted in published documentation. Select the **Run in Postman** button to add the demo collection to your workspace and view the Markdown code.

![Markdown demo collection](https://assets.postman.com/postman-docs/v10/documentation-markdown-demo-v10-16.jpg)

**Looking for some documentation inspiration?** Browse through the Public API Network to find examples of great documentation created in Postman.

1. Open the [Public API Network](https://www.postman.com/explore) page or select **API Network > View all public APIs** in the Postman header.
1. Select **Collections** or **Workspaces** in the left pane.

    ![Public API Network page](https://assets.postman.com/postman-docs/v10/documentation-explore-docs-v10-16.jpg)

1. Select a collection or workspace to access documentation written by others who are part of the Public API Network.

    ![Documentation example](https://assets.postman.com/postman-docs/v10/documentation-docs-example-v10-16.jpg)
