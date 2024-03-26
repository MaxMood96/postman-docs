---
title: "Integrate Postman with GitLab"
updated: 2021-11-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Back up a Postman Collection Using GitLab"
    url: "https://youtu.be/BL8DFOPncMc"
---

> **[GitLab Self-Managed integrations are available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**
>
Back up your Postman Collections to GitLab, an open-source Git repository manager, with the Postman to GitLab integration.

Setting up a GitLab integration requires you to get a GitLab Personal Access Token and configure how you would like to back up your collections.

## API sync with GitLab

With Postman v10, you can connect a GitLab repository to an API in the API Builder. Once connected, you can sync your API's definition and associated collections between Postman and GitLab. You can switch branches, pull changes from the repository, and push changes to the repository, all from within Postman. To learn more about syncing your API with GitLab, see [API version control overview](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/).

## Generating a GitLab Personal Access Token

1. Sign in to [GitLab](https://about.gitlab.com/).

1. If you don’t already have a Personal Access Token from GitLab, generate a new one in your [GitLab dashboard](https://gitlab.com/-/profile/personal_access_tokens) by selecting **Add new token** under **Personal Access Tokens**.

   ![GitLab create token](https://assets.postman.com/postman-docs/v10/gitlab-generate-token-v10.18.jpg)

1. Copy the generated token to use when creating the integration in Postman.

## Configuring a backup for Postman collections in GitLab

1. On the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

1. Search and select **GitLab**.

1. You can select **View** or **View All** for a list of all the integrations created by your team.

   ![GitLab add integration](https://assets.postman.com/postman-docs/gitlab-add-integration.jpg)

You can use the GitLab integration for two tasks:

* [Back up your Postman Collections to GitLab](#back-up-your-postman-collections-to-gitlab)
* [Back up your Postman Collections to GitLab on a custom domain](#back-up-your-postman-collections-to-gitlab-on-a-custom-domain)

## Back up your Postman Collections to GitLab

1. Select **Add Integration** to enter your GitLab token to start the integration.

   ![Enter GitLab token](https://assets.postman.com/postman-docs/gitlab-backup-collection-authenticate.jpg)

1. Enter your GitLab Personal Access Token and select **Authenticate and Proceed**.

1. Choose an existing Postman Collection and your GitLab Project, and enter a filename for your backup.

1. In **Advanced Options** you can enter a custom directory name or leave `Postman Collections` as the default. You can specify a branch for commit or the default branch of the repository will be used.

    ![GitLab integration configuration](https://assets.postman.com/postman-docs/gitlab-backup-collection-configuration.jpg)

1. Select **Add Integration** to save your integration configuration.

Your collection is pushed to your GitLab project under the filename that you specified and saved as a single JSON file.

Postman often checks your collection for changes. If Postman identifies changes when it checks your collection, the changes automatically commit to your repository in JSON format. Your collections and code can exist in the same repository.

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a collection by opening the collection and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).

## Back up your Postman Collections to GitLab on a custom domain

1. If your network is behind a firewall that requires allowlisting IP addresses, you will need to use a static IP address to enable collection backups to GitLab on custom domains.

    Contact your IT team to allowlist the following static IP in your firewall to enable collection backups to GitLab:

   * US East: `3.212.102.200`

   Once you allowlist this IP address, calls for this integration will be able to connect to your network and allow the integration to work as expected.

1. Select **Add Integration** to enter your GitLab token to start the integration.

1. Enter your GitLab Personal Access Token, specify your GitLab custom/self-hosted domain, and select **Proceed**.

1. In the **Backup your Postman Collections** page, choose an existing Postman Collection and your GitLab Project, then enter a filename for your backup.

1. In **Advanced Options** you can enter a custom directory name or leave `Postman Collections` as the default. You can specify a branch for commit or the default branch of the repository will be used. Make sure you have write access to the branch where you want to push your changes.

   > Note that the branch you want to back up your collection to must already exist.

1. Select **Add Integration**.

Your collection is pushed to your GitLab project under the directory that you specified and saved as a single JSON file.

Postman often checks your collection for changes. If Postman identifies changes to your collection, the changes automatically commit to your repository in JSON format. Your collections and code can exist in the same repository.

You can go to your GitLab domain and inspect your backed-up collections.

![GitLab advanced options 2](https://assets.postman.com/postman-docs/gitlab-gray7.jpg)
