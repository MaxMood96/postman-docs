---
title: "Integrate Postman with Statuspage"
updated: 2023-06-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Integrate with Statuspage in Postman"
    url: "https://youtu.be/siL7Iu9L7ys"
---

Atlassian Statuspage is an uptime and incident communication tools. You can use Statuspage to create a home page for your customers so they can monitor if subsystems or services within your site are operational. Customers can also use the home page to find out more information on system outages or failures. An example of a Statuspage home page is Postman's status page, located at [status.postman.com](https://status.postman.com).

The Statuspage integration enables you to send metrics like response times to Statuspage and create and communicate incidents in case of a failure. When a Postman monitor test run fails, this integration can then send updates to Statuspage.

Setting up a Statuspage integration requires you to get an API key from Statuspage. When configuring the integration, you can choose to link a monitor to a Statuspage component, create a Statuspage incident when a monitoring run fails, or both.

Make sure to create your Statuspage account and create a page and components before you begin. For more information, visit Atlassian's [Statuspage](https://www.atlassian.com/software/statuspage) page.

## Contents

* [Retrieving your Statuspage API key](#retrieving-your-statuspage-api-key)
* [Configuring the Statuspage integration](#configuring-the-statuspage-integration)
    * [Linking a monitor to a component](#linking-a-monitor-to-a-component)
    * [Creating an incident when a monitoring run fails](#creating-an-incident-when-a-monitoring-run-fails)

## Retrieving your Statuspage API key

1. Sign in to [Statuspage](https://manage.statuspage.io/login).
1. Select your avatar and select **API info**.

    ![Statuspage API key](https://assets.postman.com/postman-docs/statuspage-api-key.jpg)

1. Select **Create key** to create a new key, or find an existing key you want to use.
1. Copy the API key for later use.

## Configuring the Statuspage integration

1. From the **[Home](https://go.postman.co/home)** page, select **[Integrations](https://go.postman.co/integrations)**.
1. Select **Browse All Integrations**.
1. Search for and select **[Statuspage](https://go.postman.co/integrations/service/statuspage)**.
1. Select **Add Integration**.
1. In the **Authenticate** tab, enter the Statuspage API key you copied in the [Retrieving your Statuspage API key](#retrieving-your-statuspage-api-key) section.

    ![Statuspage add integration](https://assets.postman.com/postman-docs/v10/add-integration-statuspage-v10-15.jpg)

1. Select **Authenticate and Proceed**.
1. In the **Configure** tab, enter a nickname for the integration.
1. Select the workspace that has the monitor you want to use.
1. Select the monitor you want to use for the integration.
1. Select the Statuspage page where the monitor updates will be sent.
1. Select one or both Statuspage actions. See [Linking a monitor to a component](#linking-a-monitor-to-a-component) and [Creating an incident when a monitoring run fails](#creating-an-incident-when-a-monitoring-run-fails) for more information.

    ![Configure Statuspage](https://assets.postman.com/postman-docs/v10/configure-statuspage-v10-15.jpg)

1. Select **Add Integration**.

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a monitor by opening the monitor and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).

### Linking a monitor to a component

When the **Link monitor to component** action is configured, if the specified monitor fails a test run, it will change the status of the linked component.

To configure the **Link monitor to component** action, do the following:

1. Select the Statuspage component you want to link to the monitor.
1. Select a component success status. This status will be displayed in Statuspage when the linked monitor is running as expected.
1. Select a component failure status. This status will be displayed in Statuspage when the linked monitor fails a test run.

  ![Statuspage link monitor to component](https://assets.postman.com/postman-docs/v10/statuspage-monitor-to-component-v10-15.jpg)

When the monitor fails, the linked component's status will change on your status page:

![Statuspage component failure](https://assets.postman.com/postman-docs/statuspage-component-fail.jpg)

When a component's status is changed due to a failed test run, it will remain in that state until there is a successful test run in the monitor. After a successful run, the component status will return to the successful state.

### Creating an incident when a monitoring run fails

When the **Create incident when monitoring run fails** action is configured, if the specified monitor fails a test run, a Statuspage incident is created. The incident provides context to customers on why the failure happened and what will be done to address it.

To configure the **Create incident when monitoring run fails** action, do the following:

1. Enter an incident name. The name is shown to users when they view the incident.
1. Select an incident status. The status is shown to users when they view the incident.
1. Select an incident impact. Choose an impact based on the importance of the service you're monitoring. For example, the failure of an optional, low-traffic API could trigger a minor incident, but the failure of your main authentication API would have critical impact.

  ![Statuspage create incident](https://assets.postman.com/postman-docs/v10/statuspage-create-incident-v10-15.jpg)

When the monitor fails, an incident will be created on your status page:

![Statuspage incident](https://assets.postman.com/postman-docs/statuspage-incident.jpg)

When an incident is created by a failed test run, if a later test run is successful, the incident will be closed.
