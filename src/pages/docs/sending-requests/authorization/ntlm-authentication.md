---
title: "Authenticate with Windows NTLM authentication in Postman"
updated: 2022-12-12
search_keyword: "WWW-Authenticate, x-www-form-urlencoded"
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

Windows Challenge/Response (NTLM) is the authorization flow for the Windows operating system and for standalone systems.

To use NTLM authentication, do the following:

1. In the __Authorization__ tab for a request, select __NTLM Authentication__ from the __Type__ dropdown list.

1. Enter your __Username__ and __Password__ for NTLM access (use variables to avoid entering the values directly). You can optionally specify advanced parameters, but Postman will try to autocomplete these if necessary. By default your request will run a second time after extracting data received from the first. You can turn off this behavior by selecting the checkbox.

Advanced parameters for NTLM auth are as follows:

* **Domain** - The domain or host to authenticate against.
* **Workstation** - The hostname of the PC.
