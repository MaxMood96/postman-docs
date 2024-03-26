---
title: "Simulate user traffic to test your API performance"
updated: 2024-01-23
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

> **Performance testing is available on [Postman Free, Basic, and Professional plans](https://www.postman.com/pricing/).** To learn more about availability for Enterprise plans, contact the [Postman sales team](https://www.postman.com/company/contact-sales/).

You can use the Postman desktop app to test the performance of your APIs. Performance testing enables you to simulate user traffic, so you can observe how your API behaves under load. It can also help you identify any issues or bottlenecks that affect performance.

## Contents

* [Test API performance with virtual users](#test-api-performance-with-virtual-users)
* [View real-time performance metrics](#view-real-time-performance-metrics)
* [Find and debug performance issues](#find-and-debug-performance-issues)
* [Use unique data for each virtual user](#use-unique-data-for-each-virtual-user)

## Test API performance with virtual users

To [configure a performance test](/docs/collections/performance-testing/performance-test-configuration/), create a collection with the requests you want to send to your API. Postman uses these requests to simulate the activity of your API's users. Each _virtual user_ runs the requests in the specified order in a repeating loop. All of the virtual users operate in parallel to simulate real-world load on your API.

## View real-time performance metrics

Performance tests run in the Postman desktop app on your computer and not in the cloud. When you start the test, the _Collection Runner_ displays performance metrics in real time.

You can [view performance test metrics](/docs/collections/performance-testing/performance-test-metrics/) such as the average response time, error rate, and throughput for all requests or individual requests. You can also [compare two performance runs](/docs/collections/performance-testing/performance-test-metrics/#compare-two-performance-runs) to understand how your API's performance has changed over time.

## Find and debug performance issues

After the performance test finishes running, you can [view details about errors](/docs/collections/performance-testing/performance-test-errors/) that occurred during the test. You can view the most common errors and error trends over time to help you identify the source of any performance issues.

## Use unique data for each virtual user

By default, each virtual user sends requests with the same data during a performance test. You can also [upload a data file](/docs/collections/performance-testing/performance-test-data-files/) with custom values for each virtual user. This enables you to vary the behavior of the virtual users to better simulate real-world traffic.
