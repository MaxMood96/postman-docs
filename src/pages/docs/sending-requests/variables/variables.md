---
title: "Store and reuse values using variables"
updated: 2023-02-14
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "How to Use Variables in Postman"
    url: "https://youtu.be/BKLC-_C9fxE"
  - type: link
    name: "Use Secret Variables | Postman Level Up"
    url: "https://youtu.be/n3MNxYQRd6I"
  - type: link
    name: "Intro to Postman | Chain Requests"
    url: "https://youtu.be/4fULCou_7Wc"
  - type: link
    name: "Consuming REST APIs | Postman Enterprise"
    url: "https://youtu.be/oI-GyWB_6jA"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to persist Postman variables"
    url: "https://blog.postman.com/how-to-persist-postman-variables/"
  - type: link
    name: "How to Securely Deploy Postman at Scale, Part 2: Information Management"
    url: "https://blog.postman.com/how-to-securely-deploy-postman-at-scale-part-2-information-management/"
  - type: link
    name: "Faster and easier variable management in Postman"
    url: "https://blog.postman.com/faster-and-easier-variable-management-in-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Paylocity uses variables to automate workflows"
    url: "https://www.postman.com/case-studies/paylocity/"
---

_Variables_ enable you to store and reuse values in Postman. By storing a value as a variable, you can reference it throughout your collections, environments, requests, and test scripts. Variables help you work efficiently, collaborate with teammates, and set up dynamic workflows.

## Contents

