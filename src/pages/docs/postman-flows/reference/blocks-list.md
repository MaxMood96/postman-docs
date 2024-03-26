---
title: "Postman Flows blocks"
updated: 2023-11-22
---

The blocks available in Postman Flows are described below.

* [Information blocks](#information-blocks)
* [Decision blocks](#decision-blocks)
* [Repeating blocks](#repeating-blocks)
* [Action blocks](#action-blocks)
* [Output block](#output-blocks)

## Information blocks

### Template

<img alt="Template block" src="https://assets.postman.com/postman-labs-docs/all-blocks/template-block.png" width="245px"/>

Enables large amounts of formatted text to be entered. The values in the variables section can be included in the text using `{{key}}` where `key` is the name of your variable.

**Variables** - Named information or assigned values that can be included in the text using the `{{key}}` format. Variables created in Flows aren't available to test scripts or other features outside Postman Flows.

**Out** - Sends the information entered in the text box to the next block.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc94e8e308d202595085d7)

### Get Variable

<img alt="Get Variable block" src="https://assets.postman.com/postman-docs/v10/get-variable-block-v10.jpg" width="153px"/>

Gets the specified variable's value from anywhere in the Flow.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc94d282cf9728f279e020)

### Create Variable

<img alt="Create Variable block" src="https://assets.postman.com/postman-docs/v10/create-variable-block-1-v10.jpg" width="136px"/>

Assigns a value to a variable that can then be accessed with the **Get Variable** block anywhere in the Flow. The input is any value (such as text, a number, or information from another block).

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc94d282cf9728f279e020)

### Record

<img alt="Record block" src="https://assets.postman.com/postman-labs-docs/all-blocks/record-block.png" width="245px"/>

Structured information that can hold any of the other value block types or another record. Information is organized by having a key (the name assigned to the information) and a value.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc6eacead4e97c45493e9c)

### List

<img alt="List block" src="https://assets.postman.com/postman-docs/v10/list-block-v10.jpg" width="159px"/>

Outputs the specified list of values. Each item can be any type of block, for example, a date block, a string, or a record. Using a **Select** block in a row of the list enables information from another block to be passed into the list.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc9412ead4e97c45493eb0)

### Date & Time

<img alt="Date &amp; Time block" src="https://assets.postman.com/postman-labs-docs/all-blocks/date-and-time-block.png" width="221px"/>

Outputs the specified date and time.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc6e7782ae416b9e6bc10a)

### Date

<img alt="Date block" src="https://assets.postman.com/postman-labs-docs/all-blocks/date-block.png" width="164px"/>

Outputs the specified date.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc6e72ead4e97c45493e9a)

<!-- vale Postman.Avoid = NO -->
### Now

<img alt="Now block" src="https://assets.postman.com/postman-labs-docs/all-blocks/now-block.png" width="69px"/>

Outputs the current date and time.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc6e61e308d202595085c9)
<!-- vale Postman.Avoid = YES -->

### Select

<img alt="Select block" src="https://assets.postman.com/postman-labs-docs/all-blocks/select-block.png" width="142px"/>

Selects a specific part of the information output from another block. If the input information is from a **Send Request** block with a saved example, a drop-down will pop up that has all the information available to choose from and selecting that information will auto-fill the select block.

You can also create a **Select** block by dragging and dropping output data from a **Send Request** or **Output** block. The new **Select** block automatically selects the data you dragged and dropped.

<img src="https://assets.postman.com/postman-docs/v10/flows-drag-and-drop-v10-20.gif" alt="Select block" fetchpriority="low" loading="lazy" />

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc6e92e308d202595085cb)

### Regex

<img alt="Regex block" src="https://assets.postman.com/postman-docs/v10/regex-block-1-v10.jpg" width="121px"/>

Outputs a regular expression.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc955b82ae416b9e6bc11d)

### Null

<img alt="Null block" src="https://assets.postman.com/postman-labs-docs/all-blocks/null-block.png" width="35px"/>

Outputs a null value.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc6e4a82ae416b9e6bc108)

### Number

<img alt="Number block" src="https://assets.postman.com/postman-labs-docs/all-blocks/number-block.png" width="93px"/>

A whole or decimal number that can be positive or negative.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63b8b417a365885b55bc51fd)

<!-- vale Postman.Spelling = NO -->
### Bool

<img alt="Bool block" src="https://assets.postman.com/postman-labs-docs/all-blocks/bool-block.png" width="118px"/>

True or false.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63b8b16f2b292a29393dbef9)

<!-- vale Postman.Spelling = YES -->
### String

<img alt="String block" src="https://assets.postman.com/postman-labs-docs/all-blocks/string-block.png" width="143px"/>

Outputs the text that you enter.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc6328e308d202595085bc)

### Start

<img alt="Start block" src="https://assets.postman.com/postman-labs-docs/all-blocks/new-ux-start-block.png" width="110px"/>

