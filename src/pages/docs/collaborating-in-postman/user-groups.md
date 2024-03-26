---
title: "Organize users into Postman groups"
updated: 2023-06-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Postman Groups: Manage Users with Easier Access Control"
    url: "https://blog.postman.com/introducing-postman-groups/"
  - type: link
    name: "The Developer role in Postman can now manage groups"
    url: "https://blog.postman.com/developer-role-in-postman-can-now-manage-groups/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Western Governors University (WGU) leverages user groups to create teams"
    url: "https://www.postman.com/case-studies/wgu/"
---

> **[Groups are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

With Postman groups, you can arrange users into groups that reflect your organizational structure. You can add users to a group, then assign that group roles and access to the resources they'll be using across Postman. You can also efficiently onboard new team members by adding them to existing groups in your organization, instantly giving them access to the elements they'll be working on. Groups enable you to control access from a single dashboard in Postman and manage it at scale across your Enterprise team.

[Admins and Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can create, manage, and delete groups. [Developers](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can also create, manage, and delete Developer-only groups.

## Contents

* [Creating a group](#creating-a-group)
* [Managing a group](#managing-a-group)
    * [Managing members of a group](#managing-members-of-a-group)
    * [Managing group managers](#managing-group-managers)
    * [Managing access control for a group](#managing-access-control-for-a-group)
        * [Editing team roles for a group](#editing-team-roles-for-a-group)
        * [Managing roles on workspaces and Postman elements](#managing-roles-on-workspaces-and-postman-elements)
    * [Editing details for a group](#editing-details-for-a-group)
* [Deleting a group](#deleting-a-group)

## Creating a group

To create a group, select **Team** in the Postman header, then select **Manage Team**. Select **Groups** on the left, then **Create Group**.

<img alt="Create group" src="https://assets.postman.com/postman-docs/v10/team-dashboard-manage-groups-v10.15.jpg"/>

Give your group a name and description, and add your group members. If you're an Admin or Super Admin, you'll also have the option to select the team roles you'd like to assign to the group. If you're a Developer, you'll only have the option to create Developer-only groups.

<img alt="Create a group" src="https://assets.postman.com/postman-docs/v10/create-a-group-v10.15.jpg" width="450px"/>

When you're ready, select **Create Group**.

Team members will receive an email and in-app notification when added to a group.

> If you add a user with a support-only role (Admin or Billing) to a group that gives them a Developer role, they will automatically take up an available paid seat on your Postman team. If no seats are available, you won't be able to grant access to the group with that user.

## Managing a group

You can manage a group's members, roles, and access to Postman elements.

### Managing members of a group

[Admins and Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can add and remove members for all groups, but [Developers](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can only add and remove members if they're a [group manager](#managing-group-managers).

To manage the members of a group, select **Team** in the Postman header, then select **Manage Team**. Select **Groups** on the left. Locate the group you'd like to update and select it to edit.

<img alt="Manage group members" src="https://assets.postman.com/postman-docs/v10/edit-group-members-v10.15.jpg" width="450px"/>

Select **+ Add** to add a user to the group. Select **X** next to a user to remove them from the group.

> Users will receive an email and in-app notification when added to or removed from a group.

### Managing group managers

Groups that are only assigned the Developer role can have group managers. Group managers can edit the name, description, members, and managers for a group.

When a Developer creates a group they're automatically assigned the role of group manager. Developers with the group manager role, Admins, and Super Admins can add and remove group managers.

To edit the managers of a group, select **Team** in the Postman header, then select **Manage Team**. Select **Groups** on the left. Locate the group you'd like to update and select it to edit.

<img alt="Manage developer group managers" src="https://assets.postman.com/postman-docs/v10/edit-group-managers-v10.15.jpg" width="450px"/>

Select **+ Add** to add a manager to the group. Select **X** next to a manager to remove them from the group.

### Managing access control for a group

You can control a group's access at the team level, workspace level, and on individual collections, APIs, environments, mock servers, and monitors.

> Users will receive an in-app notification when roles are updated.

#### Editing team roles for a group

[Admins and Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can manage team roles for groups.

To edit team roles for a group, select **Team** in the Postman header, then select **Manage Team**. Select **Groups** on the left. Locate the group you'd like to update and select it to edit.

<img alt="Edit group team roles" src="https://assets.postman.com/postman-docs/v10/manage-roles-for-a-group-v10.15.jpg" width="400px"/>

Select the team roles you'd like to assign to the group, or deselect team roles you'd like to remove from the group, then select **Update Roles**.

> To learn more about roles and their permissions, see [Team Roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

#### Managing roles on workspaces and Postman elements

You can control a group's access to individual workspaces, collections, APIs, environments, mock servers, and monitors. For more information on managing workspaces, see [Sharing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#sharing-workspaces).

> You can use the Postman API to programmatically manage users and user groups for workspaces. For more information, see the [Postman API collection](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a).

For collections, APIs, environments, mock servers, and monitors, go to the element you'd like to edit roles for. In the sidebar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> then select **Manage roles**.

<img alt="Invite group to collection" src="https://assets.postman.com/postman-docs/v10/add-group-to-collection-v10.15.jpg" width="500px"/>

Use the search bar to add the group, then give the group **Editor** or **Viewer** permissions with the dropdown. To remove a group, select <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> next to the group name. Select **Update Roles** to confirm changes.

> See [Defining roles](/docs/collaborating-in-postman/roles-and-permissions/) for more information on access control at a team, workspace, API, and collection level.

### Editing details for a group

[Admins, Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), and [group managers](#managing-group-managers) can edit details for a group.

To edit details for a group, select **Team** in the Postman header, then select **Manage Team**. Select **Groups** on the left. Locate the group you'd like to update and select it to edit.

Select the group's name at the top of the page to edit it. To add a description, select **Add a description** under the group's name. To update an existing description, select it to edit. Changes are automatically saved.

## Deleting a group

[Admins, Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), and [group managers](#managing-group-managers) can delete a group.

To delete a group, select **Team** in the Postman header, then select **Manage Team**. Select **Groups** on the left. Locate the group you'd like to delete and select it.

Select **Delete Group** to delete the group, then **Delete Group** to confirm.

<img alt="Delete group" src="https://assets.postman.com/postman-docs/v10/delete-group-v10.15.jpg" width="400px"/>
