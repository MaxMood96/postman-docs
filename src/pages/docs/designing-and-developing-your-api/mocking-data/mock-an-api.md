---
title: "Simulate your API in Postman with a mock server"
updated: 2023-12-27
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Mock Servers | The Exploratory"
    url: "https://youtu.be/n_7UUghLpco"
  - type: link
    name: "Dynamic Mock Behavior | Postman Level Up"
    url: "https://youtu.be/av7SZo9sZAE"
  - type: link
    name: "Workshop: Mock API Server Responses"
    url: "https://www.youtube.com/live/Adaw475mwTM?feature=share"
  - type: dynamic_blog
    name: "Blog posts"
    blog_tag: "mock-server"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "The Trevor Project uses mock servers to understand API responses early"
    url: "https://www.postman.com/case-studies/the-trevor-project/"
  - type: link
    name: "OVO accelerated integration implementation with mock servers"
    url: "https://www.postman.com/case-studies/ovo/"
---

A _mock server_ enables you to simulate your API without having to configure a real API server. You can use a Postman Collection to set up a mock server. When you send a request to the mock server, Postman returns a real-world response using data from your collection.

## Contents

* [Get started with mock servers in Postman](#get-started-with-mock-servers-in-postman)
* [Level up with step-by-step guides](#level-up-with-step-by-step-guides)
* [Learn how Postman mock servers work](#learn-how-postman-mock-servers-work)

## Get started with mock servers in Postman

Before you set up a new mock server, create a [collection](/docs/sending-requests/create-requests/intro-to-collections/) with the API requests you want to mock, then add [saved examples](/docs/sending-requests/response-data/examples/) to each request. The examples have the data you want the mock server to return in response to each request.

Once you have your collection, you're ready to [create a new mock server](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/). You can then [make calls to the mock server](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/#making-requests-to-mock-servers) from Postman or from a client application. The mock server simulates your API's behavior, enabling you to test your API or develop new functionality before your API is production ready.

> If needed, the mock server can [generate dynamic responses](/docs/designing-and-developing-your-api/mocking-data/creating-dynamic-responses/) using variables and templates, enabling you to better simulate real-world behavior.

## Level up with step-by-step guides

If you need more help setting up a mock server, follow the step-by-step guide to [mock your API using saved response examples](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/). You'll learn how to add requests and examples to your collection, then use the collection to configure and use a mock server.

If you want to automate your mock servers, follow the step-by-step guide to [set up mock servers using the Postman API](/docs/designing-and-developing-your-api/mocking-data/mock-with-api/). You'll learn how to use the Postman API to mock a collection and get the mock server URL.

## Learn how Postman mock servers work

When you send a request to a mock server, Postman uses an algorithm to choose the saved example that best matches the request. The mock server then returns a response using the data in the saved example.

[Dive deeper into the matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) and learn how to create examples so you always get the responses you expect from the mock server.
