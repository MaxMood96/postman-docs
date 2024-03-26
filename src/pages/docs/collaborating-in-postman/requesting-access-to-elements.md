---
title: "Manage, request, and approve access to Postman elements"
updated: 2023-05-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Requesting Edit Access | Postman Level Up"
    url: "https://youtu.be/H-93OfONSsg"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "2 Ways to Access and Edit a Postman Element"
    url: "https://blog.postman.com/access-and-edit-postman-element/"
---

By default, you can view [workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) and the Postman elements in them, such as collections, APIs, environments, mock servers, and monitors, that are shared with your team. If you need to edit a workspace or element in it, a team member with [Admin access for the workspace](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) or [Editor access for an element](/docs/collaborating-in-postman/roles-and-permissions/#element-based-roles) can assign you the [Editor role](/docs/collaborating-in-postman/roles-and-permissions/#element-based-roles), or you can request it.

To be assigned or request role access for a workspace or element, you first need to [join or get invited to the shared workspace](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/), or be an [external user with permission to view a collection](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections).

After you submit a request to access, team members with Admin access for the workspace or Editor access for an element will receive a notification requesting their approval.

> Roles and permissions are available depending on your [Postman plan](https://www.postman.com/pricing).

## Contents

* [Managing workspace roles](#managing-workspace-roles)
* [Managing element-based roles](#managing-element-based-roles)
* [Requesting role access for workspaces](#requesting-role-access-for-workspaces)
* [Requesting Editor role access for elements](#requesting-editor-role-access-for-elements)
    * [Requesting Editor role access for an element](#requesting-editor-role-access-for-an-element)
    * [Requesting Editor role access for a collection as an external user](#requesting-editor-role-access-for-a-collection-as-an-external-user)
* [Approving requests for access](#approving-requests-for-access)

## Managing workspace roles

Team members with Admin access for the workspace can [manage workspace roles assigned to team members](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#managing-workspace-roles).

## Managing element-based roles

Team members with Admin access for the workspace or Editor access for an element in it can manage element-based roles assigned to team members. Learn more about [roles you can assign at the element level](/docs/collaborating-in-postman/roles-and-permissions/#element-based-roles).

1. Hover over the element in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to its name.
1. Select **Manage roles**.

    <img alt="Collection Manage Roles" src="https://assets.postman.com/postman-docs/v10/collection-manage-roles-v10.jpg" width="300px"/>

1. (Optional) Search for team members and [user groups](/docs/collaborating-in-postman/user-groups/) in the workspace to add to the element.
1. Select the role next to their name, then select a different role. You can also select **Remove** to remove a team member or user group from the element.

    If you're managing roles for a collection, you can learn more about [setting merge checks](/docs/collaborating-in-postman/using-version-control/creating-pull-requests/#assign-merge-checks).

    > Team members inherit permissions from the workspace role they're assigned. Team members can be individually assigned a workspace role, and the user group they're a member of can be assigned a workspace role. For example, a team member assigned the Workspace Editor role and Collection Viewer role will have Editor access to all collections in the workspace.

    <img alt="Manage Roles" src="https://assets.postman.com/postman-docs/v10/manage-roles-collection-v10.jpg" width="600px"/>

1. Select **Update Roles** to save your changes.

> You can also use the [Postman VS Code extension](/docs/getting-started/basics/about-vs-code-extension/) to manage collection and environment roles assigned to team members.

## Requesting role access for workspaces

You can request Editor access for a workspace to gain [additional permissions](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles).

To request an Editor role, open the workspace overview, then select **Request to Edit** in the upper-right corner. You can also request access when you try to create an element in the workspace by selecting the create new icon <img alt="Create new icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px"> in the left sidebar.

<img alt="Request workspace editor role" src="https://assets.postman.com/postman-docs/v10/request-workspace-editor-role-v10.14.0.jpg" width="400">

You can add a note to the Workspace Admins, then select **Request Access**.

Workspace Admins will receive an in-app and email notification detailing your request. When it's approved or denied, you'll be notified in-app and by email of their response.

## Requesting Editor role access for elements

If you can view an element in a workspace but can't edit it, there is a lock icon <img alt="Lock icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg#icon" width="11px"> next to the name of the collection, API, environment, mock server, or monitor.

<img alt="Collection Lock" src="https://assets.postman.com/postman-docs/collection-lock-v9-14.jpg" width="292px">

### Requesting Editor role access for an element

1. Select **Collections**, **APIs**, **Environments**, **Mock Servers**, or **Monitors** in the sidebar.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the element name and select **Manage Roles**.

    <img alt="Collection Context Menu" src="https://assets.postman.com/postman-docs/collection-context-menu-v9-14.jpg" width="292px">

1. Select **Request Access**.

    <img alt="Manage Roles Blocked" src="https://assets.postman.com/postman-docs/manage-roles-blocked-v9-14.jpg" width="848">

1. Select the person you want to send the request to, and select the **Editor** role.

    <img alt="Request Editor Access" src="https://assets.postman.com/postman-docs/request-additional-access-v9-14.jpg" width="482">

1. Select **Request Access**.

Postman will send an in-app and email notification to the person you selected. Once they approve your request, you will also get notified in-app and by email. Your request will expire after 30 days, after which you can request access again.

### Requesting Editor role access for a collection as an external user

You can request Editor role access for a collection if you're an [external user who is allowed to view the collection](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections). When you get Editor role access to a collection, your [team role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) also changes from the Guest role to the Developer role. This team role change adds you to the team and gives you access to all team resources and workspaces.

1. Select **Collections** in the sidebar.
1. Select the collection.
1. Select **Request to Edit**.

![Request Editor role](https://assets.postman.com/postman-docs/v10/guest-role-request-to-edit-v10.jpg)

> Your team must have [available seats](/docs/billing/billing/#changing-your-plan) or [Auto-Flex enabled](/docs/billing/billing/#using-auto-flex) to give an external user Editor role access to a collection.

Postman will send in-app and email notifications to team members with Editor role access to the collection.

## Approving requests for access

If you're an Admin of a workspace or an Editor of an API, collection, environment, mock server, or monitor, you may receive a request to give a teammate role access.

When a teammate requests Editor role access for an API, collection, environment, mock server, or monitor, you'll receive an in-app and email notification that details the request. Select **Approve Request** if you want to give your teammate Editor role access to the collection, API, environment, mock server, or monitor. If you don't want to give Editor access, you can ignore the request. The request will expire after 30 days.

When a teammate requests Editor role access for a workspace, you'll receive an in-app and email notification detailing the request. Select **Respond to Request** to open the workspace settings. You can select the role you'd like to give the user, then **Approve** or **Deny** the request.
