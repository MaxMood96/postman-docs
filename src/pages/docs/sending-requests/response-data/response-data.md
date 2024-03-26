---
title: "Work with API response data and cookies in Postman"
updated: 2024-02-07
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "How to Inspect API Responses"
    url:  "https://youtu.be/31wBZyBdbgw"
  - type: link
    name: "Review Test Results in Postman | The Exploratory"
    url: "https://youtu.be/S3GKLTVRtmE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to review Postman test results"
    url: "https://blog.postman.com/how-to-review-postman-test-results/"
---

An _API response_ is the data returned by an API server after it receives a request from a client. You can use Postman to inspect response data, create visualizations, and troubleshoot problems. You can also save responses as examples for reference, and view and manage any associated cookies.

## Contents

* [View and save responses](#view-and-save-responses)
* [Save examples](#save-examples)
* [Manage cookies](#manage-cookies)
* [Debug requests](#debug-requests)

## View and save responses

When you send an API request, Postman displays the response from the API server. You can [view the response details](/docs/sending-requests/response-data/responses/) in the response viewer, including the response code, response body, and headers. You can also [use the Postman Visualizer](/docs/sending-requests/response-data/visualizer/) to create rich graphic visualizations of the response data.

## Save examples

An example is a request and related response that demonstrates how an API endpoint can be used. You can [create an example](/docs/sending-requests/response-data/examples/) by saving a response or creating it from scratch. Examples are included in your API documentation, and you can also use them to set up a mock server.

## Manage cookies

Websites use cookies to save a user's session information and personalize page content for that user. You can [use Postman's cookie manager](/docs/sending-requests/response-data/cookies/) to view cookies for different domains and send cookies with API requests. You can create cookies from scratch, or [capture cookies](/docs/sending-requests/capturing-request-data/capture-overview/) using the Postman proxy or Postman Interceptor.

## Debug requests

Postman provides tools to help you [debug your API requests](/docs/sending-requests/response-data/troubleshooting-api-requests/) and correct any problems. As you create your request, Postman highlights any invalid characters. After you send your request, you can check the Postman Console to view and troubleshoot any errors.
