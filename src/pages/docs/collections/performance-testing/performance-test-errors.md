---
title: "View error details for performance tests"
updated: 2023-10-16
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Load Testing Your APIs"
    url: "https://youtu.be/a5hWE4hMOoY"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Test your API’s performance by simulating real-world traffic with Postman"
    url: "https://blog.postman.com/postman-api-performance-testing/"
---

During a [performance test](/docs/collections/performance-testing/performance-test-configuration/), requests that result in a response other than a 2xx status code are tracked as errors. You can view details about the top errors that occurred during the test and error trends over time. Use this information to gain insight into when errors are occurring and the possible causes.

## Contents

* [View top errors](#view-top-errors)
* [View error trends](#view-error-trends)
* [Debug errors](#debug-errors)

## View top errors

You can view top errors on the **Summary** tab while the performance test is running or after the test is complete.

Hover over a point on the graph to view the top three errors at that point.

<img alt="Getting error details" src="https://assets.postman.com/postman-docs/v10/performance-test-hover-v10-15.jpg" width="600px"/>

Select the **Error rate** to view the top errors for the entire test.

<img alt="Viewing top errors" src="https://assets.postman.com/postman-docs/v10/performance-test-top-errors-10-15.jpg" width="600px"/>

## View error trends

You can view error trends after the performance test is complete. The error trend shows the top five errors that occurred during the test and the frequency of those errors over time. This information can help you understand how error rates change in response to increased load on your API.

To view error trends, select the **Errors** tab. You can also select the **Error rate** on the **Summary** tab and select **View Error Trends**.

<img alt="Viewing error trends" src="https://assets.postman.com/postman-docs/v10/performance-test-errors-graph-v10-24a.jpg"/>

You can view the following information about the error trends:

* **Error rate** - The percentage of requests that result in an error. Responses other than 2xx responses are considered errors.
* **Errored requests / Total requests sent** - The number of requests resulting in errors compared to the total number of requests sent across all virtual users.
* **Top error** - The type of error that occurred most often during the test.
* **Top request with errors** - The request that had the highest number of error responses. Select the request name to open the request.

From the **Errors** tab, you can take the following actions:

* Hover over a point on the graph to view more details.
* Select a metric in the legend below the graph to show or hide that metric in the graph.
* To view the error trends for a specific request, select the request in the dropdown list. This information can help you understand which requests are associated with certain types of errors. To change the graph back to the default view, select **Reset**.

<img alt="Viewing top errors" src="https://assets.postman.com/postman-docs/v10/performance-test-filter-errors-v10-15.jpg" width="600px"/>

## Debug errors

You can view details about errors that occurred during the performance test to help in the debugging process. The **Errors** tab shows the error classes that were encountered during the test and the number of times each error occurred.

Expand an error class below the graph to view all requests that encountered the error. For each request, you can view a list of unique responses (as determined by headers and body). Postman displays the 10 most common responses and shows a count of how often that response occurred.

Select a request to view details about it, including the response, headers, and request body. Use the controls on the **Response** tab to format, copy, or search within the response. Select the name of a request to open it.

<img alt="Viewing error details" src="https://assets.postman.com/postman-docs/v10/performance-test-errors-detail-v10-17.jpg"/>

> Request and responses details for errors are persisted locally during your current Postman session and aren't saved permanently. If you close the current tab or quit Postman, request and response details will no longer be available. You will still be able to view error classes and error counts for requests.
