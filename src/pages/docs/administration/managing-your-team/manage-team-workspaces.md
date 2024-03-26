---
title: "Manage team workspaces"
updated: 2024-01-18
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/NwT062tYvzs?si=vllMPvkx05UTIHfO"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "The ultimate guide to setting up team workspaces"
    url: "https://blog.postman.com/the-ultimate-guide-to-setting-up-team-workspaces/"
---

> **[Workspace management is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

Team workspaces enable you to share projects with collaborators and manage access to them within your team. As a [Super Admin or Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can limit or prohibit creation of new team workspaces to align with your organizational goals.

## Contents

* [Team workspaces in Postman](#team-workspaces-in-postman)
* [Manage team workspaces](#manage-team-workspaces)
    * [Give permission to create team workspaces](#give-permission-to-create-team-workspaces)
    * [Remove permission to create team workspaces](#remove-permission-to-create-team-workspaces)
    * [Give all team members permission to create team workspaces](#give-all-team-members-permission-to-create-team-workspaces)

## Team workspaces in Postman

A _team workspace_ is a type of workspace that enables you to share projects with collaborators and manage access to them within your team. To learn how to create team workspaces, see [Organize your projects in Postman using workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).

## Manage team workspaces

As a [Super Admin or Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can limit or prohibit creation of new team workspaces by users on your team.

Fellow Super Admins and Team Admins can always create team workspaces. For other team members, you can specify which users and [groups](/docs/collaborating-in-postman/user-groups/) have permission to [create team workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).

If you specify users and groups, all other team members will require approval to create team workspaces. A Super Admin, Team Admin, or user with permission to create team workspaces can approve a request. The workspace's visibility will be set to [private](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) until the request is approved.

If you give all team members permission to create team workspaces, team members won't need approval to create team workspaces.

> Partners and Guests can't create team workspaces.

### Give permission to create team workspaces

To specify users or groups who can create team workspaces, do the following:

1. Select **Team > Team Settings** in the Postman header, then select **Workspace Management** in the left sidebar.
1. Select **Specific people or groups**.
1. Specify users or groups who can create team workspaces.
1. Select **Save Changes**.

    <img alt="Specify users who can create team workspaces" src="https://assets.postman.com/postman-docs/v10/workspace-management-users-groups-v10.jpg" width="600px"/>

### Remove permission to create team workspaces

To remove permission to create team workspaces from users or groups, do the following:

1. Select **Team > Team Settings** in the Postman header, then select **Workspace Management** in the left sidebar.
1. Select the **Specific people or groups** section to edit it.
1. Select the close icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> next to a user or group.

    <img alt="Remove users who can create team workspaces" src="https://assets.postman.com/postman-docs/v10/workspace-management-remove-users-groups-v10.jpg" width="600px"/>

1. Select **Save Changes**.

### Give all team members permission to create team workspaces

To give all team members permission to create team workspaces, do the following:

1. Select **Team > Team Settings** in the Postman header, then select **Workspace Management** in the left sidebar.
1. Select **All team members**.
1. Select **Save Changes**.

    <img alt="All team members can create team workspaces" src="https://assets.postman.com/postman-docs/v10/workspace-management-all-team-members-v10.jpg" width="600px"/>
