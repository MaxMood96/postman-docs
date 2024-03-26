---
title: "Customize request order in a collection run"
updated: 2023-10-05
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Control Workflows with postman.setNextRequest() | Postman Level Up"
    url: "https://youtu.be/Oxsdv1VFRsE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "3 Ways to Build Workflows in Postman"
    url: "https://blog.postman.com/3-ways-to-build-workflows-in-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "WhatsApp uses workflows to incorporate automation for messages"
    url:  "https://www.postman.com/case-studies/whatsapp/"

---

Typically when you start a [collection run](/docs/collections/running-collections/intro-to-collection-runs/), Postman runs all requests in the same order they appear in your collection. Requests in folders are executed first, followed by any requests in the root of the collection.

In the Collection Runner, you have the option to change the order of the requests before starting a run. However, instead of manually changing the request order each time you run the collection, you can automate this behavior using the `postman.setNextRequest()` function.

As the name suggests, `postman.setNextRequest()` enables you to specify which request Postman runs next, following the current request. Using this function, you can build custom workflows that chain requests, running them one after the other in a specific order.

<img alt="Setting the next request" src="https://assets.postman.com/postman-docs/v10/set-next-request-v10-21-1.jpg">

## Contents

* [Setting the next request](#setting-the-next-request)
* [Looping over a request](#looping-over-a-request)
* [Stopping a workflow](#stopping-a-workflow)
* [Tips for building request workflows](#tips-for-building-request-workflows)
* [Next steps](#next-steps)

## Setting the next request

To specify the request to run next, add the following code on the **Tests** tab of a request. Replace `request_name` with the name of the request you want to run next.

```js
postman.setNextRequest("request_name");
```

Postman runs the specified request after completing the current request.

## Looping over a request

If you pass the name of the current request to the `setNextRequest` function, Postman will run the current request repeatedly.

<img alt="Looping over a request" src="https://assets.postman.com/postman-docs/v10/set-next-request-loop-v10-21-2.jpg">

> **Important!** Make sure to wrap `setNextRequest` in some extra logic so the request doesn't loop indefinitely. For example, you might exit the loop after a certain number of iterations or when another condition is met. Otherwise you will need to force close the Collection Runner to end the loop.

## Stopping a workflow

To stop a workflow, add the following code on the **Tests** tab of a request.

```js
postman.setNextRequest(null);
```

The collection run will stop after Postman completes the current request.

> You can also skip the execution of a request from the **Pre-request Script** tab using the `pm.execution.skipRequest` method. Learn more about [skipping request execution from pre-request scripts](/docs/writing-scripts/script-references/postman-sandbox-api-reference/#skip-request-execution-from-pre-request-scripts).

## Tips for building request workflows

Keep the following tips in mind when using the `postman.setNextRequest()` function.

### Use setNextRequest() when you run an entire collection

The `postman.setNextRequest()` is intended for use when running a collection using the Collection Runner, the Postman CLI, or Newman. It has no effect when you run a request using **Send**.

### Use setNextRequest() in pre-request or test scripts

You can use `postman.setNextRequest()` in the pre-request script or the test script of a request. If more than one value is assigned, the last value that's set takes precedence.

### Specify the next request using the request ID

Instead of specifying the name of the request to run next, you can provide the request ID. To find the request ID, open a request and select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. You can also get the request ID using the `pm.info.requestId` function (see [Scripting Workflows](/docs/writing-scripts/script-references/postman-sandbox-api-reference/#scripting-workflows)).

<img alt="Getting a request ID" src="https://assets.postman.com/postman-docs/v10/set-next-request-id-v10-1.jpg" width="428px">

### setNextRequest() always executes last

The `postman.setNextRequest()` function is always executed at the end of the current request. If you put other code blocks anywhere in the pre-request script or test script after this function, the code blocks will still execute before `postman.setNextRequest()`.

### setNextRequest() scope is limited to the collection

The scope of `postman.setNextRequest()` is the source of your collection run.

* If you run an entire collection, you can set any request in the collection as the next request, even requests inside folders.
* If you run a folder, the scope of `postman.setNextRequest()` is limited to that folder. In this case, you can set any request in the same folder as the next request, but not requests located in other folders or at the root of the collection.

Learn more about [running collections or folders](/docs/collections/running-collections/intro-to-collection-runs/).

## Next steps

After learning about how to build request workflows, you can write some scripts.

* To learn more about writing pre-request and test scripts, visit [Scripting in Postman](/docs/writing-scripts/intro-to-scripts/).
