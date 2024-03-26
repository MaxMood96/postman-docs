---
title: "Prepare your public workspaces for the Public API Network"
updated: 2023-03-30
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "5 ways to set up your Postman team profile for greater success"
    url: "https://blog.postman.com/5-ways-to-set-up-your-postman-team-profile/"
  - type: link
    name: "How to publish and market your API to maximize adoption"
    url: "https://blog.postman.com/how-to-publish-and-market-your-api-to-maximize-adoption/"
  - type: link
    name: "Top 30 APIs for best developer experience"
    url: "https://blog.postman.com/top-30-apis-for-best-developer-experience/"
---

Before making your APIs available on [the Postman Public API Network](/docs/getting-started/first-steps/exploring-public-api-network/), Postman recommends following these best practices and tips to help API consumers begin using your APIs.

## Contents

* [Customizing your team profile](#customizing-your-team-profile)
* [Organizing public workspaces](#organizing-public-workspaces)
* [Writing detailed documentation](#writing-detailed-documentation)

## Customizing your team profile

[Customize your team profile](/docs/administration/managing-your-team/team-settings/#manage-your-team-profile) with important information about your team. Add information that identifies you as the real company on the Public API Network. By default, your profile is only visible to your Postman team. [Make your team profile public](/docs/administration/managing-your-team/team-settings/#make-your-team-profile-public) to make your profile show up on Postman's [Explore](https://www.postman.com/explore) page.

<img alt="Edit your team profile" src="https://assets.postman.com/postman-docs/v10/team-settings-edit-profile-v10.jpg" width="700px"/>

## Organizing public workspaces

You can organize the requests in your public workspace using collections and folders to help consumers begin interacting with your APIs. Collections enable you to group saved requests, and folders enable you to organize requests into folders by category, such as domain, service, and use case.

A workspace is a group of schemas, collections, variables, tests, and more that describe how to interact with your APIs. Typically, developers begin with collections when learning how to interact with APIs. Keeping your requests organized in collections and folders will help guide consumers towards requests relevant to their interests.

### Creating API examples for different use cases

You can [create collections](/docs/collections/using-collections/#creating-collections) with specific example use cases to help consumers fork your collections and begin interacting with your APIs. Example use cases can include integrations, automation, authentication and authorization, and more.

![Edit collection details](https://assets.postman.com/postman-docs/v10/collection-details-v10-2.jpg)

### Creating environments for different use cases

You can [create environments](/docs/sending-requests/variables/managing-environments/) for different use cases, such as testing and production, and add them to your public workspace. This helps consumers understand what they need to configure with your API for their use case.

### Protecting sensitive data

When [creating and sharing environment variables](/docs/sending-requests/variables/managing-environments/#add-environment-variables), specify example values as the Initial value for the variable. Don't add sensitive data as the Initial value because it's shared with users who can access the environment. The Current value is used in your local instance of Postman, and is never synced to your account or shared with your team unless you choose to persist it.

![Add Environment](https://assets.postman.com/postman-docs/v10/environment-editor-v10-18.jpg)

## Writing detailed documentation

Write detailed [documentation](/docs/publishing-your-api/authoring-your-documentation/) for each collection and request to help consumers learn how to consume your APIs. The following best practices will help you write clear and concise documentation:

* Standardize the language in your workspace and its APIs.

* Use meaningful names for requests, collections, and folders. Use names that developers would expect.

* Reuse variables throughout your collection. Use variable names that are meaningful and set a clear expectation for their related values.

To learn more about writing detailed documentation, see [The Good Documentation Checklist](https://www.postman.com/postman/workspace/published-postman-templates/documentation/1559645-4b520b0d-cf53-41be-8d24-0e0136416091).

### Defining and describing variables

For your [variables](/docs/sending-requests/variables/variables/), you can write documentation describing the expected value and provide example values. Variables can be defined independently or stored within environments, and then applied across collections, enabling you to use variables for authentication, pagination, and other aspects of working with APIs. Variables can also define a state across multiple APIs and collections.

### Writing descriptions for folders and requests

At either the collection or folder level, Postman recommends writing detailed [descriptions](/docs/publishing-your-api/authoring-your-documentation/#adding-descriptions-to-your-documentation) that explain how to sign up for and get started with your API. You can use keywords in your descriptions to increase your API's discovery in organic search results and Postman search results.

<img alt="Postman editor" src="https://assets.postman.com/postman-docs/documentation-use-postman-editor-v9-1.jpg" width="560px">

To learn more about collections and folders, see [Using collections](/docs/collections/using-collections/).

### Adding examples to requests

Save [examples](/docs/sending-requests/response-data/examples/) of your API's requests, responses, and messages to [use examples in your documentation](/docs/sending-requests/response-data/examples/#using-examples-in-documentation). This enables consumers to test your API using example data.

<img alt="Examples in documentation" src="https://assets.postman.com/postman-docs/documentation-including-examples-v9.jpg" width="663px">

### Adding authorization details

You can create documentation explaining how to authorize with your API. You can mention this in the [workspace description](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#editing-workspace-details) or [documentation description](/docs/publishing-your-api/authoring-your-documentation/#adding-descriptions-to-your-documentation) if you have several API request workflows or a more complicated authorization schema. To learn more, see [Including authorization details](/docs/publishing-your-api/authoring-your-documentation/#including-authorization-details).

<img alt="Authorization type in documentation" src="https://assets.postman.com/postman-docs/documentation-authorization-v8-10.jpg" width="569px">

You can also [set up API authentication for your API](/docs/publishing-your-api/setting-up-authentication-for-public-apis/). This enables Postman to automatically recognize a request to your API that requires authentication, and prompt your API's consumers with steps to set it up.

<img alt="Postman API set up new authorization" src="https://assets.postman.com/postman-docs/v10/easy-auth-flow-v10-2.gif"/>
