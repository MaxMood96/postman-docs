---
title: "Configure SSO for a team"
updated: 2023-02-06
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman 101 for Admins | Webinar"
    url: "https://youtu.be/d6pw-0Yy5fs"
---

> **[SSO is available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)**

Your [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can configure single sign-on (SSO) for a Postman team. To configure SSO for a team, add an authentication method, and then configure the identity provider (IdP) details.

## Contents

* [Configuring single sign-on](#configuring-single-sign-on)
* [Editing SSO settings](#editing-sso-settings)
* [Managing user accounts](#managing-user-accounts)
* [Troubleshooting](#troubleshooting)
* [Next steps](#next-steps)

## Configuring single sign-on

To begin adding an authentication method, do the following:

1. Go to [Team Settings](https://app.getpostman.com/dashboard/teams/edit), then select **Authentication**.
1. Select **Add Authentication Method**.
1. Select the authentication type.
1. Enter an authentication name that's identifiable to your team.
1. Select **Continue** to [configure the IdP details](#configuring-the-idp-details).

    <img src="https://assets.postman.com/postman-docs/v10/add-auth-method-v10.jpg" width="600px" alt="Authentication Method"/>

    > Always check with your authentication provider dashboard or your IT support staff for the correct information to configure SSO.

### Configuring the IdP details

After [adding the authentication method](#configuring-single-sign-on), you can configure the IdP details.

> To configure the IdP details later, select **Configure Later**. When you're ready to continue configuring the IdP details, see [Editing SSO settings](#editing-sso-settings).

In the **Service provider details (Postman)** section, the **Entity ID**, **Login URL**, and **ACS URL** are already populated.

Fill in the **Identity provider details** section. From your IdP account, enter your **SSO URL**, **Identity provider issuer**, and **X.509 Certificate**. Instead, you can upload a metadata file to configure the IdP details in one step.

<img alt="" src="https://assets.postman.com/postman-docs/v10/configure-identity-provider-details-v10.jpg"/>

To enter details in the **Identity provider details** section, you must sign in to your IdP account and get the details. Refer to the corresponding section of the documentation and follow the outlined procedure there:

* [Microsoft AD FS](/docs/administration/sso/microsoft-adfs/)*

* [Microsoft Entra ID](/docs/administration/sso/azure-ad/)*

* [Custom SAML](/docs/administration/sso/custom-saml/)*

* [Duo](/docs/administration/sso/duo/)*

* [Google Workspace](/docs/administration/sso/google-workspace/)

* [Okta](/docs/administration/sso/okta/)*

* [OneLogin](/docs/administration/sso/onelogin/)*

* [Ping Identity](/docs/administration/sso/ping-identity/)*

&#42; Only available on Enterprise plans.

Optionally, you can select the [**Automatically add new users**](#automatically-adding-new-users) checkbox if you want users to automatically join your team. The first time users sign in to Postman using this authentication method they will automatically join the team.

## Editing SSO settings

After configuring the [authentication method](#configuring-single-sign-on) for your Postman team, you can select the **Status** toggle to turn it on or off. This is a team-level option, so this setting applies to the whole team.

<img alt="" src="https://assets.postman.com/postman-docs/admin-sso-turn-on-auth-method-v9.jpg" width="800px"/>

To update the settings for an authentication method, select **Edit**, then select **Continue**.

To delete an authentication method, select **Edit**, then select **Delete**.

<img alt="" src="https://assets.postman.com/postman-docs/v10/edit-auth-method-v10.jpg" width="600px"/>

## Managing user accounts

This section describes the following topics:

* [Creating user accounts](#creating-user-accounts)

* [Adding existing user accounts](#adding-existing-user-accounts)

* [Automatically adding new users](#automatically-adding-new-users)

* [Managing team sign ins](#managing-team-sign-ins)

* [Removing team access](#removing-team-access)

### Creating user accounts

The first time a new Postman user [signs in to Postman using the authentication method](/docs/administration/sso/user-sso/), a Postman account is created and the user is automatically added to the team if the following is true: the team has seats available and the [**Automatically add new users**](#automatically-adding-new-users) checkbox was selected during [authentication method configuration](#configuring-single-sign-on).

The user will be automatically associated to the team with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) and have access to team resources.

> If the required conditions aren't met to automatically join the team, all Team Admins will receive your request to join the team.

### Adding existing user accounts

The first time an existing Postman user [signs in to Postman using the authentication method](/docs/administration/sso/user-sso/), the user is automatically added to the team if one of the following is true:

* The team has available seats and the [**Automatically add new users**](#automatically-adding-new-users) checkbox was selected during [authentication method configuration](#configuring-single-sign-on).
* A Team Admin has [invited the user](/docs/administration/managing-your-team/manage-team-members/#invite-users) to join the team.

The user will be automatically associated to the team with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) and have access to team resources.

> If the required conditions aren't met to automatically join the team, all Team Admins will receive your request to join the team.

### Automatically adding new users

The **Automatically add new users** checkbox in your [authentication method](#configuring-single-sign-on) determines whether users with accounts in your IdP can automatically join your team. [Sign in to Postman using the authentication method](/docs/administration/sso/user-sso/) to automatically join the team.

> **Automatically add new users** will only work if your team has user seats available. Your team size won't automatically increase if more users sign in with SSO.

### Managing team sign ins

By default, Postman only supports Service Provider (Postman)-initiated sign ins for Postman [Professional or Enterprise teams](https://www.postman.com/pricing/). Your team must [sign in to Postman using the authentication method](/docs/administration/sso/user-sso/). If you require users to sign in using an IdP-initiated sign in from your SSO portal, you can generate and copy the **Relay state** from your [authentication method](#configuring-single-sign-on), and then save it in your IdP configuration. This ensures an extra level of security when the sign in process is initiated through a source unknown to Postman.

### Removing team access

You must remove users from your team in Postman to prevent access to shared resources. When you remove a user from your team, you'll still retain access to any data they have shared with the team. You'll also be able to reassign their personal workspaces and the data within them to a remaining team member in some situations. To learn more, see [Removing team members](/docs/administration/managing-your-team/manage-team-members/#remove-team-members).

## Troubleshooting

Learn more about common SSO issues and how to troubleshoot them.

If you experience an error after signing in to Postman using SSO, see the following errors and possible solutions:

* **Your IdP returns a 404 error.** Make sure the **SSO URL** is correctly copied from your IdP to your [authentication method](#configuring-single-sign-on) in Postman.
* **Postman returns a 500 error.** Make sure the **X.509 Certificate** is correctly copied from your IdP to your [authentication method](#configuring-single-sign-on) in Postman.
* **Postman returns a 404 error.** Make sure the values in the **Service provider details (Postman)** section are correctly copied from your [authentication method](#configuring-single-sign-on) in Postman to your IdP.
* **Postman returns a page explaining that the sign-in request expired.** Make sure the **Relay state** is correctly copied from your [authentication method](#configuring-single-sign-on) in Postman to your IdP.

For more common SSO issues, see the following:

* **An email address isn't associated with your team members.** In your IdP configuration settings, make sure the username format is set to **Email**.

## Next steps

Now that you've set up SSO for your team, you might be interested in learning about how your team will interact with SSO and continuing on with SCIM provisioning.

* To learn more about the user experience, see [Signing in to an SSO team](/docs/administration/sso/user-sso/).
* If your team is on a Postman Enterprise plan, check out [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/).
