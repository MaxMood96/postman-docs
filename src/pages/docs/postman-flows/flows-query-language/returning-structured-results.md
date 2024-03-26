---
title: "Return structured data in FQL"
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

The following examples demonstrate how to use FQL to return structured data from JSON data.

## Contents

* [Example JSON](#example-json)
* [Return multiple objects as an array](#return-multiple-objects-as-an-array)
* [Return an array of a single field from multiple objects](#return-an-array-of-a-single-field-from-multiple-objects)
* [Collapse multiple objects into a single key-value pair](#collapse-multiple-objects-into-a-single-key-value-pair)
* [Collapse and group results by a shared field value](#collapse-and-group-results-by-a-shared-field-value)

## Example JSON

The examples below use this JSON data:

``` json
{
    "name": "John Smith",
    "physical_address": {
        "street": "123 Park Avenue",
        "city": "Atlanta",
        "state": "GA",
        "zip": "12345"
    },
    "work_address": {
        "street": "583 W. Island Drive",
        "city": "Miami",
        "state": "FL",
        "zip": "44456"
    },
    "mailing_address": {
        "street": "232 Ravensburg Road",
        "city": "Durham",
        "state": "NC",
        "zip": "03948"
    },
    "phones": [
        {
            "type": "Home",
            "number": "123-456-7890"
        },
        {
            "type": "Cell",
            "number": "098-765-4321"
        },
        {
            "type": "Cell",
            "number": "888-777-5555"
        },
        {
            "type": "work",
            "number": "314-265-9078"
        }
    ]
}
```

## Return multiple objects as an array

The example below returns three objects as an array.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
[physical_address, work_address, mailing_address]
</td>
</tr>
<tr>
<td>Result</td>
<td>
<pre>[
    {"street": "123 Park Avenue","city": "Atlanta","state": "GA","zip": "12345"},
    {"street": "583 W. Island Drive","city": "Miami","state": "FL","zip": "44456" },
    {"street": "232 Ravensburg Road","city": "Durham","state": "NC","zip": "03948"}
]</pre>
</td>
</tr>
</tbody>
</table>

## Return an array of a single field from multiple objects

The example below gets the values of the `city` key from three objects and returns the values as an array.

### FQL

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
[physical_address, work_address, mailing_address].city
</td>
</tr>
<tr>
<td>Result</td>
<td>
["Atlanta","Miami","Durham"]
</td>
</tr>
</tbody>
</table>

## Collapse multiple objects into a single key-value pair

FQL can return an array of key-value pairs composed of values from an object. The example below gets the values of the `type` and `number` keys from objects in the `phones` array and returns them as an array of key-value pairs.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
phones.{type: number}
</td>
</tr>
<tr>
<td>Result</td>
<td>
<pre>[
    {"Home": "123-456-7890"},
    {"Cell": "098-765-4321"},
    {"Cell": "888-777-5555"},
    {"work": "314-265-9078"}
]</pre>
</td>
</tr>
</tbody>
</table>

## Collapse and group results by a shared field value

FQL can return an object with key-value pairs composed of values from an object. Group returned values in an array if they have the same key name in their respective objects. The example below groups the values of `Cell` keys from two different objects in the `phones` array.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
phones{type: number[]}
</td>
</tr>
<tr>
<td>Result</td>
<td>
<pre>{
    "Home": ["123-456-7890"],
    "Cell": ["098-765-4321","888-777-5555"],
    "work": ["314-265-9078"]
}</pre>
</td>
</tr>
</tbody>
</table>
