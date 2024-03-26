---
title: "Integrate Postman with BigPanda"
order: 164
updated: 2022-10-13
page_id: "bigpanda"
warning: false
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Integrate with BigPanda in Postman"
    url: "https://youtu.be/-d8l_iiY4L4"

---

BigPanda is an IT systems management platform that aggregates and correlates IT alerts to create high-level IT incidents. It directs all alerts to a single place with different connected services.

Setting up a BigPanda integration requires you to get an API key and configure Postman Monitors.

After you set up the integration, you can view real-time alerts based on the results of your monitors.

## Contents

* [Retrieving the BigPanda API key](#retrieving-the-bigpanda-api-key)
* [Configuring Postman Monitors](#configuring-postman-monitors)

## Retrieving the BigPanda API key

1. Sign in to your [BigPanda](https://www.bigpanda.io/) account and select **Integrations** in the header toolbar, then select **New Integration**.

1. Select **Alerts REST API** and then select **Integrate**.

   ![alerts REST API](https://assets.postman.com/postman-docs/58834897.jpg)

1. To generate the app key, enter a name for the integration and select **Generate App Key**.

   ![generate app key](https://assets.postman.com/postman-docs/bigPanda-generate-app-key-v9-24-c.jpg)

1. Save the generated app key and the API key to use later.

## Configuring Postman Monitors

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.

    <img alt="Home page and integrations" src="https://assets.postman.com/postman-docs/v10/home-integrations-v10.jpg" width="390px">

1. Select **[Browse All Integrations](https://go.postman.co/integrations/browse?category=all)**.
1. Search and select **BigPanda**.
1. Select **Add Integration**.

    ![add bigpanda configuration](https://assets.postman.com/postman-docs/bigpanda-add-integration.jpg)
1. Enter the following in the **Add Integration** window:
    * **Nickname** -   A nickname for your integration.
    * **Workspace** -  The workspace that contains your monitor.
    * **Monitor** -   The collection-based monitor which will send its results to BigPanda.
    * **App Key** -  Enter the BigPanda app key.
    * **API Token** -  Enter BigPanda API token.

1. Select **Add Integration** to save the integration.

BigPanda gives you real-time alerts based on the results of your monitors. If a test fails or if there's an error during the run, BigPanda will alert you.

![view in bigpanda](https://assets.postman.com/postman-docs/bigPanda-monitors-2.jpg)

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a monitor by opening the monitor and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).
