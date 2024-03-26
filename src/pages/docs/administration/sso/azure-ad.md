---
title: "Microsoft Entra ID"
updated: 2022-03-14
search_keyword: "azure ad"
---

> **[SSO with Microsoft Entra ID is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

To configure SSO with Microsoft Entra ID (formerly Azure Active Directory), you can use the available Postman app in Microsoft Entra ID. You must be an administrator in both Microsoft Entra ID and Postman to configure SSO for your team.

## Contents

* [Configuring SSO with Microsoft Entra ID](#configuring-sso-with-microsoft-entra-id)

* [Next steps](#next-steps)

## Configuring SSO with Microsoft Entra ID

Before configuring a SAML application in Microsoft Entra ID, you must [configure SSO in Postman](/docs/administration/sso/admin-sso/). When choosing the **Authentication Type**, select **SAML 2.0**. Name your authentication and **Proceed**.

<img alt="Configure identity provider details in Postman" src="https://assets.postman.com/postman-docs/v10/configure-identity-provider-v10.jpg"/>

To continue configuring your SAML application, do the following:

1. Open your Microsoft Entra ID management portal in a new tab.
1. Go to **Enterprise applications** and select **+ New application**.
1. Search for "Postman" and select the Postman app from the results, then select **Create**.
1. Select **Set up single sign on > SAML**.
1. Take the **Entity ID**, **Login URL**, and **ACS URL** from Postman and add them to your SAML configuration in Microsoft Entra ID.

    <img alt="Basic SAML configuration in Microsoft Entra ID" src="https://assets.postman.com/postman-docs/basic-saml-config-azuread.jpg"/>
1. In Postman, select **Generate relay state** and add the generated value to your SAML configuration in Microsoft Entra ID.

    <img alt="Generate relay state in Postman" src="https://assets.postman.com/postman-docs/generate-relay-state-v9.14.jpg" width="350px"/>
1. Under **Attributes & Claims** in Microsoft Entra ID, select **Edit > Add new claim**. Map the `Unique User Identifier (Name ID)` to the `user.mail` value.

    <img alt="Attributes and claims in Microsoft Entra ID" src="https://assets.postman.com/postman-docs/attributes-claims-config-azuread.jpg"/>
1. **Download** the Federation Metadata XML file in Microsoft Entra ID under **SAML Signing Certificate**.

    <img alt="SAML signing certificate in Microsoft Entra ID" src="https://assets.postman.com/postman-docs/saml-signing-certificate-azuread.jpg"/>

1. In Postman, upload the Federation Metadata XML file under **Identity Provider Metadata File**. Or, you can enter the **Identity Provider SSO URL**, **Identity Provider Issuer**, and **X.509 Certificate** individually under **Identity Provider Details**.

1. Select **Save Authentication** in Postman.

You can test your SAML configuration by creating a test user in Microsoft Entra ID and assigning them the Postman app. If you've chosen to [automatically add new users](/docs/administration/sso/admin-sso/#automatically-adding-new-users) when configuring SAML, you'll be able to immediately sign in Postman with the test user's credentials to confirm the process works as expected. If you haven't chosen to automatically add new users, you can manually [invite the test user](/docs/administration/managing-your-team/manage-team-members/#invite-users) to your Postman team and then sign in to Postman with the test user's credentials.

> If you encounter any issues, confirm you've added and saved the correct configuration values on both Postman and Microsoft Entra ID. [Contact Postman support](https://www.postman.com/support/) for further help.

## Next steps

Now that you have set up SSO with Microsoft Entra ID, you can learn about setting up SCIM provisioning:

* To learn more, visit [Configuring SCIM with Microsoft Entra ID](/docs/administration/scim-provisioning/configuring-scim-with-azure-ad/). (_[Enterprise teams](https://www.postman.com/pricing/) only._)
