---
title: "Visualize data in Postman Flows"
updated: 2023-06-28
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Create Charts, Tables, and Output | Postman Flows"
    url: "https://youtu.be/8zWlY4W7SWE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

The **Output** block accepts information from other blocks and creates a visualization of that information. You can select from several visualization types.

<img alt="Output block" src="https://assets.postman.com/postman-docs/v10/stock-charts-v10.gif" fetchpriority="low" loading="lazy"/>

This image shows four types of output visualization types: line chart, text, gauge, and boolean. The following tutorials show how to create each of these visualization types. You can also find links to example Flows for other visualization types in the [Visualization types with example Flows](#visualization-types-with-example-flows) section.

For examples of how to use **Output** blocks in your Flows, see the [Stock Dashboard](https://www.postman.com/postman/workspace/utility-flows/flow/64123b57c224290033fcb089) and [WordPress Sentiment Analysis](https://www.postman.com/postman/workspace/utility-flows/flow/6413acdb8c4c54003a4ad611) Flows.

## Contents

* [Line chart](#line-chart)
* [Text](#text)
* [Gauge](#gauge)
* [Boolean](#boolean)
* [Visualization types with example Flows](#visualization-types-with-example-flows)

## Line chart

The **Line Chart** visualization type accepts two lists and plots them on x and y axes in a chart. The first list received is the x axis, and the second list is the y axis.

To create an example line chart **Output** block, do the following:

1. Create a new Flow, enter the data below in the **Start** block, and select `JSON` from the dropdown list:

    ```json
    {
    "List 1": [10, 20, 30, 40, 50, 60, 70],
    "List 2": [100, 200, 300, 400]
    }
    ```

1. Connect a **Select** block to the **Start** block and select **List 1**.
1. Connect another **Select** block to the **Start** block and select **List 2**.
1. Connect both **Select** blocks to a single **Output** block.
1. In the **Output** block's dropdown list, select **Line chart** and run the Flow. A line chart appears with the data on their respective axes.

    ![Line chart visualization type](https://assets.postman.com/postman-docs/v10/flows-line-chart-v10.jpg)

## Text

When an **Output** block receives a string, it automatically selects the **Text** visualization type and shows the text.

To create an example text **Output** block, do the following:

1. Create a new Flow and add a **Send request** block with a GET request to `postman-echo.com/get`.
1. Connect a **Select** block to the **Send request** block and enter `body.headers.host`. This selects a string from the response.
1. Connect an **Output** block to the **Select** block and run the Flow. The **Output** block shows the `body.headers.host` string from the response, which in this example is `postman-echo.com`.

    ![Text visualization type](https://assets.postman.com/postman-docs/v10/flows-text-v10.jpg)

## Gauge

The **Gauge** visualization type shows a value's position in a range using a half-pie chart.

To create an example gauge **Output** block, do the following:

1. Create a new Flow and add a **Send request** block with a GET request to `techcrunch.com/wp-json/wp/v2/posts`.
1. Connect an **Evaluate** block to the **Send request** block and enter this [FQL](/docs/postman-flows/flows-query-language/introduction-to-fql/) query: `$count(value1.body)` to count how many items the response body has.
1. Connect an **Output** block to the **Evaluate** block and select **Gauge** from the dropdown list.
1. Run the Flow. The gauge shows the number of items in the response body as the shaded part of the graph.

    > To set the minimum and maximum values for the gauge, select the **Output** block's settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px">.

    ![Gauge visualization type](https://assets.postman.com/postman-docs/v10/flows-gauge-v10.jpg)

## Boolean

When an **Output** block receives a message that's either true or false, it automatically selects the **Boolean** visualization type, showing **True** or **False**.

To create an example boolean **Output** block, do the following:

1. Create a new Flow and add a **Send request** block with a GET request to `postman-echo.com/get`.
1. Connect an **Evaluate** block to the **Send request** block and enter this [FQL](/docs/postman-flows/flows-query-language/introduction-to-fql/) query: `value1.http.status = 200` to check if the response has a `200` status code.
1. Connect an **Output**  block to the **Evaluate** block and run the Flow. If the response has a `200` status code, the **Output** block shows a circle that says **True**. If not, the circle shows **False**.

    ![Boolean visualization type](https://assets.postman.com/postman-docs/v10/flows-boolean-v10.jpg)

## Visualization types with example Flows

You can select the output formats listed below from the **Output** block's dropdown menu. Select the **Example** links to open Flows in Postman that show each output format.

* **Text** - Shows the information connected to the input as lines of text. [Text example](https://www.postman.com/postman/workspace/flows-snippets/flow/6414e20b95e5e70033f028c9)

* **Number** - Displays an integer, if the information connected to the input is a number. [Number example](https://www.postman.com/postman/workspace/flows-snippets/flow/6414e8eb95e5e70033f028d4)

* **Boolean** - Shows a true or false value. If the value connected to the input isn't true/false or 0/1, it always displays true. [Boolean example](https://www.postman.com/postman/workspace/flows-snippets/flow/6414ebb88c4c54003a4ad797)

* **JSON** - Shows the information connected to the input in JSON format, enabling you to view and select data. [JSON example](https://www.postman.com/postman/workspace/flows-snippets/flow/6414ec507221e9003a7a5384)

* **Bar Chart** - Shows one or more sets of information connected to the input. [Bar chart example](https://www.postman.com/postman/workspace/flows-snippets/flow/6411f07120794b0039e76839)

* **Line Chart** - Shows a line for X and Y coordinates connected to the input. [Line chart example](https://www.postman.com/postman/workspace/flows-snippets/flow/641242fd8c4c54003a4ad507)

* **Gauge** - Shows a number when the input is a percentage. [Gauge example](https://www.postman.com/postman/workspace/flows-snippets/flow/64124134c224290033fcb08b)

* **Table** - Shows the connected input as a table with rows and columns. [Table example](https://www.postman.com/postman/workspace/flows-snippets/flow/64124607c224290033fcb092)

* **Markdown** - Shows the text with all of the Markdown annotations displayed. [Markdown example](https://www.postman.com/postman/workspace/flows-snippets/flow/641249577221e9003a7a5107)

* **URL** - Shows a hyperlink to the URL that's connected to the input. [URL example](https://www.postman.com/postman/workspace/flows-snippets/flow/64124dc8c224290033fcb098)

* **Image** - Shows an image from a URL that's connected to the input. [Image example](https://www.postman.com/postman/workspace/flows-snippets/flow/64124e997221e9003a7a510c)

* **Video** - Shows a video from a URL that's connected to the input and enables it to be played. [Video example](https://www.postman.com/postman/workspace/flows-snippets/flow/64124f65c224290033fcb09b)

* **YouTube** - Shows a YouTube video from a URL that's connected to the input and enables it to be played. [YouTube example](https://www.postman.com/postman/workspace/flows-snippets/flow/6414ef7bc224290033fcb310)
