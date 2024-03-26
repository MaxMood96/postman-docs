---
title: "Ensure consistency between your collection and the API definition"
updated: 2023-06-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Validate Response Data With JSON Schema"
    url: "https://youtu.be/IbyYUTBDVXQ"
  - type: link
    name: "Postman Intergalactic | Design and Prototype an API in Postman"
    url: "https://youtu.be/r4kb3jOSsmk"
  - type: link
    name: "A Few JSON Schema Tips & Tricks: Getting Started"
    url: "https://www.youtube.com/live/QiAXxaLrt7E?feature=share"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Ensure API consistency with request and response validation in Postman"
    url: "https://blog.postman.com/request-and-response-validation-in-postman/"
  - type: link
    name: "API contract testing: 4 things to validate to meet (and exceed) expectations"
    url: "https://blog.postman.com/api-contract-testing-4-things-to-validate/"
---

You can validate collections that are linked to an API to make sure the API implementation is consistent with the API definition. Postman automatically compares requests and saved examples in the collection to the API definition and alerts you to any inconsistencies. Postman also validates responses when you send a request from the collection.

To help keep your API well defined, you can check your API definition as you work on it in Postman. As you edit your API definition, Postman lists any syntax errors based on the definition type. Postman also identifies any API governance and security issues based on the rules configured for your team.

## Contents

* [Validating requests and responses](#validating-requests-and-responses)
* [Viewing syntax errors in your API definition](#viewing-syntax-errors-in-your-api-definition)
* [Viewing rule violations in your API definition](#viewing-rule-violations-in-your-api-definition)

## Validating requests and responses

For [collections linked to an API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/#adding-a-collection), Postman can automatically detect any inconsistencies between the [requests](/docs/sending-requests/create-requests/create-requests/) and [saved examples](/docs/sending-requests/response-data/examples/) in the collection and the [API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/). Postman can also compare [responses](/docs/sending-requests/response-data/responses/) received from the server to the API definition to make sure the API implementation aligns with the API design. Postman displays a warning for each detected issue. Select a warning to view the source of the issue so you can resolve it.

> Request validation is supported for OpenAPI 3.0 and 3.1 definitions.

### Enabling request validation

When request validation is enabled, Postman automatically checks for validation issues whenever you open a request, change a request or a saved example, or change the API definition. Postman also checks for issues when you send a request, and the response is considered as a saved example.

To enable request validation, do the following:

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header, then select **Settings**.
1. Turn on the toggle next to **Request Validation**.

### Viewing validation issues

> To validate requests, saved examples, and responses, your collection must be linked to an API. Learn more about [adding a collection to an API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/#adding-a-collection).

If Postman detects validation issues, an orange dot displays in the sidebar next to the collection, folder, request, or saved example with the issue. Select the element to open it. A warning icon <img alt="Validation warning icon" src="https://assets.postman.com/postman-docs/v10/icon-warning-v10.jpg#icon" width="16px"> displays in the tab next to the element's name showing the number of issues found in the element.

To view the list of validation issues, select the warning icon in the tab of the collection, folder, request, or saved example. Postman provides details for each issue, including the element with the issue and details about the problem.

Select an issue to view the element where the issue was detected. To resolve the issue, you can change the [request](/docs/sending-requests/create-requests/create-requests/) or [saved example](/docs/sending-requests/response-data/examples/#editing-an-example), or you can change the [API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#editing-an-api-definition-file). After you save your changes, if the problem is corrected, the issue disappears.

<img alt="Viewing request validation issues" src="https://assets.postman.com/postman-docs/v10/request-validation-v10-15a.jpg" >

> If your collection has requests that are different from your API definition, you can automatically update the collection based on the definition. Learn more about [keeping a collection in sync with an API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/#keeping-a-collection-in-sync-with-an-api).

## Viewing syntax errors in your API definition

Postman automatically identifies syntax errors as you [edit your API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/). Errors can include missing fields, malformed field names, incorrect data types, incorrect nesting, or other API definition issues.

Postman can identify syntax errors for OpenAPI 2.0, 3.0, and 3.1 and WSDL 1.1 and 2.0 definitions. For Postman to be able to check your definition elements, the JSON or YAML must be well formed.

To view any syntax errors, select **Syntax** next to **Violations found in definition**. Each error shows the error type, the line on which it occurs, and details about the issue. Select an error to highlight it in the editor. You can also get more information by hovering over the error in the editor.

> Sometimes a single error in your definition will cause more than one issue to appear in the list. As you fix the errors, the issues disappear.

![API definition error](https://assets.postman.com/postman-docs/v10/schema-validation-error-open-v10.jpg)

## Viewing rule violations in your API definition

> [This feature is available on Postman Enterprise plans.](https://www.postman.com/pricing)

As you create your API definition in the editor, Postman automatically checks it against the [Postman API Governance and API Security](/docs/api-governance/api-governance-overview/) rules configured for your team. Postman displays any rule violations below the editor. Resolving these issues enables you to improve your API definition.

To learn more about the supported API description formats, the rules preconfigured in Postman, and how to create new rules, see [Rule violations in the API definition](/docs/api-governance/api-definition/api-definition-warnings/).

To view any rule violations, select **Rule** next to **Violations found in definition**. Each rule violation is on its own line and includes the violation **Name** and the rule type (**Governance** or **Security**). The number next to the rule name tells you how many times Postman found the rule violation in your API definition.

Select the number to inspect each rule violation. Every instance of the rule violation has a brief description of the issue and the line in the file where the rule violation occurs. When you select a rule violation, Postman highlights the section of the definition that triggered it.

<img alt="Multiple occurrences of the same rule violation" src="https://assets.postman.com/postman-docs/v10/api-definition-multiple-violations-v10.1.jpg" />

To learn more about the rule violation and get information about how to fix it, select **Possible fix** next to the rule description. This will open the relevant Learning Center page.

<img alt="Select Possible fix to open the Learning Center" src="https://assets.postman.com/postman-docs/v10/api-definition-violations-possible-fix-v10.jpg"/>

When you make updates to your API definition, Postman re-checks it. If your changes resolve the issue, Postman removes the rule violation from the list.

### Hiding rule violations

To hide a rule violation for the API definition, do the following:

1. Select <img alt="Hide rule violation icon" src="https://assets.postman.com/postman-docs/icon-eye-crossed-out.jpg#icon" width="18px"> **Hide** next to the rule violation.

    <img alt="Hide a rule violation in your API definition" src="https://assets.postman.com/postman-docs/v10/api-definition-hide-rule-violation-v10.1.jpg"/>

1. Select a reason that you want to hide it, then select **Hide**.

    <img alt="" src="https://assets.postman.com/postman-docs/v10/api-definition-hide-rule-violation-choose-reason-v10.jpg" width="300px"/>

This will hide the rule violation for the current API. If there is more than one violation of a specific rule, you can hide each instance individually.

> To hide a rule violation globally, you can use either [configurable API Governance rules](/docs/api-governance/configurable-rules/configuring-api-governance-rules/) or [configurable API Security rules](/docs/api-governance/configurable-rules/configuring-api-security-rules/).

When you or another member of your team hides a rule violation, Postman shows a message in the editor's **Rule** tab to indicate how many are hidden.

To turn a rule back on later, do the following:

1. Select **Review**.
1. Review your hidden rules and select the eye icon <img alt="Eye icon" src="https://assets.postman.com/postman-docs/eye.jpg#icon" width="16px"> next to the one you want to turn back on.

<img alt="Review hidden rules for your API definition" src="https://assets.postman.com/postman-docs/v10/api-definition-review-hidden-warnings-v10.jpg" width="800px"/>
