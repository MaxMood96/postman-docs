---
title: "Postman scripting reference"
updated: 2024-01-19
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Write API Tests"
    url: "https://youtu.be/EVg6gxeiUd0"
  - type: link
    name: "Advanced API testing: Best Practices and Automation Techniques | Postman Intergalactic"
    url: "https://youtu.be/Ix6z1kBweuk"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Continuous API testing with Postman"
    url: "https://blog.postman.com/continuous-api-testing-with-postman/"
  - type: link
    name: "How to Test JSON Properties in Postman"
    url: "https://blog.postman.com/how-to-test-json-properties-in-postman/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Test examples in Postman"
    url: "https://www.postman.com/postman/workspace/test-examples-in-postman/overview"
---

Postman enables you to write your own test scripts, use predefined variables to generate sample data, and utilize JavaScript APIs to test your request and response data. Learn how to use the Postman scripting reference to extend your API testing functionality.

## Test examples

You can use test [script examples](/docs/writing-scripts/script-references/test-examples/) to write your own test scripts for requests, folders, and collections. Test scripts execute when Postman receives a response from the API you sent the request to. When you add tests to a folder or collection, they execute after each request inside it.

## Dynamic variables

Postman uses the [Faker](https://www.npmjs.com/package/@faker-js/faker) library to generate sample data, including random names, addresses, email addresses, and much more. You can use these predefined variables multiple times to return different values per request. Learn how to [use predefined variables](/docs/writing-scripts/script-references/variables-list/).

## Postman JavaScript APIs

Postman provides [JavaScript APIs](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) that you can use in your request scripts. The `pm` object provides functionality for testing your request and response data, with the `postman` object providing additional workflow control.
