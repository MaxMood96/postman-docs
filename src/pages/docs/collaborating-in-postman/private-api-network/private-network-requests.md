---
title: "Request to add elements to the Private API Network"
updated: 2023-09-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Private API Network | The Exploratory"
    url: "https://youtu.be/1SINcytmKsc"
  - type: link
    name: "Private API Network"
    url: "https://youtu.be/cbPT4dMFIDw"
  - type: link
    name: "Discovering APIs | Postman Enterprise"
    url: "https://youtu.be/e1v647ayIBg"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to Make Your APIs Available to More Consumers"
    url: "https://blog.postman.com/how-to-make-your-apis-available-to-more-consumers/"
  - type: link
    name: "Introducing an API to manage your Private API Network with more automation"
    url: "https://blog.postman.com/introducing-api-to-manage-your-private-api-network-with-automation/"
  - type: link
    name: "Simplifying API distribution and evaluation with the Private API Network"
    url: "https://blog.postman.com/simplifying-api-distribution-and-evaluation-with-the-private-api-network/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "ChargeHub plans to improve internal discovery with a Private API Network"
    url: "https://www.postman.com/case-studies/chargehub/"

---

> **[The Private API Network is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

You can request to add elements to the Private API Network. An API Network Manager or Folder Manager will review your request and either approve or deny it.

Users with the Editor role for an element can request to add elements to the Private API Network.

## Contents

* [Requesting to add elements](#requesting-to-add-elements)
    * [Requesting to add elements in your Private API Network](#requesting-to-add-elements-in-your-private-api-network)
    * [Requesting to add a workspace from the workbench](#requesting-to-add-a-workspace-from-the-workbench)
    * [Requesting to add a collection from the workbench](#requesting-to-add-a-collection-from-the-workbench)
    * [Requesting to add an API from the workbench](#requesting-to-add-an-api-from-the-workbench)

## Requesting to add elements

To request to add an element to the Private API Network, it must be in a team or public workspace. You can't request to add an element to the Private API Network unless all team members have at least view access to the element. Learn more about team [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

When you submit a request, Postman notifies the [API Network Manager or Folder Manager](/docs/collaborating-in-postman/roles-and-permissions/#network-roles) who will review your request and either approve or deny it. Postman will notify you of the API Network Manager or Folder Manager's decision. If they deny your request, the notification will include a comment with their reason.

> When you add a workspace, collection, or API to the [Private API Network](https://go.postman.co/network/private), it's visible to your Postman team, but isn't visible to [partners](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/).

### Requesting to add elements in your Private API Network

Editors of an element can request to add elements from inside your team's Private API Network.

To request to add elements from your Private API network, do the following:

1. Open your [Private API Network](https://go.postman.co/network/private).
1. Select the **+** icon in the left sidebar to request to add elements to the root Home folder. To request to add elements to a specific folder, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the folder, then select **Request to add elements**.

    > You can also select **Add** on the right from the Private API Network overview page, or select **Add To Folder** in the upper-right corner.

1. Search for and then select collections, APIs, and workspaces you want to request to add. You can also filter elements by tags. Learn more about adding tags to [collections](/docs/collections/using-collections/#tagging-a-collection), [APIs](/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace).

    If you're requesting to add collections or APIs, you can optionally select environments in their workspace to make sure users have access to environment variables. You can also [edit a collection's environments later](/docs/collaborating-in-postman/private-api-network/managing-private-network/#editing-collections).

    You can select **Added elements** in the upper-right corner to show elements already added to the Private API Network. You can select the **Collections** tab and then **Forks** in the upper-right corner to show [forked collections](/docs/collaborating-in-postman/using-version-control/forking-elements/).

    > An API's editor must [publish a version of the API](/docs/collaborating-in-postman/private-api-network/organizing-private-network/#publishing-specific-api-versions) before you can add it to your Private API Network.

    <!-- -->

    > You can select an element's name to open it in its workspace in a new tab.

    <img alt="Add elements to the Private Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-add-elements-v10-3.jpg"/>

1. Select **Review**.
1. Review your selections, and then select **Request to add**.

### Requesting to add a workspace from the workbench

[Workspace Editors](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) can request to add workspaces to your Private API Network from the workbench. API Network Managers and Folder Managers can [add a workspace from the workbench](/docs/collaborating-in-postman/private-api-network/organizing-private-network/#adding-a-workspace-from-the-workbench).

1. Open the workspace you want to add to the Private API Network.
1. In the workspace overview, select <img alt="Workspace settings icon" src="https://assets.postman.com/postman-docs/v10/icon-sliders-v10.jpg#icon" width="24px"> **Workspace Settings**.
1. Select **Request to Add**.

    <img alt="Request to add workspace to the Private Network" src="https://assets.postman.com/postman-docs/v10/request-to-add-workspace-to-private-api-network-v10-2.jpg" width="500px"/>

1. (Optional) Select a folder or create one to keep elements organized.
1. (Optional) Select **Add comment** to add a note for the API Network Manager or Folder Manager.
1. Select **Request workspace**.

### Requesting to add a collection from the workbench

[Collection Editors](/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) can request to add collections to your Private API Network from the workbench. API Network Managers and Folder Managers can [add a collection from the workbench](/docs/collaborating-in-postman/private-api-network/organizing-private-network/#adding-a-collection-from-the-workbench).

1. Open the collection you want to add to the Private API Network.
1. In the collection overview, select **Request to Add**.

    <img alt="Request to add collection to the Private Network" src="https://assets.postman.com/postman-docs/v10/request-to-add-collection-to-private-api-network-v10-2.jpg"/>

1. (Optional) Select **Select Environments** to make sure users have access to environment variables.

    > You can also edit a collection's environments later. To learn more, see [Editing collections](/docs/collaborating-in-postman/private-api-network/managing-private-network/#editing-collections).

1. (Optional) Select a folder or create one to keep elements organized.
1. (Optional) Select **Add comment** to add a note for the API Network Manager or Folder Manager.
1. Select **Request collection**.

### Requesting to add an API from the workbench

[API Editors](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) can request to add APIs to your Private API Network from the workbench. API Network Managers and Folder Managers can [add an API from the workbench](/docs/collaborating-in-postman/private-api-network/organizing-private-network/#adding-an-api-from-the-workbench).

> An API's editor must [publish a version of the API](/docs/collaborating-in-postman/private-api-network/organizing-private-network/#publishing-specific-api-versions) before you can add it to your Private API Network.

1. Open the API you want to add to the Private API Network.
1. In the API overview, select **Request to Add**.

    <img alt="Request to add API to the Private Network" src="https://assets.postman.com/postman-docs/v10/request-to-add-api-to-private-api-network-v10-2.jpg"/>

1. (Optional) Select a folder or create one to keep elements organized.
1. (Optional) Select **Add comment** to add a note for the API Network Manager or Folder Manager.
1. Select **Request API**.
