---
title: "Create custom governance functions in Postman"
updated: 2023-06-15
---

> [API Governance custom functions are available on Postman Enterprise plans.](https://www.postman.com/pricing) If you don't have an Enterprise account, you'll be able to see the API Governance page, but you won't be able to configure custom functions.

You can create custom governance functions and use them in your [custom API Governance rules](/docs/api-governance/configurable-rules/configuring-api-governance-rules/#adding-custom-rules) that Postman applies to your [API definitions](/docs/api-governance/api-definition/api-definition-warnings/).

[Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) and [API Governance Managers](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can manage custom governance functions for their team.

## Contents

* [Adding a custom function](#adding-a-custom-function)
* [Adding a custom function to a custom rule](#adding-a-custom-function-to-a-custom-rule)
* [Viewing custom rules that use a custom function](#viewing-custom-rules-that-use-a-custom-function)
* [Editing a custom function](#editing-a-custom-function)
* [Removing a custom function](#removing-a-custom-function)

## Adding a custom function

You can add custom governance functions to use in your custom API Governance rules. Postman provides you with a boilerplate function to help you start writing your custom governance function. You must write custom functions in JavaScript using ES6 syntax or CommonJS syntax.

1. Go to the [Postman home screen](https://go.postman.co/), and then select **API Governance** from the team information pane.
1. Select the **Rule Library** tab, and then select the **Functions** tab.
1. Select **Create Function**.

    ![Create custom API Governance function](https://assets.postman.com/postman-docs/v10/create-api-governance-function-v10.jpg)

1. Name the function's file, and then write the function in the editor. It must adhere to [custom functions guidelines](/docs/api-governance/configurable-rules/spectral/#spectral-custom-functions).

    > Postman will prompt you with suggestions as you enter text. Select one to autocomplete your code.

1. Select **Create**.

    ![New custom API Governance function](https://assets.postman.com/postman-docs/v10/new-api-governance-function-v10.jpg)

## Adding a custom function to a custom rule

To add a custom function to a custom API Governance rule, [add a custom function](#adding-a-custom-function), and then begin the steps to [add a custom rule](/docs/api-governance/configurable-rules/configuring-api-governance-rules/#adding-custom-rules).

Add the `then.function` property to the rule, and add the custom function's filename as its value to use it in your rule (for example, `function: custom_function_name`). If your custom function accepts options, add the `then.functionOptions` property. Learn more about [Spectral rule properties](/docs/api-governance/configurable-rules/spectral/#spectral-rule-properties) and [Spectral custom functions](/docs/api-governance/configurable-rules/spectral/#spectral-custom-functions).

Then select **Create** to create a custom rule that uses a custom function.

## Viewing custom rules that use a custom function

You can view the custom rules a custom function is used in.

1. Select the **Rule Library** tab, and then select the **Functions** tab.
1. Select a custom function's filename in the **Name** column.

    > To view only the number of custom rules each custom function is used in, you can review the values in the **Used In** column.

1. Select **Rules affected by this function** to expand the custom rules your custom function is used in.

    ![Custom API Governance functions used in custom rules](https://assets.postman.com/postman-docs/v10/used-in-api-governance-function-v10.jpg)

1. Optionally, you can select a custom rule's name to open it in a new tab.

## Editing a custom function

1. Select the **Rule Library** tab, and then select the **Functions** tab.
1. Select a custom function's filename in the **Name** column.
1. Edit the function, and then select **Save**.

## Removing a custom function

To remove a custom API Governance function, you must [remove the API Governance rules](/docs/api-governance/configurable-rules/configuring-api-governance-rules/#removing-rules-from-your-api-governance-configuration) that use the custom function. Then select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to the custom function's filename.

![Delete a custom API Governance function](https://assets.postman.com/postman-docs/v10/delete-api-governance-function-v10-2.jpg)
