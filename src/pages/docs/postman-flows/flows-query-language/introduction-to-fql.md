---
title: "Introduction to Flows Query Language"
updated: 2022-11-17
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

_Flows Query Language_ (FQL) can be used to parse and transform JSON data to get the fields and structure you want.

## Contents

* [Passing data to the Evaluate block](#passing-data-to-the-evaluate-block)
* [Things you can do with FQL](#things-you-can-do-with-fql)
* [Using Postbot with FQL](#using-postbot-with-fql)
* [FQL Reference](#fql-reference)

## Passing data to the Evaluate block

![](https://assets.postman.com/postman-docs/v10/updated-evaluate-block-example-1-v10.jpg)

The **Record** block holds formatted key-value pairs. The variable `data_field` has a value of `input` (`input` can be selected as a value when creating the variable), which enables the formatted data to be passed into the **Evaluate** block and queried. In this case, `customer_info` holds another record that contains string values. FQL can be executed in the **Evaluate** block to print out the values of `customer_info`.

## Things you can do with FQL

The following sections show examples of things you can do with FQL:

* [Getting basic values](/docs/postman-flows/flows-query-language/getting-basic-values/)
* [Conditional data selection](/docs/postman-flows/flows-query-language/conditional-data-selection/)
* [Returning structured data](/docs/postman-flows/flows-query-language/returning-structured-results/)
* [Data manipulation](/docs/postman-flows/flows-query-language/data-manipulation/)

## Using Postbot with FQL

Not sure how to write an FQL statement for your Flow? Ask Postbot! Flows has support for artificial intelligence in FQL queries. Tell Postbot what you want to do using plain language, and Postbot will generate a FQL statement for you.

<!--TODO: Image -->

In the **Evaluate** block, select the Postbot icon <img alt="Postbot icon" src="https://assets.postman.com/postman-docs/v10/icon-postbot-v10-16.jpg#icon" width="18px">. Enter your query as a simple text sentence and select **Generate FQL**. Postbot will suggest a query for you based on your prompt.

For more information on Postbot, visit [About Postbot](/docs/getting-started/basics/about-postbot/).

## FQL reference

For a complete reference for all FQL functions, see the [FQL function reference](/docs/postman-flows/flows-query-language/function-reference/).
