---
title: "Export data from Postman"
updated: 2023-10-18
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Import and Export Data in Postman"
    url: "https://youtu.be/KdaiVdNMgL4"
---

You can export your Postman data, including collections, environments, global variables, and data dumps, as JSON files. You can import these files back into any Postman instance, share them with others, or use them with [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/), Postman's command-line collection runner.

## Contents

* [Export collections](#export-collections)
* [Export environments](#export-environments)
* [Export data dumps](#export-data-dumps)

## Export collections

1. Select **Collections** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a collection, then select **Export**.

   <img alt="Export collection" src="https://assets.postman.com/postman-docs/export-collection-v9.1.jpg" width="350px" />

1. Select the export format for your collection.

   > Learn more about Postman's [collection format](https://learning.postman.com/collection-format/getting-started/overview/).

1. Select **Export** to download the generated JSON file.

## Export environments

1. Select **Environments** in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to an environment, then select **Export**.
1. Select **Save** to download the generated JSON file.

> To export your global variables, select **Environments** in the sidebar. Select **Globals** in the sidebar, then select **Export** in the workbench.

## Export data dumps

You can export a data dump of all your collections, environments, globals, and header presets in Postman.

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header, then select **Settings**.

1. Select the **Data** tab, then select **Request Data Export** to start your request for the data dump.

1. Select **Export Data**, then select the data types you want to export.

1. Select **Request Data Export** to submit the request.

   <img alt="Export data dump" src="https://assets.postman.com/postman-docs/v10/import-export-data-dump-request-confirm-v10-16a.jpg" width="443px" />

The [Export page](http://go.postman.co/me/export) shows information about your export request, including the file size, the date the export expires, and the statuses of your requested data exports. Possible statuses are:

* **Scheduled** - The export request is placed.
* **Transferring** - The data transfer process has started.
* **Transferred** - The data transfer process has completed.
* **Zipping** - The process of zipping the file has started.
* **Zipped** - The file is zipped.
* **Download** - The zipped file is ready to download.

When the export is ready, you will receive an email with link to download a zipped file with the data dump. You can also download the file from the Export page using **Download**.

After exporting, you can import the data into any Postman instance. You must unzip the exported file before [importing the data into Postman](/docs/getting-started/importing-and-exporting/importing-data/#import-postman-data).
