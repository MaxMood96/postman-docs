---
title: "Group sets of variables in Postman using environments"
updated: 2023-11-09
search_keyword: "pm.globals.set, globals.set, pm.environment.set, environment.set, pm.variables.get, variables.get, pm.globals.get, globals.get, pm.environment.get, environment.get"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman | How to Use Environments"
    url:  "https://youtu.be/oCEDjp3XMco"
  - type: link
    name: "Intro to Postman | Chain Requests"
    url: "https://youtu.be/4fULCou_7Wc"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to Control Access to Variables, Workflows, and More"
    url:  "https://blog.postman.com/postman-environments-how-to-control-access-to-variables-workflows-and-more/"
  - type: link
    name: "Dynamically unset environment variables"
    url: "https://blog.postman.com/pro-tip-dynamically-unset-postman-environment-variables/"
  - type: link
    name: "Securely Using API Keys in Postman"
    url: "https://blog.postman.com/how-to-use-api-keys/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Hathway uses separate environments for each client"
    url: "https://www.postman.com/case-studies/hathway/"
  - type: link
    name: "Sling TV/ DISH Network enhanced collaboration with environments"
    url: "https://www.postman.com/case-studies/sling/"
---

In Postman, an _environment_ is a set of one or more [variables](/docs/sending-requests/variables/variables/) that you can reference when [sending requests](/docs/sending-requests/create-requests/create-requests/) or [writing test scripts](/docs/writing-scripts/test-scripts/). You can create environments for the different types of work you do in Postman. When you switch between environments, all of the variables in your requests and scripts will use the values from the current environment. This is helpful if you need to use different values in your requests depending on the context, for example, if you're sending a request to a test server or a production server.

> Environments can also help you to collaborate on Postman data if you're working as part of a team. You can use environments to share variables and manage the visibility of sensitive data such as API keys, passwords, or tokens. Learn more about [working with environments as a team in Postman](/docs/sending-requests/variables/team-environments/).

## Contents

