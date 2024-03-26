---
title: "Create and manage request collections in Postman"
updated: 2023-04-10
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Create a Postman Collection | Postman Level Up"
    url: "https://youtu.be/NlrPjuXEaZ8"
  - type: link
    name: "Use Collection and Workspace Templates"
    url: "https://youtu.be/QAIH1D203Wg"
  - type: link
    name: "Postman Collections | The Exploratory"
    url: "https://youtu.be/GtGQ3YsOrt4"
  - type: dynamic_blog
    name: "Blog posts"
    blog_tag: "collections"
---

Learn how to create and manage Postman Collections, use collections in development workflows, apply collection templates, and save multi-protocol requests into collections.

## Contents

* [Creating collections](#creating-collections)
* [Adding requests to a collection](#adding-requests-to-a-collection)
    * [Moving an existing request to a different collection](#moving-an-existing-request-to-a-different-collection)
    * [Adding a new request to a collection](#adding-a-new-request-to-a-collection)
    * [Creating a new request inside a collection](#creating-a-new-request-inside-a-collection)
    * [Adding a request to an empty collection](#adding-a-request-to-an-empty-collection)
    * [Adding a request from your history to a collection](#adding-a-request-from-your-history-to-a-collection)
* [Managing collections](#managing-collections)
    * [Basic actions](#basic-actions)
    * [Adding folders to a collection](#adding-folders-to-a-collection)
    * [Deleting a collection](#deleting-a-collection)
    * [Recovering a deleted collection](#recovering-a-deleted-collection)
    * [Sharing a collection](#sharing-a-collection)
    * [Tagging a collection](#tagging-a-collection)
    * [Watching a collection](#watching-a-collection)
    * [Forking a collection](#forking-a-collection)
    * [Adding comments to a collection](#adding-comments-to-a-collection)
    * [Reverting collection changes](#reverting-collection-changes)
    * [Viewing pull requests, forks, and collection details](#viewing-pull-requests-forks-and-collection-details)
* [Using collections in development workflows](#using-collections-in-development-workflows)
* [Using collection templates](#using-collection-templates)
* [About multi-protocol request collections](#about-multi-protocol-request-collections)

## Creating collections

There are several ways to create a new collection:

* Select **Collections** in the sidebar, then select **+**.

    <img alt="Create new collection" src="https://assets.postman.com/postman-docs/v10/new-collection-v10.jpg" width="300px"/>

* Select **New**, then select **Collection**.
* With **Collections** open in the left sidebar, select **+**.
* In an empty workspace, select **Create Collection**.
* You can also [create a collection from a template](#using-collection-templates).

To customize and configure a new collection, do the following:

1. Select the collection name to give your new collection a name.
1. You can optionally enter a [description](/docs/publishing-your-api/authoring-your-documentation/) for your collection in the **Overview** tab. This description will appear in its documentation and in the workspace when anyone opens it.
1. Select **Authorization** to configure authorization details for the collection.
1. Select **Pre-request Script** to define a [pre-request script](/docs/writing-scripts/pre-request-scripts/) for your collection, which will run before requests are sent to the server.
1. Select **Tests** to define a [test script](/docs/writing-scripts/test-scripts/) for your collection, which will run after a response is received.
1. Select **Variables** to define values for [collection variables](/docs/sending-requests/variables/variables/) to share across all requests in the collection.

> You can turn on autosave to automatically save your changes to collections, requests, and environments. Learn more about [autosave](/docs/getting-started/installation/settings/#application).

![Edit collection details](https://assets.postman.com/postman-docs/v10/collection-details-v10-2.jpg)

## Adding requests to a collection

There are several ways to add existing and new requests to a collection.

### Moving an existing request to a different collection

To move an existing request to a different collection, do the following:

1. Select the request you want to move.
1. Drag the request into the desired collection.

> Alternatively, open the request and select **Save As**, then choose the collection you want to copy it to.

To move more than one request to a different collection, do the following:

1. Press and hold **⌘** or **Ctrl**, then select the requests you want to move.
1. Drag the requests into the desired collection.

### Adding a new request to a collection

1. From a new request, select **Save**.
1. Choose the collection you want to move it to, and then select **Save**.
1. To create a new collection to save the request to, select **New Collection**.

### Creating a new request inside a collection

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection name.
1. Select **Add Request** from the actions menu.

    <img alt="Add request to folder" src="https://assets.postman.com/postman-docs/v10/collection-menu-v10.jpg" width="350px"/>

### Adding a request to an empty collection

Select the collection, then select **Add a request**.

<img alt="Add a request to an empty collection" src="https://assets.postman.com/postman-docs/empty-collection-add-request.jpg" width="290px"/>

### Adding a request from your history to a collection

1. Select **History** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the request you want to save.
1. Select **Save request**.

    <img alt="Save request from history" src="https://assets.postman.com/postman-docs/v10/save-history-v10.jpg" width="350px"/>

1. Choose the collection to add the request to, then select **Save**.

> Alternatively, select **+** next to the request.

## Managing collections

### Basic actions

From the list of collections in your workspace, you can:

* Select a collection to open its overview in a tab.
* Open and close collection content by selecting the arrow next to the collection name.
* Hover over a collection name and select the star icon &#9733; to move that collection to the top of the list.
* Use the collection search bar to filter through your collections.
* Reorder the requests, folders, and examples inside a collection by dragging and dropping them.

### Adding folders to a collection

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection name.
1. Select **Add folder**.

You can also add sub-folders to create extra levels of nesting for the collection's requests and examples.

### Deleting a collection

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection name.
1. Select **Delete**.

You can also select the collection and press **Delete** on your keyboard.

> If a deleted collection is larger than 30 MB, you won't be able to [recover it](#recovering-a-deleted-collection). To avoid this, you can split the collection into smaller pieces before deleting it, or back up the collection first.

### Recovering a deleted collection

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection search bar.
1. Select **Open Trash**.

    > Alternatively, select <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> **Trash** from the Postman footer.

1. In the Trash page, select the restore icon <img alt="Restore icon" src="https://assets.postman.com/postman-docs/icon-restore-v9.jpg" width="14px"> next to the collection you want to recover.

> Deleted collections that are larger than 30 MB can't be recovered.

Recovery options depend on your Postman plan:

* Free account: Recover collections for up to one day.
* Postman Basic: Recover collections for up to 30 days.
* Postman Professional and Enterprise: Recover collections for up to 90 days.

> If a collection that you expected to be in the Trash isn't there, it may have been removed from a workspace rather than deleted. If the collection appears in another workspace, you can move it by selecting **Share**.

### Sharing a collection

To share a collection with other users, you can:

* Publish a [Run in Postman](/docs/publishing-your-api/run-in-postman/creating-run-button/) button.
* Invite others to collaborate by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection name, then selecting **Share**. Learn more about [sharing elements in Postman](/docs/collaborating-in-postman/sharing/#sharing-postman-elements).
    * To share a URL to a collection, folder, request, or example with an active environment selected, [choose an environment using the environment selector](/docs/sending-requests/variables/managing-environments/#switch-between-environments), copy the element's link to your clipboard, then send the link to team members you want to share with.
* Allow external users who aren't in your Postman team to view collections by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection name, selecting **Share**, then turning on the toggle next to **Allow Guests to join your team and view this collection with the link**. Learn more about [allowing external users to view collections](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections).
* Move the collection to a shared workspace by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection name, then selecting **Move**. Learn more about [moving Postman elements](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/#moving-elements-to-team-workspaces).
* ([Enterprise](https://www.postman.com/pricing/)) Add the collection to your team's [Private API Network](/docs/collaborating-in-postman/private-api-network/private-network-requests/#requesting-to-add-a-collection-from-the-workbench).

### Tagging a collection

> **[Tagging collections is available on Postman Enterprise plans.](https://www.postman.com/pricing/)** You can apply shared tags to workspaces, collections, and APIs. Tags must be between two and 64 alphanumeric characters, starting with an alphabetic character, and contain only dashes and no spaces. You can add up to five tags.

Adding shared tags to collections enables you to organize and search for collections.

Once you add tags to the collection, you can select a tag to open search results associated with the tag in a new tab.

To learn more about searching using tag names in Postman, see [Search Postman](/docs/getting-started/basics/navigating-postman/#search-postman). You can also search using tag names in the Private API Network when searching [elements in the network](/docs/collaborating-in-postman/private-api-network/adding-private-network/#searching-filtering-and-sorting), [elements to add to the network](/docs/collaborating-in-postman/private-api-network/organizing-private-network/#adding-elements-in-your-private-api-network), and [elements to request to add to the network](/docs/collaborating-in-postman/private-api-network/private-network-requests/#requesting-to-add-elements-in-your-private-api-network).

To add tags to a collection, do the following:

1. Select **Collections** in the sidebar.
1. Select a collection.
1. Select the **Tags** section to edit it.

    <img alt="Add tags to a collection" src="https://assets.postman.com/postman-docs/v10/add-tags-collection-v10.jpg"/>

1. Select an existing tag or enter a new tag. If you're adding a new tag, enter the new tag name and then select **Create "*tag-name*"**.

    <img alt="Add new tags to a collection" src="https://assets.postman.com/postman-docs/v10/create-new-tags-collection-v10.jpg"/>

1. Select the area outside of the **Tags** section to save your changes.

To remove tags from a collection, do the following:

1. Select **Collections** in the sidebar.
1. Select a collection.
1. Select the **Tags** section to edit it.
1. Select the close icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> next to a tag.

    <img alt="Remove tags from a collection" src="https://assets.postman.com/postman-docs/v10/remove-tags-collection-v10.jpg"/>

1. Select the area outside of the **Tags** section to save your changes.

### Watching a collection

When you watch a collection, Postman notifies you when a workspace team member makes changes to the collection, including adding a new request, modifying the existing requests, adding or updating variables, editing pre-request scripts or tests, and adding or deleting a folder. You can watch a collection that you own, as well as collections in any public workspace.

To watch a collection, do the following:

1. Select the watch icon <img alt="Watch icon" src="https://assets.postman.com/postman-docs/eye.jpg#icon" width="16px"> to start watching the collection.

![Collection watching](https://assets.postman.com/postman-docs/v10/collection-watching-overview-v10.jpg)

To view notifications about what has changed in a collection you watch, do the following:

1. Select the notifications icon <img alt="Notification icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> in the Postman header to view the notification. Select **View changelog** to view the collection's changelog.

    <img alt="Notification Collection Watching" src="https://assets.postman.com/postman-docs/collection-watch-notification-v9.19.jpg" width="500px"/>

1. You will also receive an email with the information regarding who made the change, what the change was, and when it was made. Select **View changelog** in the email to access the full changelog in Postman.

> If you create a collection and change it from the same Postman account, you won't receive notifications for any changes you make to that collection.

### Forking a collection

You can fork collections in your own workspace to [develop collection versions](/docs/collaborating-in-postman/using-version-control/version-control-overview/).

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection name.
1. Select **Fork**.

> Alternatively, select the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> from the collection overview.

### Adding comments to a collection

1. Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar and enter your comment.
1. (Optional) Select the **Watch collection** checkbox to be notified when there are changes to the collection.
1. Select **Comment** to add your comment.

> To learn more about using comments to collaborate on collections and requests, go to [Comment on collections, folders, and requests](/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/).

### Reverting collection changes

To revert your collection to an earlier state, do the following:

1. Select the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> on the right.
2. Select a session to expand it.
3. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the change you'd like to restore your collection to, then select **Restore to this change**.

    <img alt="Restore from changelog" src="https://assets.postman.com/postman-docs/changelog-restore-v9.16.jpg" width="350px"/>

Restoring a collection from the changelog reverts it to the point immediately after your selected change occurred.

### Viewing pull requests, forks, and collection details

From the right sidebar:

* To view pull requests for a collection, select the pull request icon <img alt="Pull request icon" src="https://assets.postman.com/postman-docs/icon-pull-request.jpg#icon" width="16px">
* To view forks created from a collection, select the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="16px">
* To view more information about the collection, including mock servers, monitors, and integrations, select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px">

## Using collections in development workflows

Collections can power various parts of your API development, testing, and publishing workflows.

* Select **Run** to access the [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/), which allows you to run all requests in a collection and build testing workflows into your runs.
* Select **View complete documentation** in the collection's **Overview** tab to generate [documentation](/docs/publishing-your-api/document-a-collection/) from a collection.
* Attaching a [monitor](/docs/monitoring-your-api/intro-monitors/) to a collection lets you schedule collection runs. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection name, and then select **Monitor collection**.
* You can use [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) to return sample data during testing and development. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection name, and then select **Mock collection**.
* Generate collections from API specifications using the [Postman API Builder](/docs/designing-and-developing-your-api/the-api-workflow/).

## Using collection templates

Not sure where to start when creating a collection? Instead of starting from scratch, you can create a collection from a template. Several collection templates are available for getting started with integrations, API documentation, conditional workflows, or data visualization.

There are several ways to create a collection from a template:

* When you first create your account, you will be asked if you want to create a collection from a template.
* In an empty workspace, in the left sidebar, select **Use a Template**.
* Select **New**, then select **Use a template**.
* In an empty collection, on the **Overview** tab, select a template.

## About multi-protocol request collections

You can also save multi-protocol requests, such as [WebSocket](/docs/sending-requests/websocket/websocket-overview/) and [gRPC](/docs/sending-requests/grpc/grpc-client-overview/) requests, into collections.

Because multi-protocol requests have different features than HTTP requests, when they're saved to a collection, it causes the collection to be in a "beta" state with certain limitations.

When in this state, a collection can only contain WebSocket or gRPC requests, and not HTTP requests. Some features related to collections also aren't supported.
