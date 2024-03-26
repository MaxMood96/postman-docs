---
title: "Integrate Postman with APIMatic"
updated: 2022-02-11
---

Postman's APIMatic integration converts a Postman Collection into an API description format such as Swagger, RAML, or API Blueprint, and then periodically backs up the resulting file on GitHub.

## Contents

* [Prerequisites](#prerequisites)
* [Configuring an APIMatic integration](#configuring-an-apimatic-integration)

## Prerequisites

To set up an APIMatic integration with Postman, you will need:

* An [APIMatic account](https://www.apimatic.io/account/register)
* An [APIMatic integration key](https://docs.apimatic.io/manage-apis/get-api-keys/)
* A [GitHub account](https://github.com/)
* A GitHub repository to back up your collection

## Configuring an APIMatic integration

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.

    <img alt="Home page and integrations" src="https://assets.postman.com/postman-docs/v10/home-integrations-v10-2.jpg" width="390px">

1. Select **[Browse All Integrations](https://go.postman.co/integrations/browse?category=all)**.
1. Search and select **APIMatic**.
1. Select **Add Integration**.

    ![Add APIMatic integration](https://assets.postman.com/postman-docs/v10/apimatic-add-integration-v10.jpg)

1. Your browser will open a new **Authorize Postman** page that gives Postman access to your GitHub repositories. Select **Authorize postmanlabs**. Once the authorization process is complete, the page will tell you to close the tab and continue in Postman.

    > If you aren't signed in to GitHub, you will be prompted to sign in.

1. Enter the following in the **Add Integration** window:
    * **APIMatic API Key** - Your [APIMatic integration key](https://docs.apimatic.io/manage-apis/get-api-keys/).
    * **Nickname** - A nickname for the integration.
    * **Workspace** - The workspace that has the collection you want to back up.
    * **Collection** - The collection you want to back up.
    * **Repository** - The GitHub repository you want to back up your collection to.
    * **Directory** - The directory in the GitHub repository to back up your collection to. If a directory with that name doesn't exist, it will be created when you add the integration.
    * **Filename** - A filename for the collection backup file.
    * **Format** - The format the collection is saved as.
    * **Branch** - The name of the GitHub branch to back up the collection to. This branch must already exist, and the integration process will fail if you specify an invalid branch name.
1. Select **Add Integration**.

Once the integration is created, select it to view details about the integration including its run log.

<img alt="APIMatic integration run log" src="https://assets.postman.com/postman-docs/apimatic-run-log-v9.jpg"/>

Postman often checks your collection for changes. If Postman identifies changes when it checks your collection, the changes automatically commit to your repository in JSON format.

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a collection by opening the collection and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).