* [Create an environment](#create-an-environment)
* [Add environment variables](#add-environment-variables)
* [Switch between environments](#switch-between-environments)
* [Use variables in requests and scripts](#use-variables-in-requests-and-scripts)
* [Edit an environment](#edit-an-environment)
* [Next steps](#next-steps)

## Create an environment

Create a new environment when you want to be able to change the values of variables depending on your work context in Postman, or to share values with other team members.

To create a new environment, do the following:

1. Select **Environments** in the sidebar and select **+**.

    <img src="https://assets.postman.com/postman-docs/v10/environment-create-new-v10-20.jpg" alt="Create new environment" width="382px"/>

1. Enter a name for your new environment.

1. Add any variables you want to the environment. You can also add variables later. Learn more about [adding environment variables](#add-environment-variables).

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save any environment variables you added.

1. To use the new environment, select it from the environment selector at the top right of the workbench. This makes it the active environment and sets all variables to the values specified in the environment. Learn more about [switching between environments](#switch-between-environments).

    <img src="https://assets.postman.com/postman-docs/v10/environment-selector-v10-20.jpg" alt="Environment selector" width="352px">

> You can turn on autosave to automatically save your changes to collections, requests, and environments. Learn more about [autosave](/docs/getting-started/installation/settings/#application).

## Add environment variables

When you add a variable to an environment, you can specify the _Initial value_ (shared) and the _Current value_ (local) for the variable:

* **Initial value (shared)** - This value is synced to your account using Postman's cloud servers. It's shared with any collaborators who have access to the environment. It's also made public when [publishing an environment along with a collection](/docs/publishing-your-api/publishing-your-docs/). If the value includes sensitive data, such as a password or key, you can mask the value by selecting the **secret** variable type.
* **Current value (local)** - This value is used when sending requests in your local instance of Postman. It's never synced to your account or shared with your team _unless you [choose to persist it](/docs/sending-requests/variables/environment-variables/#persist-environment-variables)_.

To add variables to an environment, do the following:

1. Select **Environments** in the sidebar and select an environment.

1. To add a new variable, select the bottom row of the table and enter a **Variable** name.

    ![Environment editor](https://assets.postman.com/postman-docs/v10/environment-editor-v10-22.jpg)

1. Select a variable **Type**. If you select **default** the variable value is visible in plain text. If you select **secret** the variable value is masked.

    > If a variable's initial value has sensitive data, select the **secret** variable type to prevent exposing the value when sharing or publishing the environment. Learn more about [variable types](/docs/sending-requests/variables/variables/#variable-types).

1. Enter the **Initial value** and **Current value** for the variable. _Keep in mind that the initial value is shared with anyone who has access to the environment, and the initial value is made public if you publish the environment along with a collection._

    > If you leave the current value blank, the initial value is copied to the current value when you save the environment.

1. When you're done adding environment variables, select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save**.

## Switch between environments

Postman displays the active environment in the environment selector, located in the top right of the workbench. When you send a request or run a script, Postman uses the current values for all variables in the active environment. To make another environment active, select it from the environment selector.

<img src="https://assets.postman.com/postman-docs/v10/environment-selector-v10-20.jpg" alt="Environment selector" width="352px">

You can also make an environment active by selecting **Environments** in the sidebar. Select the set active icon <img alt="Set active icon" src="https://assets.postman.com/postman-docs/icon-checkmark-v9.jpg#icon" width="16px"> next to an environment to make it the active environment.

<img alt="Active environment" src="https://assets.postman.com/postman-docs/v10/environment-editor-select-env-v10-20.jpg" width="382px">

To check a variable's value at a glance, select the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> next to the environment selector. The environment quick look lists the initial and current values for all variables in the active environment.

<img alt="Environment quick look" src="https://assets.postman.com/postman-docs/v10/environment-quick-look-selector-v10-20.jpg"/>

> If you want to make variables available regardless of which environment is active, use [global variables](/docs/sending-requests/variables/variables/#defining-global-variables). The quick look lists any global variables you have declared or that are shared in your workspace.

## Use variables in requests and scripts

To use an environment variable in a request, reference it by name surrounded with [double curly braces](/docs/sending-requests/variables/variables/#using-variables):

```js
{{base_url}}
```

You can reference environment variables in request URLs, parameters, headers, and body data. Hover over a variable reference to view its current value.

<img alt="Environment variable reference" src="https://assets.postman.com/postman-docs/v10/environment-hover-v10-20.jpg" width="580px"/>

You can access current environment variable values in your **Pre-request Script** and **Tests** code using the [`pm.environment.get` method](/docs/sending-requests/variables/variables/#using-variables-in-scripts):

```js
pm.environment.get("variable_name");
```

If more than one variable with the same name is available to a request, Postman will use the value from the variable with the narrowest [scope](/docs/sending-requests/variables/variables/#variable-scopes). Therefore, if you have an environment variable with the same name as a collection or global variable, Postman will use the environment variable. However, local and data variable values will supersede environment values. The value of any overridden variables will display in strikethrough format.

> Learn more about [editing and setting environment variables in Postman](/docs/sending-requests/variables/environment-variables/).

## Edit an environment

> If you're working with environments as part of a team, you must have the Editor role to edit the environment or change initial values for variables. Learn more about [managing environment roles](/docs/sending-requests/variables/team-environments/#manage-environment-roles).

To edit an environment, select **Environments** in the sidebar and select an environment. From here you can take the following actions:

* To rename an environment, select the environment's name and enter a new name.

* To duplicate an environment, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Duplicate**.

* To delete an environment, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Delete**. Deleting an environment also deletes all variables in the environment.

## Next steps

Environments enable you to share data in Postman and collaborate with your team. Here are some more resources to help you use environments with your team:

* To learn more about working with environment variables, visit [Edit and set environment variables in Postman](/docs/sending-requests/variables/environment-variables/).
* To learn how to use environments to collaborate with your team, visit [Work with environments as a team in Postman](/docs/sending-requests/variables/team-environments/).
* To learn how to publish your environments, visit [Publish documentation in Postman](/docs/publishing-your-api/publishing-your-docs/) or [Create Run in Postman buttons](/docs/publishing-your-api/run-in-postman/creating-run-button/).
