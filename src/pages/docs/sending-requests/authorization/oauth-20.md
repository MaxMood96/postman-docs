---
title: "Authenticate with OAuth 2.0 authentication in Postman"
updated: 2022-12-12
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

With OAuth 2.0, you first retrieve an access token for the API, then use that token to authenticate future requests. Access tokens are typically short-lived, but the authorization server can also provide a long-lived refresh token. A client application can use the refresh token to automatically [refresh the access token](#refreshing-an-oauth-20-token).

## Contents

* [OAuth 2.0 overview](#oauth-20-overview)
* [Using OAuth 2.0](#using-oauth-20)
* [Specifying an authorization code](#specifying-an-authorization-code)
* [Specifying an authorization code with PKCE](#specifying-an-authorization-code-with-pkce)
* [Using implicit grant type](#using-implicit-grant-type)
* [Using password credentials](#using-password-credentials)
* [Using client credentials](#using-client-credentials)
* [Requesting an OAuth 2.0 token](#requesting-an-oauth-20-token)
* [Sharing an OAuth 2.0 access token](#sharing-an-oauth-20-access-token)
* [Changing the OAuth 2.0 token type](#changing-the-oauth-20-token-type)

## OAuth 2.0 overview

Accessing data with OAuth 2.0 varies greatly between API service providers, but typically involves a few requests back and forth between client application, user, and API. An example OAuth 2.0 flow could run as follows:

* A client application makes a request for the user to authorize access to their data.
* If the user grants access, the application then requests an access token from the service provider, passing the access grant from the user and authentication details to identify the client.
* The service provider validates these details and returns a short-lived access token and a long-lived refresh token.
* The client uses the access token to request the user data with the service provider.
* When the access token expires, the client can use the refresh token to automatically request a new access token.

## Using Oauth 2.0

To use OAuth 2.0, do the following:

1. In the __Authorization__ tab for a collection or request, select __OAuth 2.0__ from the __Type__ dropdown list. Specify if you want to pass the auth details in the request URL or headers.

   > By default Postman will append the access token to `Bearer` in the Authorization header for your request, but if your server implementation requires a different prefix, you can specify it in the __Header Prefix__ field.

1. To request an access token, fill out the fields in the __Configure New Token__ section, and select __Get New Access Token__. To use the token with your request or collection, select **Proceed** and then select **Use token**. The details you used to generate the token are saved with your request or collection. You can also [share the token](#sharing-an-oauth-20-access-token) so that others with access to the collection can use the token.

   > Once you have a token value generated and added, it will appear in the request __Headers__.

1. Enter the details for your client application, and any auth details from the service provider. This allows you to replicate your application auth flow inside Postman to test authenticated requests.

   > You can share token credentials with your team. Turn on the **Share token** toggle and then select **Sync Token**. By default Postman won't sync your token in case you don't want to share it.

1. Postman will prompt you to supply specific details depending on the OAuth 2.0 __Grant Type__, which can be [Authorization code](#specifying-an-authorization-code), [Implicit](#using-implicit-grant-type), [Password credentials](#using-password-credentials), or [Client credentials](#using-client-credentials).

## Specifying an authorization code

Authorization code grant type requires the user to authenticate with the provider—an authorization code is then sent back to the client app, extracted, and exchanged with the provider for an access token to authenticate later requests.

To use authorization code grant type, enter a __Callback URL__ for your client application (which needs to be registered with the API provider), together with various details provided by the API service including __Auth URL__, __Access Token URL__, __Client ID__, and __Client Secret__.

> If you are using the Postman desktop app, you can enter your auth details in your web browser instead of in Postman by selecting __Authorize using browser__.

## Specifying an authorization code with PKCE

You can use PKCE (Proof Key for Code Exchange) with OAuth 2.0. When you select __Authorization Code (With PKCE)__ two more fields will become available for __Code Challenge Method__ and __Code Verifier__. You can opt to use `SHA-256` or `Plain` algorithms to generate the code challenge. The verifier is an optional 43-128 character string to connect the authorization request to the token request.

> __Authorization code (With PKCE)__ grant type coupled with __Authorize using browser__ is recommended to prevent auth code interception attacks.

## Using implicit grant type

Implicit grant type returns an access token to the client without requiring the extra auth code step (and is therefore less secure).

To use implicit grant type with your requests in Postman, enter a __Callback URL__ you have registered with the API provider, the provider __Auth URL__, and a __Client ID__ for the app you have registered.

> If you are using the Postman desktop app, you can enter your auth details in your web browser instead of in Postman by selecting __Authorize using browser__.

## Using password credentials

OAuth 2.0 Password grant type involves sending username and password directly from the client and is therefore not recommended if you're dealing with third-party data.

To use password grant type, enter your API provider's __Access Token URL__, together with the __Username__ and __Password__. In some cases you will also need to provide a client ID and secret.

## Using client credentials

Client credentials grant type is typically not used to access user data but instead for data associated with the client application.

Enter the provider's __Access Token URL__, together with the __Client ID__ and __Client Secret__ for your registered application.

## Requesting an OAuth 2.0 token

The full list of parameters to request a new access token is as follows, depending on your grant type.

Under **Configure New Token**, enter details about the token:

* **Token Name** - The name you want to use for the token.
* **Grant Type** - A dropdown list of options. This will depend on the API service provider requirements.
* **Callback URL** - The client application callback URL to redirect to after auth. This must be registered with the API provider. If not provided, Postman will use a default empty URL and try to extract the code or access token from it. If this doesn't work for your API, you can use the following URL: `https://oauth.pstmn.io/v1/browser-callback`
    * **Authorize using browser** - > If you are using the Postman desktop app, you can enter your auth details in your web browser instead of in Postman by selecting __Authorize using browser__. When using the __Authorization code__ or __Implicit__ grant type, select this checkbox to set the __Callback URL__ to return to Postman. If you opt to authorize using your browser, make sure pop-ups are deactivated for the callback URL, otherwise it won't work.
* **Auth URL** - The endpoint for the API provider authorization server, to retrieve the auth code.
* **Access Token URL** - The provider's authentication server, to exchange an authorization code for an access token.
* **Client ID** - The ID for your client application registered with the API provider.
* **Client Secret** - The client secret given to you by the API provider.
* **Scope** - The scope of access you are requesting, which may include multiple space-separated values.
* **State** - An opaque value to prevent cross-site request forgery.
* **Client Authentication** - Send a Basic Auth request in the header, or client credentials in the request body. After upgrading to a new version, change the value here to avoid problems with client authentication.

Select **Advanced Options** to customize the token:

* **Refresh Token URL** - The endpoint for the refresh server, to exchange the refresh token for an access token. If empty, the refresh token URL will be the same as the access token URL.
* **Auth Request**, **Token Request**, and **Refresh Request** - Define any custom parameters you want to send with auth requests, token requests, or refresh requests. For each key-value pair you define, select an option to send the parameter in the request body, request URL, or request headers.
    * If you add multiple keys with same key name, they will be sent with the request as an array.
    * If you added resource or audience URIs in a previous version of Postman, you can import them as custom parameters. Select the **Audience and Resource** tab to review the resources and audiences, then select **Move Audience and Resource**. For all grant types except implicit, the parameters are added to the token request. For implicit grant types, the parameters are added to the auth request.

When the configuration is complete, select __Get New Access Token__. The configuration information is saved along with the access token and will be used every time the token is refreshed.

> When you use __Authorization code__ or __Implicit__ grant type, you will be prompted to supply your credentials to retrieve an access token to use in later requests. By default, Postman will display a pop-up window when you select __Request Token__. If you are using the Postman desktop app, you can instead choose to authenticate using your system's default web browser. Select __Authorize using browser__ to set the __Callback URL__ to return to Postman after you complete auth in the browser, so that your requests can use the token returned on successful authentication.

A token from the API includes its details, together with the expiration, and optionally a refresh token you can use to retrieve a new access token when your current one expires. Select **Proceed** and then select __Use Token__ to use the returned token.

Any successfully retrieved tokens will be listed in the request __Available Tokens__ dropdown list. Select one to send with your request. Select __Manage Tokens__ in the dropdown list to view more details or delete your tokens.

If authentication fails or times out, Postman will display an error message. You can check the error details in the Postman Console, __Retry__ to try authentication again, or edit your auth details before continuing.

> Deleting a token in Postman doesn't revoke access. Only the server that issues the token can revoke it.

### Refreshing an OAuth 2.0 token

Before an OAuth 2.0 token generated in Postman expires, Postman automatically refreshes it in the background before you send a request that uses it. The refreshed access token is updated in any requests that it's used in. If you added any custom parameters when [generating the token](#requesting-an-oauth-20-token), those parameters will also be used for the refreshed token.

Auto-refreshing is the default behavior. To turn this feature off or on, select **Auto-refresh access token**. To manually refresh a token, select **Refresh**. The token's expiration time displays if the token expires within the next day.

Auto-refresh is available when a refresh token is present. If no refresh token is present, the **Auto-refresh access token** toggle and the manual **Refresh** option aren't available. To check if a refresh token is present, select **Manage Tokens** in the **Token** dropdown list. If a refresh token is not present, check with the authorization service. Postman can't refresh the access tokens without the refresh token.

<img alt="Auto-refresh an OAuth 2.0 access token" src="https://assets.postman.com/postman-docs/v10/authorization-oauth2-auto-refresh-v10.jpg" width="500px"/>

> You can use auto-refresh when manually sending the request. Auto-refresh isn't used for scheduled runs or monitors for the same collection.

## Sharing an OAuth 2.0 access token

To enable other Postman users to view and use an OAuth 2.0 access token, select **Share access token**.

<img alt="Share an OAuth 2.0 access token" src="https://assets.postman.com/postman-docs/v10/authorization-oauth2-share-v10.jpg" width="500px"/>

To revoke other users' access to a synced token, do the following:

1. Turn **Share access token** off.
1. Select **Remove Synced Token**.

After you revoke access, other users with access to the request won't be able to see or use the token.

## Changing the OAuth 2.0 token type

Postman supports using access tokens or ID tokens for OAuth 2.0 authorization. An _access token_ enables an OAuth client to make calls to an API. An _ID token_ contains information about the authenticated user. This information can be used by an OAuth client to customize their experience.

If an ID token is present, you can select the token type (**Access token** or **ID token**) in the **Use Token Type** dropdown list. If no ID token is present, this dropdown list isn't available. To check if an ID token is present, select **Manage Tokens** in the **Token** dropdown list.

<img alt="Change the OAuth 2.0 token type" src="https://assets.postman.com/postman-docs/v10/authorization-oauth2-token-type-v10.jpg" width="500px"/>
