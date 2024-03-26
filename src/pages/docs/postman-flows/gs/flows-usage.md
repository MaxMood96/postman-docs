---
title: "Manage your team's usage of Postman Flows"
updated: 2023-11-22
---

Postman provides tools to help you manage your team's usage of Postman Flows. Flows consume steps as they execute, at the rate of one step per action block (like **Send Request**) or decision block (like **If**). The Free, Basic, and Professional plans include a number of steps credited per month.

You can use the [Resource usage dashboard](https://go.postman.co/usage) to track the number of steps that have been consumed against your plan's monthly maximum. If you're on the Professional plan, you can also enable overages if needed.

Only team members with the [Flow Editor](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) role can create and edit Flows. The first time a team member in a Professional or Basic plan creates a Flow or selects **Flows** in the sidebar, a dialog notifies the team member that Postman is about to assign them the Flow Editor role. Select **Continue** to assign the role or **Explore Flows gallery** to browse Flows templates, or close the dialog to cancel assigning the **Flow Editor** role.

> To learn more about the resources included with your Postman plan and what happens when you reach your usage limits, go to [About resource usage](/docs/billing/resource-usage/).

## Contents

* [Viewing Flows usage](#viewing-flows-usage)
* [Enabling Flows overages](#enabling-flows-overages)

## Viewing Flows usage

The maximum number of steps your Flow can consume each month depends on your [Postman plan](https://www.postman.com/pricing/). To check your team's current Flows usage, select **Team > Resource Usage** to open the [Resource Usage dashboard](https://go.postman.co/usage).

When you reach your monthly usage limit, your Flows will complete their current runs. Then they'll be suspended until the next billing cycle, or until overages are enabled. Any webhooks that trigger the Flows will result in a `429 Too many requests` status code.

## Enabling Flows overages

With a free or Basic Postman account, once you've reached your monthly usage limit, your Flows are automatically paused for the rest of the billing period. To continue to use Postman Flows for the remainder of the billing period, [upgrade your Postman plan](https://go.postman.co/purchase).

With a Professional plan, you can enable Flows overages. With overages enabled for Flows, once you've reached your monthly usage limit, your Flows continue to run, and you are charged for each additional block of 1,000 steps.

> Postman will email your Team Admins if your Flows usage approaches your monthly limit.
<!-- -->
> Flows overages are deactivated by default for Professional Postman accounts. To enable overages, select **Team > Resource Usage** to open the [Resource Usage dashboard](https://go.postman.co/usage), and then turn on **Pay-as-you-go** under **Flows Usage**.
