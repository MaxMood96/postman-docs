---
title: "Send data between blocks in a Postman Flow"
updated: 2023-11-22
---

A typical Flow often involves making a request, and then doing something with the result of that request. To do this, Flows pass information between blocks to perform tasks.

## Contents

* [Using one block's output as another block's input](#using-one-blocks-output-as-another-blocks-input)
* [Blocks inside of other blocks](#blocks-inside-of-other-blocks)

### Using one block's output as another block's input

Once data is selected, it can be used with other blocks. Sending it to an **Output** block is great for seeing that the request worked, but it doesn't actually do anything with the value.

<img src="https://assets.postman.com/postman-docs/v10/flows-using-selected-data-v10-20.gif" alt="Using selected data" fetchpriority="low" loading="lazy" />

Adding another **Send Request** block and then dragging a connection to its `value1` and `value2` variable inputs lets the request use the value for `eur` and `date` that was returned in the first request.

You can also create a **Select** block by dragging and dropping output data from a **Send Request** or **Output** block. The new **Select** block automatically selects the data you dragged and dropped.

<img src="https://assets.postman.com/postman-docs/v10/flows-drag-and-drop-v10-20.gif" alt="Select block" fetchpriority="low" loading="lazy" />

### Blocks inside of other blocks

You may have noticed in the previous step that the **Send Request** block has a variable named `value1` that's using a **Select** block with no value set. When this happens, it's selecting everything that's being sent to it (which in this case is `eur`).

This Flow can be simplified to remove the extra **Select** block and instead use the existing ones in the second **Send Request** block.

<img src="https://assets.postman.com/postman-docs/v10/flows-simplify-the-flow-v10-20.gif" alt="Simplifying the Flow" fetchpriority="low" loading="lazy" />
