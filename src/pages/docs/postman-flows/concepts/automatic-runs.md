---
title: "Publish a Flow to the Postman cloud"
updated: 2023-08-15
---

You can publish a Flow to the cloud so it can be triggered with a webhook. This enables your Flow to be run automatically in the cloud.

## Contents

* [Basic concepts of Postman Flows and webhooks](#basic-concepts-of-postman-flows-and-webhooks)
* [Testing locally](#testing-locally)
* [Publish your Flow](#publish-your-flow)
* [Trigger the webhook](#trigger-the-webhook)

### Basic concepts of Postman Flows and webhooks

Webhooks are a way for one system to tell another system that some information has changed. It works similarly to push notifications on a phone. Instead of constantly checking your email app to see if there's any new mail, the email app sends a notification to you that a new email has been received. Many services today with APIs also offer webhooks as a way to communicate between their system and yours.

When a Flow is published to the cloud, the Flow will run each time it receives a webhook event from another service. This is useful because the Flow can be run automatically and doesn't need your computer to be on, since these Flows run on Postman's cloud.

### Testing locally

Every Flow begins with the **Start** block. When you want to create a Flow to run on the cloud, you'll want to test it locally. You can enter information into the **Start** block by selecting the **Start** block then selecting the gear icon <img alt="Gear icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the right sidebar. This information can either be in text or JSON format. Typically, you'll want to put an example of what an actual webhook will be from the API you're working with. Many APIs include a sample of what their webhook information will look like, but if the API you're working with doesn't you can make one yourself by following the steps in the [Trigger the webhook](#trigger-the-webhook) step.

![Testing Locally](https://assets.postman.com/postman-docs/v10/running-flows-on-the-cloud-test-data-v10-2.gif)

### Publish your Flow

In the sidebar, under **Applications**, select **Webhook** to generate a webhook and upload your local Flow to Postman's cloud.

<img width="300" alt="Publish to the cloud" src="https://assets.postman.com/postman-docs/v10/flows-create-webhook-v10-1.gif" fetchpriority="low" loading="lazy" />

You can use the generated webhook in a request to trigger your published Flow. The **Webhook** section in the sidebar counts how many requests your Flow's webhook has received. Select the number of requests to see more details about them.

![Inspect requests](https://assets.postman.com/postman-docs/v10/flows-webhook-requests-v10.jpg)

Select **Preview** to test the webhook locally. You can add a request body to simulate incoming webhook data.

Select **Publish** to re-upload your Flow to Postman's cloud after making changes to your Flow.

Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> to edit the webhook's configuration, view the published version of your Flow, or unpublish the Flow. You can configure what incoming data your webhook receives (**Only Body** or **Full Request**), and if the server will respond with the default response or with an empty body.

> **Important**
>
> Every time you publish a Flow, Postman saves your collections and environments. If you make any changes to these, you will need to republish.

To see a published Flow's live logs, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **View published version > View Live Logs**.

![View live logs](https://assets.postman.com/postman-docs/v10/flows-view-live-logs-v10.gif)

### Trigger the webhook

Often when working with webhooks, a third-party service sends data to your published Flow's webhook. You can give the webhook URL under **Webhook** in the sidebar to the other service so they can send data to it. Once that's set up, you can view the live logs and see what the requests from the other service looks like to use as your test data. Flows can also be manually run by making a request to the Webhook URL.
