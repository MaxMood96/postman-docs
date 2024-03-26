---
title: "Share and collaborate on APIs in Postman"
updated: 2023-07-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing tags: the new way to navigate in Postman"
    url: "https://blog.postman.com/introducing-tags-the-new-way-to-navigate-in-postman/"
---

When you [define your APIs](/docs/designing-and-developing-your-api/the-api-workflow/) in Postman using the API Builder, each API is associated with a workspace. You can share access to your APIs, discuss them in comments, and view schema activity.

## Contents

* [Sharing APIs](#sharing-apis)
* [Collaborating on APIs](#collaborating-on-apis)
* [Tagging APIs](#tagging-apis)
* [Watching APIs](#watching-apis)
* [Commenting on APIs](#commenting-on-apis)
* [Using the changelog](#using-the-changelog)

## Sharing APIs

You can share APIs with collaborators by going to the API you want to share in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the API you want to share, then select **Share**.

<img alt="Share API" src="https://assets.postman.com/postman-docs/v10/share-api-v10-21.jpg"/>

For more details about sharing APIs, see [Share your work in Postman](/docs/collaborating-in-postman/sharing/).

## Collaborating on APIs

You can move APIs to shared private, team, or public workspaces to [collaborate with your team](https://www.postman.com/api-platform/api-collaboration/) on API development.

> You must be an [Admin](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) on an API or the [Workspace Admin](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) to move the API to another workspace. Learn more about [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

To move an API to a shared workspace, do the following:

1. Select **APIs** in the sidebar.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an API and select **Move**.

1. Use the search box to find the workspace you want to move the API to, or select the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px"> to filter workspaces by visibility.

    > You can move APIs to personal, private, team, and public workspaces that you have access to. You can't move APIs from team, private, or public workspaces to a personal workspace.

1. Select the workspace, then select **Move API**. Any collections in the API will move with the API to the new workspace.

<img alt="Move API" src="https://assets.postman.com/postman-docs/move-api-v9.1.jpg" width="400px"/>

## Tagging APIs

> **[Tagging APIs is available on Postman Enterprise plans.](https://www.postman.com/pricing/)** You can apply shared tags to workspaces, collections, and APIs. Tags must be between two and 64 alphanumeric characters, starting with an alphabetic character, and contain only dashes and no spaces. You can add up to five tags.

Adding shared tags to APIs enables you to organize and search for APIs.

Once you add tags to the API, you can select a tag to open search results associated with the tag in a new tab.

To learn more about searching using tag names in Postman, see [Search Postman](/docs/getting-started/basics/navigating-postman/#search-postman). You can also search using tag names in the Private API Network when searching [elements in the network](/docs/collaborating-in-postman/private-api-network/adding-private-network/#searching-filtering-and-sorting), [elements to add to the network](/docs/collaborating-in-postman/private-api-network/organizing-private-network/#adding-elements-in-your-private-api-network), and [elements to request to add to the network](/docs/collaborating-in-postman/private-api-network/private-network-requests/#requesting-to-add-elements-in-your-private-api-network).

To add tags to an API, do the following:

1. Select **APIs** in the sidebar.
1. Select an API.
1. Select the **Tags** section to edit it.

    <img alt="Add tags to an API" src="https://assets.postman.com/postman-docs/v10/add-tags-api-v10-2.jpg"/>

1. Select an existing tag or enter a new tag. If you're adding a new tag, enter the new tag name and then select **Create "*tag-name*"**.

    <img alt="Add new tags to an API" src="https://assets.postman.com/postman-docs/v10/create-new-tags-api-v10-2.jpg"/>

1. Select the area outside of the **Tags** section to save your changes.

To remove tags from an API, do the following:

1. Select **APIs** in the sidebar.
1. Select an API.
1. Select the **Tags** section to edit it.
1. Select the close icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> next to a tag.

    <img alt="Remove tags from an API" src="https://assets.postman.com/postman-docs/v10/remove-tags-api-v10.jpg"/>

1. Select the area outside of the **Tags** section to save your changes.

## Watching APIs

The watch option enables you to receive an email or in-app notification when a team member belonging to the same workspace modifies the API. For example, you'll receive a notification when a team member updates the API's definition, adds an element to the API, or adds a comment to the API.

Select __Watch__ to start watching the API.

<img src="https://assets.postman.com/postman-docs/v10/watch-api-v10.jpg" alt="Watch Option" width="249px"/>

For more information about the changes to the API, select the notifications icon <img alt="Notifications icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> in the Postman header.

You will also receive an email with the information regarding who made the change, what the change was, and when it was made.

> You won't receive notifications for changes that you made.

## Commenting on APIs

You can add one or more comments to an API. Use comments to discuss your APIs with collaborators in Postman, keeping the conversation in context and available to other stakeholders.

API producers ([Admin role](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) or [Editor role](/docs/collaborating-in-postman/roles-and-permissions/#api-roles)) can add comments to an API. API consumers ([Viewer role](/docs/collaborating-in-postman/roles-and-permissions/#api-roles)) can't add comments to an API and won't see comments made by API producers. However, API consumers can comment on [published versions](#commenting-on-published-apis) of an API.

To add a new comment to an API, do the following:

1. Select **APIs** in the sidebar and select the API you want to comment on.
1. Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar.
1. Enter your comment and select **Comment**.

<img alt="Commenting on an API" src="https://assets.postman.com/postman-docs/v10/api-builder-add-comment-v10-16.jpg" width="443px" />

> You can also add comments to collections you've added to your API and to requests and folders in that collection. Learn more about [commenting on a collection](/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/#commenting-on-a-collection).

To leave an inline comment on an API definition, do the following:

1. Select an API in the sidebar to expand it.
1. Select **Definition** under the API, then select the definition file you want to comment on.
1. Switch to comment mode by selecting the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the editor pane.
1. Highlight part of the definition, enter your comment, and select **Comment**.

<img alt="Adding an inline comment" src="https://assets.postman.com/postman-docs/v10/api-builder-comment-mode-v10-10.jpg" />

### Formatting API comments

You can use Markdown in your comments. Check out the [Markdown Cheatsheet on GitHub](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for tips on formatting.

To mention a collaborator in a comment, type `@` followed by their name, then choose the person from the auto-suggested list. When you mention a teammate in a comment, Postman sends them a notification.

### Editing, deleting, or linking to an API comment

To manage API comments, select an API or a definition file in the sidebar, then select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar.

Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a  comment and do one of the following:

* Select **Copy link** to copy a direct link to the comment to your clipboard. Share the link with your teammates so they can view or reply to the comment.
* Select **Edit** to make changes to the comment.
* Select **Delete** to delete the comment.

<img alt="Managing an API comment" src="https://assets.postman.com/postman-docs/v10/api-builder-manage-comment-v10-16.jpg" width="443px" />

> If you have the Admin role for the workspace, you can delete comments made by any contributor, but you can't edit comments made by others.

### Replying to an API comment

To reply to an API comment, select an API or a definition file in the sidebar, then select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar. Select **Reply** on the comment you want to reply to. Enter your reply and select **Reply**.

<img alt="Replying to an API comment" src="https://assets.postman.com/postman-docs/v10/api-builder-reply-comment-v10-16.jpg" width="443px" />

### Resolving API comments

You can resolve a comment after it's been addressed. Select an API or a definition file in the sidebar, then select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar. Select the resolve icon <img alt="Resolve comment icon" src="https://assets.postman.com/postman-docs/v10/icon-resolve-comment-v10.jpg#icon" width="18px"> to resolve a comment and any associated replies.

<img alt="Resolving an API comment" src="https://assets.postman.com/postman-docs/v10/api-builder-resolve-comment-v10-16.jpg" width="443px" />

> You can't undo resolving a comment, but you can view resolved comments by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px"> in the comments pane.

### Commenting on published APIs

You can [publish your API](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/) to share the current state of your API with consumers. Keep in mind the following when publishing an API:

* When you publish an API version, comments made by API producers aren't published with the API.
* API consumers can't add comments to an API, but they can add comments to a published API version.

### Commenting on Git-linked APIs

You can [connect a Git repository](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/) to your API to sync your API between Postman and the repository. Keep in mind the following differences when commenting on Git-linked APIs:

* Comments are associated with a branch. If you add a comment while working on one branch, those comments won't be visible when you [switch to another branch](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/#switching-branches).
* You must [commit and push changes](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/#committing-and-pushing-changes) on a branch before you can add a new comment on that branch. (You can reply to an existing comment without committing and pushing changes.)
* When you [merge a branch](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/#creating-a-pull-request), comments remain on the branch being merged and aren't merged to the target branch.

## Using the changelog

You can view a history of changes to your API schemas and all linked collections. To access the changelog, open an API, then select the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog.jpg" width="25px" style="vertical-align:middle;margin-bottom:0px"> in the right sidebar.

> If you connect your API to a Git repository, the changelog is replaced by the **Source Control** pane. Learn more about [API version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/).

The changelog shows a list of changes made to the schema and associated elements. Select each entry for more details.

<img src="https://assets.postman.com/postman-docs/v10/api-builder-changelog-v10.jpg" alt="API Builder changelog" width="443px" />
