---
title: "Sign in to an SSO team"
updated: 2023-12-15
---

> **[SSO is available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)**

When your [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) has enabled single sign-on (SSO) for Postman, you can sign in to Postman with a [configured identity provider (IdP)](/docs/administration/sso/intro-sso/#identity-providers-supported).

Your Team Admin can share a **Login URL** that was generated during the SSO configuration. The **Login URL** will automatically redirect you to your configured IdP.

## Signing in to Postman with SSO

To [sign in to Postman](/docs/getting-started/installation/postman-account/#signing-in-to-postman) using the Postman desktop app, select **Sign In** in the upper-right corner or select **Home** in the upper-left corner, then **Sign In**. You can also go to [Postman's website](https://www.postman.com/) and select **Sign In** in the upper-right corner of the page.

When you sign in using the Postman desktop app, the app will open a new screen that directs you to sign in from your browser. Your default browser will automatically open a webpage asking you to sign in to Postman.

> Your browser will open within a few seconds. If it doesn't, select **open it manually** or **copy the URL** in Postman. <img src="https://assets.postman.com/postman-docs/v10/sign-in-with-web-browser-v10-2.jpg" alt="Sign in with web browser"/>

<!-- -->

> You must finish signing in within five minutes once you start the process from Postman. If you go beyond this time, you must return to Postman and restart the sign in process.

To sign in to Postman with SSO, do the following:

1. On the sign in page, select **Sign in with SSO**.

    <img src="https://assets.postman.com/postman-docs/v10/sign-in-v10.21.jpg" alt="Sign in" width="350px"/>

1. Enter the team domain, then select **Continue**.

    > Select **Stay signed in** if you want to remain signed in until you are inactive for 30 days or until you reach the maximum session duration your team has configured. Clear the checkbox if you don't want to remain signed in on the computer you're working on. Note that Postman will prompt you to sign in again after 30 minutes.

    <img src="https://assets.postman.com/postman-docs/v10/sign-in-sso-v10.21.jpg" alt="Sign in with SSO" width="350px"/>

1. Select the authentication method you want to sign in with.

1. Postman will redirect you to the configured IdP. Enter your SSO details to sign in.

    > When you sign in to Postman with SSO for the first time, and use an email address associated with an existing account, you may need to link your identity provider (IdP) account to Postman. This is required if your email address doesn't use a domain or subdomain that your organization has [verified](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/). Sign in using SSO and follow the steps to [link your IdP account to Postman](/docs/getting-started/installation/postman-account/#linking-your-account-to-postman).

> If you're a member of multiple Postman teams with varying authentication methods, you must sign in to those teams separately. To do so, select your avatar in the upper-right corner, then select the team to proceed.
