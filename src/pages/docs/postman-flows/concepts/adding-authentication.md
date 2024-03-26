---
title: "Authenticate an API in Postman Flows"
updated: 2023-11-10
---

Most APIs require some form of authentication. Authentication adds security to an API so that only the intended users can access and update information. Postman Flows recognizes supported APIs that require authentication, and prompts you to set up authorization in the **Send Request** block. You can also add your API key to the **Send Request** block as a value.

Read about the [different types of authentication](/docs/sending-requests/authorization/authorization/) and how to use them.

## Contents

* [Getting an API key](#getting-an-api-key)
* [Adding an API key to the Send Request block](#adding-an-api-key-to-the-send-request-block)
* [Setting up authorization from the Send Request block](#setting-up-authorization-from-the-send-request-block)

### Getting an API key

This example uses the Stocks Price Flow template. This Flow is already built but needs an API key to run. API keys are a series of letters and numbers that uniquely identifies who can use the API. This request has a variable `api key` which will pass the value of the variable in the request.

<img src="https://assets.postman.com/postman-docs/v10/flows-getting-api-key-v10-20.gif" alt="Getting an API key" fetchpriority="low" loading="lazy" />

Selecting the link in the Flow opens the page to get an API key. Enter any organization name and an email and copy the key generated below.

### Adding an API key to the Send Request block

For this example, you don't need to secure the API key, so it can be pasted directly in the `api key` value in the **Send Request** block. Generally, it's a good idea to store the key securely as a secret value in a Postman [Environment](/docs/sending-requests/variables/managing-environments/) which you can then select in the **Send Request** block.

### Setting up authorization from the Send Request block

When you create a **Send Request** block and select a request to a supported API that requires authorization and has the **No Auth** authorization type, you'll be prompted to set up authorization for the request.

<img src="https://assets.postman.com/postman-docs/v10/flows-set-up-auth-v10.jpg" alt="Set up authorization" width="350px">

Select **set up authorization** to [add your API key to the request](/docs/sending-requests/authorization/authentication-for-public-apis/).
