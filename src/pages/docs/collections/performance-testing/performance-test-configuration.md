---
title: "Configure and run performance tests in Postman"
updated: 2024-03-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Load Testing Your APIs"
    url: "https://youtu.be/a5hWE4hMOoY"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Test your API’s performance by simulating real-world traffic with Postman"
    url: "https://blog.postman.com/postman-api-performance-testing/"
---

You can use the _Collection Runner_ to test the performance of your API with the same requests and collections you use for [functional API tests](/docs/collections/running-collections/intro-to-collection-runs/). When you run a performance test, Postman uses the requests in the selected collection to simulate the activity of your API's users.

In the Collection Runner, you can set the duration of the test and the number of _virtual users_. Each virtual user runs the requests in the specified order in a repeating loop. All of the virtual users operate in parallel to simulate real-world load on your API. You can choose whether the number of virtual users is fixed for the duration of the test or ramps up and down during the test.

## Contents

* [Configure a performance test](#configure-a-performance-test)
* [Virtual users and system resources](#virtual-users-and-system-resources)
* [Rename a performance run](#rename-a-performance-run)
* [View past performance runs](#view-past-performance-runs)

## Configure a performance test

> **Use the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/) to configure and run performance tests.** You can't use the Postman web app for performance testing. During a performance test, all requests are sent from the host computer where you are running the Postman desktop app.

Before you configure a performance test, [create a collection](/docs/collections/using-collections/#creating-collections) or [add a folder](/docs/collections/using-collections/#adding-folders-to-a-collection) with the requests you want to use to simulate user activity. Each virtual user runs the selected requests in the specified order and repeats the sequence throughout the test. Multiple virtual users all operate in parallel to simulate real-world usage of your API.

To configure a performance test in the Postman desktop app, do the following:

1. Select **Collections** in the sidebar and select the collection or folder you want to use for performance testing.

    > You can also use a collection or folder that's linked to an API to run a performance test. Learn more about [adding a collection to an API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/#adding-a-collection).

1. On the **Overview** tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

    <img alt="Select Run from the collection overview" src="https://assets.postman.com/postman-docs/v10/collection-runner-button-v10-22.jpg" width="380px"/>

    > You can also select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Runner** from the Postman footer and drag a collection from **Collections** or **History** in the sidebar.

1. Select the **Performance** tab.
1. (Optional) Change the order the requests are run in by dragging a request to a new location. To skip a request, clear the checkbox next to its name.

    > Performance tests execute all of the requests selected in the Collection Runner in order, and each virtual user runs through the sequence of requests. This helps you test the performance of your API workflows. To test API calls in isolation, you can run performance tests on individual requests instead.

1. Enter the number of **Virtual users**. While the test is running, each virtual user runs the selected requests in the specified order in a repeating loop. A higher number of virtual users puts increased load on your API.

    > The maximum number of virtual users you can simulate depends on available system resources and the collection you're using. Learn more about [virtual users and system resources](#virtual-users-and-system-resources).

1. Enter the **Test duration** in minutes.
1. Select a **Load profile**.
    * **Fixed** - The maximum number of virtual users is used throughout the test.
    * **Ramp up** - Enter an **Initial load** and drag the handles to adjust the length of the ramp up period. During the ramp up period, the number of virtual users increases from the initial load to the maximum.
    * **Spike** - Enter a **Base load** and drag the handles to adjust the duration of the spike. During the spike, the number of virtual users increases from the base load to the maximum, then decreases back to the base load.
    * **Peak** - Enter a **Base load** and drag the handles to adjust the duration of the peak. During the peak, the number of virtual users increases from the base load to the maximum, holds steady, then decreases back to the base load.

1. (Optional) Select a **Data file** with custom values to use for each virtual user. The file must be in CSV or JSON format. Learn more about [using a data file to simulate virtual users](/docs/collections/performance-testing/performance-test-data-files/).
1. When you're ready to begin the performance test, select **Run**.

    * You can view real-time performance metrics while the test is running. Learn more about [viewing performance test metrics](/docs/collections/performance-testing/performance-test-metrics/).
    * After the test completes, you can view details for any errors that occurred during the performance test. Learn more about [debugging performance test errors](/docs/collections/performance-testing/performance-test-errors/).

<img alt="Configuring a performance test" src="https://assets.postman.com/postman-docs/v10/performance-test-configure-v10-22.jpg"/>

> Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of performance runs you can use each month. A message will display in the Collection Runner when you're approaching your usage limit. Learn more about [resource usage](/docs/billing/resource-usage/#performance-test-limit) in Postman.

## Virtual users and system resources

The number of virtual users a performance test can simulate depends on available system resources and the collection used for the test. Using pre-request or test scripts will reduce the number of virtual users that can be simulated. The maximum number of virtual users is determined by your [Postman plan](https://www.postman.com/pricing/).

Use the following guidelines to understand how many virtual users you can simulate:

* A host with 8 CPU cores and 16 GB RAM can simulate up to 250 virtual users
* A host with 16 CPU cores and 32 GB RAM can simulate up to 500 virtual users

Attempting to simulate a higher number of virtual users may cause inaccurate metrics and reduced throughput (requests per second). Try running a small test with 10 to 20 virtual users and observing system resource usage. You can use this information to estimate that maximum number of virtual users that can be simulated for your collection and host computer.

> If you have a problem with the performance testing feature, contact the [Postman support team](https://support.postman.com/hc/en-us). Make sure to attach your [Postman logs](https://support.postman.com/hc/en-us/articles/360025298633-How-to-get-logs-from-the-Postman-Desktop-app) in your support request.

## Rename a performance run

You can change the name of a performance run while it's in progress, or you can rename a past run. Rename a performance run to help you identify runs later, for example, when [comparing performance runs](/docs/collections/performance-testing/performance-test-metrics/#compare-two-performance-runs).

To rename a performance run, [start a new run](#configure-a-performance-test) or [open a past run](#view-past-performance-runs). Select the name of the performance run and enter a new name.

<img alt="Rename a performance run" src="https://assets.postman.com/postman-docs/v10/performance-test-rename-v10-24.jpg" width="600px"/>

## View past performance runs

You can view a list of past performance runs for a collection. Open the collection, select the **Runs** tab, and then select the **Performance runs** tab.

You can view metrics for each run, including the number of virtual users (VUs), duration, total number of requests, requests per second, average response time, and error rate. Select the run number to view a graph and full details for the performance run.

![Performance runs tab](https://assets.postman.com/postman-docs/v10/performance-test-past-runs-v10-24.jpg)
