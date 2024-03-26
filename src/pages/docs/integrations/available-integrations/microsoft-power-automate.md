---
title: "Integrate Postman with Microsoft Power Automate"
updated: 2022-07-19
---

Microsoft Power Automate enables you to automate workflows between your favorite apps and services to get notifications, synchronize files, collect data, and more. It offers over 140 services with predefined flows that you can implement.

You can configure Microsoft Power Automate with Postman to monitor run results, view team and collection-specific activity feeds, back up your Postman Collections, and use a Microsoft Power Automate Webhook URL.

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a monitor or collection by opening the monitor or collection and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).

## Contents

* [Get the Microsoft Power Automate webhook URL](#get-the-microsoft-power-automate-webhook-url)
* [Configuring Microsoft Power Automate integration](#configuring-microsoft-power-automate-integration)
    * [Back up your Postman Collections in Microsoft Power Automate](#back-up-your-postman-collections-in-microsoft-power-automate)
    * [Add a collection activity feed to Microsoft Power Automate](#add-a-collection-activity-feed-to-microsoft-power-automate)
    * [Send monitor run results in Microsoft Power Automate](#send-monitor-run-results-in-microsoft-power-automate)
    * [Add a team activity feed to Microsoft Power Automate](#add-a-team-activity-feed-to-microsoft-power-automate)
* [Example JSON schemas](#example-json-schemas)

## Get the Microsoft Power Automate webhook URL

1. Sign in to [Microsoft Power Automate](https://flow.microsoft.com/en-us/), and go to **My Flows**. Select **Create from blank**.

    ![create connector](https://assets.postman.com/postman-docs/ms-pa-create-from-blank-v9.jpg)

1. To add the first step, search for "request" in the search bar. Select the **Triggers** tab, and select **Request / Response - Request**.

    ![select trigger](https://assets.postman.com/postman-docs/ms-pa-request-v9.jpg)

1. Enter the JSON schema for the [integration type](#configuring-microsoft-power-automate-integration) you're creating. For details, see [Example JSON schemas](#example-json-schemas).

    ![request](https://assets.postman.com/postman-docs/ms-pa-url-generated-v9.jpg)

1. Select **New Step > Add an Action**, and configure your specific service. For this demo, connect your Postman Monitor to the Microsoft Power Automate mobile app. On every monitor run, you will receive an in-app notification in the Microsoft Power Automate mobile app. Select **Notifications** from the list of services and choose the **Send me a mobile notification** action.

    ![add action](https://assets.postman.com/postman-docs/ms-pa-choose-an-action-v9.jpg)

    ![notifications](https://assets.postman.com/postman-docs/ms-pa-notifications-v9.jpg)

    You can customize the text notifications by choosing your wording and adding content derived from your Postman Monitor run results.

    ![enter text](https://assets.postman.com/postman-docs/ms-pa-send-notification-v9.jpg)

1. Select **Create Flow**.

1. To get the generated webhook URL, select **Request**. Copy this webhook and save it for later.

    ![generated webhook URL](https://assets.postman.com/postman-docs/ms-pa-post-to-url-v9.jpg)

## Configuring Microsoft Power Automate integration

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.

    <img alt="Home page and integrations" src="https://assets.postman.com/postman-docs/v10/home-integrations-v10-2.jpg" width="390px">

1. Select **[Browse All Integrations](https://go.postman.co/integrations/browse?category=all)**.

1. Search and select **Microsoft Power Automate**.

1. There are four available Microsoft Power Automate integrations:

    * [Back up a collection](#back-up-your-postman-collections-in-microsoft-power-automate) - Back up a Postman Collection in Microsoft Power Automate.
    * [Post collection activity](#add-a-collection-activity-feed-to-microsoft-power-automate) - Send your collection [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#accessing-the-activity-feed-from-postman) to Microsoft Power Automate.
    * [Post monitoring results](#send-monitor-run-results-in-microsoft-power-automate) - Configure a monitor run to trigger Microsoft Power Automate.
    * [Post team activity](#add-a-team-activity-feed-to-microsoft-power-automate) - Send your team's [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#accessing-the-activity-feed-from-postman) to Microsoft Power Automate.

    ![Add Microsoft Power Automate integration](https://assets.postman.com/postman-docs/v10/microsoft-power-automate-add-integration-v10.jpg)

### Back up your Postman Collections in Microsoft Power Automate

It’s important to back up your Postman Collections for safekeeping. Microsoft Power Automate helps you do this with services like Box (a cloud-based storage solution), but you can also use it to back up to your custom DB2 instance.

To back up a collection in Microsoft Power Automate, do the following:

1. Enter the following in the **Add Integration** window:

    * **Nickname** - A nickname for the integration.
    * **Workspace** - The workspace that has the collection you want to back up.
    * **Collection** - The collection you want to back up.
    * **Notification URL** - Your notification URL.

1. Select **Add Integration**.

Postman often checks your collection for changes. If Postman identifies changes when it checks your collection, the changes automatically send to Microsoft Power Automate.

### Add a collection activity feed to Microsoft Power Automate

In the Postman activity feed, you can view changes your teammates make to your Postman Collection. Integrating with Microsoft Power Automate enables you to send these updates to email services like Outlook, Gmail, or a custom SMTP service. You can also set up Twilio to text you when updates are made to your feed.

To send a collection activity feed to Microsoft Power Automate, do the following:

1. Enter the following in the **Add Integration** window:

    * **Nickname** - A nickname for the integration.
    * **Workspace** - The workspace that has the collection.
    * **Collection** - The collection you want to receive notifications about.
    * **Notification URL** - Your [webhook URL](#get-the-microsoft-power-automate-webhook-url) where your team's updates are sent.

1. Select **Add Integration**.

### Send monitor run results in Microsoft Power Automate

Postman Monitors enable you to run your collections on a schedule with no manual intervention. With the Microsoft Power Automate integration, you can use those results by connecting to other available services.

To send monitor run results to Microsoft Power Automate, do the following:

1. Enter the following in the **Add Integration** window:

    * **Nickname** - A nickname for the integration.
    * **Workspace** - The workspace that has your monitor.
    * **Monitor** - The collection-based monitor which will send its results to Microsoft Power Automate.
    * **Notification URL** - Your notification URL.
    * **Monitor runs notifications** - Select whether you want notifications for all completed monitor runs, or notifications for three monitor run failures and then the first successful monitor run.

1. Select **Add Integration**.

Your integration has been set up. Whenever a monitor runs, you will get a notification on your Microsoft Power Automate mobile app.

![see notifications](https://assets.postman.com/postman-docs/58858362.jpg)

### Add a team activity feed to Microsoft Power Automate

In the Postman activity feed, you can track changes made to your collections and within your team. Integrating with Microsoft Power Automate enables you to send these updates to email services like Outlook, Gmail, or a custom SMTP service. You also have the option to set up Twilio to text you when updates are made to your feed.

To send a team activity feed to Microsoft Power Automate, do the following:

1. Enter the following in the **Add Integration** window:

    * **Nickname** - A nickname for the integration.
    * **Webhook URL** - Your [webhook URL](#get-the-microsoft-power-automate-webhook-url) where your team's updates are sent.

1. Select **Add Integration**.

## Example JSON schemas

Use these example JSON schemas to help you create your Microsoft Power Automate [webhook URL](#get-the-microsoft-power-automate-webhook-url).

### Example backup collections

Use this example JSON schema to help you create an integration that [backs up a collection](#back-up-your-postman-collections-in-microsoft-power-automate).

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "definitions": {},
  "id": "http://example.com/example.json",
  "properties": {
    "collection": {
      "id": "/properties/collection",
      "properties": {},
      "type": "object"
    }
  },
  "type": "object"
}
```

### Example collection and team activity feed

Use this example JSON schema to help you create integrations that [post collection activity](#add-a-collection-activity-feed-to-microsoft-power-automate) and [post team activity](#add-a-team-activity-feed-to-microsoft-power-automate).

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "definitions": {},
  "id": "http://example.com/example.json",
  "properties": {
    "action": {
      "id": "/properties/action",
      "type": "string"
    },
    "collection_name": {
      "id": "/properties/collection_name",
      "type": "string"
    },
    "collection_uid": {
      "id": "/properties/collection_uid",
      "type": "string"
    },
    "message": {
      "id": "/properties/message",
      "type": "string"
    },
    "model": {
      "id": "/properties/model",
      "type": "string"
    },
    "model_name": {
      "id": "/properties/model_name",
      "type": "string"
    },
    "model_uid": {
      "id": "/properties/model_uid",
      "type": "string"
    },
    "user_id": {
      "id": "/properties/user_id",
      "type": "string"
    },
    "user_name": {
      "id": "/properties/user_name",
      "type": "string"
    }
  },
  "type": "object"
}
```

### Example monitor run results

Use this example JSON schema to help you create an integration that [posts monitoring results](#send-monitor-run-results-in-microsoft-power-automate).

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "definitions": {},
  "id": "http://example.com/example.json",
  "properties": {
    "collection_name": {
      "id": "/properties/collection_name",
      "type": "string"
    },
    "collection_uid": {
      "id": "/properties/collection_uid",
      "type": "string"
    },
    "environment_name": {
      "id": "/properties/environment_name",
      "type": "string"
    },
    "environment_uid": {
      "id": "/properties/environment_uid",
      "type": "string"
    },
    "metrics": {
      "id": "/properties/metrics",
      "properties": {
        "errors":
          "id": "/properties/metrics/properties/errors",
          "type": "integer"
        },
        "failedTests": {
          "id": "/properties/metrics/properties/failedTests",
          "type": "integer"
        },
        "passedTests": {
          "id": "/properties/metrics/properties/passedTests",
          "type": "integer"
        },
        "requestCount": {
          "id": "/properties/metrics/properties/requestCount",
          "type": "integer"
        },
        "totalLatency": {
          "id": "/properties/metrics/properties/totalLatency",
          "type": "integer"
        },
        "warnings": {
          "id": "/properties/metrics/properties/warnings",
          "type": "integer"
        }
      },
      "type": "object"
    },
    "monitor_name": {
      "id": "/properties/monitor_name",
      "type": "string"
    },
    "monitor_uid": {
      "id": "/properties/monitor_uid",
      "type": "string"
    },
    "user_id": {
      "id": "/properties/user_id",
      "type": "string"
    },
    "user_name": {
      "id": "/properties/user_name",
      "type": "string"
    }
  },
  "type": "object"
}
```
