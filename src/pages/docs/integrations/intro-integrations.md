---
title: "Integrate Postman with third-party solutions"
updated: 2023-12-19
search_keyword: "whitelist, whitelist IP"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "The New Postman API Platform: Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
---

You can connect Postman to your API workflows with integrations for popular third-party solutions. Integrations enable you to automatically share data between Postman and the other tools you rely on for API development, such as GitHub, Slack, CircleCI, Amazon API Gateway, and New Relic.

You can use Postman integrations to do the following:

* Sync your collections and API definitions to a source control repository.
* Send monitor alerts to your monitoring service or team messaging app.
* View and run continuous integration (CI) builds from within Postman.
* Manage API deployments to an API gateway.
* View application performance management (APM) metrics in Postman.

For a list of all third-party solutions you can integrate with Postman, go to [Available Postman integrations](/docs/integrations/available-integrations/postman-integrations).

## Contents

* [Add integrations](#add-integrations)
* [View or edit integrations](#view-or-edit-integrations)
* [Installed apps](#installed-apps)
* [Static IP support](#static-ip-support)
* [CI integrations](#ci-integrations)

## Add integrations

> **The maximum number of integrations you can use is determined by your Postman plan. [Learn more about what's included with each plan](https://www.postman.com/pricing/).**

To view available integrations, select **Integrations** on the Postman **[Home](http://go.postman.co/)** page, then select **Browse All Integrations**. On the **[Browse Integrations](https://go.postman.co/integrations/browse)** page, search and select the tool or service you want to integrate with.

![Browse all integrations](https://assets.postman.com/postman-docs/v10/integrations-browse-all-v10.jpg)

Each integration's page explains how to use the integration and what it can do. Depending on the tool or service you're integrating with, more than one integration may be available. Select **Add Integration** next to the integration you want to add. Enter your account authorization details and any other required information to complete the setup process.

![Add an integration](https://assets.postman.com/postman-docs/v10/integrations-add-v10.jpg)

## View or edit integrations

You can view the integrations that have been configured for your team from the **[Browse Integrations](https://go.postman.co/integrations/browse)** page. Search and select the tool or service you want to view integrations for. Select **View** or **View All** next to an integration to view any integrations that have already been configured.

> You can also view integrations that have been configured for a collection or monitor. Open the collection or monitor, and then select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar to view any configured integrations.

Select a configured integration to view more details. From here you can take the following actions:

* **Refresh Run Log** - View the most recent integration runs.
* **Edit Integration** - Change any configuration settings for the integration, then select **Save Changes**. Not all settings can be changed, depending on the integration. If needed, delete the integration and add a new integration with the settings you want.
* **Delete Integration** - Delete the integration. You can add the integration again later if needed.

![View or edit an integration](https://assets.postman.com/postman-docs/v10/integrations-view-v10.jpg)

## Installed apps

Adding an integration requires you to authenticate with the third-party app or service you are connecting to Postman. For supported integrations, you can store the authorization details in an _installed app_. Anyone on your team can then use the installed app to add a new integration, instead of authenticating with their own credentials.

Learn more about [adding and using installed apps in integrations](/docs/integrations/installed-apps/).

## Static IP support

You must allowlist a static IP address to enable integrations and custom webhooks that access hosted (private) networks. Static IP support is available for the following integrations:

* [GitHub custom domain backup](/docs/integrations/available-integrations/github/#backing-up-collections-to-github-enterprise-server)
* [GitLab custom domain backup](/docs/integrations/available-integrations/gitlab/#back-up-your-postman-collections-to-gitlab-on-a-custom-domain)
* [Custom webhooks](/docs/integrations/webhooks/)

Contact your IT team to allowlist the following static IP in your firewall:

* US East: `3.212.102.200`

Once you allowlist this IP address, collection backup integrations and custom webhooks will be able to connect to your private network.

> DNS records use the public IP address for instances that are behind a firewall or that can't be accessed on the internet.

## CI integrations

Postman integrates with some of the most widely used continuous integration and continuous delivery (CI/CD) tools. After you set up a CI integration for your API, you can view the status of builds or start a new build, all from within Postman. You can also run API tests created in Postman as part of your CI pipeline.

To learn more about how CI integrations work, and for detailed configuration steps, go to [CI integrations](/docs/integrations/ci-integrations/).
