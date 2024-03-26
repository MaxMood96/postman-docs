---
title: "Integrate Postman with Dropbox"
updated: 2023-04-13
---

Back up and synchronize your Postman Collections on Dropbox for file sharing, storage, and collaboration. The Postman to Dropbox integration complements your existing workflows and allows you to store your collections and other project files in one place.

## Contents

* [Configuring Dropbox integration](#configuring-dropbox-integration)
* [Accessing your Postman Collections on Dropbox](#accessing-your-postman-collections-on-dropbox)

## Configuring Dropbox integration

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.

    <img alt="Home page and integrations" src="https://assets.postman.com/postman-docs/v10/home-integrations-v10-2.jpg" width="390px">

1. Select **[Browse All Integrations](https://go.postman.co/integrations/browse?category=all)**.

1. Search and select **Dropbox**.

1. Select **Add Integration** to authorize a backup of your Postman Collection. Your collection is saved as a single JSON file and uploaded to Dropbox.

    ![dropbox add integration](https://assets.postman.com/postman-docs/dropbox-add-integration.jpg)

1. You'll be prompted to allow Postman to access its own folder inside your Dropbox account. After you grant access, you can close the browser tab and return to Postman.

1. Enter the following in the **Add integration** window:

    * **Nickname** - A nickname for your integration.
    * **Workspace** - The workspace that has your collection.
    * **Collection** - The collection you would like uploaded to Dropbox.
    * **Filename** - The name of the JSON file in Dropbox.

1. Select **Add Integration** to save the configuration.

Postman often checks your collection for changes. If Postman identifies changes when it checks your collection, the changes automatically send to Dropbox in JSON format.

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a collection by opening the collection and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).

## Accessing your Postman Collections on Dropbox

Once you've backed up your collection in Dropbox, you can find your backups at **Dropbox > Apps > Postman Pro**.

  ![view in dropbox](https://assets.postman.com/postman-docs/v10/dropbox-view-v10.jpg)
