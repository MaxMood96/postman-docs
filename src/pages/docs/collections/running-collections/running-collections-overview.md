---
title: "Test your API functionality"
updated: 2024-01-16
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Monitoring | The Exploratory"
    url: "https://youtu.be/tDQzY1Hn2LY"
  - type: dynamic_blog
    name: "Blog posts"
    blog_tag: "monitors"
---

You can run Postman collections to test and interact with your APIs. In Postman, a collection can be a group of saved [requests](/docs/getting-started/first-steps/sending-the-first-request/), a [workflow](/docs/collections/running-collections/building-workflows/), or a [test suite](/docs/writing-scripts/test-scripts/). Postman enables you to run your collections in the following ways:

* You can [run collections manually](/docs/collections/running-collections/intro-to-collection-runs/), with the Collection Runner. This is useful when you're sending a small number of requests and you don't need to repeat them many times.
    * You can also run collections manually in the [Postman VS Code extension](/docs/getting-started/basics/about-vs-code-extension/), enabling you to run collections in the same application you use to develop your APIs.
* You can schedule collections to run automatically. [Scheduled collection runs](/docs/collections/running-collections/scheduling-collection-runs) are useful for automating testing, and [monitors](/docs/collections/running-collections/scheduling-collection-runs-monitors) are useful for checking performance, availability, and reliability.
* You can automate collection runs in your CI/CD with the [Postman CLI](/docs/postman-cli/postman-cli-overview/) or [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/).
* You can use [webhooks](/docs/collections/running-collections/collection-webhooks/) to trigger collection runs at certain times or when a specific event happens in your application.

> You can also run collections to simulate real-world traffic and [test the performance of your API](/docs/collections/performance-testing/testing-api-performance/) under load.
