---
title: "Work with environments as a team in Postman"
updated: 2023-11-09
search_keyword: "pm.globals.set, globals.set, pm.environment.set, environment.set, pm.variables.get, variables.get, pm.globals.get, globals.get, pm.environment.get, environment.get"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman | How to Use Environments"
    url:  "https://youtu.be/oCEDjp3XMco"
  - type: link
    name: "Intro to Postman | Chain Requests"
    url: "https://youtu.be/4fULCou_7Wc"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to Control Access to Variables, Workflows, and More"
    url:  "https://blog.postman.com/postman-environments-how-to-control-access-to-variables-workflows-and-more/"
  - type: link
    name: "Dynamically unset environment variables"
    url: "https://blog.postman.com/pro-tip-dynamically-unset-postman-environment-variables/"
  - type: link
    name: "Securely Using API Keys in Postman"
    url: "https://blog.postman.com/how-to-use-api-keys/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Hathway uses separate environments for each client"
    url: "https://www.postman.com/case-studies/hathway/"
---

An [environment](/docs/sending-requests/variables/managing-environments/) enables you to collaborate on Postman data when you're working as part of a team. You can use environments to share a group of variable values and use those values when sending requests. You can also use environments to share and manage the visibility of sensitive data such as API keys, passwords, or tokens.

