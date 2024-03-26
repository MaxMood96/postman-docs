---
title: "Select values using Postman Flow blocks"
updated: 2023-11-22
---

API requests often return a lot of information. In many cases, when using the information to perform a task, only some values are used. This is where the **Select** block is useful for picking one value at a time to work with.

## Contents

* [Selecting information using the Select block](#selecting-information-using-the-select-block)
* [Using the results](#using-the-results)

## Selecting information using the Select block

Use the **Select** block when more than one value is returned. It's almost always used after a **Send Request** block because **Send Request** blocks always return more than one value.

<img src="https://assets.postman.com/postman-docs/v10/adding-a-select-block-v10-20.gif" alt="Select block" fetchpriority="low" loading="lazy" />

You can also create a **Select** block by dragging and dropping output data from a **Send Request** or **Output** block. The new **Select** block automatically selects the data you dragged and dropped.

<img src="https://assets.postman.com/postman-docs/v10/flows-drag-and-drop-v10-20.gif" alt="Select block" fetchpriority="low" loading="lazy" />

Connecting a **Select** block to a block that has already run or to a request that has a [saved example](/docs/sending-requests/response-data/examples/) displays a menu where you can select the value you want to use. This example (which uses the currency conversion API from our spotlight examples) selects `eur`, which automatically generates the structure to get that value. In this case, the request returns a set of data called `body`, which holds the two `date` and `eur` values. All requests have a data set named `body`, but the structure after that is different depending on the API being used.

## Using the results

After selecting the value you want, that information will be the **Select** block's output.

Add an **Output** block to show information in various formats (like images, videos, graphs, and [more](/docs/postman-flows/reference/visualizing-data/)) directly on the canvas when you run the Flow.

<img src="https://assets.postman.com/postman-docs/v10/flows-variable-with-output-v10-20.gif" alt="View the value with an Output block" fetchpriority="low" loading="lazy" />
