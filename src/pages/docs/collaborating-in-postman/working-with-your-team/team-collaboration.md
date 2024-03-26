---
title: "Create, join, and manage teams in Postman"
updated: 2022-07-19
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: link
    name: "Postman Intergalactic | Working with Your Team in Postman"
    url: "https://youtu.be/OifhKJCd_-M"
  - type: link
    name: "Collaboration & Documentation | Postman Enterprise"
    url: "https://youtu.be/u1yEOo0dPfk"
  - type: dynamic_blog
    name: "Blog posts"
    blog_tag: "collaboration"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "PayPal uses Postman collaboration capabilities"
    url: "https://www.postman.com/case-studies/paypal/"
---

> Postman Free lets teams of up to three work together at no cost. To collaborate with more team members, features, and increased usage limits, see [Plans and Pricing](https://www.postman.com/pricing/).

You can create and join teams in Postman, enabling you to collaborate with teammates in your organization. You can also choose to keep workspaces in your Postman account separate from teams you join. You can be a member of up to ten Postman teams, regardless of their [plan type](https://www.postman.com/pricing/).

> If an Enterprise team within your organization implements [domain capture](/docs/administration/domain-verification-and-capture/domain-capture-overview/), you won't be able to remain on or join extra Postman teams with your captured accounts.

## Contents

* [About accounts and teams](#about-accounts-and-teams)
* [Creating a team](#creating-a-team)
* [Joining a team](#joining-a-team)
* [Switching between teams](#switching-between-teams)
* [Leaving a team](#leaving-a-team)
* [Team usage limits](#team-usage-limits)
* [Next steps](#next-steps)

## About accounts and teams

When you sign up for Postman as an individual user, you create a [Postman account](/docs/getting-started/installation/postman-account/). If you [join a Postman team](#joining-a-team), you can either move your workspaces and transfer ownership to the team or keep your workspaces separate and maintain ownership in your account. This decision affects your account in the following ways:

* When you move your workspaces to a team, your account will cease to exist and you'll only have the option to switch between teams, rather than work in an account.
* When you keep your workspaces, you'll retain your account and you can switch between the team and your account at any time.

In certain cases, your personal workspaces and the data within them automatically transfer when you join a team. For more information, see [Joining a team](#joining-a-team).

When you [leave a team](#leaving-a-team), a [Postman account](/docs/getting-started/installation/postman-account/) is created for you if you don't already have one. If you as a user are deactivated through SCIM and you are a member of other teams, you will still have access to your account and other teams you are a member of. If you aren't a member of any other team and don't have an account, you won't be able to authenticate into that account, and will need to contact support.

## Creating a team

The first time you create a team, do the following:

1. Select the arrow next to **Team** (if you’re on a paid plan) or **Upgrade** (if you’re on a free plan), then select **Create team**.
2. Select **Set Up Your Team**.
3. (Optional) Provide a team name, URL, and logo, and decide if you want to turn on [team discovery](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/).
4. Select **Continue**.
5. (Optional) Invite collaborators to your team by email or sharing an invite link.
6. Select **Continue** or **Maybe Later**.

If you're a member of two or more teams, you can create additional teams. To create a new team, do the following:

1. Select your avatar in the Postman header, then select **+ Create Team**.
1. Follow the team creation steps in this section.

[Postman Free](https://www.postman.com/pricing/) lets teams of up to three work together at no cost. If you want to collaborate with more team members, features, and increased usage limits, you can [upgrade](/docs/billing/billing/#changing-your-plan) to a Basic, Professional, or Enterprise plan. To do so, select **Upgrade** in the upper-right corner.

If you have an account and create a Postman team through the flow mentioned above, you can choose to transfer your personal workspaces and the data within them to the team or keep them separate. (Your personal workspaces and data may transfer to your team automatically in some situations; see [Joining a team](#joining-a-team) for details.) When you leave a team, your personal workspaces within the team and their data will remain with the team and no longer be accessible to you in some situations; see [Leaving a team](#leaving-a-team) for details.

> For more information on setting up Postman within your organization, check out the [Onboarding checklist](/docs/administration/onboarding-checklist/).

## Joining a team

There are several ways you can join a Postman team:

* **Email invite** - Select **Join Team** in the email invite. Create a new Postman account or sign in to an existing one. After signing in, you'll be redirected to your new team.
* **Invite link** - Open the link and select **Accept Invite**. Create a new Postman account or sign in to an existing one. After signing in, you'll be redirected to your new team.
* **Team discovery** - When first joining Postman, you can [find teams to join within your organization](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/#finding-teams-within-your-organization).
* **SSO automatic provisioning** - If a team in your organization has [automatic provisioning](/docs/administration/sso/admin-sso/#automatically-adding-new-users) enabled in their SSO configuration, you can join the team by [signing in to Postman with SSO](/docs/administration/sso/user-sso/).
* **SCIM provisioning** - If your organization has enabled [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/), you may be added to your organization's Postman team and receive an email invite. Select **Join Team** in the email and [sign in to Postman with SSO](/docs/administration/sso/user-sso/).
* **Domain capture** - If your organization has configured [domain capture](/docs/administration/domain-verification-and-capture/domain-capture-overview/) and you use or create an account associated with a verified domain, Postman will [notify](/docs/administration/domain-verification-and-capture/enable-domain-capture/#user-experience) you when you next sign in that your account is managed by your organization.

You can be a member of up to ten Postman teams, regardless of if they're Postman Free, Basic, Professional, or Enterprise. However, if an Enterprise team within your organization implements domain capture, you won't be able to remain on or join extra Postman teams with your captured accounts.

If you have an account and join a team, you can choose to transfer your personal workspaces and the data within them to the team or keep them separate. In certain cases, your personal workspaces and the data within them automatically transfer when you join a team:

* If you [request to join a team](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/#finding-teams-within-your-organization) and are approved by a Team Admin.
* If the team has [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/) enabled.
* If the team has [domain capture](/docs/administration/domain-verification-and-capture/domain-capture-overview/) enabled.

> When you join an Enterprise team, [Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) have access to all personal workspaces you transfer over and any you create within the team moving forward.

When you leave a team, your personal workspaces within the team and their data will remain with the team and no longer be accessible to you in some situations; see [Leaving a team](#leaving-a-team) for details. (Personal workspaces in a team refers to workspace visibility and not data ownership.)

## Switching between teams

If you belong to multiple teams, you can sign in to them at the same time with your Postman account. To switch between teams, select your avatar in the top right. Select a team to open.

<img alt="Switch teams" src="https://assets.postman.com/postman-docs/team-account-switcher-v9.2.1.jpg" width="350px">

If you're a member of two or more teams, you can also select **+ Create Team** to create a new team.

If you have an account, switch to it by selecting your avatar in the top right. Then select your avatar and username labeled **Individual**.

<img alt="Switch accounts" src="https://assets.postman.com/postman-docs/v10/individual-account-switcher-v10.jpg" width="350px">

## Leaving a team

You can leave a Postman team by selecting your avatar in the top right, then **Settings**. Select **Teams** on the left.

<img src="https://assets.postman.com/postman-docs/dashboard-teams-leave-team-v9.2.jpg" alt="Leave team"/>

Select **Leave Team** to the right of a team to leave it. If you're a member of an Enterprise team that has [SCIM configured](/docs/administration/scim-provisioning/scim-provisioning-overview/), you must contact a Team Admin to remove you from the team.

When you leave a team, you no longer have access to the team's workspaces, including personal workspaces, or any of the elements in them. You must reassign your personal workspaces to a remaining team member before leaving if one of the following is true:

* You're from an Enterprise team.
* You're from a Free, Basic, or Professional team, and you have an account.

> An account isn't associated with a team, and only you can access it. To access your account, see [Switching between teams](#switching-between-teams).

<img src="https://assets.postman.com/postman-docs/v10/leave-team-confirmation-v10-2.jpg" alt="Leave and delete team" width="500px"/>

When you leave a team, you can also choose to keep your personal workspaces and the data within them in an account if you're from a Free, Basic, or Professional team and you don't have an account.

<img src="https://assets.postman.com/postman-docs/v10/leave-team-keep-personal-data-confirmation-v10.jpg" alt="Leave team and keep personal data" width="500px"/>

If you're the last member to leave a team, the team will be deleted. You will no longer have access to the team's workspaces, including personal workspaces, or any elements in them. [Export your Postman data](/docs/getting-started/importing-and-exporting/exporting-data/) prior to leaving the team to ensure it stays with you.

## Team usage limits

Your team's usage limits are based on your [plan type](https://www.postman.com/pricing/) and any [add-ons](/docs/billing/billing/#purchasing-add-on-resources) your team has purchased.

Open the [**Resource usage** dashboard](http://go.postman.co/billing/add-ons/overview) to see your team's usage of mock servers and monitors, APIs created, collection runner runs, image and file storage, Flow requests, performance tests, integrations, and the Postman Cloud Agent. To open the **Resource usage** dashboard, do one of the following:

* **Free users** - In the Postman header, select the menu next to **Upgrade**.
* **Paid users** - In the Postman header, select **Team**.

> To learn more about the resources included with your Postman plan and what happens when you reach your usage limits, go to [About resource usage](/docs/billing/resource-usage/).

<img src="https://assets.postman.com/postman-docs/v10/team-dropdown-resource-usage-v10-22.jpg" alt="Team resource usage information" width="342px"/>

Team members with the [Billing role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can [purchase extra blocks](/docs/billing/billing/#purchasing-add-on-resources) of monitoring requests, mock server calls, and custom domains in the [billing dashboard](http://go.postman.co/billing).

## Next steps

To get the most out of Postman's collaboration features, check out the following resources:

* [Enabling team discovery](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/)
* [Collaborating in team workspaces](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/)
* [Discussing your work](/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/)