To get started, [create a new environment](/docs/sending-requests/variables/managing-environments/#create-an-environment), move an environment, or fork an environment in your team workspace. Then assign roles to team members to specify who can view or edit the environment.

## Contents

* [Move an environment to a shared workspace](#move-an-environment-to-a-shared-workspace)
    * [Export an environment](#export-an-environment)
    * [Share an environment](#share-an-environment)
* [Manage environment roles](#manage-environment-roles)
    * [Use an environment with the Viewer role](#use-an-environment-with-the-viewer-role)
    * [Use an environment with the Editor role](#use-an-environment-with-the-editor-role)
    * [Request access to an environment](#request-access-to-an-environment)
    * [Manage sensitive variable values](#manage-sensitive-variable-values)
* [Fork an environment](#fork-an-environment)
* [View pull requests, forks, and environment details](#view-pull-requests-forks-and-environment-details)

## Move an environment to a shared workspace

To collaborate with others, move an environment to a shared [workspace](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). You can share data with other team members in private and team workspaces, or share data with anyone using public workspaces.

> You must be an Editor on an environment or a Workspace Admin to move the environment to another workspace. Learn more about [managing environment roles](#manage-environment-roles).

To move an environment to another workspace, do the following:

1. Select **Environments** in the sidebar and select an environment.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Move**.
1. Use the search bar to find the workspace you want to move the environment to. You can also select the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px"> to filter workspaces by type.

    > You can move environments to personal, private, team, and public workspaces that you have access to. You can't move environments from team, private, or public workspaces to a personal workspace.

1. Select the workspace, then select **Move Environment**.

    <img alt="Move environment" src="https://assets.postman.com/postman-docs/v10/environment-move-v10-20.jpg" width="443px"/>

> Monitors, mock servers, and integrations in the original workspace that use the environment may no longer work and will need to be reconfigured in the new workspace. Collections and APIs that use the environment must be [moved manually](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/#moving-elements-to-team-workspaces).

### Export an environment

Another way to move an environment is to export it from one workspace and import it into a different workspace.

1. Select **Environments** in the sidebar and select an environment.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Export**.
1. Select **Save** to download the generated JSON file.

You can import the JSON file into another workspace by dragging it into Postman. Learn more about [data import and export](/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/).

### Share an environment

After you move an environment, you can share it with others and add them as collaborators.

1. Select **Environments** in the sidebar and select an environment.
1. Select the share icon <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px">.
1. Enter the names, group names, or email addresses you want to share the environment with.
1. If you have the [Editor role](#manage-environment-roles) for the environment, select the role you want your collaborators to have (Viewer or Editor).
1. Select **Share**.

Postman will notify the people you shared the element with about your request to collaborate. Learn more about [sharing your work in Postman](/docs/collaborating-in-postman/sharing/).

> To copy a link to the environment you can share with others, select the link icon <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px"> next to the environment's name.

## Manage environment roles

Your role determines the actions you can take with an environment. You can have the Editor or Viewer role for an environment.

> You must be an Editor on an environment or a Workspace Admin to assign environment roles. Learn more about [environment roles](/docs/collaborating-in-postman/roles-and-permissions/#environment-roles).

To manage roles for an environment, do the following:

1. Select **Environments** in the sidebar and select an environment.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Manage Roles**.
1. Enter the name, group name, or email address you want to assign a role to.
1. Select the role you want your collaborators to have:

    * **Editor** - Users can manage and edit the environment.
    * **Viewer** - Users can view and share the environment.
    * **Remove** - Users will no longer have access to the environment.

1. Select **Update Roles**.

### Use an environment with the Viewer role

If you have the Viewer role for an environment, you can access the values of all variables in the environment. You can update a variable's current value, which is used to send requests in your local Postman instance and isn't shared with your team or synced to your Postman account. You can't edit the environment or update a variable's initial value, which is synced to the workspace and shared with your team.

If you have Viewer access to an environment, a lock icon <img alt="Lock icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg#icon" width="11px"> displays next to the environment's name to indicate that you can't make changes to the environment. If you need to edit the environment or initial values for variables, [request Editor access to the environment](#request-access-to-an-environment).

### Use an environment with the Editor role

If you have the Editor role for an environment, you can edit the environment and update a variable's initial value. You can also [create and update variables from your scripts](/docs/sending-requests/variables/environment-variables/#set-environment-variables-from-scripts).

When you edit the initial value of a shared environment variable, your updated value will be reflected for everyone who has access to the environment. Make sure it's safe to share the value with your team and sync it with Postman's servers. Learn more about [managing sensitive variable values](#manage-sensitive-variable-values).

> If you clear the checkbox next to an environment variable, the variable isn't available for use, and references to the variable will be unresolved. Users with the Viewer role won't be able to change this setting to make the variable available again.

### Request access to an environment

If you need to update the initial value of a variable in an environment you have Viewer access to, you can request Editor access.

1. Select **Environments** in the sidebar and select an environment.
1. Select **Request Access**.
1. Select the team member you want to send the request to, and select the **Editor** role.
1. Select **Send Request**. You'll get an email when your request is approved.

![Viewer role on environment](https://assets.postman.com/postman-docs/v10/environment-request-access-v10-22.jpg)

### Manage sensitive variable values

A variable's initial value is synced to your account using Postman's cloud servers. It's shared with anyone who has access to the environment and is made public when [publishing an environment along with a collection](/docs/publishing-your-api/publishing-your-docs/). For this reason, it's important to be careful when using the initial value for data such as API keys, passwords, or tokens to avoid unintentional disclosure of sensitive data.

If the initial value includes sensitive data, you can mask the value by selecting the **secret** variable type. When masked, the variable's values aren't visible and can't be copied. Keep in mind that anyone with access to the environment can unmask the variable by selecting the eye icon <img alt="Unmask variable icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px"> next to the variable.

A variable's current value is used when sending requests in your local instance of Postman and is never synced to your Postman account or shared with your team. This means it's safe to use the current value for sensitive data such as API keys, passwords, or tokens. Keep in mind that if you [persist a variable](/docs/sending-requests/variables/environment-variables/#persist-environment-variables), the initial value is set to the current value. The value is then shared with anyone who can access the environment.

<!-- You can also [use your Postman Vault to store secrets](/docs/sending-requests/postman-vault-secrets/) locally as secrets. Vault secrets are locally available to reuse in all of your workspaces in your Postman team, and aren't synced to the Postman cloud. This enables you to store and reuse sensitive data while using Postman. -->

## Fork an environment

You can fork an environment to make changes to it without impacting the parent environment. You can also use a fork to contribute to an environment without having Editor access.

To fork an environment, do the following:

1. Select **Environments** in the sidebar and select an environment.
1. Select **Fork** <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> in the workbench.
1. Enter a **Fork label** and select the **Workspace** where you want to create the fork.
1. Select **Fork Environment**.

You can edit your forked environment and use it as needed, or you can [create a pull request](/docs/collaborating-in-postman/using-version-control/creating-pull-requests/) to update the original environment.

## View pull requests, forks, and environment details

You can view pull requests, forks, and details about an environment from the right sidebar.

* To view pull requests, select the pull request icon <img alt="Pull request icon" src="https://assets.postman.com/postman-docs/icon-pull-request.jpg#icon" width="16px">.

    > If you have the [Editor role](#manage-environment-roles) for an environment, you can [review pull requests](/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/#reviewing-pull-requests) and [merge changes into the parent environment](/docs/collaborating-in-postman/using-version-control/forking-elements/#merge-changes-from-a-fork).

* To view forks, select the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="16px">.
* To view more information about the environment, including its ID, creator, and any mock servers or monitors that use it, select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px">.
