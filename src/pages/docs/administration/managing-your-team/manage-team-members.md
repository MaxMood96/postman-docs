---
title: "Manage team members"
updated: 2024-01-18
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/NwT062tYvzs?si=OKAzhZqKATKAOS9K"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Managing team members and roles in Postman just got easier"
    url: "https://blog.postman.com/managing-team-members-and-roles-in-postman-just-got-easier/"
  - type: link
    name: "How to Securely Deploy Postman at Scale, Part 1: User Management"
    url: "https://blog.postman.com/how-to-securely-deploy-postman-at-scale-user-management/"
---

> **[Some team options are only available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)**

As a [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can invite collaborators, remove existing team members, and update user roles at any time in your team dashboard.

With the [Billing role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can also change your team's size to accommodate more collaborators at any time in your billing cycle.

## Contents

* [Team dashboard](#team-dashboard)
* [Invite users](#invite-users)
    * [Invite permissions](#invite-permissions)
    * [Manage invites](#manage-invites)
    * [Invite partners](#invite-partners)
    * [Invite Guests](#invite-guests)
* [Manage team roles](#manage-team-roles)
* [Manage partners](#manage-partners)
* [Manage Guests](#manage-guests)
* [Manage groups](#manage-groups)
* [Remove team members](#remove-team-members)
* [Change team size](#change-team-size)

## Team dashboard

You can invite collaborators, remove existing team members, and update user permissions in your [team dashboard](https://go.postman.co/settings/team/members). To open your team dashboard, select **Team** in the Postman header, then select **Manage Team**.

<img alt="Team dashboard" src="https://assets.postman.com/postman-docs/v10/team-dashboard-members-view-v10.15.jpg"/>

## Invite users

1. In your [team dashboard](https://go.postman.co/settings/team/members), select **Invite People**.
1. Enter the email addresses of the people you want to invite.

    > You can also upload a text or CSV file with the email addresses of the people you want to invite. To do so, select **Add from file**.

1. Use **Roles** to assign these users one or more [team roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).
1. Select **Send Invite**.

You can also invite a user to join your team with a link. To do so, select **Copy Invite Link**.

> If you're on a Postman Enterprise plan, you can set up and use [SCIM](/docs/administration/scim-provisioning/scim-provisioning-overview/) to provision user accounts at scale through your identity provider (IdP).

<!--  -->

> Depending on your [plan](https://www.postman.com/pricing), you can also invite [partners](#invite-partners) and [Guests](#invite-guests).

### Invite permissions

As a [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can invite users and assign them one or more [team roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

If you're on a [Postman Free, Basic, or Professional](https://www.postman.com/pricing/) plan, team members with the Developer role can invite external users as Developers automatically, without the need for approval by a Team Admin. You can review all invites that have been sent in your [team dashboard](https://go.postman.co/settings/team/invites). For more details, see [Manage invites](#manage-invites).

If the team member sending the invite isn't a Developer inviting another Developer on a Free, Basic, or Professional plan or a Team Admin on any plan, their suggestion to add external users to your Postman team will be shared with Team Admins for approval. You can review these invite suggestions in your [team dashboard](https://go.postman.co/settings/team/members). For more details, see [Manage invites](#manage-invites).

### Manage invites

As a Team Admin, you can manage [pending invites](#invites-sent), review [requests to join your team](#requests-to-join-your-team), review [suggestions](#suggestions) from team members without permission to send invites directly, and manage [invite links](#invite-links).

#### Invites sent

To review pending invites that team members have submitted, open your [team dashboard](https://go.postman.co/settings/team/members) and select **Invites and requests**. To resend an invite, hover over the person's email address and select **Resend Invite**. To copy the invite link, select the copy invite link icon <img alt="Copy invite link icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px">. To delete the invite, select the revoke invite icon <img alt="Revoke invite icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px">.

<img alt="Review invites sent" src="https://assets.postman.com/postman-docs/v10/team-dashboard-invites-sent-v10.15.jpg"/>

#### Requests to join your team

If your team has enabled [team discovery](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/), you can review requests to join your team in your [team dashboard](https://go.postman.co/settings/team/members) by selecting **Invites and requests**. To respond to a request, hover over the person's email address and select **Approve** or **Deny**.

<img alt="Review requests to join team" src="https://assets.postman.com/postman-docs/v10/team-dashboard-requests-v10.15.jpg"/>

#### Suggestions

If the team member sending an invite isn't a Team Admin or a Developer inviting another Developer (on Free, Basic, or Professional plans), you or another Team Admin must review the invite suggestion. You can review these invite suggestions in your [team dashboard](https://go.postman.co/settings/team/members). To do so, select **Invites and requests** and scroll down to view **Suggestions**.

To approve the suggestion and invite the user to your team, select **Invite**. To delete the invite, select the revoke invite icon <img alt="Revoke invite icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px">.

<img alt="Review invite suggestions" src="https://assets.postman.com/postman-docs/v10/team-dashboard-suggestions-v10.15.jpg"/>

#### Invite links

To review the invites your team has sent, open your [team dashboard](https://go.postman.co/settings/team/members) and select [**Invite links**](https://go.postman.co/settings/team/manage-invite-links) from the left menu. The list provides information about which users generated links, when they were generated, when they expire, and their URL.

<img alt="Invite links dashboard" src="https://assets.postman.com/postman-docs/v10/manage-invite-links-v10.15.jpg"/>

To copy an active invite URL, hover over its row and select the copy icon <img alt="Copy link icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px">.

To revoke an active invite, hover over its row and select the delete icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px" />.

### Invite partners

> **[Partners are available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

You can invite external partners to collaborate within a Partner Workspace. To learn more, see [Inviting collaborators to a Partner Workspace](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/#inviting-collaborators-to-a-partner-workspace).

### Invite Guests

> **[Guests are available on Free, Basic, and Professional plans.](https://www.postman.com/pricing)**

You can invite Guests to view specific collections and send requests in those collections. To learn more, see [Allowing external users to view collections](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections).

## Manage team roles

Each team member must have one or more team roles assigned to them, which will enable them to perform different actions within your team. Roles can be granted to team members individually, or to members of a [group](/docs/collaborating-in-postman/user-groups/).

You can change a team member's roles at any time in the [team dashboard](https://go.postman.co/settings/team/members).

Search for a specific user by typing their name or email address in the search field. You can also filter users by role type. Select the roles next to the user you'd like to update, then select the roles you'd like to assign or remove. Select **Update Roles** to confirm your changes.

<img alt="Edit team roles" src="https://assets.postman.com/postman-docs/v10/team-dashboard-manage-member-roles-v10.15.jpg"/>

> **[Some team roles are only available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)**

Teams can have two support accounts at no extra cost. Support accounts are team members with only Admin or Billing roles. Team members with a Super Admin or Developer role will consume a paid seat on your team.

To learn more about the team roles that you can assign as a Team Admin, see [Team roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

### Manage Super Admins

> **[Super Admins are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

If your team doesn't have a [Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) yet, a Team Admin can assign the role to anyone in the team. Once your team has at least one Super Admin, only a Super Admin can assign this role to another user.

Super Admins can assign the Super Admin role to a user in the [team dashboard](https://go.postman.co/settings/team/members), while [inviting a new team member](#invite-users), and to a [group](/docs/collaborating-in-postman/user-groups/#editing-a-group). If your team is using [SCIM](/docs/administration/scim-provisioning/scim-provisioning-overview/), a Super Admin must create the [SCIM credentials](/docs/administration/scim-provisioning/scim-provisioning-overview/#enabling-scim-provisioning) in order for SCIM to change the membership of a group that's been assigned the Super Admin role.

Regular Team Admins can't remove Super Admins from a team or remove their Super Admin role assignment.

It's recommended that you create a service user that isn't tied to any individual and assign that user the Super Admin role. By doing so, your team can avoid the risk of a disruption in services due to an actual user leaving your company. This ensures that your team's management is able to sign in to the service account when needed.

## Manage partners

> **[Partners are available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

You can manage external partners similarly to internal team members. To learn more, see [Managing a Partner Workspace](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/#managing-a-partner-workspace).

## Manage Guests

> **[Guests are available on Free, Basic, and Professional plans.](https://www.postman.com/pricing)**

You can manage [Guests](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) in your [team dashboard](https://go.postman.co/settings/team/members). To remove guests, select the remove guest icon <img alt="Delete link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px" /> next to the user. To assign a Guest user the Developer role, select **Convert**. When you change an external user's role from the Guest role to the Developer role, they're added to the team and get access to all team resources and workspaces.

<img alt="Convert Guest role" src="https://assets.postman.com/postman-docs/v10/manage-guests-v10.15.jpg"/>

> Your team must have [available seats](/docs/billing/billing/#changing-your-plan) or [Auto-Flex enabled](/docs/billing/billing/#using-auto-flex) to change an external user's role from the Guest role to the Developer role.

To review the workspaces and collections a Guest has access to, open your [team dashboard](https://go.postman.co/settings/team/members). Locate the Guest user and select **View resources**. You can select the workspace name or collection name to open it in a new tab, or select the user's name to go to their Postman profile.

<img alt="View resources a Guest can view" src="https://assets.postman.com/postman-docs/v10/view-resources-guests-v10.15.jpg" width="400px"/>

To learn more about sharing collections with external users, see [Allowing external users to view collections](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections).

For information on how to remove an external user from a team or collection, see [Changing external user access to collections](/docs/collaborating-in-postman/sharing/#changing-external-user-access-to-collections).

## Manage groups

> **[Groups are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

You can assign roles and provide access to team resources at scale with Postman groups. To learn how to create and manage groups, see [Organize users into Postman groups](/docs/collaborating-in-postman/user-groups/).

## Remove team members

> If you're on a Postman Enterprise plan, you can set up and use [SCIM](/docs/administration/scim-provisioning/scim-provisioning-overview/) to automate de-provisioning through your identity provider (IdP).

To remove a member from your team, go to your [team dashboard](https://go.postman.co/settings/team/members). Select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to the team member's name. Then to confirm, select **Remove Member**. When you remove a team member, you will still retain access to any data they have shared with the team.

<img alt="Remove a team member" src="https://assets.postman.com/postman-docs/v10/team-dashboard-members-remove-v10.15.jpg"/>

Reassign personal workspaces to another team member to ensure the team continues to have access to any unshared work done by the user being removed. You must reassign their personal workspaces if one of the following is true:

* They're from an Enterprise team.
* They're from a Free, Basic, or Professional team, and they have an account.

> An account isn't associated with a team, and only the user can access it. To access an account, see [Switching between teams](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/#switching-between-teams).

When you remove a team member, their personal workspaces and the data within them move to an account if the following is true: they're from a Free, Basic, or Professional team and they don't have an account.

For help in removing team members and transferring data based on your team's configuration, [contact Postman support](https://www.postman.com/support/).

> Note that when you remove a member from your team, this doesn't automatically reduce the number of paid seats for your team unless the member was added by [Auto-Flex](/docs/billing/billing/#using-auto-flex) during the current Auto-Flex cycle. If you want to reduce the number of paid seats on your team, a member of your team with the [Billing role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can [edit your plan](/docs/billing/billing/#changing-your-plan).

## Change team size

You can change your team's size to accommodate more collaborators at any time in your billing cycle. To do so, you need to have the [Billing role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) or request help from a team member with the Billing role.

To change your team's size, you have two different options:

* **Change the number of paid seats** - Change your team's number of paid seats in the [billing dashboard](https://go.postman.co/billing/overview).
* **Turn on Auto-Flex** - Enable [Auto-Flex](/docs/billing/billing/#using-auto-flex) to let your team invite more users without having to pay in advance for more seats.

For more information, see [Team and plan changes](/docs/billing/billing/#team-and-plan-changes).
