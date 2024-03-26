---
title: "View reports about API rule compliance"
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

The **API Governance** report dashboard provides metrics relevant to your team's [API Governance](/docs/api-governance/api-governance-overview/) rule compliance. This section has three reports:

* [API Governance](#api-governance)
* [Public APIs](#public-apis)
* [Private Network APIs](#private-network-apis)

You can use these reports to answer API governance questions about APIs owned by your team that are part of the [Public API Network](/docs/getting-started/first-steps/exploring-public-api-network/) and your team's [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/).

## API Governance

For APIs owned by your team that are in the Public API Network or in your team's Private API Network, and for APIs with a version that has been published internally to your team, the API Governance report provides the following information over the past 30 days:

* **Conformance** - The number of APIs that don't have any API Governance rule violations.
* **Non-conformance** - The average number of API Governance rule violations per API.
* **API conformance over time** - Per day over the last 30 days, the number of APIs without API Governance rule violations and the number of APIs with API Governance rule violations.
* **Current API landscape** - The number of APIs, broken down by the number of API Governance rule violations in each.
* **Top 3 rules violated** - The three API Governance rules that are most frequently violated in APIs.

For specific details about the APIs in the **Current API landscape** and **Top 3 rules violated** charts, select some data in the chart. This opens the **Drill Down** pane, which contains links to the APIs and more information about them.

## Public APIs

The **Public APIs** report provides the following information for APIs in your team's [public workspaces](/docs/collaborating-in-postman/using-workspaces/public-workspaces/) over the past 30 days:

* **Conformance** - The number of APIs in your team's public workspaces that don't have any API Governance rule violations.
* **Non-conformance** - The average number of API Governance rule violations per API in your team's public workspaces.
* **API conformance over time** - Per day over the last 30 days, the number of APIs without API Governance rule violations and the number of APIs with API Governance rule violations.
* **Current API landscape** - The number of APIs in your team's public workspaces, broken down by the number of API Governance rule violations in each.
* **Top 3 rules violated** - The three API Governance rules that are most frequently violated in APIs in your team's public workspaces.

For specific details about the APIs in the **Current API landscape** and **Top 3 rules violated** charts, select some data in the chart. This opens the **Drill Down** pane, which contains links to the APIs and more information about them.

## Private Network APIs

The **Private Network APIs** report provides the following information for APIs in your team's [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/) over the past 30 days:

* **Conformance** - The number of APIs in your team's Private API Network that don't have any API Governance rule violations.
* **Non-conformance** - The average number of API Governance rule violations per API in your team's Private API Network.
* **API conformance over time** - Per day over the last 30 days, the number of APIs without API Governance rule violations and the number of APIs with API Governance rule violations.
* **Current API landscape** - The number of APIs in your team's Private API Network, broken down by the number of API Governance rule violations in each.
* **Top 3 rules violated** - The three API Governance rules that are most frequently violated in APIs in your team's Private API Network.

For specific details about the APIs in the **Current API landscape** and **Top 3 rules violated** charts, select some data in the chart. This opens the **Drill Down** pane, which contains links to the APIs and more information about them.
