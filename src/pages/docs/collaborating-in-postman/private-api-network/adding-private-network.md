---
title: "The Postman Private API Network"
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

The _Private API Network_ provides a [central directory](https://www.postman.com/api-platform/api-catalog/) of workspaces, collections, and APIs your team uses internally. Your Postman team can access these resources and start using them right away. By using the Private API Network, you can enable developers across your organization to discover, consume, and track API development in one place.

The Private API Network is available through Postman's [Internal API Management solution](/docs/administration/managing-your-team/manage-team-product-access/#internal-api-management-solution). If you are an Enterprise Essentials user, you must add this solution and a relevant number of seats to enable users on your team to publish and request to publish changes to the network. The rest of the team can consume and read the network.

Workspaces, collections, and APIs in the Private API Network are visible to logged-in users who are on your Postman team. Users who aren't on your team can't find or access these resources.

[Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) and [API Network Managers](/docs/collaborating-in-postman/roles-and-permissions/#network-roles) can manage all folders and elements in your Private API Network. You can assign team members the [Folder Manager role](/docs/collaborating-in-postman/roles-and-permissions/#network-roles) at the folder level, giving them permission to manage specific folders and the elements in them.

<img alt="Private API Network overview" src="https://assets.postman.com/postman-docs/v10/private-api-network-folders-v10.jpg"/>

## Contents

* [Navigating the Private API Network](#navigating-the-private-api-network)
* [Searching, filtering, and sorting](#searching-filtering-and-sorting)
    * [Discover popular and new elements in the network](#discover-popular-and-new-elements-in-the-network)
    * [Search for elements in the network](#search-for-elements-in-the-network)
    * [Sort elements in a folder](#sort-elements-in-a-folder)
* [Reviewing details about elements](#reviewing-details-about-elements)
* [Sharing folders and elements](#sharing-folders-and-elements)
* [Watching and forking elements](#watching-and-forking-elements)
* [Private API Network reports](#private-api-network-reports)

## Navigating the Private API Network

You can use the Private API Network to learn about workspaces, collections, and APIs shared within your team. In the left sidebar, you can browse a directory of elements shared within your team.

There are several ways to access the Private API Network:

* Select **Home** from the Postman header, then select **Private API Network** in your team information on the left sidebar.
* Select **API Network** from the Postman header, then select **View internal APIs**.
* Select **Search Postman** in the header, change the scope to **Private API Network**, then enter your search terms.

## Searching, filtering, and sorting

There are several ways to search, filter, and sort elements and folders in the Private API Network. You can select <img alt="Home icon" src="https://assets.postman.com/postman-docs/v10/icon-home-v10.jpg#icon" width="16px"> **Home** to sort popular elements in the network. You can select **Search Postman** in the header to enter search terms and filter the results. You can also select a folder to sort elements in it.

### Discover popular and new elements in the network

You can select <img alt="Home icon" src="https://assets.postman.com/postman-docs/v10/icon-home-v10.jpg#icon" width="16px"> **Home** in the left sidebar to discover popular and new elements added to the network. On the right, you can sort popular elements in the network by **Week** or **Month**. You can also review elements recently added to the network. Select **Show more** to review more elements in either category.

<img alt="Private API Network discover elements" src="https://assets.postman.com/postman-docs/v10/private-api-network-discover-elements-v10.jpg"/>

API Network Managers who are setting up the Private API Network might see a list of suggested elements on the right. Postman suggests adding these elements to the network because they're popular within your team, meaning your team might benefit from having them in the Private API Network. To add a suggested element to the network, select **Add**.

<img alt="Private API Network suggested elements" src="https://assets.postman.com/postman-docs/v10/private-api-network-suggested-elements-v10.jpg"/>

### Search for elements in the network

You can search and filter elements in the network. Select **Search Postman** in the header, change the scope to **Private API Network**, then enter your search terms. If you're in the Private API Network, the scope will be automatically set to **Private API Network**. You can also specify the element you'd like to search for: **Workspaces**, **Collections**, **Requests**, **APIs**, or **Folders**. You can press **Enter** or select an element's name in the search results to open it in the network. To learn more about searching in Postman, see [Search Postman](/docs/getting-started/basics/navigating-postman/#search-postman).

<img alt="Search the Private API Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-search-v10.jpg"/>

Then you can filter elements with the following options:

* To filter by element type, select **Element type**, then select **Workspaces**, **Collections**, **APIs**, **Request**, or **Folder**.
* To filter by tags added to collections, APIs, or workspaces, select **Search tags**, then select tags to filter by. You can't filter by tags if you're filtering by **Request** or **Folder** element types. Learn more about adding tags to [collections](/docs/collections/using-collections/#tagging-a-collection), [APIs](/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace).
* To filter by an element's location in a folder in the left sidebar, select **Location**, then select the folder or subfolder. When you filter by a folder, your search results return elements in the folder and its subfolders. To filter by all elements in the network, including elements not organized in folders, don't filter by an element's location.

<img alt="Filter and search the Private API Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-search-and-filter-v10-2.jpg" width="500"/>

### Sort elements in a folder

You can sort elements in a folder and its subfolders. To sort elements, select a folder or subfolder in the left sidebar, then select the **Sort by** dropdown list. The options are:

* **Recently added** - Sort elements by the date they were added.
* **A to Z** - Sort elements alphabetically.
* **Trending this week** - Sort elements by your team's usage this week.
* **Trending this month** - Sort elements by your team's usage this month.

<img alt="Sort elements in a folder" src="https://assets.postman.com/postman-docs/v10/private-api-network-folder-elements-v10.jpg"/>

## Reviewing details about elements

To review information about workspaces, collections, and APIs, select it from the left sidebar. On the right, you can view its description and the editors who have worked on it. You can view the following details:

* For workspaces, you can view all of the collections and APIs inside them.
* For collections, you can view available documentation. In the documentation, you can select **Try Request** next to a request or **Try Example** next to an example to open it in a new tab. To learn more about trying an example, see [Trying an example](/docs/sending-requests/response-data/examples/#trying-an-example).
* For APIs, you can view API definitions and associated API documentation. You can also view collections added to the API.
    > If you [published an API](/docs/collaborating-in-postman/private-api-network/organizing-private-network/#publishing-specific-api-versions) with an API definition that has syntax errors, your API documentation might not display as expected. To learn more about viewing syntax errors, see [Viewing syntax errors in your API definition](/docs/designing-and-developing-your-api/developing-an-api/validating-elements-against-schema/#viewing-syntax-errors-in-your-api-definition).

You can also open the element in its workspace. Select an element from the left sidebar, and then select either **View in Workspace** or **Open Workspace** in the upper-right corner.

## Sharing folders and elements

You can share links to folders and individual elements with other team members. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a folder or element, then select **Copy link**. This copies the link to your clipboard. You can then share the link with team members.

> You can also select a folder or element in the sidebar. Then select <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px"> **Copy link** in the upper-right corner.

## Watching and forking elements

You can watch workspaces, collections, and APIs from the Private API Network. You can also fork collections from the Private API Network.

To watch a workspace, collection, or API and get notified about any changes, select an element in the left sidebar, then select <img alt="Watch icon" src="https://assets.postman.com/postman-docs/eye.jpg#icon" width="16px"> **Watch** in the upper-right corner. To learn more about watch notifications, see [Watching a workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#watching-a-workspace), [Watching a collection](/docs/collections/using-collections/#watching-a-collection), and [Watching APIs](/docs/designing-and-developing-your-api/managing-apis/#watching-apis).

To fork a collection, select a collection in the left sidebar, then select <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> **Fork** in the upper-right corner. To learn more about forking collections, see [Forking Postman elements](/docs/collaborating-in-postman/using-version-control/forking-elements/).

## Private API Network reports

The report feature makes it easier to govern your internal API landscape through deeper insights into APIs in your Private API Network.

To view Private API Network reports, select [**Home**](https://go.postman.co/) from the Postman header, then select **Reports** on the left side.

To learn more about reports, see [About reports](/docs/reports/reports-overview/).
