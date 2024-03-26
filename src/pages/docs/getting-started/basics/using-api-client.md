---
title: "Build and send requests offline using the lightweight Postman API Client"
updated: 2023-05-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Part 1: Send a Request"
    url: "https://youtu.be/2oOSnxZ28fA"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Announcing the new lightweight Postman API Client and sunsetting Scratch Pad"
    url: "https://blog.postman.com/announcing-new-lightweight-postman-api-client/"
---


The _lightweight Postman API Client_ is a space where you can work if you're using the Postman desktop app and not connected to Postman servers. When you aren't signed in to Postman, you can still use the lightweight [API Client](https://www.postman.com/api-platform/api-client/) to build and send HTTP, WebSocket, gRPC, and GraphQL requests. To use the lightweight Postman API Client, make sure to [install the Postman desktop app](/docs/getting-started/installation/installation-and-updates/).

All of your work in the lightweight API Client is stored locally and isn't synced online with Postman. After you [sign in to Postman](/docs/getting-started/installation/postman-account/), you can move your open requests and request history into a workspace where you can collaborate with others.

> **What happened to the Scratch Pad?** New Postman users who download the Postman desktop app use the lightweight Postman API Client when not signed in to Postman. The Scratch Pad is deprecated and no longer supported. Learn more about [using the Scratch Pad](/docs/getting-started/basics/using-scratch-pad/).

## Contents

* [Accessing the lightweight API Client](#accessing-the-lightweight-api-client)
* [Lightweight API Client features](#lightweight-api-client-features)
* [Moving from the lightweight API Client to a workspace](#moving-from-the-lightweight-api-client-to-a-workspace)

## Accessing the lightweight API Client

When you open the Postman desktop app for the first time, you can create a free Postman account or sign in to your Postman account. Alternatively, you can continue with the lightweight API Client. You'll have the same option if you sign out of Postman.

<img alt="Postman lightweight API Client" src="https://assets.postman.com/postman-docs/v10/api-client-v10-14.jpg">

## Lightweight API Client features

While you're in the lightweight API Client, you can create new requests, send requests and receive responses, and view the history of your sent requests.

* To create a new request, select **New** in the sidebar and then select the type of request you want to create. You can create HTTP, WebSocket, gRPC, or GraphQL requests. Each request you create opens in a new tab. Learn more about [building requests](/docs/sending-requests/requests/).

    > You can change the request type by selecting the icon next to the request name.
    >
    > <img alt="Switching the request type" src="https://assets.postman.com/postman-docs/v10/api-client-switch-request-type-v10-14.jpg" width="320px">

* Select **Send** to send a request and view the response. Learn more about [receiving responses](/docs/sending-requests/response-data/responses/).

* The sidebar shows a history of the requests you've sent. Select a request in the history to open it in a new tab. Learn more about [viewing your request history](/docs/getting-started/basics/navigating-postman/#history).

* You can also use the lightweight API Client to write and execute [test scripts](/docs/writing-scripts/pre-request-scripts/) and to [visualize response data](/docs/sending-requests/response-data/visualizer/).

## Moving from the lightweight API Client to a workspace

[Workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/) enable you to organize your Postman work and collaborate with teammates. When you're in a workspace, you can save requests to [collections](/docs/collections/using-collections/), use [environments](/docs/sending-requests/variables/managing-environments/) and [variables](/docs/sending-requests/variables/variables/), build [APIs](/docs/designing-and-developing-your-api/the-api-workflow/), and more.

To switch to a workspace, you need to sign up for a Postman account or sign in to your existing Postman account. You can move all of your open requests and history from the lightweight API Client to your workspace, so you can pick up right where you left off.

### Signing up for Postman from the lightweight API Client

If you don't have a Postman account, or want to use a new account, select **Create Account** in the header. Follow the onscreen instructions, or learn more about [signing up for a Postman account](/docs/getting-started/installation/postman-account/#signing-up-for-a-postman-account).

After you create your account, your open requests and request history are automatically copied from the lightweight API Client to your default personal workspace. Learn more about [using workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).

### Signing in to Postman from the lightweight API Client

To sign in to your Postman account, select **Sign In** in the header. Follow the onscreen instructions, or learn more about [signing in to Postman](/docs/getting-started/installation/postman-account/#signing-in-to-postman).

After signing in, you can move your open requests and request history from the lightweight API Client to a workspace. Select the workspace where you want to migrate your data and select **Move Data**. You can also create a new personal workspace for your data.

Your open requests and request history are copied from the lightweight API Client to the workspace you selected. Learn more about [using workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).

<img alt="Migrating lightweight API Client data" src="https://assets.postman.com/postman-docs/v10/api-client-migrate-data-v10-14.jpg" width="442px">
