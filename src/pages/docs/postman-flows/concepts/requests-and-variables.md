---
title: "Create Postman requests and variables using Postman Flow blocks"
updated: 2023-08-15
---

To use an API, a _request_ must be made to either send, update, delete, or return information. When making a request, the information is often different every time it's run. Because of this, _variables_ are used to interact with the requests in places where the data being sent or received changes.

## Contents

* [Requests](#requests)
* [Variables](#variables)

> To learn more about making your first request, check out the tutorial [here](../../../getting-started/sending-the-first-request/).

### Requests

In Postman Flows, the **Send Request** block enables you to select a request from a collection.

<img src="https://assets.postman.com/postman-docs/v10/flows-select-a-request-v10-20.gif" alt="Select a request" fetchpriority="low" loading="lazy" />

If there are no collections in the workspace, six easy-to-use requests will appear in the spotlight to choose from to get started.

This example uses [Postman's echo service API](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation).

> Postman Flows can run requests that use files in your local [working directory](/docs/getting-started/installation/settings/#working-directory) to send [body data](/docs/sending-requests/create-requests/parameters/). To make collaboration and publishing your Flow easier, [upload your test data files](/docs/sending-requests/create-requests/test-data/) to your Postman team.

### Variables

_Variables_ are values that can change from one request to another. These can be things like IDs, usernames, and numbers.

The variables part of the **Send Request** block opens automatically and enables you to enter values.

<img src="https://assets.postman.com/postman-docs/v10/flows-add-a-variable-v10-20.gif" alt="Adding variables" fetchpriority="low" loading="lazy" />

In this request, the two variables are named `value1` and `value2` and were set up in the request. (For more information on setting up variables in requests, visit [here](/docs/sending-requests/variables/variables/).) Once the request runs, you can view the values in the **Success** output. The values returned are whatever the `value1` and `value2` variables are set to (in this example, `hello` and `there`).
