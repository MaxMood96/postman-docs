---
title: "API authentication and authorization in Postman"
updated: 2024-02-06
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Authorize a Request"
    url: "https://youtu.be/7t9AB9Opprs"
  - type: link
    name: "How to Use JWT Authorization"
    url: "https://youtu.be/dLxCpd3IGys"
  - type: link
    name: "Set Up Authorization for Your Public Apis"
    url: "https://youtu.be/u-FyOBgIB0c"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Announcing easier API authentication in Postman"
    url: "https://blog.postman.com/easier-api-authentication-in-postman/"
  - type: link
    name: "OAuth 2.0 just got easier: introducing token refresh and ID token support"
    url: "https://blog.postman.com/oauth-2-0-token-refresh-and-id-token-support/"
  - type: link
    name: "New custom parameters for OAuth 2.0 token generation in Postman"
    url: "https://blog.postman.com/custom-parameters-oauth-2-token-generation-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Intuit uses Postman's authentication protocols"
    url: "https://www.postman.com/case-studies/intuit/"
---

Postman enables you to send auth details with your API requests. APIs use authentication and authorization to ensure that client requests access data securely. Authentication involves verifying the identity of the request sender, while authorization confirms that the sender has permission to carry out the endpoint's operation.

If you're building an API, you can choose from a variety of auth models. If you're integrating with a third-party API, the required authorization will be specified by the API provider.

> <img alt="Collections icon" src="https://assets.postman.com/postman-docs/Collections.png#icon" width="24px"> Try out examples of different types of authorization in a collection template that's ready to be modified to fit your use case. To try out this template, select [Authorization methods](https://www.postman.com/templates/31a9a6ed-4cdf-4ced-984c-d12c9aec1c27/Authorization-methods).

## Contents

* [Authentication in Postman](#authentication-in-postman)
* [Request authorization in Postman](#request-authorization-in-postman)

## Authentication in Postman

Some APIs require establishing a client's identity with a digital certificate. You can add your certificate authority (CA) or client certificates to Postman so you can access APIs that require authentication. To learn more, go to [Add and manage CA and client certificates in Postman](/docs/sending-requests/authorization/certificates/).

## Request authorization in Postman

You can pass auth details along with any request you send in Postman. Auth data can be included in the header, body, or as parameters of a request. If you enter your auth details in the __Authorization__ tab of a request, Postman will automatically populate the relevant parts of the request for your chosen auth type. You can use variables and collections to store authorization details, enabling you to reuse the same information in multiple places.

Go to the following topics to learn more about request authorization in Postman:

* Use the **Authorization** tab of a request or collection to select an auth type and complete relevant details. To learn more, go to [Add API authorization details to requests in Postman](/docs/sending-requests/authorization/specifying-authorization-details/). For more details on each authorization type you can use, go to [Authorization types supported by Postman](/docs/sending-requests/authorization/authorization-types/).
* When you create a request to a supported public API, Postman will give you the option to automatically set up authorization. To learn more, go to [Set up authorization for public APIs in Postman](/docs/sending-requests/authorization/authentication-for-public-apis/).
* Some APIs enable you to send authentication details as query parameters. Also, Postman may automatically add headers to your request based on your auth setup. To learn more, go to [Send parameters and body data with API requests in Postman](/docs/sending-requests/create-requests/parameters/) or [Configure headers for API requests in Postman](/docs/sending-requests/create-requests/headers/).
* If you have session cookies in your browser, you can sync them to Postman using Postman Interceptor. To learn more, go to [Capture traffic from a web browser using Postman Interceptor](/docs/sending-requests/capturing-request-data/interceptor/) and [Create and capture cookies using Postman’s cookie manager](/docs/sending-requests/response-data/cookies/).
* If you're having issues getting a request to authenticate and run, review the tips in [Debug API requests using the Postman Console](/docs/sending-requests/response-data/troubleshooting-api-requests/). If you still have auth problems, check out the [authentication tag](https://community.postman.com/tags/authentication) on the Postman forum.
