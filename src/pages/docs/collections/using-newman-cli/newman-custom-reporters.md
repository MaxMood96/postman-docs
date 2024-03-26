---
title: "Use Newman external and custom reporters"
updated: 2023-10-05
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Run Collections with Newman | Postman Level Up"
    url: "https://www.youtube.com/watch?v=SQlwGZj97Y4"
  - type: link
    name: "Using Custom Reporters with Newman"
    url: "https://youtu.be/Nxdxx-VaYno"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Newman: run and test your collections from the command line"
    url: "https://blog.postman.com/newman-run-and-test-your-collections-from-the-command-line/"
---

External and custom reporters are useful to generate collection run reports with Newman that cater to specific use cases, for example, logging out the response body when a request (or test) fails. You can use existing external reporters or build your own custom reporters.

## Contents

* [Building custom reporters](#building-custom-reporters)
* [Using external and custom reporters](#using-external-and-custom-reporters)

## Building custom reporters

A custom reporter is a Node.js module with a name of the form `newman-reporter-<name>`.

To create a custom reporter, do the following:

1. In the directory of your choice, create a blank npm package with `npm init`.

1. Add an `index.js` file that exports a function in the following format:

    ```javascript
    function CustomNewmanReporter (emitter, reporterOptions, collectionRunOptions) {
      // emitter is is an event emitter that triggers the following events: https://github.com/postmanlabs/newman#newmanrunevents
      // reporterOptions is an object of the reporter specific options. The usage examples below have more details.
      // collectionRunOptions is an object of all the collection run options: https://github.com/postmanlabs/newman#newmanrunoptions-object--callback-function--run-eventemitter
    }
    module.exports = CustomNewmanReporter
    ```

1. To use your reporter locally, use `npm pack` to create a TGZ file. This can be installed using `npm i -g newman-reporter-<name>.<version>.tgz`. Learn more about [using custom reporters](#using-external-and-custom-reporters).

    > Scoped reporter package names like `@myorg/newman-reporter-<name>` are also supported.

1. (Optional) You can publish your reporter to npm using `npm publish`.

## Using external and custom reporters

You must install the external or custom reporter to use it. For example, to use the [Newman HTML reporter](https://github.com/postmanlabs/newman-reporter-html), install the reporter package:

```bash
$ npm install newman-reporter-html
```

> You can use external reporters with Newman if the reporter works with Newman's event sequence. You can view [examples of how Newman reporters work](https://github.com/postmanlabs/newman/tree/develop/lib/reporters).

The name of the package follows the format `newman-reporter-<name>`, where `<name>` is the actual name of the reporter. The installation is global if Newman is installed globally, and local otherwise. Run `npm install ...` with the `-g` flag for a global installation.

To use local (non-published) reporters, run the command `npm install <path/to/local-reporter-directory>`.

You can use the installed reporter either with the command-line tool, or programmatically. Here, the `newman-reporter` prefix isn't required while specifying the reporter name in the options.

Scoped reporter packages must be specified with the scope prefix. For example, if your package name is `@myorg/newman-reporter-name`, you must specify the reporter with `@myorg/name`.

On the command line:

```bash
newman run /path/to/collection.json -r myreporter --reporter-myreporter-<option-name> <option-value> # The option is optional
```

Programmatically:

```js
var newman = require('newman');

newman.run({
   collection: '/path/to/collection.json',
   reporters: 'myreporter',
   reporter: {
     myreporter: {
       'option-name': 'option-value' // this is optional
     }
   }
}, function (err, summary) {
  if (err) { throw err; }
  console.info('collection run complete!');
});
```

> The reporter options used in these examples are optional.
