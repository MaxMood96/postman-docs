---
title: "Maintain APIs in your public workspace"
updated: 2023-11-03
---

Postman recommends maintaining your APIs in your public workspaces. This ensures your APIs are current on [the Public API Network](/docs/getting-started/first-steps/exploring-public-api-network/), enabling you to share your latest changes with API consumers. There are multiple options for maintaining APIs in Postman that align with your organization's API development workflow.

## Contents

* [Code repository](#code-repository)
* [Postman's version control](#postmans-version-control)
* [The Postman API](#the-postman-api)

## Code repository

If your API definitions and collections are stored in a remote code repository, such as [GitHub](/docs/integrations/available-integrations/github/), you can use [version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/) to connect your API in Postman to the remote code repository.

When you're ready to share your API definitions and collections with your API's consumers, you can pull changes from the remote repository to bring changes into your public workspace in Postman. Learn more about [syncing APIs between your public workspace and code repository](/docs/collaborating-in-postman/public-api-network/sync-api-with-workspace/).

## Postman's version control

If your collections are stored in a non-public workspace in Postman, such as a [team workspace](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/), you can use [Postman's version control](/docs/collaborating-in-postman/using-version-control/version-control-overview/) to [fork the collection](/docs/collaborating-in-postman/using-version-control/forking-elements/#create-a-fork) in a public workspace.

When you're ready to share your collections with your API's consumers, you can [pull changes from the parent collection](/docs/collaborating-in-postman/using-version-control/forking-elements/#pull-updates-from-a-parent-element) (in your non-public workspace) to the forked collection (in your public workspace).

## The Postman API

If your collections are stored in a non-public workspace, such as a [team workspace](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/), you can use the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) to create a custom, automated workflow that publishes collections from a non-public workspace to a public workspace. You can learn how to [make a request to the Postman API](/docs/developer/postman-api/make-postman-api-call/).

When you're ready to share your collections with your API's consumers, you can use code to create a `GET` request that gets the collection you want to publish, then you can create a `PUT` request that publishes the collection. Use the `/collections/collection-id` endpoint to get and publish your collections.

> You can also create and send the requests in a [collection](/docs/collections/using-collections/) or [Flow](/docs/postman-flows/gs/flows-overview/).

To share a collection to a public workspace using the Postman API, do the following:

1. [Create a collection](/docs/collections/using-collections/#creating-collections) (source collection) in a non-public workspace, and create another collection (destination collection) in a public workspace that's available on the Public API Network.

1. Get the collection IDs for both collections. Select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar, and copy the collection IDs.

1. [Get a Postman API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key) in the team where your source collection is stored. If the destination collection is in a different team, you must also get a Postman API key in that team.
1. Create a `GET` request to a collection in a non-public workspace that you want to publish. The request returns a collection object in the response body. The object contains details about the source collection you can use to publish it.

    Use the following URL in your request:

    ```curl
    https://api.getpostman.com/collections/source-collection-id
    ```

    If you're sending the request from Postman, [set the response as an environment variable](/docs/sending-requests/managing-environments/#setting-environment-variables-from-scripts) and convert the response into a JSON string from the **Tests** tab:

    ```javascript
    const response = pm.response.json();

    pm.environment.set('sourceCollection', JSON.stringify(response));
    ```

1. Create a `PUT` request to a collection in a public workspace that you want to publish to. Include the source collection object in the request body. The request publishes the source collection to the destination collection.

    Use the following URL in your request:

    ```curl
    https://api.getpostman.com/collections/destination-collection-id
    ```

1. In your requests, add an authorization header that uses `X-API-Key` as the key and your Postman API key as the value. For more details, see the [Postman API documentation](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a).

    > If the destination collection is in a different team, make sure your `GET` and `PUT` requests use Postman API keys created in their separate teams.

    If you're sending the requests from Postman, you can [store API keys as environment variables](/docs/developer/postman-api/make-postman-api-call/#store-your-api-key-as-an-environment-variable).

1. Send the `GET` request to return the source collection, then send the `PUT` request to publish the source collection to the destination collection.
