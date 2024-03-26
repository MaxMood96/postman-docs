---
title: "Track governance and security rule violations in the API definition"
updated: 2022-07-20
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Security and Governance Rules for API Definitions | Postman Level Up"
    url: "https://youtu.be/jphqpbTEDCY"
  - type: link
    name: "API Security and Governance Part 1: Automating Governance"
    url: "https://youtu.be/rdMAKc-_NIw"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "The 3 fundamental checks of API governance rules"
    url: "https://blog.postman.com/3-checks-api-governance-rules/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman Security"
    url:  "https://www.postman.com/postman/workspace/62d58d93-7e0c-45bf-9daa-cc8e531fc344"
---

Postman supports API governance and API security rules for API definitions in [OpenAPI 3.1](/docs/api-governance/api-definition/openapi3/), [OpenAPI 3.0](/docs/api-governance/api-definition/openapi3/), and [OpenAPI 2.0](/docs/api-governance/api-definition/openapi2/) format.

> **Rule customization**. [Enterprise teams](https://www.postman.com/pricing/) can also customize the rules that Postman applies to API definitions. For more information, see [Configuring API governance rules](/docs/api-governance/configurable-rules/configuring-api-governance-rules/) and [Configuring API security rules](/docs/api-governance/configurable-rules/configuring-api-security-rules/).

To check the governance and security rule violations in the API definition:

1. Select **APIs** in the sidebar, and then select the API you want to review.
1. From the API overview page, in the **Definition** section, select **View files**.

    > You can also select **APIs** in the sidebar, then select the API definition file directly.

1. Select **Rule** to see the list of rule violations.

   <img alt="OpenAPI 3.0 rule violations" src="https://assets.postman.com/postman-docs/v10/api-definition-rule-violations-openapi3-v10.1.jpg" />

To learn more about how rule violations can help you create consistent and secure API definitions, see [Viewing rule violations in your API definition](/docs/designing-and-developing-your-api/developing-an-api/validating-elements-against-schema/#viewing-rule-violations-in-your-api-definition).

## Tracking governance and security rule violations in CI/CD

> [This feature is available on Postman Enterprise plans.](https://www.postman.com/pricing)

You can configure your CI/CD pipelines to enforce the [API Governance](/docs/api-governance/configurable-rules/configuring-api-governance-rules/) and [API Security](/docs/api-governance/configurable-rules/configuring-api-security-rules/) rules configured for your team with the help of the [Postman CLI](/docs/postman-cli/postman-cli-overview/).

On the Postman CLI configuration page, select **Run Governance and Security rules**. This will generate the Postman CLI configuration. You can use this in your CI/CD configuration to enforce your API Governance and API Security rules each time the CI/CD pipeline runs.

<img alt="Generate the Postman CLI configuration" src="https://assets.postman.com/postman-docs/v10/generate-postman-cli-v10-3.jpg" />

To see the results, go to the build run page and use the arrows to expand the desired build. Next, expand the API definition to see the build’s results and any rule violations, if applicable.

## Next steps

For the list of all the rule violations that Postman might show at the API definition phase of development, see [OpenAPI 3 rules](/docs/api-governance/api-definition/openapi3/) and [OpenAPI 2 rules](/docs/api-governance/api-definition/openapi2/).
