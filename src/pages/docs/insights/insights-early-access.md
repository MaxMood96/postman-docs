---
title: "About Postman Insights Early Access"
updated: 2024-03-07
early_access: true
plan: alpha
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Postman Live Insights: Faster, Better API Debugging"
    url: "https://blog.postman.com/introducing-postman-live-insights-faster-better-api-debugging/"
  - type: link
    name: "Postman Live Insights: automatically discover, monitor, and add APIs"
    url: "https://www.postman.com/product/live-insights/"
---

Thanks to the rise of APIs and service-oriented architectures, web applications are more complex than ever before. This means there is more surface area for unforeseen customer-impacting bugs. Using today’s solutions, monitoring is manual. In practice, this means even the most well-maintained monitoring systems have gaps; every gap in monitoring means a customer might report an issue first, or longer mean time to recovery from an incident.

Postman Insights provides a layer of reliability across your entire system. There are three main benefits of using Postman Insights:

* The Insights Agent captures metrics and errors for endpoints across your entire system, even on endpoints you may not have prioritized.
* Endpoint-level information gives you visibility into issues close to where they affect customers.
* The Postman Insights Agent drops in at the infrastructure layer, working across your tech stack without requiring an SDK for every language, or an invasive proxy.

Today, the alpha release enables you to leverage the Postman Insights Agent on Amazon Elastic Container Service (ECS) deployments.

> Insights currently works only for REST APIs and not for gRPC or GraphQL.

## Documentation

Just like the Insights features, the Insights documentation is in the alpha stage. That's why you won't see topic links in the left navigation panel. Instead, you can use the links in the table of contents to jump to the next topic of interest. For easier navigation, you'll find the list of other topics at the bottom of each page.

* [Postman Insights overview](/docs/insights/insights-overview/)
* [Get started with Postman Insights](/docs/insights/insights-gs/)
* [Diagnose and troubleshoot errors](/docs/insights/insights-troubleshoot/)
* [Postman Insights Agent reference](/docs/insights/insights-reference/)

## Feedback

If you’ve agreed to participate in the alpha, Postman kindly asks you to:

* Install the Postman Insights Agent within two weeks of receiving these instructions. We would love installation feedback as you go, on Slack or by email.
* Fill out a survey or do a live user interview within one month of receiving access.
* Optionally, provide feedback on product designs and upcoming features.

The Live Insights team would love to talk to you in Slack to get questions, bug reports, and feature requests as you explore the alpha. If you’d like to provide detailed product feedback, please send it to the [Insights Alpha team](mailto:live.insights.alpha@postman.com).

## Support

If you experience any issues, please reach out on Slack or contact [Support](mailto:live.insights.alpha@postman.com).
