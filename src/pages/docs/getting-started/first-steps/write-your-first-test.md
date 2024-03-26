---
title: "Write your first test"
updated: 2023-07-26
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Part 1: Send a Request"
    url: "https://youtu.be/2oOSnxZ28fA"
  - type: link
    name: "How to use an API? | Intro to APIs Part 2"
    url:  "https://youtu.be/woRuedXZyi4"
  - type: link
    name: "Postman Student Programs - Finding the right API for the job"
    url:  "https://youtu.be/d6abDKrGFYU"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "What is an API endpoint?"
    url: "https://blog.postman.com/what-is-an-api-endpoint/"
  - type: link
    name: "First 5 Things to Try If You’re New to Postman"
    url: "https://blog.postman.com/postman-first-5-things-to-try/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "30 days of Postman for developers"
    url:  "https://www.postman.com/postman/workspace/30-days-of-postman-for-developers/overview"
  - type: subtitle
    name: "Postman Academy"
  - type: link
    name: "API Beginner Learning Path"
    url:  "https://academy.postman.com/path/api-beginner"
---

_API tests_ are a way to ensure that your API is behaving as you expect it to. For example, you might write a test to validate your API's error handling by sending a request with incomplete data or wrong parameters. You can write test scripts for your Postman API requests in JavaScript and add them to individual [requests](/docs/sending-requests/create-requests/create-requests/), [collections](/docs/sending-requests/create-requests/intro-to-collections/), and folders in a collection. Postman includes code snippets you can add and then change to suit your test logic.

To write a test, do the following:

1. Go to the request you made in [sending your first request](/docs/getting-started/first-steps/sending-the-first-request/).

1. In the request, go to the **Tests** tab.

1. In the snippet section to the right, select the snippet **Status code: Code is 200**. This will enter the following test code:

    ```javascript
    pm.test("Status code is 200", function () {
        pm.response.to.have.status(200);
    });
    ```

1. Select **Send**.

After the request runs, the test will run. Go to the **Test Results** section of the response to review the results of your test.

To learn more about writing tests, go to [Writing tests](/docs/writing-scripts/test-scripts/).
