---
title: "API response structure in Postman"
updated: 2023-09-26
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "How to Inspect API Responses"
    url:  "https://youtu.be/31wBZyBdbgw"
  - type: link
    name: "Review Test Results in Postman | The Exploratory"
    url: "https://youtu.be/S3GKLTVRtmE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to review Postman test results"
    url: "https://blog.postman.com/how-to-review-postman-test-results/"
---

The Postman response viewer helps you visualize and check the correctness of API responses. An API response consists of the response body, headers, cookies, and the HTTP status code. You can view details about the response, including test results, network information, response size, response time, and security warnings. You can also save responses as examples or files.

## Contents

* [Response body](#response-body)
* [Cookies](#cookies)
* [Headers](#headers)
* [Test results](#test-results)
* [Network information](#network-information)
    * [SSL verification errors](#ssl-verification-errors)
* [Response code](#response-code)
* [Response time](#response-time)
* [Response size](#response-size)
* [Saving responses](#saving-responses)
* [Viewing security warnings](#viewing-security-warnings)

## Response body

The Postman **Body** tab gives you several tools to help you understand the response. You can view the body in one of four views: **Pretty**, **Raw**, **Preview**, and **Visualize**.

> **Find items in responses.** To open the search bar, select the search icon <img alt="Search icon" src="https://assets.postman.com/postman-docs/icon-search-v9.jpg#icon" width="16px"> in the results pane. You can also place your cursor in the response and select **⌘+F** or **Ctrl+F**. This option isn't available in a response's **Preview** or **Visualize** views.

Note that if the response's `Content-Type` header indicates that the response is an image, Postman will detect and render the image automatically.

### Pretty

The **Pretty** view formats JSON or XML responses so they're easier to view. Links inside the **Pretty** view are highlighted, and selecting them can load a GET request in Postman with the link URL.

For navigating large responses, select the down arrows next to a line to collapse large sections of the response.

<img alt="Response Pretty view" src="https://assets.postman.com/postman-docs/v10/request-response-pretty-view-v10.jpg" width="400px"/>

> **Force JSON formatting**. For Postman to automatically format the body, the response must have the appropriate `Content-Type` header. If you receive a response with a different `Content-Type` header, you can force formatting through JSON. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**. Under **Request**, select **JSON** next to **Language detection**.

### Raw

The **Raw** view is a large text area with the response body. It can indicate whether your response is minified.

<img alt="Response Raw view" src="https://assets.postman.com/postman-docs/response-raw-view.jpg" width="300px"/>

### Preview

The **Preview** view renders the response in an iframe sandbox. Some web frameworks by default return HTML errors, and **Preview** can be helpful for debugging in those cases.

Due to iframe sandbox restrictions, JavaScript and images are turned off in the iframe. For binary response types, you can select the down arrow next to **Send** and select **Send and Download** to save the response locally. You can then view it using the appropriate viewer. This gives you the flexibility to test audio files, PDFs, zip files, or any other file types the API returns.

<img alt="Response Preview view" src="https://assets.postman.com/postman-docs/response-preview-view.jpg" width="300px"/>

### Visualize

The **Visualize** view renders the data in the API response according to visualization code that you add to the requests **Tests**. For details on how to add, use, and debug visualization code, see [Visualizing responses](/docs/sending-requests/response-data/visualizer/).

![Response Visualize view](https://assets.postman.com/postman-docs/v10/response-visualize-view-v10-2.jpg)

## Cookies

You can select **Cookies** to inspect cookies sent by the server. A cookie's entry includes its name, value, the associated domain and path, and other information about the cookie.

To learn more about working with cookies in Postman, see  [Using cookies](/docs/sending-requests/response-data/cookies/).

## Headers

Headers are displayed as key-value pairs under the **Headers** tab. Hover over the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> next to the header name to get a description of the header according to the HTTP specification.

## Test results

If the API request you are viewing had any test scripts, the results are displayed in the **Test Results** tab.

To learn more about running tests against API requests in Postman, see [Writing tests](/docs/writing-scripts/test-scripts/).

## Network information

Postman displays network information when your API returns a response. Hover over the network icon <img alt="Network information icon" src="https://assets.postman.com/postman-docs/icon-uptime-globe.jpg#icon" width="14px"> to get the local and remote IP addresses for the request you sent.

When you make an `https` request, the network icon includes a padlock. When you hover over the icon, the network information will show more information including [certificate verification](/docs/sending-requests/authorization/certificates/) details.

<img alt="Hover over the network icon for network information" src="https://assets.postman.com/postman-docs/v10/https-network-info-response-v10-18.jpg" width="393px"/>

### SSL verification errors

If SSL verification is enabled and verification fails, the response area displays an error message. Select the link to open the Console and view more information about the error.

<img alt="Verification error" src="https://assets.postman.com/postman-docs/v10/response-error-disable-ssl-v10-18.jpg" width="414px"/>

If needed, you can turn off SSL verification for the request or turn it off globally in Postman:

* To turn off SSL verification for a request, select the **Settings** tab in the request and turn off **Enable SSL certificate verification**.
* To turn off SSL verification globally, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**. Under **Request**, turn off **SSL certificate verification**.

If you have **SSL verification** turned off and your request returns a certificate verification error, you can hover over the network information for details about the error.

<img alt="Certificate error" src="https://assets.postman.com/postman-docs/v10/certificate-error-in-network-info-v10-18.jpg" width="393px"/>

For requests that are successful and return data but with a certificate verification failure, the [Console](/docs/sending-requests/response-data/troubleshooting-api-requests/) displays a warning.

## Response code

Postman displays the response code returned by the API. Hover over the response code to get a short description of the code and what it means.

<img alt="Hover over the response code to get a description" src="https://assets.postman.com/postman-docs/v10/response-code-v10-18.jpg" width="348px"/>

Some API responses also contain custom messages that can help you understand response codes. For example, if you receive a `401 Unauthorized` response, the message might tell you to check the token you used in the request. If custom messages are returned, they're displayed in the **Body** of the response.

## Response time

Postman automatically calculates the time in milliseconds it took for the response to arrive from the server. This information can be useful for some preliminary performance testing. Hover over the response time for a graph with information on how long each event in the process took.

<img alt="Hover over the response code for a description" src="https://assets.postman.com/postman-docs/v10/response-time-v10-18.jpg" width="443px"/>

## Response size

Postman displays the size of the response. Hover over the response size to get a breakdown by body and header sizes.

## Saving responses

If a request has been saved in a collection, you can save responses for that request. Once the response has been returned, you can:

* Select **Save as Example** to save the response as an [example](/docs/sending-requests/response-data/examples/) that you can access later.
* Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> then **Save response to file** to save the response as a JSON file.
* Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> then  **Clear response** to remove any data in the response viewer. Note that for event-based requests, this is available after the stream is closed.

<img alt="Save an API response as an example or file" src="https://assets.postman.com/postman-docs/v10/save-response-v10-18.jpg" width="518px"/>

## Viewing security warnings

Postman applies security rules configured for your [API requests](/docs/api-governance/api-testing/api-testing-warnings/) when you send requests to any API using either the Postman web app or the Postman desktop app. A security warning indicates that there are potential security risks the API might be vulnerable to, but they don't mean the API is broken.

To view the specific security warnings that Postman applies to all requests, see [Security warnings](/docs/api-governance/api-testing/security-warnings/).

If it finds any potential security risks, Postman adds the number of warnings to the **Security** tab in the response.

<img alt="Security tab showing one warning" src="https://assets.postman.com/postman-docs/v10/api-response-security-tab-v10-18.jpg" />

To view the list of security warnings and to get more information about specific warnings, do the following:

1. Select **Security** to view the warnings.
1. For more details, select a warning to expand it.
1. Select **Possible fix** to learn about possible ways to fix the underlying problem.

<img alt="Select Possible fix in a security warning" src="https://assets.postman.com/postman-docs/v10/api-response-security-tab-possible-fix-v10-18.jpg" />

### Hiding security warnings

To turn a warning off for the current API response, do the following:

1. Select **Hide warning**.
1. Choose a reason for hiding it, then select **Hide**.

This will turn the warning off for all members of your team for this response.

> To turn a warning off globally for your team, you can [configure your API Security rules](/docs/api-governance/configurable-rules/configuring-api-security-rules/) (available for [Enterprise teams](https://www.postman.com/pricing/)).

<img alt="Select Hide warning in a security warning" src="https://assets.postman.com/postman-docs/v10/api-response-security-tab-hide-warning-v10-18.jpg" />

When you or another member of your team has hidden a warning, Postman shows a message in the **Security** tab to indicate how many are hidden.

To turn this warning back on later, do the following:

1. Select **Review** in the **Security** tab.
1. Review your hidden warnings and select the eye icon <img alt="Eye icon" src="https://assets.postman.com/postman-docs/eye.jpg#icon" width="16px"> next to the one you want to turn back on.

<img alt="Review hidden security warnings" src="https://assets.postman.com/postman-docs/v10/api-response-security-tab-review-hidden-warnings-v10-18.jpg" />
