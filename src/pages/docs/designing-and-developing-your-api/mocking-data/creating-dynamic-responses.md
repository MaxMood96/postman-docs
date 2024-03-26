---
title: "Generate mock responses using variables and templates"
updated: 2022-11-11
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Dynamic Mock Behavior | Postman Level Up"
    url: "https://youtu.be/av7SZo9sZAE"
  - type: link
    name: "Mock a Back End with Templating and Dynamic Data"
    url: "https://www.youtube.com/live/gmRQkXCRqs8?feature=share"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Support for Templating in Postman Mock Servers"
    url: "https://blog.postman.com/introducing-support-for-templating-in-postman-mock-servers/"
---

You can use [collection examples](/docs/sending-requests/response-data/examples/) to define static responses that are returned by your [mock server](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/). However, there may be cases when you want the mock server to return dynamic responses that include variable or random data. You might also want the mock server to return contextual responses to your request. With dynamic mock responses, you can simulate various scenarios without having to create an example for each scenario.

## Contents

* [Using variables with mock servers](#using-variables-with-mock-servers)
* [Generating random data with dynamic variables](#generating-random-data-with-dynamic-variables)
* [Generating contextual mock responses](#generating-contextual-mock-responses)

## Using variables with mock servers

[Variables](/docs/sending-requests/variables/variables/) enable you to store values and use them in your requests and collection examples. If you change the value of a variable, the new value is used wherever the variable occurs.

Postman mock servers support [environment variables](/docs/sending-requests/variables/variables/#defining-environment-variables) and [collection variables](/docs/sending-requests/variables/variables/#defining-collection-variables). (Mock servers don't support using global variables.)

* To use environment variables, select the environment in the [mock server's configuration](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/#editing-the-mock-server-configuration).
* To use collection variables, define them on the **Variables** tab in the [collection you are mocking](/docs/sending-requests/variables/variables/#defining-collection-variables).

When you use an environment or collection variable in an example, the mock server resolves the variable and replaces it with the variable's initial value. If an environment variable and a collection variable have the same name, Postman uses the environment variable. Learn more about [variable scopes](/docs/sending-requests/variables/variables/#variable-scopes).

<img alt="Using variables with mock servers" src="https://assets.postman.com/postman-docs/v10/mock-server-using-variables-v10-2.jpg" width="467px" />

> If you save the URL of a mock server to a [variable](/docs/sending-requests/variables/variables/), you can reference it across requests. For example, if you have a production server and a mock server, you can have an [environment](/docs/sending-requests/variables/managing-environments/) for each server. In each environment, create a variable with the same name for the mock URL. By using the variable in your requests, you can switch between the two environments to call the production server or the mock server.

## Generating random data with dynamic variables

To have your mock server return random data, use [dynamic variables](/docs/writing-scripts/script-references/variables-list/) in your example's response body. Dynamic variables are resolved as part of the mock server response and replaced with random data. Dynamic variables are useful for generating random data when mocking an API. Use them for exploratory testing and writing rich, data-driven tests.

For instance, your example's response body might contain dynamic variables as follows:

```json
{
    "name": "{{$randomFullName}}",
    "userName": "{{$randomUserName}}",
    "location": "{{$randomCity}}",
    "company": "{{$randomCompanyName}}",
    "jobTitle": "{{$randomJobTitle}}",
    "updatedAt": "{{$timestamp}}"
}
```

When you call the mock server endpoint, the response data will change to something like:

```json
{
    "name": "Cielo McClure",
    "userName": "Aurelie.Lockman",
    "location": "Kubhaven",
    "company": "Runolfsdottir, Bernhard and Hodkiewicz",
    "jobTitle": "Direct Branding Liaison",
    "updatedAt": "1565088856"
}
```

> See [Dynamic Variables](/docs/writing-scripts/script-references/variables-list/) for a full list of dynamic variables for generating random data.

## Generating contextual mock responses

With template support, Postman mock servers can generate responses that vary based on the incoming request. Template helpers give you access to data from the incoming request, such as the body, query parameters, path segments, and headers. You can include that data in the response sent by the mock server.

> To generate contextual responses on a mock server with [response matching for the request body enabled](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/#matching-request-body-and-headers), you need to set the `x-mock-match-request-body` header set to `false`. Otherwise you will get a `mockRequestNotFoundError` error.

### Using template helpers

To create contextual responses, add one or more template helpers to an example in the mocked collection. You can use the following template helpers in your examples:

* `$body` - Access the body of the incoming request
* `$queryParams` - Access the query parameters of the incoming request
* `$pathSegments` - Access the path segments of the incoming request (such as `/product/id/details`)
* `$headers` - Access the headers of the incoming request

Use [object-path](https://www.npmjs.com/package/object-path) syntax to access specific values in the helpers. You can also define a default value for a helper in case the mock server can’t resolve the variable. The following table shows some ways you can use helpers in your examples.

| Template helper | Data returned |
| ----------- | ----------- |
| `{{$body}}` | Return the full request body |
| `{{$body 'path.to.property'}}` | Return the value of a specific property from the request body |
| `{{$headers 'header-key'}}` | Return the value of a specific request header |
| `{{$queryParams 'parameter-key'}}` | Return the value of a specific query parameter |
| `{{$pathSegments '1'}}` | Return the second segment of the request path (for example, if the request path is `/product/12345/details` then return `12345`) |
| `{{$body 'property' 'default value'}}` | Define a default value for a property |
| `{{$body 'a\.a'}}` | Return the value of the property `a.a` which has a dot (`.`) in the key name |

### Contextual response example

This example shows how to use a template helper to access data from the body of the incoming request and return that data in the response from the mock server.

1. In the mocked collection, [create a new request](/docs/sending-requests/create-requests/parameters/#raw-data) with the following body data:

    ```json
    {
        "username": "postman",
        "password": "12345"
    }
    ```

    ![Creating a new request](https://assets.postman.com/postman-docs/v10/mock-server-template-request-v10-2.jpg)

1. [Add an example](/docs/sending-requests/response-data/examples/) to the request. Then add the following body data to the example. The `{{$body}}` template helper is used to access the `username` value:

    ```json
    {
        "username": {{$body 'username' 'postman'}},
        "id": {{$randomUUID}}
    }
    ```

    ![Adding a template helper to an example](https://assets.postman.com/postman-docs/v10/mock-server-template-example-v10-2.jpg)

1. [Send the request to the mock server](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/#making-requests-to-mock-servers) using different values for `username` in the request body.

    For example, if you send the following request body:

    ```json
    {
        "username": "s-morgenstern",
        "password": "12345"
    }
    ```

    Then the mock server will return a response with the `username` value from the incoming request:

    ```json
    {
        "username": s-morgenstern,
        "id": 1ad6b425-5ebf-4864-98e0-7bb44c318bac
    }
    ```

    ![Getting a contextual response from the mock server](https://assets.postman.com/postman-docs/v10/mock-server-template-response-v10-2.jpg)
