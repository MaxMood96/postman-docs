---
title: "Upload files for shared requests and cloud runs"
updated: 2024-02-05
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Part 1: Send a Request"
    url: "https://youtu.be/2oOSnxZ28fA"
  - type: link
    name: "How to use an API? | Intro to APIs Part 2"
    url:  "https://youtu.be/woRuedXZyi4"
  - type: link
    name: "Upload a File via POST Request | Postman Level Up"
    url: "https://youtu.be/S7bwkys6D0E"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing file storage for tests and requests"
    url: "https://blog.postman.com/introducing-file-storage-for-tests-and-requests/"
---

> **Test data storage is available on [Postman Free, Basic, and Professional plans](https://www.postman.com/pricing/).** To learn more about availability for Enterprise plans, contact the [Postman sales team](https://www.postman.com/company/contact-sales/).

Test data is made up of the data files you use to test various scenarios for your API. Postman provides test data storage, so you can upload data files to your Postman team. Anyone on your team can then use the files when sending API requests.

## Contents

* [About test data storage](#about-test-data-storage)
* [Upload a file to your Postman team](#upload-a-file-to-your-postman-team)

## About test data storage

You can attach a file with test data to a request as [form data](/docs/sending-requests/create-requests/parameters/#form-data) or [binary data](/docs/sending-requests/create-requests/parameters/#binary-data). Postman will save the file path relative to your local [working directory](/docs/getting-started/installation/settings/#working-directory) and use the file when sending the request. However, if you share the request in a [workspace](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/), the local file isn't shared. This means other team members won't be able to send the request unless they put a copy of the same file in their own local working directory. Also, a local file won't be available when sending a request from a [monitor](/docs/monitoring-your-api/intro-monitors/) or a [scheduled collection run](/docs/collections/running-collections/scheduling-collection-runs/), which are run in the Postman cloud and not locally.

To enable sharing requests that use test data files, you can upload the files to your Postman team. Uploaded files are available to all members of your team and can be used to send requests that are shared in a workspace. Uploaded files are also available to requests sent from monitors and scheduled collection runs, and can be used from [Postman Flows](/docs/postman-flows/gs/flows-overview/) and the [Postman CLI](/docs/postman-cli/postman-cli-overview/) (but not [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/)).

## Upload a file to your Postman team

> You must have [Editor access](/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) to upload a file for a request in the collection. Files can't be uploaded from scripts.

To upload a file to your Postman team, do the following:

1. Open a request and select the **Body** tab.
1. Select **form-data** or **binary** depending on the type of data you want to send with the request.
1. If you're attaching form data, select **File** in the dropdown list next to a key name.

    ![Select the form data file option](https://assets.postman.com/postman-docs/v10/test-data-file-option-v10-21-11.jpg)

1. Select the test data file you want to use for the request:

    * To use a local file, select **+ New file from local machine**. Select a file and select **Open**. Supported file types are CSV, JSON, and binary.
    * To use a file that was uploaded before, select the file in the list. You can use any file uploaded by a member of your team. To search for a file, start typing the file name.

    ![Select a test data file](https://assets.postman.com/postman-docs/v10/test-data-select-file-v10-21-12.jpg)

1. To upload a file, select the upload icon <img alt="Upload icon" src="https://assets.postman.com/postman-docs/icons/icon-upload-file.jpg#icon" width="26px"> next to the file and select **Upload**. Uploaded files can't exceed 5 MB in size.

    ![Upload a test data file](https://assets.postman.com/postman-docs/v10/test-data-upload-file-v10-21-12.jpg)

After uploading the file, other team members can send the request without needing to place a copy of the file in their local working directory. Instead, the request will use the uploaded file. Also, the uploaded file is used if the request is sent from a monitor or a scheduled collection run.

Uploaded files can be used in any requests you or other members of your team create (except in public workspaces). Uploaded files can also be accessed by Postman Flows and the Postman CLI when automating runs. If you fork a collection that uses test data files, you may need to upload any files that haven't been uploaded to your team.

> Your [Postman plan](https://www.postman.com/pricing/) gives you a limited amount of storage space you can use for uploaded test data files. Your plan also gives you a limited number of retrievals of uploaded files. Learn more about [test data usage](/docs/billing/resource-usage/#test-data-usage).
