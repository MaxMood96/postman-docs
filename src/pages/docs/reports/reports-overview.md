---
title: "View reports on usage, security, and billing in Postman"
updated: 2023-06-15
warning: false
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing New Postman Reports for Enterprises"
    url: "https://blog.postman.com/introducing-new-postman-reports-for-enterprises/"
---

Postman generates reports that enable you to visualize data for how your team uses Postman. These reports give you insights into the state of your APIs, including tests, documentation, and monitoring coverage. They also enable you to track performance and SLA adherence.

Access your reports in your [Postman reports dashboard](https://go.postman.co/reports/overview).

<img alt="The Postman reports dashboard" src="https://assets.postman.com/postman-docs/v10/dashboard-reports-overview-v10-21.jpg"/>

* [Getting started with reports](#getting-started-with-reports)
    * [Report availability](#report-availability)
    * [Report permissions](#report-permissions)
* [Exploring reports and report data](#exploring-reports-and-report-data)
* [Troubleshooting](#troubleshooting)

## Getting started with reports

> [__Reports are available on all Postman Enterprise plans. The Public workspace metrics report is available on all Postman plans.__](https://www.postman.com/pricing)

Reports give information about various aspects of your team and plan, including [member](/docs/reports/members-overview-reports/) and [content](/docs/reports/content-activity-reports/) activity, [API security](/docs/reports/api-security-reports/), and [billing and overage](/docs/reports/billing-overview-reports/) information.

To view your reports dashboard:

* Select **Home** in the Postman header, then select **Reports** from the team information section on the left.

To access a specific API's report, do the following:

1. On the report dashboard, select **Content activity > View report by API**.
1. Search for the API name, or scroll through the list to find it.

    > You can also access the report for a specific API by going to the [API's overview page](/docs/designing-and-developing-your-api/the-api-workflow/#navigating-the-api-builder) and select **Reports**.

### Report availability

Postman generates reports periodically but not in real time. You might experience a delay of four to six hours before report data is available. Postman displays the last update time at the bottom of the report dashboard sidebar.

### Report permissions

In a given report, you can only access report data that's available to you based on the level of access you have for the relevant collection, API, element, mock server, or monitor. For more information about element-based roles, see [Defining roles](/docs/collaborating-in-postman/roles-and-permissions/#element-based-roles).

If you don't have permission to access an element, aggregate visualizations will still display the correct number of elements but won't provide you with the element name or other relevant information for the specific element.

![Report message that restricted data is hidden](https://assets.postman.com/postman-docs/reports-restricted-data-v9.jpg)

## Exploring reports and report data

To explore reports:

* Select items in the report dashboard sidebar.

    > Some report items have a link that opens another related report. For example, on the **Uptime** chart in the **Summary** report, there is a link to open the **Team APIs** report.

To explore data in a report:

* Hover over a data point to show the data point's value.

    <img src="https://assets.postman.com/postman-docs/reports-datapoint-hover.jpg" alt="reports data point" width="100px" />

* Select a data point to drill down and view more details. Sort the table by selecting a column heading. Hover over a table row and select the arrow to go to a related report or element.

    <img src="https://assets.postman.com/postman-docs/reports-drilldown.jpg" alt="reports drill down" />

## Troubleshooting

Reports have the following limitations:

* You can't download or export your reports.
* Postman reports only track data sent through the request builder, and not data sent through [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/), [collection runs](/docs/collections/running-collections/intro-to-collection-runs/), or [monitors](/docs/monitoring-your-api/intro-monitors/). However, failed test runs do generate reports using collection runs.
* You can't view the details of elements you don't have access to.

If there isn't any data in your reports, or your data is incomplete (for example, you have empty response times or sizes) this may be due to one of the following reasons:

* The data hasn't refreshed yet. Check after four to six hours.
* You might not have linked a collection to your API.
* You might not have sent a request. Or you might have executed requests from [monitoring](/docs/monitoring-your-api/intro-monitors/), [collection runs](/docs/collections/running-collections/intro-to-collection-runs/), or [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/), but not from the request builder in Postman.
* Postman isn't syncing. Check your network connection and visit the [Postman Status Page](https://status.postman.com) to learn whether there's an outage.
