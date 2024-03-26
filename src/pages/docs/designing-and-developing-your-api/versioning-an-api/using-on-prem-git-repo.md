---
title: "Connect your API to an on-premises Git repository"
updated: 2023-09-15
search_keyword: "whitelist, whitelist IP"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Git Workflows in Postman | The Exploratory"
    url: "https://youtu.be/cB7mCuYeuAU"
  - type: link
    name: "Integrating GitLab in Postman's API Builder"
    url: "https://youtu.be/ecAQv9gZEKk"
  - type: link
    name: "API Versioning in Postman using Bitbucket"
    url: "https://youtu.be/SO_88TQ2dkE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Build better APIs using the new and improved API Builder"
    url: "https://blog.postman.com/build-better-apis-using-the-new-and-improved-api-builder/"
  - type: link
    name: "Announcing Postman’s Redesigned API Builder with Native Git Support"
    url: "https://blog.postman.com/announcing-postmans-redesigned-api-builder-with-native-git-support/"
  - type: link
    name: "Syncing Your Specs with Collections"
    url: "https://blog.postman.com/latest-updates-to-syncing-your-specs-with-collections/"
---

> **[GitHub Enterprise Server, GitLab Self-Managed, and Azure DevOps Server (hosted on-premises) integrations are available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

You can connect your API to an on-premises Git repository to sync your API definition and collections between Postman and the repository. Postman supports connecting to GitHub Enterprise Server, GitLab Self-Managed, or Azure DevOps Server repositories.

After connecting, you can push and pull changes between Postman and branches in the remote repository. When it's time to release, you can publish an API version to make your changes available to consumers.

> The steps below are for connecting to the on-premises versions of GitHub Enterprise Server, GitLab Self-Managed, and Azure DevOps Server. If you need to connect to a cloud-hosted repository, go to [Using a cloud-hosted Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-cloud-git-repo/).

## Contents

* [Using an on-premises repository overview](#using-an-on-premises-repository-overview)
* [Connecting to GitHub Enterprise Server or GitLab Self-Managed](#connecting-to-github-enterprise-server-or-gitlab-self-managed)
    * [Creating an installed app](#creating-an-installed-app)
    * [Connecting an API using an installed app](#connecting-an-api-using-an-installed-app)
* [Connecting to Azure DevOps Server](#connecting-to-azure-devops-server)
* [Disconnecting an on-premises repository](#disconnecting-an-on-premises-repository)
* [Next steps](#next-steps)

## Using an on-premises repository overview

If you are on a [Postman Enterprise Ultimate plan](https://www.postman.com/pricing), you can connect an API in Postman to your on-premises Git repository. This enables you to sync changes between the repository and Postman.

To connect to [GitHub Enterprise Server or GitLab Self-Managed](#connecting-to-github-enterprise-server-or-gitlab-self-managed), create a new installed app in Postman. To connect to [Azure DevOps server](#connecting-to-azure-devops-server), use a personal access token.

Keep in mind the following when connecting to an on-premises repository:

* **You must be on a [Postman Enterprise Ultimate plan](https://www.postman.com/pricing) to connect to a repository hosted on-premises.** If you're not on a Postman Enterprise Ultimate plan, you won't be able to connect to GitHub Enterprise Server, GitLab Self-Managed, or Azure DevOps Server. You can still [connect to a cloud-hosted repository](/docs/designing-and-developing-your-api/versioning-an-api/using-cloud-git-repo/).

* **You must use the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/) to connect to GitHub Enterprise Server, GitLab Self-Managed, or Azure DevOps Server.** You can't use the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app) to connect to an on-premises GitHub repository.

* **All communication is between the Postman desktop app on your computer and the on-premises repository.** Your computer must be able to access the repository. No Git requests go through Postman's cloud servers. The Postman desktop app connects directly to your Git server, and you don't need to allow any Postman IP addresses for your repository. The repository will show the IP address of your computer as the source for all Git requests.

* **You can connect one or more APIs to a remote repository.** You can keep your APIs separate in the repository using files or branches. Learn more about [connecting more than one API to the same repository](/docs/designing-and-developing-your-api/versioning-an-api/connecting-multiple-apis/).

## Connecting to GitHub Enterprise Server or GitLab Self-Managed

To connect to a repository hosted in GitHub Enterprise Server or GitLab Self-Managed, [create an installed app](#creating-an-installed-app) in Postman. To complete this process, you'll also need to create an OAuth app in GitHub Enterprise Server or GitLab Self-Managed. You need to complete this process once for a domain URL. After you create the installed app, anyone on the team can use it to [connect to repositories using the same domain URL](#connecting-an-api-using-an-installed-app).

### Creating an installed app

[Installed apps](/docs/integrations/installed-apps/) streamline the process of adding integrations by enabling all members of a team to use the same stored authorization details. To create an installed app, you must have the [Team Admin role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

To create an installed app for GitHub Enterprise Server or GitLab Self-Managed, do the following:

1. In Postman, open [Team Settings](https://go.postman.co/settings/team/general) by selecting **Team > Team Settings**.
1. Select **Installed apps**.
1. Select the repository provider you want to add an installed app for (**GitHub Enterprise Server** or **GitLab Self-Managed**).
1. Enter a **Name** to help you recognize the installed app later.
1. Enter the domain URL of your repository. Format the domain URL as follows:

    * **GitHub Enterprise Server** - Use the base URL of your Git server, for example: `https://my-github-server.example.com`
    * **GitLab Self-Managed** - Use the base URL of your Git server, for example: `https://gitlab.example.com`

1. Create an OAuth app by following the instructions for your Git provider ([GitHub Enterprise Server](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) or [GitLab Self-Managed](https://docs.gitlab.com/ee/integration/oauth_provider.html)). Use the following values:

    * **Homepage URL** - Enter the Postman homepage URL: `https://www.postman.com`
    * **Authorization callback URL** or **Redirect URI** - Enter the authorization callback URL provided in Postman: `https://integration-oauth.pstmn.io/v1/api-git-callback.html`
    * **Scopes** - Make sure to select the appropriate scopes when creating the OAuth app to enable Postman to read and write to your repository. For GitHub, select the `repo` and `user` scopes. For GitLab Self-Managed, select the `api` scope.

1. After registering the OAuth app, copy the app's **Client ID** and **Client secret** and enter them in Postman.
1. Select **Save** to finish creating the installed app.

<img alt="Creating an installed app" src="https://assets.postman.com/postman-docs/v10/api-builder-add-installed-app-v10-12b.jpg" width ="562px"/>

### Connecting an API using an installed app

After you [create an installed app](#creating-an-installed-app), any API editor on the team can use it to connect an API to GitHub Enterprise Server or GitLab Self-Managed.

To connect an API using an installed app, do the following:

1. Select **APIs** in the sidebar and select an API.
1. Under **Connect repository**, select **Connect** and select **GitHub Enterprise Server** or **GitLab Self-Managed**.
1. Select the authorized domain of your repository and select **Authenticate**.

    <img alt="Using an installed app" src="https://assets.postman.com/postman-docs/v10/api-builder-use-installed-app-v10-12.jpg" width ="556px"/>

1. A browser tab opens asking you to sign in to your repository. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.
1. For GitHub, enter the **Organization** and the **Repository** where the API will be stored. For GitLab, enter the **Group** and **Project** for your API.
1. Select the **Initial branch** for the API. Any changes you make in Postman are stored in the initial active branch. (You can switch to another branch to make it the active branch at any time.)
1. Select an **API schema file** to add to your API. If you're working on a [multi-file API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#working-with-multi-file-api-definitions), make sure to select the [root definition file](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#about-root-files) in your repository. The root file is the base file that has references to other files in the API definition. If you leave this field blank, no definition files are added to your API. You can [manually add a definition file](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-an-api-definition-from-a-connected-repository) from your repository later.
1. Select a **Collection directory** where the collections linked to your API will be stored in the repository. If you leave this field blank, a `postman/collections` directory will be created in the root of the repository.
1. Select **Connect Repository**.

    The root definition file you selected is added to your API. For OpenAPI 2.0 and 3.0 APIs, Postman scans for any dependent files referenced in the root definition file and automatically adds them to your API. You can also [manually add more definition files](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-files-from-a-connected-repository) from your repository as needed.

## Connecting to Azure DevOps Server

To connect an API to a repository hosted in Azure DevOps Server, use a personal access token.

1. Select **APIs** in the sidebar and select an API.
1. Under **Connect repository**, select **Connect** and select **Azure DevOps Server**.
1. Enter the **Domain URL** of your repository. You can enter a new domain or select a domain you've used before from the list. Use the name and port of your Git server along with the collection, for example: `https://my-azure-server:8080/my-collection`
1. Enter a **Personal access token** to access the repository. Ensure that the token has the required permissions as specified on the **Connect your repository** page.
1. Select **Next**.

    <img alt="Using a personal access token" src="https://assets.postman.com/postman-docs/v10/api-builder-use-access-token-v10-12.jpg" width ="564px"/>

1. Enter the **Organization** and the **Repository** where the API will be stored.
1. Select the **Initial branch** for the API. Any changes you make in Postman are stored in the initial active branch. (You can switch to another branch to make it the active branch at any time.)
1. Select an **API schema file** to add to your API. If you're working on a [multi-file API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#working-with-multi-file-api-definitions), make sure to select the [root definition file](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#about-root-files) in your repository. The root file is the base file that has references to other files in the API definition. If you leave this field blank, no definition files are added to your API. You can [manually add a definition file](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-an-api-definition-from-a-connected-repository) from your repository later.
1. Select a **Collection directory** where the collections linked to your API will be stored in the repository. If you leave this field blank, a `postman/collections` directory will be created in the root of the repository.
1. Select **Connect Repository**.

    The root definition file you selected is added to your API. For OpenAPI 2.0 and 3.0 APIs, Postman scans for any dependent files referenced in the root definition file and automatically adds them to your API. You can also [manually add more definition files](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-files-from-a-connected-repository) from your repository as needed.

> Postman stores your authorized accounts so you can use them to connect to other repositories and services. Learn more about [managing connected accounts for remote repositories](/docs/designing-and-developing-your-api/versioning-an-api/using-cloud-git-repo/#managing-connected-accounts-for-remote-repositories).

## Disconnecting an on-premises repository

After you disconnect a remote repository, you can no longer sync changes between Postman and the repository.

1. Select **APIs** in the sidebar and select an API.
1. Select the source control icon <img alt="Git branch icon" src="https://assets.postman.com/postman-docs/icon-source-control.jpg#icon" width="16px"/> in the right sidebar.
1. In the **Source Control** pane, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Disconnect repository from Postman**.
1. Enter the name of the API to confirm, then select **Disconnect**.

## Next steps

After you've connected a remote repository to your API, you can:

* Work with branches, push and pull changes, and resolve conflicts. Learn more about [managing changes using Git](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/).
* Publish an API version to a workspace or the Private API Network. Learn more about [publishing an API version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).
