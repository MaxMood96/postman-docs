---
title: "Build a Slack bot using Postman Flows"
updated: 2023-08-07
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Using Webhooks to Run on the Cloud | Postman Flows"
    url: "https://youtu.be/MHSqhoxX2ME"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

This tutorial shows you how to create a Slack bot in Postman Flows. The bot will enable you to use Slack commands to get stock quotes.

## Prerequisites

* A free [Slack](https://slack.com/) account.
* Understand how webhooks work in Flows from the [automatic runs overview](/docs/postman-flows/concepts/automatic-runs/).

## Contents

* [Connect a Flow to a Slack app](#connect-a-flow-to-a-slack-app)
* [Building your own Slack app with Postman Flows](#building-your-own-slack-app-with-postman-flows)

## Connect a Flow to a Slack app

Create a new app in Slack [here](https://api.slack.com/apps), give it a name, and then create a slash command which will enable you to interact with it. When making the slash command, for the request URL use `https://770fc74bbe7045dcaa56a7261b08c869.flow.pstmn.io` which is an already deployed Flow which can be found [here](https://www.postman.com/postman/workspace/utility-flows/flow/642376220544c000387685c5).

<img src="https://assets.postman.com/postman-labs-docs/cloud-execution/make-slack-app-with-command.gif" alt="Create Slack app" fetchpriority="low" loading="lazy" />

Next, enable webhooks so you can send messages to the Slack app from Postman Flows (you'll need to reinstall the app after you do this, as shown in the GIF). Select a channel from Slack that you'll want to interact with it in from the dropdown list.

<img src="https://assets.postman.com/postman-labs-docs/cloud-execution/slack-app-enable-webhooks.gif" alt="Enable Slack webhooks" fetchpriority="low" loading="lazy" />

For the final step, run the command you created in the first step in the Slack channel you installed it to and view your recipe!

<img src="https://assets.postman.com/postman-labs-docs/cloud-execution/run-slack-command.gif" alt="Enable Slack webhooks" fetchpriority="low" loading="lazy" />

## Building your own Slack app with Postman Flows

> **Prerequisites**
>
> 1. Sign up for a free [Slack](https://slack.com/) account.
> 2. Sign up for a free [polygon.io](https://polygon.io/) account and get your API key.

To make your own Slack app from scratch with Postman Flows, follow the same steps as [Connect a Flow to a Slack app](#connect-a-flow-to-a-slack-app). This time, name the app **Stock App**, make the **stock-quote** command, and use the URL of the new Flow you're going to make.

<img src="https://assets.postman.com/postman-docs/v10/new-slack-request-url-v10-2.gif" alt="New Slack command" fetchpriority="low" loading="lazy" />

Next, fork (which means copy in this case) the collection found [here](https://www.postman.com/postman/workspace/slack-integration-flows/collection/23919558-0fc87fc5-de53-4c48-b30f-362a1a7ceba3?action=share&creator=23919558) and the environment found [here](https://www.postman.com/postman/workspace/slack-integration-flows/environment/23919558-144c823d-9dcf-42ff-b85b-66e8e1d41e2a). These contain the saved requests and variables you're going to use in this Flow.

<img src="https://assets.postman.com/postman-docs/v10/flows-fork-collection-v10-20.gif" alt="Fork collection" fetchpriority="low" loading="lazy" />

In the environment you forked, paste your Polygon.io API key where it says **YOUR_API_KEY_HERE**. You're ready to start building the Flow.

To start the Flow, create two **Evaluate** blocks, then paste the following functions:

* `$match(slack_text,'(?<=text=)[^&]+')[0]`
* `$replace($match(slack_text,'(?<=commands%2F)[^&]+')[0],"%2F","/")`

The first function gets the text after the **stock-quote** slash command from the webhook Slack sends. The second function gets the destination in Slack your Flow will send the reply to.

<img src="https://assets.postman.com/postman-docs/v10/make-evaluate-blocks-v10-2.gif" alt="Create Evaluate blocks" fetchpriority="low" loading="lazy" />

Next, copy the text after the **stock-quote** command that you have in the **Evaluate** block (which is the stock ticker). Call the Polygon.io API to get the quote.

Create a **Send Request** block and select **Get stock quote** from the collection that you forked. Select the **Slack Stock Bot** environment you also forked and connect the **Evaluate** block to the ticker variable (this is how information like the ticker is passed from the **Evaluate** block into the **Send Request** block).

<img src="https://assets.postman.com/postman-docs/v10/make-send-request-block-v10-2.gif" alt="Create Send Request block" fetchpriority="low" loading="lazy" />

The final step is to send all this information back to the Slack app.

Because Slack requires the sent text to be in JSON format, create a **Record** block, name the key **text**, and add a **Select** block. You can either use the dropdown list to select or enter ```body.results.0.c```, which is how Polygon.io stores their stock quotes.

Next, create a new **Send Request** block. Drag the output of the **Record** block to the **message_to_slack** variable, which is what we're going to send to the app. Next, drag a connection from the second **Evaluate** block (which holds the destination in Slack to reply to) to the **slack_hook_url** input of the **Send Request** block.

<img src="https://assets.postman.com/postman-docs/v10/sending-to-slack-v10-2.gif" alt="Send to Slack" fetchpriority="low" loading="lazy" />

All that's left is to select the **Deploy** button and try it out in Slack!

<img src="https://assets.postman.com/postman-labs-docs/cloud-execution/see-result-in-slack.gif" alt="See the result" fetchpriority="low" loading="lazy" />
