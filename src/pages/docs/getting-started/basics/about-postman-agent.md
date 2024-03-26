---
title: "About the Postman Agent"
updated: 2022-12-06
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Agent for the Postman Web Client | Postman Level Up"
    url:  "https://www.youtube.com/watch?v=6xlJUx2ZMy4&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=3"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing the Postman Agent: Send API Requests from Your Browser without Limits"
    url: "https://blog.postman.com/introducing-the-postman-agent-send-api-requests-from-your-browser-without-limits/"
---

The Postman Agent enables you to send API requests from your browser when using the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app). Using the Postman Agent is required due to the cross-origin resource sharing (CORS) limitations of browsers.

For the best experience, [install the Postman desktop app](/docs/getting-started/installation/installation-and-updates/). You can then use the [Postman Desktop Agent](#the-postman-desktop-agent) to send requests from your browser without any limitations.

Alternately, you can use the [Postman Cloud Agent](#the-postman-cloud-agent) or the [Postman Browser Agent](#the-postman-browser-agent) to send requests from your browser. The Postman web app can [automatically select](#selecting-a-postman-agent-for-requests) the best agent for your requests. You can also [manually select](#selecting-a-postman-agent-for-requests) an agent for your requests.

## Contents

* [The Postman Agents](#the-postman-agents)
* [Selecting a Postman Agent for requests](#selecting-a-postman-agent-for-requests)

## The Postman Agents

Postman has three different agents you can use to send your API requests.

### The Postman Desktop Agent

The Postman Desktop Agent is a micro-application that runs locally on your desktop. It enables you to bypass the limitations that exist in the browser by allowing API requests to originate in the browser, but be routed through your local machine and network. The Desktop Agent overcomes the cross-origin resource sharing (CORS) limitations of browsers and acts as your agent for making API requests from the Postman web app.

In the [agent selector](#selecting-a-postman-agent-for-requests), you will be prompted to download and install the Desktop Agent so you can make requests from the Postman web app. Select **Download desktop agent** to download the Desktop Agent. You can also download the agent directly from [the Postman Agent page](https://www.postman.com/downloads/postman-agent/). Once you have the Desktop Agent installed, open it and then you will be able to use it with web requests.

> The Postman Desktop Agent doesn't support Safari web browser. You must use a different web browser or agent.

### The Postman Cloud Agent

The Postman Cloud Agent enables you to bypass the limitations that exist in the browser by routing requests through Postman's cloud servers. The Cloud Agent overcomes the CORS limitations of browsers and acts as your agent for making API requests from the Postman web app.

Your team can make a set number of requests using the Cloud Agent each month. Your [team's usage limits](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/#team-usage-limits) are based on your [plan type](https://www.postman.com/pricing/). To view your team's usage of the Postman Cloud Agent, see [Managing resources](/docs/billing/billing/#managing-resources).

> To learn more about the resources included with your Postman plan and what happens when you reach your usage limits, go to [About resource usage](/docs/billing/resource-usage/).

### The Postman Browser Agent

The Postman Browser Agent sends API requests using your browser, with some [limitations](/docs/getting-started/installation/installation-and-updates/#web-limitations). You might experience the CORS limitations of browsers when using the Browser Agent.

## Selecting a Postman Agent for requests

1. Select **Auto-select agent**, **Cloud Agent**, **Desktop Agent**, or **Browser Agent** from the Postman footer.
1. Select the agent you would like to use for your requests:

    * Select the **Auto-select** toggle for Postman to automatically select the best agent for your requests. If the **Auto-select** toggle is selected, Postman selects agents in the following order: Desktop, Cloud, and Browser.

        > You must download, install, and then open the [Desktop Agent](#the-postman-desktop-agent) for Postman to automatically select it.

    * You can also manually select the Postman Agent to use for your requests:

        * **Cloud Agent** - Send HTTP requests using Postman's cloud servers.
        * **Desktop Agent** - Send requests using the Postman Desktop Agent.
        * **Browser Agent** - Send requests using your browser, with some [limitations](/docs/getting-started/installation/installation-and-updates/#web-limitations).

    <img alt="Select agent" src="https://assets.postman.com/postman-docs/v10/select-agent-for-requests-v10.gif">

> If you send a request and it isn't successful because the best agent isn't selected, you can use the provided link in the response area to switch to the recommended agent and send your request again.
