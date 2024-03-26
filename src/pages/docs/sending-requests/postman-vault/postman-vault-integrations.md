---
title: "Integrate Postman Vault with external vaults"
updated: 2024-03-15
early_access: true
plan: beta
---

> **[Postman Vault integrations are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

You can integrate your [Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/) with external vaults, such as Azure Key Vault. This enables you to add a vault secret that's linked to a secret in your external vault. You must authenticate with external vaults to link a secret and retrieve its value when you send HTTP requests.

<!-- You can create Postman Vault integrations from the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/). -->
If Postman Vault integrations are enabled for your Enterprise team, you can create integrations from the [Canary build](https://www.postman.com/downloads/canary/) of the Postman desktop app.

Before you integrate your Postman Vault with external vaults, make sure you understand how to [add vault secrets to your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets), and [reference vault secrets in Postman](/docs/sending-requests/postman-vault/postman-vault-secrets/#use-vault-secrets).

## Contents

* [About Postman Vault integrations](#about-postman-vault-integrations)
* [Integrate with Azure Key Vault](#integrate-with-azure-key-vault)
* [Integrate with HashiCorp Vault](#integrate-with-hashicorp-vault)
* [Integrate with AWS Secrets Manager](#integrate-with-aws-secrets-manager)
* [Set expiration duration for cached secrets](#set-expiration-duration-for-cached-secrets)
* [Link a different secret from an external vault](#link-a-different-secret-from-an-external-vault)
* [Reauthenticate with an external vault](#reauthenticate-with-an-external-vault)
* [Disconnect an integration](#disconnect-an-integration)

## About Postman Vault integrations

Postman Vault integrations enable you to link vault secrets with secrets that are stored in an external vault. You can then reference vault secrets in your local instance of Postman, and retrieve the value of external vault secrets when you send HTTP requests. Postman supports Postman Vault integrations with [Azure Key Vault](#integrate-with-azure-key-vault), [HashiCorp Vault](#integrate-with-hashicorp-vault), and [AWS Secrets Manager](#integrate-with-aws-secrets-manager).

> You'll need to [reauthenticate with external vaults](#reauthenticate-with-an-external-vault) each time you sign in to Postman, or if your authentication session expires.

You can only integrate your Postman Vault with one organization in an external vault provider at a time. If you want to integrate with a different organization in your external vault provider, you must [disconnect the integration](#disconnect-an-integration), then create a new integration that authenticates with a different organization. See the following details about creating and managing integrations with external vault providers:

* **Azure Key Vault and AWS Secrets Manager** - You create and manage the integration with your Postman Vault. This means you and your team members can integrate with different organizations in Azure Key Vault and AWS Secrets Manager.
* **HashiCorp Vault** - Only a Postman [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can create and manage the integration with your Postman Vault. This means that you and your team members must integrate with the same organization in HashiCorp.

## Integrate with Azure Key Vault

When setting up an integration with [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview), you need to authenticate with your Microsoft Azure account. Then you can link secrets stored in Azure Key Vault using the secret identifier for each secret.

> Your computer must be able to access your Microsoft Azure instance.

You can follow the steps to [create a secret](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal#add-a-secret-to-key-vault) from Azure Key Vault. You can also follow the steps to [retrieve a secret](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal#retrieve-a-secret-from-key-vault), enabling you to view the secret's identifier.

To integrate with Azure Key Vault and authenticate with your Azure account, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Connect** next to **Azure Key Vault**.
1. You'll be prompted to authorize Postman to access your Microsoft Azure account. After you grant access, you can close the browser tab and return to Postman.

To link a secret's value from Azure Key Vault, do the following:

1. In Azure, make sure you have at least the [`Azure Vault Reader` role](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide?tabs=azure-cli). This enables you to retrieve secrets stored in Azure Key Vault from your local instance of Postman.
1. In Postman, enter a name for the vault secret, hover over the **Value** cell, then select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px">.

    <img src="https://assets.postman.com/postman-docs/v10/link-azure-vault-secret-v10-24.jpg" alt="Link Azure value" width="544px"/>

    > If you've already integrated with an external vault, you can link a secret from a different external vault provider. Select the change external vault icon <img alt="Change vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the **Secret Identifier** on the **Link secret** window. The secret identifier is the URI of the secret in Azure Key Vault. Learn more about [identifiers in Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates).

    ```txt
    https://<vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version-id>
    ```

    > The latest version of the secret will be used unless you include the version ID.

1. Select **Use**.
1. You can [reference the vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#use-vault-secrets) in your local instance of Postman.

To view details about a secret you've linked from Azure Key Vault, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px"> next to a secret.

## Integrate with HashiCorp Vault

You must be a Postman [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to set up an integration with Postman Vault and [HashiCorp Vault](https://developer.hashicorp.com/vault/docs/what-is-vault). You need to set up an [OpenID Connect (OIDC) identity provider](https://developer.hashicorp.com/vault/docs/concepts/oidc-provider) in HashiCorp Vault, enabling Postman to access your HashiCorp Vault instance. To set up the integration in Postman, you need to enter the OIDC client URL, JWT auth path, OIDC client ID, role name, and namespace for your OIDC identity provider.

You can use the [HashiCorp Vault CLI](https://developer.hashicorp.com/vault/docs/commands) to set up an OIDC identity provider from the Vault Browser CLI or your [local installation of Vault](https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-install). If you're using HashiCorp Vault in [HashiCorp Cloud Platform](https://developer.hashicorp.com/hcp/docs/hcp), make sure to use the [public cluster URL](https://developer.hashicorp.com/vault/tutorials/cloud/vault-access-cluster) for your HashiCorp Vault. Instead of manually executing each command, you can [run a script that executes the setup commands](#download-and-run-the-hashicorp-vault-setup-script).

Once a Postman Team or Super Admin sets up the integration, you need to authenticate with your HashiCorp account. Then you can link secrets stored in HashiCorp Vault using the path to the KV (key-value) secrets engine, path to the secret, and key name for each secret.

> Your computer must be able to access your HashiCorp instance.

You can also follow the steps to [create a KV secrets engine](https://developer.hashicorp.com/vault/docs/secrets/kv), and store [static key-value secrets](https://developer.hashicorp.com/vault/tutorials/secrets-management/static-secrets) or [versioned key-value secrets](https://developer.hashicorp.com/vault/tutorials/secrets-management/versioned-kv) in it. Postman only supports KV secrets engines.

To set up an OIDC identity provider in HashiCorp Vault using the CLI, do the following:

1. Make sure you have permission to set up an OIDC identity provider. This includes permission to create an OIDC client application, OIDC provider, auth method, policy, and role. Learn more about the [minimum permissions required to set up an OIDC identity provider](#permissions-to-set-up-an-oidc-identity-provider).
1. Create a public [OIDC client application](https://developer.hashicorp.com/vault/docs/concepts/oidc-provider#client-applications). Learn about the [endpoint for creating a client application](https://developer.hashicorp.com/vault/api-docs/secret/identity/oidc-provider#create-or-update-a-client).

    ```shell
    vault write identity/oidc/client/<client-application-name> redirect_uris="http://127.0.0.1:10545/,http://127.0.0.1:10534/" client_type=public assignments=allow_all
    ```

1. Get the client ID of the OIDC client application, then save this value for later. Learn about the [output options for printing a specific field](https://developer.hashicorp.com/vault/docs/commands/read#output-options).

    ```shell
    vault read -field=client_id identity/oidc/client/<client-application-name>
    ```

1. Create an [OIDC provider](https://developer.hashicorp.com/vault/docs/concepts/oidc-provider#oidc-providers). The value of `issuer` is the address of your Vault cluster as a URL and port, such as `https://192.0.2.255:8300`. Learn about the [endpoint for creating an OIDC provider](https://developer.hashicorp.com/vault/api-docs/secret/identity/oidc-provider#create-or-update-a-provider).

    ```shell
    vault write identity/oidc/provider/<oidc-provider-name> allowed_client_ids="<oidc-client-id>" issuer="<vault-cluster-url>"
    ```

    > If you're using HashiCorp Cloud Platform, the value of `issuer` must be the public cluster URL.

1. Get the URL for the OIDC provider, then save this value for later. Learn about the [output options for printing a specific field](https://developer.hashicorp.com/vault/docs/commands/read#output-options).

    ```shell
    vault read -field=issuer identity/oidc/provider/<oidc-provider-name>
    ```

1. Create a [JSON Web Token (JWT) auth method](https://developer.hashicorp.com/vault/docs/auth/jwt) named "postman-jwt". Learn about the [endpoint for creating auth methods](https://developer.hashicorp.com/vault/api-docs/system/auth#enable-auth-method).

    ```shell
    vault write /sys/auth/postman-jwt type="jwt"
    ```

    > You can use a different JWT auth method name. Make sure to save this name for later.

1. Configure a role named "postman" with permission to authenticate using the "postman-jwt" auth method. Learn about the [endpoint for configuring the role](https://developer.hashicorp.com/vault/api-docs/auth/jwt#configure).

    ```shell
    vault write auth/postman-jwt/config oidc_discovery_url="<oidc-provider-url>" default_role=postman
    ```

    > You can use a different role name. Make sure to save this name for later.

1. Create a HashiCorp Vault policy that allows you to read data from all secrets engines, then save the policy name for later. This policy will be attached to the "postman" role. Learn about the [endpoint for creating a policy](https://developer.hashicorp.com/vault/api-docs/system/policy#create-update-policy).

    ```shell
    vault write sys/policy/<policy-name> policy='path "*" { capabilities=["read"] } path "sys/*" { capabilities=["deny"] } path "auth/*" { capabilities=["deny"] }'
    ```

    > You can update the policy to restrict the "postman" role from accessing specific secrets engines. At a minimum, the policy must allow the "postman" role to access the secrets engine that stores secrets you'll retrieve in Postman.

1. Create a role named "postman" and attach the policy to it. Learn about the [endpoint for creating a role](https://developer.hashicorp.com/vault/api-docs/auth/jwt#create-update-role).

    ```shell
    vault write auth/postman-jwt/role/postman bound_audiences="<oidc-client-id>" user_claim=sub token_policies=<policy-name> role_type=jwt
    ```

To integrate with HashiCorp Vault, do the following:

1. As a Postman Team or Super Admin, [open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right.
1. Select **Set Up Integration** next to **HashiCorp Vault**.

    <!-- <img src="https://assets.postman.com/postman-docs/v10/postman-vault-settings-v10-24.jpg" alt="Postman Vault settings" width="443px"/> -->

1. Enter the following on the **Set up HashiCorp Integration** window:

    * **OIDC Provider URL** - Enter the OIDC provider URL of the client application.
    * **JWT Auth Path** - Enter the JWT auth path. If you used the recommended JWT auth path, enter "postman-jwt".
    * **Client Id** - Enter the OIDC client application's ID.
    * **Role** - Enter the role name. If you used the recommended role name, enter "postman".
    * **Namespace (optional)** - Optionally, enter the [namespace](https://developer.hashicorp.com/vault/docs/enterprise/namespaces) where you want users to manage their sensitive data. If you're already using namespaces, Postman recommends creating a new namespace for this integration.

1. Select **Set Up HashiCorp**.

> Postman Team and Super Admins can edit the HashiCorp Vault integration later. Select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right, then select **Edit** next to **HashiCorp Vault**.

To authenticate with your HashiCorp account, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can authenticate when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Connect** next to **HashiCorp Vault**.
1. You'll be prompted to authorize Postman to access your HashiCorp account.  After you grant access, you can close the browser tab and return to Postman.

To link a secret's value from HashiCorp Vault, do the following:

1. In Postman, enter a name for the vault secret, hover over the **Value** cell, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px">, then select **HashiCorp Vault**.

    <img src="https://assets.postman.com/postman-docs/v10/link-hashicorp-vault-secret-v10-24.jpg" alt="Link HashiCorp value" width="541px"/>

    > If you've already integrated with an external vault, you can link a secret from a different external vault provider. Select the change external vault icon <img alt="Change vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the following on the **Link secret** window:

    * **Secret Engine** - The path where the [KV secrets engine](https://developer.hashicorp.com/vault/docs/secrets/kv) is enabled.
    * **Secret Path** - The path for the secret in your KV secrets engine.
    * **Secret Key** - The key name in the secret's key-value pair.

1. Select **Use**.
1. You can [reference the vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#use-vault-secrets) in your local instance of Postman.

To view details about a secret you've linked from HashiCorp Vault, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px"> next to a secret.

### Permissions to set up an OIDC identity provider

To set up an OIDC identity provider, you must at least have the permissions specified in the following [HashiCorp Vault policy](https://developer.hashicorp.com/vault/tutorials/policies/policies):

```json
path "/identity/oidc/client/*" {
    capabilities=["create", "read"]
}

path "/identity/oidc/provider/*" {
    capabilities=["create", "read"]
}

path "/sys/auth/*" {
    capabilities=["sudo", "update"]
}

path "/auth/*" {
    capabilities=["update", "create"]
}

path "/sys/policy/*" {
    capabilities=["update"]
}
```

* `/identity/oidc/client/*` - Allows you to create and read any OIDC client application in your HashiCorp instance.
* `/identity/oidc/provider/*` - Allows you to create and read any OIDC provider in your HashiCorp instance.
* `/sys/auth/*` - Allows you to create a new auth method. This permission enables you to create a new JSON Web Token (JWT) auth method.
* `/auth/*` - Allows you to update the JWT auth method, and create a new role in the JWT auth method.
* `/sys/policy/*` - Allows you to create a policy. The policy will be used to attach to the new role.

### Download and run the HashiCorp Vault setup script

You can optionally [download the HashiCorp Vault setup script](https://voyager.postman.com/script/hashicorp-setup-script-postman.sh) that will set up your OIDC identity provider in HashiCorp Vault, so you don't have to manually execute each command. The script uses the [HashiCorp Vault CLI](https://developer.hashicorp.com/vault/docs/commands) to execute the commands. Before you run the script, make sure you [install Vault locally](https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-install) and set the required environment variables.

After the script runs, it prints the values you need to share with Postman to complete the HashiCorp Vault integration.

The script provides options you can use to test and customize the commands. You can add options after you specify the script's filename and Vault cluster URL:

```bash
$ hashicorp-setup-script-postman <vault-cluster-url> [options]
```

> Replace `<vault-cluster-url>` with the address of your Vault cluster URL and port. If you're using HashiCorp Cloud Platform, replace `<vault-cluster-url>` with the public cluster URL.

| Option | Details |
|:--|:--|
| `-d`, `--dry-run` | Only print the commands |
| `--help` | Output usage information |
| `-y` | Don't prompt for user input before executing each command |

The script also provides environment variables you can set to authenticate with your HashiCorp instance and customize your OIDC identity provider:

| Environment variable | Details |
|:--|:--|
| `VAULT_TOKEN` | **Required** An [authentication token](https://developer.hashicorp.com/vault/docs/concepts/tokens) with permission to create an OIDC client application, OIDC provider, auth method, policy, and role. Learn more about the [minimum permissions required to set up an OIDC identity provider](#permissions-to-set-up-an-oidc-identity-provider). |
| `VAULT_ADDR` | **Required** The address of your Vault cluster as a URL and port, such as `https://192.0.2.255:8300`. If you're using HashiCorp Cloud Platform, the value must be the public cluster URL. |
| `VAULT_NAMESPACE` | The namespace where you want your users to manage their sensitive data. If you're already using namespaces, Postman recommends creating a new namespace for this integration. Default: `""` |
| `OIDC_CLIENT_NAME` | The name of the OIDC client application. Default: `postman-integration-client` |
| `REDIRECT_URI` | The redirect URIs for the OIDC client application. Default: `http://127.0.0.1:10545/,http://127.0.0.1:10534/` |
| `JWT_AUTH_PATH` | The path for the new JWT auth method. Default: `postman-jwt` |
| `OIDC_ROLE` | The name of the role with permission to authenticate using the new JWT auth method. Default: `postman` |
| `POLICY_NAME` | The name of the HashiCorp Vault policy that's attached to the role. Default: `postman-integration-policy` |

> Don't change the default value for `REDIRECT_URI`.

<!-- -->

> You can update the policy (`POLICY_CONTENT`) specified in the script to restrict the "postman" role from accessing specific secrets engines. At a minimum, the policy must allow the "postman" role to access the secrets engine that stores secrets you'll retrieve in Postman.

## Integrate with AWS Secrets Manager

When setting up an integration with [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/managing-secrets.html), you need to authenticate with your AWS account, entering the access key pair (access key ID and secret access key), region, and multi-factor authentication (MFA) token for your AWS account. Then you can link secrets stored in AWS Secrets Manager using the secret Amazon Resource Name (ARN), role ARN, and version for each secret.

> Your computer must be able to access your Amazon Web Services instance.

You can follow the steps to [create a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_secret.html), [find a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html), and [retrieve a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html) from AWS Secrets Manager. Postman retrieves the value exactly as it's entered in the **Plaintext** tab, so enter the secret's value in the format you want it returned in Postman. To view a secret's details, including the secret ARN, open the **Secrets Manager console** then select the secret's name.

To integrate with AWS Secrets Manager and authenticate with your AWS account, do the following:

1. If your AWS account requires an MFA token to authenticate, make sure you have the [`iam:listMFADevices` permission](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html) in the [identity-based policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html) associated with your AWS user. This enables Postman to check if your AWS account has MFA enabled, and then prompt you to enter your MFA token.
1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Connect** next to **AWS Secrets Manager**.
1. You'll be prompted to authorize Postman to access your AWS account. If you need to manually authorize Postman, enter the following on the **Authenticate AWS Secrets Manager** window:

    * **Access Key** - Enter the [access key ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for your AWS account.
    * **Secret Key** - Enter the [secret access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for your AWS account.
    * **Region** - Enter the AWS [region](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-regions) where your AWS account is located.

    > You can instead autofill each field from the credentials file in your `home` directory. To create the credentials file, [install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html), then [configure the credentials file](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) with your access key, secret key, and region. Once the file is configured, select a field on the **Authenticate AWS Secrets Manager** window, then select <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> **Autofill from config file**.
    >
    > Postman checks the `main` and `default` profiles in that order in your credentials file. You can learn more about the credentials [file format](https://docs.aws.amazon.com/sdkref/latest/guide/file-format.html) and [default location](https://docs.aws.amazon.com/sdkref/latest/guide/file-location.html) of the file in your `home` directory.

1. Select **Authenticate**.

1. If your AWS account requires [multi-factor authentication](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html), enter an **MFA Token**.

1. Select **Authenticate**.

To link a secret's value from AWS Secrets Manager, do the following:

1. In AWS, make sure you have the [`secretsmanager:GetSecretValue` permission](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html) in the identity-based policy associated with your AWS user. This enables you to retrieve secrets stored in AWS Secrets Manager from your local instance of Postman.
1. In Postman, enter a name for the vault secret, hover over the **Value** cell, then select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px">.

    <img src="https://assets.postman.com/postman-docs/v10/link-aws-vault-secret-v10-24.jpg" alt="Link AWS value" width="542px"/>

    > If you've already integrated with an external vault, you can link a secret from a different external vault provider. Select the change external vault icon <img alt="Change vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the following on the **Link secret** window:

    * **Secret ARN** - Enter the unique [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that identifies the secret. Postman retrieves the value exactly as it's entered in the secret's **Plaintext** tab.

        ```txt
        arn:aws:secretsmanager:<region>:<account-id>:secret:<secret-name>-<six-random-characters>
        ```

    * **Role ARN (Optional)** - The secret's [permissions policy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html) might require you to assume a role with elevated permissions to access it. Enter the unique ARN specifying the required role to temporarily assume it. Learn more about [assuming roles in AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html).

        Also make sure you have the `iam:assumeRole` permission in the identity-based policy associated with your AWS user.

        ```txt
        arn:aws:iam::<account-id>:role/<role-name-with-path>
        ```

    * **Version (Optional)** - Enter the [version](https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version) of the secret. The current version of the secret will be used if a version isn't provided.

1. Select **Use**.
1. You can [reference the vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#use-vault-secrets) in your local instance of Postman.

To view details about a secret you've retrieved from AWS Secrets Manager, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px"> next to a secret.

## Set expiration duration for cached secrets

The value of secrets retrieved from external vaults are stored in a local cache for 1 hour by default. When secrets are cleared from the local cache, Postman retrieves your secrets' values from your external vaults, storing them in a local cache again for the specified duration. You can customize the duration that values are stored in the local cache, and you can manually reset the value stored in the local cache.

You can customize the amount of time secrets' values are stored in a local cache for. Select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right, then specify the amount of time secrets are valid for (in minutes) next to **Secret expiration duration**.

You can also manually reset secrets' values stored in a local cache. This ensures that Postman is using the latest value for your secret. Select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right, then select **Manually Reset Cache**.

## Link a different secret from an external vault

You can link a different secret stored in an external vault you've created an integration with. To link a different secret, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px"> next to a secret, then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">. Enter the required details on the **Link secret** window, then select **Use**.

<img src="https://assets.postman.com/postman-docs/v10/retrieve-different-vault-secret-v10-24.jpg" alt="Link different secret value" width="552px"/>

> Postman recommends that you [manually reset the value stored in the local cache](#set-expiration-duration-for-cached-secrets).

To update the value of a secret stored in an external vault, you must sign in to your external vault provider separately and update the secret's value there. You can't update the value of secrets stored in external vaults directly from Postman.

## Reauthenticate with an external vault

You'll need to reauthenticate with your integrated external vaults each time you sign in to Postman, or if your authentication session expires.

To reauthenticate with an external vault, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault).
1. Select the vault integration icon <img alt="Reauthenticate Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-reauth-postman-vault.jpg#icon" width="22px"> in the **Value** cell with the integration that you need to reauthenticate with.
1. Select **Re-Authenticate Vault**.

    <img src="https://assets.postman.com/postman-docs/v10/reauth-external-vault-provider-v10-24.jpg" alt="Reauthenticate external vault" width="555px"/>

1. Follow the steps to reauthenticate with [Azure Key Vault](#integrate-with-azure-key-vault), [HashiCorp Vault](#integrate-with-hashicorp-vault), or [AWS Secrets Manager](#integrate-with-aws-secrets-manager).

## Disconnect an integration

You can disconnect Azure Key Vault and AWS Secrets Manager integrations from your Postman Vault. You must be a Postman [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to disconnect a HashiCorp Vault integration. When you disconnect an integration, references to the vault secret will be unresolved in your local instance of Postman.

To disconnect an integration, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right.
1. Select **Disconnect** next to the integration you want to disconnect.

You can also select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault-2.jpg#icon" width="20px"> in the **Value** cell, and select the disconnect icon <img alt="Disconnect icon" src="https://assets.postman.com/postman-docs/icons/icon-disconnect.jpg#icon" width="21px">.
