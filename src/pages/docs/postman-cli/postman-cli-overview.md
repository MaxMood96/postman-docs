---
title: "Explore Postman's command-line companion"
updated: 2023-03-20
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Run collections with Postman CLI | The Exploratory"
    url: "https://youtu.be/DKxCVo1_ELg"
  - type: link
    name: "View Postman CLI Runs in Postman | Postman Level Up"
    url: "https://youtu.be/YTzlLLtsJls"
  - type: link
    name: "How We Built It: The Postman CLI"
    url: "https://www.youtube.com/live/mpMZTodbbnA?feature=share"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Streamline your API release process with the Postman CLI"
    url: "https://blog.postman.com/streamline-your-api-release-process-with-the-postman-cli/"
  - type: link
    name: "Making the switch: empowering manual testers to automate their API tests"
    url: "https://blog.postman.com/switching-from-manual-to-automated-api-testing/"
  - type: link
    name: "The Postman CLI vs. Newman: choose the right tool for you"
    url: "https://blog.postman.com/postman-cli-vs-newman/"
---

The Postman CLI is a secure command-line companion for Postman. It's secured and supported by Postman. The Postman CLI enables you to:

* Run a collection with its collection ID or path.
* Send run results to Postman by default.
* Supports sign in and sign out.
* Check API definitions against configured API Governance and API Security rules

## Contents

* [Comparing the Postman CLI and Newman](#comparing-the-postman-cli-and-newman)
* [Deciding which command-line companion to use](#deciding-which-command-line-companion-to-use)
* [About the Postman CLI and Postman API usage](#about-the-postman-cli-and-postman-api-usage)

## Comparing the Postman CLI and Newman

The table below shows some high-level differences between the Postman CLI and Newman.

| Postman CLI  | Newman  |
|---|---|
| Created by Postman | Created by Postman |
| Maintained and supported by Postman | Open source; supported by community contributions |
| Supports collection runs| Supports collection runs  |
| Automatically sends collection run results to Postman by default | Supports ingesting run results to Postman using a reporter |
| Package is signed by Postman | Package isn't signed by Postman |
| Distributed as a downloadable package | Distributed on npm |
| Downloadable programmatically | Downloadable programmatically
| Not available as a library | Available as a library
| Supports sign in and sign out | Doesn't support sign in and sign out |
| Checks API definition against configured API Governance and API Security rules | Doesn't check API definition against configured API Governance and API Security rules |

## Deciding which command-line companion to use

Both the Postman CLI and Newman enable you to run and test collections directly from the command line. One may be a better fit than the other, depending on your use case or preferences.

For example, assume you already manage your own security for open-source software, and you want to run collections from a script. Also assume you want visibility into any software you build into your CI/CD pipeline. Newman would be a good fit for this use case because Newman's repository is public and Newman isn't signed or secured by Postman.

Here's another example. Assume you don't already support or secure any open-source software, and you want any software you use to be signed and secured by its developer. The Postman CLI would be a good fit for this use case because the Postman CLI is signed and secured by Postman.

## About the Postman CLI and Postman API usage

Some Postman CLI commands use the [Postman API](/docs/developer/postman-api/intro-api/) to fetch data from and send data to Postman's servers. These commands count toward your monthly [Postman API usage](/docs/billing/resource-usage/#postman-api-usage). The number of Postman API calls you can make each month depends on your [Postman plan](https://www.postman.com/pricing/).

The following Postman CLI commands make calls to the Postman API and count toward your Postman API usage:

* `postman login` - Uses one call to authenticate a user with a Postman API key.
* `postman collection run` - Uses one call to fetch a collection by ID, one call to fetch an environment (if any), and one call to send data back to Postman.
* `postman api lint` - Uses one call to fetch the governance and security rules and one call to send a report back to Postman.

Learn more about [Postman CLI command options](/docs/postman-cli/postman-cli-options/).
