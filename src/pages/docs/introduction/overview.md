---
title: "Postman documentation overview"
updated: 2023-10-19
early_access: false
plan: ga
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to APIs playlist"
    url:  "https://youtube.com/playlist?list=PLM-7VG-sgbtA-MUiVgE-SwK_RkYgesikH"
  - type: link
    name: "Intro to Postman playlist"
    url: "https://youtube.com/playlist?list=PLM-7VG-sgbtAgGq_pef5y_ruIUBPpUgNJ"
  - type: link
    name: "Introduction for Developers | Postman Intergalactic"
    url: "https://youtu.be/qUlcosvyIyo"
  - type: link
    name: "Postman Community Forum | Postman Level Up"
    url:  "https://youtu.be/Ks_4H58eCQc"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "First 5 Things to Try If You’re New to Postman"
    url: "https://blog.postman.com/postman-first-5-things-to-try/"
  - type: link
    name: "10 Postman Features Everyone Should Know"
    url: "https://blog.postman.com/10-postman-features-everyone-should-know/"
  - type: link
    name: "What Do 37,000 Developers Say About Postman? 3 Key Things"
    url: "https://blog.postman.com/what-developers-say-about-postman/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "30 days of Postman for developers"
    url:  "https://www.postman.com/postman/workspace/30-days-of-postman-for-developers/overview"
---

Welcome to the Postman Learning Center docs! This is the place to find official information on how to use Postman in your API projects.

If you're learning to carry out a specific task or workflow in Postman, check out the following topics to find resources:

## Get started

To get started using Postman, check out the [Get started](/docs/getting-started/overview/) section.

## Send requests

You can send requests in Postman to connect to APIs you are working with. To learn more about how to send requests, see [Send API requests and get response data in Postman](/docs/sending-requests/requests/) and learn how to [send your first request](/docs/getting-started/first-steps/sending-the-first-request/).

## Write scripts

Postman has a powerful runtime based on Node.js that enables you to add dynamic behavior to requests and collections. You can write scripts that run before or after request execution to perform API tests, build requests that can contain dynamic parameters, pass data between requests, and more. To learn more about scripts, see [Scripting in Postman](/docs/writing-scripts/intro-to-scripts/).

## Use collections

Postman Collections are groups of saved requests. You can use collections to organize and group your requests. They can then be run together. You can run collections manually, on a schedule, from a CI/CD pipeline, or from a webhook. To learn more about collections, see [Organize and automate API requests in Postman Collections](/docs/collections/collections-overview/).

## Use Postman Flows

Postman Flows is a visual tool for creating API workflows. You can use Flows to chain requests, handle data, and create real-world workflows in your Postman workspace.

To learn more about Postman Flows, see [Build API applications visually using Postman Flows](/docs/postman-flows/gs/flows-overview/).

## Use the Postman CLI

The Postman CLI is a secure command-line companion for Postman. You can use the Postman CLI to run a collection, send run results to Postman, check API definitions against configured API Governance and API Security rules, and more.

To learn more about the Postman CLI, see [Explore Postman's command-line companion](/docs/postman-cli/postman-cli-overview/).

## Collaborate in Postman

Postman provides a variety of tools to enable and enhance [collaboration](https://www.postman.com/api-platform/api-collaboration/) within your team. You can create team workspaces, where team members can share their work and collaborate on API projects. Users can also discuss their work directly in Postman by commenting on collections and APIs, including on specific requests, versions, and inline on API definitions and scripts.

To learn more about collaboration in Postman, see [Collaborate in Postman](/docs/collaborating-in-postman/collaborate-in-postman-overview/).

## Design and develop your API

Postman supports [API-first development](https://www.postman.com/api-first/) with the API Builder. Use the API Builder to design your API in Postman. Your API definition can then act as the single source of truth for your API project.

You can connect various elements of your API development and testing process to your API definition, such as collections, documentation, tests, and monitors. You can also sync your API in Postman with a Git repository.

To learn more about API-first development, see [Design your API in Postman using the API Builder](/docs/designing-and-developing-your-api/the-api-workflow/).

## Document your API

[Documentation](https://www.postman.com/api-platform/api-documentation/) is an important part of any collection or API. Good documentation helps the people who use your collection understand what it does and how each request works. And comprehensive API documentation lets your consumers know what endpoints are available and how to interact with them.

Once you've generated documentation for your collection or API, users can view the documentation in Postman. By default your documentation is private, so you must share a collection or API with others before they can access it. If you're creating a public API, you can publish your documentation to make it publicly available to anyone with a web browser.

To learn more about documenting your API, see [Document your APIs in Postman](/docs/publishing-your-api/api-documentation-overview/).

## Monitor your API

Postman Monitors give you continuous visibility into the health and performance of your APIs. [Monitors](https://www.postman.com/api-platform/api-monitoring/) enable you to run API test scripts, chain together multiple requests, and validate critical API flows. A monitor runs a series of requests from the Postman cloud on a schedule you set. To learn more about using monitors, see [Monitor health and performance of your APIs in Postman](/docs/monitoring-your-api/intro-monitors/).

## API Governance and API Security

[API governance](https://www.postman.com/api-platform/api-governance/) is the practice of defining and applying development rules that promote consistent API behaviors across your organization's API landscape. A robust [API security](https://www.postman.com/api-platform/api-security/) posture means that your organization has development rules that promote security-first API behaviors. The Postman API Governance and Postman API Security features can identify inconsistencies or weaknesses in your APIs, then recommend possible fixes or improvements.

To learn more about Postman's API Governance and API Security features, see [API Governance and API Security in Postman](/docs/api-governance/api-governance-overview/).

## Administration

Postman provides a variety of options to customize your team's experience, from the initial setup to ongoing team and plan management. As a Team Admin, you can streamline the onboarding process for your team, manage access control, and keep your team up to date with the latest version of Postman.

To learn more about administering your Postman team, see the [Team management overview](/docs/administration/managing-your-team/managing-your-team/).

## Use reports

Postman generates reports that enable you to visualize data for how your team uses Postman. These reports give you insights into the state of your APIs, including tests, documentation, and monitoring coverage. They also enable you to track performance and SLA adherence.

To learn more about how to use reports, see [View reports on usage, security, and billing in Postman](/docs/reports/reports-overview/).

## Developer resources

If you're integrating Postman with your CI/CD workflow or are developing with Postman APIs or libraries, check out [Postman developer resources](/docs/developer/resources-intro/).

## Integrations

You can connect Postman to your API workflows with integrations for popular third-party solutions. Use integrations to automatically share data between Postman and the other tools you rely on for API development. For more information, see [Integrate Postman with third-party solutions](/docs/integrations/intro-integrations/).
