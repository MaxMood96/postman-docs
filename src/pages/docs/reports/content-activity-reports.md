---
title: "View reports about workspaces and APIs"
updated: 2023-06-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing New Postman Reports for Enterprises"
    url: "https://blog.postman.com/introducing-new-postman-reports-for-enterprises/"
---

> [**Reports are available on all Postman Enterprise plans.**](https://www.postman.com/pricing)

The **Content activity** dashboard shows the current landscape of elements created and updated by your team, organized into a **Workspaces overview** section and an **APIs overview** section.

## Contents

* [Workspaces overview](#workspaces-overview)
* [APIs overview](#apis-overview)
* [More reports](#more-reports)

## Workspaces overview

You can switch between team and public workspaces with the **Report Type** dropdown list in the upper right.

* **Total workspaces** - The total number of workspaces including public, team, personal, and private workspaces.
* **Workspaces created over time** - The total number of workspaces created by your team in the last six months. This might include workspaces that have since been deleted, as long as they were created in the reporting period.
* **Workspaces by type** - The total numbers of partner, personal, private, public, and team workspaces, and the number of empty workspaces of each type. Empty workspaces are workspaces that don't contain any environments, monitors, mocks, collections, or APIs.
* **Active workspaces** - The number of workspaces with at least one action on that day in the last 30 days. Actions include:

    * Creating, editing, and deleting requests.
    * Sending requests.
    * Creating, editing, and deleting collections, APIs, environments, mocks, and monitors.

    > This metric doesn't include administrative or billing-related tasks that happen outside of a workspace.

## APIs overview

You can switch between team and public APIs with the **Report Type** dropdown list in the upper right.

* **Total APIs** - The total number of APIs created by your team in all workspaces.
* **Distribution of APIs** - The number of APIs created in personal, private, team, or public workspaces, or in the Private API Network.
* **APIs created over time** - The total number of APIs created each month in the last six months. This might include APIs that have since been deleted, as long as they were created in the reporting period.

## More reports

Below **Content activity** in the **Reports** menu on the left you can access more detailed dashboards for workspaces and APIs:

## Workspaces dashboard

You can choose to view **Team** or **Public** APIs by selecting from the **Report Type** dropdown list.

### Team workspaces

* **Total team workspaces** - The total number of team workspaces for your team.
* **Most active team workspace** - A link to the most active team workspace in the past 30 days. Actions include:

    * Creating, editing, and deleting requests.
    * Sending requests.
    * Creating, editing, and deleting collections, APIs, environments, mocks, and monitors.

    > This metric doesn't include administrative or billing-related tasks that happen outside of a workspace.

* **Elements in team workspaces** - The number of environments, monitors, mocks, collections, and APIs in all team workspaces.
* **Forks and Pull requests on team collections** - The number of times a collection in your team workspaces has been forked or pulled in the last six months. This might include forks and pull requests that have since been deleted, as long as they were created in the reporting period.
* **Watch count** - The number of times someone has watched a collection or API in your team workspaces in the last six months. This number includes users who watched and then unwatched an element.
* **Comments over time** - The number of times a person has commented on an API, collection, pull request, request, or folder in your team workspaces in the last six months.

### Public workspaces

The **Public Workspaces** report shows information about your public workspaces:

* **Total public workspaces** - The total number of public workspaces for your team.
* **Most active public workspace (past 30 days)** - A link to the most active public workspace in the past 30 days. Actions include:

    * Creating, editing, deleting, and sending requests.
    * Creating, editing, and deleting collections, APIs, environments, mocks, and monitors.
    > This metric doesn't include administrative or billing-related tasks that happen outside of a workspace.

* **Most viewed public workspace (past 30 days)** - A link to the most viewed public workspace in the past 30 days.
* **Views on public entities** - The number of views on your public workspaces and collections in the last three months.
* **Elements in public workspaces** - The number of environments, monitors, mocks, collections, and APIs in your team's public workspaces.
* **Forks and Pull requests on public collections over time** - The number of times a collection in your public workspaces has been forked or pulled in the last six months. This might include forks and pull requests that have since been deleted, as long as they were created in the reporting period.
* **Watch count** - The number of times someone has watched a collection or API in your public workspaces in the last six months. This number includes users who watched and then unwatched an element.
* **Comments over time** - The number of times a person has commented on an API, collection, pull request, request, or folder in your public workspaces in the last six months.

## APIs dashboard

The APIs dashboard provides an overview of all your APIs. It also enables you to view a detailed report for each API. You can choose to view **Team** or **Public** APIs by selecting from the **Report Type** dropdown list.

### Team APIs

* **Total APIs in team workspaces** - The number of APIs in team workspaces.
* **Schemas by type** - The number of APIs in team workspaces by schema type (like OpenAPI, GraphQL, and Swagger). If an API has multiple versions with different schema types, then the same API will be counted in the column for each relevant schema type.
* **APIs updated over time** - The number of APIs in team workspaces that have been updated in the last 30 days.
* **API response time** - The average response time of all APIs in team workspaces in the last seven days. To be included, the request to which a response belongs must be part of a collection linked to a team API.
* **API test results** - The number of successful and failed test runs in the last seven days.
* **API uptime** - The number of successful responses (returning 1xx or 2xx) compared to failed responses (returning 3xx, 4xx, or 5xx) in the last seven days.
* **API mock coverage** - The number of APIs in team workspaces that your team has added mocks to.
* **API monitoring coverage** - The number of APIs in team workspaces that your team has added monitors to.
* **API test coverage** - The number of APIs in team workspaces that your team has added tests to.
* **API documentation coverage** - The number of APIs in team workspaces that your team has added documentation to.
* **Watch count** - The number of times someone has watched an API in a team workspace in the last six months. This number includes users who watched and then unwatched an API.
* **Comments over time** - The number of times someone has commented on an API in a team workspace in the last six months.

### Public APIs

* **Total public APIs** - The number of APIs in your public workspaces.
* **APIs updated over time** - The number of APIs in your public workspaces updated in the last 30 days.
* **Most viewed public API (past 3 months)** - A link to your team's most-viewed public API over the last three months.
* **Public API views** - The number of views of your APIs in your public workspaces over the last three months.
* **API mock coverage** - The number of APIs in your public workspaces that your team has added mocks to.
* **API monitoring coverage** - The number of APIs in your public workspaces that your team has added monitors to.
* **API test coverage** - The number of APIs in your public workspaces that your team has added tests to.
* **API documentation coverage** - The number of APIs in your public workspaces that your team has added documentation to.
* **Watch count** - The number of times someone has watched an API in your public workspaces in the last six months. This number includes users who watched and then unwatched an API.
* **Comments over time** - The number of times someone has commented on an API in your public workspaces in the last six months.

## View report by API

The **View report by API** dashboard provides a report for each individual API. Scroll through the list of APIs, or use the search box to find an API, and then select the API to view the report. Each API report includes the following information:

* **API name** - The name of the API.
* **API created by** - The user who created the API.
* **API created on** - The date the API was created.
* **Number of API requests** - The number of requests made to the API in the last 30 days.
* **Failed test runs** - The total number of failed test runs in the last 30 days.
* **Average response size** - The average response size in bytes in the last 30 days.
* **Average response time** - The average response time in milliseconds in the last 30 days.
* **API response codes** - The HTTP response codes for each API response in the last 30 days.

## Private Network APIs

The **Private Network APIs** dashboard provides metrics about APIs in your [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/), including an overview of your total APIs, a visualization of APIs categorized by schema type, and a separate view of your APIs with and without mocks, monitors, tests, and documentation.

The **Private Network APIs** report provides the following information:

* **Total APIs on Private API Network** - The number of APIs that are published to the Private API Network.
* **Schemas by type** - The number of APIs in the Private API Network by schema type (like OpenAPI, GraphQL, and Swagger).
* **API mock coverage** - The number of APIs in the Private API Network your team has added mocks to.
* **API monitoring coverage** - The number of APIs in the Private API Network your team has added monitors to.
* **API test coverage** - The number of APIs in the Private API Network your team has added tests to.
* **API documentation coverage** - The number of APIs in the Private API Network your team has added documentation to.
* **Watch count** - The number of times someone has watched an API in the Private API Network in the last six months. This number includes users who watched and then unwatched an API.
* **Comments over time** - The number of times someone has commented on an API in the Private API Network in the last six months.
