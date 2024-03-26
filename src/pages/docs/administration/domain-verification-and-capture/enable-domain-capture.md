---
title: "Enable domain capture in Postman"
updated: 2023-10-03
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Domain Capture: Group Your Organization’s Postman Users into a Single Team"
    url: "https://blog.postman.com/introducing-domain-capture/"
---

> **[Domain capture is available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

As a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can enable domain capture after you've completed its [prerequisites](/docs/administration/domain-verification-and-capture/domain-capture-overview/#prerequisites-for-domain-capture), including [adding and verifying a domain](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/). Domain capture will move all of the existing users who are associated with your verified domain or subdomain to your Enterprise team. Moving forward, any Postman users who sign up for a new account with the relevant domain will be automatically added to your team.

Your team must have only SAML-based SSO authentication methods enabled to turn on domain capture. Alternative authentication methods, such as Postman or Google sign in, must be [turned off](/docs/administration/sso/admin-sso/#editing-sso-settings).

To enable domain capture, navigate to the [domain dashboard](https://go.postman.co/settings/team/domain-capture) and [create a request to claim accounts](#claim-verified-accounts) associated with the verified domain. When the request is approved, Team Admins can work with Postman support to [manage accounts associated with the verified domain](#contact-support-to-manage-accounts).

## Contents

* [View unclaimed accounts](#view-unclaimed-accounts)

* [Claim verified accounts](#claim-verified-accounts)

    * [Contact support to manage accounts](#contact-support-to-manage-accounts)

    * [User experience](#user-experience)

* [Domain capture support and FAQs](#domain-capture-support-and-faqs)

## View unclaimed accounts

Team Admins can view unclaimed accounts in the [domain dashboard](https://go.postman.co/settings/team/domain-capture). Unclaimed accounts are accounts associated with a verified domain and aren't yet part of your team. You can view unclaimed accounts before enabling domain capture. When you're ready to enable domain capture, [create a request to claim verified accounts](#claim-verified-accounts).

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar, then select the **Domains** tab.
1. Select **Manage** next to the domain with the **VERIFIED** status you want to view unclaimed accounts for, and then select **View Accounts**.

    > Optionally, you can select the number of unclaimed accounts next to the domain in the domain dashboard.

1. View the list of accounts not part of your team.

    <img alt="View unclaimed accounts" src="https://assets.postman.com/postman-docs/v10/view-unclaimed-accounts-v10.jpg" width="450px"/>

1. Optionally, you can select **Export CSV** to export the list as a CSV file. You will receive an email containing the download link.

## Claim verified accounts

Team Admins can create a request with Postman support to claim verified accounts associated with a [verified domain](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/). Domain capture is enabled once the request is approved. Then you can work with Postman support to [manage unclaimed accounts](#contact-support-to-manage-accounts). Before you enable domain capture, you can [view unclaimed accounts](#view-unclaimed-accounts).

> Learn more about [the user experience after domain capture is enabled](#user-experience) for your team.

To enable domain capture, do the following:

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar, then select the **Domains** tab.
1. Select **Manage** next to the domain with the **VERIFIED** status you want to enable domain capture for.
1. Select **Request To Claim**. Postman support will then contact Team Admins to explain the effects of enabling domain capture.
1. Once the request is approved, a notification will display towards the top of the screen explaining that **Account Capture has been enabled**. You can [contact Postman support to manage unclaimed accounts](#contact-support-to-manage-accounts).

    ![Domain capture enabled](https://assets.postman.com/postman-docs/v10/domain-capture-enabled-v10.jpg)

To view the status of your request to enable domain capture, select **Manage** next to the domain. After you select **Request To Claim**, the request status is changed to **REQUEST SENT**.

![Request to claim sent](https://assets.postman.com/postman-docs/v10/request-to-claim-sent-v10.jpg)

> To turn off domain capture, you must [contact Postman support](#contact-support-to-manage-accounts).

### Contact support to manage accounts

Once the request is approved to [claim verified accounts](#claim-verified-accounts), Team Admins can contact Postman support to claim accounts not part of your team, merge teams into your team, and restrict users to only work in your team.

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar, then select the **Domains** tab.

1. Select **Manage** next to the domain with the **VERIFIED** status you want to contact support about.

    > Domain capture must be enabled for the domain you want to contact support about. Learn more about [enabling domain capture](#claim-verified-accounts).

1. Select **Contact Support**.

    ![Contact support about managing accounts](https://assets.postman.com/postman-docs/v10/domain-capture-enabled-v10.jpg)

### User experience

When domain capture is enabled, new Postman users who sign up for Postman with email addresses associated with your domain or subdomain are automatically added to your team.

Existing Postman users with email addresses associated with the domain or subdomain will only be able to access Postman after joining your team. This applies to existing users who are part of other teams and existing individual users. The next time existing users sign in to Postman, they will get a notification that your team manages their account. Existing users can join the team using this notification.

<img alt="Domain capture join team notification" src="https://assets.postman.com/postman-docs/domain-capture-join-team-9.4.jpg" width="350px"/>

> You won't be able to selectively pick users you'd like to add to your team. Once enabled, the number of unclaimed accounts will reduce as these users sign in and join your team.

Existing users who were on other Postman teams will lose access to all data from their earlier teams, including personal workspaces. No data will be transferred from their earlier teams to their new team. Users won't be able to remain on or join extra Postman teams with their captured accounts.

> To transfer an existing user's collections and environments from their earlier teams to their new team, [contact Postman support](#contact-support-to-manage-accounts).

For more details on the effects of enabling domain capture, see [Domain capture FAQs](/docs/administration/domain-verification-and-capture/domain-capture-faqs/).

> If users experience any issues when moving to your Postman team, reach out to [Postman support](https://www.postman.com/support/).

## Domain capture support and FAQs

For more information on the effects of enabling domain capture, see [Domain capture FAQs](/docs/administration/domain-verification-and-capture/domain-capture-faqs/).
