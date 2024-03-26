---
title: "Get basic values in FQL"
updated: 2023-03-29
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Flows Query Language (FQL) | Postman Flows"
    url:  "https://youtu.be/4KDQM8gv7PM"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Advanced FQL expressions in Postman Flows"
    url: "https://blog.postman.com/advanced-fql-expressions-in-postman-flows/"
---

FQL uses location path syntax to extract values from JSON structures. The following examples demonstrate several examples of getting basic values from JSON data.

## Contents

* [Example JSON](#example-json)
* [Get a top-level field](#get-a-top-level-field)
* [Get a nested field](#get-a-nested-field)
* [Get an entire object](#get-an-entire-object)
* [Select a specific index in an array](#select-a-specific-index-in-an-array)
* [Select an entire array](#select-an-entire-array)
* [Return one field of every object in an array](#return-one-field-of-every-object-in-an-array)
* [Return fields that contain special characters in the key name](#return-fields-that-contain-special-characters-in-the-key-name)
* [Get the number of elements in a list](#get-the-number-of-elements-in-a-list)

## Example JSON

The examples below use this JSON data:

``` json
{
    "name": "John Smith",
    "address": {
        "street": "123 Park Avenue",
        "city": "Atlanta",
        "state": "GA",
        "zip": "12345"
    },
    "phones": [
        {
            "type": "Home",
            "number": "123-456-7890"
        },
        {
            "type": "Cell",
            "number": "098-765-4321"
        }
    ],
    "display name": "myuser123"
}
```

> To use this sample data in your Flow, select the gear icon <img alt="Gear icon" src="https://assets.postman.com/postman-docs/icon-gear-solid-v9.jpg#icon" width="16px"> in the **Start** block and paste the data into the **Config** field.

## Get a top-level field

To access a top-level field with FQL, enter the field's name.

<table  class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>name</td>
</tr>
<tr>
<td>Result</td>
<td>"John Smith"</td>
</tr>
</tbody>
</table>

## Get a nested field

To access fields below the top level, use field names separated by dot `.` delimiters.

<table  class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>address.city</td>
</tr>
<tr>
<td>Result</td>
<td>"Atlanta"</td>
</tr>
</tbody>
</table>

## Get an entire object

Enter the name of an object in the JSON file to retrieve all the data within that object.

<table  class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>address</td>
</tr>
<tr>
<td>Result</td>
<td>
    <pre>
{
    "street": "123 Park Avenue",
    "city": "Atlanta",
    "state": "GA",
    "zip": "12345"
}
    </pre>
</td>
</tr>
</tbody>
</table>

## Select a specific index in an array

To access individual values in an array in a JSON file, specify an index number between square brackets after the array's name.

<table  class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>phones[0].number</td>
</tr>
<tr>
<td>Result</td>
<td>"123-456-7890"
</td>
</tr>
</tbody>
</table>

## Select an entire array

Enter the name of an array in the JSON file to retrieve all the data within that array.

<table  class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>phones</td>
</tr>
<tr>
<td>Result</td>
<td><pre>[
    {
        "type": "Home",
        "number": "123-456-7890"
    },
    {
        "type": "Cell",
        "number": "098-765-4321"
    }
]</pre>
</td>
</tr>
</tbody>
</table>

## Return one field of every object in an array

To return a specific field from multiple objects in an array, enter the array's name then the field's name, separated by a dot.

<table  class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>phones.number</td>
</tr>
<tr>
<td>Result</td>
<td>["123-456-7890","098-765-4321"]</td>
</tr>
</tbody>
</table>

## Return fields that contain special characters in the key name

If a field in the JSON file contains special characters (like spaces), put the field's name in single quotes.

<table  class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>'display name'</td>
</tr>
<tr>
<td>Result</td>
<td>myuser123</td>
</tr>
</tbody>
</table>

## Get the number of elements in a list

<table  class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>$count(phones)</td>
</tr>
<tr>
<td>Result</td>
<td>2</td>
</tr>
</tbody>
</table>
