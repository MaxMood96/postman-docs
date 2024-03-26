---
title: "Typescript support in Postman Flows"
updated: 2023-12-15
early_access: true
plan: beta
---

Postman Flows now supports [TypeScript](https://www.typescriptlang.org/) in addition to [Flows Query Langauge (FQL)](/docs/postman-flows/flows-query-language/introduction-to-fql/) in the **Evaluate** and **If** blocks.

<img src="https://assets.postman.com/postman-docs/v10/flows-typescript-filter-v10-21.jpg" alt="TypeScript in an Evaluate block"/>

## Contents

* [TypeScript compared to FQL](#typescript-compared-to-fql)
* [Restrictions and notes](#restrictions-and-notes)
* [How to use TypeScript in Postman Flows](#how-to-use-typescript-in-postman-flows)

## TypeScript compared to FQL

While FQL is tailored for querying and transforming JSON data within Postman Flows, TypeScript offers the robustness and flexibility of a full programming language. This makes TypeScript more suitable for complex logic and large-scale projects. Also, developers who are familiar with both JavaScript and TypeScript ecosystems may prefer using TypeScript over FQL.

## Restrictions and notes

Scripts written with TypeScript in Postman Flows have the following restrictions:

* Scripts can't import or require libraries.
* Scripts don't have file system access.
* Scripts can't make API calls (i.e., `fetch` is not available).
* The top level code must be an expression.

TypeScript in Postman Flows uses a forked version of the CryptoJS library. This forked version uses an internal API for random number generation.

You can use TypeScript to send console logs to the Postman console using the following methods:

* console.log
* console.error
* console.warn
* console.info

## How to use TypeScript in Postman Flows

To use TypeScript in an **Evaluate** or **If** block, select **TypeScript** from the dropdown list and enter your code in the block.
