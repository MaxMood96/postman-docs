---
title: "Trigger collection runs using webhooks"
order: 92
page_id: "collection_webhooks"
updated: 2023-05-31
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman Webhooks | Postman Level Up"
    url: "https://youtu.be/wdLvXKkXhLk"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Building a Slack Bot with the Twitch API and Postman"
    url:  "https://blog.postman.com/building-slack-bot-with-twitch-api-and-postman/"
warning: false
---

A webhook provides a way to automatically send data from one application to another. Using a webhook, you can trigger a collection run in Postman at a specific time or when an event occurs. You can also send a custom payload to the webhook, which can be accessed when the collection runs. This enables the collection to be run independently of any environment, instead relying on the data sent to the webhook.

## Creating a webhook

With a collection webhook, data is sent to the webhook URL using a POST request when certain events are triggered. (It's up to you to configure the application that sends the data and what the trigger events are.) The data sent to the webhook is accessible inside the collection in the [globals object](/docs/sending-requests/variables/variables/). Using [scripts](/docs/writing-scripts/intro-to-scripts/), you can parse that data and use it during the collection run in any way possible.

Webhooks for a collection must be created using the [Postman API](/docs/developer/postman-api/intro-api/). To create a webhook, refer to the [documentation for **api.getpostman.com/webhooks**](https://documenter.getpostman.com/view/12959542/UV5XjJV8#8bec7537-cc5d-4ed7-a995-c7753e55ed28).

### Accessing the request body in scripts

The request body of the webhook is available inside the `globals.previousRequest` object. To use it, first parse the `globals.previousRequest` object. The data sent to the webhook is available in the `data` parameter inside the parsed object, as shown in this code snippet.

```js
var previousRequest = JSON.parse(globals.previousRequest),
    webhookRequestData = previousRequest.data;

// webhookRequestData contains the data sent to your webhook.
console.log(JSON.stringify(webhookRequestData));
```

> The request body sent to the webhook must use JSON format.

### Sending output to another API

The data that's sent to the collection webhook can be used to define logic and trigger another API. For example, you might set up a webhook for your GitHub repository. Based on the updates happening in your repository, you can use the webhook to run custom build pipelines or perform CI tests.
