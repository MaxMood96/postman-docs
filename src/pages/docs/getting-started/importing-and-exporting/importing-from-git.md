---
title: "Import data from a Git repository"
updated: 2023-10-18
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Import and Export Data in Postman"
    url: "https://youtu.be/KdaiVdNMgL4"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Bring your APIs into Postman faster than ever"
    url: "https://blog.postman.com/bring-your-apis-into-postman-faster-than-ever/"
---

If you have [API definitions](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/), [collections](/docs/collections/using-collections/), or [environments](/docs/sending-requests/variables/managing-environments/) in a Git repository, you can import the data so you can work with it in Postman.

Postman supports importing from GitHub, Bitbucket, GitLab, and Azure DevOps repositories. You can import data from a local repository on your computer or from a remote repository hosted in the cloud.

> You can also connect your API to a remote GitHub, Bitbucket, GitLab, or Azure DevOps repository. Once connected, you can sync your API definition and associated collections in Postman with the remote repository. Learn more about [connecting your API to a Git repository](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/).

## Contents

* [Import from a local Git repository](#import-from-a-local-git-repository)
* [Import from a remote Git repository](#import-from-a-remote-git-repository)

## Import from a local Git repository

You can import data from a local GitHub, Bitbucket, GitLab, or Azure DevOps repository on your computer.

1. In Postman, select **Import** in the sidebar.

1. On your computer, open your local repository and locate the files or folders you want to import. Drag and drop the files or folders into Postman.

1. Select options based on what you're importing:

   * If you're importing an API definition, you can choose to import the definition as a collection or as an API along with a collection.

      <img alt="API definition import options" src="https://assets.postman.com/postman-docs/v10/import-definition-options-v10-19.jpg" width="651px" />

   * If you're importing an API definition along with other files such as collections or environments, select the files you want to import into Postman. By default, API definitions are imported as collections. Select the **Import (API specification) files** checkbox to import the definition as an API along with a collection.

      <img alt="File import options" src="https://assets.postman.com/postman-docs/v10/import-files-options-v10-19.jpg" width="651px" />

    > Select **View Import Settings** for more configuration options. These options will vary depending on your API specification.

1. Select **Import**.

1. An **Import Complete** message displays in the footer. In the message, select the link icon <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> next to a collection, environment, or API  to open the imported element.

      <img alt="Import complete message" src="https://assets.postman.com/postman-docs/v10/import-complete-message-v10-19.jpg" width="697px" />

## Import from a remote Git repository

You can import data from a remote GitHub, Bitbucket, GitLab, or Azure DevOps repository hosted in the cloud.

1. In Postman, select **Import** in the sidebar.

1. Select the type of repository you want to import from. Select **Other Sources** and then select **GitHub**, **Bitbucket**, **GitLab**, or **Azure**.

1. A browser tab opens asking you to sign in to your repository. Follow the onscreen instructions. When you're finished, close the browser tab and return to Postman.

   > Postman stores your authorized accounts so you can use them to connect to other repositories and services. Learn more about [managing connected accounts for remote repositories](/docs/designing-and-developing-your-api/versioning-an-api/using-cloud-git-repo/#managing-connected-accounts-for-remote-repositories).

1. In Postman, select the **Organization** or **Workspace** and the **Repository** you want to import from. (For GitLab, select the **Group** and **Project**.) Then select the **Branch** with the data you want to import.

1. Select **Continue**, then select options based on what you're importing:

   * If you're importing an API definition, you can choose to import the definition as a collection or as an API along with a collection.

      <img alt="API definition import options" src="https://assets.postman.com/postman-docs/v10/import-definition-options-v10-19.jpg" width="651px" />

   * If you're importing an API definition along with other files such as collections or environments, select the files you want to import into Postman. By default, API definitions are imported as collections. Select the **Import (API specification) files** checkbox to import the definition as an API along with a collection.

      <img alt="File import options" src="https://assets.postman.com/postman-docs/v10/import-files-options-v10-19.jpg" width="651px" />

    > Select **View Import Settings** for more configuration options. These options will vary depending on your API specification.

1. Select **Import**.

1. An **Import Complete** message displays in the footer. In the message, select the link icon <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> next to a collection, environment, or API  to open the imported element.

      <img alt="Import complete message" src="https://assets.postman.com/postman-docs/v10/import-complete-message-v10-19.jpg" width="697px" />
