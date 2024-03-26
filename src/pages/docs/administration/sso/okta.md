---
title: "Okta"
updated: 2023-01-19
---

> **[SSO with Okta is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

To configure SSO with Okta, you can use the available Postman app in Okta or create a custom SAML application. You must be an administrator in both Okta and Postman to configure SSO for your team.

## Contents

* [Configuring SSO with Okta](#configuring-sso-with-okta)
    * [Configuring SSO using the Postman app](#configuring-sso-using-the-postman-app)
    * [Configuring SSO using a custom SAML app](#configuring-sso-using-a-custom-saml-app)
* [Next steps](#next-steps)

## Configuring SSO with Okta

Before configuring SSO in Okta, you must [configure SSO in Postman](/docs/administration/sso/admin-sso/). When choosing the **Authentication Type**, select **Okta**. Name your authentication and **Continue**.

<img alt="Configure identity provider details in Postman" src="https://assets.postman.com/postman-docs/v10/configure-identity-provider-v10.jpg"/>

To continue configuring SSO with Okta, choose one of the following:

* [Configuring SSO using the Postman app](#configuring-sso-using-the-postman-app)
* [Configuring SSO using a custom SAML app](#configuring-sso-using-a-custom-saml-app)

### Configuring SSO using the Postman app

To continue configuring your Postman app using the [Postman integration on Okta](https://www.okta.com/integrations/postman/), do the following:

1. Open your Okta admin console in a new tab.

1. Go to **Applications**, and then select **Applications**.

1. Select **Browse App Catalog**.

    ![Create new Okta app](https://assets.postman.com/postman-docs/v10/okta-create-app-integration-v10.jpg)

1. Search for "Postman". Select the Postman app from the results, and then select **Add Integration**.

    ![Add Postman integration](https://assets.postman.com/postman-docs/v10/okta-add-postman-integration-v10.jpg)

1. In the General Settings screen, enter an application label you'll recognize later, and then select **Done**.

1. Select the **Sign On** tab, and then select **Edit**.

    ![View sign on method settings](https://assets.postman.com/postman-docs/v10/okta-edit-settings-v10.jpg)

1. Take the **Relay state** generated from Postman and add it as your **Default Relay State**. Upload the **Encryption Certificate** downloaded from Postman. Take the **ACS URL** from Postman and add it to your configuration in Okta, and then select **Save**.

    ![Edit sign on method settings](https://assets.postman.com/postman-docs/v10/okta-edit-saml-settings-v10.jpg)

1. Select **View SAML setup instructions** to display SAML configuration instructions, including the identity provider (IdP) details.

    ![View identity provider details](https://assets.postman.com/postman-docs/v10/okta-view-saml-setup-v10-2.jpg)

1. In Postman, enter the **SSO URL**, **Identity provider issuer**, and **X.509 Certificate** individually under **Identity provider details**.

1. Select **Save Authentication** in Postman.

### Configuring SSO using a custom SAML app

To continue configuring your custom SAML application, do the following:

1. Open your Okta admin console in a new tab.

1. Go to **Applications**, and then select **Applications**.

1. Select **Create App Integration**.

    ![Create new custom Okta app](https://assets.postman.com/postman-docs/v10/okta-create-app-integration-v10.jpg)

1. In the Create a new app integration screen, select **SAML 2.0** and then select **Next**.

    ![Select sign-in method](https://assets.postman.com/postman-docs/v10/okta-select-saml-v10.jpg)

1. In the **General Settings** tab, enter an app name you'll recognize later, and then select **Next**.

1. In the **Configure SAML** tab, take the **ACS URL**  from Postman and add it as your **Single sign-on URL**. Take the **Entity ID**  from Postman and add it as your **Audience URI (SP Entity ID)**. Take the **Relay state** generated from Postman and add it as your **Default RelayState**. Select **EmailAddress** as the name ID format.

    ![Configure custom SAML settings](https://assets.postman.com/postman-docs/v10/okta-edit-custom-saml-settings-v10.jpg)

1. Select **Show Advanced Settings**. Select **Encrypted** as the assertion encryption, **AES128-CBC** as the encryption algorithm, and **RSA-1.5** as the key transport algorithm. Upload the **Encryption Certificate** downloaded from Postman, and then select **Next**.

    ![Configure advanced custom SAML settings](https://assets.postman.com/postman-docs/v10/okta-edit-custom-advanced-saml-settings-v10.jpg)

1. In the **Feedback** tab, select **I'm an Okta customer adding an internal app**. Select **This is an internal app that we have created** as the app type, and then select **Finish**.

1. Select the **Sign On** tab, and then select **View SAML setup instructions** to display the IdP details.

    ![View identity provider details](https://assets.postman.com/postman-docs/v10/okta-view-custom-saml-setup-v10.jpg)

1. In Postman, enter the **SSO URL**, **Identity provider issuer**, and **X.509 Certificate** individually under **Identity provider details**.

1. Select **Save Authentication** in Postman.

## Next steps

Now that you have set up SSO with Okta, you can learn about setting up SCIM provisioning:

* To learn more, visit [Configuring SCIM with Okta](/docs/administration/scim-provisioning/configuring-scim-with-okta/). (_[Enterprise teams](https://www.postman.com/pricing/) only._)
