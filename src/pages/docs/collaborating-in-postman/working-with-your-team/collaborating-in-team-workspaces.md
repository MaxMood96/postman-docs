---
title: "Collaborate in team workspaces"
updated: 2023-07-31
page_id: "collaborating_in_team_workspaces"
warning: false
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: link
    name: "Postman Intergalactic | Working with Your Team in Postman"
    url: "https://youtu.be/OifhKJCd_-M"
  - type: link
    name: "Collaboration & Documentation | Postman Enterprise"
    url: "https://youtu.be/u1yEOo0dPfk"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Solving Problems Together with Postman Workspaces"
    url: "https://blog.postman.com/solving-problems-together-with-postman-workspaces/"
  - type: link
    name: "Get More Out of Postman by Collaborating with Your Team"
    url: "https://blog.postman.com/get-more-out-of-postman-by-collaborating-with-your-team/"
---

You can use team workspaces to work together on APIs, collections, environments, integrations, mocks, monitors, and Flows. Team workspaces can act as a single source of truth for your API projects and encourage collaboration within your team.

[Postman Professional and Enterprise teams](https://www.postman.com/pricing) can also create [private workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). A private workspace is a team workspace that's only visible to the user who created it and team members who have been invited to join it. Private workspaces allow teams to restrict access to elements that are relevant only to a particular group.

## Contents

* [Creating a team workspace](#creating-a-team-workspace)
* [Inviting a team member to a workspace](#inviting-a-team-member-to-a-workspace)
* [Moving elements to team workspaces](#moving-elements-to-team-workspaces)
* [Watching team workspaces](#watching-team-workspaces)
* [Next steps](#next-steps)

## Creating a team workspace

Postman creates a default "Team Workspace" for every team. You can rename this workspace, but it can't be deleted.

You can create more team workspaces at any time by selecting **New** above the sidebar, then **Workspace**. To learn more, see [Creating workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).

## Inviting a team member to a workspace

You can invite team members to join a [new](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) or existing workspace. For more details about how to invite a team member to a workspace, see [Sharing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#sharing-workspaces).

## Moving elements to team workspaces

You can move collections, APIs, environments, and Flows to shared private, team, or public workspaces to [collaborate with your team](https://www.postman.com/api-platform/api-collaboration/).

> You must be the Workspace Admin, a Super Admin, or an Editor on a collection, environment, or Flow to move the element to another workspace. For APIs, you must be the Workspace Admin, a Super Admin, an Admin on the API. Learn more about [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

To move an element to a shared workspace, do the following:

1. In the sidebar, select the element you want to move.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the element and select **Move**.

1. Use the search box to find the workspace you want to move the element to, or select the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px"> to filter workspaces by visibility.

    > You can move elements to personal, private, team, and public workspaces that you have access to. You can't move elements from team, private, or public workspaces to a personal workspace.

1. Select the workspace, then select **Move** (**Collection**, **API**, **Environment**, or **Flow**).

<img alt="Move API" src="https://assets.postman.com/postman-docs/move-api-v9.1.jpg" width="400px"/>

Some items related to the element you're moving won't move automatically with the element. You must manually move the following items or re-configure them in the new workspace:

* **Collections** - Monitors will pause and stay in the current workspace.
* **Environments** - Monitors, mock servers, and integrations using the environment may no longer work.

## Watching team workspaces

You can watch team workspaces to receive a notification when a team member modifies anything in the workspace. To do so, see [Watching a workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#watching-a-workspace).

You can also watch specific elements within a team workspace to receive a notification when a team member modifies the element:

* [Watching a collection](/docs/collections/using-collections/#watching-a-collection)
* [Watching APIs](/docs/designing-and-developing-your-api/managing-apis/#watching-apis)

## Next steps

After learning how to collaborate in team workspaces, you can find more information about managing and working with workspaces:

* To learn more about managing team workspaces, visit [Using and managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).
* To use comments to aid in collaboration, visit [Discussing your work](/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/).
