---
title: "Send parameters and body data with API requests in Postman"
updated: 2024-02-05
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Part 1: Send a Request"
    url: "https://youtu.be/2oOSnxZ28fA"
  - type: link
    name: "How to use an API? | Intro to APIs Part 2"
    url:  "https://youtu.be/woRuedXZyi4"
  - type: link
    name: "Upload a File via POST Request | Postman Level Up"
    url: "https://youtu.be/S7bwkys6D0E"
---

The Postman API client enables you to send data along with your HTTP requests. You can add query and path parameters to a request and specify their values. You can also add body data to a request in various formats, including form data, URL-encoded, raw, and binary.

## Contents

* [Send request parameters](#send-request-parameters)
* [Send body data with requests](#send-body-data-with-requests)
    * [Form data](#form-data)
    * [URL-encoded](#url-encoded)
    * [Raw data](#raw-data)
    * [Binary data](#binary-data)
    * [GraphQL](#graphql)

## Send request parameters

You can specify path and query parameters for a request using the URL box or the __Params__ tab.

* Query parameters are appended to the end of the request URL, following `?` and listed in key-value pairs, separated by `&` as follows: `?id=1&type=new`
* Path parameters form part of the request URL, and are referenced using placeholders preceded by `:` as in the following example: `/customer/:id`

To specify a query parameter, add it directly to the URL or select the **Params** tab and enter the name and value. When you enter your query parameters in either the URL or the **Params** tab, these values will update everywhere they're used in Postman.

> Parameters aren't automatically URL-encoded. Right-click selected text, and choose __EncodeURIComponent__ to manually encode a parameter value.

To specify a path parameter, enter the parameter name into the URL box, after a colon, for example `:id`. When you enter a path parameter, Postman will populate it in the __Params__ tab, where you can also edit it.

You can add descriptions to your parameters and they'll appear for anyone sharing the request (for example in your workspace) or viewing your API documentation.

When you're done entering parameters, select **Send** to send the request. Learn more about [creating and sending requests in Postman](/docs/sending-requests/create-requests/request-basics/).

![Path parameter](https://assets.postman.com/postman-docs/v10/path-param-v10-21-11.jpg)

> You can use the __Bulk Edit__ option if you prefer to enter your parameters in plain text instead of using the request builder.

## Send body data with requests

You need to send body data with requests whenever you want to add or update structured data. For example, if you're sending a request to add a new customer to a database, you might include the customer details in JSON. Typically you use body data with `PUT`, `POST`, and `PATCH` requests.

The __Body__ tab enables you to specify the data you need to send with a request. You can send different types of body data to suit your API.

> If you're sending body data, make sure you have the correct [headers](/docs/sending-requests/create-requests/headers/) selected to indicate the content type your API may need to process the received data.
>
> * For `form-data` and `urlencoded` body types, Postman will automatically attach the correct `Content-Type` header.
> * If you use raw mode for your body data, Postman will set a header based on the type you select (such as text or json).
> * If you manually select a `Content-Type` header, that value will take precedence over what Postman sets.
> * Postman doesn't set any header type for the binary body type.

By default, Postman will select **None** for body data. Leave it selected if you don't need to send a body with your request. Otherwise, choose the data type you need for your request body: [form data](#form-data), [URL-encoded](#url-encoded), [raw](#raw-data), [binary](#binary-data), or [GraphQL](#graphql).

When you're done entering body data, select **Send** to send the request. Learn more about [creating and sending requests in Postman](/docs/sending-requests/create-requests/request-basics/).

### Form data

Website forms often send data to APIs as `multipart/form-data`. You can replicate this in Postman using the `form-data` option in the __Body__ tab of your request. Form data enables you to send key-value pairs and specify the content type.

You can also attach a file using form data and send it with your request. Select **File** in the dropdown list next to a key name, then select the file you want to send. You can select a file from your local system, and Postman saves the file path in the request. The saved file path is relative to your local [working directory](/docs/getting-started/installation/settings/#working-directory).

You can also upload a file with test data to your Postman team. This is useful if you want to share the request with others on your team or use the request in a monitor or scheduled collection run. Learn more about [uploading files for shared requests and cloud runs](/docs/sending-requests/create-requests/test-data/).

![Add form data](https://assets.postman.com/postman-docs/v10/request-form-data-v10-22.jpg)

### URL-encoded

URL-encoded data uses the same encoding as URL parameters. If your API requires url-encoded data, select `x-www-form-urlencoded` in the __Body__ tab of your request. Enter your key-value pairs to send with the request and Postman will encode them before sending.

> There is sometimes confusion between form data and URL-encoded. If you are unsure which one you need, check with your API provider.

### Raw data

You can use raw body data to send anything you can enter as text. In the **Body** tab of your request, select the __raw__ option and use the dropdown list to indicate the format of your data (__Text__, __JavaScript__, __JSON__, __HTML__, or __XML__). Postman will enable syntax-highlighting and appending the relevant headers to your request.

<img alt="Body JSON" src="https://assets.postman.com/postman-docs/v10/body-raw-data-v10-21-11.jpg" />

> You can [set a content type header manually](/docs/sending-requests/create-requests/headers/) if you need to override the one Postman sends automatically.

You can use [variables](/docs/sending-requests/variables/variables/) in your body data and Postman will populate their current values when sending your request.

For JSON raw body data, you can add comments, and they will be stripped out when the request is sent. Single-line comments delimited with `//` and multi-line comments delimited with `/* */` will be removed in the request.

> To beautify your XML or JSON, select the text in the editor and then select **⌘+Option+B** or **Ctrl+Alt+B**.

### Binary data

You can use binary data to send information you can't enter manually in the Postman editor with your request body, such as image, audio, and video files. (You can also send text files.)

In the **Body** tab of your request, select the **binary** option, then select the file you want to send with the request. You can select a file from your local system, and Postman saves the file path in the request. The saved file path is relative to your local [working directory](/docs/getting-started/installation/settings/#working-directory).

You can also upload a file with test data to your Postman team. This is useful if you want to share the request with others on your team or use the request in a monitor or scheduled collection run. Learn more about [uploading files for shared requests and cloud runs](/docs/sending-requests/create-requests/test-data/).

![Add binary data](https://assets.postman.com/postman-docs/v10/request-binary-data-v10-22.jpg)

### GraphQL

You can send GraphQL queries with your Postman requests by selecting the __GraphQL__ option in the __Body__ tab of your request. Enter your code in the __Query__ pane and any variables in the __GraphQL Variables__ pane.

Check out [GraphQL in Postman](/docs/sending-requests/graphql/graphql-overview/) for more information on GraphQL, including how to enable __Autocomplete__ powered by Postman API schemas.
