---
title: "Integrate Postman with Splunk"
updated: 2023-04-12
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Integrate with Splunk in Postman"
    url: "https://youtu.be/0PH2Pv3QwMI"

---

Splunk is a monitoring service for cloud-scale applications. It combines data from servers, databases, tools, and services to present a unified view of an entire stack. This integration allows you to configure your Postman Monitors to send metrics to Splunk where you can visualize and compare them with other metrics.

To set up a Splunk integration, you must get an HTTP Event Collector (HEC) token from Splunk and configure your monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

## Contents

* [Retrieving your Splunk HEC token](#retrieving-your-splunk-hec-token)
* [Configuring Postman Splunk integration](#configuring-postman-splunk-integration)
* [Viewing data in Splunk](#viewing-data-in-splunk)
    * [Viewing data in a list](#viewing-data-in-a-list)
    * [Viewing data as a Pivot table](#viewing-data-as-a-pivot-table)

## Retrieving your Splunk HEC token

1. Sign in to your [Splunk](https://login.splunk.com) account.
1. Follow [Splunk's instructions](https://docs.splunk.com/Documentation/Splunk/8.1.0/Metrics/GetMetricsInOther#Get_metrics_in_from_clients_over_HTTP_or_HTTPS) to create an HEC token.
1. Save the HEC token to use later.

![save splunk HEC token](https://assets.postman.com/postman-docs/splunk-http-event-collection-token-created.jpg)

## Configuring Postman Splunk integration

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.

    <img alt="Home page and integrations" src="https://assets.postman.com/postman-docs/v10/home-integrations-v10.jpg" width="390px">

1. Select **[Browse All Integrations](https://go.postman.co/integrations/browse?category=all)**.
1. Search and select **Splunk**.
1. Select **Add Integration**.

    ![Add Splunk integration](https://assets.postman.com/postman-docs/v10/splunk-select-integration-v10.jpg)

1. Enter the following in the **Add Integration** window:

    * **Nickname** - A nickname for your integration.
    * **Workspace** - The workspace that has your monitor.
    * **Monitor** - The collection-based monitor which will send its results to Splunk.
    * **Splunk HEC Token** - Enter the Splunk HEC token.
    * **Splunk HEC URL** - Enter the Splunk URL that hosts the HEC token in the format `<protocol>://<host>` (for example, `https://192.0.2.255`). To learn more, see [Splunk's documentation](https://docs.splunk.com/Documentation/Splunk/8.2.2/Data/UsetheHTTPEventCollector#Send_data_to_HTTP_Event_Collector_on_Splunk_Cloud_Platform).
    * **Splunk port** - Enter the Splunk port number.

1. Select **Add Integration** to save the configuration.

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a monitor by opening the monitor and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).

## Viewing data in Splunk

When your monitor runs, the data starts flowing into Splunk.

### Viewing data in a list

1. Sign in to your [Splunk](https://login.splunk.com) account, and open the homepage.

1. From the navigation menu, select **Apps &gt; Search & Reporting**. Then select the **Search** tab.

1. Select the **Events** tab, and enter a **metric** to search for.

1. Select a metric from the results to view details about it.

To learn more about viewing data in Splunk, see [Splunk's documentation](https://docs.splunk.com/Documentation/Splunk/9.0.4/SearchTutorial/Startsearching#Understanding_search_results).

![splunk metrics search](https://assets.postman.com/postman-docs/splunk-search-events-metric-example3.jpg)

![splunk metric details](https://assets.postman.com/postman-docs/splunk-search-events-metric-example2.jpg)

### Viewing data as a Pivot table

1. Sign in to your [Splunk](https://login.splunk.com) account, and open the homepage.

1. From the navigation menu, select **Apps &gt; Search & Reporting**. Then select the **Search** tab.

1. Select the **Visualization** tab, and enter a **metric** to search for.

1. Select **Pivot**.

1. Select the metrics and filters you need to visualize on the table.

To learn more about viewing data in Splunk, see [Splunk's documentation](https://docs.splunk.com/Documentation/Splunk/9.0.4/SearchTutorial/Startsearching#Understanding_search_results).

![splunk pivot table](https://assets.postman.com/postman-docs/splunk-search-event-pivot-example.jpg)

Once the data is present in Splunk, you can filter it based on the monitor name/uid, collection name/uid, user name/id, and environment name/uid (if present).
