---
title: "Postman Insights Agent reference"
updated: 2024-01-26
early_access: true
plan: alpha
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Postman Live Insights: Faster, Better API Debugging"
    url: "https://blog.postman.com/introducing-postman-live-insights-faster-better-api-debugging/"
  - type: link
    name: "Postman Live Insights: automatically discover, monitor, and add APIs"
    url: "https://www.postman.com/product/live-insights/"
---

Use functions and parameters to customize your Postman Insights Agent deployment and filter the HTTP requests in your Insights Project.

## apidump

Capture and store a sequence of requests and responses to a service by observing network traffic. See [Examples](#apidump-examples).

### Required flags

* `--project <projectID>` - The Insights Project with which to associate the captured traffic.

### Optional flags

Filter your traffic using optional flags to return the information you’re interested in.

* `--rate-limit number` - Set the maximum number of HTTP request/response pairs to collect per minute. If the number of samples exceeds this amount, the Insights Agent randomly samples events, and sends only the specified number to the Postman cloud.
* `--path-exclusions regex1,regex2...` - Remove HTTP paths matching regular expressions. To filter out requests fetching files with `.png` or `.jpg` extensions, specify `--path-exclusions .*\.png` and `--path-exclusions .*\.jpg`. For example, if the URL is `http://10.0.0.1/junk.jpg`, then `path-exclusions` is matched against `"junk.jpg"`.
* `--path-allow regex1,regex2...` - Only capture HTTP requests whose URL path matches any one of the given regular expressions.
* `--host-exclusions regex1,regex2...` - Remove HTTP requests whose host URL matches any one of the given regular expressions. You can exclude the host in the form of a regex that matches the IP address if you’re collecting all the junk traffic to the IP addresses instead of your named services. For example, if the URL is `http://10.0.0.1/junk.jpg`, then `host-exclusions` is matched against `"10.0.0.1"`.
* `--host-allow regex1,regex2...` - Only capture HTTP requests whose host URL matches any one of the given regular expressions.

### apidump examples

* Capture all traffic from your collection and send it to the Insights Agent.

    ```bash
    postman-insights-agent apidump --project <projectID>
    ```

## Next steps

* [About Postman Insights Early Access](/docs/insights/insights-early-access/)
* [Postman Insights overview](/docs/insights/insights-overview/)
* [Get started with Postman Insights](/docs/insights/insights-gs/)
* [Diagnose and troubleshoot errors](/docs/insights/insights-troubleshoot/)