The first block that runs when a Flow is run. When deploying to the cloud, [running Flows on the cloud](/docs/postman-flows/concepts/automatic-runs/) can be configured to hold information (either as text or in JSON format) for testing locally.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bcbae7f3155f2e86b54eb2)

## Decision blocks

### If

<img alt="If block" src="https://assets.postman.com/postman-labs-docs/all-blocks/refactored-if-block.png" width="245px"/>

<!-- vale Postman.Spelling = NO -->
  Takes any number of variables and information, and takes a different branch depending on the result of the [FQL](/docs/postman-flows/flows-query-language/introduction-to-fql/) condition.

  **Variables** - Named information or assigned values.

  **Text entry block** - Freeform query using [FQL](/docs/postman-flows/flows-query-language/introduction-to-fql/) that evalutes to true or false.

  **Data** - Receives information or an event from another block.

  **Outputs** - Sends the information to either the True or False pathway depending on the value of the FQL condition.

  [Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bcba94f3155f2e86b54eb0)
<!-- vale Postman.Spelling = YES -->

### Evaluate

<img alt="Evaluate block" src="https://assets.postman.com/postman-labs-docs/all-blocks/updated-evaluate-block.png" width="318px"/>

Executes [FQL](/docs/postman-flows/flows-query-language/introduction-to-fql/) to change information and work with variables.

**Variables** - Named information or assigned values that can be accessed using FQL.

**Text entry block** - Freeform query using FQL.

**Out** - Outputs the result of the query.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bc960882ae416b9e6bc11f)

## Repeating blocks

### Repeat

<img alt="Repeat block" src="https://assets.postman.com/postman-labs-docs/all-blocks/repeat-block.png" width="129px"/>

Runs all of the blocks that come after it the specified number of times until a **Collect** block is encountered in which case it will stop repeating all blocks that come after the **Collect** block.

**Count** - The number of times to run the block.

**Start** - Runs the block when it receives input from another block.

**Index** - The number of the current run starting at 0 for the first run.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63b898422e67b05a8333e16a)

### For

<img alt="For block" src="https://assets.postman.com/postman-labs-docs/all-blocks/for-block.png" width="111px"/>

Runs all of the blocks that come after it once for each item in the input list until a **Collect** block is encountered in which case it will stop repeating all blocks that come after the **Collect** block.

**List** - A list of values like `[1,2,3]` or `["one","two","three"]`.

**Start** - Receives an input to run the block.

**Item** - Outputs a single item in the list.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63b89820a365885b55bc51f6)

### Collect

<img alt="Collect block" src="https://assets.postman.com/postman-labs-docs/all-blocks/collect-block.png" width="118px"/>

**For** and **Repeat** blocks will stop repeating once this block is reached. Every item will be put into a new list and then output.

**Item** - Takes in a single item from a for or repeat sequence.

**List** - Creates a list of all items sent to this block in the for or repeat sequence.

**Finish** - Sends an event when the block is complete (when the for or repeat sequence has been run for every item and they're all in a new list).

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63b898822e67b05a8333e16c)

## Action blocks

### Delay

<img alt="Delay block" src="https://assets.postman.com/postman-labs-docs/all-blocks/delay-block.png" width="212px"/>

Waits the specified amount of time before allowing information through.

**Data (input)** - Starts the delay when it receives input from another block.

**Data (output)** - Once the delay is complete, passes through whatever information was input.

**Delay (in ms)** - The amount of time in milliseconds to wait.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63bcbaf6ead4e97c45493eb9)

### Send Request

<img alt="Send Request block" src="https://assets.postman.com/postman-docs/v10/send-request-block-1.jpg" width="300px"/>

Runs a request in a collection and outputs the result. If a request that has a saved example was used, the result can be used as test data to run the Flow and auto-fill **Select** blocks.

**Select a Request** - Select a collection and a request here.

**Send** - When this receives any input from another block, the selected request is run.

<!-- vale Postman.ComplexWords = NO -->
**Success** - Contains the response of a successful API request. If Postman tests are assigned to the request and all pass or, if there are no tests, a 2xx (successful) HTTP status code is received. The information returned by the request is then output to the next block.

**Failure** - Contains the response of an unsuccessful API request. If Postman tests are assigned to the request and all fail or, if there are no tests, a non 2xx (unsuccessful) HTTP status code is received. The information returned by the request is then output to the next block.
<!-- vale Postman.ComplexWords = YES -->

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/6267f9008752c1035922de48)

## Output blocks

### Log (Console)

<img alt="Log block" src="https://assets.postman.com/postman-labs-docs/all-blocks/log-block.png" width="78px"/>

Sends the information input to the block to the Postman Console.

[Example](https://www.postman.com/postman/workspace/flows-snippets/flow/63b8b07ea365885b55bc51f9)

### Output

<img alt="Output block" src="https://assets.postman.com/postman-docs/v10/output-block-v10.jpg" width="249px"/>

Displays the information input. The dropdown menu enables you to select from JSON, charts, tables, videos, images, and more. For more information and examples on the output block, see [Visualizing data](/docs/postman-flows/reference/visualizing-data/).
