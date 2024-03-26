---
title: "Navigating Postman"
updated: 2022-11-16
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Navigating the Postman App Interface | The Exploratory"
    url: "https://youtu.be/Kr8OVXjzw4k"
  - type: link
    name: "Customize Sidebar | Postman Level Up"
    url: "https://youtu.be/UEL7HyWqTm4"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing tags: the new way to navigate in Postman"
    url: "https://blog.postman.com/introducing-tags-the-new-way-to-navigate-in-postman/"
  - type: link
    name: "Introducing Bulk Actions on Postman’s Sidebar"
    url: "https://blog.postman.com/introducing-sidebar-bulk-actions/"
  - type: link
    name: "Focus on the work that matters with sidebar configurations"
    url: "https://blog.postman.com/focus-on-the-work-that-matters-with-sidebar-configurations/"
  - type: subtitle
    name: "Postman Academy"
  - type: link
    name: "Getting started with Postman"
    url:  "https://academy.postman.com/getting-started-with-postman-2212"
---

Postman has a variety of tools, views, and controls to help you manage your API projects. This guide is a high-level overview of Postman's primary interface areas:

* [Header](#header)
* [Sidebar](#sidebar)
* [Workbench](#workbench)
    * [Tabs](#tabs)
    * [Right sidebar](#right-sidebar)
    * [Environment selector and environment quick look](#environment-selector-and-environment-quick-look)
    * [Quick Help](#quick-help)
* [Footer](#footer)

<img alt="Postman app" src="https://assets.postman.com/postman-docs/v10/navigating-postman-v10-21-12.jpg"/> <!-- TODO: update screenshot with Postman Vault in footer -->

## Header

The header enables you to create workspaces, access reports, explore the public API network, search in Postman, view sync status and notifications, and access your settings, account, and [Postman plan](/docs/billing/buying/).

* **&#8592; &#8594;** - _(Available on the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/))_ Navigate backward and forward through pages you've visited within Postman.

  <img alt="Postman header left side" src="https://assets.postman.com/postman-docs/v10/postman-desktop-app-header-v10-21-11.jpg" width="369px"/>

* **Home** - Go to your personal home page, which includes your recently visited workspaces, and links to resources for [your team](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/) if applicable.
* **Workspaces** - Search for workspaces, view your recently visited workspaces, or [create a new workspace](/docs/getting-started/first-steps/creating-your-first-workspace/).
* **API Network** - Explore the [Public API Network](/docs/getting-started/first-steps/exploring-public-api-network/) and access your team's [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/).
* <img alt="Search icon" src="https://assets.postman.com/postman-docs/icon-search-v9.jpg#icon" width="16px"> **Search Postman** - Search all workspaces, collections, requests, APIs, Flows, and teams in Postman. For more details on searching in Postman, see [Search Postman](#search-postman).

  <img alt="Expanded view of the Search Postman field" src="https://assets.postman.com/postman-docs/v10/navigating-postman-search-v10-21-12.jpg">

* **Invite** - If you have an [Admin role](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) on a workspace, you can invite other users to collaborate.

  <img alt="Postman header right side" src="https://assets.postman.com/postman-docs/navigating-postman-header-right-v9.19.2.jpg" width="310px"/>

* <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** - Access [Postman settings](/docs/getting-started/installation/settings/) and other Postman resources.
* <img alt="Notifications icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> **Notifications** - View recent activity from your team, get notifications about Postman updates, and see pull requests, comment activity, and other important information.
* **Your avatar** - View your profile, access your [account and notification settings](/docs/getting-started/installation/postman-account/), see all active sessions for your account, or sign out of your account.
* **Team** (_paid plans_) or **Upgrade** (_free plan_) - View [resource usage](/docs/billing/resource-usage/) and access your [billing dashboard](/docs/billing/billing/) and other account management tools.

### Search Postman

To search in Postman, select __Search Postman__ in the header then enter your search terms. You can also use the keyboard shortcut **⌘+K** or **Ctrl+K**. To change the scope of your search, select the scope dropdown list to the left of the search bar. You can search all of Postman, your team, the [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/#search-for-elements-in-the-network), and the Public API Network. You can also specify the element type you'd like to search for, such as **Workspaces**, **Collections**, or **Teams**.

You can search by tag names that team members have added to [collections](/docs/collections/using-collections/#tagging-a-collection), [APIs](/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace) ([Enterprise plans only](https://www.postman.com/pricing)). To search by tag names, select __Search Postman__ in the header then enter your search using the `tag:tag-name` format. For example, if an API has the tag "production", enter `tag:production` to return the API in your search results.

> For signed-out users, search results only include public resources.

If you don't find what you are looking for in the list of results, select __See all results__ to see all the results in one page.

<img alt="Search all" src ="https://assets.postman.com/postman-docs/v10/search-all-workspaces-collections-and-teams-v10.jpg"/>

The __Search results__ page lists the scope and element type. You can change these options to further filter your results.

You can also sort results using __Sort by__ on the right by selecting _Most relevant_ (default), _Most views_, or _Most recent_.

Depending on the element type, the search results contain different information:

* For _workspaces_, the search result shows the workspace type, summary, who published it, and when was it published.
* For _collections_, the search result shows the workspace type, whether the collection is a fork or not, who published it, and when was it published.
* For _APIs_, the search result shows the name and summary of the API, the API's owner (either an individual user or a team), and the workspace type.
* For _teams_, the search result shows the name and summary of the team. Selecting the team name redirects you to the team profile.

## Sidebar

The Postman sidebar provides access to the fundamental elements of Postman:

* [Collections](/docs/getting-started/first-steps/creating-the-first-collection/)
* [APIs](/docs/designing-and-developing-your-api/creating-an-api/)
* [Environments](/docs/sending-requests/variables/managing-environments/)
* [Mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/)
* [Monitors](/docs/monitoring-your-api/intro-monitors/)
* [Flows](/docs/postman-flows/gs/flows-overview/)
* [History](#history)

<img alt="Sidebar focused on Collections" src="https://assets.postman.com/postman-docs/v10/navigating-postman-sidebar-v10.14.jpg" width="350px"/>

To see the task options that are available for elements in the sidebar, select the element's name then select the more options icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px">. The task options will vary depending on the type of element you've selected.

For collections, folders and requests inside a collection, and requests in History, you can select more than one element at a time. Press and hold **⌘** or **Ctrl**, then select the desired elements. For elements that are next to each other, press and hold **Shift**, then select the desired elements. For collections and their contents, you can also use [keyboard shortcuts](/docs/getting-started/installation/settings/#shortcuts) for tasks like copying, pasting, and deleting.

You can select **New** in the sidebar to create requests, collections, and other common Postman elements. Select an element to create it in your workspace. You can also pin the elements you use most often. To pin an element, hover over an element and select the pin element icon <img alt="Pin element icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-element-v10.jpg#icon" width="17px">. To unpin an element, hover over the pinned element and deselect the pin element icon <img alt="Unpin element icon" src="https://assets.postman.com/postman-docs/v10/icon-unpin-element-icon-v10.jpg#icon" width="17px">.

<img src="https://assets.postman.com/postman-docs/v10/create-new-pin-elements-v10-1.jpg" alt="Pin elements" width="500px"/>

To hide the sidebar, select the hide sidebar icon <img alt="Hide sidebar icon" src="https://assets.postman.com/postman-docs/icon-hide-sidebar-v9.jpg#icon" width="18px"> from the [footer](#footer) or right-click in an empty part of the sidebar and select **Collapse sidebar**.

By default, the sidebar hides empty elements other than **Collections**, **Environments**, and **History**. Select the Add elements to sidebar icon <img alt="Add elements to sidebar icon" src="https://assets.postman.com/postman-docs/v10/icon-add-elements-to-sidebar-v10.14.jpg#icon" width="18px"> to open **Workspace settings** where you can specify which sidebar elements to show or hide. Right-click on the sidebar for options to show/hide labels, collapse the sidebar, and configure the sidebar.

### History

To access the requests you've made, select __History__ in the sidebar. When you're signed in to Postman, your history [syncs](/docs/getting-started/basics/syncing/) across your devices.

Select a request to open it again in a new tab. To select more than one request, press and hold **⌘** or **Ctrl**, then select the requests.

<img alt="History Request" src="https://assets.postman.com/postman-docs/v10/history-request-v10.14.jpg" width="350px"/>

Your history also includes [collection runs](/docs/collections/running-collections/intro-to-collection-runs/). These remain as the summarized version of the run and aren't logged as single requests.

* Select the add icon __+__ to save the request to a collection.
* Select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> to remove the request from your history.
* Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> to access other actions, including creating a monitor, documentation, or mock server for the request.

> When you make requests in a [shared workspace](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/), your request history is visible to you but not to other team members in the workspace.

#### Clearing your history

To remove all requests from your history, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> next to the History search bar, then select **Clear all**.

#### Saving responses in history

To save request responses in your history, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px"> next to the History search bar, then turn on **Save Responses**.

> You can't use the __Save Responses__ option with requests from [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/).

## Workbench

Whether you're working with a collection, an API, or another element type, the Postman workbench is where you do the majority of your work. [Tabs](#tabs) enable you to organize your work, while the [right sidebar](#right-sidebar) gives you access to element-specific tools like documentation. The [environment selector and environment quick look](#environment-selector-and-environment-quick-look) enable you to manage variables.

### Tabs

Tabs allow you to organize and work between requests.

> This section describes how tabs work in the Postman desktop app. By default, tabs in the Postman web app work this way as well. You can choose to use browser tabs instead, which enables you to use a different tab for each open Postman element. For more information, see [Browser tabs in the Postman web app](#browser-tabs-in-the-postman-web-app).

#### Opening a new tab

To open a new tab, select __+__ in the workbench.

> You can also select **⌘+T** or **Ctrl+T** to open a new tab.

<img alt="Open a new tab" src="https://assets.postman.com/postman-docs/v10/open-new-tab-v10-21-11.jpg" width="216px"/>

If you open a request and don't edit or send it, then open another request, the second tab replaces the first tab. When the tab is in preview mode, it displays in italics.

You can set whether Postman opens requests and other sidebar items in new tabs. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**. Under **User interface**, select **Always open sidebar items in new tab** to turn this option on or off.

#### Saving or discarding changes

If a tab has unsaved changes, Postman displays a dot next to the tab name. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save the changes. To close the tab and discard changes, select the close icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> then select **Don't save**.

#### Renaming and linking elements

To rename an element, select the element's name and enter a new name.

<img alt="Rename elements" src="https://assets.postman.com/postman-docs/v10/rename-element-v10-21-11.jpg" width="212px"/>

To copy a link to an element, hover over the element's name in the workbench to display the link icon <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px">. Select the link icon to copy the element's URL to your clipboard.

<img alt="Copy link to elements" src="https://assets.postman.com/postman-docs/v10/copy-link-to-element-v10-21-11.jpg" width="215px"/>

If the element is in a personal workspace that no one can access, a popup window will display when you select the link icon. The popup window enables you to invite people to your personal workspace before sharing the link. To invite people to your personal workspace, select **Invite People**. To learn more about inviting people to collaborate in a workspace, see [Sharing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#sharing-workspaces).

<img alt="Invite people before sharing link to element" src="https://assets.postman.com/postman-docs/v10/copy-link-to-element-invite-v10-21-11.jpg" width="332px"/>

#### Viewing conflicts

If you are making changes to the same request in two different tabs, before you can save the changes, the tab alerts you to a conflict. Selecting the tab displays a message that the request was modified since the last time you opened the tab. By selecting **Save**, you can either override the previous change or save the request as a new one.

<img alt="Tab displaying a conflict" src="https://assets.postman.com/postman-docs/v10/tab-conflict-v10-21-11.jpg" width="247px"/>

#### Managing tabs

You can have many tabs open at the same time. To rearrange your open tabs, select and drag them in the desired order.

To manage your open tabs, right-click the open tab to activate a menu with action options:

* **Duplicate Tab** - _(Available on the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/))_ Duplicates the current tab. This doesn't create a copy of the request, so when you duplicate a tab any edits you make are reflected in the original request.
* **Close Tab** - Closes the current tab. If the tab has unsaved changes, Postman asks if you want to save before closing.
* **Force Close Tab** - Closes the current tab without saving any changes.
* **Close Other Tabs** - Closes all tabs except the one you're working in.
* **Close All Tabs** - Closes all tabs. If any tabs contain unsaved changes, Postman will ask if you want to save before closing.
* **Force Close All Tabs** - Closes all tabs without saving any changes.

<img alt="Manage tabs using the actions menu" src="https://assets.postman.com/postman-docs/v10/manage-tabs-v10-21-11.jpg" width="235px"/>

> **Closing unsaved tabs.** You can set whether Postman asks you to save when you close a tab that has changes. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**. Under **General > Request**, select **Always ask when closing unsaved tabs** to turn this option on or off.

If you have a lot of tabs open, they might overflow the area of the tab bar. To go to tabs that are outside the viewable area, select the arrows next to the tab bar.

<img alt="Scroll to view tabs" src="https://assets.postman.com/postman-docs/tab-navigation-scroll.jpg" width="553px"/>

#### Tab search

To search open tabs or access recently closed tabs, select the tab search dropdown list.

<img alt="Search tabs" src="https://assets.postman.com/postman-docs/v10/tab-search-v10-21-11.jpg" width="301px"/>

#### Browser tabs in the Postman web app

By default, the Postman web app uses in-app tabs like the Postman desktop app does. You can optionally choose to use browser tabs instead. With this setting turned on, there is only one collection overview or request in the main work area at a time, and you can open more Postman elements in new browser tabs. This enables you to work across workspaces or to use different environments in the same workspace.

If you've saved changes to a request, when you select a new element Postman will open it in the main work area area. If the request has unsaved changes, Postman will prompt you to save or discard your changes.

To open a workspace, environment, or request in a new browser tab, press and hold **⌘+Shift** or **Ctrl+Shift** and select the element you want to open.

To open an in-app link in a new browser tab, press and hold **⌘** or **Ctrl** and select the link you want to open.

To turn this behavior on or off in the Postman web app, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header, then select **Remove tabs** in the **User interface** section.

### Right sidebar

The right sidebar gives you access to more tools, including documentation, comments, code snippets, and request information, based on which kind of Postman element you select.

<img alt="Postman right sidebar showing Documentation view" src="https://assets.postman.com/postman-docs/v10/navigating-postman-right-sidebar-v10.jpg" width="400px"/>

Tool | Available for | Description
--- | --- | ---
**Documentation** <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> | Requests | View the [documentation](/docs/publishing-your-api/document-a-collection/) for a specific request.
**Comments** <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> | Collections, requests, APIs | Leave [comments](/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/) on a specific part of a request or an API.
**Code** <img alt="Code snippet icon" src="https://assets.postman.com/postman-docs/icon-code-snippet.jpg#icon" width="16px"> | Requests, APIs, history | Generate [code snippets](/docs/sending-requests/create-requests/generate-code-snippets/) in a variety of languages and frameworks that you can use in other apps.
**Related requests** <img alt="Related requests icon" src="https://assets.postman.com/postman-docs/v11/icon-related-request.jpg#icon" width="16px"/> | Requests, history | View public requests from verified or popular collections on the [Public API Network](/docs/getting-started/first-steps/exploring-public-api-network/) that are related to your request.
**Info** <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> | Collections, requests, APIs, environments, mock servers, monitors, Flows | See details about the element, including its ID, when it was created, who created it, and more.
**Changelog** <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> | Collections, APIs | Use the [changelog](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#viewing-collection-activity) to see changes that you and your collaborators have made. Available on [Postman paid plans](https://www.postman.com/pricing/).
**Pull requests** <img alt="Pull request icon" src="https://assets.postman.com/postman-docs/icon-pull-request.jpg#icon" width="16px"> | Collections, environments | View any [pull requests](/docs/collaborating-in-postman/version-control/#creating-pull-requests) for a Postman element.
**Forks** <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> | Collections, environments, Flows | View any [forks](/docs/collaborating-in-postman/version-control/#forking-postman-elements) of a Postman element.
**Activity feed** <img alt="Activity feed icon" src="https://assets.postman.com/postman-docs/icon-activity-feed-v9.jpg#icon" width="16px"> | Monitors | View the activity feed for a [monitor](/docs/monitoring-your-api/intro-monitors/).
**Flow Element Info** <img alt="Flow Element Info icon" src="https://assets.postman.com/postman-docs/v10/flow-element-info-v10.jpg#icon" width="21px"> | Flows | View the input and output of the selected block.
**Released Versions** <img alt="Released Versions icon" src="https://assets.postman.com/postman-docs/v10/released-versions-v10.jpg#icon" width="21px"> | Flows | View your released Flows.
**Execution issues** <img alt="Execution issues icon" src="https://assets.postman.com/postman-docs/v10/execution-issues-v10.jpg#icon" width="21px"> | Flows | View a Flow's execution issues, if any.

### Environment selector and environment quick look

The environment selector enables you to choose which [environment](/docs/sending-requests/variables/managing-environments/) to use in your work. Select an environment from the menu to set it as the active environment, which gives you access to the variables in that environment.

<img src="https://assets.postman.com/postman-docs/v10/environment-selector-v10.jpg" alt="Environment selector" width="200px">

To check a variable value at a glance, use the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px">.

### Quick Help

If you have a quick question about something in the Postman app, look for "learn more" help links or the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the Workbench. These will open context-sensitive help from the Postman Learning Center in a side pane in the Postman app.

You can open the displayed Quick Help in a new web browser window with the open in icon <img alt="Open in icon" src="https://assets.postman.com/postman-docs/icons/icon-open-in.jpg#icon" width="16px">.

## Footer

The footer on the bottom of Postman enables you to find and replace text, open the Console, capture requests and cookies, and access several other tools.

<img alt="Postman footer left view" src="https://assets.postman.com/postman-docs/navigating-postman-footer-left-v9.19.jpg" width="300px"/>

* <img alt="Hide sidebar icon" src="https://assets.postman.com/postman-docs/icon-hide-sidebar-v9.jpg#icon" width="18px"> **Hide sidebar** - Close or reopen the [sidebar](#sidebar).
* <img alt="Checkmark icon" src="https://assets.postman.com/postman-docs/icon-checkmark-v9.jpg#icon" width="16px"> **Sync status** - See if you are connected to Postman's servers and your data is [syncing](/docs/getting-started/basics/syncing/).
* <img alt="Search icon" src="https://assets.postman.com/postman-docs/icon-search-v9.jpg#icon" width="16px"> **Find and replace** - _(Available on the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/))_ Search the current workspace. You can also use the shortcuts **⌘+Shift+F** or **Ctrl+Shift+F**. Enter your search string then select **Find**. Limit your search to a specific element type by selecting **Collections**, **Environments**, **Globals**, or **Open tabs**. To replace your search term in a selected element, select **Replace in selected**.
* <img alt="Console icon" src="https://assets.postman.com/postman-docs/icon-console-v9.jpg#icon" width="16px"> **Console** - [Inspect and debug](/docs/sending-requests/response-data/troubleshooting-api-requests/#debugging-in-the-console) your Postman requests.

<img alt="Postman footer right view" src="https://assets.postman.com/postman-docs/v10/navigating-postman-footer-right-v10-18.jpg" width="900px"/>

* <img alt="Postbot icon" src="https://assets.postman.com/postman-docs/v10/icon-postbot-v10-16.jpg#icon" width="18px"> **Postbot** - Open the [Postbot](/docs/getting-started/basics/about-postbot/) AI assistant to ask questions and search for answers.
* <img alt="Git branch icon" src="https://assets.postman.com/postman-docs/icon-source-control.jpg#icon" width="16px"/> **Git branch icon** - For [APIs using a Git repository](/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/), switch branches and open the **Source Control** pane.
* <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Runner** - Open the [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/).
* **Select Postman Agent** - _(Available on the Postman web app)_ Select which [Postman Agent](/docs/getting-started/basics/about-postman-agent/) is used: the Cloud Agent, Desktop Agent, Browser Agent, or auto-select an agent.
* <img alt="Capture icon" src="https://assets.postman.com/postman-docs/icon-capture.jpg#icon" width="15px"> **Start Proxy** - _(Available on the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/))_ Start the [Postman proxy](/docs/sending-requests/capturing-request-data/capture-overview/).
* <img alt="Cookies icon" src="https://assets.postman.com/postman-docs/icon-cookies.jpg#icon" width="16px"> **Cookies** - View, manage, and sync [cookies](/docs/sending-requests/response-data/cookies/).
<!-- * <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-vault.jpg#icon" width="12px"> **Vault** - Store secrets locally in your [Postman Vault](/docs/sending-requests/postman-vault-secrets/). -->
* <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> **Trash** - Recover or permanently delete any deleted collections.
* <img alt="Two pane view icon" src="https://assets.postman.com/postman-docs/icon-two-pane-v9.jpg#icon" width="16px"> **Two-pane view** - Toggle between a single pane view and a two pane view.
* <img alt="Help icon" src="https://assets.postman.com/postman-docs/icon-help-v9.jpg#icon" width="16px"> **Help** - Access more resources, including release notes and Postman Support.
