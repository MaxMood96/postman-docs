---
title: "Manage API keys"
updated: 2023-12-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Manage publicly exposed Postman API keys"
    url: "https://blog.postman.com/manage-publicly-exposed-postman-api-keys/"
---

> **[Postman API key management is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

The [Postman API](/docs/developer/postman-api/intro-api/) enables you to integrate Postman into your development toolchain, but requires API keys to do so. Team Admins can manage the Postman API keys your team creates at scale, ensuring you maintain compliance and security across your organization. Teams can control the creation of API keys, their expiration dates, and revoke keys when needed.

You must be a [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to use the Postman API key management dashboard.

> SCIM API keys can be managed in [Team Settings](http://go.postman.co/settings/team/auth).

## Contents

* [Managing Postman API keys](#managing-postman-api-keys)
    * [Revoking API keys](#revoking-api-keys)
    * [API key settings](#api-key-settings)

## Managing Postman API keys

To open the [Postman API key management dashboard](http://go.postman.co/manage-postman-keys), select **Team > Manage Postman Keys** in the Postman header.

<img alt="Manage Postman keys dashboard" src="https://assets.postman.com/postman-docs/v10/manage-postman-api-keys-dashboard-v10.19.jpg"/>

The dashboard lists all of the Postman API keys created by your team. To filter the list by enabled, disabled, or revoked keys, select or clear the checkboxes next to **View**.

You can review the key's date of creation, its expiration date, who created it, and when it was last used. You can also search by key value to locate a specific key, filter by user by selecting them in the **Created by** dropdown list, and sort by newest, oldest, and recently used.

Tags next to the API key's name specify when it is disabled or revoked. You can hover over a revoked tag to see if a Team Admin revoked it, if it was due to inactivity past its expiration date, or automatically revoked. Revoked API keys also display their revocation date under its creation date.

### Exposed API keys

If the [Postman Secret Scanner](/docs/administration/managing-your-team/secret-scanner/) detects exposed Postman API keys in public Postman workspaces, public Postman documentation, or [GitHub](/docs/administration/managing-your-team/secret-scanner/#protect-postman-api-keys-in-github) and [GitLab](/docs/administration/managing-your-team/secret-scanner/#protect-postman-api-keys-in-gitlab) repositories, the dashboard displays them in the **Exposed API keys** section. This section provides details about the exposed key, such as the date of its exposure detection, the last time it was used, and the location of the exposed API key.

<img alt="Exposed keys section" src="https://assets.postman.com/postman-docs/v10/manage-postman-exposed-api-keys-v10.19.jpg"/>

You can manage how Postman automatically handles exposed API keys in the [API key settings](#revoking) section of the Postman API key management dashboard.

### Revoking API keys

You can revoke an API key in the [Postman API key management dashboard](http://go.postman.co/manage-postman-keys) by hovering over it and selecting **Revoke**. To revoke multiple API keys at once, select the checkboxes next to each key, then select **Revoke** above the list.

<img alt="Revoke multiple keys" src="https://assets.postman.com/postman-docs/v10/manage-postman-api-keys-revoke-v10.19.jpg"/>

Postman notifies users by email when their API keys are revoked. For exposed keys, revoking also resolves the Secret Scanner finding in the [Secret Scanner dashboard](https://learning.postman.com/docs/administration/token-scanner/#secret-scanner-dashboard).

### API key settings

You can manage your team's API key settings and permissions by selecting **API Key Settings** in the [Postman API key management dashboard](http://go.postman.co/manage-postman-keys).

<img alt="API keys settings" src="https://assets.postman.com/postman-docs/v10/manage-api-keys-settings-v10.18.jpg"/>

#### Key generation and expiration

By default, anyone in your team can generate Postman API keys. You can turn off the **Allow anyone in your team to generate API keys** setting to prevent users from from creating new Postman API keys.

You can set the expiration settings for all API keys that your team creates with the **Set expiry for API keys** setting. This setting overrides any expiration settings that users previously set. It is also effective moving forward for all of your team's Postman API keys.

#### Revoking

Enable the **Auto revoke exposed Postman API keys** setting to allow Postman to automatically revoke any publicly exposed API keys found in publicly accessible Postman resources, [GitHub repositories](/docs/administration/managing-your-team/secret-scanner/#protect-postman-api-keys-in-github), and [Gitlab repositories](/docs/administration/managing-your-team/secret-scanner/#protect-postman-api-keys-in-gitlab). When the Postman Secret Scanner detects any exposed keys in public GitHub or GitLab repositories or public Postman resources, it revokes the key and notifies the key's owner by email.

If there are any exposed API keys present when you enable this setting, a warning appears.

<img alt="Enable auto revoke setting" src="https://assets.postman.com/postman-docs/v10/manage-postman-api-keys-settings-auto-revoke-confirm-v10.18.jpg" width="500px"/>

You can choose to revoke the currently-exposed keys when you enable this setting. You can also choose to ignore them and enable the setting. Any publicly exposed keys detected by the Secret Scanner after you enable this setting will be automatically revoked.

If you need to revoke all of the Postman API keys generated by your team, select **Revoke All**. Postman notifies users by email when their API keys are revoked.
