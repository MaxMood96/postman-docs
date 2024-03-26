---
title: "Create a dashboard using Postman Flows"
updated: 2023-08-07
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

Many people find dashboards useful for visualizing and simplifying large amounts of data. For example, you might create an internet of things dashboard that displays information about your home's thermostat, door locks, security cameras, and environmental sensors. Or you might want a dashboard that compares a stock's price to a market index to evaluate the stock's performance. The dashboard could visualize data with a true/false display and a line chart.

This tutorial shows you how to create this stock performance dashboard using test data from a Postman mock server.

You can see the completed Flow [here](https://www.postman.com/postman/workspace/utility-flows/flow/64123b57c224290033fcb089).

## Contents

* [Goal](#goal)
* [Creating the Flow](#creating-the-flow)
* [Prerequisites](#prerequisites)

## Goal

Create a Flow that quantifies a stock's performance by comparing it to a market index.

## Prerequisites

* A [Polygon.io](https://polygon.io/) account.
* A Polygon.io API key.

## Creating the Flow

1. Begin by [forking](/docs/collaborating-in-postman/using-version-control/forking-elements/) (copying) the [**stocks** collection](https://www.postman.com/postman/workspace/utility-flows/collection/23919558-b45b34a3-8289-42f2-98e5-df043c863ea1?action=share&creator=21580188) and the [**stocks-tutorial** environment](https://www.postman.com/postman/workspace/utility-flows/environment/21580188-07226525-53d7-40ca-b9d3-6cac35c39306) from the [**Utility Flows**](https://www.postman.com/postman/workspace/utility-flows/flows) workspace to your workspace. In your fork of the **stocks-tutorial** environment, replace `<your-api-key>` with your Polygon.io API key and select **Save**.

    * Create a new Flow and connect three **Send Request** blocks to the **Start** block.

    <img src="https://assets.postman.com/postman-docs/v10/flows-tut-db-3sends-v10-5.gif" alt="Add three Send blocks" fetchpriority="low" loading="lazy" />

    * In the first two **Send Request** blocks, select the **get the close price** request. In the third **Send Request** block, select the **get stock SMA** request.

    * In the first **Send Request** block, select the `stocks-tutorial` environment. Flows prompts you to select the same environment for the other two **Send Request** blocks. Select **Update All**.

    <img src="https://assets.postman.com/postman-docs/v10/flows-tut-db-select-environment-v10-1.gif" alt="Select the environment" fetchpriority="low" loading="lazy" />

    * Add a **String** block to assign the `VOO` market index to the `ticker` variable in the first request. The Flow will compare your stock's performance to this index to check if your stock is outperforming the market.

    * Add another **String** block to assign `AAPL` to the `ticker` variables in the second and third **Send Request** blocks.

    ![Dashboard Flow - step 1](https://assets.postman.com/postman-docs/v10/flows-tut-db-step1-v10-1.jpg)

1. Connect an **Evaluate** block to the first **Send Request** block. Change `value` to `benchmark` and select `body`.

    * In the FQL window, enter `((benchmark.close - benchmark.open) / benchmark.open) * 100`. This will get a percentage of the difference between the `VOO` index's open and close price.

    * Connect another **Evaluate** block to the **Evaluate** block you created. In the FQL window, enter `value2 > value1`. You'll add `value2` in a later step.

    * Connect an **Output** block to the `value2 > value1` **Evaluate** block and select **Boolean** from the dropdown list.

    ![Dashboard Flow - step 2](https://assets.postman.com/postman-docs/v10/flows-tut-db-step2-v10.jpg)

1. Go back to the second **Send Request** block and connect an **Evaluate** block to it. In this new **Evaluate** block, change `value1` to `yours` and select `body`. In the FQL window, enter `((yours.close - yours.open) / yours.open) * 100` to get a percentage of the difference between this stock's open and close price.

    * Connect this block's **Result** output to the `key` input on the `value2 > value1` block. Flows automatically renames the variable `value2`.

    ![Dashboard Flow - step 3](https://assets.postman.com/postman-docs/v10/flows-tut-db-step3-v10.jpg)

1. Connect the `yours` **Evaluate** block to a new **Output** block and select **Gauge** from the dropdown list. Set the **Gauge** output block's minimum value to `-5` and its maximum value to `5`.

    <img src="https://assets.postman.com/postman-docs/v10/flows-tut-db-configure-gauge-v10.gif" alt="Configure the gauge" fetchpriority="low" loading="lazy" />

    * Connect the `AAPL` **String** block with to an **Output** block and rename the **Output** block `Your ticker`.

    ![Dashboard Flow - step 4](https://assets.postman.com/postman-docs/v10/flows-tut-db-step4-v10.jpg)

1. Go back the third **Send Request** block and connect a **Select** block to it. In the **Select** block, select `body.results.values`. Connect an **Evaluate** block to the **Select** block and rename `value1` to `list`. In the FQL window, enter `$reverse(list)`. This arranges the dates in the results in chronological order.

    * Connect a **For** block to the `$reverse(list)` **Evaluate** block, then connect an **Evaluate** block to the **For** block. In the **Evaluate** block, change `value1` to `item`. In the FQL window, enter `$month(item.timestamp) & '-' & $day(item.timestamp)`. This converts timestamps in the results to a readable date format. Connect a **Collect** block to the **Evaluate** block's **Result** output.

    * Connect another **Evaluate** block to the `$reverse(list)` **Evaluate** block and rename `value1` to `list`. In the FQL window, enter `list.value`.

    ![Dashboard Flow - step 5](https://assets.postman.com/postman-docs/v10/flows-tut-db-step5-v10-1.jpg)

1. Create a **List** block and add two **Select** blocks to it. Connect the `list.value` **Evaluate** block to the **List** block's `0` input. Connect the **Collect** block's **List** output to the **List** block's `1` input.

    <img src="https://assets.postman.com/postman-docs/v10/flows-tut-db-list-block-v10-2.gif" alt="Add a List block" fetchpriority="low" loading="lazy" />

    * Connect the **List** block's output to an **Output** block. select **Line Chart** from the dropdown list and rename the block `Simple moving average`.

    ![Dashboard Flow - step 6](https://assets.postman.com/postman-docs/v10/flows-tut-db-step6-v10-1.jpg)

1. Run the Flow and check your dashboard of **Output** blocks to see your stock ticker, if your stock is outperforming or underperforming the market, how much it's outperforming or underperforming, and a chart showing the stock's simple moving average.

    <img src="https://assets.postman.com/postman-docs/v10/flows-tut-db-run-v10-3.gif" alt="Run the Flow" fetchpriority="low" loading="lazy" />
