---
title: "Integrate Postman with Microsoft Teams"
updated: 2022-07-19
---

Microsoft Teams is a chat-based workspace available to all Microsoft Office 365 users. This integration enables you to get updates about your Postman team directly in Microsoft Teams.

To configure a Microsoft Teams integration, you will need to first create a Microsoft Teams webhook URL.

## Contents

* [Create a Microsoft Teams webhook URL](#create-a-microsoft-teams-webhook-url)
* [Configuring Microsoft Teams](#configuring-microsoft-teams)
    * [Send monitor run results in Microsoft Teams](#send-monitor-run-results-in-microsoft-teams)
    * [Add a team activity feed to Microsoft Teams](#add-a-team-activity-feed-to-microsoft-teams)

## Create a Microsoft Teams webhook URL

> Note that Microsoft Teams requires certain permissions to [add a connector to a channel](https://docs.microsoft.com/en-us/microsoftteams/office-365-custom-connectors).

1. Sign in to your Microsoft Teams account. Create a new channel, or go to an already existing channel, where you want to set up this integration.

    ![select channel](https://assets.postman.com/postman-docs/microsoft-teams-channel.jpg)

1. Select **More options ...** next to the channel name and select **Connectors** from the dropdown list.

1. Select the **Incoming Webhook** connector from the list of available connectors.

1. Enter a name to identify this webhook later. You can also add an image that appears whenever this webhook posts a message. Select **Create**.

    ![enter a name](https://assets.postman.com/postman-docs/microsoft-teams-webhook-name.jpg)

    This generates a webhook URL you can use to post messages to this channel. Copy this webhook and save it for later.

    ![generate webhook URL](https://assets.postman.com/postman-docs/microsoft-teams-webhook-url.jpg)

## Configuring Microsoft Teams

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.

    <img alt="Home page and integrations" src="https://assets.postman.com/postman-docs/v10/home-integrations-v10-2.jpg" width="390px">

1. Select **[Browse All Integrations](https://go.postman.co/integrations/browse?category=all)**.

1. Search and select **Microsoft Teams**.

1. There are two available Microsoft Teams integrations:

    * [Post monitoring results](#send-monitor-run-results-in-microsoft-teams) - Send the results from a monitor run to a specified Microsoft Teams channel.
    * [Post team activity](#add-a-team-activity-feed-to-microsoft-teams) - Send your team's [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#accessing-the-activity-feed-from-postman) to a specified Microsoft Teams channel.

        ![Add Microsoft Teams integration](https://assets.postman.com/postman-docs/v10/microsoft-teams-add-integration-v10.jpg)

### Send monitor run results in Microsoft Teams

Monitor run messages summarize the basic details of the run, and whether the run succeeded or failed. Also, it provides direct links to that run and the documentation for the collection.

1. Enter the following in the **Add Integration** window:

    * **Nickname** - A nickname for the integration.
    * **Workspace** - The workspace that has your monitor.
    * **Monitor** - The collection-based monitor which will send its results to Microsoft Teams.
    * **Notification URL** - Your notification URL.
    * **Monitor runs notifications** - Select whether you want notifications for all completed monitor runs, or notifications for three monitor run failures and then the first successful monitor run.

1. Select **Add Integration**.

### Add a team activity feed to Microsoft Teams

Team Activity messages display updates, who made a change, and what it was.

1. Enter the following in the **Add Integration** window:

    * **Nickname** - A nickname for the integration.
    * **Notification URL** - Your [incoming webhook URL](#create-a-microsoft-teams-webhook-url) where your team's updates are sent.

1. Select **Add Integration**.

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a monitor by opening the monitor and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).
