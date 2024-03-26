---
title: "Manage product access"
updated: 2024-02-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman for Internal API Management"
    url: "https://youtu.be/rkDUay18s9c?si=qoInw4zXqWCo5yGp"
  - type: link
    name: "Postman for API Test Automation"
    url: "https://youtu.be/x9X4Jg-dQXI?si=48roT-4zPw4ffw8a"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Accelerate your API-first journey with Postman’s new Enterprise solutions"
    url: "https://blog.postman.com/accelerate-api-first-journey-with-postman-enterprise-solutions/"
---

> **[Some team options are only available on Postman Enterprise plans.](https://www.postman.com/pricing)**

As a [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can manage which team members and users have access to [Postbot](/docs/getting-started/basics/about-postbot/) and various [Enterprise solutions](https://www.postman.com/pricing/#enterprise-solutions) in your [product access dashboard](https://go.postman.co/settings/team/products-access).

Free, Basic, and Professional teams can [purchase Postbot as an add-on product](/docs/billing/billing/#purchasing-add-on-products). To learn more about Postman’s AI assistant, see [About Postbot](/docs/getting-started/basics/about-postbot/).

Enterprise Essentials teams can [purchase Enterprise solutions](/docs/billing/billing/#manage-enterprise-solutions-licenses). To learn more about [Enterprise solutions](https://www.postman.com/pricing/#enterprise-solutions) for your team, see [Internal API Management](#internal-api-management-solution) and [API Test Automation](#api-test-automation-solution).

## Contents

* [Manage access to Postbot](#manage-access-to-postbot)
* [Manage access to Enterprise solutions](#manage-access-to-enterprise-solutions)
    * [Internal API Management solution](#internal-api-management-solution)
    * [API Test Automation solution](#api-test-automation-solution)
* [Remove users' product access](#remove-users-product-access)

## Manage access to Postbot

> **[Postbot is available for Free, Basic, and Professional plans.](https://www.postman.com/pricing)**

Users with [Postbot](/docs/getting-started/basics/about-postbot/) access get an increased number of interactions with Postbot. To view your team's Postbot limits, go to your [Resource Usage dashboard](https://go.postman.co/billing/add-ons/overview).

> Using [Auto-Flex](/docs/billing/billing/#using-auto-flex), you can add users to Postbot without having to pay upfront.

To add users to Postbot, do the following:

1. Select **Team** in the Postman header, then select **Team Settings**.
1. Select **Product access**, then select **Postbot**.
1. To add team members to Postbot, select **Add Members**. To invite a user outside of the team, select **Invite members** and a new window will appear.

    <img alt="Add team members to Enterprise solutions" src="https://assets.postman.com/postman-docs/v10/product-access-postbot-v10-23.jpg"/>

1. If you select **Add members**, select team members you'd like to add to Postbot, then select **Add Members**. If you select **Invite members**, select users from the dropdown list or enter the user's email address the **Invite by email** text box, assign them a role in the **Roles** dropdown list, then select **Send Invite**. An invitation email will be sent to the user.

## Manage access to Enterprise solutions

> **[Enterprise solutions are available for Enterprise Essentials plans.](https://www.postman.com/pricing)**

As a Team Admin, you can manage [Enterprise solutions](https://www.postman.com/pricing/#enterprise-solutions) for your team: [Internal API Management](#internal-api-management-solution) and [API Test Automation](#api-test-automation-solution). Adding users to a solution can give them more permissions within your team and access to more features.

> [Auto-Flex](/docs/billing/billing/#using-auto-flex) enables your team to add users to solutions without having to pay upfront. Learn more about [managing Enterprise solutions licenses](/docs/billing/billing/#manage-enterprise-solutions-licenses).

To add users to a solution, do the following:

1. Select **Team** in the Postman header, then select **Team Settings**.
1. Select **Product access**.
1. Select the Enterprise solution you'd like to manage: **Internal API Management** or **API Test Automation**.
1. To add team members to a solution, select **Add Members**. To invite a user outside of the team, select **Invite members** and a new window will appear.

    <img alt="Add team members to Enterprise solutions" src="https://assets.postman.com/postman-docs/v10/enterprise-solutions-add-members-v10-23-1.jpg"/>

1. If you select **Add members**, select team members you'd like to add to the solution, then select **Add Members**. If you select **Invite members**, select users from the dropdown list or enter the users' email addresses the **Invite by email** text box, assign them a role in the **Roles** dropdown list, then select **Send Invite**. An invitation email will be sent to the user.

### Internal API Management solution

You can add users to the [Internal API Management solution](https://www.postman.com/solutions/internal-api-management/) for access to the [API Builder](/docs/designing-and-developing-your-api/the-api-workflow/), the [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/), and [API Governance](https://learning.postman.com/docs/api-governance/api-governance-overview/).

When you add users to the Internal API Management solution:

* You can assign them the [API Editor](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) role in Postman APIs, enabling them to create and edit an unlimited amount of APIs.
* You can assign them the [API Network Manager and API Governance Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) roles. Learn how to [manage team roles](/docs/administration/managing-your-team/manage-team-members/#manage-team-roles).
* They can publish or request to publish changes to the Private API Network.

### API Test Automation solution

You can add users to the [API Test Automation solution](https://www.postman.com/solutions/api-test-automation/) to increase their usage limits for the [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/) and [monitors](/docs/monitoring-your-api/intro-monitors/).

When you add users to the API Test Automation solution:

* Added users get unlimited collections runs with the Collection Runner. You can [run collections on a schedule](/docs/collections/running-collections/scheduling-collection-runs/) to automate API tests.
* Added users get increased usage limits for mocks and monitors. You can [run collections on a schedule with monitors](/docs/collections/running-collections/scheduling-collection-runs-monitors/) to automate reports on API tests and use mock servers to [create dynamic responses](/docs/designing-and-developing-your-api/mocking-data/creating-dynamic-responses/). Learn more about [monitor use cases](/docs/monitoring-your-api/intro-monitors/#monitor-use-cases) and [mock servers](/docs/designing-and-developing-your-api/mocking-data/mock-an-api/).

## Remove users' product access

To remove users from a product, hover over their name and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.

<img alt="Remove team members from Enterprise solutions" src="https://assets.postman.com/postman-docs/v10/enterprise-solutions-remove-members-v10-23.jpg"/>
