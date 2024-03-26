---
title: "Google Workspace"
updated: 2020-05-22
---

> **[SSO with Google Workspace is available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)**

*Note: An admin of your GSuite organization must create the SAML application.*

### Setting up a custom SAML application in GSuite

1. From the Google admin console, select **Apps**.
   [![gsuite admin](https://assets.postman.com/postman-docs/gsuite_admin.png)](https://assets.postman.com/postman-docs/gsuite_admin.png)

1. Look for "SAML apps".
   [![gsuite saml apps](https://assets.postman.com/postman-docs/gsuite_saml_apps.png)](https://assets.postman.com/postman-docs/gsuite_saml_apps.png)

1. Create a new SAML app.
   [![gsuite create new](https://assets.postman.com/postman-docs/gsuite_create_new.png)](https://assets.postman.com/postman-docs/gsuite_create_new.png)

1. Select **SETUP MY OWN CUSTOM APP**.
   [![gsuite setup](https://assets.postman.com/postman-docs/gsuite_setup.png)](https://assets.postman.com/postman-docs/gsuite_setup.png)

1. In Postman, enter the **SSO URL**, **Identity provider issuer**, and **X.509 Certificate** individually under **Identity provider details**. Or, you can upload the IDP metadata file under **Identity provider metadata file**.

   [![gsuite google IdP](https://assets.postman.com/postman-docs/gsuite_google_IdP.png)](https://assets.postman.com/postman-docs/gsuite_google_IdP.png)

1. Enter an application name (for example, "Postman SAML App") and fill out any other optional fields.
   [![gsuite basic info](https://assets.postman.com/postman-docs/gsuite_basic_info.png)](https://assets.postman.com/postman-docs/gsuite_basic_info.png)

1. Take the **ACS URL** and **Entity ID** from Postman and add them to your SAML application in Google Workspace. Take the **Relay state** generated from Postman and add it as your **Start URL**. Select **Email** as the name ID format. For more details on this last step, see [Configuring SSO for a team](/docs/administration/sso/admin-sso/).

    [![gsuite service provider](https://assets.postman.com/postman-docs/gsuite_service_provider.png)](https://assets.postman.com/postman-docs/gsuite_service_provider.png)
