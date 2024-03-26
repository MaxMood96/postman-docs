---
title: "Configure custom webhooks in Postman"
updated: 2022-10-11
warning: false
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Build Custom Webhooks Using Postman"
    url: "https://blog.postman.com/postman-custom-webhooks/"
  - type: link
    name: "Building a Slack Bot with the Twitch API and Postman"
    url: "https://blog.postman.com/building-slack-bot-with-twitch-api-and-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Paylocity integrates custom webhooks with CI/CD tools"
    url: "https://www.postman.com/case-studies/paylocity/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman Loves Slack"
    url:  "https://www.postman.com/postman/workspace/4be86d9c-6576-4369-b74f-43991df7a4bd"
---

Postman's custom webhook integration enables you to automate workflows between your favorite apps and services to get notifications, synchronize files, collect data, and more. It offers services with predefined workflows that you can implement.

You can configure a custom webhook with Postman to send events such as monitor results or team and collection-specific activity feeds, or to back up your Postman Collections.

## Contents

* [Enable static IP support](#enable-static-ip-support)
* [Configure custom webhooks](#configure-custom-webhooks)
* [Send updates for a Postman Collection to a custom webhook](#send-updates-for-a-postman-collection-to-a-custom-webhook)
* [Send monitor results to custom webhooks](#send-monitor-results-to-custom-webhooks)
* [Send a team activity feed to custom webhooks](#send-a-team-activity-feed-to-custom-webhooks)

## Enable static IP support

If your network is behind a firewall, you will need to use a static IP address to enable collection backups to custom webhooks on custom domains.

Contact your IT team to allowlist the following static IP in your firewall to enable collection backups to webhooks:

* US East: `3.212.102.200`

Once you allowlist this IP address, calls for the custom webhook will be able to connect to your network and enable the webhook to work as expected.

## Configure custom webhooks

1. On the [Integrations](https://go.postman.co/integrations/browse) page, search and select Webhooks from the list of integrations.

   ![Custom webhook](https://assets.postman.com/postman-docs/v10/custom-webhooks-v10-2.jpg)

   The integration's page has choices for each type of custom webhook. If available, you can view previously configured integrations for the selected integration.

   ![Webhooks integration choices](https://assets.postman.com/postman-docs/webhook-integrations.jpg)

1. Select **Add Integration** next to a webhook type to configure your integration. Perform the steps in the related section below for the webhook type you are adding.

Once the integration has been created, you can view the integration you created in addition to the other active integrations created by your team:

![Configured integrations](https://assets.postman.com/postman-docs/view-webhooks-all.jpg)

### Send updates for a Postman Collection to a custom webhook

1. In the **Webhooks Integrations** page, next to **Backup a collection**, select **Add Integration**.
1. In the **Add integration** page:
   * Enter a **Nickname** for the integration.
   * Under **Choose workspace**, select the workspace your collection belongs to.
   * Under **Choose Collection**, select the collection you wish to send updates for.
   * Enter the webhook URL your webhook payload will be sent to.
1. Select **Add Integration**.

Postman often checks your collection for changes. If Postman identifies changes when it checks your collection, the changes automatically send to your custom webhook.

### Example collection backup schema

The following is a schema for the **Backup a collection** webhook:

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

## Send monitor results to custom webhooks

Postman Monitors enable you to run your collections on a schedule without any manual intervention. By using custom webhooks you can use those results by connecting to other available services.

1. In the **Webhooks Integrations** page, next to **Post monitoring results**, select **Add Integration**.
1. In the **Add integration** page:
   * Enter a **Nickname** for the integration.
   * Select the workspace containing the monitor you want to send to a custom webhook.
   * Select the monitor you want to send.
   * Enter the webhook URL your webhook payload will be sent to.
   * Select **Notify for all completed monitor runs** or **Notify for 3 failures and then first success**.
1. Select **Add Integration**.

Whenever your monitor runs, the results are posted to your webhook.

### Example monitor result schema

The following is a schema for the **Post monitoring results** webhook:

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

## Send a team activity feed to custom webhooks

The activity feed is where you can track changes made to your collections and within your team.

1. In the **Webhooks Integrations** page, next to **Post team activity**, select **Add Integration**.
1. In the **Add integration** page:
   * Enter a **Nickname** for the integration.
   * Enter the webhook URL to send team updates to this specific URL.
1. Select **Add Integration**.

### Example team activity schema

The following is a schema for the **Post team activity** webhook:

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
