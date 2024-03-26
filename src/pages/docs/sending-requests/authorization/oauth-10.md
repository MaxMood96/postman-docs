---
title: "Authenticate with OAuth 1.0 authentication in Postman"
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

OAuth 1.0 enables client applications to access data provided by a third-party API. For example, as a user of a service, you can grant another application access to your data with that service without exposing details like your username and password. Accessing user data with OAuth 1.0 involves a few requests back and forth between client application, user, and service provider.

OAuth 1.0 is sometimes referred to as "two-legged" (auth only between client and server) or "three-legged" (where a client requests data for a user of a third-party service). An example OAuth 1.0 flow could run as follows:

* To request user data with a third-party service, a consumer (client application) requests an access token using credentials such as a key and secret.
* The service provider issues an initial token (that doesn't provide access to user data) and the consumer requests authorization from the user.
* When the user grants auth, the consumer makes a request to exchange the temporary token for an access token, passing verification from the user auth.
* The service provider returns the access token and the consumer can then make requests to the service provider to access the user's data.

> Postman supports [OAuth Core 1.0 Revision A](https://oauth.net/core/1.0a/).

To use OAuth 1.0, do the following:

1. In the __Authorization__ tab for a request, select __OAuth 1.0__ from the __Type__ dropdown list.

1. Select a __Signature Method__ from the dropdown list. This will determine which parameters to include with your request. Postman supports `HMAC-SHA1`, `HMAC-SHA256`, `HMAC-SHA512`, `RSA-SHA1`, `RSA-SHA256`, `RSA-SHA512`, and `PLAINTEXT`.

   * If your server requires an `HMAC` or `PLAINTEXT` signature, Postman will provide __Consumer Key__, __Consumer Secret__, __Access Token__, and __Token Secret__ fields.
   * If you're using an `RSA` signature, Postman will present __Consumer Key__, __Access Token__, and __Private Key__ inputs.

1. You can optionally set advanced details—otherwise Postman will try to autocomplete these.

1. You can include the auth details either in the request headers or in the body / URL. Select one from the **Add authorization to** dropdown list. Open the __Headers__ or __Body__ tab if you want to check how the details will be included with the request.

If you send the OAuth 1.0 data in the headers, an Authorization header sending your key and secret values is appended to the string `OAuth` together with additional comma-separated required details.

> Postman will append the OAuth 1.0 information to the request __Headers__ when you have completed all required fields in your __Authorization__ setup.

If you send the OAuth 1.0 data in the body and URL, the data is added either in the request __Body__ or __Parameters__ depending on the request method.

If the request method is `POST` or `PUT`, and if the request body type is `x-www-form-urlencoded`, Postman will add the authorization parameters to the request body. Otherwise, for example in a `GET` request, your key and secret data will be passed in the URL query parameters.

The OAuth 1.0 auth parameter values are as follows:

* **Signature Method** - The method your API uses to authenticate requests.
* **Consumer Key** - A value used to identify a consumer with the service provider.
* **Consumer Secret** - A value used by the consumer to establish ownership of the key. (For `HMAC` and `PLAINTEXT` signing methods.)
* **Access Token** - A value representing the consumer's permission to access the user's data.
* **Token Secret** - A value used by the consumer to establish ownership of a given token. (For `HMAC` and `PLAINTEXT` signing methods.)
* **Private Key** - A private key to generate the auth signature. (For `RSA` signing methods.)
* Advanced Parameters:
    * **Callback URL** - URL service provider will redirect to following user authorization. (Required if your server uses OAuth 1.0 Revision A.)
    * **Verifier** - Verification code from service provider after user auth.
    * **Time Stamp** - The timestamp the server uses to prevent replay attacks outside the time window.
    * **Nonce** - A random string generated by the client.
    * **Version** - The version of the OAuth authentication protocol (1.0).
    * **Realm** - A string specified by the server in the `WWW-Authenticate` response header.
    * **Include body hash** - Hash for integrity check with request bodies _other than_ `application/x-www-form-urlencoded`. (Deactivated when you're using callback URL / verifier.)

> If your server implementation of OAuth 1.0 requires it, select __Add empty parameters to signature__.
>
> You can also select the checkbox to __Encode the parameters in the authorization header__ for your request.
