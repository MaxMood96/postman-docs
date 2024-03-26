---
title: "Store secrets in your Postman Vault"
updated: 2024-02-12
early_access: true
plan: beta
---

*Postman Vault* enables you to store sensitive data as vault secrets in your local instance of Postman. This enables you to securely reuse sensitive data in your HTTP collections, environments, and requests. Only you can access and use your vault secrets, and secrets aren't synced to the Postman cloud.

When you first open your Postman Vault, Postman generates a [vault key](#manage-your-vault-key) that enables you to access your Postman Vault later. Once you store your vault key in a secure location, you can [add sensitive data as vault secrets](#add-sensitive-data-as-vault-secrets) in your Postman Vault. Then you can [reference your vault secrets](#use-vault-secrets) in your HTTP collections, requests, and more.

You can use your Postman Vault from the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/) or the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app). Learn about Postman Vault [features that require the Postman desktop app](#feature-availability).

## Contents

* [About vault secrets](#about-vault-secrets)
    * [Compare vault secrets and variables](#compare-vault-secrets-and-variables)
* [Access your Postman Vault](#access-your-postman-vault)
* [Manage your vault key](#manage-your-vault-key)
    * [Save your vault key](#save-your-vault-key)
    * [Reset your vault key](#reset-your-vault-key)
* [Add sensitive data as vault secrets](#add-sensitive-data-as-vault-secrets)
* [Edit vault secrets](#edit-vault-secrets)
* [Use vault secrets](#use-vault-secrets)
* [Fix unresolved vault secrets](#fix-unresolved-vault-secrets)
* [Feature availability](#feature-availability)

## About vault secrets

*Vault secrets* are sensitive data, such as API keys and passwords, that you store in your Postman Vault and reuse in your local instance of Postman. Only you can access and reuse your vault secrets in your local instance of Postman, and they aren't synced to the Postman cloud.

Vault secrets are useful when:

* You're using the same sensitive data in multiple places throughout your workspaces.
* You don't want your sensitive data synced to the Postman cloud.
* You want to be the only user with access to your sensitive data.
* You want to specify the domains and subdomains you're allowed to send your sensitive data to.
* You want your sensitive data encrypted.
* You want to link vault secrets with sensitive data stored in an external vault, such as Azure Key Vault.

Vault secrets are created at the *vault* scope, which is the broadest scope compared to the [variable scopes](/docs/sending-requests/variables/variables/#variable-scopes) in Postman. This enables you to securely access and reuse vault secrets in your collections, requests, and environments throughout your workspaces.

> If a variable in a different scope has the same name as a vault secret, the value stored in a narrower scope won't be used. For example, if there is a collection variable named `postman-api-key` and a vault secret also named `postman-api-key`, the collection value won't be used when the request runs. Learn how to [reference vault secrets](#use-vault-secrets) in Postman.

<!-- -->

> If you're using the Postman web app with Safari as your web browser, it deletes vault secrets from your local instance of Postman after seven days of inactivity. Use a different web browser if you want your vault secrets available for more than seven days without activity in the Postman web app. Learn about the [browser requirements](/docs/getting-started/installation/installation-and-updates/#browser-requirements) for the Postman web app.

### Compare vault secrets and variables

Both vault secrets and variables enable you to store and reference data in Postman. One may be a better fit than the other, depending on your use case or preferences.

[Vault secrets](#about-vault-secrets) enable you to store and reuse sensitive data only in your local instance of Postman, and they aren't synced to the Postman cloud. This enables you to keep your sensitive data hidden from collaborators, and prevent collaborators from using your vault secrets. Vault secrets are masked by default, and only you can unmask them. Your sensitive data is also encrypted in your Postman Vault.

[Variables](/docs/sending-requests/variables/variables/) enable you to store and reuse the same value, such as URLs, in multiple places. The following are some options for storing data in variables:

* You can add data as the [current value](/docs/sending-requests/variables/variables/#initial-and-current-values) of a variable. This means the value is local to your instance of Postman and it isn't synced to the Postman cloud. You can choose to [persist a variable](/docs/sending-requests/variables/variables/#sharing-and-persisting-data), which syncs the current value to the Postman cloud and shares it with collaborators.

* You can set the variable type as [secret type](/docs/sending-requests/variables/variables/#variable-types) in global and environment variables. This enables you to mask sensitive data in the initial and current values. Collaborators with access to the workspace can [view a secret type variable's values](/docs/sending-requests/variables/variables/#viewing-and-changing-secret-variable-values). Also, collaborators with additional permissions can [change the variable type](/docs/sending-requests/variables/variables/#changing-from-secret-to-default-variable-type), unmasking it for collaborators.

## Access your Postman Vault

To access your Postman Vault, open a workspace then select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px"> **Vault** from the Postman footer. You can also use **Control+Shift+V** or **Ctrl+Shift+V** to access your Postman Vault.

You can open your vault secrets in Postman Vault as follows:

* If this is your first time opening your Postman Vault, select **Set Up Vault** to [get your vault key](#manage-your-vault-key).
* If Postman already generated your [vault key](#manage-your-vault-key), enter your vault key then select **Open Vault**. Then you can continue to [add](#add-sensitive-data-as-vault-secrets), [edit](#edit-vault-secrets), and [use](#use-vault-secrets) your vault secrets in Postman.

    > If you stored your vault key in your system's password manager, Postman automatically gets your vault key. You must use the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent) if you're using the Postman web app so Postman can get your vault key.

> Learn about Postman Vault [features that require the Postman desktop app](#feature-availability).

## Manage your vault key

When you open Postman Vault for the first time, Postman generates a [vault key](#save-your-vault-key) that's used to access your Postman Vault later. You can [reset your vault key](#reset-your-vault-key) if you lose it, but Postman will permanently delete your vault secrets. Once you save your vault key, you can [add vault secrets to your Postman Vault](#add-sensitive-data-as-vault-secrets).

Your vault secrets are encrypted using the AES-256-GCM encryption algorithm.

When Postman generates your vault key, you have the following options for saving your key:

* Save your vault key in a secure location. Each time you sign in to Postman, you'll need to manually enter your vault key, enabling you to access your Postman Vault.
* Postman can store your vault key in your system's password manager, such as Keychain Access on macOS. This enables Postman to automatically get your vault key, giving you access to your Postman Vault when you sign in to Postman.

### Save your vault key

1. When you open your Postman Vault for the first time, save your vault key in a secure location. You can do the following to save your vault key:

    * Select the copy icon <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to copy your vault key to your clipboard.
    * Select the download icon <img alt="Download icon" src="https://assets.postman.com/postman-docs/icon-download-v9.jpg#icon" width="16px"/> to download your vault key.

1. If you don't want to store your vault key in your system's password manager, clear the checkbox next to **Save this key to native password manager**.

    > If you're using the Postman web app, you must use the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent) to save your vault key to your system's password manager.

1. Select **Open Vault** to [add vault secrets to your Postman Vault](#add-sensitive-data-as-vault-secrets).

    ![Save vault key](https://assets.postman.com/postman-docs/v10/save-postman-vault-key-v10-24.jpg)

> If your Postman Vault is open, you can select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right to copy or download your vault key.

### Reset your vault key

You can reset your vault key if you lose it, but Postman will permanently delete all vault secrets stored in your Postman Vault.

1. Sign out and sign in to Postman, then open your Postman Vault.
1. Select **Reset vault**.

    <img src="https://assets.postman.com/postman-docs/v10/reset-postman-vault-key-v10-23.jpg" alt="Reset vault key" width="350px"/>

1. To delete your vault secrets and generate a new vault key, select **Reset Vault**.
1. [Save your vault key in a secure location.](#save-your-vault-key)

## Add sensitive data as vault secrets

After you [save your vault key](#save-your-vault-key), you can add sensitive data, such as API keys and passwords, to your Postman Vault and reuse them in your local instance of Postman. You can also add secrets from the HTTP request builder.

You can also [create an integration](/docs/sending-requests/postman-vault/postman-vault-integrations/) ([Enterprise teams only](https://www.postman.com/pricing/)) that connects your Postman Vault with external vaults, such as Azure Key Vault. This enables you to link vault secrets with sensitive data stored in external vaults, and reuse it in your local instance of Postman.

> Vault secrets aren't preserved in your Postman Vault after signing out of Postman. This means that references to the secret will be [unresolved](#fix-unresolved-vault-secrets) when you sign in to Postman. You can add your vault secrets back to your Postman Vault after you sign in.

To add secrets to your Postman Vault, do the following:

1. Open your Postman Vault.
1. Enter the following values in an empty row:

    * **Key** - The name of the vault secret. Use the name to [reference the secret](#use-vault-secrets).
    * **Value** - The value used when sending requests in your local instance of Postman. It's never synced to your account or shared with your team.

        To connect Postman Vault with an external vault, enter a name for the vault secret, hover over the **Value** cell, then select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px">. Select the external vault you want to create an integration for, then you'll be prompted with next steps. Learn how to [integrate your Postman Vault with an external vault](/docs/sending-requests/postman-vault/postman-vault-integrations/).

        > To show or hide a vault secret's value, hover over the secret and select the eye icon <img alt="Unmask secret icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px">.

    * **Allowed domains** - The comma-separated list of domains and subdomains you're allowed to send requests to with the vault secret. This enables you to prevent unintentional disclosure of sensitive data in your vault secret. By default, you can include vault secrets in requests to any domain and subdomain. Select the empty cell then enter your allowed domains.

        > If you specify allowed domains or subdomains for a vault secret, you won't be able to reference the vault secret at the collection level.

        <!-- -->

        > To allow sending requests to any subdomain of an allowed domain, use `*` to represent any subdomain. For example, add `*.example.com` to allow sending requests to any subdomain of `example.com`.

    ![Add secrets to Postman Vault](https://assets.postman.com/postman-docs/v10/add-postman-vault-secrets-v10-24.jpg)

    > Changes are automatically saved to your Postman Vault.

To set data as vault secrets from the request builder, do the following:

1. Select the data you need. You can select data from the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab.
1. Select **Set as variable**.
1. Select **+ Set as new variable**.

    <img src="https://assets.postman.com/postman-docs/v10/set-data-as-new-vault-secret-v10-22.jpg" alt="Set as new variable" width="350px"/>

1. Enter the **Name** of the vault secret, confirm that the **Value** is correct, and select **Vault** as the scope.
1. Select **Set Variable**.

    ![Set as new vault secret](https://assets.postman.com/postman-docs/v10/set-data-as-vault-secret-v10-22.jpg)

You can also [reference vault secrets](#use-vault-secrets) that don't exist yet, then add new secrets to your Postman Vault. In the request builder, enter a name that doesn't exist using the following syntax: `{{vault:secret-name}}`. You can enter a name in the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab. Hover over the unresolved reference to the secret, enter the value, then select **Add Secret**.

![Set as new vault secret](https://assets.postman.com/postman-docs/v10/reference-and-create-new-vault-secret-v10-22.jpg)

## Edit vault secrets

You can edit secrets stored in your Postman Vault by updating secrets and their allowed domains, changing a secret's name, making secrets unavailable, or deleting secrets.

To edit vault secrets, select <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px"> **Vault** from the Postman footer. You can take the following actions:

* To filter the list of secrets by name, enter text in the **Filter secrets** box.
* To sort the list of secrets, select a column header. You can toggle between ascending and descending order.
* To add a new secret, select **Add new secret** in the bottom row of the table.
* To delete a secret, hover over a secret and select the delete icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px" />.
* To update the list of allowed domains, select the empty cell or list of domains.
* To make a secret unavailable without deleting it, clear the checkbox next to the secret. Any references to the secret will be unresolved. To make the secret available again, select the checkbox.
* To [link a different secret from an external vault](/docs/sending-requests/postman-vault/postman-vault-integrations/#link-a-different-secret-from-an-external-vault), select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px"> next to the secret you want to update, then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.

![Edit vault secrets](https://assets.postman.com/postman-docs/v10/edit-postman-vault-secrets-v10-24.jpg)

> Changes are automatically saved to your Postman Vault.

## Use vault secrets

You can reference vault secrets in your HTTP collections and requests from the **URL builder**, the **Params** tab, the **Authorization** tab, the **Headers** tab, and the **Body** tab. You can reference vault secrets as the values of your [global](/docs/sending-requests/variables/variables/#defining-global-variables), [environment](/docs/sending-requests/variables/variables/#defining-environment-variables), and [collection](/docs/sending-requests/variables/variables/#defining-collection-variables) variables. You can also use the Collection Runner to [manually run collections](/docs/collections/running-collections/intro-to-collection-runs/) that reference vault secrets.

> If you're using the Postman web app to send requests with references to vault secrets, you must use the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent) or the [Postman Browser Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-browser-agent).
>
> If you're referencing vault secrets linked with secrets stored in an external vault, you must use the [Canary build](https://www.postman.com/downloads/canary/) of the Postman desktop app. Learn about [external vault integrations](/docs/sending-requests/postman-vault/postman-vault-integrations/).
<!-- Also you must use the Postman desktop app to send requests with references to secrets you linked from an [external vault integration](/docs/sending-requests/postman-vault/postman-vault-integrations/). -->

Enclose the vault secret in double curly braces (`{{ }}`) and prefix the secret's name with `vault:` to reference it throughout your Postman team. For example, to reference a secret named "postman-api-key", use the following syntax:

```txt
{{vault:postman-api-key}}
```

<!-- ### Use vault secrets in scripts

You can get the current value of a vault secret in your scripts using the following syntax:

```js
//access a vault secret in you Postman Vault
pm.variables.get("vault:variable-key");
``` -->

![Reference vault secrets in Postman](https://assets.postman.com/postman-docs/v10/use-postman-vault-secrets-v10-23.jpg)

Secrets stored in your Postman Vault are masked by default when you generate [code snippets](/docs/sending-requests/create-requests/generate-code-snippets/) and when they're logged to the [Postman Console](/docs/sending-requests/troubleshooting-api-requests/). To edit whether secrets are masked in the Postman Console, select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right, then turn the toggle on or off next to **Mask vault secrets**.

> If you reference a vault secret as the initial value of a variable, such as an environment variable, the reference to the secret (for example `{{vault:secret-name}}`) is synced using Postman's cloud servers, and shared with anyone who has access to the workspace. The vault secret's value stored in your Postman Vault isn't synced or shared. Learn more about [initial and current values](/docs/sending-requests/variables/variables/#initial-and-current-values).

## Fix unresolved vault secrets

An *unresolved vault secret* is a secret that's not defined or Postman can't reference in your Postman Vault. When you're working on an API request, Postman highlights unresolved vault secrets in the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab. Postman highlights unresolved secret text in red.

A vault secret can be unresolved for the following reasons:

* The secret isn't present in your Postman Vault.
* You aren't using the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent) or the [Postman Browser Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-browser-agent) to send requests from the Postman web app.
* The secret is turned off in your Postman Vault.
* The secret isn't allowed to be in requests to the domain.

If you linked sensitive data from an [external vault integration](/docs/sending-requests/postman-vault/postman-vault-integrations/), a vault secret can also be unresolved for the following reasons:

* The integration isn't configured with correct details.
* Your computer isn't able to access your external vault provider.
* The integration was disconnected.
<!-- You aren't sending requests from the Postman desktop app. -->
* You aren't assigned the required roles for retrieving secrets from your external vault provider.
* You haven't reauthenticated with your external vault since you last signed in to Postman, or since the authentication session expired. Learn how to [reauthenticate with an external vault](/docs/sending-requests/postman-vault/postman-vault-integrations/#reauthenticate-with-an-external-vault).

> Learn about Postman Vault [features that require the Postman desktop app](#feature-availability).

If the vault secret exists in your Postman Vault and it's turned off, hover over the reference to the secret, then select **Enable Secret**.

![Turn on vault secrets](https://assets.postman.com/postman-docs/v10/turn-on-postman-vault-secret-v10-23.jpg)

If the vault secret exists in your Postman Vault and you're sending a request to a domain not in the allowed domains list, hover over the reference to the secret, then select **Update Domains**.

![Update allowed domains for vault secrets](https://assets.postman.com/postman-docs/v10/update-allowed-domains-postman-vault-key-v10-23.jpg)

If a vault secret is referenced in your request and you haven't entered your vault key, hover over the reference to the secret, enter your vault key, then select **Access Vault**.

![Enter vault key to access vault secrets](https://assets.postman.com/postman-docs/v10/enter-postman-vault-key-v10-23.jpg)

## Feature availability

The following features require the Postman desktop app:

* **Open Postman Vault from public workspaces** - You must use the Postman desktop app to open your Postman Vault from a [public workspace](/docs/collaborating-in-postman/using-workspaces/public-workspaces/), and reference vault secrets in a public workspace. If you're using the Postman web app, you must add new vault secrets to your Postman Vault if you're opening it from a public workspace.

* **Preserve vault secrets when you join or leave a team** - You must use the Postman desktop app to preserve your encrypted vault secrets after you [join a new team](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/#joining-a-team) or [leave a team](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/#leaving-a-team). If you're using the Postman web app, vault secrets won't be available from your Postman Vault when you join a new team or leave a team. Then you can add new vault secrets to the team you joined from, or a team you rejoined if using the Postman web app.

* **Create and manage Postman Vault integrations** ([Enterprise teams only](https://www.postman.com/pricing/)) - You must use the [Canary build](https://www.postman.com/downloads/canary/) of the Postman desktop app to [create and manage Postman Vault integrations](/docs/sending-requests/postman-vault/postman-vault-integrations/). <!-- If you're using the Postman web app, Postman Vault integrations won't be available. --> Postman Vault integrations won't be available if you're using the Postman web app, or if the feature isn't enabled for your Enterprise team.
