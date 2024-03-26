---
title: "Debug Postman Flows"
updated: 2023-08-15
---

When building applications with any language (Flows included), sometimes things don't work as expected. _Debugging_ is the process of finding the source of the discrepancy between what the Flow is doing, and what's expected. Fortunately, Flows has several built-in tools to help with debugging.

## Contents

* [Success and failure ports in Send Request blocks](#success-and-failure-ports-in-send-request-blocks)
* [The output block](#the-output-block)
* [The Console](#the-console)
* [General tips](#general-tips)

### Success and failure ports in Send Request blocks

When a **Send Request** block runs, the output of the block can be viewed after the request has run in either the **Success** or **Failure** outputs (depending on the outcome). This is useful for checking that the request is successful and returning the information expected.

<img src="https://assets.postman.com/postman-docs/v10/flows-send-request-ports-v10-21.gif" alt="Using send request ports" fetchpriority="low" loading="lazy" />

### The Output block

The output block doesn't change the information that passes through it, which makes it ideal for monitoring the data flowing between two blocks. Sometimes, **Send Request** blocks can return large amounts of information and most of it isn't relevant to the issue being debugged. Selecting only the relevant information and displaying it in an output block simplifies the debugging process so you don't need to scroll to find the information in the outputs of larger responses.

<img src="https://assets.postman.com/postman-docs/v10/flows-output-debugging-10-21-1.gif" alt="Output debugging" fetchpriority="low" loading="lazy" />

### The Console

Every request and response is sent to the Postman Console, which keeps a history of events that happened in a Flow. If something specific needs to be output to the Console, use the **Log** block to send the information there. This can be especially useful when using loops because an **Output** block would show only the last item passed through it once the Flow finished running.

<img src="https://assets.postman.com/postman-docs/v10/flows-console-logging-v10-21.gif" alt="Console logging" fetchpriority="low" loading="lazy" />

### General tips

* If a request is failing, make sure the environment is set, check the Console to inspect the request, and make sure all of the variables are set.
* Put either **Output** blocks or **Log** blocks at every place the information Flows when things aren't working as expected.
* Test only one possible cause at a time to isolate the issue to a single block.
