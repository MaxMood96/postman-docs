---
title: "Fork collections, environments, and Flows in Postman"
updated: 2023-10-20
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Version Control for Collections | Postman Level Up"
    url: "https://www.youtube.com/watch?v=QKxukXJWRPI&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=7"
  - type: link
    name: "Fork a Flow | Postman Flows"
    url: "https://youtu.be/hUNZW1eHaaE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Environment Forking and Pull Requests"
    url: "https://blog.postman.com/introducing-environment-forking-and-pull-requests/"
  - type: link
    name: "Streamline the API Development Lifecycle with Postman Version Control"
    url: "https://blog.postman.com/streamline-api-development-lifecycle-with-postman-version-control/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Youi"
    url: "https://www.postman.com/case-studies/youi/"
---

A _fork_ is a new instance of an element that you can change without making any changes to the parent element. In Postman, you can fork collections, environments, and Flows. Forking enables you to contribute to an element without having [Editor access](/docs/collaborating-in-postman/roles-and-permissions/#element-based-roles) for that element.

## Contents

* [Create a fork](#create-a-fork)
* [Edit a fork's name or label](#edit-a-forks-name-or-label)
* [View fork information](#view-fork-information)
* [Pull updates from a parent element](#pull-updates-from-a-parent-element)
* [Merge changes from a fork](#merge-changes-from-a-fork)
* [Resolve conflicts from a fork](#resolve-conflicts-from-a-fork)

## Create a fork

> To fork a collection, environment, or Flow within a public workspace, you must enable your public profile in your [profile settings](https://go.postman.co/settings/me). For more information on making your profile public, see [Making your profile public](/docs/getting-started/installation/postman-profile/#making-your-profile-public).

When you fork a Postman Collection, environment, or Flow, you create a copy of it in a different workspace. You must sign in to Postman to create a fork.

To fork an element, do the following:

1. Select the element in the sidebar.
2. In the overview tab that appears, select <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> **Fork** in the upper right.

    > You can also create a fork by hovering over the element in the sidebar and selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to its name, then **Create a Fork**.

3. Enter a label for your fork, and select a workspace to save it to.
4. Select **Fork Collection**, **Fork Environment**, or **Fork Flow**.

    <img src="https://assets.postman.com/postman-docs/v10/fork-collection-v10.jpg" alt="Create fork tab" width="400px"/>

Postman creates your fork in the selected workspace.

If there are any [mocks](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) or [monitors](/docs/monitoring-your-api/intro-monitors/) associated with the parent element, they aren't linked to the forked element. You must create mocks and monitors specifically for the fork if you need them.

> If a collection is in a public workspace that you haven't been added to, you won't be able to send a request within that workspace. To send requests or make changes to a collection, you must fork the collection into a personal workspace or a team workspace that you belong to.

## Edit a fork's name or label

To change a forked element's name or label, do the following:

1. Select the fork in the sidebar.
1. In the overview tab that appears, select the fork's name or label to edit it.
1. Select anywhere outside the name or label to save your changes.

## View fork information

Fork information shows details about forks and the users who have created them. You will be able to identify the users who are actively consuming and contributing to your APIs.

To view a list of users who have forked a collection, environment, or Flow, select the number next to the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px">.

<img alt="View the fork information count" src="https://assets.postman.com/postman-docs/v10/fork-information-count-v10.jpg" width="500px"/>

To access the list of forks for a collection, environment, or Flow, do the following:

1. Select the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> in the right sidebar.
1. Select the fork name under **Forks**.

    > You can also select the user's avatar under **Forks** to view the user's public profile.

    <img alt="View the list of forks" src="https://assets.postman.com/postman-docs/v10/fork-information-list-v10.jpg" width="350px"/>

## Pull updates from a parent element

> Forked Flows don't support pulling updates.

You can pull updates from a parent element into a fork without going through the [pull request process](/docs/collaborating-in-postman/using-version-control/creating-pull-requests/).

1. Hover over the fork in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to its name.
1. Select **Pull changes**.
1. Review the diff and select **Pull changes**.

    <img alt="Pull changes into fork" src="https://assets.postman.com/postman-docs/v10/pull-changes-v10.jpg"/>

To pull updates from a parent element during the pull request process, see [Pulling updates during a pull request](/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/#pulling-updates-during-a-pull-request).

## Merge changes from a fork

> Forked Flows don't support merging changes.

If you have Editor access on the element, you can _merge_ a fork into the parent element without going through the [pull request process](/docs/collaborating-in-postman/using-version-control/creating-pull-requests/). For example, if you’re using forks in a personal workspace to organize your work, you can merge changes in a fork directly back into the parent element. If you're collaborating with others, though, merging directly lacks the safeguards built into the pull request process. Many teams require pull requests as part of their [version control workflow](/docs/collaborating-in-postman/using-version-control/creating-pull-requests/).

To merge changes from a fork without opening a pull request, do the following:

1. Hover over the fork in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to its name.

1. Select **Merge changes**.
1. Review the diff and select **Merge all changes**.

    ![Merge Fork](https://assets.postman.com/postman-docs/v10/merge-fork-collection-change-v10.jpg)

1. Select one of the following merge options:
    * **Merge changes** - Merge the changes into the parent element. This doesn't make any changes to the fork. You must have Editor access to the parent element.
    * **Merge changes and update source** - Merge the changes into the parent element. Any differences in the parent element are also made to the fork. You must have Editor access to both the parent and forked elements.
    * **Merge changes and delete source** - Merge the changes into the parent element. After the merge process is complete, Postman deletes the fork. You must have Editor access to both the parent and forked elements.

    <img src="https://assets.postman.com/postman-docs/merge-fork-options-v9.12.jpg" alt="Merge Fork Options" width="400px"/>
1. Select **Merge**.

To merge changes during the pull request process, see [Merging changes from a pull request](/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/#merging-changes-from-a-pull-request).

## Resolve conflicts from a fork

> Forked Flows don't support resolving conflicts.

A merge conflict happens when you try to merge changes into an updated parent element and Postman isn't able to automatically resolve the differences between the two. If there's a conflict when you try to merge a fork, you'll need to decide how you want to resolve it before continuing.

> Merge conflicts can involve changes in more than one workspace.

To resolve a merge conflict from a fork, do the following:

1. Begin the merge process described in [Merge changes from a fork](#merge-changes-from-a-fork).
1. Select **Pull the changes** for any conflict.

    <img src="https://assets.postman.com/postman-docs/v10/conflicts-pull-changes-v10-2.jpg" alt="Pull Changes"/>

1. For each conflict, choose the version you want to include when you merge. Select **Keep Source** to keep the change on the parent element. Select **Keep Destination** to keep the change on your fork. You can also select the version you want to keep for each conflict.

    <img src="https://assets.postman.com/postman-docs/v10/conflicts-keep-source-or-destination-v10-2.jpg" alt="Pull Changes"/>

> To keep all changes on your fork, select **Keep all changes to source**. To keep all changes on the parent element, select **Keep all changes to destination**.

After you resolve the conflicts, select **Pull changes** to [pull the updates](#pull-updates-from-a-parent-element).
