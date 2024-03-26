---
title: "Work with API definitions in Postman"
updated: 2023-05-18
search_keyword: "schema, spec, specification"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Set up an API Definition"
    url: "https://youtu.be/LQT_9-oasJg"
  - type: link
    name: "Develop an API Definition"
    url: "https://youtu.be/-2bMT1EntD8"
  - type: link
    name: "A Few JSON Schema Tips & Tricks: Getting Started"
    url: "https://www.youtube.com/live/QiAXxaLrt7E?feature=share"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "The Reimagined API-First Workflow, Part 1: for Developers"
    url: "https://blog.postman.com/the-reimagined-api-first-workflow-for-developers/"
  - type: link
    name: "Build better APIs using the new and improved API Builder"
    url: "https://blog.postman.com/build-better-apis-using-the-new-and-improved-api-builder/"
---

You create the structure of your API using the _API definition_. The API definition can consist of one or multiple files. If your API doesn't have a definition, you can add an example definition, import a definition, or add a definition from a connected repository.

> Postman supports OpenAPI (versions 1.0, 2.0, 3.0, and 3.1), RAML (0.8 and 1.0), protobuf (protocol buffer) (2.0 and 3.0), GraphQL, or WSDL (1.0 and 2.0) definitions. OpenAPI definitions can be JSON or YAML. RAML definitions must be YAML. Protobuf definitions are `.proto` files. GraphQL definitions can be JSON or GraphQL SDL. WSDL definitions must be XML.

## Contents

