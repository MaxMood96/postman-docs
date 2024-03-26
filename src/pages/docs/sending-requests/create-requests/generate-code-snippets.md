---
title: "Generate code snippets from API requests"
updated: 2024-02-05
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Generating Code Snippets | Postman Level Up"
    url: "https://www.youtube.com/watch?v=yYwkvtSvpHI"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Generate Code for Your Front-end Apps"
    url: "https://blog.postman.com/use-your-work-in-postman-to-generate-code-for-your-apps/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Intuit uses Postman's code generator at hackathons"
    url: "https://www.postman.com/case-studies/intuit/"
---

Postman can convert an API request into a code snippet. You can then use the generated code snippet in your front-end application to make calls to an API. Postman can generate code snippets for a variety of programming languages and frameworks, including C#, JavaScript, and NodeJS.

> This guide has information about generating code snippets from API requests. For information about generating server-side boilerplate code from an API specification, see [Generate server-side code from your OpenAPI 3.0 definition](/docs/designing-and-developing-your-api/developing-an-api/generating-server-code/).

## Contents

* [Generate code snippets in Postman](#generate-code-snippets-in-postman)

* [Supported languages and frameworks](#supported-languages-and-frameworks)

## Generate code snippets in Postman

1. Open the request you want to use for a code snippet, then select the code icon <img alt="Code icon" src="https://assets.postman.com/postman-docs/icon-code-snippet.jpg#icon" width="16px"> in the right pane.

    <img src="https://assets.postman.com/postman-docs/v10/generate-code-right-sidebar-v10-22.jpg" width="262px" alt="Open code snippets"/>

1. Select a [language or framework](#supported-languages-and-frameworks) from the dropdown list.
1. Select the copy icon <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to copy the code snippet to your clipboard.

    <img src="https://assets.postman.com/postman-docs/code-snippet-copy-icon.jpg" width="505px" alt="Copy code snippet to clipboard"/>

1. For more configuration options, like the indentation type and count, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> next to the dropdown list. The settings vary based on the chosen language or framework.

## Supported languages and frameworks

Postman supports the following:

| **Language**  | **Framework** |
| --- | --- |
| C | [LibCurl](https://curl.se/libcurl/c/) |
| C# | HttpClient |
| C# | [RestSharp](http://restsharp.dev/) |
| cURL |[cURL](https://curl.se/) |
| Dart | [Dart](https://dart.dev/) |
| Go   | [http package](https://pkg.go.dev/net/http) |
| HTTP | (Raw HTTP request) |
| Java | [OkHttp](https://github.com/square/okhttp) |
| Java | [Unirest](https://github.com/Kong/unirest-java) |
| JavaScript | [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) |
| JavaScript | [jQuery](https://api.jquery.com/jquery.ajax/) |
| JavaScript | [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) |
| NodeJS | [Axios](https://github.com/axios/axios) |
| NodeJS | [Native](https://nodejs.org/api/http.html) |
| NodeJS | [Request](https://github.com/request/request) |
| NodeJS | [Unirest](https://github.com/Kong/unirest-nodejs) |
| Objective-C | [NSURLSession](https://developer.apple.com/documentation/foundation/urlsession) |
| OCaml | [Cohttp](https://github.com/mirage/ocaml-cohttp) |
| PHP | [cURL](https://www.php.net/manual/en/ref.curl.php) |
| PHP | [Guzzle](https://docs.guzzlephp.org/en/stable/)|
| PHP | [Http_Request2](https://www.php.net/manual/en/reserved.variables.request.php)|
| PHP | [pecl_http](https://mdref.m6w6.name/http) |
| PowerShell | [RestMethod](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-7) |
| Python | [http.client](https://docs.python.org/3/library/http.client.html) (Python 3) |
| Python | [Requests](https://www.w3schools.com/python/module_requests.asp)|
| R | [httr](https://cran.r-project.org/web/packages/httr/index.html) |
| R | [RCurl](https://cran.r-project.org/web/packages/RCurl/index.html) |
| Ruby | [NET::Http](https://docs.ruby-lang.org/en/2.0.0/Net/HTTP.html) |
| Shell | [Httpie](https://github.com/httpie/httpie) |
| Shell | [wget](https://www.gnu.org/software/wget/) |
| Swift | [URLSession](https://developer.apple.com/documentation/foundation/urlsession) |

> To add a new language or setting, you can contribute to [Postman's open-source project](https://github.com/postmanlabs/postman-code-generators).
