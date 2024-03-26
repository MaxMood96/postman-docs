---
title: "The Postman Flows Create with AI block"
updated: 2024-01-24
early_access: true
plan: beta
---

The **Create with AI** block enables you to use artificial intelligence (AI) in your Flows. The **Create with AI** block uses generative AI to analyze and process text and data, and generate images. You can enter and test prompts instructing the AI what you want to do.

You can reference variables in your prompts with curly braces. For example, these prompts include variables:

* Summarize the response in {{value1}}
* List all the new customers in {{body}}
* Visualize the data in {{expenses}} as a pie chart

### The Create with AI block interface

<img alt="Create AI block" src="https://assets.postman.com/postman-docs/v10/create-with-ai-block-v10.jpg" width="295px"/>

**variable** - Take incoming data and assign it to a variable. Select the **Add data blocks** icon <img alt="Add data blocks icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px"> to add more variables as data blocks. Use curly braces to reference variables in your prompts like this: `{{value1}}`.

**Mode selection dropdown list** - Select **Text**, **Image**, or **JSON** to specify the type of data you want to create. Select **Smart** to let the **Create with AI** block automatically recognize the type of data based on your prompt.

**Text entry block** - Enter AI prompts here.

**Test your prompt** - Select this button to get results or feedback from the AI in the **Create with AI** block.

**Output** - Send data from the **Create with AI** block. The icon next to this port changes depending on which mode is selected. It shows **Aa** for Text, **?** for Image, and **()** for JSON.
