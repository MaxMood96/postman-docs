---
title: "Design your API in Postman using the API Builder"
updated: 2024-01-18
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "The Reimagined API-First Workflow | The Exploratory"
    url: "https://youtu.be/rTTAVlUxfDc"
  - type: link
    name: "Are you API-first? | The Exploratory"
    url: "https://youtu.be/6brCRaqxNe8"
  - type: link
    name: "Designing Good API Experiences | Postman Intergalactic"
    url: "https://youtu.be/TQpC1o1dFic"
  - type: dynamic_blog
    name: "Blog posts"
    blog_tag: "api-first"
---

Postman supports [API-first development](https://www.postman.com/api-first/) with the API Builder. You can use the API Builder to [design your API](https://www.postman.com/api-platform/api-design/) in Postman before [developing](/docs/designing-and-developing-your-api/developing-an-api/develop-an-api/) it. Your API definition can then act as the single source of truth for your API project.

With the API Builder, you can connect various Postman elements of your [API development lifecycle](https://www.postman.com/api-platform/api-lifecycle/) to your API definition, such as collections, documentation, and tests. You can also [integrate your API](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/) in Postman with a Git repository, such as GitHub, GitLab, Bitbucket, or Azure DevOps.

> **The maximum number of API objects you can create in the API Builder is determined by your Postman plan. [Learn more about what's included with each plan](https://www.postman.com/pricing/).**

## Contents

- [Designing and developing your API](#designing-and-developing-your-api)
- [Navigating the API Builder](#navigating-the-api-builder)

## Designing and developing your API

The following are the high-level steps involved when designing and developing your APIs in Postman:

- [Creating an API](/docs/designing-and-developing-your-api/creating-an-api/) - Create a new API in Postman or [import an existing API](/docs/designing-and-developing-your-api/importing-an-api/).
- [Using API version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/) - Sync your changes between Postman and a remote Git repository. When you're ready to share your changes with consumers, [publish a version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).
- [Developing an API](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) - Build out your API by [editing your API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#editing-an-api-definition-file) and [adding collections](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/). You can also [generate server-side code](/docs/designing-and-developing-your-api/developing-an-api/generating-server-code/) from your OpenAPI 3 specification and [validate your API definition](/docs/designing-and-developing-your-api/developing-an-api/validating-elements-against-schema/) and linked elements.
- [Testing an API](/docs/designing-and-developing-your-api/testing-an-api/) - [Add tests](/docs/designing-and-developing-your-api/testing-an-api/#adding-api-tests) to your API, and use [CI integration](/docs/designing-and-developing-your-api/testing-an-api/#adding-ci-integration) to build and automate testing.
- [Deploying an API](/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-overview/) - Connect your API deployment service to have greater visibility within Postman.
- [Observing an API](/docs/designing-and-developing-your-api/observing-an-api/observing-an-api/) - Integrate your API with application performance management (APM) tools.
- [Managing and sharing APIs](/docs/designing-and-developing-your-api/managing-apis/) - Share your API with other team members, add comments, view the changelog, and watch for changes.
- [Mocking an API](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) - Set up a mock server to simulate your API's endpoints for testing or development purposes.
- [Using API reports](/docs/reports/reports-overview/) - Use reports to view statistics on how APIs are being used, developed, and improved by your team.

## Navigating the API Builder

To view and work with APIs, select **APIs** in the sidebar. From here, you can open and edit any existing APIs, or create or import new APIs. Use the arrows to expand an API in the sidebar and view the API's definition files and linked elements.

<img src="https://assets.postman.com/postman-docs/v10/api-builder-sidebar-v10-21-1.jpg" alt="API Builder sidebar" width="382px" />

When you select an API in the sidebar, the workbench displays an overview of the API. The overview displays a description of the API, tags associated with the API ([Enterprise plans](https://www.postman.com/pricing)), any linked collections, and the API's published versions. The overview also provides quick access to tasks, such as connecting to a Git repository, adding tests, observing API performance, and viewing deployments.

![API Builder overview](https://assets.postman.com/postman-docs/v10/api-builder-overview-v10-21-2.jpg)

The right sidebar offers more options for working with your API. You can view comments, generate server code from your API definition, and view the API's changelog.

<img src="https://assets.postman.com/postman-docs/v10/api-builder-changelog-v10.jpg" alt="API Builder changelog" width="443px" />

For APIs connected to a Git repository, the changelog is replaced by the [**Source Control**](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/#pushing-and-pulling-changes) pane, which you can use to sync your changes with a remote Git repository.
