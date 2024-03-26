---
title: "Configure SCIM with Okta"
updated: 2023-04-12
---

Postman supports SCIM provisioning through Okta with the [Postman Okta app](https://www.okta.com/integrations/postman/), enabling you to automate user provisioning and de-provisioning for your team.

> Updating group information from Postman to your IdP isn't supported in SCIM provisioning through Okta. If you're using Okta and you want to use this provisioning feature, use the [SCIM 2.0 Okta app](https://www.okta.com/integrations/scim-2-0-test-app-header-auth/).

You must be a [Postman Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable SCIM for your team. With SCIM enabled, users won't have the option to leave your team on their own, and won't be able to change their account email or password. Only Team Admins will have the right to remove team members.

## Contents

* [Enabling SCIM in Okta](#enabling-scim-in-okta)

* [Configuring the Okta SCIM integration](#configuring-the-okta-scim-integration)

## Enabling SCIM in Okta

Postman is available as an app in the Okta Integration Network, allowing you to enable user provisioning directly through Okta.

Prior to enabling SCIM in Okta, you must [add the Postman app in Okta](https://www.okta.com/integrations/postman/) and [configure Okta's SSO for your Postman team](/docs/administration/sso/okta/).

To set up provisioning with Okta, do the following:

1. [Enable SCIM in Postman](/docs/administration/scim-provisioning/scim-provisioning-overview/#enabling-scim-in-postman) and [generate a SCIM API key](/docs/administration/scim-provisioning/scim-provisioning-overview/#generating-scim-api-key).

2. In Okta, go to the Postman app, select **Provisioning**, then select **Configure API Integration**.

    <img alt="Configure API Integration in Okta Postman app" src="https://assets.postman.com/postman-docs/postman-okta-app-configure-api-integration.jpg"/>

3. Select **Enable API integration** and enter your SCIM API key as the **API Token**.

    <img alt="Configure provisioning in Okta's Postman app" src="https://assets.postman.com/postman-docs/postman-okta-app-enable-provisioning.jpg"/>

4. Select **Test API Credentials**. If successful, a verification message will appear.

    > If verification is unsuccessful, confirm that you have SCIM enabled for your team in Postman, are using the correct SCIM API key, and that your API key's status is **ACTIVE** in your [team authentication settings](https://go.postman.co/settings/team/auth). If you continue to face issues, [contact Postman support](https://www.postman.com/support/) for assistance.

5. Select **Save**.

## Configuring the Okta SCIM integration

The Postman Okta app supports the provisioning features listed in the [SCIM provisioning overview](/docs/administration/scim-provisioning/scim-provisioning-overview/#scim-features).

To turn these features on or off, do the following:

1. Go to the Postman app in Okta, select **To App** on the left, then select **Edit**.

    <img alt="Configure features in Okta's Postman app" src="https://assets.postman.com/postman-docs/postman-okta-app-enable-features.jpg"/>

1. Select features to enable them, or clear to turn them off.

    <img alt="Enabled features in Okta's Postman app" src="https://assets.postman.com/postman-docs/postman-okta-app-enabled-features.jpg"/>

1. Select **Save** to save your changes.

Any provisioning features you've enabled will be immediately available for use in your Postman Okta app. If a user is already provisioned from the Postman app, an error may appear in Okta. If this occurs, remove the pending invite from the Postman manage team settings, and Okta will then provision them.
