---
title: "Authenticate with Akamai Edgegrid authentication in Postman"
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

Akamai EdgeGrid is an authorization helper developed and used by Akamai.

To use Akamai EdgeGrid, do the following:

1. In the __Authorization__ tab for a request, select __Akamai EdgeGrid__ from the __Type__ dropdown list.

1. Enter your __Access Token__, __Client Token__, and __Client Secret__, using variables for extra security—you will receive these details when you register a client application with Akamai.

> When the required details are complete in the __Authorization__ tab for your request, Postman will add them to the __Headers__.

For information on obtaining your credentials, see [Akamai Developer - Authorize your Client](https://techdocs.akamai.com/developer/docs/set-up-authentication-credentials).
