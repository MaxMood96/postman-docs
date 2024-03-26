---
title: "Access, manage, and share Postman workspaces"
updated: 2023-05-31
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: link
    name: "Postman Level Up | Moving Elements in Postman"
    url: "https://youtu.be/OOkKkH5bXHg"
  - type: link
    name: "Consuming REST APIs | Postman Enterprise"
    url: "https://youtu.be/oI-GyWB_6jA"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "The ultimate guide to setting up team workspaces"
    url: "https://blog.postman.com/the-ultimate-guide-to-setting-up-team-workspaces/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "PayPal uses workspaces for private views"
    url: "https://www.postman.com/case-studies/paypal/"
  - type: link
    name: "Axis Bank reduces communication time with workspaces"
    url: "https://www.postman.com/case-studies/axis-bank/"
  - type: link
    name: "Amadeus uses workspaces to drive innovation"
    url: "https://www.postman.com/case-studies/amadeus/"
---

Use workspaces to organize your work in Postman and collaborate with teammates ([or the world](/docs/collaborating-in-postman/using-workspaces/public-workspaces/)). Workspaces group together various elements such as collections, APIs, environments, mock servers, and monitors. A particular element can exist in a single workspace at most. Access to elements in a workspace is controlled by [workspace roles](#managing-workspace-roles).

> You can [create new workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) in addition to the default personal and team workspaces.

## Contents

* [Accessing workspaces](#accessing-workspaces)
    * [Getting the workspace ID](#getting-the-workspace-id)
    * [Accessing private workspaces](#accessing-private-workspaces)
* [Modifying a workspace](#modifying-a-workspace)
    * [Editing workspace details](#editing-workspace-details)
    * [Changing workspace visibility](#changing-workspace-visibility)
* [Sharing workspaces](#sharing-workspaces)
    * [Approving requests for access to private workspaces](#approving-requests-for-access-to-private-workspaces)
    * [Adding workspaces to the Private API Network](#adding-workspaces-to-the-private-api-network)
* [Managing workspace roles](#managing-workspace-roles)
* [Tagging a workspace](#tagging-a-workspace)
* [Watching a workspace](#watching-a-workspace)
* [Moving elements to workspaces](#moving-elements-to-workspaces)
* [Pinning collections to workspaces](#pinning-collections-to-workspaces)
* [Seeing who is in your workspace](#seeing-who-is-in-your-workspace)
* [Deleting a workspace](#deleting-a-workspace)
* [Next steps](#next-steps)

## Accessing workspaces

To open a workspace, select **Workspaces** in the Postman header. Select a workspace to open it, or select **View all workspaces** for a list of all available workspaces. This will only display workspaces that you have access to, based on the [workspace visibility](#changing-workspace-visibility) and your [workspace role](#managing-workspace-roles).

<img alt="New Workspace" src="https://assets.postman.com/postman-docs/v10/view-workspaces-v10.14.jpg" width="400px"/>

The workspace's **Overview** tab displays a description and summary of the workspace, as well as any [pinned collections](#pinning-collections-to-workspaces). On the right, there is a list of workspace contributors and the option to [view workspace activity](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#viewing-workspace-activity).

<img alt="Workspace overview" src="https://assets.postman.com/postman-docs/v10/workspace-overview-v10-2.jpg"/>

### Getting the workspace ID

To view the workspace ID, select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px">. Copy the workspace ID to use it in collection requests or environments. You can also view the creator of the workspace and when was the workspace was last updated.

<img alt="Workspace ID" src="https://assets.postman.com/postman-docs/find-workspace-id-v9.jpg" width="300px"/>

### Accessing private workspaces

> **[Private workspaces are available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing/)**

To collaborate in a private workspace, you must be [invited](#sharing-workspaces) by a Workspace Editor or Admin, or request access to it and be approved. If you're using the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app) and navigate to a link a teammate has shared to a private workspace or an element within one, you'll have the option to request access to the workspace.

<img alt="Request access to private workspace" src="https://assets.postman.com/postman-docs/user-rfa-private-workspace-v9.16.jpg"/>

You can add a note and select **Request Access** to submit the request. All Workspace Admins will receive a notification to review your request, and you'll be alerted by the notifications icon <img alt="Notifications icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> and by email when your request is approved or denied.

> If your request isn't reviewed within 15 days, it will expire and you'll be notified in Postman and by email to resubmit your request for access.

## Modifying a workspace

Workspace Admins can edit workspace details or change the visibility of a workspace.

> You can use workspace templates to help set up a new workspace. For more information, see [Apply a template to a workspace](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/#apply-a-template-to-a-workspace).

### Editing workspace details

A summary and description help others understand what your workspace is for. You must be a [Workspace Admin](#managing-workspace-roles) to edit workplace details.

On the workspace's **Overview** tab, select the workspace name and enter a new name. You can also select the summary, description, or tags ([Enterprise plans only](https://www.postman.com/pricing)) to edit it. You can add Markdown to the description. Select the area outside of each section to save your changes.

<img alt="Edit Workspace Summary & Description" src="https://assets.postman.com/postman-docs/v10/edit-workspace-summary-description-v10-3.gif" style="border: 1px solid #4a4a4a"/>

### Changing workspace visibility

The visibility setting for a workspace determines who can access it. You must be a [Workspace Admin](#managing-workspace-roles) to change the visibility for a workspace.

1. Select **Workspaces** in the Postman header, and then select a workspace.
1. On the workspace's **Overview** tab, select **Workspace Settings**.
1. Select a **Visibility** for the workspace:
    * **Private** - Only invited team members can access ([Professional and Enterprise plans only](https://www.postman.com/pricing)).
    * **Partner** - Only invited team members and [partners](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access ([Enterprise Ultimate plans only](https://www.postman.com/pricing)).
    * **Team** - All team members can access.
    * **Public** - Everyone can view.
1. Select **Update**.

<img alt="Changing workspace visibility" src="https://assets.postman.com/postman-docs/v10/workspace-settings-visibility-v10.23.jpg" width="450px"/>

> You always have one personal workspace in Postman. If you change the visibility of all of your personal workspaces to private, team, or public, Postman creates a new personal workspace for you.

## Sharing workspaces

You can invite team members, [groups](/docs/collaborating-in-postman/user-groups/), and external users to collaborate in a workspace by navigating to the workspace and selecting **Invite** in the upper-right corner.

<img alt="Share team workspace" src="https://assets.postman.com/postman-docs/share-workspace-9.4.jpg" width="400px"/>

Your ability to share workspaces with teammates depends on your [workspace role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles):

* **Workspace Admin** - Can invite Postman teammates or external users to personal, private, team, and public workspaces, and assign them a workspace role. If a Workspace Admin invites an external user to a workspace, Postman will share this request with [Team Admins](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles). Once approved, an invite to join the team will be sent to the individual.

    > Workspace Admins can also use the [Postman VS Code extension](/docs/getting-started/basics/about-vs-code-extension/) to invite Postman teammates to workspaces, and assign them a workspace role.

* **Workspace Editor** - Can invite external users to team and public workspaces, but can't assign them workspace roles. For private workspaces, Workspace Editors using the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app) can copy and share a link to the workspace with a teammate, who can then [request access to the workspace](#accessing-private-workspaces).
* **Workspace Viewer** - Can't invite teammates to private, team, or public workspaces. For private workspaces, Workspace Viewers using the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app) can copy and share a link to the workspace with a teammate, who can then [request access to the workspace](#accessing-private-workspaces).

> When you invite a collaborator to a personal workspace, it's automatically converted into a team workspace.

Individual team members and groups you invite will be notified of your request to collaborate.

External users who aren't on your Postman team will receive an invitation to join immediately if you're a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) or [Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles). On Free, Basic, and Professional plans, team members with the Developer role can invite external users as Developers automatically, without the need for approval by a Team Admin.

You can also invite collaborators by selecting <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px"> **Copy Invite Link** and sharing the link with them outside of Postman. When individuals select the link, Postman will prompt them to sign in or sign up. If you're a Team Admin or a Developer inviting another Developer on a Free, Basic, or Professional plan, they'll be automatically added to your team. If you aren't a Team Admin or a Developer as described, your request to add external users to your Postman team will be shared with your Team Admins for approval.

> Inviting collaborators to [Partner Workspaces](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) is different than inviting them to other types of workspaces. To learn more, see [Inviting collaborators to a Partner Workspace](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/#inviting-collaborators-to-a-partner-workspace).

### Approving requests for access to private workspaces

> Private workspaces are only available to [Professional and Enterprise](https://www.postman.com/pricing/) teams.

Team members can [request access to a private workspace](#accessing-private-workspaces) if another user with access provides them with a link to it. All Workspace Admins will be notified of requests for access by the notifications icon <img alt="Notifications icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> and by email. Select **Respond to Request** to review requests for access.

<img alt="Respond to request for access to private workspace" src="https://assets.postman.com/postman-docs/workspace-admin-respond-rfa-private-workspace-v9.16.jpg" width="400px"/>

You can assign a [workspace role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) to define a user's permissions within the workspace, then select **Approve** to grant them access. You can also choose to reject a request for access by selecting **Deny**. Team members who have requested access will be notified of your decision in Postman and by email.

> Requests for access to private workspaces expire if they aren't reviewed within 15 days. If this occurs, Postman will alert the affected users to resubmit their request for access.

### Adding workspaces to the Private API Network

You can also share workspaces with your teammates by adding them to your team's [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/). To learn more, see [Requesting to add a workspace from the workbench](/docs/collaborating-in-postman/private-api-network/private-network-requests/#requesting-to-add-a-workspace-from-the-workbench).

## Managing workspace roles

Access to elements within a workspace is controlled using [workspace roles](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles). Roles can be assigned to an individual user or to a [user group](/docs/collaborating-in-postman/user-groups/).

To change the role of people in a workspace, or to remove someone from a workspace, do the following:

1. Select **Workspaces** in the Postman header, and then select a workspace.
1. On the workspace's **Overview** tab, select **Workspace Settings**.
1. Select a different workspace **Role** for a person or group:

    * **Admin** - Can manage workspace resources and settings.
    * **Editor** - Can create and edit workspace resources.
    * **Viewer** - Can view, fork, and export workspace resources.
    * **Remove** - Removes the person from the workspace. (You can [invite the user](#sharing-workspaces) again in the future.)

## Tagging a workspace

> **[Tagging workspaces is available on Postman Enterprise plans.](https://www.postman.com/pricing/)** You can apply shared tags to workspaces, collections, and APIs. Tags must be between two and 64 alphanumeric characters, starting with an alphabetic character, and contain only dashes and no spaces. You can add up to five tags.

Adding shared tags to workspaces enables you to organize and search for workspaces.

Once you add tags to the workspace, you can select a tag to open search results associated with the tag in a new tab.

To learn more about searching using tag names in Postman, see [Search Postman](/docs/getting-started/basics/navigating-postman/#search-postman). You can also search using tag names in the Private API Network when searching [elements in the network](/docs/collaborating-in-postman/private-api-network/adding-private-network/#searching-filtering-and-sorting), [elements to add to the network](/docs/collaborating-in-postman/private-api-network/organizing-private-network/#adding-elements-in-your-private-api-network), and [elements to request to add to the network](/docs/collaborating-in-postman/private-api-network/private-network-requests/#requesting-to-add-elements-in-your-private-api-network).

To add tags to a workspace, do the following:

1. Select **Workspaces** in the Postman header, and then select a workspace.
1. On the workspace's **Overview** tab, select the **Tags** section to edit it.

    <img alt="Add tags to a workspace" src="https://assets.postman.com/postman-docs/v10/add-tags-workspace-v10.jpg"/>

1. Select an existing tag or enter a new tag. If you're adding a new tag, enter the new tag name and then select **Create "*tag-name*"**.

    <img alt="Add new tags to a workspace" src="https://assets.postman.com/postman-docs/v10/create-new-tags-workspace-v10.jpg"/>

1. Select the area outside of the **Tags** section to save your changes.

To remove tags from a collection, do the following:

1. Select **Workspaces** in the Postman header, and then select a workspace.
1. On the workspace's **Overview** tab, select the **Tags** section to edit it.
1. Select the close icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> next to a tag.

    <img alt="Remove tags from a workspace" src="https://assets.postman.com/postman-docs/v10/remove-tags-workspace-v10.jpg"/>

1. Select the area outside of the **Tags** section to save your changes.

## Watching a workspace

Watch a workspace to receive an email or in-app notification when a team member modifies anything in the workspace, such as changing the workspace visibility or updating an element in the workspace.

To start watching a workspace, select <img alt="Watch icon" src="https://assets.postman.com/postman-docs/eye.jpg#icon" width="16px"> **Watch** in the workspace's **Overview** tab. Select the count next to **Watch** to access the list of people who are watching the workspace.

To access your notifications, select the notification icon <img alt="Bell icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> in the Postman header. The notification list shows details about changes to workspaces you are watching. You will also receive an email with information about the change, who made it, and when.

To stop watching a workspace, select **Unwatch** in the workspace's **Overview** tab.

> By default, you are a watcher for any workspace you create. You won't receive notifications for changes you make to a workspace you're watching.

## Moving elements to workspaces

Workspaces can contain elements such as collections, APIs, environments, mock servers, and monitors. A particular element can exist only in a single workspace. If needed, you can move elements to a different workspace.

> The API's collections will move with the API to the new workspace.

<!-- -->

> Monitors can't be moved. If you move a collection that has an active monitor, the associated monitor is paused and stays in the original workspace.

To move an element to a different workspace, do the following:

1. Select **Collections**, **APIs**, **Environments**, or **Mock Servers** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an element and then select **Move**.

    <img alt="Move collection" src="https://assets.postman.com/postman-docs/v10/move-collection-1-v10.jpg" width="400px"/>

1. Select the workspace where you want to move the element, and then select **Move**.

    > You can't move elements from a private, team, or public workspace to a personal workspace.

    <img alt="Move collection to workspace" src="https://assets.postman.com/postman-docs/move-collection-to-selected-workspace-v9.jpg" width="400px" height="400px"/>

## Pinning collections to workspaces

> Pinning collections to workspaces is available on Postman Free, Basic, and Professional plans.

You can pin collections to a workspace for quick access. On the workspace's **Overview** tab under **Pinned collections**, select the pin collection icon <img alt="Pin collection icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select the collection you'd like to pin.

<img alt="Pin collection to workspace" src="https://assets.postman.com/postman-docs/v10/pinned-collections-v10.14.jpg"/>

To remove a pinned collection, hover over the collection and select the remove pin icon <img alt="Remove pin icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px">, then select **Remove**.

## Seeing who is in your workspace

The list of avatars in the Postman header shows you who's active in your workspace. If you're in a private or team workspace, this list will include all team members who are currently active in the workspace, and all team members who are currently inactive, but have visited the workspace before.

If you're in a public workspace, this list will include all active users with [public profiles](/docs/getting-started/installation/postman-profile/#making-your-profile-public) and users who've chosen to remain anonymous by not enabling their public profile.

<img alt="Active users in public workspace" src="https://assets.postman.com/postman-docs/presence-public-workspace-v9.19.jpg" width="300px"/>

## Deleting a workspace

Deleting a workspace removes the workspace and all data in it from Postman. Use caution, as once you delete a workspace it's gone forever. You must be a [Workspace Admin](#managing-workspace-roles) to delete a workspace.

1. Select **Workspaces** in the Postman header, and then select a workspace.
1. On the workspace's **Overview** tab, select **Workspace Settings**.
1. At the bottom of the **Workspace Settings** screen, select **Delete Workspace**.

<img alt="Delete workspace" src="https://assets.postman.com/postman-docs/v10/delete-a-workspace-v10.jpg" width="506px"/>

> To delete a [public workspaces](/docs/collaborating-in-postman/using-workspaces/public-workspaces/), you must first change the [workspace visibility](#changing-workspace-visibility) to team or private.

## Next steps

After learning about the fundamentals of managing and using workspaces, you can learn about tracking activities in a workspace:

* [Viewing workspace activity](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/)
