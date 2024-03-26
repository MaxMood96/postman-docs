---
title: "View reports about public workspaces on the Public API Network"
updated: 2023-12-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Announcing public workspace metrics"
    url: "https://blog.postman.com/announcing-public-workspace-metrics/"
---

> [**The Public workspace metrics report is available to users on teams on all Postman plans.**](https://www.postman.com/pricing)

The **Public workspace metrics** report dashboard provides metrics relevant to your team's public workspaces on the [Public API Network](/docs/collaborating-in-postman/public-api-network/public-api-network-overview/). This report enables you to track API consumer interest and activity in your APIs on the Public API Network. To view metrics in the Public workspace metrics report, you must have at least one [public workspace](/docs/collaborating-in-postman/using-workspaces/public-workspaces/) in your team.

You can use the **Show By** dropdown list in the upper right to show metrics by week or month. You can also use the **Show** dropdown list in the upper right to show metrics for APIs in specific public workspaces and collections.

> These metrics don't include requests to your APIs from user-created collections.

* **Collection views** - The number of times users viewed collections in your public workspaces. You can switch between total views and unique users. Total views shows the number of times any user viewed your collections. Unique users shows the number of times users signed in to Postman viewed your collections at least once.
* **New collection forks** - The number of times your collections were forked. You can switch between total forks and unique users. Total forks shows the number of times any user forked your collections. Unique users shows the number of times users signed in to Postman forked your collections at least once.
* **Total API calls** - The number of times requests were sent in forked collections, and the response codes returned by the APIs.
* **Total users vs users with auth failure calls** - The number of users who sent requests to your APIs in forked collections. This metric also tracks the number of users who sent requests in forked collections and received a `401 Unauthorized` response code. You can learn more about [setting up authorization for public APIs](/docs/sending-requests/authorization/authentication-for-public-apis/) in Postman.
