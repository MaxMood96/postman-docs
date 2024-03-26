---
title: "Create GraphQL requests in Postman"
updated: 2023-11-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "GraphQL in Postman Demo"
    url: "https://youtu.be/7pUbezVADQs"
  - type: link
    name: "GraphQL introspection | Postman Level Up"
    url: "https://youtu.be/k-j3FwTjJkE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Don’t Panic: A Developer’s Guide to Building Secure GraphQL APIs"
    url: "https://blog.postman.com/how-to-build-secure-graphql-apis/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Public GraphQL APIs"
    url: "https://www.postman.com/cs-demo/workspace/9e8c8a19-bb76-46af-9e8d-5747bf8fcce5"
  - type: link
    name: "GraphQL Examples"
    url:  "https://www.postman.com/devrel/workspace/f12c0652-9c9d-4813-968b-c8ed0b3f0022"
  - type: link
    name: "Working with GraphQL collection"
    url: "https://www.postman.com/postman/workspace/postman-team-collections/collection/1559645-c0dd3eb3-5258-4ddd-a6e4-2780c5212e33?ctx=documentation"
warning: false
---

Use Postman's GraphQL client to create GraphQL requests with one or multiple queries.

The GraphQL client interface is specifically designed for crafting GraphQL requests. It enables you to explore a GraphQL API's data fields and construct queries by selecting fields or entering code in an editor. For requests with multiple queries, you can select specific queries and run them individually.

> You can also create GraphQL requests [with Postman’s HTTP interface](/docs/sending-requests/graphql/graphql-http/), which supports GraphQL but requires more steps than the GraphQL client.

## Contents

* [Create a GraphQL request with one query](#create-a-graphql-request-with-one-query)
* [Create a GraphQL request with multiple queries](#create-a-graphql-request-with-multiple-queries)

## Create a GraphQL request with one query

This example creates and executes a GraphQL query using the schema explorer.

> If you’re using the Postman web app, you must use the Postman Desktop Agent. See [About the Postman Agent](/docs/getting-started/basics/about-postman-agent/) for more information.

1. In Postman, select **New > GraphQL** to open a request in a new tab. (In the Postman desktop app, you can also select **⌘+N** or **Ctrl+N**, then select **GraphQL**.)
1. Select the URL box, then select `https://graphql.postman-echo.com/graphql` from the dropdown list. Postman uses introspection to load the schema and populate the schema explorer with data fields.
    > In the schema explorer, the data fields are grouped under their respective types: **Query**, **Mutation**, and **Subscription**.
1. In the schema explorer, select the `hello` field, then select arguments `person`, `name`, and `age`. A query based on your selections appears in the query editor.
    > You can also build a query by entering code in the query editor.
1. Enter your age and name in the input boxes next to `age` and `name` or in the query editor.
1. Select **Query**.

    ![GraphQL request with a single query](https://assets.postman.com/postman-docs/v10/graphql-single-query-v10-22.jpg)

## Create a GraphQL request with multiple queries

This request has multiple queries and executes them one at a time. To execute only the selected query, select a checkbox in the schema explorer and select **Query** .

1. In Postman, select **New > GraphQL** to open a request in a new tab. (In the Postman desktop app, you can also select **⌘+N** or **Ctrl+N**, then select **GraphQL**.)

1. Select the URL box, then select `https://graphql.postman-echo.com/graphql` from the dropdown list. Postman uses introspection to load the schema and populate the schema explorer with data fields.

1. In the schema explorer, select the `hello`, `person`, and `name` fields. Enter your name in the `name` field. A query appears in the query editor.

1. In the schema explorer, scroll down and select the `greetings` field. A second query appears in the query editor and the first query is dimmed.

1. In the query editor, select anywhere in the first query to activate it and select **Query**.

1. Select anywhere in the second query and select **Query**.

    ![GraphQL request with multiple queries](https://assets.postman.com/postman-docs/v10/graphql-multi-query-v10-22.jpg)

    You can also use the **Query** button dropdown list to browse and select queries from a request with multiple queries.

    <img src="https://assets.postman.com/postman-docs/v10/graphql-select-query-v10-20.jpg" alt="Select a query with the Query button dropdown list" width="437" >
