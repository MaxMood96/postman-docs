---
title: "How a Postman mock server matches requests to saved examples"
updated: 2022-09-26
search_keyword: "x-mock-response-name, x-mock-response-id, x-mock-response-code, requestMethod, requestPath"
---

Using Postman's [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) requires a collection with requests and saved request examples. You can save as many examples to a collection as you want, and the mock server will return these examples predictably. Postman uses a matching algorithm to decide which examples to return.

## Contents

* [Mock server elements](#mock-server-elements)
* [How the matching algorithm works](#how-the-matching-algorithm-works)
* [Using wildcard variables](#using-wildcard-variables)
* [Troubleshooting mock server responses](#troubleshooting-mock-server-responses)

## Mock server elements

When you create a mock server, Postman associates a particular collection (and optionally an environment) with the new mock server. In the scenario below, the collection `C1` is associated with the new mock server `M1`.

![create mock diagram](https://assets.postman.com/postman-docs/v10/create-mock-v10.jpg)

When you call the mock server `M1` using the mock server URL `https://M1.mock.pstmn.io`, the mock service retrieves all saved examples for the associated collection before it begins the matching process.

![show mock diagram](https://assets.postman.com/postman-docs/v10/show-mock-v10.jpg)

After the mock service has all the saved examples for the collection, it iteratively pairs the incoming request with the closest matching example.

![use mock diagram](https://assets.postman.com/postman-docs/v10/use-mock-v10.jpg)

The incoming request can have several configurable variables, such as `requestMethod`, `requestPath`,  `requestHeaders`, `requestBody`, and `requestParams`. The `requestMethod` variable corresponds to any valid HTTP request method (such as `GET`, `POST`,`PUT`, `PATCH`, or `DELETE`), and the `requestPath` refers to any valid string path (such as `/`, `/test`, `/test/path`, or `/test/path/1`).

Other optional headers like `x-mock-response-name` or `x-mock-response-id` enable you to further specify the example to be returned based on the name or the UID of the saved example. You can get the example UID by using the Postman API to [GET a Single Collection](https://documenter.getpostman.com/view/12959542/UV5XjJV8#a6a282df-907e-438b-8fe6-e5efaa60b8bf) and searching for your example in the response. The UID has the syntax `<user_id>-<response_id>`.

<img alt="Mock request configurable elements" src="https://assets.postman.com/postman-docs/v10/mock-configurable-elements-v10.jpg"/>

## How the matching algorithm works

To match an incoming request with the closest matching example, Postman uses the following algorithm.

### 1. Fetch all examples

The mock service fetches all examples in the mocked collection and converts them into Postman response objects using the [Postman Collection SDK](/docs/developer/collection-sdk/). If the conversion process fails for an example, resulting in a response that isn't in the expected format, the example is removed from the matching process.

The mock service also fetches the environment associated with the mock server (if there is one). Collection variables and environment variables in the examples are then populated with data.

### 2. Filter by HTTP method

Any responses that aren't the same HTTP method type as the incoming request are removed from the matching process. For example, if the mock request was `POST` to `https://M1.mock.pstmn.io/test`, all saved examples for which the method type isn't `POST` are disregarded.

### 3. Filter by custom headers

The matching algorithm checks any custom headers passed in the incoming request in the following order:

1. If the `x-mock-response-code` header is provided, the algorithm filters out all examples that don't have a matching response status code.
1. If the `x-mock-response-id` header is provided, the algorithm selects the example with the matching response ID and returns the example as the response. If no example is found with a matching ID, the matching process stops and Postman returns an error.
1. If the `x-mock-response-name` header is provided, the algorithm selects the example with the matching name and returns the example as the response.

    * If more than one example in the mocked collection has the same name, Postman sorts the examples by ID and returns the first example in the list with a `200` response status code.
    * If none of the matching examples has a `200` response status code, Postman returns the first example in the sorted list.
    * If no example is found with a matching name, the matching process stops and Postman returns an error.

### 4. Filter by URL

The matching algorithm compares the `/path` of the incoming request with the `/path` of each saved example. The algorithm then assigns a score to each example based on how closely the paths match.

An example starts with a score of 100. The algorithm goes through the following steps in order and stops when a match is made. The score is then adjusted based on the step that resulted in a match. If a match can't be made, the example is removed from the matching process.

| URL matching step | Matching score adjustment |
| ----------- | ----------- |
| URL match is perfect | No adjustment |
| URLs match after removing trailing slashes (`/`) | Reduced by 5 |
| URL match is case insensitive | Reduced by 10 |
| URLs match after removing trailing slashes (`/`) and the match is case insensitive | Reduced by 15 |
| URLs match after removing [wildcard variables](#using-wildcard-variables) | Reduced by 20 |
| URLs match after removing alphanumeric IDs | Reduced by 21 |
| URLs match after removing trailing slashes (`/`) and alphanumeric IDs | Reduced by 25 |
| URLs match based on a [document distance algorithm](https://www.npmjs.com/package/levenshtein) | Reduced by 30 |

> For example, if the request's URL is `https://M1.mock.pstmn.io/test` and the example's URL is `https://postman.com/about`, the algorithm compares `/test` with `/about`. In this case the paths don't match, so the corresponding example is skipped, and the algorithm moves to the next example.

### 5. Filter by parameters

After matching URLs, the algorithm examines the parameters for each example (such as `{{url}}/path?status=pass`). The matching score is further adjusted based on the number of parameter matches, partial parameter matches, and missing parameters.

* **Parameter match** - A key-value pair in the example matches a key-value pair in the incoming request.
* **Partial parameter match** - A key in the example matches a key in the incoming request, but the values for the keys don't match.
* **Missing parameter** - A key is present in the example or the incoming request but not in both.

The number of matching parameters is used to calculate the _matching percentage_. The matching percentage equals the number of parameter matches divided by the sum of all parameter matches, partial parameter matches, and missing parameters.

| Parameter matching result | Matching score adjustment |
| ----------- | ----------- |
| All parameters match (case sensitive) | Increased by 10 |
| Some parameters match | Increased by 10 multiplied by the matching percentage |
| No parameters match | Reduced by the number of missing parameters (maximum reduction of 10) |

### 6. Check for header and body matching

You can [enable header and body matching](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/#matching-request-body-and-headers) in the mock server configuration. You can also enable header and body matching by passing the custom header `x-mock-match-request-body` or `x-mock-match-request-headers` with the request. (These custom headers have higher precedence than header or body matching values specified in the mock server configuration.)

When header and body matching are enabled:

1. The algorithm first filters out all examples that don't match the specified request headers. Header matching is case insensitive.
1. The algorithm then filters out all examples that don't match the request body.

> **When body matching isn't explicitly enabled, the matching algorithm still considers the request body.** If an example's body matches the request body, the example's matching score is increased by 5. If the example's body doesn't match the request body, the example's score isn't adjusted, and the example isn't removed from the matching process.

### 7. Select the highest matching score

The matching algorithm checks the matching scores of the remaining examples and returns the example with the highest score.

* If more than one example has the highest score, Postman sorts the examples by ID and returns the first example in the list with a `200` response status code.
* If none of the highest-scoring examples has a `200` response status code, Postman returns the first example in the sorted list.

## Using wildcard variables

All unresolved variables in an example’s request, which don’t exist in the mock server’s associated collection or environment, are treated as wildcard variables. Wildcard variables act as capture groups for dynamic URL segments. This is useful if some segments of the API’s URL map to resource identifiers, like user IDs, user names, or file names.

For example, you can mock an endpoint that returns a user profile by ID. The endpoint takes in the user ID from the URL and returns the user ID in the response. On calling `GET {{url}}/users/{{userId}}`, the endpoint returns:

```json
{
  "id": 2,
  "name": "Carol"
}
```

To match a request like this in your mock server, you can use a variable in the request URL of your example. You don't need to hard-code values in the example. Instead, you can match any request sent to your mock server that matches the pattern `GET /users/<userId>`. To do this, replace the dynamic segments.

Wildcard matching applies to entire URL path segments. The same example, `GET {{url}}/users/{{userId}}`, can serve `GET /users/1`, `GET /users/100`, or even `GET /users/carol`. But this example won't match `GET /users/another/segment`.

You can place the same variables in the example’s response to use their captured values. In this case, you can add a request body for the same example as follows:

```js
{
  "id": {{userId}},
  "name": "Carol"
}
```

This will pass the value captured from the wildcard segment to the same variable name into the response.

> Wildcards in response bodies aren't part of the matching algorithm.

## Troubleshooting mock server responses

If the mock server isn't returning the example you expect for a request, try the following:

* **Add different path variables to your examples.** Two examples with the same path variables will be assigned the same matching score. In this case, Postman will return one of the examples. To make sure more than one example isn't assigned the same matching score, use different path variables for each of your examples.
* **Use optional headers to return a specific example.** You can make sure the mock server returns a specific example by using the `x-mock-response-name` or `x-mock-response-id` header in your request. Postman will return the example with the matching name or UID.
* **Make sure to use unique names for all saved examples in the mocked collection.** If more than one example in the collection has the same name, you may not get the expected response when using the `x-mock-response-name` header. Alternatively, you can use the `x-mock-response-id` header to get the correct response. To find the ID of a saved example, select it in the sidebar, then select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar.
* **Filter out examples by response status code.** You can use the `x-mock-response-code` header in your request to specify the response status code you want. Any examples that don't have the matching response status code are removed from the matching process.
