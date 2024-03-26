---
title: "Authenticate with AWS Signature authentication workflow in Postman"
updated: 2023-05-30
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

AWS Signature is the authorization workflow for Amazon Web Services requests. AWS uses a custom HTTP scheme based on a keyed-HMAC (Hash Message Authentication Code) for authentication.

The official AWS Signature documentation provides more detail:

* [Signing and Authenticating REST Requests](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html)
* [Use Postman to Call an API](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-call-api.html)

To use AWS Signature, do the following:

1. In the __Authorization__ tab for a request, select __AWS Signature__ from the __Type__ dropdown list.

1. Select the location where Postman will append your AWS auth details using the __Add authorization data to__ dropdown list, choosing the request headers or URL.

    * If you select __Request Headers__, Postman will add `Authorization` and `X-Amz-` prefixed fields in the __Headers__ tab.
    * If you select __Request URL__, Postman will add the auth details in __Params__ with keys prefixed `X-Amz-`.

1. Enter your access key and secret values directly in the fields. For extra security, you can use [secret variables](/docs/sending-requests/variables/variables/#variable-types) for these values.

1. You can optionally set advanced fields, but Postman will autogenerate these if necessary.

The AWS Signature parameters are as follows:

* **AWS Region** - The region receiving the request (defaults to `us-east-1`).
* **Service Name** - The service receiving the request.
* **Session Token** - Required only when using temporary security credentials.
