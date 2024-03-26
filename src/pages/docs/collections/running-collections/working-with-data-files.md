---
title: "Run collections using imported data"
updated: 2023-09-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Loop Through a Data File | Postman Level Up"
    url: "https://youtu.be/RH8b3gbujPY"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Looping through a Data File in the Postman Collection Runner"
    url: "https://blog.postman.com/looping-through-a-data-file-in-the-postman-collection-runner/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Reputation imports data files with Postman"
    url: "https://www.postman.com/case-studies/reputation/"
---

Postman enables you to import a CSV or JSON file, and use the values from the data file in Collection Runner. For more information about collection runs, see [Using the Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/).

## Contents

* [Data file format](#data-file-format)
* [Run a collection with data files](#run-a-collection-with-data-files)
* [Errors when reading data files](#errors-when-reading-data-files)

## Data file format

Format the CSV file so that the first row has the variable names you want to use inside the requests. After that, every row will be used as a data row. The line endings of the CSV file must be in Unix format. Each row must have the same number of columns.

<img alt="CSV format" src="https://assets.postman.com/postman-docs/v10/ramen-csv-screenshot.jpg" width="300px"/>

For CSV files, note the following:

* If the numbers in your data file are longer than 15 digits, you'll need to format them as text in your spreadsheet program, so they're not truncated when exporting to CSV format.

* If your CSV file has numbers longer than 16 digits, numbers with preceding zeroes (for example, `000000345`), or phone numbers (for example, `+12125556709`), you'll need to preview the file and specify the column type. Learn how in the next section.

Format JSON files as an array of key-value pairs. Each key is the name of a variable, and the value is the data to use within the request.

<img alt="JSON format" src="https://assets.postman.com/postman-docs/v10/ramen-json-screenshot.jpg" width="300px"/>

> Variable names are case sensitive, so make sure to use the same case for variables in Postman as in the CSV or JSON file. Variables in data files are resolved as [local variables](/docs/sending-requests/variables/variables/#variable-scopes), so you can access them using `pm.variables.get("variable_key")`. Learn more about [using variables in scripts](/docs/sending-requests/variables/variables/#using-variables-in-scripts).

## Run a collection with data files

Suppose you have a collection with a simple request that accepts a serial and contact number as query parameters and a simple test to validate if the variable value is `true`.

Suppose the serial numbers in your data file contain preceding zeroes and the contact numbers have a country prefix with the `+` symbol.

In this example, you will create a collection, write a test for variable values, and import a CSV file into the Collection Runner. You will preview the file, specify any column types if necessary, and run the collection. Then, you will inspect your log to ensure your data was parsed correctly.

1. From the **Collections** menu, select **+** to add a new collection. Then, name the collection **CSV Data Types**.
1. Add a `GET` request with the following address. Name it **Query Serial**.

   ```bash
   https://www.xcorp.io?serial={{serial}}&contact_no={{contact_no}}
   ```

   The query parameters get populated with `serial` and `contact_no` keys and variable values.
1. Add a test script to test the variable values:

   ```bash
    pm.test('Variable should be true', () => {
        const variableValue = pm.variables.get('value');

        if (variableValue === true) {
            console.log('Value is true')
        } else if (variableValue === false) {
            console.log('Value is false')
        } else {
            console.log('Value is neither true or false')
        }
        pm.expect(variableValue).to.be.true
    });
   ```

   See the [Postman JavaScript reference](/docs/writing-scripts/script-references/postman-sandbox-api-reference/#using-data-variables-in-scripts) for more on what you can do with iteration data.

1. Create a test CSV file as shown below. Name it `test.csv`.

   ```csv
   serial,value,name,contact_no
   0001,true,Sunny,+14155553535
   0002,false,4545,+16785553509
   0003,true,Vicky,+12125556709
   ```

1. Return to the collection overview and select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px">__Run__.
1. Select your data file using the __Select File__ button.

    <img alt="Data file select" src="https://assets.postman.com/postman-docs/v10/select-data-file-v10.17.jpg" width="400px"/>

1. After you select your data file, select **Preview** to inspect the data in the file before you start the run.

    ![Data file preview](https://assets.postman.com/postman-docs/v10/csv-data-picker-before-v10.17.jpg)

    Observe that the preceding zeroes in the serial number and the prefix in the contact number have been removed. Change the data type for those numbers to **String** to preserve the original values.

    ![Data file update](https://assets.postman.com/postman-docs/v10/csv-data-picker-after-v10.17.jpg)

1. Select __Run CSV Data Types__ to begin the run with the values from the file. The Collection Runner runs the collection requests for each iteration (row) in the data file. The output indicates the results for any tests you defined in your collection requests.

1. Inspect the Console log by selecting **Console** in the footer, and observe that both the values and the variable validation are correct.

   ![Console log](https://assets.postman.com/postman-docs/v10/csv-console-log-v10.17.jpg)

## Errors when reading data files

You may encounter errors when Postman attempts to read your data file during a collection run. If this happens, check to ensure your file is properly formatted. For guidance, see [Format data file](#data-file-format).

If the errors persist, [contact the Postman support team](https://support.postman.com/hc/en-us).
