---
title: "Pin variables in Postman Flows"
updated: 2024-03-15
---

You can pin variables in Postman Flows so they keep their values across different loop iterations. When a variable in a Flow is pinned, its value persists through each iteration of the loop until a new value is explicitly set. Unpinned variables aren't retained after the iteration ends, or are reset at the beginning of the next iteration.

Unpinned variables offer flexibility for Flows that use dynamic data processing, so that each iteration can adapt based on new inputs or changes in the workflow context. Unpinning is useful in loops where each pass requires fresh data or where the variable's value is updated often.

## Contents

* [Pin or unpin a variable in Postman Flows](#pin-or-unpin-a-variable-in-postman-flows)
* [Pinned variable behavior in loops](#pinned-variable-behavior-in-loops)

## Pin or unpin a variable in Postman Flows

To pin or unpin a variable, select the pin icon.

<img alt="Pinned variable" src="https://assets.postman.com/postman-docs/v10/pinned-variable-v10-1.jpg" width="127 px"/>

## Pinned variable behavior in loops

A pinned variable defined outside of a loop retains its value in each iteration. If a pinned variable is both defined and used inside a loop, it will be destroyed and recreated in each iteration.

For example, this diagram shows an if loop with the pinned variable defined **outside** the loop:

<img alt="Variable defined outside its loop" src="https://assets.postman.com/postman-docs/v10/variable-outside-loop-v10-23.jpg" width="376 px"/>

The pinned variable retains its value in each iteration of the loop, so this loop will complete.

Conversely, this diagram shows an if loop with the pinned variable defined **inside** the loop:

<img alt="Variable defined inside its loop" src="https://assets.postman.com/postman-docs/v10/variable-inside-loop-v10-23.jpg" width="376 px"/>

The pinned variable is destroyed and recreated each time the loop iterates so the loop won't complete.
