---
title: "Monitor health and performance of your APIs in Postman"
updated: 2024-01-16
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Monitoring | The Exploratory"
    url: "https://youtu.be/tDQzY1Hn2LY"
  - type: link
    name: "API Lifecycle, Part 2: Monitor and Deploy an API | Postman Intergalactic"
    url: "https://youtu.be/voAUfBx8fnE"
  - type: link
    name: "Deploying APIs | Postman Enterprise"
    url: "https://youtu.be/plykCPwt32M"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Integrated API Monitoring in Postman"
    url: "https://blog.postman.com/integrated-api-monitoring-in-postman/"
  - type: link
    name: "Shifting Left with Postman"
    url: "https://blog.postman.com/shifting-left-with-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Hathway uses monitors to identify issues with integrations"
    url: "https://www.postman.com/case-studies/hathway/"
  - type: link
    name: "PayPal uses monitors"
    url: "https://www.postman.com/case-studies/paypal/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman API Monitoring Examples"
    url:  "https://www.postman.com/postman/workspace/e348c5a0-2965-44cc-87ed-7b316516f38d"
---

*Postman Monitors* enable you to [continuously check the health and performance of your APIs](https://www.postman.com/api-platform/api-observability/). You can create collection-based monitors that run requests in selected collections. Requests can run API test scripts, chain together multiple requests, and more. You can also schedule how often Postman runs monitored collections.

You’ll be alerted to any test failures once the monitor is running, so you can identify and address issues before your API’s consumers are affected.

## Contents

* [Use collection-based monitors](#use-collection-based-monitors)
* [Monitor use cases](#monitor-use-cases)
* [Monitor FAQs](#monitor-faqs)

## Use collection-based monitors

You can [set up collection-based monitors](/docs/monitoring-your-api/setting-up-monitor/), enabling you to run a series of requests from the Postman cloud based on a schedule. When creating a monitor, you choose a [collection](/docs/sending-requests/create-requests/intro-to-collections/) with the requests you want to run. You can learn more about [use cases for collection-based monitors](#monitor-use-cases).

Depending on your [plan](https://www.postman.com/pricing), you can [configure monitors to run from static IPs](/docs/monitoring-your-api/using-static-IPs-to-monitor/). This enables you to monitor APIs that are behind a restricted firewall.

You can [view results for collection-based monitors](/docs/monitoring-your-api/viewing-monitor-results/) to learn more about the monitors you're running. You can also [manage your team's monitor usage](/docs/monitoring-your-api/monitor-usage/), enabling you to track your team's resource usage and purchase more blocks of monitoring calls.

> If you experience a problem with collection-based monitors, you can [troubleshoot monitors in Postman](/docs/monitoring-your-api/troubleshooting-monitors/).

## Monitor use cases

Collection-based monitors run Postman requests and scripts, enabling you to [monitor APIs](https://www.postman.com/api-platform/api-monitoring/) in a variety of ways. The following are examples of what you can check with collection-based monitors:

* **Check API health and performance** - Ensure the API is up and running in production and other environments.
* **Validate API response structure and data** - Ensure the API is functioning according to specifications.
* **Test complex, multi-step workflows** - Ensure that critical API flows and edge cases are working as expected.
* **Run tests in multiple environments and regions** - Ensure your APIs are working everywhere. (Running monitors in multiple regions requires a paid Postman plan.)
* **Monitor the security of your endpoints** - Continuously test APIs for known security vulnerabilities.
* **Visualize results on the monitor dashboard** - Get better visibility into API performance over time and identify trends.

> For more examples of monitors in action, visit the [Postman API Monitoring Examples public workspace](https://www.postman.com/postman/workspace/postman-api-monitoring-examples/overview) to find example collections for some common monitoring use cases. You can collaborate on the collections in the workspace by [creating a fork](/docs/collaborating-in-postman/using-version-control/forking-elements/#create-a-fork), or customize the collections for your team's use by [exporting and importing them into your team workspace](/docs/getting-started/importing-and-exporting/exporting-data/#exporting-collections).

## Monitor FAQs

To learn more about configuring monitors in Postman, see the [Monitor FAQs](/docs/monitoring-your-api/faqs-monitors/).
