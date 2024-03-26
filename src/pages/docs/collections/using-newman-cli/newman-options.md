---
title: "Customize a collection run using Newman command options"
updated: 2023-10-04
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
tags:
  - "newman"
---

Newman provides a rich set of options to customize a collection run. Add options after you specify the collection file from your file system or URL:

```bash
$ newman run mycollection.json [options]
```

You can also retrieve a list of options by running Newman with the `-h` flag:

```bash
$ newman run -h
```

## Contents

* [Basic options](#basic-options)
* [Setup](#setup)
* [Request options](#request-options)
* [SSL options](#ssl-options)
* [Miscellaneous options](#miscellaneous-options)
* [Exit status](#exit-status)
* [Data file example](#data-file-example)

## Basic options

| Option | Details |
|:--|:--|
| `-h`, `--help` | Output usage information |
| `-v`, `--version` | Output the version number |

## Setup

| Option | Details |
|:--|:--|
| `-e`, `--environment [file\|URL]` | Specify the file path or URL of environment variables. |
| `-g`, `--globals [file\|URL]` | Specify the file path or URL of global variables. |
| `-d`, `--iteration-data [file]` | Specify a data file, either JSON or CSV, to use for iteration as a path to a file or as a URL. To learn more, see [Data file example](#data-file-example). |
| `-n`, `--iteration-count [number]` | Specify the number of times for the collection to run. Use with the iteration data file. |
| `--folder [folderName]` | Specify a folder to run requests from. You can specify more than one folder by using this option multiple times, specifying one folder for each time the option is used. |
| `--working-dir [path]` | Set the path of the working directory to use while reading files with relative paths. Default to current directory. |
| `--no-insecure-file-read` | Prevents reading of files situated outside of the working directory. |
| `--export-environment [path]` | The path to the file where Newman will output the final environment variables file before completing a run. |
| `--export-globals [path]` | The path to the file where Newman will output the final global variables file before completing a run. |
| `--export-collection [path]` | The path to the file where Newman will output the final collection file before completing a run. |

## Request options

| Option | Details |
|:--|:--|
| `--delay-request [number]` | Specify a delay (in milliseconds) between requests. |
| `--timeout [number]` | Specify the time (in milliseconds) to wait for the entire collection run to complete execution. |
| `--timeout-request [number]` | Specify the time (in milliseconds) to wait for requests to return a response. |
| `--timeout-script [number]` | Specify the time (in milliseconds) to wait for scripts to complete execution. |

## SSL options

| Option | Details |
|:--|:--|
| `--ssl-client-cert [path]` | The path to the public client certificate file, enabling you to make authenticated requests. |
| `--ssl-client-key [path]` | Optionally, you can add the path to the private client key that verifies certificate ownership. |
| `--ssl-client-passphrase [passphrase]` | Optionally, you can add secret passphrase to protect the private client key. |
| `--ssl-client-cert-list [path]` | <p>The path to the configuration JSON file containing the SSL client certificate list. This option enables you to set several SSL client certificates according to a URL or hostname. To learn more, [see an example](https://github.com/postmanlabs/newman/blob/develop/examples/ssl-client-cert-list.json).</p> <p>This option has a higher priority over `--ssl-client-cert`, `--ssl-client-key,` and `--ssl-client-passphrase` options. If there is no URL match in the SSL client certificate list, these options are used instead.</p> |
| `--ssl-extra-ca-certs [path]` | The path to the file that has one or more trusted CA certificates in PEM format. You can use this option when you don't want to use the [`--insecure` option](#miscellaneous-options).

## Miscellaneous options

| Option | Details |
|:--|:--|
| `-r [reporter-name]`, `--reporters [reporter-name]` | Generate a report about the current collection run. Specify one or more reporter names: `cli` (default when using Newman as a CLI), `json`, `junit`, `progress`, and `emojitrain`. Specify more than one reporter name as a comma-separated list, for example, `-r cli,json`. Learn more about [using reporters with Newman](/docs/collections/using-newman-cli/newman-built-in-reporters/). |
| `--bail [optionalModifiers]` | <p>Stops the collection run when a test script fails.</p> <p>Optionally, you can add modifiers to this option: `folder` and `failure`. You can add `folder` to skip the entire collection run if an invalid folder was specified using the `--folder` option, or an error was encountered in general. You can add `failure` to stop an entire collection run (after completing the current test script) when a test fails.</p> |
| `--color [value]` | Specify the color of the CLI output: `on`, `off`, or `auto` (default).
| `--disable-unicode` | Turn off Unicode text encoding. When supplied, all symbols in the output will be replaced by their plain text equivalents. |
| `-k`, `--insecure` | Turn off SSL verification checks, and allow self-signed SSL certificates. |
| `-x`, `--suppress-exit-code` | Specify whether to override the default exit code for the current run. Continue running tests even after a failure, but exit with `code=0`. To learn more, see [Exit status](#exit-status). |
| `--ignore-redirects` | Turn off automatic following of `3XX` redirect responses. |
| `--verbose` | Show detailed information of collection run and each request sent. |
| `--cookie-jar [path]` | Specify the file path for a JSON Cookie Jar. Uses `tough-cookie` to deserialize the file. |
| `--export-cookie-jar [path]` | The path to the file where Newman will output the final cookie jar file before completing a run. Uses `tough-cookie` to serialize the file. |
| `--global-var "[global-variable-name]=[global-variable-value]"` | Specifies global variables on the command line, in a key=value format. Multiple global variables can be added by using `--global-var` multiple times, for example, `--global-var "foo=bar" --global-var "alpha=beta".` |
| `--env-var "[environment-variable-name]=[environment-variable-value]"` | Allows you to set environment variables in a key=value format on the command line. You can add multiple environment variables using `--env-var` multiple times, for example: `--env-var "foo=bar" --env-var "alpha=beta"`. |

## Exit status

By default, Newman exits with a status code of 0 if everything runs well.

Continuous integration (CI) tools respond to these exit codes and correspondingly pass or fail a build.

You can use `-x` or `--suppress-exit-code` options to override the default exit code for the current run.

You can use the `--bail` option to tell Newman to stop on a test case error with a status code of 1, which can then be picked up by a CI tool or build system.

```bash
$ newman run PostmanCollection.json -e environment.json --bail
```

## Data file example

To provide a different set of data, such as variables for each iteration, you can use the `-d` option to specify a JSON or CSV file.

For example, a data file such as the one shown below runs two iterations, with each iteration using a set of variables.

```json
[{
    "url": "http://127.0.0.1:5000",
    "user_id": "1",
    "id": "1",
    "token_id": "123123",
},
{
    "url": "http://postman-echo.com",
    "user_id": "2",
    "id": "2",
    "token_id": "899899",
}]
```

```bash
$ newman run mycollection.json -d data.json
```

Here's an example of the CSV file for this set of variables:

```bash
url, user_id, id, token_id
http://127.0.0.1:5000, 1, 1, 123123123
http://postman-echo.com, 2, 2, 899899
```
