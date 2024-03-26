---
title: "Microsoft AD FS"
updated: 2023-01-17
---

> **[SSO with Microsoft AD FS is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

To configure SSO with [Microsoft Active Directory Federation Services](https://docs.microsoft.com/en-gb/windows-server/identity/active-directory-federation-services) (AD FS), you can use your Microsoft AD FS server. You must be an administrator in both Microsoft AD FS and Postman to configure SSO for your team.

Before you configure SSO with Microsoft AD FS, you must create the following:

* An Active Directory instance where all users have an email address attribute.
* An SSL certificate from the Microsoft AD FS server.
* A server that runs Microsoft Server 2012 or 2008.

After you meet these minimum requirements, install Microsoft AD FS on your server. To configure and install Microsoft AD FS, see [Deploy and configure AD FS](https://docs.microsoft.com/en-us/previous-versions/dynamicscrm-2016/deployment-administrators-guide/gg188612(v=crm.8)) in the Microsoft Knowledge Base.

## Contents

* [Configuring SSO with Microsoft AD FS](#configuring-sso-with-microsoft-ad-fs)
    * [Add a relying party trust](#add-a-relying-party-trust)
    * [Create claim rules](#create-claim-rules)
    * [Change the hash algorithm](#change-the-hash-algorithm)
    * [Enable the RelayState parameter on your servers](#enable-the-relaystate-parameter-on-your-servers)
    * [Submit Identity Provider details to Postman](#submit-identity-provider-details-to-postman)

## Configuring SSO with Microsoft AD FS

Before configuring your server in Microsoft AD FS, you must [configure SSO in Postman](/docs/administration/sso/admin-sso/). When choosing the **Authentication Type**, select **AD FS**. Name your authentication and **Continue**.

<img alt="Configure identity provider details in Postman" src="https://assets.postman.com/postman-docs/v10/configure-identity-provider-v10.jpg"/>

To continue configuring your server, complete the following tasks in order:

* [Add a relying party trust](#add-a-relying-party-trust)
* [Create claim rules](#create-claim-rules)
* [Change the hash algorithm](#change-the-hash-algorithm)
* [Enable the RelayState parameter on your servers](#enable-the-relaystate-parameter-on-your-servers)
* [Submit Identity Provider details to Postman](#submit-identity-provider-details-to-postman)

### Add a relying party trust

A relying party trust defines the connection between Microsoft AD FS and Postman.

1. Open AD FS Management on your computer.
1. Select the **Relying Party Trusts** folder.
1. On the Actions sidebar, select **Add Relying Party Trust** to start the configuration wizard for a new trust.
1. In the Welcome screen, select **Start**.

    ![Add a relying party trust](https://assets.postman.com/postman-docs/v10/ENT-Relying-Party-Trust-v10.jpg)

1. In the Select Data Source screen, select **Enter data about the party manually** and then select **Next**.
1. In the Specify Display Name screen, enter a display name you'll recognize later and then select **Next**. You can optionally add notes.
1. In the Choose Profile screen, select **AD FS profile** and then select **Next**.

1. In the Configure Certificate screen, upload the **Encryption Certificate** downloaded from Postman or use the default certificate settings, and then select **Next**.

    ![Upload encryption certificate](https://assets.postman.com/postman-docs/v10/ENT-configure-cert-v10.jpg)

1. In the Configure URL screen, select **Enable support for the SAML 2.0 WebSSO protocol**. Take the **ACS URL** from Postman and add it as your **Relying party SAML 2.0 SSO service URL**, and then select **Next**.

    ![Add the ACS URL](https://assets.postman.com/postman-docs/v10/ENT-ACS-URL-v10.jpg)

1. In the Configure Identifiers screen, take the **Entity ID** from Postman and add it as your **Relying party trust identifier**. Select **Add**, and then select **Next**.

    ![Add the entity ID](https://assets.postman.com/postman-docs/v10/ENT-Relying-party-trust-identifier-v10.jpg)

1. In the Configure Multi-factor Authentication Now? screen, select **I do not want to configure multi-factor authentication settings for this relying party trust at this time**.

1. In the Choose Issuance Authorization Rules screen, select **Permit all users to access this relying party** and then select **Next**.
1. In the Ready to Add Trust screen, review your settings and then select **Next**.
1. In the Finish screen, select **Close** to exit and open the [Claim Rules editor](#create-claim-rules).

### Create claim rules

After you create a relying party trust, you can create two claim rules.

1. Open AD FS Management on your computer.
1. Select the **Relying Party Trusts** folder, and then select the [relying party trust you created](#add-a-relying-party-trust).
1. On the Actions sidebar, select **Edit Claim Rules** to start the configuration wizard for a new rule.
1. Select **Add Rule** to create a new rule.

    ![Edit claim rules](https://assets.postman.com/postman-docs/v10/ENT-claim-rules-v10.jpg)

1. In the Select Rule Template screen, select **Send LDAP Attributes as Claims** as the claim rule template, and then select **Next**.
1. In the Configure Rule screen, enter a claim rule name you'll recognize later. Select **Active Directory** as the attribute store. In the **LDAP Attribute** column, select **E-Mail Addresses**. In the **Outgoing Claim Type** column, select **E-Mail Address**. Then select **Finish**.

    ![Configure Send LDAP Attributes as Claims](https://assets.postman.com/postman-docs/v10/ENT-ldap-attributes-as-claims-v10.jpg)

1. Select **Add Rule** to create another new rule.
1. In the Select Rule Template screen, select **Transform an Incoming Claim** as the claim rule template, and then select **Next**.
1. In the Configure Rule screen, enter a claim rule name you'll recognize later. Select **E-mail Address** as the incoming claim type. Select **Name ID** as the outgoing claim type. Select **Email** as the outgoing name ID format. Select **Pass through all claim values**. Then select **Finish**.

    ![Configure Transform an Incoming Claim](https://assets.postman.com/postman-docs/v10/ENT-transform-incoming-claim-v10.jpg)

1. Select **Apply**, and then select **OK** to save the new rules.

![Edit claim rules result](https://assets.postman.com/postman-docs/v10/ENT-Edit-Claim-Rules-v10.jpg)

### Change the hash algorithm

To change the hash algorithm for the relying party trust, do the following:

1. Open AD FS Management on your computer.
1. Select the **Relying Party Trusts** folder, and then select the [relying party trust you created](#add-a-relying-party-trust).
1. In the Actions sidebar, select **Properties**.
1. Select the **Advanced** tab. Select **SHA-1** as the secure hash algorithm.
1. Select **Apply**, and then select **OK**.

    ![Adjusting trust settings](https://assets.postman.com/postman-docs/v10/ENT-Adjusting-trust-settings-v10.jpg)

### Enable the RelayState parameter on your servers

Enable the RelayState parameter on your Microsoft AD FS servers, and then restart your service.

1. Open the configuration file.

    * For Microsoft AD FS 2.0, open the following file in a text editor:

        ```shell
        %systemroot%\inetpub\adfs\ls\web.config
        ```

    * For Microsoft AD FS 3.0, open the following file in a text editor:

        ```shell
        %systemroot%\ADFS\Microsoft.IdentityServer.Servicehost.exe.config
        ```

1. In the `<microsoft.identityServer.web>` section, add a line for `<useRelayStateForIdpInitiatedSignOn enabled="true" />` as follows, and then save the change:

    ```shell
    <microsoft.identityServer.web>
        ...
        <useRelayStateForIdpInitiatedSignOn enabled="true" />
    </microsoft.identityServer.web>
    ```

1. For Microsoft AD FS 2.0, run `IISReset` to restart IIS.
1. For both Microsoft AD FS 2.0 and 3.0, restart the Active Directory Federation Services (`adfssrv`) service.

    > If you're using Microsoft AD FS 3.0 you only need to restart the Active Directory Federation Services (`adfssrv`) service on your Microsoft AD FS 3.0 servers, not the WAP servers.

### Submit Identity Provider details to Postman

After you configure your server, submit your identity provider's (IdP) details to Postman.

1. Download the Federation Metadata XML file from Microsoft AD FS. You can often find this file at `https://<Federation Service name>/FederationMetadata/2007-06/FederationMetadata.xml`.
1. In Postman, upload the Federation Metadata XML file under **Identity provider metadata** file. Or, you can enter the **SSO URL**, **Identity provider issuer**, and **X.509 Certificate** individually under **Identity provider details**.
1. Select **Save Authentication** in Postman.
