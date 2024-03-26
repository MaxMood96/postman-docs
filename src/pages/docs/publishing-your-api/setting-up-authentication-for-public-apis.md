---
title: "Set up authentication for public APIs in Postman"
updated: 2023-10-13
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Set Up Authorization for Your Public Apis"
    url: "https://youtu.be/u-FyOBgIB0c"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Announcing easier API authentication in Postman"
    url: "https://blog.postman.com/easier-api-authentication-in-postman/"
---

You can onboard your API consumers quickly and efficiently by setting up API authentication for your public APIs in Postman. This feature enables you to communicate the steps users need to take to successfully make their first request to your API, such as registering for a developer account or creating an app on your dashboard. When a user creates a request to your API, Postman will automatically recognize it requires authentication and prompt them with your provided steps to set it up.

<img alt="Postman API set up new authorization" src="https://assets.postman.com/postman-docs/v10/easy-auth-flow-v10-2.gif"/>

## Contents

* [Setting up API authentication](#setting-up-api-authentication)
* [Verifying your domain](#verifying-your-domain)

## Setting up API authentication

Go to the [API authorization dashboard](https://go.postman.co/settings/team/api-authentication) to set up API authentication for your public APIs. Select **Team > Team Settings**, then select **Set up API authorization** in the left sidebar. You can also select **API Network > Public API Network** in the Postman header to open your public profile, then select **Set up API authorization**.

Postman supports [Bearer Token](/docs/sending-requests/authorization/authorization-types/#bearer-token), [Basic Auth](/docs/sending-requests/authorization/authorization-types/#basic-auth), [API Key](/docs/sending-requests/authorization/authorization-types/#api-key), and [OAuth 2.0](/docs/sending-requests/authorization/oauth-20/) authorization.

The following example shows you how to configure API authentication for an API that uses OAuth 2.0:

1. Enter the base URL of your API. You'll need to [verify it](#verifying-your-domain) later to enable authorization.
1. Select **OAuth 2.0** as the authorization type.
1. Select **Authorization code** as the grant type. You can learn more about [specifying an authorization code](/docs/sending-requests/authorization/oauth-20/#specifying-an-authorization-code).

    <img alt="Enter grant type" src="https://assets.postman.com/postman-docs/v10/enter-grant-type-v10.16.jpg"/>

1. Select **Generate Callback URL**. Copy the URL and add it to the allow list in your application’s settings.

    <img alt="Generate callback URL" src="https://assets.postman.com/postman-docs/v10/generate-callback-url-v10.16.jpg"/>

1. Enter the access token URL. This URL is the endpoint for your authentication server and will be used to obtain an access token.
1. Enter the authorization URL. This is where users will be sent to authenticate with your API.
1. Enter the application client ID for the application you created for this integration.
1. Enter the application client secret for the application you created for this integration.
1. (Optional) Enter a comma-separated list of authentication scopes to restrict what Postman users can access. For example, `read:public_key, write:org`.
1. Select if client credentials should be sent as a Basic Auth header or in the request body.
1. (Optional) Select **Advanced settings** to add a refresh token URL or parameters to different types of requests. If the refresh token URL is empty, the access token URL will be used.
1. Add any prerequisite steps users must take to successfully make a request to your API. This could include steps like registering for a developer account, creating an integration, or copying a token. This will be shown to users when they create a request to your API and will guide them through setting up authentication.

    <img alt="Describe steps for users to take" src="https://assets.postman.com/postman-docs/v10/describe-prereq-steps-for-users-v10.16.jpg"/>

    > You can use basic Markdown syntax for bold, italics, underline, bullet points, and links to structure your content.

1. [Verify your domain](#verifying-your-domain) to complete adding authorization.
1. Select **Save** to save your API authorization settings.

<img alt="Set up API authentication" src="https://assets.postman.com/postman-docs/v10/set-up-api-auth-v10-2.jpg"/>

## Verifying your domain

You must verify your domain for your API authentication configuration to share it with the Postman community.

1. Select **Generate TXT Record**.
1. Select the copy icon <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to copy the TXT Record.

    <img alt="Verify domain for API authentication" src="https://assets.postman.com/postman-docs/v10/domain-verification-v10-2.jpg"/>

1. Add the copied value to your domain as a DNS TXT record.

    ![Adding a TXT record](https://assets.postman.com/postman-docs/v10/custom-domains-add-txt.jpg)

1. Select **Verify Domain** in Postman to confirm. After your domain is verified, Postman will recognize newly created requests to your API and prompt users to authenticate through the steps you've provided.
