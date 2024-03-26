---
title: "Collaborate with multiple partners using multi-partner mode"
updated: 2024-02-02
early_access: true
plan: beta
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Partner Workspaces for Enterprise"
    url: "https://youtu.be/gT55ui8UOHw"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Partner Workspaces: An Exclusive Space to Collaborate with Your API Partners"
    url: "https://blog.postman.com/introducing-partner-workspaces/"
  - type: link
    name: "Partner Viewers are free for enterprise teams"
    url: "https://blog.postman.com/partner-viewers-are-free-for-enterprise-teams/"
---

> **[Partner Workspaces are available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

_Multi-partner mode is a beta capability and is available to all customers who want to try it out. If you'd like to participate and provide feedback, [sign up for early access](https://www.postman.com/lp/partner-workspaces-early-access/) or contact your Customer Success Manager._

[Partner Workspaces](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) enable you to collaborate with your external partners and customers. You can use Partner Workspaces to demo your API products to external API partners and customers, onboard external developers faster, and reduce the time-to-first-call for your consumers.

As your partner programs grow, you need to create, maintain, and update multiple workspaces, one for each partner. _Multi-partner mode_ make this workflow simpler by enabling you to use the same workspace and collaborate with multiple partners.

## Contents

* [Multi-partner mode](#multi-partner-mode)
* [Enable multi-partner mode in a Partner Workspace](#enable-multi-partner-mode-in-a-partner-workspace)
* [Invite partners to your multi-partner workspace](#invite-partners-to-your-multi-partner-workspace)
* [Multi-partner workspace experience in Postman](#multi-partner-workspace-experience-in-postman)

## Multi-partner mode

Multi-partner mode enables you to:

* Share and update Postman Collections with multiple partners without having to update a separate workspace for each partner.
* Invite your API partners and customers to understand the value and try out your APIs quickly before going deeper into integration.
* Showcase real-world workflows and demos using your APIs.
* Maintain a reference workspace for all your API endpoints and documentation that can be shared with all your partners.

By enabling multi-partner mode in a Partner Workspace, you can create an invite-only partner workspace that's designed for sharing Postman Collections with multiple partners. Partners can be invited to this workspace as Viewers. They can see all the workspace content, send API requests, run collections, and generate code snippets. Team members can make edits to the workspace, which are then available to the partners in real time.

The goal of this workspace is to provide a shared space where your partners can evaluate, onboard, and integrate your APIs quickly. A Partner user can't see other Partners and their activities in the workspace. They can see only your team members, while comments are turned off to maintain isolation between Partners.

## Enable multi-partner mode in a Partner Workspace

> Once multi-partner mode is turned on, this action can't be undone.

To enable multi-partner mode, do the following:

1. Open an existing Partner Workspace or create a new one.
1. In the Workspace Overview page, select <img alt="Workspace settings icon" src="https://assets.postman.com/postman-docs/v10/icon-sliders-v10.jpg#icon" width="24px"> **Workspace Settings**.
1. Select **Enable multi-partner mode**.

    <img alt="Enable multi-partner mode" src="https://assets.postman.com/postman-docs/v10/multipartner-workspace-enable-v10-22-1.gif">

    The confirmation modal describes the key capabilities of the multi-partner mode.

1. Select **Enable multi-partner mode** again.

    Now the partners in this workspace can't see each other or make any edits. They can view all workspace resources, send API requests, run collections, and see responses.

    <img alt="Workspace shared" src="https://assets.postman.com/postman-docs/v10/multipartner-workspace-shared-v10-22.jpg" width="300px">

The workspace **Overview** and **Settings** pages update to display that multi-partner mode is turned on. You are ready to add collections, set up the workspace, and invite partners just like in any other Partner Workspace.

To share your work, Postman recommends that you fork collections and environments from your internal team workspace to the Partner Workspace.

## Invite partners to your multi-partner workspace

> Partners can only be invited as Viewers to a multi-partner workspace. However, team members can be invited as Viewers, Editors, or Admins.

Because Partner Viewers are free, you can invite as many partners as you want to the workspace.

To invite partners to your multi-partner workspace, do the following:

1. Open the workspace and select **Invite** in the Postman header.

    <img alt="Invite partners" src="https://assets.postman.com/postman-docs/v10/multipartner-workspace-invite-v10-22.gif">

1. Enter the partner's name or email. Alternatively, you can select **Add from file** to insert a CSV or TXT file containing contact information.
1. Select **Viewer** role.

    > You can optionally select a Partner Lead role checkbox, to enable the partner to invite other partners to the workspace. However, Partner Leads can only invite other partners from their domain.

1. Select **Invite Partners**.

## Multi-partner workspace experience in Postman

Once you add partners to your multi-partner workspace, they will be grouped by domain in the **Workspace Settings**.

<img alt="Multi-partner view" src="https://assets.postman.com/postman-docs/v10/multipartner-workspace-partner-list-v10-22.jpg">

Partners in a multi-partner workspace can only see their team members and no other partners in the avatar list and **Workspace Settings**. Because they have the Viewer role, partners can only view collections and send requests. They can rediscover their activity in the sidebar **History** tab, which is kept private to them only.
