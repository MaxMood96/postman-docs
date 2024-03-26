---
title: "Access Postman collections in your CI environment using Newman"
updated: 2023-10-05
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Continuous Testing with Postman | Webinar"
    url: "https://youtu.be/sB2HHrezQOo"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Continuous API Testing with Postman"
    url: "https://blog.postman.com/continuous-api-testing-with-postman/"
---

You can use [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/) and the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) to run Postman Collections in your continuous integration (CI) environments. You must first install Newman and Node.js, and then you can run Newman to get your collection using the Postman API.

## Contents

* [Prerequisites for accessing collections in your CI environment](#prerequisites-for-accessing-collections-in-your-ci-environment)
* [Install Newman and Node.js](#install-newman-and-nodejs)
* [Run Newman and use the Postman API](#run-newman-and-use-the-postman-api)

## Prerequisites for accessing collections in your CI environment

Before you get started, check the following prerequisites for accessing collections using Newman and the Postman API:

* Ensure you have a CI system setup that can run shell commands and that you have access to modify.
* [Generate a Postman API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key), and copy it for later use.
* Make sure you have a Postman Collection that tests your localhost server, and copy the collection ID for later use. If your collection needs an environment, copy the environment ID for later use.

> **Developing an API?** Postman offers built-in tools to integrate your API with some of the most widely-used continuous integration (CI) tools. After you set up CI for your API, you can view the status of builds or kick off a new build, all from within Postman. You can also use Newman to run API tests as part of your CI pipeline. To learn more, see [CI integrations](/docs/integrations/ci-integrations/).

## Install Newman and Node.js

To learn how to install Newman and Node.js, see [Install and run Newman](/docs/collections/using-newman-cli/installing-running-newman/).

> You don't need to install Node.js if your CI environment already has it installed.

## Run Newman and use the Postman API

To run Newman and use the Postman API to access your collections, run the following command:

```bash
$ newman run "https://api.getpostman.com/collections/collection-id?apikey=postman-api-key"
```

If you need to provide an environment to the collection, add the `--environment` option with the appropriate parameters to the Newman command:

```bash
$ newman run "https://api.getpostman.com/collections/collection-id?apikey=postman-api-key"
--environment "https://api.getpostman.com/environments/environment-id?apikey=postman-api-key"
```
