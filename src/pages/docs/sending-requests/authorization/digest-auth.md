---
title: "Authenticate with Digest access authentication in Postman"
updated: 2023-05-26
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

With Digest auth, the client sends a first request to the API, and the server responds with a few details, including a number that can be used only once (a _nonce_), a realm value, and a `401` unauthorized response. You then send back an encrypted array of data including a username and password combined with the data received from the server in the first request. The server uses the passed data to generate an encrypted string and compares it against what you sent to authenticate your request.

In the __Authorization__ tab for a request, select __Digest Auth__ from the __Type__ dropdown list. Postman will present fields for both stages of authentication request. It will autocomplete the fields for the second request in the **Advanced** section using data returned from the server by the first request. To enable Postman to automate the flow, enter __Username__ and __Password__ values (or variables) and these will be sent with the second request.

> If you don't want Postman to automatically extract the data, select **Yes, disable retrying the request** in the left column. If you do this, you will need to complete the advanced fields and run each request manually.

Setting the fields in the **Advanced** section is optional. Postman will populate them automatically when your first request runs.

* **Realm** - A string specified by the server in the `WWW-Authenticate` response header.
* **Nonce** - A unique string specified by the server in the `WWW-Authenticate` response header.
* **Algorithm** - A string that indicates a pair of algorithms used to produce the digest and a checksum. Postman supports `MD5` and `SHA` algorithms.
* **qop** - The quality of protection applied to the message. The value must be one of the options specified by the server in the `WWW-Authenticate` response header.
* **Nonce Count** - The hexadecimal count of the number of requests (including the current request) that the client has sent with the nonce value in this request.
* **Client Nonce** - An opaque quoted string value provided by the client, used by both client and server to avoid chosen plaintext attacks, to provide mutual authentication, and to provide some message integrity protection.
* **Opaque** - A string of data specified by the server in the `WWW-Authenticate` response header, which will be used unchanged with URIs in the same protection space.
