---
title: "Write API test scripts in Postman"
order: 43
page_id: "test_scripts"
updated: 2022-10-26
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Write API Tests"
    url: "https://youtu.be/EVg6gxeiUd0"
  - type: link
    name: "Testing APIs | Postman Enterprise"
    url: "https://youtu.be/-Nkvs69-LNE"
  - type: link
    name: "Advanced API testing: Best Practices and Automation Techniques | Postman Intergalactic"
    url: "https://youtu.be/Ix6z1kBweuk"
  - type: dynamic_blog
    name: "Blog posts"
    blog_tag: "testing"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "SEI Novus keeps data in sync with financial market changes using tests"
    url: "https://www.postman.com/case-studies/sei-novus/"
  - type: link
    name: "Visma reduces bug fixing time to under ten minutes with tests"
    url: "https://www.postman.com/case-studies/visma/"
  - type: link
    name: "Sling TV/ DISH Network use testing to identify integration issues"
    url: "https://www.postman.com/case-studies/sling/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Test examples in Postman"
    url: "https://www.postman.com/postman/workspace/test-examples-in-postman/overview"
warning: false

---

In this topic, you'll learn about the basics of testing in Postman, how to write and validate test scripts, and how to debug your tests.

## Contents

* [Testing in Postman](#testing-in-postman)
* [Add a test](#add-a-test)
    * [Add a test to gRPC requests](#add-a-test-to-a-grpc-request)
* [Write test scripts](#write-test-scripts)
    * [Validate responses](#validate-responses)
    * [Format test result messages with pm.expect](#format-test-result-messages-using-pmexpect)
* [Test collections and folders](#test-collections-and-folders)
* [Debug your tests](#debug-your-tests)
* [Write tests using Postbot](#write-tests-using-postbot)
* [Next steps](#next-steps)

## Testing in Postman

Some of the most common approaches to [API testing](https://www.postman.com/api-platform/api-testing/) are contract testing, unit testing, end-to-end testing, and load testing.

Tests confirm that your API is working as expected, that integrations between services are functioning reliably, and that any changes haven't broken existing functionality. You can write test scripts for your Postman API requests in JavaScript. You can also use test code to aid the debugging process when something goes wrong with your API project. For example, you might write a test to validate your API's error handling by sending a request with incomplete data or wrong parameters.

The **Pre-request Script** and **Tests** tabs use the Postman Sandbox, a runtime based on Node.js that enables you to add dynamic behavior to requests and collections.

The **Pre-request** tab enables you to do any processing needed before sending a request, like setting variable values. Any code here runs before the request is sent. To learn more, see [Write pre-request scripts](/docs/writing-scripts/pre-request-scripts/).

The **Tests** tab allows for any post-processing after a request is sent and includes the ability to write tests for assessing response data. The **Test tab** sandbox has the [Chai.js](https://www.chaijs.com/api/bdd/) library built in, so you can use Chai's behavior-driven development (BDD) syntax to create readable test assertions.

Open the side pane in either sandbox to view a list of test snippets. You can select one or more snippets to inject these pre-written blocks of code. Some will help you retrieve the data from variables, some are boilerplate tests, and some perform common utility functions.

Postman's AI assistant Postbot reduces the need to write boilerplate code for tests. Access Postbot from the the Postman footer or the Postbot icon <img alt="Postbot icon" src="https://assets.postman.com/postman-docs/v10/icon-postbot-v10-16.jpg#icon" width="18px"> in the test editor. As you start typing your tests, you get suggestions of common behaviors that you can test for. Postbot also examines the response to your request and any saved examples to generate relevant test code. Postbot has other features as well, like the visualization generator.

Postman also provides [templates](https://www.postman.com/templates/tags/1/Testing) that help you keep your API’s performance, quality, and stability in check.

## Add a test

You can add tests to individual [requests](/docs/sending-requests/create-requests/create-requests/), [collections](/docs/sending-requests/create-requests/intro-to-collections/), and folders in a collection. Postman includes code snippets you add and then change to suit your test logic.

To add tests to a request, open the request and enter your code in the **Tests** tab. Tests will execute after the request runs. The output is in the response's __Test Results__ tab.

![Request Test Tab](https://assets.postman.com/postman-docs/v10/request-test-tab-v10-19.jpg)

> <img alt="Collections icon" src="https://assets.postman.com/postman-docs/Collections.png#icon" width="24px"> See how to work with the Postman basic test syntax to test a single HTTP API request in a sample collection template. To try out this template, select [API testing basics](https://www.postman.com/templates/e9a37a28-055b-49cd-8c7e-97494a21eb54/API-testing-basics).

### Add a test to a gRPC request

1. Go to the **Scripts** tab in your gRPC request.
2. Select the execution hook (**Before invoke** or **After response**) to which you want to add a test.
3. Use snippets from the right pane to add a test or write customized assertions.

Both the execution hooks are available for all gRPC requests regardless of the method type being unary, client streaming, server streaming, or bidirectional streaming. Your scripts can include however many tests you need and will save along with the rest of your request when you select **Save**.

Tests are run when you select **Invoke**, either before or after the request is invoked. If you select **Cancel**, the request execution and any further script execution.

> If there are any errors in your Before invoke script, it will stop the request execution.

## Write test scripts

Test scripts can use dynamic variables, carry out test assertions on response data, and pass data between requests. In the __Tests__ tab for a request, enter your JavaScript manually or select __Snippets__ next to the code editor.

Tests execute after the response is received. When you select __Send__, Postman runs your test script after the response data returns from the API.

> If you need to execute code before a request runs, use [Pre-request Scripts](/docs/writing-scripts/pre-request-scripts/) instead. See [Intro to scripts](/docs/writing-scripts/intro-to-scripts/) for more on how your scripts execute when your requests run.

### Validate responses

To validate the data returned by a request, you can use the `pm.response` object in a test. Define tests using the `pm.test` function, providing a name and function that returns a boolean (`true` or `false`) value indicating if the test passed or failed. Use Chai.js BDD syntax and `pm.expect` in your assertions to test the response detail.

The first parameter for the `.test` function is a text string that will appear in the test result output. Use this to identify your tests, and communicate the purpose of a test to anyone viewing the results.

For example, enter the following in the __Tests__ tab of a request to test if the response status code is `200`:

```js
pm.test("Status test", function () {
    pm.response.to.have.status(200);
});
```

Select __Send__ to run your request and open __Test Results__ in the response section. The tab header displays how many tests passed and how many ran in total. You can also view the number of **Passed**, **Skipped**, and **Failed** test results.

If the request returned a `200` status code, the test passes. To find out what happens with a different status code, change the expected status code in your test script and run the request again.

### Format test result messages using pm.expect

Using the `pm.expect` syntax gives your test result messages a different format. Experiment with the alternatives to achieve the output you find most useful.

> Use the __Run in Postman__ button in the [Intro to writing tests collection](https://documenter.postman.com/view/1559645/RzZFCGFR?version=latest) to import templates containing some example test scripts into Postman and experiment with the code.

Your code can test the request [environment](/docs/sending-requests/variables/managing-environments/), as in the following example:

```js
pm.test("environment to be production", function () {
    pm.expect(pm.environment.get("env")).to.equal("production");
});
```

You can use different syntax variants to write your tests in a way that you find readable, and that suits your application and testing logic.

```js
pm.test("response should be okay to process", function () {
    pm.response.to.not.be.error;
    pm.response.to.have.jsonBody("");
    pm.response.to.not.have.jsonBody("error");
});
```

Your tests can establish validity of request responses using syntax that you tailor to the response data format.

```js
pm.test("response must be valid and have a body", function () {
     pm.response.to.be.ok;
     pm.response.to.be.withBody;
     pm.response.to.be.json;
});
```

Your scripts can include however many tests you need and will save along with the rest of your request detail when you select __Save__. If you share a collection, publish documentation, or use the **Run in Postman** button, your test code will be included for anyone who views or imports your templates.

## Test collections and folders

You can add test scripts to a collection, a folder, or a single request within a collection. A test script associated with a collection will run after every request in the collection. A test script associated with a folder will run after every direct child request in the folder. This enables you to reuse commonly executed tests after requests. The execution order for each request will be collection tests, folder tests and then request tests.

Adding scripts to collections and folders enables you to test the workflows in your API project. This helps to ensure that your requests cover typical scenarios, providing a reliable experience for application users.

You can update collection and folder scripts by selecting the view more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection or folder name, and selecting __Edit__. Choose the __Tests__ tab to add or update your script. You can also add collection scripts when you first create a collection.

When you [run a collection](/docs/collections/running-collections/intro-to-collection-runs/) the collection runner displays the test results, including the response time in milliseconds and details about whether a specific request in the collection passed or failed its tests.

![Collection Tests](https://assets.postman.com/postman-docs/v10/collection-tests-run-v10-19.jpg)

You can write scripts to control the order in which your requests run using [branching and looping](/docs/collections/running-collections/building-workflows/).

## Debug your tests

If you are having trouble with your tests:

* Check if there are any errors in your scripts. A red badge will highlight scripts with errors. You can also check the response section for specific errors.
* Debug your tests using the [log statements](/docs/sending-requests/response-data/troubleshooting-api-requests/#using-log-statements) to ensure that you are asserting on correct data.

## Write tests using Postbot

You can use plain language to tell Postbot what to do, and Postman uses artificial intelligence to generate test scripts for you. Use Postbot to add a new set of tests, visualize responses, save a field from a response, and fix your existing tests.

To write a test with Postbot, do the following:

1. Send your request so it has a response.
1. Select the **Tests** tab.
1. In the upper right corner of the test editor, select the Postbot icon <img alt="Postbot icon" src="https://assets.postman.com/postman-docs/v10/icon-postbot-v10-16.jpg#icon" width="18px">.
1. Enter your query as a simple text sentence, or select one of the suggested queries to tell Postbot what you need.

      <img alt="Postbot writing a test" src="https://assets.postman.com/postman-docs/v10/postbot-add-test-v10-21-11-2.gif" />

1. Select the play button. Postbot writes a test for you.

You can also use Postbot to autocomplete test code. If you have a response available and type `pm.test`, Postbot suggests tests for your request. Select a test name, and Postbot inserts the code to validate your response.

For more information on Postbot, visit [About Postbot](/docs/getting-started/basics/about-postbot/).

## Next steps

After writing tests in Postman, you could write more complex tests and use them with other Postman utilities.

* For more information about what you can do using the `pm` object, check out some test script [examples](/docs/writing-scripts/script-references/test-examples/) and visit the [Postman Sandbox API reference](/docs/writing-scripts/script-references/postman-sandbox-api-reference/).
* To learn how to use tests in conjunction with monitoring, which enables you to confirm that your API meets performance requirements, visit [Monitoring your APIs](/docs/monitoring-your-api/intro-monitors/).
* To learn how to [automate your testing](https://www.postman.com/api-platform/api-test-automation/) by integrating collection runs within your CI/CD configuration, visit [Integrating with Travis CI](/docs/collections/using-newman-cli/integration-with-travis/).
