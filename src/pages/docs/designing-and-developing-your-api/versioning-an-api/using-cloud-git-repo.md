---
title: "Connect your API to a cloud-hosted Git repository"
updated: 2023-09-15
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

You can connect your API to a cloud-hosted Git repository to sync your API definition and collections between Postman and the repository. Postman supports connecting to GitHub, Bitbucket, GitLab SaaS, or Azure DevOps repositories.

After connecting, you can push and pull changes between Postman and branches in the remote repository. When it's time to release, you can publish an API version to make your changes available to consumers.

> The steps below are for connecting to the cloud-hosted versions of GitHub, Bitbucket, GitLab SaaS, or Azure DevOps. If you need to connect to an on-premises repository, go to [Using an on-premises Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-on-prem-git-repo/).

## Contents

* [Using a cloud-hosted repository overview](#using-a-cloud-hosted-repository-overview)
* [Connecting to a cloud-hosted repository](#connecting-to-a-cloud-hosted-repository)
* [Managing connected accounts for remote repositories](#managing-connected-accounts-for-remote-repositories)
* [Disconnecting a cloud-hosted repository](#disconnecting-a-cloud-hosted-repository)
* [Next steps](#next-steps)

## Using a cloud-hosted repository overview

You can connect an API in Postman to your cloud-hosted Git repository. This enables you to sync changes between the repository and Postman.

Keep in mind the following when connecting to a cloud-hosted Git repository:

* **The user account used for authentication requires full access to repositories.** To contribute to the API, each user must authenticate with their own account.

* **For GitHub connections, there's a limit of ten auth tokens per user per application imposed by GitHub.** If you create more than ten connections with the same user, tokens beyond this limit will be revoked in the order that they were created. Teams can use other Postman accounts to create more than ten integration.

* **For Azure DevOps connections, make sure to enable third-party application access for your organization.** If you don't enable third-party access, Postman won't be able to connect to your repository. In Azure DevOps, go to your [organization settings](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/change-application-access-policies?view=azure-devops), select **Policies**, and turn on the toggle next to **Third-party application access via OAuth**.

* **You can connect one or more APIs to a remote repository.** You can keep your APIs separate in the repository using files or branches. Learn more about [connecting more than one API to the same repository](/docs/designing-and-developing-your-api/versioning-an-api/connecting-multiple-apis/).

## Connecting to a cloud-hosted repository

You can connect your API to a GitHub, Bitbucket, GitLab SaaS, or Azure DevOps repository hosted in the cloud.

1. Select **APIs** in the sidebar and select an API.
1. Under **Connect repository**, select **Connect** and select the type of repository you want to connect to (GitHub, Bitbucket, GitLab SaaS, or Azure DevOps).

    > If you want to connect to GitHub Enterprise Server, GitLab Self-Managed, or Azure DevOps Server, see [Using an on-premises repository](/docs/designing-and-developing-your-api/versioning-an-api/using-on-prem-git-repo/).

1. A browser tab opens asking you to sign in to your repository. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.
1. On the **Connect your repository** page, enter the **Organization** or **Workspace** and the **Repository** where the API will be stored. (For GitLab, enter the **Group** and **Project** for your API.)
1. Select the **Initial branch** for the API. Any changes you make in Postman are stored in the initial active branch. (You can switch to another branch to make it the active branch at any time.)
1. Select an **API schema file** to add to your API. If you're working on a [multi-file API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#working-with-multi-file-api-definitions), make sure to select the [root definition file](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#about-root-files) in your repository. The root file is the base file that has references to other files in the API definition. If you leave this field blank, no definition files are added to your API. You can [manually add a definition file](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-an-api-definition-from-a-connected-repository) from your repository later.
1. Select a **Collection directory** where the collections linked to your API will be stored in the repository. If you leave this field blank, a `postman/collections` directory will be created in the root of the repository.
1. Select **Connect Repository**.

    The root definition file you selected is added to your API. For OpenAPI 2.0 and 3.0 APIs, Postman scans for any dependent files referenced in the root definition file and automatically adds them to your API. You can also [manually add more definition files](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-files-from-a-connected-repository) from your repository as needed.

> Postman stores your authorized accounts so you can use them to connect to other repositories and services. Learn more about [managing connected accounts for remote repositories](#managing-connected-accounts-for-remote-repositories).

<img alt="Connecting to a cloud-hosted repo" src="https://assets.postman.com/postman-docs/v10/api-builder-remote-repo-v10-18a.jpg" width ="562px"/>

## Managing connected accounts for remote repositories

After you connect an API to a remote repository, other editors of the API must authenticate to be able to contribute to the API. Postman will prompt editors to authenticate the next time they open the API.

Postman stores the accounts you've authorized with. After connecting to one repository, you can connect to other repositories that use the same Git provider without having to re-authenticate.<!-- You can also connect to the provider's other services. For example, if you connect to a GitHub repository, you can connect to [GitHub Actions](/docs/integrations/available-integrations/ci-integrations/github-actions/) without having to authenticate again. -->

To manage services you've authorized with, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header, select **Settings**, and select the **Connected accounts** tab. Learn more about [managing connected accounts](/docs/getting-started/installation/settings/#connected-accounts).

## Disconnecting a cloud-hosted repository

After you disconnect a remote repository, you can no longer sync changes between Postman and the repository.

1. Select **APIs** in the sidebar and select an API.
1. Select the source control icon <img alt="Git branch icon" src="https://assets.postman.com/postman-docs/icon-source-control.jpg#icon" width="16px"/> in the right sidebar.
1. In the **Source Control** pane, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Disconnect repository from Postman**.
1. Enter the name of the API to confirm, then select **Disconnect**.

## Next steps

After you've connected a remote repository to your API, you can:

* Work with branches, push and pull changes, and resolve conflicts. Learn more about [managing changes using Git](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/).
* Publish an API version to a workspace or the Private API Network. Learn more about [publishing an API version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).
