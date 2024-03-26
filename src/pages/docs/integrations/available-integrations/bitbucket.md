---
title: "Integrate Postman with Bitbucket"
updated: 2023-10-04
---

You can back up your Postman Collections to your Bitbucket repository. Once the integration is configured, any changes to your collection in Postman will also appear in your Bitbucket repository.

## Contents

* [API sync with Bitbucket](#api-sync-with-bitbucket)
* [Backing up collections on Bitbucket](#backing-up-collections-on-bitbucket)

## API sync with Bitbucket

With Postman v10, you can connect a Bitbucket repository to an API in the API Builder. Once connected, you can sync your API's definition and associated collections between Postman and Bitbucket. You can switch branches, pull changes from the repository, and push changes to the repository, all from within Postman. To learn more about syncing your API with Bitbucket, see [API version control overview](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/).

## Backing up collections on Bitbucket

To back up your collections to a Bitbucket repository, do the following:

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.

    <img alt="Home page and integrations" src="https://assets.postman.com/postman-docs/v10/home-integrations-v10.jpg" width="350px">

1. Select **[Browse All Integrations](https://go.postman.co/integrations/browse?category=all)**.

1. Search and select **Bitbucket**.

1. Next to **Backup a collection**, select **Add Integration**.

    ![Bitbucket details page](https://assets.postman.com/postman-docs/v10/bitbucket-add-integration-v10.jpg)

1. Enter your Bitbucket authentication and select **Authenticate and Proceed**.

    > App passwords are different from account passwords. Learn [how to create an app password in Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/).

    <img alt="Add Bitbucket integration" src="https://assets.postman.com/postman-docs/v10/add-integration-bitbucket-v10.18.jpg" width="450px">

1. Select your collection to back up, the repository you'd like to back it up to, and choose the directory, filename, and branch. Select **Add Integration**.

    <img alt="Configure Bitbucket integration" src="https://assets.postman.com/postman-docs/v10/add-integration-bitbucket-form-v10.18.jpg" width="450px">

Postman often checks your collection for changes. If Postman identifies changes when it checks your collection, the changes automatically commit to your repository in JSON format.

To view your collections in Bitbucket, go to your [Bitbucket dashboard](https://bitbucket.org/dashboard/overview) > **Repositories**. Select your repository, then select **Commits**.

![Bitbucket commits list](https://assets.postman.com/postman-docs/bitbucket-commits.jpg)

You can select a commit to view your stored collection in JSON format.

![Bitbucket collection](https://assets.postman.com/postman-docs/bitbucket-collection.jpg)

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a collection by opening the collection and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).
