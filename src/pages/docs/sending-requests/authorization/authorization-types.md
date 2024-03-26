---
title: "Authorization types supported by Postman"
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
    name: "What is an API key?"
    url: "https://blog.postman.com/what-is-an-api-key/"
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

Several types of authorization are supported by Postman. Select a type from the **Type** dropdown list on the **Authorization** tab of a request. You can choose an authorization type on requests, collections, or folders.

## Contents

* [No auth](#no-auth)
* [API key](#api-key)
* [Bearer token](#bearer-token)
* [JWT bearer](#jwt-bearer)
* [Basic auth](#basic-auth)
* [Digest auth](/docs/sending-requests/authorization/digest-auth/)
* [OAuth 1.0](/docs/sending-requests/authorization/oauth-10/)
* [OAuth 2.0](/docs/sending-requests/authorization/oauth-20/)
* [Hawk authentication](/docs/sending-requests/authorization/hawk-authentication/)
* [AWS Signature](/docs/sending-requests/authorization/aws-signature/)
* [NTLM authentication](/docs/sending-requests/authorization/ntlm-authentication/)
* [Akamai EdgeGrid](/docs/sending-requests/authorization/akamai-edgegrid/)
* [ASAP (Atlassian)](/docs/sending-requests/authorization/atlassian/)

### No auth

Postman won't send authorization details with a request unless you specify an auth type. If your request doesn't require authorization, select __No Auth__ from the __Authorization__ tab __Type__ dropdown list.

### API key

With API key auth, you send a key-value pair to the API either in the request headers or query parameters. In the request __Authorization__ tab, select __API Key__ from the __Type__ list. Enter your key name and value, and select either __Header__ or __Query Params__ from the __Add to__ dropdown list. You can store your values in variables for extra security.

[![API Key Auth](https://assets.postman.com/postman-docs/api-key-auth-selection-v9.jpg)](https://assets.postman.com/postman-docs/api-key-auth-selection-v9.jpg)

Postman will append the relevant information to your request __Headers__ or the URL query string.

### Bearer token

Bearer tokens enable requests to authenticate using an access key, such as a JSON Web Token (JWT). The token is a text string, included in the request header. In the request __Authorization__ tab, select __Bearer Token__ from the __Type__ dropdown list. In the __Token__ field, enter your API key value. For added security, store it in a variable and reference the variable by name.

Postman will append the token value to the text `Bearer` in the required format to the request Authorization header as follows:

```shell
Bearer <Your API key>
```

> If a custom prefix is needed, use an [API Key](#api-key) with a key of __Authorization__.

### JWT bearer

Postman also supports generating JWT bearer tokens to authorize requests. You can enter a payload in an editor, and JWT tokens are generated and added to the request. In the request __Authorization__ tab, select __JWT Bearer__ from the __Type__ dropdown list.

* **Add JWT token to** -  Select **Request Header** or **Query Param** to specify how the JWT token will be added to your request.
* **Algorithm** - Select an algorithm to use for the JWT token. Supported algorithms include:

    * **HS** - HMAC with SHA
    * **RS** - RSA (RSASSA-PKCS1-v1_5) with SHA
    * **ES** - ECDSA with SHA
    * **PS** - RSA (RSASSA-PSS) with SHA

* **Secret** - The secret that’s used with the HMAC-SHA algorithm.
* **Secret Base64 encoded** - If the secret is encoded in the base-64 format.
* **Private key** - The private key for signing the token for RS, ES, and PS algorithms. Select **Select file** to upload a private key in PKCS #8 format.

* **Payload** - Enter the payload data for your JWT token, in JSON format.

In the Advanced configuration section, you can also configure the following items. If you don't configure them, they are generated automatically.

* **Header prefix** - An optional prefix to use at the start of headers. This header prefix is part of the request and not a part of JWT.

* **Headers** - Any custom headers you also want to send in the JWT token. Headers pertaining to the selected algorithm are automatically added.

### Basic auth

Basic authentication involves sending a verified username and password with your request. In the request __Authorization__ tab, select __Basic Auth__ from the __Type__ dropdown list.

Enter your API username and password in the __Username__ and __Password__ fields. For extra security, store these in variables.

In the request __Headers__, the Authorization header passes the API a Base64 encoded string representing your username and password values, appended to the text `Basic` as follows:

```shell
Basic <Base64 encoded username and password>
```
