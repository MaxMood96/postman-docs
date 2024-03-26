---
title: "Organize your projects in Postman using workspaces"
updated: 2023-10-24
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Creating a Workspace | Postman Level Up"
    url: "https://youtu.be/I10RCvMbPi0"
  - type: link
    name: "Use Collection and Workspace Templates"
    url: "https://youtu.be/QAIH1D203Wg"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Solving Problems Together with Postman Workspaces"
    url: "https://blog.postman.com/solving-problems-together-with-postman-workspaces/"
  - type: link
    name: "Set up workspaces and collaborate faster with workspace templates"
    url: "https://blog.postman.com/set-up-workspaces-and-collaborate-faster-with-workspace-templates/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Axis Bank reduces communication time with workspaces"
    url: "https://www.postman.com/case-studies/axis-bank/"
  - type: link
    name: "Amadeus uses workspaces to drive innovation"
    url: "https://www.postman.com/case-studies/amadeus/"
---

Workspaces enable you to organize your Postman work and collaborate with teammates. You can group your projects together, with workspace acting as the single source of truth for related APIs, collections, environments, mocks, monitors, and other linked elements. By collaborating in a workspace, your edits sync with your team in real time.

<img alt="Workspaces selected" src="https://assets.postman.com/postman-docs/v10/workspace-overview-switcher-selected-v10-2.jpg"/>

With a [Postman account](/docs/getting-started/installation/postman-account/) you can create various types of workspaces:

* **Personal** - Personal workspaces are visible to you. If you're on an Enterprise team, [Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) will also have access to any personal workspaces created within the team.
* **Private** - Private workspaces are visible to you and to any team members you invite to them ([Professional and Enterprise plans](https://www.postman.com/pricing)).
* **Team** - Team workspaces enable you to share projects with collaborators and manage access to them within your team.
* **Partner** - Invited team members and [partners](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access Partner Workspaces ([Enterprise Ultimate plans only](https://www.postman.com/pricing)).
* **Public** - [Public workspaces](/docs/collaborating-in-postman/using-workspaces/public-workspaces/) enable you to collaborate on elements with anyone across the world.

By adding an element to a workspace, collaborators with access to the workspace will also be able to access the element by default with read permissions. You can [configure access settings](/docs/collaborating-in-postman/roles-and-permissions/) for the workspace on an individual basis to give permissions depending on the account.

Workspaces can also create visibility for the projects within a team, as collections in a workspace are visible to all team members with access to the workspace.

_Workspace as an element_ represents a whole container where being an Admin gives you full access to the workspace. This works like the inheritance property where you will have Editor access to all the elements within that particular workspace.

> For Postman Professional and Enterprise teams, a private workspace is a team workspace that's visible to the user who created it, plus team members who have been invited to join it. Private workspaces let teams restrict access to APIs, collections, environments, mocks, and monitors that are relevant to a particular group.

## Contents

* [Create a new workspace](#create-a-new-workspace)
* [Apply a template to a workspace](#apply-a-template-to-a-workspace)
* [Next steps](#next-steps)

## Create a new workspace

1. To create a new workspace, select **Workspaces** in the header, then select **Create Workspace**.

    <img alt="Create new workspace" src="https://assets.postman.com/postman-docs/v10/create-workspace-from-dropdown-v10.23.0.jpg" width="450px"/>

1. You can select a [workspace template](#apply-a-template-to-a-workspace) like the API development template, the API testing template, and others to help you set up a new workspace. Select a workspace template to populate the workspace with helpful information and sample collections and environments, or select **Blank workspace** to create an empty workspace. Then select **Next**.

    > You can also apply a workspace template to a newly created workspace. To learn more, see [Apply a template to a workspace](#apply-a-template-to-a-workspace).

    <img alt="Create new workspace" src="https://assets.postman.com/postman-docs/v10/create-workspace-templates-v10.23.jpg"/>

1. Enter a **Name** for your workspace.

1. Use the visibility menu to choose a **Personal**, **Private**, **Partner**, **Team**, or **Public** workspace.

    <img alt="Create new workspace" src="https://assets.postman.com/postman-docs/v10/create-workspace-visibility-v10.23.0.jpg" width="400px"/>

    ([Enterprise plans only](https://www.postman.com/pricing/)) If your [team manages who can create team workspaces](/docs/administration/managing-your-team/manage-team-workspaces/), users without permission to create team workspaces must submit a request for approval by a [Super Admin, Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), or user with permission to create team workspaces. You can also add an optional note to your request. The workspace's visibility will be set to [private](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) until your request is approved. Postman will notify you whether your request is approved or denied.

1. Select **Create** and Postman will open your new workspace. You can add elements to the workspace. Select **Invite** in the Postman header to add other users to the workspace.

To create a new workspace, you can also select **New** in the sidebar, then select **Workspace** and follow the same steps.

<img alt="Create new workspace" src="https://assets.postman.com/postman-docs/v10/create-new-workspace-v10-2.jpg" width="500px"/>

You can also create a new workspace in the [Workspaces dashboard](https://app.getpostman.com/dashboard). Select **Create Workspace** and follow the same steps.

![Create new workspace dashboard](https://assets.postman.com/postman-docs/v10/create-new-workspace-dashboard-v10.jpg)

## Apply a template to a workspace

You can apply a workspace template to an existing workspace. Workspace templates are available for a variety of common use cases, including API demos, engineering onboarding, and API testing.

When you apply a workspace template, it will populate the workspace description with an introduction and information to help you get started. Each workspace template also includes sample collections and environments that you can use and change as needed. To use a template, [create a new workspace](#create-a-new-workspace) or open a newly created workspace.

To use a template in a newly created workspace, do the following:

1. In the workspace overview, select **Explore workspace templates**.
1. Select a template from the list in the sidebar, then select **Apply Template**.

## Next steps

After you create a workspace, you can use the workspace to collaborate with your team.

* To learn more about what you and your team can do with workspaces, see [Access, manage, and share Postman workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).
* You can also use your workspace [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/) to keep up to date with progress on the projects within it.
