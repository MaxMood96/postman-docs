---
title: "Comment on collections, folders, and requests"
updated: 2023-11-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Collaboration & Documentation | Postman Enterprise"
    url: "https://youtu.be/u1yEOo0dPfk"
  - type: link
    name: "Inline Comments | Postman Level Up"
    url: "https://www.youtube.com/watch?v=fkYiyCj43uk&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=6"
---

Use comments to discuss your work with your teammates in Postman. You can add comments to collections, folders, requests, examples, and pull requests. Reply to a comment to keep the discussion going, or resolve a comment if it's been addressed. If you have questions or feedback, you can let your teammates know by mentioning them in your comments.

> You can also add comments to APIs and API definitions in Postman. Learn more about [commenting on APIs](/docs/designing-and-developing-your-api/managing-apis/#commenting-on-apis).

## Contents

* [Add comments](#add-comments)
    * [Add inline comments to a request or example](#add-inline-comments-to-a-request-or-example)
    * [Add inline comments to a pull request](#add-inline-comments-to-a-pull-request)
    * [Edit, delete, or link to a comment](#edit-delete-or-link-to-a-comment)
* [Reply to comments](#reply-to-comments)
* [Resolve comments](#resolve-comments)
* [Mention teammates in comments](#mention-teammates-in-comments)

## Add comments

You can add comments to a collection in Postman. You can also add comments to folders, requests, examples, or pull requests in collections. When you add a comment, Postman notifies other collection contributors about your comment.

> You must have access to a collection to add comments to it.

To add a comment to a collection, folder, request, example, or pull request, do the following:

1. Select **Collections** in the sidebar and select the collection, folder, request, example, or pull request you want to comment on.
1. Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar and enter your comment.

    > Postman supports Markdown in comments. See the [Markdown Cheatsheet on GitHub](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for tips on formatting.

1. (Optional) Select the **Watch collection** checkbox to be notified when there are changes to the collection. This option isn't available when commenting on pull requests.

1. Select **Comment** to add your comment.

![Commenting on a collection](https://assets.postman.com/postman-docs/v10/commenting-on-a-collection-v10-18d.jpg)

### Add inline comments to a request or example

Use inline comments to comment on a specific part of a request or example. You can add comments to parameters, headers, and request bodies. You can also add comments to parts of a pre-request script or a test script. When there are new inline comments, a notification appears on the comments icon <img alt="Inline comments icon" src="https://assets.postman.com/postman-docs/v10/icon-comments-notification-v10.jpg#icon" width="23px"> in the request pane.

> Before you switch to comment mode, make sure to save your changes first.

To add an inline comment to a request or example, do the following:

1. Open the request or example.
1. Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the request pane to switch to comment mode.

    ![Switching to comment mode](https://assets.postman.com/postman-docs/v10/commenting-mode-v10-16a.jpg)

1. Select the part of the request or example you want to comment on and enter your comment. You can select text within a query parameter, path parameter, header, and request body (**form-data**, **x-www-form-urlencoded**, and **raw**). You can also select text within a pre-request script or test script.
1. (Optional) Select the **Watch collection** checkbox to be notified when there are changes to the collection.
1. Select **Comment** to add your comment. If comments are associated with a change, you can select the highlighted part of the request or example to view its comments.

    ![Adding an inline comment](https://assets.postman.com/postman-docs/v10/commenting-inline-v10-16a.jpg)

### Add inline comments to a pull request

Use inline comments to comment on a change in a pull request.

To add an inline comment to a pull request, do the following:

1. Open the pull request.
1. Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> next to a change and enter your comment.
1. Select **Comment** to add your comment. If comments are associated with a change, you can select the notification comments icon <img alt="Comments notification icon" src="https://assets.postman.com/postman-docs/v10/icon-comments-notification-v10.jpg#icon" width="23px"> next to a change to view its comments.

    <img alt="Add an inline comment to a pull review" src="https://assets.postman.com/postman-docs/v10/pr-add-comment-inline-v10-19.jpg"/>

### Edit, delete, or link to a comment

You can edit or delete a comment, or a get a link to a comment you can share with others.

1. Select a collection, folder, request, example, or pull request in the sidebar, then select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a comment and do one of the following:

    * Select **Copy link** to copy a direct link to the comment to your clipboard.
    * Select **Edit** to make changes to the comment.
    * Select **Delete** to delete the comment.

<img alt="Managing a comment" src="https://assets.postman.com/postman-docs/v10/commenting-managing-v10-16.jpg" width="443px" />

> If you're a [Workspace Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can delete contributor comments, but you can't edit contributor comments.

## Reply to comments

You can reply to a comment to keep the conversation going. Replies are grouped with the original comment, so you can have more than one comment thread on a collection, folder, request, example, or pull request. When you reply to a comment, the user who added the comment will receive a notification about your reply.

To reply to a comment, do the following:

1. Select a collection, folder, request, example, or pull request in the sidebar, then select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar.
1. Select the comment you want to reply to and enter your reply.

    > If you select an inline comment or open a link to an inline comment, Postman automatically switches to comment mode and opens the comment in context on the request.

1. (Optional) Select the **Watch collection** checkbox to be notified when there are changes to the collection. This option isn't available when commenting on pull requests.

1. Select **Reply**.

    <img alt="Replying to a comment" src="https://assets.postman.com/postman-docs/v10/commenting-replying-v10-16.jpg" width="443px" />

If you're replying to a comment on a request or example, you can also select the highlighted part of the request or example.

<img alt="Reply to an inline comment on a request or example" src="https://assets.postman.com/postman-docs/v10/request-reply-to-inline-comment-v10-19.jpg"/>

If you're replying to a comment on a change in a pull request, you can also select the notification comments icon <img alt="Comments notification icon" src="https://assets.postman.com/postman-docs/v10/icon-comments-notification-v10.jpg#icon" width="23px"> next to a change.

<img alt="Reply to an inline comment on a pull review" src="https://assets.postman.com/postman-docs/v10/pr-reply-to-inline-comment-v10-19.jpg"/>

## Resolve comments

You can resolve a comment after it's been addressed.

1. Select a collection, folder, request, example, or pull request in the sidebar, then select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar.
1. Select the resolve icon <img alt="Resolve comment icon" src="https://assets.postman.com/postman-docs/v10/icon-resolve-comment-v10.jpg#icon" width="18px"> to resolve a comment and any associated replies.

<img alt="Resolving a comment" src="https://assets.postman.com/postman-docs/v10/commenting-resolving-v10-16.jpg" width="443px" />

> You can't undo resolving a comment, but you can view resolved comments by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px"> in the comments pane.

## Mention teammates in comments

If you leave feedback or a question for a specific teammate, you can let them know by mentioning them in your comment. To mention a teammate in a comment, enter `@` followed by their name, then select the person from the list.

When you mention a teammate in a comment, Postman sends them a notification about it. Select the notifications icon <img alt="Notifications icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> in the Postman header to view in-app notifications.

> If your teammate doesn't have access to the collection they've been mentioned in, they'll need to [request access](/docs/collaborating-in-postman/requesting-access-to-elements/) before they can read the comment.
