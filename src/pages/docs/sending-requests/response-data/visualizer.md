---
title: "Visualize request responses using Postman Visualizer"
updated: 2023-09-26
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Learn about Postman Visualizer"
    url: "https://www.youtube.com/watch?v=nQNbdfKKQfc"
  - type: link
    name: "Postman Visualizer demo"
    url: "https://www.youtube.com/watch?v=i1jU-kivApg"
  - type: link
    name: "Create a Custom OneSignal Dashboard Using Postman Visualizer"
    url: "https://youtu.be/Prgff3__-mw"
  - type: dynamic_blog
    name: "Blog posts"
    blog_tag: "visualizer"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Sample Visualizations"
    url: "https://www.postman.com/postman/workspace/sample-visualizations/overview"
  - type: link
    name: "More Visualizer Examples"
    url: "https://www.postman.com/postman/workspace/more-visualizer-examples/overview"
---

The _Postman Visualizer_ provides a programmable way to visually represent your request [responses](/docs/sending-requests/response-data/responses/). Visualization code added to the __Tests__ for a request will render in the __Visualize__ tab for the response body, alongside the Pretty, Raw, and Preview options.

![Visualizer rendering](https://assets.postman.com/postman-docs/v10/visualizer-v10-22.jpg)

The Visualizer enables you to present your response data in ways that help to make sense of it. You can use this to model and highlight the information that's relevant to your project, instead of having to read through raw response data. When you [share a Postman Collection](/docs/collaborating-in-postman/sharing/), other people on your team can also understand your visualizations within the context of each request.

## Contents

* [Visualizing response data](#visualizing-response-data)
    * [Adding Visualizer code](#adding-visualizer-code)
    * [Rendering HTML](#rendering-html)
    * [Viewing visualizations](#viewing-visualizations)
    * [Adding styling and interaction to visualizations](#adding-styling-and-interaction-to-visualizations)
    * [Using your own libraries](#using-your-own-libraries)
    * [Accessing data inside the template](#accessing-data-inside-the-template)
* [Using Postbot to create visualizations](#using-postbot-to-create-visualizations)
* [Try it out](#try-it-out)
* [Visualizer API](#visualizer-api)
* [Debugging the Visualizer](#debugging-the-visualizer)
* [Next steps](#next-steps)

## Visualizing response data

To visualize your response data, add code to the __Pre-request__ or __Tests__ [script](/docs/writing-scripts/intro-to-scripts/) for the request. The `pm.visualizer.set()` method will apply your Visualizer code to the data and present it in the __Visualize__ tab when the request runs.

### Adding Visualizer code

The `pm.visualizer.set()` method accepts a [Handlebars](https://handlebarsjs.com/) template string as its first parameter. The second parameter is the data you want to use the template to display. Read on to learn how you can build a Handlebars template and pass data to it.

### Rendering HTML

For an example of the Visualizer in action, open the following collection in Postman:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/7865888-07101503-1e33-4f29-b845-d94e726751c8?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D7865888-07101503-1e33-4f29-b845-d94e726751c8%26entityType%3Dcollection%26workspaceId%3D34f3a42c-18a7-4ad6-83fb-2c05767d63a7)

In the first request, the example endpoint responds with a list of names and email addresses with the following JSON response body structure:

```js
[
    {
        "name": "Alice",
        "email": "alice@example.com"
    },
    {
        "name": "Jack",
        "email": "jack@example.com"
    },
    // ... and so on
]
```

The Visualizer code creates a Handlebars template to render a table displaying the names and email addresses by looping over an array. Handlebars can do this with the `{{#each}}` tag. This script runs in the request __Tests__:

```js
var template = `
    <table bgcolor="#FFFFFF">
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>

        {{#each response}}
            <tr>
                <td>{{name}}</td>
                <td>{{email}}</td>
            </tr>
        {{/each}}
    </table>
`;
```

The variable names inside the double curly braces in the template will be substituted by the data passed to the `pm.visualizer.set()` method. To apply the template, the following code completes the __Tests__ script:

```js
// Set visualizer
pm.visualizer.set(template, {
    // Pass the response body parsed as JSON as `data`
    response: pm.response.json()
});
```

The `template` variable is the template string created earlier. The second argument passed is an object defined as the `response` property—this is the variable that the template expects in the `{{#each response}}` loop. The value assigned to the `response` property is the response JSON data from the request parsed as an object.

### Viewing visualizations

__Send__ the request in Postman and select the __Visualize__ tab. Postman renders the table as HTML, as it would be in a web browser.

![Visualizer table rendering](https://assets.postman.com/postman-docs/v10/visualizer-table-v10-22.jpg)

### Adding styling and interaction to visualizations

You can load an external stylesheet using `<link>` tags in your HTML template code, using the same technique as adding a stylesheet to a web page. You can also add stylesheets as `<style>` tags. Similarly, you can add interactions using JavaScript code in `<script>` tags inside your template HTML code.

> Visualizer doesn't support interactions that download resources.

### Using your own libraries

You can use any of the libraries in the [Postman Sandbox](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) to programmatically generate the layout template. To import another external JavaScript library, add the URL to a `<script>` tag in the template code, using the same approach you would use to load JavaScript into an HTML file. This lets you render your request data using the visualization tool of your choice (for example D3.js).

### Accessing data inside the template

Any `<script>` elements inside your template can access the data passed in the second argument to `pm.visualizer.set()` by calling the `pm.getData(callback)` method. This is only applicable to JavaScript code in the template, for example if your template includes code to render a chart.

The `pm.getData(callback)` method takes a callback function as its parameter. This callback accepts two parameters: `error` and `data`. The second parameter is the `data` that was passed to `pm.visualizer.set()`.

## Using Postbot to create visualizations

Not sure how to write a visualization for your request? Ask Postbot! Tell Postbot what you want to do using plain language, and Postman uses artificial intelligence to generate a visualization for you. Use Postbot to create a new visualization, change the type of visualization, fix your existing visualization, and more.

To create a visualization with Postbot, do the following:

1. Send your request so it has a response.
1. In the **Body** tab of the response, select the **Visualize** tab.
1. In the **Visualize Response** menu, select a table, chart, or graph visualizer. You can also select **set up with a prompt** and enter a simple text sentence to tell Postbot what you want to do using plain language.
Postman uses artificial intelligence to generate a visualization for you.

For example, try these phrases with Postbot: "create a new visualization,"
"change the type of visualization," or "fix the existing visualization."

For more information on Postbot, visit [About Postbot](/docs/getting-started/basics/about-postbot/).

## Try it out

For more examples of Visualizer code in action, add any of the following collections to your workspace by [forking the collection](/docs/collaborating-in-postman/using-version-control/forking-elements/). You can also [export and then import](/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/) the collection. After you fork or import the collection, open a request from **Collections** in the sidebar, then select **Send**. Postman will display the rendered data in the **Visualize** tab.

* [DIY collection that renders a bar chart using ChartJS](https://www.postman.com/postman/workspace/postman-team-collections/collection/4946945-e5ae7007-0d34-46d4-9491-6f1526eb67ac?action=share&creator=16724969)

    ![Bar Chart](https://assets.postman.com/postman-docs/v10/visualizer-example-v10-22.jpg)

* [Heat map visualization](https://www.postman.com/postman/workspace/postman-team-collections/collection/4946945-db597015-0800-45ce-9824-02114848f47f?action=share&creator=16724969)

    ![Heat Map](https://assets.postman.com/postman-docs/v10/visualizer-temp-v10-22.jpg)

* [Various chart and graph examples](https://www.postman.com/postman/workspace/published-postman-templates/collection/223408-f16e1095-c2f7-415f-af26-6bbe3deb10ea?action=share&creator=16724969)

    ![Map Visualizer](https://assets.postman.com/postman-docs/v10/visualizer-map-v10-22.jpg)

> <img alt="Collections icon" src="https://assets.postman.com/postman-docs/Collections.png#icon" width="24px"> You can see data visualizations in action in a sample collection template. To try out this template, select [Data visualization](https://www.postman.com/templates/c9e72d75-ded7-4135-a721-5d59ddda6d59/Data-visualization).

## Visualizer API

You can access the Visualizer from the [Postman API](/docs/writing-scripts/script-references/postman-sandbox-api-reference/). The `pm.visualizer.set()` method takes three parameters:

* `layout` (required): The first parameter is a [Handlebars](https://handlebarsjs.com/) HTML template string.
* `data` (optional): The second parameter is data that you can bind to the template. The properties of this object can be accessed in the template.
* `options` (optional): The third argument is an `options` object for [`Handlebars.compile()`](https://handlebarsjs.com/api-reference/). You can use this to control how Handlebars compiles the template.

Postman uses the information you pass to `pm.visualizer.set()` to render an HTML page in the sandbox for the Visualizer. Select the __Visualize__ tab for the rendered HTML page. The `layout` string is inserted into the `<body>` of the rendered page, including any JavaScript, CSS, and HTML that the template has.

## Debugging the Visualizer

You can debug a visualization in Postman by right-clicking in the __Visualize__ area and choosing __Inspect visualization__. This will open the Visualizer Developer Tools attached to the sandbox. You can use it in the same way as debugging a web page.

> The Visualizer Developer Tools are only available in the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/).

![Debugging visualizers in Postman](https://assets.postman.com/postman-docs/v10/inspect-vis-v10-22.jpg)

## Next steps

Now that you've learned about visualizing responses in Postman, you can start creating visualizations of your own.

* To get started, you can experiment with the [More Visualizer examples](https://www.postman.com/postman/workspace/e9bb1adb-2f2e-4ace-a482-38c570d65275/overview) workspace. Run the example requests, then adjust the code to get the results you need for your own data.
* For more information about how Postman provides access to your response data inside scripts, visit [Test examples](/docs/writing-scripts/script-references/test-examples/).
