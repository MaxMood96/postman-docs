---
title: "Use a data file to simulate virtual users"
updated: 2023-09-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Load Testing Your APIs"
    url: "https://youtu.be/a5hWE4hMOoY"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Test your API’s performance by simulating real-world traffic with Postman"
    url: "https://blog.postman.com/postman-api-performance-testing/"
---

When you [configure a performance test](/docs/collections/performance-testing/performance-test-configuration/), you specify a number of _virtual users_. During the test, each virtual user (VU) runs the selected requests in the specified order in a repeating loop.

By default, each virtual user runs the same requests using the same values. You can customize the behavior of virtual users by importing a CSV or JSON file. Each virtual user can send requests using different values from the imported data file. This enables you to better simulate real-world traffic when testing the performance of your API.

## Contents

* [Run a performance test with a data file](#run-a-performance-test-with-a-data-file)
* [Data file format](#data-file-format)
* [Debug errors when using data files](#debug-errors-when-using-data-files)

## Run a performance test with a data file

Importing a data file enables you to populate variables with imported data when running a performance test. Each virtual user can use data from a different row in the data file, customizing their behavior and better simulating real-world usage of your API.

Before you begin, [add variables](/docs/sending-requests/variables/variables/) to the requests in your collection. Then [create a data file](#data-file-format) with the data to use for each variable.

To run a performance test with a data file, do the following:

1. [Configure a performance test](/docs/collections/performance-testing/performance-test-configuration), specifying the number of **Virtual users**, the **Test duration**, and a **Load profile**.

1. Select a **Data file** with custom values to use for each virtual user. After you select your data file, a preview of the data file displays.

    > The data file must be in CSV or JSON format. Learn more about [formatting a data file](#data-file-format).

    <img alt="Selecting a data type for imported data" src="https://assets.postman.com/postman-docs/v10/performance-test-select-data-type-v10-22.jpg" />

1. Postman automatically detects the **Data file type**. If needed, you can select a different file type (CSV or JSON).
1. Under **VU data mapping**, select how rows in the data file are mapped to virtual users:

    * **Ordered** - Each VU uses data from a specific row of the data file. The first VU uses the first data row, the second VU uses the second data row, and the pattern continues until each VU has been assigned a data row. Extra rows aren't used.
    * **Randomized** - Each VU uses data from a random row of the data file every time the VU runs the collection.

    > If you select **Ordered** and your data file has fewer rows than the number of VUs, some VUs won't receive data during the performance test. You can add more rows to your data file and import the file again, or you can select **Randomized**.

1. (Optional) For CSV files, Postman automatically detects the data type for each column in the file. If needed, you can use the dropdown menu at the top of a column to select a different data type (**String**, **Boolean**, or **Number**).

    > If your CSV file has numbers longer than 16 digits, numbers with preceding zeroes (for example, `000000345`), or phone numbers (for example, `+12125556709`), select the **String** data type to prevent values from being truncated.

1. Select **Continue** when you're done configuring the data file.

    > You can select the settings icon <img alt="Data file settings icon" src="https://assets.postman.com/postman-docs/v10/icon-sliders-v10.jpg#icon" width="24px"> to reconfigure the data file. You can also select a new data file or select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> to remove the data file.

    <img alt="Configure a data file" src="https://assets.postman.com/postman-docs/v10/performance-test-configure-data-file-v10-22.jpg" />

1. Select **Run** to run the performance test using the data file. Each VU uses the assigned data from the data file to populate variables when running the requests in the collection.

## Data file format

Format the CSV file so that the first row has the variable names you want to use inside the requests. After that, every row will be used as a data row. The line endings of the CSV file must be in Unix format. Each row must have the same number of columns.

<img alt="CSV format" src="https://assets.postman.com/postman-docs/v10/ramen-csv-screenshot.jpg" width="300px"/>

For CSV files, note the following:

* If the numbers in your data file are longer than 15 digits, you'll need to format them as text in your spreadsheet program, so they're not truncated when exporting to CSV format.

* If your CSV file has numbers longer than 16 digits, numbers with preceding zeroes (for example, `000000345`), or phone numbers (for example, `+12125556709`), you'll need to configure the file in Postman and specify **String** for the column data type. Learn more about [running a performance test with a data file](#run-a-performance-test-with-a-data-file).

Format JSON files as an array of key-value pairs. Each key is the name of a variable, and the value is the data to use within the request.

<img alt="JSON format" src="https://assets.postman.com/postman-docs/v10/ramen-json-screenshot.jpg" width="300px"/>

> Variable names are case sensitive, so make sure to use the same case for variables in Postman as in the CSV or JSON file. Variables in data files are resolved as [local variables](/docs/sending-requests/variables/variables/#variable-scopes), so you can access them using `pm.variables.get("variable_key")`. Learn more about [using variables in scripts](/docs/sending-requests/variables/variables/#using-variables-in-scripts).

## Debug errors when using data files

You can [view details about errors](/docs/collections/performance-testing/performance-test-errors/#debug-errors) that occurred during the performance test to help in the debugging process. After the performance test finishes, select the **Errors** tab. Expand an error class below the graph, then select a request to view the response, headers, and body. Select the data file name to view the variable data that was used for the request.

<img alt="Viewing imported data for a request error" src="https://assets.postman.com/postman-docs/v10/performance-test-data-file-debug-v10-19.jpg" />

> Data files aren't saved for [past performance test runs](/docs/collections/performance-testing/performance-test-configuration/#view-past-performance-runs).
