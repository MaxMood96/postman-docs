---
title: "Import cURL commands"
updated: 2023-10-18
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Import and Export Data in Postman"
    url: "https://youtu.be/KdaiVdNMgL4"
  - type: link
    name: "Collection Format | Postman Level Up"
    url: "https://youtu.be/cRXSblrGrao"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Essentials: Exploring the Collection Format"
    url: "https://blog.postman.com/postman-essentials-exploring-the-collection-format/"
  - type: link
    name: "Differences between Postman Collections and the collection format"
    url: "https://blog.postman.com/differences-between-postman-collections-and-collection-format/"
---

cURL is a popular command-line tool for making HTTP requests. When testing a web application or API, cURL enables you to interact directly from the command line, using a well-established syntax that's common in the API developer community. If you have several cURL commands in different places, you can import them into Postman.

## Contents

* [Import a cURL command into Postman](#import-a-curl-command-into-postman)
* [Convert a Postman request to a cURL command](#convert-a-postman-request-to-a-curl-command)

## Import a cURL command into Postman

1. Select **Import** in the sidebar.
1. Paste your cURL command into the box at the top. Postman creates and opens a request automatically.

![Import data into Postman](https://assets.postman.com/postman-docs/v10/import-export-import-ui-v10-20.jpg)

> You can also paste cURL commands into a request's URL box.

## Convert a Postman request to a cURL command

1. Open the request you want to use for a code snippet, then select the code icon <img alt="Code icon" src="https://assets.postman.com/postman-docs/icon-code-snippet.jpg#icon" width="16px"> in the right sidebar.

    <img alt="Open code snippets" src="https://assets.postman.com/postman-docs/v10/generate-code-right-sidebar-v10.jpg" width="300px" />

1. Select **cURL** from the dropdown list.
1. Select the copy icon <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to copy the code snippet to your clipboard.

    <img alt="Copy code snippet to clipboard" src="https://assets.postman.com/postman-docs/v10/code-snippet-copy-icon-v10.jpg" width="500px" />

> If you prefer working inside the command line with cURL making basic requests, the [VS code extension](/docs/getting-started/basics/about-vs-code-extension/) is for you.
