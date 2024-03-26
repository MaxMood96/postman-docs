---
title: "Edit and set environment variables in Postman"
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
---

An [environment](/docs/sending-requests/variables/managing-environments/) is a group of variables whose values you can change depending on your work context in Postman. After you [create an environment](/docs/sending-requests/variables/managing-environments/#create-an-environment), you can add new environment variables, change initial or current values, or delete variables. You can also set environment values using scripts, and you can persist variable values to make them available to your team.

## Contents

* [Edit environment variables](#edit-environment-variables)
* [Edit variables from the environment quick look](#edit-variables-from-the-environment-quick-look)
* [Set environment variables from scripts](#set-environment-variables-from-scripts)
* [Persist environment variables](#persist-environment-variables)

## Edit environment variables

You can edit environment variables by adding new variables, changing a variable's type and values, or deleting variables.

> If you're working with environments as part of a team, you must have the Editor role to edit the environment or change initial values for variables. Learn more about [managing environment roles](/docs/sending-requests/variables/team-environments/#manage-environment-roles).

To edit environment variables, select **Environments** in the sidebar and select an environment. From here you can take the following actions:

* To filter the list of environment variables by name, enter text in the **Filter variables** box.
* To sort the list of environment variables, select a column header. You can toggle between ascending and descending order. To manually sort the list, clear the sort order if needed by selecting a column header, then drag rows using the handles.
* To add a new environment variable, select **Add new variable** in the bottom row of the table.
* To delete an environment variable, hover over a variable and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.
* To make an environment variable unavailable without deleting it, clear the checkbox next to the variable. Any references to the variable will be unresolved. To make the variable available again, select the checkbox.
* Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save any changes you've made.

![Add environment](https://assets.postman.com/postman-docs/v10/environment-editor-v10-22.jpg)

To edit an environment variable, select the variable and change any of the following:

* **Variable** - The name of the variable. Use the name to [reference the variable](/docs/sending-requests/variables/managing-environments/#use-variables-in-requests-and-scripts) in requests and scripts.
* **Type** - If you select **default**, the variable value is visible in plain text. If you select **secret**, the variable value is masked. Learn more about [variable types](/docs/sending-requests/variables/variables/#variable-types).

    > To show or hide a secret variable, hover over the variable and select the eye icon <img alt="Unmask variable icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px">.

* **Initial value (shared)** - This value is synced to your account using Postman's cloud servers. It's shared with any collaborators who have access to the environment. It's also made public when [publishing an environment along with a collection](/docs/publishing-your-api/publishing-your-docs/). If the value includes sensitive data, such as a password or key, you can mask the value by selecting the **secret** variable type.
* **Current value (local)** - This value is used when sending requests in your local instance of Postman. It's never synced to your account or shared with your team _unless you [choose to persist it](#persist-environment-variables)_. If you leave the current value blank, the initial value is copied to the current value when you save the environment.

When you're done editing environment variables, select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save your changes.

## Edit variables from the environment quick look

You can edit the current value for variables in the [active environment](/docs/sending-requests/variables/managing-environments/#switch-between-environments) from the environment quick look. Select the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> next to the environment selector. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to a variable, then enter a new current value.

<img alt="Using the environment quick look" src="https://assets.postman.com/postman-docs/v10/environment-quick-look-edit-v10-20.jpg"/>

## Set environment variables from scripts

You can change the values of environment variables from your **Pre-request Script** and **Tests** scripts. Use the [`pm.environment` method](/docs/writing-scripts/script-references/postman-sandbox-api-reference/#using-environment-variables-in-scripts) to set an environment variable in the [active environment](/docs/sending-requests/variables/managing-environments/#switch-between-environments):

```js
pm.environment.set("variable_key", "variable_value");
```

If you use scripts to set values for environment variables, these values will be reflected in all requests that reference the variables. For example, you can use environments in conjunction with [the collection runner](/docs/collections/running-collections/intro-to-collection-runs/) and [monitors](/docs/monitoring-your-api/intro-monitors/) to use updated values for a series of requests throughout a run and after the run completes.

> To create new environment variables from a script, you must have Editor access to the environment. If you update or unset a value in a script when you have Viewer access, that change will be visible to you but won't be shared with other team members. Learn more about [managing environment roles](/docs/sending-requests/variables/team-environments/#manage-environment-roles).

## Persist environment variables

An environment variable's current value is used in your local instance of Postman and isn't synced to your Postman account or shared with your team. If you want to sync an environment variable's current value with your account or share it with team members, you can _persist_ the variable.

When you persist a variable, the variable's initial (shared) value is set to the current (local) value. The initial value is then synced to your Postman account, and anyone who has access to the environment can view the new initial value. If a variable's initial value has sensitive data, make sure to choose the **secret** variable type if you don't want to expose the value when sharing or publishing the environment.

> To persist a variable, you must have Editor access to the environment. Learn more about [managing environment roles](/docs/sending-requests/variables/team-environments/#manage-environment-roles).

To persist an environment variable, do the following:

1. Select **Environments** in the sidebar and select an environment.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a variable and select **Persist**. The current value is copied to the initial value.
1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save**. The new initial value is synced to your workspace and is available to anyone with access to the environment.

At any time you can reset a variable's current (local) value with the initial (shared) value synced to your workspace. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a variable and select **Reset**. The current value is replaced by the initial value. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save the change.

> You can persist or reset all variable values in the environment at once. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the column header, then select **Persist All** or **Reset All**.
