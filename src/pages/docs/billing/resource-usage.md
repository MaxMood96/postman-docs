---
title: "About resource usage"
updated: 2023-06-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: link
    name: "Postman Plans and Pricing"
    url: "https://www.postman.com/pricing/"
  - type: link
    name: "Resource Usage dashboard"
    url: "https://go.postman.co/billing/add-ons/overview"
---

Postman provides you with a specified number of resources you can use each month, depending on your [Postman plan](https://www.postman.com/pricing/). Monthly resources include calls to the Postman API, requests made by monitors and scheduled collection runs, mock server requests, and Cloud Agent requests. Your Postman plan also has other limits, such as the number of integrations you can create, the number of custom domains, and storage for uploaded images.

To find out what the resource limits are for your plan, go to the [Postman Plans and Pricing page](https://www.postman.com/pricing/). To view the resources you are using, go to your [Resource Usage dashboard](https://go.postman.co/billing/add-ons/overview). You can view how close you are to your limits and when your monthly limits will reset. If you need more resources, you can [purchase add-on resources](/docs/billing/billing/#purchasing-add-on-resources) or [upgrade your plan](/docs/billing/billing/#team-and-plan-changes).

Refer to the following sections to understand what happens when your resource usage reaches the limits set by your Postman plan.

## Contents

* [Mock server usage](#mock-server-usage)
* [Monitoring usage](#monitoring-usage)
* [Custom domains](#custom-domains)
* [APIs](#apis)
* [Manual Collection Runner runs](#manual-collection-runner-runs)
* [Storage usage](#storage-usage)
* [Flows usage](#flows-usage)
* [Performance test limit](#performance-test-limit)
* [Test data usage](#test-data-usage)
* [Postbot calls](#postbot-calls)
* [Postman API usage](#postman-api-usage)
* [Integrations](#integrations)
* [Cloud Agent usage](#cloud-agent-usage)

## Mock server usage

Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of requests that can be sent to your [Postman mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) each month. Requests to all of your mock servers count toward this same limit. After the limit is reached, you will get a `Usage limit reached` error message when sending a request to one of your mock servers.

![Mock server usage error](https://assets.postman.com/postman-docs/v10/usage-error-mocks-v10.jpg)

To make more requests to your mock servers before your monthly limit resets, you can [enable pay-as-you-go](/docs/billing/billing/#managing-resources), [purchase add-on resources](/docs/billing/billing/#purchasing-add-on-resources), or [upgrade your plan](/docs/billing/billing/#team-and-plan-changes).

## Monitoring usage

Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of requests that can be run by your [Postman Monitors](/docs/monitoring-your-api/setting-up-monitor/) each month. Requests run by your [scheduled collection runs](/docs/collections/running-collections/scheduling-collection-runs/) count toward this same limit. After the limit is reached, you will get a notification by email and in the Postman app letting you know that you've reached the usage limit for monitors.

<img alt="Monitors usage error" src="https://assets.postman.com/postman-docs/v10/usage-error-monitors-v10.jpg" width="361px"/>

Once you've reached your usage limit, your monitors and scheduled collection runs will no longer run on their configured schedules and can't be run manually. To resume running your monitors and scheduled collection runs before your monthly limit resets, you can [enable pay-as-you-go](/docs/billing/billing/#managing-resources), [purchase add-on resources](/docs/billing/billing/#purchasing-add-on-resources), or [upgrade your plan](/docs/billing/billing/#team-and-plan-changes).

> Learn more about [viewing and managing your monitor usage](/docs/monitoring-your-api/monitor-usage/).

## Custom domains

Postman paid [plans](https://www.postman.com/pricing/) give you a limited number of [custom domains](/docs/publishing-your-api/custom-doc-domains/) you can use when publishing API documentation. After the limit is reached, you won't be able to add a new custom domain.

![Custom domains limit reached](https://assets.postman.com/postman-docs/v10/usage-error-custom-domains-v10.jpg)

To add a new custom domain, delete one of your existing custom domains, [purchase add-on resources](/docs/billing/billing/#purchasing-add-on-resources), or [upgrade your plan](/docs/billing/billing/#team-and-plan-changes).

## APIs

Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of API objects you can create in the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/). After the limit is reached, you won't be able to create new APIs. To create a new API, delete one of your existing APIs, or [upgrade your plan](/docs/billing/billing/#team-and-plan-changes).

## Manual Collection Runner runs

Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of [collection runs](/docs/collections/running-collections/intro-to-collection-runs/) you can use each month. This limit applies to collections that you run in a workspace using the **Run manually** option. This is separate from the limits for [scheduled collection runs](/docs/collections/running-collections/scheduling-collection-runs/) in the Postman cloud. A collection run with multiple iterations counts as a single run.

You can check your manual collection run usage on the [Resource Usage dashboard](https://go.postman.co/billing/add-ons/overview). Also, a message will display in the Collection Runner when you're approaching your usage limit.

<img alt="Collection runner usage error" src="https://assets.postman.com/postman-docs/v10/usage-error-collection-runner-v10-12.jpg" width="504px"/>

Once you've reached your usage limit, you will no longer be able to run your collections using the **Run manually** option. To resume running collections before your monthly limit resets, you can [upgrade your plan](/docs/billing/billing/#team-and-plan-changes), [schedule collection runs](/docs/collections/running-collections/scheduling-collection-runs/) in the Postman cloud, or run collections using the [Postman CLI](/docs/postman-cli/postman-cli-run-collection/) or [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/).

> Requests run in the Postman cloud by your [scheduled collection runs](/docs/collections/running-collections/scheduling-collection-runs/) count toward your [monitoring usage](#monitoring-usage). Scheduled collection runs don't count toward your collection runs usage.

## Storage usage

Your [Postman plan](https://www.postman.com/pricing/) gives you a limited amount of storage for [uploaded images](/docs/publishing-your-api/authoring-your-documentation/#uploading-an-image) in your API documentation. You will get an error message if you try to upload an image that would exceed your storage limit.

<img alt="Storage usage error" src="https://assets.postman.com/postman-docs/v10/usage-error-upload-v10.jpg" width="305px"/>

To upgrade your available storage, contact [Postman support](https://www.postman.com/support/).

> Learn more about [image storage limits](/docs/publishing-your-api/authoring-your-documentation/#image-storage-limits) for API documentation.

## Flows usage

Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of steps that can be made across all [Postman Flows](/docs/postman-flows/gs/flows-overview/). To perform more steps, you can [upgrade your plan](/docs/billing/billing/#team-and-plan-changes).

## Performance test limit

Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of [performance test runs](/docs/collections/performance-testing/testing-api-performance/) you can use each month. This limit applies to collections that you run using the **Performance** tab in the Collection Runner. This is separate from the limits for functional tests ([manual collection runs](/docs/collections/running-collections/intro-to-collection-runs/) and [scheduled collection runs](/docs/collections/running-collections/scheduling-collection-runs/)).

You can check your performance test usage on the [Resource Usage dashboard](https://go.postman.co/billing/add-ons/overview). Also, a message will display in the Collection Runner when you're approaching your usage limit.

<img alt="Performance test usage error" src="https://assets.postman.com/postman-docs/v10/usage-error-performance-test-v10-15.jpg" width="545px"/>

Once you've reached your usage limit, you will no longer be able to run performance tests. To resume running performance tests before your monthly limit resets, you can [upgrade your plan](/docs/billing/billing/#team-and-plan-changes).

## Test data usage

Test data is made up of the data files you use to test various scenarios for your API. Your [Postman plan](https://www.postman.com/pricing/) gives you a limited amount of storage space you can use for [uploaded test data files](/docs/sending-requests/create-requests/test-data/). Your plan also gives you a limited number of retrievals of uploaded files each month.

You can check your test data usage on the [Resource Usage dashboard](https://go.postman.co/billing/add-ons/overview). You can view the amount of test data storage your team is using and the number of times test data has been retrieved from Postman. Test data is retrieved each time a request that uses an uploaded file is sent manually or automatically from a [scheduled collection run](/docs/collections/running-collections/scheduling-collection-runs/), [monitor](/docs/monitoring-your-api/intro-monitors/), [Postman Flow](/docs/postman-flows/gs/flows-overview/), or the [Postman CLI](/docs/postman-cli/postman-cli-overview/). Multiple instances of the same file in a collection run or monitor run count as a single retrieval.

To view your team's uploaded test data files, select **View detailed usage**. For each uploaded file, you can view the file name, who uploaded the file and when, and file size. You can also view when the file was last retrieved and the number of times it's been retrieved. You must be a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to view detailed test data usage or delete test data files.

To work with your team's uploaded test data files, do any of the following:

* To filter the list by file name, start typing in the search box.
* To filter the list by who uploaded the file, select a team member in the **Uploaded by** dropdown list.
* To download a file, select the download icon <img alt="Download icon" src="https://assets.postman.com/postman-docs/icon-download-v9.jpg#icon" width="16px"/> next to a file.
* To delete a file, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a file and select **Delete**.

![Manage test data](https://assets.postman.com/postman-docs/v10/test-data-manage-v10-21.jpg)

Once you've reached your test data storage limit, you won't be able to upload more test data files. You can delete files to free up storage space, or you can [upgrade your plan](/docs/billing/billing/#team-and-plan-changes).

Once you're reached your test data retrieval limit, requests that use uploaded data files won't be able to retrieve those files before being sent. This includes requests that are sent manually or automatically from a scheduled collection run, monitor, Postman Flows, or the Postman CLI. To resume using test data before your monthly limit resets, you can [upgrade your plan](/docs/billing/billing/#team-and-plan-changes).

## Postbot calls

Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of [Postbot](/docs/getting-started/basics/about-postbot/) interactions. To perform more calls, you can [purchase more Postbot seats](/docs/billing/billing/#purchasing-add-on-products).

## Postman API usage

Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of requests that can be sent to the [Postman API](/docs/developer/postman-api/intro-api/) each month. After the limit is reached, you will get a `Service limit exhausted` error message when sending a request to the Postman API.

![Postman API usage error](https://assets.postman.com/postman-docs/v10/usage-error-api-v10.jpg)

To make more requests to the Postman API before your monthly limit resets, you can [upgrade your plan](/docs/billing/billing/#team-and-plan-changes).

## Integrations

Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of [integrations](/docs/integrations/intro-integrations/) for connecting Postman to third-party tools you use for API development. After the limit is reached, you won't be able to add a new integration. You will get a notification in the Postman app when attempting to add a new integration.

<img alt="Integrations limit reached" src="https://assets.postman.com/postman-docs/v10/usage-error-integrations-v10.jpg" width="361px"/>

To add a new integration, delete one of your existing integrations or [upgrade your plan](/docs/billing/billing/#team-and-plan-changes).

## Cloud Agent usage

The [Postman Cloud Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-cloud-agent) enables you to send requests from the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app) without encountering cross-origin resource sharing (CORS) limitations. Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of requests that can be sent using the Cloud Agent each month. After the limit is reached, you will get a `Cloud Agent Error` message when sending a request from the Postman web app using the Cloud Agent.

![Cloud Agent usage error](https://assets.postman.com/postman-docs/v10/usage-error-cloud-agent-v10.jpg)

To continue sending requests from the Postman web app before your monthly limit resets, [upgrade your plan](/docs/billing/billing/#team-and-plan-changes) or switch to the Postman Desktop Agent. In the error message, select **Use Postman's Desktop Agent**. If you haven't already installed the Desktop Agent, you'll be prompted to download it.

> Learn more about [installing and using the Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent).
