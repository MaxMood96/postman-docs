---
title: "Install and run Newman"
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

To get started using Newman, install Node.js, then Newman. Then you can run your collections.

## Contents

* [Installing Newman](#installing-newman)
* [Updating Newman](#updating-newman)
* [Running Newman](#running-newman)
* [Example collection with failing tests](#example-collection-with-failing-tests)
* [Options](#options)
* [Using Newman with CI/CD](#using-newman-with-cicd)
* [Using Newman as a Node.js library](#using-newman-as-a-nodejs-library)

## Installing Newman

Newman is built on Node.js. To run Newman, make sure you have Node.js installed. Follow the [steps to download Node](https://nodejs.org/en/download/package-manager/) for your CI's platform. (Some CI systems have configurations that pre-install Node.)

Ensure you're using Node.js v16 or later. If you're using an earlier version of Newman, learn more about [Node.js version compatibility with Newman](https://github.com/postmanlabs/newman#nodejs).

Install Newman from npm globally on your system, enabling you to run it from anywhere:

```bash
$ npm install -g newman
```

## Updating Newman

If you already have Newman installed, you can upgrade to a later version. Learn more about [upgrading to a later version of Newman](https://github.com/postmanlabs/newman/blob/develop/MIGRATION.md).

## Running Newman

The easiest way to run Newman is to run it with a collection. You can run any collection file from your file system.

You can [export a collection](/docs/getting-started/importing-and-exporting/exporting-data/#exporting-collections) to share as a file.

```bash
$ newman run mycollection.json
```

You can also pass a collection as a URL by [sharing](/docs/collaborating-in-postman/sharing/#sharing-postman-elements) it.

If your collection uses environment variables, you must provide a set of [environment variables](/docs/sending-requests/variables/managing-environments/) used in your collection. Export the template from Postman and run them with the `-e` flag.

```bash
$ newman run https://www.postman.com/collections/cb208e7e64056f5294e5 -e dev_environment.json
```

## Example collection with failing tests

```bash
→ Status Code Test
  GET https://postman-echo.com/status/404 [404 Not Found, 534B, 1551ms]
  1\. response code is 200

┌─────────────────────────┬──────────┬──────────┐
│                         │ executed │   failed │
├─────────────────────────┼──────────┼──────────┤
│              iterations │        1 │        0 │
├─────────────────────────┼──────────┼──────────┤
│                requests │        1 │        0 │
├─────────────────────────┼──────────┼──────────┤
│            test-scripts │        1 │        0 │
├─────────────────────────┼──────────┼──────────┤
│      prerequest-scripts │        0 │        0 │
├─────────────────────────┼──────────┼──────────┤
│              assertions │        1 │        1 │
├─────────────────────────┴──────────┴──────────┤
│ total run duration: 1917ms                    │
├───────────────────────────────────────────────┤
│ total data received: 14B (approx)             │
├───────────────────────────────────────────────┤
│ average response time: 1411ms                 │
└───────────────────────────────────────────────┘

  #  failure        detail

 1\.  AssertionFai…  response code is 200
                    at assertion:1 in test-script
                    inside "Status Code Test" of "Example Collection with
                    Failing Tests"
```

The results of all tests and requests can be exported into a file. You can learn more about [Newman's built-in reporters](/docs/collections/using-newman-cli/newman-built-in-reporters/).

> Newman enables you to use all [libraries and objects](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) that Postman supports to run tests and pre-request scripts.

## Options

Newman provides a rich set of options to customize a collection run. Learn more at [Newman options](/docs/collections/using-newman-cli/newman-options/).

## Using Newman with CI/CD

By default, Newman exits with a status code of 0 if everything runs as expected with no exceptions. You can configure your continuous integration (CI) tools to respond to Newman's exit codes and correspondingly pass or fail a build. You can also use the [`--bail` option](/docs/collections/using-newman-cli/newman-options/#miscellaneous-options) to make Newman stop the run if it encounters a test case error with a status code of 1, which can then be picked up by your CI tool or build system.

## Using Newman as a Node.js library

You can use Newman within your JavaScript projects as a Node.js module. The entire set of Newman CLI functionality is also available to use programmatically. The following example runs a collection by reading a JSON collection stored in your file system:

```javascript
const newman = require('newman'); // require Newman in your project

// call newman.run to pass the `options` object and wait for callback
newman.run({
    collection: require('./sample-collection.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
```

For the complete list of options, see [API Reference](https://github.com/postmanlabs/newman#api-reference) on GitHub.
