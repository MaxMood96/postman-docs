---
title: "Track Postman API call limits"
updated: 2022-11-30
search_keyword: "postman-api, api-rate-limits, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=iEtsp6o4AJg"
  - type: link
    name: "User Info from the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=k2bvdqxDcsU"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Filtering and Sorting APIs Using the Postman API"
    url: "https://blog.postman.com/filtering-and-sorting-apis-using-the-postman-api/"
  - type: link
    name: "Introducing an API to Access Mock Server Call Logs"
    url: "https://blog.postman.com/introducing-an-api-to-access-mock-server-call-logs/"
  - type: link
    name: "Introducing APIs to Access and Manage Server-Level Responses on a Mock Server"
    url: "https://blog.postman.com/apis-to-access-manage-server-level-responses-mock-server/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman API collection"
    url:  "https://www.postman.com/postman/workspace/postman-public-workspace/collection/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a?ctx=documentation"
  - type: link
    name: "Postman API definition"
    url:  "https://www.postman.com/postman/workspace/postman-public-workspace/api/72a32ca3-f06a-4e83-a933-2821a0e6616f/definition/d429098b-1789-4c62-b77b-cf02024aba53?view=documentation"
---

Postman's API access rate limits are applied at a per-user basis in unit time.

Access to the API using a key is limited to **300 requests per minute**. Every API response includes the following set of headers to identify the status of your consumption:

| Header                 | Description   |
| ---                    | ---           |
| `X-RateLimit-Limit`    | The maximum number of requests that the consumer is permitted to make per minute. |
| `X-RateLimit-Remaining`| The number of requests remaining in the current rate limit window. |
| `X-RateLimit-Reset`    | The time at which the current rate limit window resets in, UTC epoch seconds. |

## Free API calls with your Postman account

Your Postman account gives you a limited number of free Postman API calls per month. You can check your usage limits with the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) or the [resource usage page](https://go.postman.co/billing/add-ons/overview).

To learn more about the resources included with your Postman plan and what happens when you reach your usage limits, go to [About resource usage](/docs/billing/resource-usage/).
