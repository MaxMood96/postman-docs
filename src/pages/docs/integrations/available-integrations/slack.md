---
title: "Integrate Postman with Slack"
updated: 2023-10-25
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Integrate with Slack in Postman"
    url: "https://youtu.be/Bh5PTqe0yIo"
  - type: link
    name: "How to Integrate with Slack Notifications | Postman"
    url: "https://youtu.be/v6eDhXWDJKE"
  - type: dynamic_blog
    name: "Blog posts"
    blog_tag: "slack"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman Loves Slack"
    url:  "https://www.postman.com/postman/workspace/4be86d9c-6576-4369-b74f-43991df7a4bd"
---

The Postman to Slack integration enables you to send Postman notifications to a Slack channel. You can send the results of a Postman monitor run, notifications received in the Postman notification center, or activity in your team activity feed.

## Contents

* [Configure Postman with Slack](#configure-postman-with-slack)
* [Post monitoring results](#post-monitoring-results)
* [Receive Postman notifications](#receive-postman-notifications)
* [Post team activity](#post-team-activity)

## Configure Postman with Slack

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**.
1. Search for and select **[Slack](https://go.postman.co/integrations/service/slack)**.
1. There are three available Slack integrations. Select **Add Integration** next to the integration you want to add:

    * **[Post monitoring results](#post-monitoring-results)** - Send the results from a monitor run to a specified Slack channel.

    * **[Receive Postman notifications](#receive-postman-notifications)** - Send notifications received in the Postman notification center to a specified Slack channel.

    * **[Post team activity](#post-team-activity)** - Send your team's [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#accessing-the-activity-feed-from-postman) to a specified Slack channel.

        ![Select Slack integration](https://assets.postman.com/postman-docs/v10/slack-select-integration-v10-14.jpg)

1. After you select the integration type, a browser tab opens asking you to sign in to Slack. If you aren't signed in to a Slack workspace, enter your workspace URL and sign in with your email and password or SSO. If you're already signed in to a Slack workspace, select **Continue**.

    > If someone on your team created an [installed app](/docs/integrations/installed-apps/) for Slack, a message and green checkmark let you know you're already authenticated with your Slack workspace. You don't need to sign in or review permissions. If you want to connect to a different Slack workspace, select the link.

1. On the **Permission request** page:

    * Postman will request permission from Slack to view content and information about you, and to perform actions in Slack.
    * For the **Post team activity** integration, select the Slack channel where the integration will post its messages. Note that you can't change this channel after you set it up. If you need to change channels later, delete the integration and create a new one.

1. Select **Allow**.

    <img src="https://assets.postman.com/postman-docs/slack-post-monitoring-results-permission-v9.jpg" alt="configure Slack" width="400px"/>

1. Return to Postman, and complete the steps in the relevant section below for your integration type.

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a monitor by opening the monitor and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).

## Post monitoring results

> This integration works with collection-based monitors. Before you begin, make sure you've [created at least one collection-based monitor](/docs/monitoring-your-api/setting-up-monitor/).

1. Enter the following on the **Add integration** window:

    * **Nickname** - A nickname for your integration.
    * **Workspace** - The workspace that contains your monitor.
    * **Monitor** - The collection-based monitor which will send its results to Slack.
    * **Channel name** - The channel where the integration will post. This field will be pre-filled from the authorization process.
    * **Configure when monitor runs must be notified** - Specify if you want notifications for all completed monitor runs, or notifications for three failed monitor runs and then the first successful monitor run.
    * **Add Slack for your team** - Check this box to enable members of your team to access channels from your organization’s Slack workspace within Postman.

1. Select **Add Integration**.

The following is an example of a set of monitor results when sent to Slack:

![configured_slack_example](https://assets.postman.com/postman-docs/slack-post-monitoring-results-example-v9.jpg)

## Receive Postman notifications

For the **Receive Postman notifications** integration, after allowing Slack permissions, your integration will be configured.

After adding the integration, you can specify which notifications are sent to Slack. Update your [notification preferences](https://go.postman.co/settings/me/notifications) by selecting your avatar in the upper-right corner > **Settings > Notifications**.

<img alt="Update notification preferences" src="https://assets.postman.com/postman-docs/v10/notification-preferences-v10.jpg">

In the Slack column, you can opt in to or out of notifications such as security, usage, monitors, and comments. Select or clear the checkboxes next to each item. Select **Update Preferences** to save changes.

> You can't receive notifications in Slack when team members modify pull requests. You can receive notifications in Slack when you're mentioned in pull request comments. Select **I’m mentioned in a comment** in the **On Slack** column. To learn more about adding comments to pull requests, see [Adding comments](/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/#adding-comments).

## Post team activity

For the **Post team activity** integration, after allowing Slack permissions, your integration will be configured. Your team's [activity feed](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#accessing-the-activity-feed-from-postman) will send updates to the specified channel.

[![configured_slack](https://assets.postman.com/postman-docs/slack-activity-feed.jpg)](https://assets.postman.com/postman-docs/slack-activity-feed.jpg)
