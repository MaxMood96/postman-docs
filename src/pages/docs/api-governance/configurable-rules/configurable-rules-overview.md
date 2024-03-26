---
title: "Enforce API governance and security rules for your team in Postman"
updated: 2024-01-18
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Security and Governance Part 1: Automating Governance"
    url: "https://youtu.be/rdMAKc-_NIw"
  - type: link
    name: "API Security and Governance Part 2: Customizing Governance with Spectral Rulesets"
    url: "https://youtu.be/TDOuZcKQId4"
  - type: link
    name: "Set Up Enterprise-Wide API Governance with .NET Core + Spectral | Postman Enterprise"
    url: "https://youtu.be/2zLoW_p0OFQ"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Big improvements to Postman API Governance"
    url: "https://blog.postman.com/api-governance-improvements/"
---

> **[Configurable API governance and API security rules are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

You can customize the API Governance and Security rules that Postman applies to your API definitions and requests. Postman notifies team members if their API definitions and requests violate the configured governance and security rules. This enables team members to keep APIs consistent and secure in your team.

<img alt="API governance dashboard" src="https://assets.postman.com/postman-docs/v10/api-governance-dashboard-v10.jpg"/>

## Contents

* [Configure governance rules](#configure-governance-rules)
* [Configure security rules](#configure-security-rules)
* [Custom governance rule and function guidelines](#custom-governance-rule-and-function-guidelines)

## Configure governance rules

You can [configure API Governance rules](/docs/api-governance/configurable-rules/configuring-api-governance-rules/) that Postman applies to your API definitions. You can use existing governance rules from the rule library or create custom governance rules. Then you can apply those rules to specific workspaces in your team.

You can also [create custom governance functions](/docs/api-governance/configurable-rules/configuring-custom-governance-functions/) and use them in your custom governance rules.

## Configure security rules

You can [configure API Security rules](/docs/api-governance/configurable-rules/configuring-api-security-rules/) that Postman applies to your API definitions and requests. You can apply existing security rules to your API definitions and requests. You can also create and apply custom security rules to your API definitions.

## Custom governance rule and function guidelines

Postman supports [Spectral](/docs/api-governance/configurable-rules/spectral/) for custom governance and security rules, and custom governance functions. For more information about using Spectral in Postman, see the following:

* Learn how to [write custom governance and security rules using Spectral](/docs/api-governance/configurable-rules/spectral/#how-spectral-works) and configure [Spectral rule properties](/docs/api-governance/configurable-rules/spectral/#spectral-rule-properties).

* Learn how to [write custom governance functions using Spectral](/docs/api-governance/configurable-rules/spectral/#spectral-custom-functions) and use them in your custom governance rules.
