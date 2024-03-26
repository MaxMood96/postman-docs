---
title: "Use Newman built-in reporters"
updated: 2023-10-04
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Run Collections with Newman | Postman Level Up"
    url: "https://www.youtube.com/watch?v=SQlwGZj97Y4"
---

Newman has built-in reporters you can use to generate collection run reports. You can use the following reporters: CLI, JSON, JUnit, Progress, and Emoji train.

## Contents

* [Use built-in reporters](#use-built-in-reporters)
    * [About built-in reporters](#about-built-in-reporters)
* [Configure built-in reporters](#configure-built-in-reporters)
    * [CLI reporter](#cli-reporter)
    * [JSON reporter](#json-reporter)
    * [JUnit reporter](#junit-reporter)

## Use built-in reporters

To generate reports of the current collection run, you can configure reporters using the `-r` or `--reporters` options. Then specify the reporters you'd like to generate reports for: `cli`, `json`, `junit`, `progress`, and `emojitrain`. You can specify one or more reporters. If you specify more than one reporter, separate reporter names as a comma-separated list, for example, `-r cli,json`. To learn more about each reporter, see [About built-in reporters](#about-built-in-reporters).

```bash
$ newman run PostmanCollection.json -r cli,json
```

> If the built-in reporters don't align with your use case, you can [use an external reporter or build a custom reporter](/docs/collections/using-newman-cli/newman-custom-reporters/).

The CLI reporter (`cli`) is turned on by default when using Newman in the terminal. If you turn on one or more reporters, for example `-r json`, the CLI reporter will be turned off. To turn on the CLI reporter, you must specify the CLI reporter, for example, `-r cli,json`.

### About built-in reporters

Each reporter generates a report about your collection run in a different format.

* **CLI** - Displays the report in the terminal.
* **JSON** - Creates a JSON file containing the report.
* **JUnit** - Creates an XML file containing the report.
* **Progress** - Displays a progress bar in the terminal showing the progress of the collection run.
* **Emoji train** - Displays emojis in the terminal that represent the report's details.

## Configure built-in reporters

If you specify more than one reporter, you can specify an option for one reporter using the `--reporter-[reporter-name]-[reporter-option]` option. The following example silences the CLI reporter only:

```bash
$ newman run PostmanCollection.json -r cli,json --reporter-cli-silent
```

If you specify more than one reporter and all reporters should accept the same option, you can specify an option for all reporters using the `--reporter-[reporter-option]` option. The following example passes `silent: true` to both the CLI and JSON reporters:

```bash
$ newman run PostmanCollection.json -r cli,json --reporter-silent
```

### CLI reporter

The CLI reporter is turned on by default when using Newman as a CLI, and prints the report to the terminal. You can use the following options to configure the CLI reporter:

| Option | Details |
|:--|:--|
| `--reporter-cli-silent` | The CLI reporter is turned off, and you don't see an output in the terminal. |
| `--reporter-cli-show-timestamps` | Prints the local time that each request was made. |
| `--reporter-cli-no-summary` | Doesn't print the statistical summary table. |
| `--reporter-cli-no-failures` | Prevents the run failures from being separately printed. |
| `--reporter-cli-no-assertions` | Turns off the output for assertions as they happen. |
| `--reporter-cli-no-success-assertions` | Turns off the output for successful assertions as they happen. |
| `--reporter-cli-no-console` | Turns off the output of `console.log()` (and other console methods) from pre-request and test scripts. |
| `--reporter-cli-no-banner` | Turns off the Newman banner shown at the beginning of each collection run. |

The following example prints the time that each request was made:

```bash
$ newman run PostmanCollection.json -r cli,json --reporter-cli-show-timestamps
```

### JSON reporter

The JSON reporter creates a JSON file in your working directory that contains the report. You can use the following option to configure the JSON reporter:

| Option | Details |
|:--|:--|
| `--reporter-json-export [path]` | <p>Specify a path where the output JSON file will be created in your file system. By default, the JSON file is created in `/newman` in your working directory. If the `/newman` directory doesn't exist, it will be created. If the specified path is an existing directory, the file will be created in that directory.</p> <p>Optionally, you can specify a name for the file, for example, `... --reporter-json-export collection-run-1.json`.</p> |

The following example generates the output JSON file for the JSON reporter in the `/json-file-reports` directory:

```bash
$ newman run PostmanCollection.json -r cli,json --reporter-json-export json-file-reports
```

### JUnit reporter

The JUnit reporter creates an XML file in your working directory that contains the report. You can use the following option to configure the JUnit reporter:

| Option | Details |
|:--|:--|
| `--reporter-junit-export [path]` | <p>Specify a path where the output XML file will be created in your file system. By default, the XML file is created in `/newman` in your working directory. If the `/newman` directory doesn't exist, it will be created. If the specified path is an existing directory, the file will be created in that directory.</p> <p>Optionally, you can specify a name for the file, for example, `... --reporter-junit-export collection-run-1.xml`.</p> |

The following example generates the output XML file for the JUnit reporter in the `/xml-file-reports` directory:

```bash
$ newman run PostmanCollection.json -r cli,junit --reporter-junit-export xml-file-reports
```
