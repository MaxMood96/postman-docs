---
title: "Integrate Postman with Keen"
order: 171
updated: 2021-06-14
page_id: "keen"
warning: false
---

You can use Keen IO for API-based computation, Amazon S3 backups, and building visualizations and dashboards for your APIs. Connect your Postman Monitor results to Keen Streams with the Postman Keen integration.

Setting up a Keen integration requires a project ID and API key before configuring Postman Monitors to push to Keen streams. After you set up the integration, you can view all monitoring data in Keen IO.

## Retrieving your Keen IO project ID and API Key

1. Sign in to [Keen IO](https://keen.io/users/login/).
1. Select **Projects**.

    ![keen dashboard](https://assets.postman.com/postman-docs/keen-projects.jpg)

1. Find the organization and project for which you’d like to stream Postman Monitor data.
1. Select the **Access** tab in the dashboard.
1. Make a note of your project ID and API key to use later.

    ![keen dashboard](https://assets.postman.com/postman-docs/keen-write-key.jpg)

## Configuring Postman Monitors

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.
1. Search and select **Keen**.
1. Select **Add Integration**.
1. On the [**Add integration - Configure**](https://go.postman.co/integrations/service/keen_io/add/monitor_run_keen_io) page, enter your integration information to connect Keen IO to Postman Monitors.

    <img alt="Keen Add integration page" src="https://assets.postman.com/postman-docs/v10/keen-add-integration-configuration-v10.15.jpg" width="350px">

1. Select **Add Integration**. You can send the results of multiple monitors to the same Keen IO collection.

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a monitor by opening the monitor and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).

## Viewing data in Keen IO

Within minutes, data will start flowing into Keen IO if your Postman monitor is running. If you’ve sent the results of multiple monitors to Keen, you’ll be able to segment by monitor name or ID, collection name or ID, error code, and more.

Here’s a preview of analyses from the Postman Monitors integration. You can build visualizations into dashboards that your team or customers can view with [Keen dashboard templates](https://keen.io/docs/visualize/data-visualization-library/create-dashboard/).

![keen analytics](https://assets.postman.com/postman-docs/keen_dashboard2.jpg)
