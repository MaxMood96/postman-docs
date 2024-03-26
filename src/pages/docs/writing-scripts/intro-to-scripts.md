---
title: "Scripting in Postman"
updated: 2021-01-27
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Write API Tests"
    url: "https://youtu.be/EVg6gxeiUd0"
  - type: link
    name: "Intro to Postman | Advanced API Tests"
    url: "https://youtu.be/vVDZxeS865g"
  - type: link
    name: "Testing APIs | Postman Enterprise"
    url: "https://youtu.be/-Nkvs69-LNE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "When and How to Use JSON Serialization in Postman"
    url: "https://blog.postman.com/when-and-how-to-use-json-serialization-in-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Extend uses scripts to run its API in sequence during testing"
    url: "https://www.postman.com/case-studies/extend/"
  - type: link
    name: "Paylocity uses scripts to automate workflows"
    url: "https://www.postman.com/case-studies/paylocity/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman Answers"
    url:  "https://www.postman.com/postman/workspace/aa5fb3b8-0090-4b5e-b3b4-fa5c1f2d080d"
---

Postman's runtime is based on [Node.js](https://nodejs.org/en/about) and lets you add dynamic behavior to requests and collections. You can use pre-request and test scripts to write API tests, build requests that can contain dynamic parameters, pass data between requests, and more.

Pre-request and test scripts execute asynchronously. This enables you to execute multiple scripts without waiting for the previous script to complete. If you'd like scripts to execute in sequence, you can use a callback function.

## Contents

* [Scripts in Postman](#scripts-in-postman)
* [Execution order of scripts](#execution-order-of-scripts)
* [Debugging scripts](#debugging-scripts)

## Scripts in Postman

You can add JavaScript code to execute during two events in the flow:

  1. Before a request is sent to the server, as a [pre-request script](/docs/writing-scripts/pre-request-scripts/) under the **Pre-request Script** tab.
  1. After a response is received, as a [test script](/docs/writing-scripts/test-scripts/) under the **Tests** tab.

Postman will prompt you with suggestions as you enter text. Select one to autocomplete your code.

![Script autocomplete](https://assets.postman.com/postman-docs/v10/autocomplete-v10-21-3.gif)

You can add pre-request and test scripts to a collection, a folder, a request within a collection, or a request not saved to a collection.

## Execution order of scripts

In Postman, the script execution order for a single request looks like this:

* A pre-request script associated with a request will execute before the request is sent
* A test script associated with a request will execute after the request is sent

![Workflow for single request](https://assets.postman.com/postman-docs/req-resp.jpg)

For every request in a collection, scripts will execute in the following order:

* A pre-request script associated with a collection will run prior to every request in the collection.
* A pre-request script associated with a folder will run prior to every direct child request in the folder.
* A test script associated with a collection will run after every request in the collection.
* A test script associated with a folder will run after every direct child request in the folder.

![workflow for request in collection](https://assets.postman.com/postman-docs/execOrder.jpg)

For every request in a collection, the scripts will always run according to the same hierarchy. Collection-level scripts (if any) will run first, then folder-level scripts (if any), and then request-level scripts (if any). Note that this order of execution applies to both pre-request and test scripts.

For example, imagine you had the following collection structured with a single folder and two requests within the folder.

![Console log statement](https://assets.postman.com/postman-docs/v10/console-log-statement-v10-21-1.jpg)

If you created log statements in the pre-request and test script sections for the collection, folder, and requests, the execution order is returned in the [Postman Console](/docs/sending-requests/response-data/troubleshooting-api-requests/).

![Logs in the Console](https://assets.postman.com/postman-docs/v10/logs-in-console-v10-21-1.jpg)

### How it works

The [Postman Sandbox](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) is a JavaScript execution environment that's available to you while writing pre-request and test scripts for requests (both in Postman and Newman). Whatever code you write in these sections is executed in this sandbox.

> <img alt="Collections icon" src="https://assets.postman.com/postman-docs/Collections.png#icon" width="24px"> You can build conditional workflows using a collection, and branch and loop over a set of requests. To try out this collection template, select [Conditional workflow](https://www.postman.com/templates/78475d97-9a36-4731-ab24-9adf6a94d0fb/Conditional-workflow).

## Debugging scripts

Debugging scripts can be written under either the **Pre-request Script** tab or the **Tests** tab, with helpful messages logged in the [Postman Console](/docs/sending-requests/response-data/troubleshooting-api-requests/).
