---
title: "Build and send requests offline using the Scratch Pad"
page_id: "using-the-scratch-pad"
updated: 2023-09-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Announcing the new lightweight Postman API Client and sunsetting Scratch Pad"
    url: "https://blog.postman.com/announcing-new-lightweight-postman-api-client/"
---

The _Scratch Pad_ is a space where you can work if you're using the Postman desktop app and not connected to Postman servers. When you aren't signed in or don't have a network connection, you can still access some Postman features offline, such as creating collections and requests, or sending requests. All your work in the Scratch Pad is stored locally and isn't synced online with Postman. After working in the Scratch Pad, you can later move your work into a workspace once you sign in.

> **The Scratch Pad is deprecated and no longer supported.** The Scratch Pad is being discontinued and won’t receive any updates, bug fixes, or security updates. You can use the lightweight API Client when not signed in to Postman to send API requests, including HTTP, WebSocket, gRPC, and GraphQL requests. Learn more about the [lightweight Postman API Client](/docs/getting-started/basics/using-api-client/).

## Contents

* [Entering the Scratch Pad](#entering-the-scratch-pad)
* [Scratch Pad features](#scratch-pad-features)
* [Leaving the Scratch Pad](#leaving-the-scratch-pad)
* [Migrating data from the Scratch Pad](#migrating-data-from-the-scratch-pad)

## Entering the Scratch Pad

If you still have access to Scratch Pad and aren't signed in or connected to Postman, a global banner at the top of the screen indicates that you're already in the Scratch Pad.

If you are signed in and want to go to the Scratch Pad, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Scratch Pad**.

> Scratch Pad is no longer available in Postman v10.18 and later. You can access the Scratch Pad in previous Postman versions if you still have data in the Scratch Pad.

If you don't have access to Scratch Pad, you'll be prompted to sign in, sign up for a Postman account, or switch to the lightweight Postman API Client. If you still have data in Scratch pad, you'll also be asked if you want to move it. See [Migrating data from the Scratch Pad](#migrating-data-from-the-scratch-pad) for more details.

## Scratch Pad features

While you are in the Scratch Pad, you can:

* Create, edit, rename, or delete a collection, folder, environment, HTTP request, or WebSocket request.
* Send a request.
* View your history of your sent requests.
* Write and execute test scripts and visualizers.
* Export collections and environments.
* Edit documentation for a collection or request.

## Leaving the Scratch Pad

1. Ensure you have a network connection to Postman, and [sign in to Postman](/docs/getting-started/installation/postman-account/#signing-in-to-postman). If you don't have a Postman account, you can [sign up for one](/docs/getting-started/installation/postman-account/#signing-up-for-a-postman-account).
1. Switch to a workspace by selecting **Workspaces** from the header. For more information, see [Using and managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).

> You can also select **Switch to a Workspace** from the Scratch Menu global banner at the top of the screen.

After signing in, you can move your collections, environments, requests, and request history from the Scratch Pad to a workspace. See [Migrating data from the Scratch Pad](#migrating-data-from-the-scratch-pad) for more details.

## Migrating data from the Scratch Pad

When you sign in to Postman, you can migrate all of your Scratch Pad data to a workspace.

[Workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/) enable you to organize your Postman work and collaborate with teammates. To switch to a workspace, you need to sign up for a Postman account or sign in to your existing Postman account. You can move all of your collections, environments, and history from the Scratch Pad to your workspace, so you can pick up right where you left off.

### Migrate data from the Scratch Pad to a workspace

To migrate your Scratch Pad data to a workspace, do the following:

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**.
1. Select the **Data** tab, then select **Migrate Data**.
1. Select the workspace where you want to migrate your data and select **Move Data**. You can also create a new personal workspace for your data.

All of your collections, environments, and history are copied from the Scratch Pad to the workspace you selected. (Open tabs aren't migrated.)

### Exporting individual collections and environments from the Scratch Pad

You can also export individual collections and environments from the Scratch Pad to a local file. You can't make bulk data exports of all collections and environments at once. For more information on exporting a single collection or an environment in Postman, see [Exporting Postman data](/docs/getting-started/importing-and-exporting/exporting-data/).

If you no longer have Scratch Pad access, you'll be prompted to export all data to a local file, which you can then import into a workspace.

### Importing exported Scratch Pad data

To import the exported Scratch Pad data into your workspace, do the following:

1. Sign in and switch to a workspace by selecting **Workspaces** from the header. For more information, see [Using and managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).
1. Select **Import** in the sidebar.
1. Drag your exported collection or environment and select **Import**.

For more information on importing, see [Importing data into Postman](/docs/getting-started/importing-and-exporting/importing-data/).
