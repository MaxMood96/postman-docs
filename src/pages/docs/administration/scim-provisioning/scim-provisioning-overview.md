---
title: "SCIM provisioning overview"
updated: 2023-12-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing User Management in Postman with SCIM"
    url: "https://blog.postman.com/introducing-user-management-in-postman-with-scim/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "PayPal uses SCIM to onboard developers"
    url: "https://www.postman.com/case-studies/paypal/"
  - type: link
    name: "Western Governors University (WGU) uses SCIM to create teams"
    url: "https://www.postman.com/case-studies/wgu/"
---

> **[Provisioning with SCIM is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

Postman supports [SCIM](https://datatracker.ietf.org/doc/html/rfc7642) (System for Cross-domain Identity Management), enabling you to automate user provisioning and de-provisioning for your team. With this feature, you can efficiently deploy Postman at scale across your organization and control access to it with your identity provider (IdP).

You can enable SCIM provisioning with the [SCIM API](#configuring-scim-with-the-scim-api), [Okta](/docs/administration/scim-provisioning/configuring-scim-with-okta/), [Microsoft Entra ID](/docs/administration/scim-provisioning/configuring-scim-with-azure-ad/), or [OneLogin](/docs/administration/scim-provisioning/configuring-scim-with-onelogin/). You must be a [Postman Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable SCIM for your team. With SCIM enabled, users won't have the option to leave your team on their own, and won't be able to change their account email or password. Only Team Admins will have the right to remove team members.

## Contents

* [SCIM features](#scim-features)

* [Enabling SCIM provisioning](#enabling-scim-provisioning)

    * [Enabling SCIM in Postman](#enabling-scim-in-postman)

    * [Generating SCIM API key](#generating-scim-api-key)

* [Configuring SCIM with the SCIM API](#configuring-scim-with-the-scim-api)

* [Next steps](#next-steps)

## SCIM features

Postman supports the following provisioning features:

* **Create user** - Creates a new user account in Postman, adds the account to your organization's Postman team, and activates authentication for the user if their email ID isn't attached to an existing Postman account. If a Postman account with the same email ID exists and it's associated with a domain your team has [verified](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/), the user will be automatically added to your team. If a Postman account with the same email ID exists and it's not associated with a verified domain, an email invite to join your Postman team is sent to the user. Once the user accepts the invite, they'll be added to your team.

    > The newly added user will have the Developer role in Postman by default. You can later [update account roles in Postman](/docs/administration/managing-your-team/manage-team-members/#manage-team-roles).

* **Update user information**

    * **Update user attributes** - Updates a user’s first and last name in Postman.

    * **Activate user** - Creates a new user on your Postman team, if one doesn't already exist, and activates the user to authenticate into your Postman team.

    * **Deactivate user** - Removes a user from your Postman team and deactivates their account, blocking the account from authenticating into Postman.

        > User accounts and the data corresponding to them won't be deleted. To permanently delete a user account and its data, [contact Postman support](https://www.postman.com/support/).

    * **Reactivate user** - Reactivates an existing deactivated user by unblocking the account's authentication into Postman and adds the account back to your Postman team.

* **Create group** - Creates a new [user group](/docs/collaborating-in-postman/user-groups/) in Postman. When you assign the Postman app to a group, Postman creates a new account for each user, adds each account to your organization's Postman team, and activates authentication for each user. If an existing Postman account uses an email that matches a user's email ID, an [email invite](/docs/administration/managing-your-team/manage-team-members/#manage-invites) to join your Postman team is sent to that user. Once the user accepts the invite, they'll be added to your team.

    > Newly created groups will have the Developer role in Postman by default. You can later [update group roles in Postman](/docs/collaborating-in-postman/user-groups/#editing-team-roles-for-a-group) and [control a group's access to workspaces and individual Postman elements](/docs/collaborating-in-postman/user-groups/#managing-roles-on-workspaces-and-postman-elements), such as collections and APIs.

* **Delete group** - Deletes a user group in Postman. User accounts that were part of the deleted group are deactivated in Postman.

    > User accounts and the data corresponding to them won't be deleted. To permanently delete user accounts and their data, [contact Postman support](https://www.postman.com/support/).

* **Update group information**

    * **Update group attributes** - Updates a group's name in Postman.

    * **Update group members** - Adds or removes users from a group in Postman.

        > Users in a group have the roles assigned to the group. You can [update group roles in Postman](/docs/collaborating-in-postman/user-groups/#editing-team-roles-for-a-group) and [control a group's access to workspaces and individual Postman elements](/docs/collaborating-in-postman/user-groups/#managing-roles-on-workspaces-and-postman-elements), such as collections and APIs.

    > Updating group information from Postman to your IdP isn't supported in [SCIM provisioning through Okta](/docs/administration/scim-provisioning/configuring-scim-with-okta/). If you're using Okta and you want to use this provisioning feature, use the [SCIM 2.0 Okta app](https://www.okta.com/integrations/scim-2-0-test-app-header-auth/).

Postman doesn't support the following provisioning features:

* Push groups from Postman to your IdP
* Push or sync password updates
* Push user attribute updates from your IdP to Postman other than name
* Pull user attribute updates from Postman to your IdP

## Enabling SCIM provisioning

You must [configure SSO in Postman](/docs/administration/sso/admin-sso/) before you can enable SCIM for your Postman team.

> To use SCIM, you must have only one SSO method configured. If you have more than one SSO method enabled, you won't be able to generate a SCIM API key.

### Enabling SCIM in Postman

1. Open Postman and select **Team > Team Settings** in the Postman header.
1. Select **Authentication** in the left sidebar.
1. Select the **Authentication Methods** tab.
1. Select the **SCIM Provisioning** toggle to turn it on.

    <img alt="Enable SCIM in dashboard" src="https://assets.postman.com/postman-docs/v10/auth-enable-scim-v10-19.jpg"/>

1. Select **Turn On** to enable SCIM provisioning.

    <img alt="Enable SCIM in dashboard" src="https://assets.postman.com/postman-docs/v10/turn-on-scim-provisioning-v10-19.jpg" width="400px"/>

### Generating SCIM API key

1. Under **SCIM Provisioning**, select **Generate SCIM API Key**.

    <img alt="Generate SCIM API key" src="https://assets.postman.com/postman-docs/v10/generate-scim-api-key-v10-19.jpg"/>

1. Enter a key name, then select **Generate**.
1. Copy your new API key for later use and select **Done**.

You can revisit this page to manage your SCIM API keys. If you regenerate an existing API key, you'll have the option to keep the previous key active while you switch to the new one.

> For more information or help with configuring SCIM, [contact Postman support](https://www.postman.com/support/).

## Configuring SCIM with the SCIM API

Visit Postman's [SCIM API documentation](https://www.postman.com/postman/workspace/scim/documentation/6248949-de4a96e2-9ebf-426f-bc55-4c5f2de51ab2) for information on setting up SCIM for your Postman team using the SCIM 2.0 API.

## Next steps

Now that you have enabled SCIM and generated a SCIM API key, you can continue enabling SCIM provisioning. After the SCIM setup is complete, learn how to manage roles and permissions for your team:

* To learn how to enable SCIM provisioning through your IdP, see [Configure SCIM with Okta](/docs/administration/scim-provisioning/configuring-scim-with-okta/), [Configure SCIM with Microsoft Entra ID](/docs/administration/scim-provisioning/configuring-scim-with-azure-ad/), or [Configure SCIM with OneLogin](/docs/administration/scim-provisioning/configuring-scim-with-onelogin/).
* To learn how to enable SCIM using the SCIM 2.0 API, see Postman's [SCIM API documentation](https://www.postman.com/postman/workspace/scim/documentation/6248949-de4a96e2-9ebf-426f-bc55-4c5f2de51ab2).
* Learn more about [defining roles](/docs/collaborating-in-postman/roles-and-permissions/) in your team and how to [create user groups](/docs/collaborating-in-postman/user-groups/#creating-a-group).
