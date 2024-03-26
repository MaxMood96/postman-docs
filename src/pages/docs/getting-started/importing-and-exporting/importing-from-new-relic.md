---
title: "Import data from New Relic"
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
    name: "Generate Postman Collections from New Relic services"
    url: "https://blog.postman.com/generate-postman-collections-from-new-relic-services/"
---
> Importing from New Relic is available on [Postman Free, Basic, and Professional plans](https://www.postman.com/pricing/).

New Relic is an application performance management solution to monitor real-time and trending data for your processes or web apps. You can import data from New Relic into a Postman Collection.

Importing from New Relic requires you to get your API key (User key) from New Relic. After you enter your key, you can select the New Relic services you want to import as collections. The endpoints in each service are imported as requests in a collection.

## Contents

* [Get your New Relic API key](#get-your-new-relic-api-key)
* [Import New Relic data](#import-new-relic-data)

## Get your New Relic API key

1. Sign in to [New Relic](https://login.newrelic.com).
1. Select your avatar, then select **API Keys**.
1. Select the three dots next to the **USER** key and select **Copy**.

<img alt="Get a New Relic Ingest key" src="https://assets.postman.com/postman-docs/v10/new-relic-user-key-v10-17.jpg">

> There are different types of API keys in New Relic. Make sure to use a **User** key for importing into Postman. To learn more about API Keys in New Relic, see the [New Relic API keys documentation](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).

## Import New Relic data

1. In Postman, select **Import > Other Sources > New Relic**.
1. Enter the **API Key** (User key) you copied from New Relic, then select **Next**.

    > Postman saves your API key so you don't have to enter it again the next time you import data from New Relic.

1. In the list, select one or more services or applications to import as collections.
1. (Optional) Select **Show Import Settings** to configure how collections are generated from the New Relic data.
1. When you're ready, select **Import**.

<img alt="Get a New Relic Ingest key" src="https://assets.postman.com/postman-docs/v10/new-relic-import-v10-17a.jpg" width="650px">

Each service you selected is imported as a collection in Postman, and an **Import Complete** message displays in the footer. In the message, select the link icon
<img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> next to a collection to open the imported collection.

<img alt="Get a New Relic Ingest key" src="https://assets.postman.com/postman-docs/v10/new-relic-import-success-v10-17.jpg" width="583px">
