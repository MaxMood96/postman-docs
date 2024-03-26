---
title: "Integrate Postman with Opsgenie"
updated: 2023-09-25
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Integrate with Opsgenie in Postman"
    url: "https://www.youtube.com/watch?v=XWf11B2tYpc"

---

[Opsgenie](https://www.atlassian.com/software/opsgenie) is an incident management and alerting tool that enables you to manage alerts. It has several communication features such as SMS, phone calls, and mobile push notifications, and collaboration features such as escalations and schedules.

The Postman to Opsgenie integration enables you to configure [Postman Monitors](/docs/monitoring-your-api/intro-monitors/) to trigger alerts on Opsgenie whenever your monitor fails. Alerts automatically close after a successful run.

## Contents

* [Get the Opsgenie API Key](#get-the-opsgenie-api-key)

* [Configuring Postman integration](#configuring-postman-integration)

* [Alerts on Opsgenie](#alerts-on-opsgenie)

## Get the Opsgenie API key

To set up your Opsgenie API key, refer to [Create an API integration](https://support.atlassian.com/opsgenie/docs/create-a-default-api-integration/) in the Opsgenie documentation.

## Configuring Postman integration

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.

    <img alt="Home page and integrations" src="https://assets.postman.com/postman-docs/v10/home-integrations-v10.jpg" width="390px">

1. Search and select **Opsgenie**.

1. On the **[Create alert for monitoring failures](https://go.postman.co/integrations/service/opsgenie/monitor_run_opsgenie)** page, select **Add Integration**.

1. On the **[Add integration - Authenticate](https://go.postman.co/integrations/service/opsgenie/add/monitor_run_opsgenie)** page, enter the Opsgenie API key you saved from your Opsgenie console. Select the [**Opsgenie site region** for your Opsgenie account](https://support.atlassian.com/opsgenie/docs/opsgenie-data-residency/).

1. On the **[Add integration - Configure](https://go.postman.co/integrations/service/opsgenie/add/monitor_run_opsgenie)** page, configure your integration's **Nickname**, **Choose workspace**, **Choose Monitor**, add **Tags**, and **Choose alert priority** settings.

    <img src="https://assets.postman.com/postman-docs/opsgenie-save-configuration-b.jpg" alt="Save opsgenie configuration" width="500px"/>

1. Select **Add Integration**.

1. After you create the integration, you have access to a list of all of the integrations created by your team. Select an integration to inspect its run logs.

    > **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a monitor by opening the monitor and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).

    ![View integration run log](https://assets.postman.com/postman-docs/opsgenie-run-logs.jpg)

## Alerts on Opsgenie

An alert on Opsgenie consists of the following information:

* Description of failing tests
* Number of failed tests
* Number of passed tests
* Number of errors
* Response time

It will also offer a direct link to the failing monitor.

This integration automatically closes a triggered alert if a later run succeeds. This integration also groups failures from the same monitor under a single Opsgenie alert.

When you receive an alert on Postman, you also receive one on your Opsgenie console.

Select the alert in Opsgenie for more information.
