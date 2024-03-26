---
title: "Import from Thunder Client"
updated: 2023-12-15
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

Thunder Client is an API client extension in VS Code for testing and working with APIs. Postman can import collection and environment files from Thunder Client.

## Export files from Thunder Client

To export files from Thunder Client, do the following:

1. In the Thunder Client extension in VS Code, select the **More options** icon next to the collection or environment you want to export, then select **Export**.
1. Select the location where you want to export the data.
1. Select **Save**.

## Import Thunder Client files to Postman

To import Thunder Client files, do the following:

1. In Postman, select **Import > Migrate to Postman > Other API Clients**.
1. Select **files** or **folder**, then select the files or folder you want to import. You can select individual exported collection and environment files, or you can select the `rangav.vscode-thunder-client` folder:
      * macOS: `~/Library/Application Support/Code/User/globalStorage/rangav.vscode-thunder-client`
      * Windows: `C:\Users\{UserName}\AppData\Roaming\Code\User\globalStorage\rangav.vscode-thunder-client`
1. Select **Open**. Postman checks if the selected files are valid Thunder Client files.
1. If the files are valid, you can select **Start Migration**. A window appears showing the migration’s progress. When the migration is complete, select **Dismiss**.

  > You can also drag files and folders into the import window.
