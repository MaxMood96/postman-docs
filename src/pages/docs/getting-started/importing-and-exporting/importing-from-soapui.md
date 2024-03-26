---
title: "Import from SoapUI"
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

SoapUI is an API testing tool that supports SOAP and REST services. Postman can import SoapUI project files and recreate their requests, collections, environments, and other data in your Postman workspace.

## Contents

* [Find your SoapUI project](#find-your-soapui-project)
* [Import a SoapUI project to Postman](#import-a-soapui-project-to-postman)

## Find your SoapUI project

To find your local SoapUI project files, do the following:

1. In SoapUI, select a project.
1. Select **Project > Show Project View**.
1. In the Project View window, the project's file path appears in the **Project Summary** section.

## Import a SoapUI project to Postman

To import a SoapUI project into Postman, do the following:

1. In Postman, select **Import > Migrate to Postman > SoapUI**.
1. Select **files** or **folder**, then select the files or folder you want to import.
1. Select **Open**. Postman checks if the selected files are valid SoapUI projects.
1. If the files are valid, you can select **Start Migration**. A window appears showing the migration’s progress. When the migration is complete, select **Dismiss**.

  > You can also drag files and folders into the import window.
