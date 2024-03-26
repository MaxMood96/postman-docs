---
title: "Share your work in Postman"
updated: 2023-06-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: link
    name: "How to Share Postman Collections"
    url: "https://youtu.be/b9VlFDlwKvI"
  - type: link
    name: "Share Collection JSON via a Link | Postman Level Up"
    url: "https://youtu.be/tw7x3yBpU1Y"
  - type: link
    name: "Share a Collection With a Guest User | Postman Level Up"
    url: "https://youtu.be/pRIG0Ujphoc"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Postman’s new Guest role to share collections instantly"
    url: "https://blog.postman.com/introducing-postmans-new-guest-role-to-share-collections-instantly/"
---

You can [collaborate on Postman elements](https://www.postman.com/api-platform/api-collaboration/) including collections, requests, examples, collection folders, APIs, Flows, and environments, by sharing them or by moving them to a shared private, team, or public workspace.

To share your work using workspaces, you need to be signed in to your [Postman account](/docs/getting-started/installation/postman-account/).

> This page has information about sharing Postman collections, collection folders, APIs, requests, examples, Flows, and environments using the **Share** function. Other Postman elements are shared differently:
>
> * To share a collection run, see [Using the Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/).
> * To share a collection as a file, see [Importing and exporting data](/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/).

## Contents

* [Sharing Postman elements](#sharing-postman-elements)
    * [Sharing using names, emails, or groups](#sharing-using-names-emails-or-groups)
    * [Sharing using a Run in Postman button](#sharing-using-a-run-in-postman-button)
    * [Sharing using the Postman API](#sharing-using-the-postman-api)
* [Sharing elements with external users](#sharing-elements-with-external-users)
* [Allowing external users to view collections](#allowing-external-users-to-view-collections)
    * [Changing external user access to collections](#changing-external-user-access-to-collections)

## Sharing Postman elements

You can share your collections, requests, examples, collection folders, APIs, Flows, and environments with collaborators. There are several different ways to share an element:

* In the sidebar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the element you want to share, then select **Share**.
* For collections, APIs, Flows, and environments, open the element you want to share, then select <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px"> **Share** from the element's overview page.
* Hover over the element's name in the overview page and select the link icon <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px"> to copy the element's URL to the clipboard.
* For requests and collection folders, you can also select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the element you want to share and select **Copy link** to copy the element's URL to the clipboard.
* To share a URL to a collection, collection folder, request, or example with an active environment selected, [choose an environment using the environment selector](/docs/sending-requests/variables/managing-environments/#switch-between-environments), copy the element's link to your clipboard, then send the link to team members you want to share with.
* You can also use the [Postman VS Code extension](/docs/getting-started/basics/about-vs-code-extension/) to share a collection and environment, or a URL to a collection and environment.

### Sharing using names, emails, or groups

You can share collections, requests, examples, collection folders, APIs, Flows, and environments, directly with collaborators, including team members, groups, and external users.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the element you want to share, then select **Share**.
1. If you're sharing a collection, select the **With people** tab.
1. Enter the name, email address, or [group name](/docs/collaborating-in-postman/user-groups/) for the people you want to share the element with.
1. If you have an Editor role for the element you are sharing, you can give your new collaborators a **Viewer** or **Editor** [role](/docs/collaborating-in-postman/roles-and-permissions/) on the element. If you have a Viewer role for the element, you can share it, but you won't be able to assign roles.
1. If you're sharing a collection, collection folder, request, or example, you can optionally select an environment to be the active environment. This will be the active environment for the team members and groups you want to share with. Select the **Select an Environment** dropdown list and choose the environment.

    > To change the environment that's active for the team members and groups you want to share with, you must re-share the collection, collection folder, request, or example with them. Choose a new environment in the **Select an Environment** dropdown list, then select **Share**.

1. Select **Share**.

<img alt="Share a collection using name, email, or group" src="https://assets.postman.com/postman-docs/v10/share-element-with-people-v10-3.jpg"/>

Postman will notify the individual team members and groups you shared the element with about your request to collaborate.

If the element you want to share is in a personal workspace, you'll be prompted to either change the workspace visibility to Team or to create a new team workspace to place the element in. For more information, see [Collaborating in team workspaces](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/).

If the element you want to share is in a private workspace, users who don't have access to the private workspace will be invited as workspace Viewers when the element is shared with them.

### Sharing using a Run in Postman button

You can share collections in a website or README with a Run in Postman button.

<!-- vale Postman.Avoid = NO -->

1. From the element you want to share, select <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px"> **Share**.
1. Select **Via Run in Postman**.

<!-- vale Postman.Avoid = YES -->

For more information on making and using a Run in Postman button, read [Create Run in Postman buttons](/docs/publishing-your-api/run-in-postman/creating-run-button/).

<img alt="Share a collection with a Run in Postman button" src="https://assets.postman.com/postman-docs/v10/share-collection-run-in-postman-v10-3.jpg"/>

### Sharing using the Postman API

To share a collection's JSON using the Postman API, do the following:

<!-- vale Postman.Avoid = NO -->

1. From the collection that you want to share, select <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px"> **Share**.
1. Select **Via API**.
1. Select **Get collection JSON using Collection Access Key**.
1. Select **Generate New Key** to create a read-only collection access key. This key expires after 60 days of inactivity.

   > **Make sure you remove any sensitive information from your collection before sharing collection access keys.**

1. (Optional) Select **Manage keys** to view or revoke this collection access key on your [API keys page](https://go.postman.co/settings/me/api-keys). To learn more about collection access keys, see [Generate a collection access key](/docs/developer/postman-api/authentication/#generate-a-collection-access-key).

<!-- vale Postman.Avoid = YES -->

Anyone with this link has read-only access to the collection's JSON. The data that this Postman API endpoint serves reflects the current state of the collection.

![Share a collection via API](https://assets.postman.com/postman-docs/v10/share-collection-via-api-v10-3.jpg)

If you want to share a link with other users, select **Link to collection in public workspace** to provide a link to the collection. Anyone with this link can view and fork your collection.

![Share a collection with a link to a public workspace](https://assets.postman.com/postman-docs/v10/share-collection-link-v10-2.jpg)

## Sharing elements with external users

> Your team must have [available seats](/docs/billing/billing/#changing-your-plan) or [Auto-Flex enabled](/docs/billing/billing/#using-auto-flex) to invite more team members.

When you [share a collection](#sharing-postman-elements), external users who aren't on your Postman team will receive an invitation to join your team right away if you're a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) or [Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

If you have a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) on your team and you are on a Free, Basic, or Professional plan, external users you share an element with are added to your team as Developers automatically, without the need for approval by a Team Admin.

If you aren't a Developer on a Free, Basic or Professional plan or a Team Admin on any plan, a Team Admin must approve your request to share an element with an external user.

> If your team has [SSO enabled](/docs/administration/sso/intro-sso/), external users will be required to sign in using your team's SSO.

## Allowing external users to view collections

On [Free, Basic, and Professional plans](https://www.postman.com/pricing/), Collection Editors can allow external users who aren't in your Postman team to view a specific collection and send requests in that collection. You must have the Editor role in the collection you want to share with external users.

The collection must be in a team workspace. If the collection is in a personal or private workspace, you can't share the collection with external users. For more information, see [Collaborating in team workspaces](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/).

Once you allow external users to view a specific collection, send them the collection URL to sign in to Postman and view the collection. External users who sign in to Postman using the collection URL are assigned the [Guest role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) at the team level and a limited [Viewer role](/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) at the collection level. Assigning an external user the Guest role doesn't consume paid seats.

To allow an external user to view a collection, do the following:

1. From the collection you want to share, select <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px"> **Share**.
1. Select **With people**.
1. Turn on the toggle next to **Allow Guests to join your team and view this collection with the link**.
1. Select **Copy Link** to copy the collection URL.

    ![Copy collection URL](https://assets.postman.com/postman-docs/v10/copy-guest-link-collection-v10-4.jpg)

1. Send the collection URL to external users who you want to view the collection. Postman requires external users to sign in to Postman before they can view the collection.

> Anyone who has access to the collection URL can view the collection if the toggle next to **Allow Guests to join your team and view this collection with the link** is turned on.

### Changing external user access to collections

You can change an external user's role at the team and collection levels. You can also revoke access to viewing collections for new and existing external users.

To learn how to change an external user's team role, see [Manage guests](/docs/administration/managing-your-team/manage-team-members/#manage-guests). To learn how an external user can request a role change, see [Requesting Editor role access for a collection as an external user](/docs/collaborating-in-postman/requesting-access-to-elements/#requesting-editor-role-access-for-a-collection-as-an-external-user).

You can turn off the toggle next to **Allow Guests to join your team and view this collection with the link**. When you turn this off, new external users can no longer be assigned the Guest role. External users already assigned the Guest role will continue to have access to the collection.

To remove external users at the team level, see [Remove team members](/docs/administration/managing-your-team/manage-team-members/#remove-team-members). In certain cases, Guests with access to only one collection are automatically removed from the team:

* If the Workspace Admin removes them from the collection

* If the Workspace Admin removes the guest from the workspace the collection is in

* If the Workspace Admin changes the visibility of the workspace the collection is in to private

* If the Workspace Admin deletes the workspace the collection is in

To remove external users at the collection level, do the following:

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection name and select **Manage roles**.
1. Select **Remove** for the users you want to revoke access to the collection.
1. Select **Update Roles**.

    ![Remove external user at collection level](https://assets.postman.com/postman-docs/v10/remove-guest-role-at-collection-level-v10.jpg)

> Removing external users from collections doesn't revoke their access to the workspace the collection is in. To revoke their entire access to the team, see [Remove team members](/docs/administration/managing-your-team/manage-team-members/#remove-team-members).