* [Adding an example API definition](#adding-an-example-api-definition)
* [Importing an API definition](#importing-an-api-definition)
* [Adding an API definition from a connected repository](#adding-an-api-definition-from-a-connected-repository)
* [Editing an API definition file](#editing-an-api-definition-file)
    * [Previewing schema documentation](#previewing-schema-documentation)
* [Working with multi-file API definitions](#working-with-multi-file-api-definitions)
    * [About root files](#about-root-files)
    * [Editing a multi-file API definition](#editing-a-multi-file-api-definition)
    * [Adding files and folders](#adding-files-and-folders)
    * [Adding files from a connected repository](#adding-files-from-a-connected-repository)
    * [Deleting files and folders](#deleting-files-and-folders)

## Adding an example API definition

If your API doesn't have a definition, you can add an example definition that you can edit.

1. Select **APIs** in the sidebar and select an API.
1. From the API's overview, next to **Definition**, select **+** and then select **Author from scratch**. Alternatively, select **create** in the sidebar under the API.

1. Select the definition type and format. This example uses OpenAPI and YAML.
1. To start with a sample definition, select **Use a boilerplate**.

    <img alt="Generating an API definition" src="https://assets.postman.com/postman-docs/v10/api-builder-author-definition-v10.16.jpg" width="400px"/>

1. Select **Create Definition**.

## Importing an API definition

You can import a file into your API to define your API.

1. Select **APIs** in the sidebar and select an API.
1. On the API's overview, next to **Definition**, select **+** and select **Import files**.

    > You can also select the API in the sidebar and select **Import**.

1. Select or drag the file you want to import.

> You can also import an API from a folder, a link, a code repository, or an API gateway. Learn more about [importing an API](/docs/designing-and-developing-your-api/importing-an-api/).

## Adding an API definition from a connected repository

If your API is [connected to a Git repository](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/#connecting-to-a-remote-git-repository), you can select a definition file in your repository and add it to your API.

1. Select **APIs** in the sidebar and select an API.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the API and select **Add definition > Add from connected repository**.

    <img alt="Adding a definition from a connected repository" src="https://assets.postman.com/postman-docs/v10/api-builder-add-definition-from-git-v10-18.jpg" />

1. Enter the file path (in the repository) of the definition file you want to add and select **Select**.

    > For OpenAPI 2.0 and 3.0 and protobuf 2.0 and 3.0 APIs, you can select more than one file to add from the repository. Learn more about [working with multi-file API definitions](#working-with-multi-file-api-definitions).

    <img alt="Selecting a definition file" src="https://assets.postman.com/postman-docs/v10/api-builder-select-definition-file-v10-18.jpg" />

1. Select **Add Files**.

    The definition files you selected are added to your API. For OpenAPI 2.0 and 3.0 APIs, Postman scans for any dependent files referenced in the definition files and automatically adds them to your API.

## Editing an API definition file

To edit an API definition, select an API in the sidebar to expand it, then select **Definition**. Select an API definition file in the sidebar to open it for editing.

> You can also edit your definition from your API's overview. Under **Definition**, select **View files**.

The left pane of the editor displays an outline of your API definition. When you first open the editor, the top level nodes are expanded, and you can select a node to expand or collapse it. Select an element in the outline to jump to it in the editor. You can also select the API definition outline icon <img alt="API definition outline icon" src="https://assets.postman.com/postman-docs/icon-schema-outline-v9.jpg#icon" width="16px"/> to hide or show the outline.

<img alt="Editing an API definition" src="https://assets.postman.com/postman-docs/v10/api-builder-edit-definition-v10-21.jpg"/>

In the API definition editor, when you hover over a `#ref` component and press **⌘** or **Ctrl**, a popup window displays the first 200 characters of the reference component. Select the component while pressing **⌘** or **Ctrl** to jump to the reference location.

<img alt="Jumping to a reference location" src="https://assets.postman.com/postman-docs/v10/api-builder-ref-jump-v10.jpg"/>

In the upper right of the API definition editor are options to beautify the content, wrap text, copy, change the file format, and search. When you finish editing your API definition, select **Save**.

<img alt="API Builder editing options" src="https://assets.postman.com/postman-docs/v10/api-builder-edit-options-v10-21.jpg"/>

> Postman will indicate any [validation errors](/docs/designing-and-developing-your-api/developing-an-api/validating-elements-against-schema/) as you work on your API definition.

### Previewing schema documentation

If you are editing an OpenAPI 2.0 or 3.0 definition, Postman displays a live preview of your API's schema documentation in the right sidebar. The documentation preview is updated as you edit the definition. You can use the preview to help you visualize your changes as you work.

The live preview shows documentation for the `General`, `Servers`, and `Paths` sections of your API definition. The preview doesn't show documentation for other sections such as `Components` and `Security`. Learn more about [viewing schema documentation](/docs/publishing-your-api/documenting-your-api/#view-schema-documentation) for your API.

<img alt="Schema documentation live preview" src="https://assets.postman.com/postman-docs/v10/api-builder-docs-preview-v10-21.jpg"/>

To hide or show the documentation preview, select the documentation icon
<img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> in the right sidebar. To give yourself more space for editing your definition, select the fullscreen icon <img alt="Full screen icon" src="https://assets.postman.com/postman-docs/icons/icon-full-screen.jpg#icon" width="16px"/>. To exit fullscreen, select the exit fullscreen icon <img alt="Full screen icon" src="https://assets.postman.com/postman-docs/icons/icon-exit-fullscreen.jpg#icon" width="16px"/>.

<img alt="Fullscreen view for schema documentation" src="https://assets.postman.com/postman-docs/v10/api-builder-fullscreen-v10-21.jpg"/>

## Working with multi-file API definitions

Your API definition can span multiple files and folders. This is called a _multi-file API definition_. Multi-file API definitions are supported in OpenAPI 2.0 and 3.0 APIs and protobuf 2.0 and 3.0 APIs.

A multi-file API definition consists of the following components:

* **API Definition** - The entire definition of the API, combining all files within it.
* **Files** - One or more files that specify the API definition.
* **Root file** - The top-level file that hosts the operations defined by the API. See below for more information on root files.
* **Folders** - You can create folders within an API definition to organize files. (You can also add folders within folders.)

> Multi-file API definitions don't support the schema sync integration. Instead, use [API version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/) to sync with a repository.

<!-- -->

> You can't manage a multi-file API definition using the Postman API.

### About root files

An API definition's root file can reference other files in the API definition. If you made a tree diagram of the relationships between all files in an API definition, the root file would be the file at the top of the tree. When you [create a new API definition](/docs/designing-and-developing-your-api/creating-an-api/) or [import an API](/docs/designing-and-developing-your-api/importing-an-api/), Postman determines the root file based on the references across the files. API definitions don't support references which are external links or present within a separate API.

For OpenAPI 2.0 and 3.0 API definitions, Postman detects root files based on the content and references within files while importing or creating an API definition. You can't set a file as root for OpenAPI definitions. OpenAPI definitions can have one root file. If you delete the root file, Postman will recalculate the next candidate for the root file automatically.

For protobuf API definitions, while importing the API, Postman detects all files which have service definitions present in them and marks one as the root. You can set another file as root if there's more than one candidate for root file. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a `.proto` file in the sidebar and select **Mark as root**.

### Editing a multi-file API definition

To edit a multi-file API definition, select an API in the sidebar to expand it, then select **Definition**. If your definition has folders, select a folder in the sidebar to expand it and see its contents. Select a file to open it for editing.

### Adding files and folders

You can add new files and folders to a multi-file API definition. In the sidebar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to **Definition**, then select **Add file** or **Add folder**. (If your API is [connected to a Git repository](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/#connecting-to-a-remote-git-repository), select **Add file > Create new** to add a new file.)

<img alt="Adding a file to an API" src="https://assets.postman.com/postman-docs/v10/api-builder-add-file-v10.jpg" width="382px"/>

To add a new file or subfolder to a folder, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a folder, then select **Add file** or **Add folder**. You can rearrange files and folders by dragging them in the sidebar. You can also rename or delete a file or folder by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

> When you add a file to a single-file OpenAPI 2.0 or 3.0 definition, or to a protobuf 2.0 or 3.0 definition, it's converted to a multi-file API definition. The existing definition file becomes the root file.

### Adding files from a connected repository

If your API is [connected to a Git repository](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/#connecting-to-a-remote-git-repository), you can add files from your repository.

1. Select **APIs** in the sidebar and select an API.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to **Definition** and select **Add file > Add from connected repository**.

    <img alt="Adding a file from a connected repository" src="https://assets.postman.com/postman-docs/v10/api-builder-add-file-from-git-v10-18.jpg" />

1. Enter the file path (in the repository) of the definition file you want to add and select **Select**. You can select more than one file to add from the repository.

    <img alt="Selecting a definition file" src="https://assets.postman.com/postman-docs/v10/api-builder-select-files-from-git-v10-18.jpg" />

1. Select **Add Files**.

    The definition files you selected are added to your API. For OpenAPI 2.0 and 3.0 APIs, Postman scans for any dependent files referenced in the definition files and automatically adds them to your API.

> The **Add file > Add from connected repository** option isn't available for Git integrations added using Postman v10.17 or earlier. Instead, add the definition files to the schema directory in the repository. Alternately, you can [remove the Git integration](/docs/designing-and-developing-your-api/versioning-an-api/using-cloud-git-repo/#disconnecting-a-cloud-hosted-repository) and then [reconnect your API to the Git repository](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/#connecting-to-a-remote-git-repository).

### Deleting files and folders

To delete a definition file or folder, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the item and select **Delete**. Deleting a file or folder doesn't affect other elements added to the API, such as collections.

You can restore a deleted definition file using the [Changelog](/docs/designing-and-developing-your-api/managing-apis/#using-the-changelog). Select the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> in the right sidebar, then select **Restore** below the definition file you want to restore.

If your API is [connected to a Git repository](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/#connecting-to-a-remote-git-repository), you have the option to remove or delete a file. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a file and select **Delete**, then choose an option:

* Select **Delete File** to delete the file from your API and your repository. The file will be deleted from your repository when you push changes from Postman.
* Select **Remove File** to remove the file from your API in Postman. The file won't be deleted from your repository.

    <img alt="Deleting a definition file" src="https://assets.postman.com/postman-docs/v10/api-builder-delete-file-v10-18a.jpg" width="443px"/>

> **About definition IDs.** When you add a definition to an API, Postman assigns a definition ID to the API. You can view the definition ID by opening an API and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. The definition ID acts as a container for all the definition files in the API. If you delete all the definition files, the definition ID itself isn't deleted. If you then add a new definition file, the definition ID remains the same as before.
