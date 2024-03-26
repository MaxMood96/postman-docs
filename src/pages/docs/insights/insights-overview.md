---
title: "Postman Insights overview"
updated: 2024-01-26
early_access: true
plan: alpha
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Postman Live Insights: Faster, Better API Debugging"
    url: "https://blog.postman.com/introducing-postman-live-insights-faster-better-api-debugging/"
  - type: link
    name: "Postman Live Insights: automatically discover, monitor, and add APIs"
    url: "https://www.postman.com/product/live-insights/"
---

Postman Insights is designed to help you optimize your API performance in real time. Using the drop-in Postman Insights Agent, you can bring your API endpoints into Postman and assess your API traffic. Postman Insights allows you to create collections based on the endpoints you're interested in the most, so you can visually inspect your API productivity and fix any errors that may occur.

Postman is working toward the open launch of Postman Insights. Today, the alpha release enables you to leverage the Postman Insights Agent on Amazon Elastic Container Service (ECS) deployments. Within 15 minutes of installing the Postman Insights Agent in staging or production, you'll start to see endpoints.

The Postman Insights Agent will keep these endpoints up to date based on new observed traffic and its errors, latency, and volume.

See [Get started with Postman Insights](/docs/insights/insights-gs/) for more information.

## Contents

* [Before you start](#before-you-start)
* [Known limitations](#known-limitations)
* [Sensitive data protection](#sensitive-data-protection)

## Before you start

* To use the Insights alpha, you need to be part of a team workspace. If you don’t already have a team in Postman, see [Collaboration overview](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/#creating-a-team) for instructions on how to set it up. Postman Free provides team setup with up to three users. Once your team workspace is set up, contact the [Insights Alpha team](mailto:live.insights.alpha@postman.com) to get access to the Insights alpha in Postman.
* To help the Insights team quickly improve the solution, add the [Insights Alpha Team](mailto:live.insights.alpha@postman.com) as a guest to your team. (There is no need to add the Insights team as a full member.)
* If you'd like, add the [Insights Alpha team](mailto:live.insights.alpha@postman.com) as a viewer to your Insights Project and collections. See [Allowing external users to view collections](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections) for more information. This will enable the Insights team to directly see your endpoints to improve your experience.
* If you're working with multiple teams, make sure the Insights team is aware and gives you access to the team you want to use with the alpha.
* Log in with the email address confirmed with you in the alpha invite email. If you aren't sure which email to use, contact the [Insights Alpha team](mailto:live.insights.alpha@postman.com).
* You can install the Postman Insights Agent after you create a new Insights Project. For more information, see [Get started with Insights](#get-started).

## Known limitations

The Insights team appreciates your patience as they build out the alpha features. The following are current limitations:

* Insights currently works only for REST APIs and not for gRPC or GraphQL.
* Insights is currently focused on first-party APIs.
* The Postman Insights Agent updates every 10 minutes, which means new endpoints won't be seen for up to 10 minutes. The Insights team would love your feedback on whether you would like more frequent updates.
* Once an endpoint is added to a curated collection, it is not updated again. To see a revised version, add it to a different curated collection.

The following actions are currently unavailable but may be supported in the future:

* Deleting an Insights Project
* Access controls on Insights
* Changing ownership
* Adding endpoints to a non-curated collection
* Editing any content of the collection
* Installing the Agent in any environment other than Amazon ECS

## Sensitive data protection

The Insights Agent client drops all data values from the observed traffic before sending it to Postman. All data-format inference happens on the client side, before the data is removed. The Postman cloud doesn't see the initial values. Uploads of the obfuscated data to Postman are performed over HTTPS using TLS.

### Limitations

* Any literal values that appear in the payload are obfuscated before being sent to Postman, but path parameters are sent in their original form. If the path to your API includes sensitive data (for example, email, first/last names, or phone numbers), it's transmitted to Postman first. Postman applies heuristics on the backend to remove it. If you have APIs that include sensitive data, contact Postman support to adjust the Insights Agent to pre-filter it.
* Postman’s data sanitizing doesn't apply to the JSON object keys. For example, the sanitizing works if your JSON document is structured as follows:

    ```json
    {
        "key": "sensitive-data",
        "other-key": "super-secret-value",
    }
    ```

    However, if your data is structured as shown in the next example, Postman preserves the left set of values.

    ```json
    {
        "<social-security-number>": true,
        "more-sensitive-data": "string",
        "super-secret-identifier": 1.0,
    }
    ```

* Sanitization also applies to HTTP header values, but not the names of those headers. For example, if your header looks like:

    ```json
    Authentication: <secret token>
    ```

    Then, the secret token is never sent to Postman.

    But, if your system encodes sensitive data in the name of the header, like so:

    ```json
    User-<user id>: ...
    ```

    Then the header name is sent to Postman and appears in your collection.

## Next steps

* [About Postman Insights Early Access](/docs/insights/insights-early-access/)
* [Get started with Postman Insights](/docs/insights/insights-gs/)
* [Diagnose and troubleshoot errors](/docs/insights/insights-troubleshoot/)
* [Postman Insights Agent reference](/docs/insights/insights-reference/)
