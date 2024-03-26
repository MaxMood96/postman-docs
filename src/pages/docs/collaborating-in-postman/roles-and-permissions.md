---
title: "Define roles and permissions within a Postman team"
order: 72
updated: 2022-12-19
page_id: "roles_and_permissions"
warning: false
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: link
    name: "Super Admin Role for Enterprise | Postman Level Up"
    url: "https://youtu.be/SbvSAvs0Ii8"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Managing team members and roles in Postman just got easier"
    url: "https://blog.postman.com/managing-team-members-and-roles-in-postman-just-got-easier/"
  - type: link
    name: "Introducing the API-level Admin role for better version management"
    url: "https://blog.postman.com/introducing-the-api-admin-role-better-version-management/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Western Governors University (WGU) uses the Super Admin role for API assets"
    url:  "https://www.postman.com/case-studies/wgu/"
---

> Certain team options are only available on **[Postman paid plans](https://www.postman.com/pricing)**. To learn which roles are available on your plan, go to your **[web dashboard](https://go.postman.co/settings/team/roles)**.

Roles define user permissions within a Postman team and a user's level of access to a Postman element, like a collection or an API.

## Contents

* [Team roles](#team-roles)
    * [Managing team roles](#managing-team-roles)
* [Workspace roles](#workspace-roles)
* [Element-based roles](#element-based-roles)
    * [Collection roles](#collection-roles)
    * [API roles](#api-roles)
    * [Environment roles](#environment-roles)
    * [Mock server roles](#mock-server-roles)
    * [Monitor roles](#monitor-roles)
* [Partner team and Partner Workspace roles](#partner-team-and-partner-workspace-roles)
* [Network roles](#network-roles)
* [Next steps](#next-steps)

## Team roles

With the [Admin role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you have the power to define Postman access at the team level. You can use Postman's role-based access control system to limit visibility of team resources, define your development workflow, and give access to administrative and billing personnel. Each user on a team must have at least one role attached to them, and can hold multiple roles simultaneously.

You can [assign](/docs/administration/managing-your-team/manage-team-members/#manage-team-roles) one or more role types to team members, based on the functions those team members require:

* **Super Admin** ([Enterprise plans only](https://www.postman.com/pricing)) - Manages everything within a team, including team settings, members, roles, and resources. This role can view and manage all elements in [public, team, private, and personal workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility). Super Admins can perform all actions that other roles can perform. For information on assigning this role, see [Manage Super Admins](/docs/administration/managing-your-team/manage-team-members/#manage-super-admins).
* **Admin** - Manages team members and team settings. Can also view monitor metadata and run, pause, and resume monitors.
* **Billing** - Manages team plan and payments. Billing roles can be granted by a Super Admin, Team Admin, or by a fellow team member with a Billing role.
* **Developer** - Has access to all team resources and workspaces.
* **Community Manager** ([Professional and Enterprise plans only](https://www.postman.com/pricing)) - Manages the public visibility of workspaces and team profile.
* **Partner Manager** (Internal, [Enterprise Ultimate plans only](https://www.postman.com/pricing)) - Manages all [Partner Workspaces](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) within an organization. Controls Partner Workspace settings and visibility, and can send invites to partners. To learn more, see [Partner team and Partner Workspace roles](#partner-team-and-partner-workspace-roles).
* **Partner** (External, [Enterprise Ultimate plans only](https://www.postman.com/pricing)) - All partners are automatically granted the Partner role at the team level. Partners can only access the [Partner Workspaces](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) they've been invited to. To learn more, see [Partner team and Partner Workspace roles](#partner-team-and-partner-workspace-roles).
* **Guest** (External, [Free, Basic, and Professional plans only](https://www.postman.com/pricing/#postman-flows-access-and-pricing)) - Views collections and sends requests in collections that have been shared with them. This role can't be directly assigned to a user. To learn more, see [Allowing external users to view collections](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections).
* **Flow Editor** ([Basic and Professional plans only](https://www.postman.com/pricing/#postman-flows-access-and-pricing)) - Can create, edit, run, and publish [Postman Flows](/docs/postman-flows/gs/flows-overview/).

> If you are on a [Postman Enterprise plan](https://www.postman.com/pricing), you can also assign roles at the [group level](/docs/collaborating-in-postman/user-groups/).

Team roles offer high-level access control:

| Permission | Super Admin | Admin | Billing | Developer | Community Manager |
| --- |:---:| --- | --- | --- | --- |
| Add users | &#x2714; | &#x2714; | | | |
| Remove users | &#x2714; | &#x2714; | | | |
| Manage team Admins and Developers | &#x2714; | &#x2714; | | | |
| Manage SSO | &#x2714; | &#x2714; || | |
| Add and edit custom domains  | &#x2714; | &#x2714; | | | &#x2714; |
| Delete custom domains  | &#x2714; | &#x2714; | | | |
| View audit logs  | &#x2714; | &#x2714; | | | &#x2714; |
| View usage data | &#x2714; | &#x2714; | &#x2714; | &#x2714; | &#x2714; |
| Manage Billing members | &#x2714; | &#x2714; | &#x2714; | | |
| Manage payment | &#x2714; | | &#x2714; | | | |
| Change plan  | &#x2714; | | &#x2714; | | |
| View shared APIs, collections, environments, mock servers and monitors | &#x2714; | | | &#x2714; | &#x2714; |
| View and create team workspaces | &#x2714; | | | &#x2714; | &#x2714; |
| Change visibility of workspaces to team or public | &#x2714; | | | &#x2714;&ast; | &#x2714; |
| Approve requests to change workspace visibility&ast;&ast; | &#x2714; | | | | &#x2714; |
| Enable public team profile | &#x2714; | &#x2714; | | | &#x2714; |
| Manage a team's Private API Network&ast;&ast;&ast; | &#x2714; | | | | |

There are additional specialized roles for [Enterprise](https://www.postman.com/pricing) teams:

* **API Network Manager** - Manages a team's [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/). To learn more, see [Network roles](#network-roles).
* **API Governance Manager** - Manages [API governance](/docs/api-governance/api-governance-overview/) within a team, including governance [rules](/docs/api-governance/configurable-rules/configuring-api-governance-rules/), [functions](/docs/api-governance/configurable-rules/configuring-custom-governance-functions/), and [workspace groups](/docs/api-governance/configurable-rules/configuring-api-governance-rules/#turning-configured-rules-on-and-off).

&ast; On Postman Basic and Free plans, any developer can change visibility of workspaces.

&ast;&ast; Enterprise and Professional plans only.

&ast;&ast;&ast; Enterprise plans only. Teams can allow users with the [Folder Manager role](#network-roles) to manage elements in specific folders in the Private API Network.

> **Postman support users**. Team members with a Developer or Super Admin role consume a paid seat on your team. Team members who have only Admin or Billing roles become support users and don’t consume paid seats. Each team can have two support users.

### Managing team roles

To learn how to manage team roles in Postman, see [Manage your team](/docs/administration/managing-your-team/manage-team-members/#manage-team-roles).

## Workspace roles

You can [assign](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#managing-workspace-roles) three role types in Postman workspaces: **Admin**, **Editor**, and **Viewer**. Partner Workspaces offer an additional role type: **Partner Lead**.

* **Admin** - Can manage workspace resources and settings.
* **Editor** ([Professional and Enterprise plans only](https://www.postman.com/pricing)) - Can create and edit workspace resources.
* **Viewer** ([Professional and Enterprise plans only](https://www.postman.com/pricing)) - Can view, fork, and export workspace resources.
* **Partner Lead** (External, [Enterprise Ultimate plans only](https://www.postman.com/pricing)) - Can invite other partners from their organization to join a [Partner Workspace](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/). To learn more, see [Partner team and Partner Workspace roles](#partner-team-and-partner-workspace-roles).

Partners have different permissions for Workspace Editor and Viewer roles in Partner Workspaces ([Enterprise Ultimate plans only](https://www.postman.com/pricing)). To learn more, see [Partner team and Partner Workspace roles](#partner-team-and-partner-workspace-roles).

> You can use the Postman API to programmatically manage users and user groups for workspaces. For more information, see the [Postman API collection](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a).

The following roles control access at a workspace level:

| Action | Admin | Editor | Viewer |
| --- | --- | --- | --- |
| Join and leave workspaces | &#x2714; | &#x2714; | &#x2714; |
| Send requests | &#x2714; | &#x2714; | &#x2714; |
| Add and remove APIs, collections, and environments | &#x2714; | &#x2714; | |
| Manage integrations | &#x2714; | &#x2714; | |
| Add monitors and mock servers | &#x2714; | &#x2714; | |
| Create and delete workspaces | &#x2714; | | |
| Edit workspace details | &#x2714; | | |
| Add and remove members | &#x2714; | | |
| Manage workspace roles | &#x2714; | | |
| Manage workspace visibility | &#x2714;&ast; | | |

&ast; On Professional and Enterprise plans, an Admin for a workspace must request to change its visibility to public. This request will go to the [Community Manager](#team-roles). On Basic and Free plans, or if a team has no Community Manager assigned, an Admin for a workspace can control its visibility.

## Element-based roles

At the element level, you can assign roles to team members that decide their level of access to Postman [collections](#collection-roles), [APIs](#api-roles), [mock servers](#mock-server-roles), and [monitors](#monitor-roles).

### Collection roles

You can [assign](/docs/collaborating-in-postman/requesting-access-to-elements/#managing-element-based-roles) two role types in Postman collections: **Editor** and **Viewer**.

* **Editor** - Can edit collections directly
* **Viewer** - Can view, fork, and export collections

Partners have different permissions for Collection Editor and Viewer roles in Partner Workspaces ([Enterprise Ultimate plans only](https://www.postman.com/pricing)). To learn more, see [Partner team and Partner Workspace roles](#partner-team-and-partner-workspace-roles).

You can assign a limited Viewer role to an external user who isn't in your Postman team by [allowing them to view specific collections](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections). Users with this role can only view collections and send requests in the collections that have been shared with them.

The following roles control access at a collection level:

| Collections |  Editor  | Viewer |
| ---   |   ---     | ---   |
| Edit and delete collections |    &#x2714;   |     |
| Manage roles on collections  |  &#x2714;   |   |
| Export collections  |   &#x2714;   | &#x2714;   |
| Fork collections |   &#x2714;   | &#x2714;   |
| Merge forks on collections  |    &#x2714;     |    |
| Publish collection documentation and add to API Network  |   &#x2714;  |   |
| Share collections to a different workspace  |  &#x2714;  | &#x2714;   |
| Tag and restore collection versions   |  &#x2714;   |   |
| Add, edit, and delete mock servers  |    &#x2714;      |   |
| Add, edit, and delete monitors |    &#x2714;   |     |

### API roles

You can [assign](/docs/collaborating-in-postman/requesting-access-to-elements/#managing-element-based-roles) three role types in Postman APIs: **Admin**, **Editor**, and **Viewer**.

* **Admin** - Can publish, move, and delete APIs
* **Editor** - Can edit APIs and API definitions
* **Viewer** - Can view published API versions

> If you have the [Workspace Admin](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) role, you will automatically inherit Admin permissions for all APIs in the workspace, even if you are assigned the Editor or Viewer role for an API.

The following roles control access at an API level:

| APIs | Admin |   Editor   | Viewer |
| ---   |   ---     | ---   | --- |
| Edit APIs and API definitions |   &#x2714;   |  &#x2714;     |     |
| Publish APIs |   &#x2714;   |     |     |
| Move and delete APIs |   &#x2714;   |     |     |
| Manage roles on APIs  |   &#x2714;   |   &#x2714;&ast;    |   |
| Comment on APIs |   &#x2714;   |   &#x2714;   |    |
| Comment on published API versions |   &#x2714;   |   &#x2714;   | &#x2714;   |
| Share APIs  |   &#x2714;   |   &#x2714;   | &#x2714;   |
| Generate collections from the API definition |   &#x2714;   |   &#x2714;  |    |
| Add and remove API documentation collections |   &#x2714;   |   &#x2714;  |   |
| Add and remove API test collections |   &#x2714;   |   &#x2714;  |   |
| Add and remove CI integrations |   &#x2714;   |   &#x2714;  |   |
| Add and remove APM integrations |   &#x2714;   |   &#x2714;  |    |
| Add and remove API gateway integrations |   &#x2714;   |   &#x2714;  |    |
| View reports for APIs |   &#x2714;   |   &#x2714;  | &#x2714;   |

&ast;  API Editors can assign users the Viewer or Editor role. API Editors can't assign a user the Admin role, or change an Admin to an Editor or Viewer.

## Environment roles

You can [assign](/docs/sending-requests/variables/team-environments/#manage-environment-roles) two role types for Postman environments: **Editor** and **Viewer**.

* **Editor** - Can edit and manage environments
* **Viewer** - Can view and use environments

The following roles control access at an environment level:

Environment | Editor | Viewer
--- | --- | ---
View environment | &#x2714; | &#x2714;
Use environment | &#x2714; | &#x2714;
Edit the current value of variables | &#x2714; | &#x2714;
Edit and delete environments | &#x2714; |
Manage environment roles | &#x2714; |
Move environment | &#x2714; |

## Mock server roles

You can [assign](/docs/collaborating-in-postman/requesting-access-to-elements/#managing-element-based-roles) two role types for Postman mock servers: **Editor** and **Viewer**.

* **Editor** - Can edit and manage mock servers
* **Viewer** - Can view mock servers and associated metadata

The following roles control access at the mock server level:

Mock server | Editor | Viewer
--- | --- | ---
View mock server | &#x2714; | &#x2714;
View mock server call logs and call log details | &#x2714; | &#x2714;
View mock server metadata | &#x2714; | &#x2714;
Edit and delete mock servers | &#x2714; |
Manage mock server roles | &#x2714; |
Move mock server | &#x2714; |

## Monitor roles

You can [assign](/docs/collaborating-in-postman/requesting-access-to-elements/#managing-element-based-roles) four role types for Postman Monitors: **Editor** and **Viewer**.

* **Super Admin** - Can view monitor metadata and run, pause, and resume monitors.
* **Admin** - Can view monitor metadata and run, pause, and resume monitors.
* **Editor** - Can view monitor metadata, metrics, jobs, and runs. Can run, update, delete, pause, and resume the monitor.
* **Viewer** - Can view monitor metadata, metrics, jobs, and runs.

Monitors | Super Admin | Admin | Editor | Viewer |
--- | --- | --- | --- | --- |
View monitor | &#x2714; | &#x2714; | &#x2714; | &#x2714;
View monitor metadata, results, activity, and summary metrics | &#x2714; | &#x2714; | &#x2714; | &#x2714;
Create monitor read integrations | | | &#x2714; | &#x2714;
View monitor based integrations | | | &#x2714; | &#x2714;
Edit and delete monitor | | | &#x2714; |
Run, pause, and resume monitor | &#x2714; | &#x2714; | &#x2714; |
Move monitor | | | &#x2714; |
Update monitor roles | | |  &#x2714; |

## Partner team and Partner Workspace roles

> **[Partner team and Partner Workspace roles are available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

Partner team and Partner Workspace roles relate to [Partner Workspaces](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) and are applied at the team, workspace, and collection levels. There are different team and Partner Workspace roles you can assign to team members and external partners:

|  | For team members | For partners |
| --- |:---:| --- |
| **Team level** | Partner Manager | Partner |
| **Workspace level** | Admin, Viewer, Editor | Viewer, Editor <br> Partner Lead (optional) |
| **Collection level** | Viewer, Editor | Viewer, Editor |

You can [assign](/docs/administration/managing-your-team/manage-team-members/#manage-team-roles) the Partner Manager role to team members at the team level, and [invite](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/#inviting-collaborators-to-a-partner-workspace) partners with the Partner role:

* **Partner Manager** - Manages all Partner Workspaces within an organization. Controls Partner Workspace settings and visibility, and can send invites to partners.
* **Partner** - Can only access the Partner Workspaces they've been invited to. All partners are assigned [Workspace Editor or Viewer](#workspace-roles) roles when invited to a Partner Workspace. You can edit Partner Workspace permissions for partners at the workspace and collection levels.

You can [assign](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#managing-workspace-roles) Partner Workspace roles to partners at the workspace level:

* **Partner Lead**  - Can invite other partners from their organization to join a Partner Workspace.
* **Editor** - Partners can create and edit Partner Workspace resources, [import and export](/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/) elements, and [fork](/docs/collaborating-in-postman/using-version-control/forking-elements/) elements to Partner Workspaces within the same team.
* **Viewer** - Partners can view Partner Workspace resources and [fork](/docs/collaborating-in-postman/using-version-control/forking-elements/) elements to another Partner Workspace within the same team where they're assigned the Workspace Editor role.

You can also [assign](/docs/collaborating-in-postman/requesting-access-to-elements/#managing-element-based-roles) Partner Workspace roles to partners at the collection level:

* **Editor** - Partners can [export collections](/docs/getting-started/importing-and-exporting/exporting-data/#exporting-collections). They can also [fork collections](/docs/collaborating-in-postman/using-version-control/forking-elements/) within the same Partner Workspace or to another Partner Workspace within the same team. They can't fork collections outside the team.
* **Viewer** - Partners can [fork collections](/docs/collaborating-in-postman/using-version-control/forking-elements/) to another Partner Workspace within the same team where they're assigned the Workspace Editor role. They can't fork elements outside the team. Also, they can't export collections.

To learn more about collaborating as a team member or partner, see [Collaborating in a Partner Workspace](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/#collaborating-in-a-partner-workspace).

> Your team must have [available seats](/docs/billing/billing/#changing-your-plan) or [Auto-Flex enabled](/docs/billing/billing/#using-auto-flex) to invite a partner as a Workspace Editor. Otherwise, the partner will be assigned the Workspace Viewer role, giving the partner permission to view all workspace resources. Also, your team must have available seats to assign a partner as a Collection Editor. Assigning a partner the Workspace Viewer or Collection Viewer roles doesn't consume paid seats.

## Network roles

> **[Network roles are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

Network roles related to the [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/) are applied at the team and folder level.

You can [assign](/docs/administration/managing-your-team/manage-team-members/#manage-team-roles) network roles at the team level:

* **API Network Manager** - Manages a team's Private API Network, including adding elements and reviewing requests to add them.

You can also [assign](/docs/collaborating-in-postman/private-api-network/organizing-private-network/#editing-folder-managers) network roles at the folder level:

* **Folder Manager** - Manages specific folders and the elements in them in a team's Private API Network. Team members with this role can perform all actions that API Network Manager role can perform but only in folders they have permission to manage.

## Next steps

After learning about the roles available to team members, you can manage your team's level of access and control more effectively.

* To learn more about team management, including managing team roles and inviting collaborators to join your team, visit the [Team management overview](/docs/administration/managing-your-team/managing-your-team/).
