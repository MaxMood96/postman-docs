---
title: "Add new integrations using installed apps in Postman"
updated: 2023-03-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "The New Postman API Platform: Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
---

Each time you add a new integration, you need to authenticate with the third-party app or service you want to connect to Postman. _Installed apps_ streamline this process by enabling all members of a team to use the same stored authorization details when adding an integration.

When you authenticate with a third-party service, you can choose to have Postman securely store the authorization details as an installed app. Any team member can add a new integration using the installed app, without needing to know or enter the authorization details.

## Contents

* [Supported integrations](#supported-integrations)
* [Adding an installed app](#adding-an-installed-app)
* [Managing installed apps](#managing-installed-apps)
* [Adding integrations using installed apps](#adding-integrations-using-installed-apps)
* [Re-authenticating an integration](#re-authenticating-an-integration)

## Supported integrations

You can add installed apps for the following Postman integrations:

* [GitHub Enterprise Server](/docs/designing-and-developing-your-api/versioning-an-api/using-on-prem-git-repo/#connecting-to-github-enterprise-server-or-gitlab-self-managed) - Connect an API to a Git repository hosted in GitHub Enterprise Server
* [GitLab Self-Managed](/docs/designing-and-developing-your-api/versioning-an-api/using-on-prem-git-repo/#connecting-to-github-enterprise-server-or-gitlab-self-managed) - Connect an API to a Git repository hosted in GitLab Self-Managed
* [Slack](/docs/integrations/available-integrations/slack/) - Post monitoring results in Slack

## Adding an installed app

You can add an installed app from Team Settings. For Slack, you can also add an installed app when adding a new integration. After you add an installed app, any member of your team can use it add a [supported integration](#supported-integrations).

### Adding an installed app from Team Settings

You can add a new installed app from [Team Settings](https://go.postman.co/settings/team/general).

1. In Postman, select **Team > Team Settings**.
1. Select **Installed apps**.
1. Select the third-party app or service you want to add. The next steps can differ depending on the app or service you selected:

    * **Slack** - A browser tab opens asking you to sign in to Slack. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.
    * **GitHub Enterprise Server or GitLab Self-Managed** - Enter the client ID and client secret for your OAuth app. For complete steps, go to [Connecting to GitHub Enterprise Server or GitLab Self-Managed](/docs/designing-and-developing-your-api/versioning-an-api/using-on-prem-git-repo/#connecting-to-github-enterprise-server-or-gitlab-self-managed).

The new installed app appears on the Installed Apps page in [Team Settings](https://go.postman.co/settings/team/general).

<img alt="Adding an installed app from Team Settings" src="https://assets.postman.com/postman-docs/v10/installed-apps-adding-v10-12.jpg">

### Adding an installed app when adding a Slack integration

You can add a new installed app for Slack when adding a Slack integration.

1. From the Postman **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**.
1. Search for and select **[Slack](https://go.postman.co/integrations/service/slack)**.
1. Select **Add Integration** next to the integration you want to add.
1. A browser tab opens asking you to sign in to Slack. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.
1. Select the checkbox to add Slack for your team.
1. Enter the other required information and select **Add Integration**. For more help, go to the [Slack integration page](/docs/integrations/available-integrations/slack/).

The Slack integration is added, and the new installed app appears on the Installed Apps page in [Team Settings](https://go.postman.co/settings/team/general).

<img alt="Adding an installed app when adding an integration" src="https://assets.postman.com/postman-docs/installed-apps-add-from-integration-v9-24.jpg" width="530px">

## Managing installed apps

You can view all installed apps in [Team Settings](https://go.postman.co/settings/team/general).  In Postman, select **Team > Team Settings**, and then select **Installed apps**. You can view the app name, what it's connected to, and who set up the connection.

To edit an installed app, select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the installed app.

To delete an installed app, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to the installed app. You must be a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to delete an installed app.

> **Use caution when deleting an installed app.** If you delete an installed app, any integrations created using the installed app will stop working. You must [re-authenticate the affected integrations](#re-authenticating-an-integration) for them to continue working.

<img alt="Managing installed apps" src="https://assets.postman.com/postman-docs/v10/installed-apps-managing-v10-12.jpg">

## Adding integrations using installed apps

Any team member can use an installed app when adding a [supported integration](#supported-integrations).

* **Slack** - Follow the steps to add a new [Slack integration](/docs/integrations/available-integrations/slack/). A message and green checkmark let you know you're connected Slack. Enter the other required information and select **Add Integration**.
* **GitHub Enterprise Server or GitLab Self-Managed** - You can use the installed app to connect an API to GitHub Enterprise Server or GitLab Self-Managed. For details, go to [Connecting an API using an installed app](/docs/designing-and-developing-your-api/versioning-an-api/using-on-prem-git-repo/#connecting-an-api-using-an-installed-app).

<img alt="Adding an integration using an installed app" src="https://assets.postman.com/postman-docs/installed-apps-using-v9-25.jpg" width="520px">

## Re-authenticating an integration

If an installed app is deleted, any integrations you added using the installed app will stop working. You must re-authenticate the affected integrations for them to continue working.

* **Slack** - [Edit the Slack integration](/docs/integrations/intro-integrations/#view-or-edit-integrations) and select **Reauthenticate**. A browser tab opens asking you to sign in to Slack. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman. Select **Save Changes**.
* **GitHub Enterprise Server or GitLab Self-Managed** - Add the installed app again. For details, go to [Connecting an API using an installed app](/docs/designing-and-developing-your-api/versioning-an-api/using-on-prem-git-repo/#connecting-an-api-using-an-installed-app).

<img alt="Re-authenticating an integration" src="https://assets.postman.com/postman-docs/installed-apps-reauthorize-v9-24.jpg" width="530px">
