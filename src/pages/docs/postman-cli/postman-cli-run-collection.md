---
title: "Run a collection using the Postman CLI"
updated: 2023-06-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Run collections with Postman CLI | The Exploratory"
    url: "https://youtu.be/DKxCVo1_ELg"
  - type: link
    name: "View Postman CLI Runs in Postman | Postman Level Up"
    url: "https://youtu.be/YTzlLLtsJls"
  - type: link
    name: "Testing APIs | Postman Enterprise"
    url: "https://youtu.be/-Nkvs69-LNE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Streamline your API release process with the Postman CLI"
    url: "https://blog.postman.com/streamline-your-api-release-process-with-the-postman-cli/"
warning: false
tags:
  - "Postman CLI"
---

You can use the Postman CLI to manually run collections to test the functionality of your API. You can also use the Postman CLI to automate collection runs on CI/CD pipelines.

When the Postman CLI runs a collection, the collection and its tests execute locally and the results are sent to Postman servers as an API call.

## Contents

* [Running a collection locally with the Postman CLI](#running-a-collection-locally-with-the-postman-cli)
* [Running a collection in CI/CD](#running-a-collection-in-cicd)
* [Running a collection in a specific order](#running-a-collection-in-a-specific-order)
* [Running a collection that uses test data files](#running-a-collection-that-uses-test-data-files)

## Running a collection locally with the Postman CLI

You can use the Postman CLI to run the requests in a [collection](/docs/collections/using-collections/#creating-collections) or a [folder](/docs/collections/using-collections/#adding-folders-to-a-collection).

1. [Download and install the Postman CLI](/docs/postman-cli/postman-cli-installation).

1. Select **Collections** in the sidebar and select the collection or folder you want to run.

    > You can also run a collection or folder that's linked to an API. Learn more about [adding a collection to an API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/#adding-a-collection).

1. On the **Overview** tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

1. On the **Functional** tab, select **Automate runs via CLI**.

    <img alt="Automate runs using the Postman CLI" src="https://assets.postman.com/postman-docs/v10/pcli-automate-cli-v10-13.jpg">

1. In the **Postman CLI command** window, select **Add API Key**.

1. Select **Generate Key** (or **Use Existing Key** to enter an existing API key and skip to step #9).

1. Enter a name for the API key.

1. Select **Generate**.

1. Copy and save the API key.

1. Select **Insert Key**.

1. Select <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> **Copy**.

1. Paste and run the commands in your terminal.

1. After running the commands, the Postman CLI generates a link. Follow the link to check the results on Postman.

    <img alt="Postman CLI generated link" src="https://assets.postman.com/postman-docs/v10/postman-cli-generated-link-v10.jpg">

1. The collection run results display in the browser.

    <img alt="Postman CLI view collection run results" src="https://assets.postman.com/postman-docs/v10/postman-cli-view-run-data-v10.jpg">

## Running a collection in CI/CD

When the collection runs to your satisfaction, you can copy the commands into your CI/CD scripts to integrate them into your workflows. When adding the command to your CI/CD script, you may want to replace the API key with a variable.

To run a collection in CI/CD, do the following:

1. Select **Collections** in the sidebar and select the collection or folder you want to run.

    > You can also run a collection or folder that's linked to an API. Learn more about [adding a collection to an API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/#adding-a-collection).

1. On the **Overview** tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

1. On the **Functional** tab, select **Automate runs via CLI**.

    <img alt="Automate runs using the Postman CLI" src="https://assets.postman.com/postman-docs/v10/pcli-automate-cli-v10-13.jpg">

1. Under **Run on CI/CD**, select **Configure command**.

1. Select a **Collection** to run during pipeline builds. You can also select an **Environment** to use.

    > If needed, select **+ Add Another Collection** to select other collections to run.

1. Select the **CI/CD Provider** for your CI/CD pipeline.

1. Select the **Operating system** for your CI/CD pipeline.

1. Select the copy icon <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to copy the Postman CLI configuration. You can also select **Copy Postman CLI Command**.

    <img alt="Generate Postman CLI" src="https://assets.postman.com/postman-docs/v10/generate-postman-cli-v10-19.jpg" />

1. Add the Postman CLI configuration to your CI/CD pipeline. The process for doing this depends on your CI tool.

## Running a collection in a specific order

By default, when you generate the command to run a collection from the Collection Runner, a single Collection ID for the collection is specified. This will run the folders and requests in that collection in the sequence they're listed in the collection.

If you need to change the order of execution, select a request in the Collection Runner and drag it to move it to its new order. You can also remove an individual request from the run by clearing the checkbox next to its name.

When you change the folder and request sequence and **Automate runs via CLI** is selected, the command in the **Postman CLI command** window will also change. In addition to the Collection ID, the generated command will specify a number of folder and request UIDs with the `-i` option. This will run each of the folders or requests in that specified order.

## Running a collection that uses test data files

The Postman CLI can't run requests that use files in your local [working directory](/docs/getting-started/installation/settings/#working-directory) to send [body data](/docs/sending-requests/create-requests/parameters/). If your collection has requests that use files, [upload your test data files](/docs/sending-requests/create-requests/test-data/) to make them available to the Postman CLI.
