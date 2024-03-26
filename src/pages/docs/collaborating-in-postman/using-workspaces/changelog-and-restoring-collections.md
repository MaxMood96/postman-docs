---
title: "View API development changelogs and team activity in Postman"
updated: 2023-05-30
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Stay On Top of Your Evolving Collections with Postman’s New Changelog"
    url: "https://blog.postman.com/stay-on-top-of-evolving-collections-postman-new-changelog/"
  - type: link
    name: "How We Built Postman’s New Activity Feed System"
    url: "https://blog.postman.com/how-we-built-postman-activity-feed-system/"
---

> **[Changelogs are available on Postman paid plans.](https://www.postman.com/pricing/)**

Postman maintains changelogs for collections, workspaces, and APIs. You can use the changelog to review create, update, transfer, and delete actions that you and fellow team members have taken on private and shared elements. The changelog also enables you to roll back a collection and restore it to an earlier point in time.

> To learn more about the API changelog, see [Using the changelog](/docs/designing-and-developing-your-api/managing-apis/#using-the-changelog).

## Contents

* [Viewing collection activity](#viewing-collection-activity)
* [Viewing workspace activity](#viewing-workspace-activity)
* [Hiding diffs in the changelog](#hiding-diffs-in-the-changelog)
* [Restoring collections](#restoring-collections)
* [Exporting team activity](#exporting-team-activity-to-other-platforms)
* [Next steps](#next-steps)

## Viewing collection activity

To review the changelog for a collection in Postman, open the collection and select the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> on the right.

The changelog provides a chronological list of collection activities. You can view the time and date changes occurred, the users who were involved, and what parts of the collection were affected.

<img alt="Collection changelog" src ="https://assets.postman.com/postman-docs/v10/changelog-view-v10.14.jpg" width=400px/>

Postman groups changes made within several minutes of each other into sessions for readability. You can select a session in the changelog to review its changes individually.

Select **View diff** under an item to view the collection diff. If a diff is too large to view in the changelog, you can hover over the diff and select **View more** to open it in a new tab.

<img alt="Collection changelog view changes" src ="https://assets.postman.com/postman-docs/v10/changelog-view-diff-v10.14.0.jpg" width=400px/>

## Viewing workspace activity

You can [access the activity feed in Postman](#accessing-the-activity-feed-from-postman). The activity feed will show information on who added or removed collections, environments, or elements from the workspace as well as users joining and leaving the workspace. You can [filter this information](#filtering-the-activity-feed) directly within the activity feed.

You can also [view who's active in your workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#seeing-who-is-in-your-workspace).

### Accessing the activity feed from Postman

To access the activity feed in Postman, select the **Overview** tab. Select **View workspace activity** on the right to review the events that have occurred within the workspace.

### Filtering the activity feed

Filtering the activity feed allows you to display the relevant information directly instead of having to scroll through the feed. You can choose to filter by [user](#filtering-by-user) or by [element](#filtering-by-element) (Workspace, API, Collection, Environment).

Select **Reset filters** to remove the filters from the activity feed.

#### Filtering by user

Filtering by user will display the actions the specified user carried out. To filter by user, select **People** at the top of the activity feed and select the user or users. You can search for a specific user by typing their name in the search field.

> The user list will only show the users that are part of the workspace, not all team members.

#### Filtering by element

Filtering by element will display the actions carried out on the selected element type. The available elements are **Workspace**, **API**, **Collection**, **Environment**, **Monitor**, and **Mock servers**.

To filter by element, select **Elements** at the top of the activity feed and select the element or elements. You can search for a specific element by typing its name in the search field.

> You can access the changelog of a specific collection by selecting **View Changelog** next to actions on collections.

## Hiding diffs in the changelog

If you have an [Editor role](/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) for a collection, you can hide specific actions in its [changelog](#viewing-collection-activity). When you hide a changelog entry's diff, users who don’t have Editor permissions on the collection can't view that diff in the changelog. This enables you to protect sensitive data in a public collection.

Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> for the changelog entry, then select **Hide diff for this change**.

<img alt="Hide a diff in the changelog" src="https://assets.postman.com/postman-docs/v10/changelog-hide-diff-v10.jpg" width="425px"/>

To restore the visibility of a diff, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> for the changelog entry, then select  **Show diff to all users**. Once you restore the visibility of a diff, all users will be able to view it in the changelog.

<img alt="Restore the visibility of a diff in the changelog" src="https://assets.postman.com/postman-docs/v10/changelog-unhide-diff-v10.jpg" width="425px"/>

## Restoring collections

You can use the [changelog](#viewing-collection-activity) to restore a collection to an earlier point in time.

To restore a collection from the changelog, do the following:

1. Select a session to expand it.
2. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the change you'd like to restore your collection to, then select **Restore to this change**.

    <img alt="Restore from changelog" src="https://assets.postman.com/postman-docs/v10/changelog-restore-v10.14.jpg" width="350px"/>

Restoring a collection from the changelog reverts it to the point immediately after your selected change occurred.

> If you'd like to restore a deleted collection, see [Recovering a deleted collection](/docs/collections/using-collections/#recovering-a-deleted-collection).

## Exporting team activity to other platforms

With a Postman Basic, Professional, or Enterprise account, you can send team activity feeds to external communication channels:

* [Slack integration](/docs/integrations/available-integrations/slack/)
* [Microsoft Teams integration](/docs/integrations/available-integrations/microsoft-teams/)

## Next steps

* For more on working with a team in Postman, read the [collaboration overview](/docs/collaborating-in-postman/collaborate-in-postman-overview/).
* To learn how to invite input on your API projects, read [sharing your work](/docs/collaborating-in-postman/sharing/).
