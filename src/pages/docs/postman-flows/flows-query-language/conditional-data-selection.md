---
title: "Select conditional data in FQL"
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

You can use [Flows Query Language](/docs/postman-flows/flows-query-language/introduction-to-fql/) (FQL) to filter for specific data in your responses. Multiple responses return in an array. Single responses return as a single record. Sample data and FQL examples are below.

## Contents

* [Example JSON](#example-json)
* [Filter query results for objects with specific key-value pairs](#filter-query-results-for-objects-with-specific-key-value-pairs)
* [Navigate your filtered results](#navigate-your-filtered-results)
* [Return a single record](#return-a-single-record)
* [Check if a field has a specific value](#check-if-a-field-has-a-specific-value)

## Example JSON

The examples below use this JSON data:

``` json
    {
        "customer info": {
            "customer field": "Customer data",
            "unformated_customer_field": " customer \n stuff ",
            "total_value": "281.01",
            "associated_usernames": ["user1, myuser, online_user"]
        },
        "payments": [
            {
                "invoice_number": "101301",
                "date": "2022-09-11T16:12:34.494Z",
                "description": "recurring subscription",
                "amount": 110.48
            },
            {
                "invoice_number": "101302",
                "date": "2022-09-29T14:45:13.148Z",
                "description": "one time purchase",
                "amount": 24.49
            },
            {
                "invoice_number": "101303",
                "date": "2022-10-11T16:12:34.683Z",
                "description": "recurring subscription",
                "amount": 110.48
            },
            {
                "invoice_number": "101304",
                "date": "2022-10-12T11:45:22.182Z",
                "description": "recurring subscription deluxe",
                "amount": 35.56
            }
        ]
    }
```

## Filter query results for objects with specific key-value pairs

The example below filters for objects in the `payments` array that have the key-value pair `"description": "recurring subscription"`.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>payments[description="recurring subscription"]</td>
</tr>
<tr>
<td>Result</td>
<td>
<pre>
[
    {
        "invoice_number": "101301",
        "date": "2022-09-11T16:12:34.494Z",
        "description": "recurring subscription",
        "amount": 110.48
    },
    {
        "invoice_number": "101303",
        "date": "2022-10-11T16:12:34.683Z",
        "description": "recurring subscription",
        "amount": 110.48
    }
]
</pre>
</td>
</tr>
</tbody>
</table>

## Navigate your filtered results

FQL uses the same syntax to navigate filtered query results as it does to navigate JSON data. The example below gets the values from the `invoice.number` fields in the `payments` array.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>payments[description="recurring subscription"].invoice_number</td>
</tr>
<tr>
<td>Result</td>
<td>
["101301","101303"]
</td>
</tr>
</tbody>
</table>

## Return a single record

When a filter has a single result, it returns as a record instead of an array. The filter below returns a single result as a record.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td> payments[description="recurring subscription deluxe"].invoice_number</td>
</tr>
<tr>
<td>Result</td>
<td>
["101304"]
</td>
</tr>
</tbody>
</table>

## Check if a field has a specific value

FQL can check if your query results have a specific key-value pair and return `true` or `false`. The example below checks the first item in the `payments` array for the key-value pair `"description": "recurring"`.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>$contains(payments[0].description, "recurring")</td>
</tr>
<tr>
<td>Result</td>
<td>true</td>
</tr>
</tbody>
</table>

## Get only unique payment amounts

The `$distinct` function returns a single instance of any recurring values. In the example below, the `110.48` value appears twice in the data, but only once in the result.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>$distinct(payments.amount)</td>
</tr>
<tr>
<td>Result</td>
<td>[110.48, 24.49, 35.56]</td>
</tr>
</tbody>
</table>