* [Understanding variables](#understanding-variables)
* [Variable scopes](#variable-scopes)
* [Initial and current values](#initial-and-current-values)
* [Variable types](#variable-types)
* [Defining variables](#defining-variables)
* [Using variables](#using-variables)
* [Sharing and persisting data](#sharing-and-persisting-data)
* [Fixing unresolved variables](#fixing-unresolved-variables)

## Understanding variables

A variable is a symbolic representation of data that enables you to access a value without having to enter it manually wherever you need it. This can be useful if you are using the same values in multiple places. Variables make your requests more flexible and readable, by abstracting the detail away.

For example, if you have the same URL in more than one request, but the URL might change later, you can store the URL in a variable `base_url` and reference it in your requests using `{{base_url}}`. If the URL changes, you can change the variable value and it will be reflected throughout your collection, wherever you've used the variable name.

The same principle applies to any part of your request where data is repeated. Whatever value is stored in the variable will be included wherever you've referenced the variable when your requests run. If the base URL value is `https://postman-echo.com`, and is listed as part of the request URL using `{{base_url}}/get`, Postman will send the request to `https://postman-echo.com/get`.

![Environment editor](https://assets.postman.com/postman-docs/v10/environment-editor-v10-22.jpg)

<img alt="Reference variable" src="https://assets.postman.com/postman-docs/v10/reference-var-v10-22.jpg"/>

Variables in Postman are key-value pairs. Each variable name represents its key, so referencing the variable name enables you to access its value.

You can use variables to pass data between requests and tests, for example if you are [chaining requests](https://www.postman.com/postman/workspace/postman-team-collections/collection/1559645-81122f8b-5e07-4760-9504-f4387f45d2bc) in a collection.

You can use environments to group sets of variables together and share them with collaborators, for example if you use one set of config details for your production server and another for testing. See [Group sets of variables in Postman using environments](/docs/sending-requests/variables/managing-environments/) for more on how you can incorporate environments into your team workflows.

<!-- You can also [use your Postman Vault to store secrets](/docs/sending-requests/postman-vault-secrets/) locally. Secrets are locally available to reuse in all of your workspaces in your Postman team, and aren't synced to the Postman cloud. This enables you to store and reuse sensitive data while using Postman. -->

## Variable scopes

Postman supports variables at different scopes, allowing you to tailor your processing to a variety of development, testing, and collaboration tasks. Scopes in Postman relate to the different contexts that your requests run in, and different variable scopes are suited to different tasks.

In order from broadest to narrowest, these scopes are: _global_, _collection_, _environment_, _data_, and _local_. <!-- TODO: mention the vault scope for Postman Vault -->

* **Global variables** enable you to access data between collections, requests, test scripts, and environments. Global variables are available throughout a [workspace](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). Since global variables have the broadest scope available in Postman, they're well-suited for testing and prototyping. In later development phases, use more specific scopes.
* **Collection variables** are available throughout the requests in a collection and are independent of environments. Collection variables don't change based on the selected environment. Collection variables are suitable if you're using a single environment, for example for auth or URL details.
* **Environment variables** enable you to scope your work to different environments, for example local development versus testing or production. One environment can be active at a time. If you have a single environment, using collection variables can be more efficient, but environments enable you to specify [role-based access levels](/docs/sending-requests/variables/team-environments/#manage-environment-roles).
* **Data variables** come from external CSV and JSON files to define data sets you can use when running collections with [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/) or the [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/). Data variables have current values, which don't persist beyond request or collection runs.
* **Local variables** are temporary variables that are accessed in your request scripts. Local variable values are scoped to a single request or collection run, and are no longer available when the run is complete. Local variables are suitable if you need a value to override all other variable scopes but don't want the value to persist once execution has ended.

![Variable scope](https://assets.postman.com/postman-docs/v10/var-scope-v10.jpg)

> If a variable with the same name is declared in two different scopes, the value stored in the variable with narrowest scope will be used. For example, if there is a global variable named `username` and a local variable named `username`, the local value will be used when the request runs.
<!-- -->
> Postman stores variables as strings. If you store objects or arrays, remember to `JSON.stringify()` them before storing, and `JSON.parse()` them when you retrieve them.

## Initial and current values

When you edit variables, each one has an _Initial value_ and _Current value_:

* **Initial value** is a value that's set in the element (collection, environment, or globals) where the variable is defined. This value is synced to Postman's servers, and is shared with your team when you share that element. The initial value can be useful when collaborating with teammates.

  Setting an initial value can be useful when sharing elements, but it's important to remember that sensitive data in an initial value will also be shared with others, and potentially with the world. Be careful setting initial values, and consider using secret variables to mask sensitive data.

* **Current value** is used when sending a request. These are local values, and aren't synced to Postman's servers. If you change a current value, it won't be persisted in the original shared collection, environment, or globals.

You can persist or reset current values you have changed in variables. For more information, see [sharing and persisting data](#sharing-and-persisting-data).

## Variable types

Beyond scope, global and environment variables can also be defined by type. The two variable types that you can configure for global and environment variables are:

* **Default type** is automatically assigned to variables. This type is shown as plain text and doesn't have extra properties.
* **Secret type** masks the [initial and current values](#specifying-variable-detail) for all workspace members and can be used to prevent unintentional disclosure of sensitive data, including API secrets, passwords, tokens, and keys.

<!-- You can also [use your Postman Vault to store secrets](/docs/sending-requests/postman-vault-secrets/) locally. This enables you to store and reuse sensitive data while using Postman. -->

Users with [Editor](/docs/collaborating-in-postman/roles-and-permissions/) access on a workspace (for global variables) or environment (for environment variables) can opt to change these variables from default to secret type.

> Regardless of the type you configure for a variable, Postman stores variables as strings on its servers. To learn about how Postman keeps your data safe, see [Security at Postman](https://www.postman.com/trust/security/).

To set the variable type to secret, do the following:

1. Select the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> in the [workbench](/docs/getting-started/basics/navigating-postman/#environment-selector-and-environment-quick-look).
1. For environment or global variables, select **Edit** to open the editor.

    <img alt="Environment editor" src="https://assets.postman.com/postman-docs/v10/environment-editor-v10-22.jpg">

    > You can also edit an environment by navigating to the workspace it resides in and selecting **Environments** from the sidebar, then selecting your environment.

1. Select **default** next to the variable you want to change to open the dropdown, then select **secret** to update the variable type.
1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to confirm your changes.

### Changing from secret to default variable type

You must have [Editor](/docs/collaborating-in-postman/roles-and-permissions/) access on a workspace (for global variables) or environment (for environment variables) to control variable type. Editors can change the variable type from secret to default at any time, and vice versa. When you change a variable's type from secret back to default, you must confirm by selecting **Change type**.

<img alt="Confirm change of variable from secret" src="https://assets.postman.com/postman-docs/environment-change-type-confirmation-v9.13.jpg" width="400px">

### Viewing and changing secret variable values

All workspace members can view a secret variable's initial and current values by selecting the eye icon <img alt="Unmask variable icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px"> next to the variable.

Editors can change a variable's initial values, which are shared with collaborators, by selecting the eye icon <img alt="Unmask variable icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px"> next to the variable, then selecting the initial value. All collaborators can change a variable's current values by selecting the eye icon <img alt="Unmask variable icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px">, then selecting the current value.

## Defining variables

You can define variables in a variety of ways, depending on if you need [global](#defining-global-variables), [environment](#defining-environment-variables), or [collection](#defining-collection-variables) scope.

<!-- You can also define secrets locally at the [vault](/docs/sending-requests/postman-vault-variables/) scope using your Postman Vault. This enables you to store and reuse sensitive data while using Postman. -->

To define variables at any scope in the request builder, do the following:

1. Select the data you need, for example in the address, parameters, headers, or body. Select **Set as variable**.

    <img src="https://assets.postman.com/postman-docs/v10/set-as-var-prompt-v10-22.jpg" alt="Set as variable"/>

1. Select **Set as a new variable**.

    <img src="https://assets.postman.com/postman-docs/v10/set-as-a-new-var-v10-22.jpg" alt="Set as variable" width="302px"/>

1. Enter a **Name**, confirm the **Value** is correct, and select a scope. Select **Set variable**.

    <img src="https://assets.postman.com/postman-docs/v10/set-as-var-modal-v10-22.jpg" alt="Set as variable"/> <!-- TODO: update screenshot to include Postman Vault scope -->

> Remember to delete variables you are no longer using.

### Setting response body values as variables

To set the values for existing variables to values from a request's response body, do the following:

1. Select the text, then right-click or Control-click.
1. Select the relevant scope (environment or global), then select the name of the variable.

   <img alt="Set Variable from Text" src="https://assets.postman.com/postman-docs/v10/set-var-text-v10-22.jpg" width="467px"/>

### Defining global variables

To view global variables, do the following:

1. Select **Environments** in the sidebar.
1. Select **Globals**.

> You can also view global variables by selecting the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> in the [workbench](/docs/getting-started/basics/navigating-postman/#environment-selector-and-environment-quick-look).
>
> The environment quick look shows the selected environment along with global variables in your workspace. You can edit the current value for an existing variable inline by selecting the value. To add a variable, select __Edit__ next to the global section.

To add a new global variable, do the following:

1. Select **Add a new variable**, and enter a name for the variable.
1. Select a **Type** for the new variable.
1. Add an **Initial Value**, and if you choose, a **Current Value**.
1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to confirm your changes.

To edit an existing global variable, do the following:

1. Change the desired variable value.
1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to confirm your changes.

You can also [define global variables in scripts](#defining-variables-in-scripts).

#### Downloading global environments

To download global variables as JSON, do the following:

1. Select **Environments** in the sidebar.
1. Select **Globals**.
1. Select **Export**.
1. Choose where to save the file, then select **Save**.

### Defining environment variables

To view environment variables, do the following:

1. Select **Environments** in the sidebar.
1. Select the environment you want to inspect variables for.

> You can also inspect environment variables by selecting the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> in the [workbench](/docs/getting-started/basics/navigating-postman/#environment-selector-and-environment-quick-look).
>
> The environment quick look shows the selected environment along with global variables in your workspace. You can edit the current value for an existing variable inline by selecting the value. To add a variable, select __Edit__ next to the environment section.

To add a new environment variable, do the following:

1. Select **Add a new variable**, and enter a name for the variable.
1. Select a **Type** for the new variable.
1. Add an **Initial Value**, and if you choose, a **Current Value**.
1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to confirm your changes.

To edit an existing environment variable, do the following:

1. Change the desired variable value.
1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to confirm your changes.

> * If you have Editor access to the environment, you can add and edit variables.
> * If you have Viewer access to the environment, you are restricted to updating the _current value_ of existing variables. Any variables you edit are accessible to you, but not to collaborators in your [workspace](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).
>
> See [Managing environments](/docs/sending-requests/variables/managing-environments/) for more on working with environments in your team.

You can also [define environment variables in scripts](#defining-variables-in-scripts).

### Defining collection variables

You can add collection variables when you create the collection or at any time after that.

To create or edit a variable for an existing collection, do the following:

1. Select **Collections** in the sidebar.
1. Select a collection, and then select the **Variables** tab.

![Edit Collection](https://assets.postman.com/postman-docs/v10/collection-variables-v10-22.jpg)

> If you don't have Editor access to a collection, you can select __Request Access__. Without Editor access, you won't be able to add new collection variables, update initial values, or persist values. You can edit the current value for local use, override the collection variable by using an environment variable with the same name, or [request Editor access](/docs/collaborating-in-postman/requesting-access-to-elements/) to the collection.

You can also [define collection variables in scripts](#defining-variables-in-scripts).

### Defining variables in scripts

You can set variables programmatically in your request scripts.

Method | Use-case | Example
--- | --- | ---
`pm.globals` | Use to define a global variable. | `pm.globals.set("variable_key", "variable_value");`
`pm.collectionVariables` | Use to define a collection variable. | `pm.collectionVariables.set("variable_key", "variable_value");`
`pm.environment` | Use to define an environment variable in the currently selected environment. | `pm.environment.set("variable_key", "variable_value");`
`pm.variables` | Use to define a local variable. | `pm.variables.set("variable_key", "variable_value");`
`unset` | You can use `unset` to remove a variable. | `pm.environment.unset("variable_key");`

> If you don't have Editor access to an environment, your script code will affect the current value but won't be synced or shared with your team.

For instructions on how to use variables in pre-request or test scripts, see [Using variables in scripts](#using-variables-in-scripts).

### Specifying variable detail

You can add and edit variables at any time. All you need to include for a new variable is a name. You can choose to supply an initial value, but you can also set it later, including from [scripts](https://learning.postman.com/docs/writing-scripts/intro-to-scripts/). Use a variable's checkbox to turn it on or off.

Initial values are shared when you share a collection or environment. Current values are local and not synced or shared. See [Initial and current values](#initial-and-current-values) for more on local versus synced variables.

## Using variables

You can use double curly braces to reference variables throughout Postman. For example, to reference a variable named `username` in your request authorization settings, you would use the following syntax with double curly braces around the name:

```js
{{username}}
```

When you run a request, Postman will resolve the variable and replace it with its current value.

For example, you could have a request URL referencing a variable as follows:

```js
https://postman-echo.com/get?customer_id={{cust_id}}
```

Postman will send whatever value you currently have stored for the `cust_id` variable when the request runs. If `cust_id` is currently `3`, the request will be sent to the following URL including the query parameter:

```js
https://postman-echo.com/get?customer_id=3
```

If you are want to access a variable from within a request body, wrap its reference in double-quotes:

```js
{ "customer_id" : "{{cust_id}}" }
```

You can use variables in request URLs, parameters, headers, authorization, body, and header presets.

![Variables in request](https://assets.postman.com/postman-docs/v10/var-auth-v10-22.jpg)

When you hover over a variable, Postman shows an overview of its current status. As you add variables to your requests, Postman prompts you with any that are currently defined.

![Variable prompt](https://assets.postman.com/postman-docs/v10/var-prompt-v10-22.jpg)

The prompt indicates the current value, scope (highlighted by color), and overridden status where relevant.

![Overridden variable](https://assets.postman.com/postman-docs/v10/overridden-var-v10-22.jpg)

If a variable is unresolved, Postman highlights it in red. For information on how to fix an unresolved variable, see [Fixing unresolved variables](#fixing-unresolved-variables).

<img alt="Unresolved variable" src="https://assets.postman.com/postman-docs/v10/unresolved-variable-v10-22.jpg"/>

### Using dynamic variables

Postman provides dynamic variables you can use in your requests.

Examples of dynamic variables include:

* `{{$guid}}` : A v4-style GUID
* `{{$timestamp}}`: The current Unix timestamp in seconds
* `{{$randomInt}}`: A random integer between 0 and 1000

See the [Dynamic Variables](/docs/writing-scripts/script-references/variables-list/) section for a full list.

### Using variables in scripts

You can retrieve the current value of a variable in your scripts using the object representing the scope level and the `.get` method:

```js
//access a variable at any scope including local
pm.variables.get("variable_key");
//access a global variable
pm.globals.get("variable_key");
//access a collection variable
pm.collectionVariables.get("variable_key");
//access an environment variable
pm.environment.get("variable_key");
```

> Using `pm.variables.get()` to access variables in your scripts gives you the option to change variable scope without affecting your script functionality. This method will return whatever variable currently has highest precedence (or narrowest scope).

To use [dynamic variables](#using-dynamic-variables) in pre-request or test scripts, use `pm.variables.replaceIn()`, for example `pm.variables.replaceIn('{{$randomFirstName}}')`.

See the [Sandbox Reference](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) for more details about scripting with variables.

#### Logging variables

You can log variable values to the [Postman Console](/docs/sending-requests/response-data/troubleshooting-api-requests/) while your requests run.

Use the following syntax in your script to log the value of a variable:

```js
console.log(pm.variables.get("variable_key"));
```

To view the results, select <img alt="Console icon" src="https://assets.postman.com/postman-docs/icon-console-v9.jpg#icon" width="16px"> **Console** in the footer. You can also access the Console by selecting **View > Show Postman Console**.

![Log a variable value](https://assets.postman.com/postman-docs/v10/log-var-v10-22.jpg)

### Using data variables

The Collection Runner lets you import a CSV or a JSON file, and use the values from the data file inside requests and scripts. You can't set a data variable inside Postman because it's pulled from the data file, but you can access data variables inside scripts, for example using `pm.iterationData.get("variable_name")`.

For more details, see [working with data files](/docs/collections/running-collections/working-with-data-files/) and the [Sandbox API reference](/docs/writing-scripts/script-references/postman-sandbox-api-reference/).

## Sharing and persisting data

When you edit global, collection, and environment variables in Postman, there is a __Current value__ that you can choose to __Persist__ or __Reset__ for individual variables. You can also select **Persist All** or **Reset All** to apply this setting to all variables. These enable you to control what happens within your local instance of Postman, independently of how the data is synced with anyone sharing your workspace, requests, collections, and environments.

When you create or edit a variable, you can enter both an initial and a current value. When you create a new variable in Postman, if you leave the current value empty, it will autofill with the initial value. If you specify a current value, it will be local to your instance. The __Persist__ option pushes your current value to the shared data, updating the initial value to match the current value.

> If you don't have Editor access to an environment, you can't edit the initial value of an environment variable. You can edit the current value, and your edit won't be visible to anyone sharing your [workspace](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).

Using __Persist__ makes your current value [sync](/docs/getting-started/basics/syncing/) with Postman's servers and be reflected for anyone sharing your collection or environment. To reset your current local values to reflect the initial shared values, use __Reset__.

To persist individual values, do the following:

1. Hover over a variable's current value.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the value.
1. Select **Persist**.

Your local session in Postman can use values that are transient and visible to you, but aren't synced or shared with your team. This lets you develop and test using private credentials or experimental values, without risk of exposing these details or affecting others on your team.

> For example, your team could have a shared API key and individual API keys. You could do experimental development work locally using your personal key, but use the shared key for team collaboration. Similarly, you could have a variable that represents exploratory work you're doing locally but aren't ready to share with the team. You can later choose to persist the local data so that others on your team can also access it.

You can edit a current value inline using the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> in the [workbench](/docs/getting-started/basics/navigating-postman/#environment-selector-and-environment-quick-look).

For more information on working with variables as a team, see [Work with environments as a team in Postman](/docs/sending-requests/variables/team-environments/).

> Local and data variables have current values, which don't persist beyond request or collection runs.

## Fixing unresolved variables

An _unresolved variable_ is a variable that's not defined in an [active scope](#variable-scopes) (environment, collection, or globals) that's available for the request it’s used in.

For example, for the request `https://postman-echo.com/get?customer_id={{cust_id}}`, Postman expects to be able to find a definition for `{{cust_id}}` in the environment the request uses, in the collection the request is saved in, or at the global level. If Postman doesn't find a definition for `{{cust_id}}` in one of those scopes, it flags the variable as unresolved. If you send a request that includes an unresolved variable, the request might fail.

A variable can be unresolved for the following reasons:

* The variable isn't present in an [active scope](#variable-scopes) for the request
* The variable was created but the changes weren't saved
* The environment in which the variable is present isn't active
* The variable is turned off in an active environment

When you are working on an API request, Postman highlights unresolved variables in the **URL builder**, the **Params** tab, the **Authorization** tab, and the **Headers** tab. Postman highlights unresolved variable text in red. For more details about the error and how to resolve it, hover over the unresolved variable.

<img alt="Unresolved variable" src="https://assets.postman.com/postman-docs/v10/unresolved-variable-v10-22.jpg"/>

To check if the variable is available and in scope for the request, do the following:

1. Select one of the **collection** or **globals** links. To turn on an environment, use the **select an environment** link.
1. Turn on or make the necessary changes to the value of the variable.
1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to confirm your changes.

To set a variable that's unresolved because it doesn't exist, do the following:

1. Select **Add new variable**.
1. Enter a **Name**, set a **Value** for the variable, and select the appropriate **Scope** (global, collection, or environment) from the dropdown.
1. Select **Set variable**.

   <img alt="Set an unresolved variable" src="https://assets.postman.com/postman-docs/v10/set-unresolved-variable-v10-22.jpg" width="338px"/>

> Variables that are [defined programmatically in a script](#defining-variables-in-scripts) are resolved differently depending on the variable scope. This means that unresolved variables will also be handled differently. Local variables that are set programmatically using `pm.variables.set` may appear to be unresolved since they're not stored and are only used at runtime, but if they're set and used correctly the request will still run successfully. Environment, global, and collection variables that are set programmatically are saved for later use, so they will resolve if they're set and used correctly. Depending on how an unresolved variable is used in a script, you may receive a `400 Bad Request` error response from the API, or Postman may be unable to send the request at all. Open the [Postman Console](/docs/sending-requests/response-data/troubleshooting-api-requests/#debugging-in-the-console) to help identify unresolved variables in your scripts.
