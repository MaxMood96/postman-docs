---
title: "Connect multiple APIs to a repository"
updated: 2023-09-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Git Workflows in Postman | The Exploratory"
    url: "https://youtu.be/cB7mCuYeuAU"
  - type: link
    name: "Integrating GitLab in Postman's API Builder"
    url: "https://youtu.be/ecAQv9gZEKk"
  - type: link
    name: "API Versioning in Postman using Bitbucket"
    url: "https://youtu.be/SO_88TQ2dkE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Build better APIs using the new and improved API Builder"
    url: "https://blog.postman.com/build-better-apis-using-the-new-and-improved-api-builder/"
  - type: link
    name: "Announcing Postman’s Redesigned API Builder with Native Git Support"
    url: "https://blog.postman.com/announcing-postmans-redesigned-api-builder-with-native-git-support/"
  - type: link
    name: "Syncing Your Specs with Collections"
    url: "https://blog.postman.com/latest-updates-to-syncing-your-specs-with-collections/"
---

You can connect more than one API in Postman to the same Git repository. For each API you want to connect, repeat the process to set up the Git integration. For complete steps, see [Using a cloud-hosted Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-cloud-git-repo/) or [Using an on-premises Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-on-prem-git-repo/).

It's important to make sure your APIs remain separated in the repository to avoid changes from one API getting applied to another API. You can separate your APIs in the repository using either files or branches.

## Contents

* [Separating APIs with files](#separating-apis-with-files)
    * [Reusing components in multiple APIs](#reusing-components-in-multiple-apis)
* [Separating APIs with branches](#separating-apis-with-branches)

## Separating APIs with files

You can keep your APIs separate by [adding different definition files](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-an-api-definition-from-a-connected-repository) to each API. Definition files can exist at the root level of the repository or in any subdirectory. Also, when setting up the Git integrations, make sure to select a different collections folder for each API. This will keep your collection files separated.

For example, if you have an `emails` API and an `sms` API, you could have the following file structure for the `main` branch in your repository:

* `emails-api.yaml` - Root definition file for the `emails` API
* `emails/postman/collections` - Collections directory for the `emails` API
* `sms-api.yaml` - Root definition file for the `sms` API
* `sms/postman/collections` - Collections directory for the `sms` API

If you're working on a [multi-file API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#working-with-multi-file-api-definitions), you can choose which files to add to each API. Make sure to select the correct definition files when [adding files to an API](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-files-from-a-connected-repository).

> For OpenAPI 2.0 and 3.0 APIs, when you add definition files to your API, Postman scans for any referenced files in the same repository and automatically adds them to your API. If two APIs are in the same repository, and each API's root definition files reference the same file, that file will be added to both APIs. In this case, changes made in one API may affect the other API.

### Reusing components in multiple APIs

If there are common components referenced by multiple APIs, you can keep them in separate directories (such as `schemas` or `responses`). You can then [add the common component files](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-files-from-a-connected-repository) to each API as needed. This enables you to reuse the same component file in more than one API definition. Keep in mind that if you push changes to a component file from one API, other APIs that use the same component will also be affected.

## Separating APIs with branches

You can keep your APIs separate by using a different branch for each API in the repository. For example, if you have a `notifications-v1` API and a `notifications-v2` API, you could have the following branch and directory structure in your repository:

* `notifications-v1` branch
    * `notifications.yaml` - Root definition file for the `notifications-v1` API
    * `postman/collections` - Collections directory for the `notifications-v1` API
* `notifications-v2` branch
    * `notifications.yaml` - Root definition file for the `notifications-v2` API
    * `postman/collections` - Collections directory for the `notifications-v2` API

As you work on your APIs, you can switch branches and push or pull changes for any branch. To keep your APIs separate, always make sure you are on the correct branch before pushing or pulling changes.
