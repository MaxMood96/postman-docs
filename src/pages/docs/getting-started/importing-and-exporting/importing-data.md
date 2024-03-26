---
title: "Import data into Postman"
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
  - type: link
    name: "Importing cURL Commands | Postman Level Up"
    url: "https://youtu.be/kuR3we5EY2s"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Essentials: Exploring the Collection Format"
    url: "https://blog.postman.com/postman-essentials-exploring-the-collection-format/"
  - type: link
    name: "Differences between Postman Collections and the collection format"
    url: "https://blog.postman.com/differences-between-postman-collections-and-collection-format/"
  - type: link
    name: "Bring your APIs into Postman faster than ever"
    url: "https://blog.postman.com/bring-your-apis-into-postman-faster-than-ever/"
---

You can import collections, API definitions, and other data files so you can work with them in Postman.

To import your data into Postman, select **Import** in the sidebar. You can import your data from files, folders, cURL commands, raw text, or URLs. You can also import data from other sources such as code repositories, API gateways, API clients, and application performance management tools.

![Import data into Postman](https://assets.postman.com/postman-docs/v10/import-export-import-ui-v10-20.jpg)

> You can also import items by dragging and dropping files or folders into Postman.

## Contents

* [Import Postman data](#import-postman-data)
    * [Convert Postman collections from v1 to v2](#convert-postman-collections-from-v1-to-v2)
* [Migrate from other API clients](#migrate-from-other-api-clients)
* [Import from cURL commands](#import-from-curl-commands)
* [Import API definitions](#import-api-definitions)

## Import Postman data

You can import data that was [exported from Postman](/docs/getting-started/importing-and-exporting/exporting-data/), including collections, environments, data dumps, and globals. Postman will automatically recognize Postman data on import.

1. Select **Import** in the sidebar.
1. Do one of the following:

    * Select your file or folder, or drag it into Postman. If you are importing a [Postman data dump](/docs/getting-started/importing-and-exporting/exporting-data/#export-data-dumps) or other zipped file, you must unzip the file before importing it into Postman.
    * Paste your raw text or URL into the box.
    * Select **Other Sources** and select the type of data you want to import. You can import data from a [GitHub, Bitbucket, GitLab, or Azure](/docs/getting-started/importing-and-exporting/importing-from-git/#import-from-a-remote-git-repository) code repository. You can also import an API from [AWS API Gateway](/docs/designing-and-developing-your-api/importing-an-api/#import-api-definitions-from-amazon-api-gateway) or [Azure API Management](/docs/designing-and-developing-your-api/importing-an-api/#import-api-definitions-from-azure-api-management), or import data from [New Relic](/docs/getting-started/importing-and-exporting/importing-from-new-relic/).

1. If you're importing multiple files, select the files you want to import, then select **Import**.

    <img alt="Import Postman data" src="https://assets.postman.com/postman-docs/v10/import-postman-data-v10-19.jpg" width="651px" />

    > If you are importing a single file, Postman imports it after you select it.

1. An **Import Complete** message displays in the footer. In the message, select the link icon <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> next to a collection or environment to open the imported element.

    <img alt="Import complete message" src="https://assets.postman.com/postman-docs/v10/import-complete-message-v10-19.jpg" width="697px" />

### Convert Postman collections from v1 to v2

Postman no longer supports the collection v1 format and will return an error if you import a collection in this format. You can convert your collection's format from v1 to v2 to import it into Postman.

To convert your collection's format from v1 to v2, do the following:

1. In the terminal of your choice, enter the following command to install the Postman Collection Transformer.

   ```bash
   sudo npm install -g postman-collection-transformer
   ```

1. Convert an individual Postman Collection from v1 to v2 by entering this command:

   ```bash
   postman-collection-transformer convert -i <path to the input Postman Collection file> -o <path to the downloaded Postman file> -j 1.0.0 -p 2.0.0 -P
   ```

The resulting collection will download to your target file path in v2 format.

You can retrieve a list of `convert` options by running the command with the `-h` flag:

   ```bash
   postman-collection-transformer convert -h
   ```

> Go to the [Postman Collection Transformer](https://github.com/postmanlabs/postman-collection-transformer) for more information about collection conversion.

## Migrate from other API Clients

Postman can import requests, environments, and other data from the following API clients:

* [SoapUI](/docs/getting-started/importing-and-exporting/importing-from-soapui/)
* [Hoppscotch](/docs/getting-started/importing-and-exporting/importing-from-hoppscotch/)
* [Insomnia](/docs/getting-started/importing-and-exporting/importing-from-insomnia/)
* [Thunder Client](/docs/getting-started/importing-and-exporting/importing-from-thunder-client/)

## Import from cURL commands

To learn more about using cURL commands to import data, go to [Import cURL commands](/docs/getting-started/importing-and-exporting/importing-curl-commands/).

## Import API definitions

To learn more about importing your API definitions into Postman, go to [Import an API into Postman](/docs/designing-and-developing-your-api/importing-an-api/).
