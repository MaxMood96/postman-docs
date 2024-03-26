---
title: "Sync your changes across devices"
updated: 2023-05-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Syncing Your Work in Postman | The Exploratory"
    url: "https://youtu.be/ocnn0nYICpo"
---

Postman automatically syncs changes across all devices that are linked to your account, including edits, updates, additions, or deletions. As long as you're signed in to Postman, and have a reliable internet connection, your data will sync.

* When you _sign out_, Postman removes your synced data from your local storage.
* When you _sign back in_, Postman restores your data from the cloud.
* When you _reload_, Postman automatically retrieves the most recent version of your data.

You can have up to three devices signed in to your Postman account simultaneously, such as your work computer, personal computer, and phone.

## Understanding sync states

Postman indicates the sync state of your workspace with the sync icon in the footer. Hover over the sync icon to see more information about your connection and sync status.

<img alt="Understanding sync states" src="https://assets.postman.com/postman-docs/syncing-understanding-sync-states-v9.19.jpg" width="250px"/>

* **Offline** means that you aren't connected to the Postman servers. This may mean that your computer isn't connected to the internet.
* **Online** means that you're connected to the Postman servers and your work is either in the process of syncing or is already synced.
* **Error** means there was a syncing error while connecting to Postman. Hover over the sync state icon to see detailed information on the error.

> You may occasionally experience sync conflicts between Postman and its servers, particularly when you work as part of a team. When this happens and you attempt to save an element, Postman will give you the option to either save and overwrite it or cancel the save action. For requests, you'll also have the option to save your version as a new request.

## Disabling sync

Some organizations have security guidelines that prevent team members from syncing data to the Postman cloud. In this situation, you can use the [lightweight Postman API Client](/docs/getting-started/basics/using-api-client/). All of your work in the lightweight API Client is stored locally and isn't synced online with Postman.

You can delete data that's already synced to Postman by [deleting your account](/docs/getting-started/installation/postman-account/#deleting-your-account). Note that you must [leave all Postman teams](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/#leaving-a-team) that you're a member of prior to deleting your account.

> Learn more about [Security at Postman](https://www.postman.com/trust/security/).
