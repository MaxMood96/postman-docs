---
title: "Test your API using the Collection Runner"
updated: 2024-01-18
search_keyword: "postman.setNextRequest, setNextRequest"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Debugging Collection Runs | Postman Level Up"
    url: "https://youtu.be/EnrpXlNe2dc"
  - type: link
    name: "Log Response Data in Collection Runs | Postman Level Up"
    url: "https://youtu.be/UreV_7fHKiU"
  - type: link
    name: "Intro to Postman | Run a Collection"
    url: "https://youtu.be/8UR1NzuT7jg"
  - type: dynamic_blog
    name: "Blog posts"
    blog_tag: "collections"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Lightspeed uses a collection runner to improve testing and QA times"
    url: "https://www.postman.com/case-studies/lightspeed-commerce/"
  - type: link
    name: "Axis Bank uses a collection runner to test APIs"
    url: "https://www.postman.com/case-studies/axis-bank/"
---

The _Collection Runner_ enables you to run the requests in a Postman Collection in a specified order to test the functionality of your API. The Collection Runner logs the [test results](/docs/writing-scripts/test-scripts/) for each request, and it can use [scripts](/docs/writing-scripts/intro-to-scripts/) to pass data between requests and change the request workflow.

Collection runs enable you to automate your functional API testing. You can schedule collection runs in the Postman cloud with the [Collection Runner](/docs/collections/running-collections/scheduling-collection-runs/) or with [monitors](/docs/collections/running-collections/scheduling-collection-runs-monitors/). You can also integrate collection runs with your CI/CD pipeline using [the Postman CLI](/docs/postman-cli/postman-cli-overview/), a Postman tool that enables you to run and test collections from the command line.

> You can use the Collection Runner to test the performance of your API with the same requests, collections, and environments you use for functional API tests. Learn more about [testing API performance](/docs/collections/performance-testing/testing-api-performance/).

## Contents

* [Configure a collection run](#configure-a-collection-run)
* [Debug run results](#debug-run-results)
* [Export collection runs](#export-collection-runs)
* [View run history](#view-run-history)
* [Automate collection runs](#automate-collection-runs)
* [Next steps](#next-steps)

## Configure a collection run

You can manually run the requests in a [collection](/docs/collections/using-collections/#creating-collections) or a [folder](/docs/collections/using-collections/#adding-folders-to-a-collection).

1. Select **Collections** in the sidebar and select the collection or folder you want to run.

    > You can also run a collection or folder that's linked to an API. Learn more about [adding a collection to an API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/#adding-a-collection).

1. On the **Overview** tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

    <img alt="Select Run from the collection overview" src="https://assets.postman.com/postman-docs/v10/collection-runner-button-v10-22.jpg" width="380px"/>

    > You can also select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> __Runner__ from the Postman footer and drag a collection from __Collections__ or __History__ in the sidebar.

1. On the **Functional** tab, select **Run manually**.
    > You can also [schedule runs](/docs/collections/running-collections/scheduling-collection-runs/) and [automate runs with the CLI](/docs/postman-cli/postman-cli-run-collection/).

1. If you want your collection to run with an environment, select it using the environment selector at the top right of Postman. You can also select __Environments__ in the sidebar, then select the environment you want to use.

1. Choose any configuration options:

    * **Iterations** - The number of iterations for your collection run. You can also run collections multiple times with different data sets to [build workflows](/docs/collections/running-collections/building-workflows/).
    * **Delay** - An interval delay in milliseconds between each request.
    * **Data** - A [data file](/docs/collections/running-collections/working-with-data-files/) for the collection run.
    * **Persist responses for a session** - Log the response headers and bodies so you can review them after running the collection. For large collections, persisting responses may affect performance.

        > Request and response details are persisted locally during your current Postman session and aren't saved permanently. Signing out of Postman, signing into another device with the same account, or refreshing your browser will end your session and remove the logged data.
        >
        > Response and request details are available for the person who started the collection run. Other team members can't view details for collection runs that you start.

    * **Advanced settings**
      * **Stop run if an error occurs** - By default, the collection run stops if an exception is encountered within a script or if there's a problem sending a request. Clear this checkbox if you want the collection run to continue after an error occurs.
      * **Keep variable values** - Persist the variables used in the run, so that any variables updated by the run will remain changed after it completes. If you don't persist variables, changes aren't saved after the run completes. _Note that persisting variables in the collection run will update the current value and not the initial value of variables._
      * **Run collection without using stored cookies** - If your requests use cookies, you can optionally deactivate them for a collection run.
      * **Save cookies after collection run** - Save the cookies used in this session to the cookie manager. Any values changed by requests during the run will remain after it completes.

1. By default, your requests run in the sequence they're listed in the collection. If you need to change the order of execution, select and drag a request to its new location in the order. You can also remove an individual request from the run by clearing the checkbox next to its name.

    > You can alter the flow of execution from your request scripts using `setNextRequest` to [create workflows](/docs/collections/running-collections/building-workflows/).

1. When you've completed your configuration, select **Run (collection name)**.

![Collection Runner configuration](https://assets.postman.com/postman-docs/v10/collection-run-configuration-v10-22.jpg)

> Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of collection runs you can use each month. This limit applies to collections that you run in a workspace using the **Run manually** option. This limit doesn't apply to [scheduled collection runs](/docs/collections/running-collections/scheduling-collection-runs/) in the Postman cloud. A collection run with multiple iterations counts as a single run.
>
> A message will display in the Collection Runner when you're approaching your usage limit. Learn more about [resource usage](/docs/billing/resource-usage/) in Postman.

## Debug run results

When running collections manually, Postman displays the results of your request executions and test results in real time. You can view the source of the collection run, selected environment, number of iterations, total duration, number of tests, and average response time.

![Collection Runner results](https://assets.postman.com/postman-docs/v10/collection-run-results-v10-22.jpg)

To learn more about what happened during the collection run, do any of the following:

* Select a request to view details about the request. You can view general information about the request and the request headers and body. You can also view the response headers and body if you selected the **Persist responses for a session** option when [configuring the collection run](#configure-a-collection-run).

* Select the name of a request to open the request in a new tab. You can view any test scripts or select **Send** to send the request again.

* Select the **Passed**, **Failed**, or **Skipped** tabs to filter the results by test status. To show all requests, select the **All Tests** tab. If any tests in a request script fail during a collection run, the whole request fails.

* If your collection run included more than one iteration, select an iteration number to jump to the results of a specific iteration.

* Select **View all runs** to view a list of past runs. Learn more about [viewing run history](#view-run-history).

* Select **View Summary** to view a summary of the collection run, including test results. To return to the full results, select **View Results**.

![Collection Runner summary](https://assets.postman.com/postman-docs/v10/collection-run-summary-v10-22.jpg)

### Run the collection again

After reviewing the results of the collection run, you can run the collection again. For example, you can edit the code for a failed test and run the collection again to check if the test succeeds.

To run the collection again from the run results, do one of the following:

* Select **Run Again** to run the collection again using the same settings.
* Select **+ New Run** to configure a new run for the collection. Make changes to any settings, and then select **Run (collection name)** to run the collection again.
* Select **Automate Run** to automate runs for the collection. You can [schedule a run](/docs/collections/running-collections/scheduling-collection-runs/), [run using the Postman CLI](/docs/postman-cli/postman-cli-run-collection/#running-a-collection-locally-with-the-postman-cli), or [integrate runs with your CI/CD pipeline](/docs/postman-cli/postman-cli-run-collection/#running-a-collection-in-cicd).

> If you changed the selection or order of requests, or any other settings, the custom order and configuration are saved with the run results.
>
> To run the collection again later using your custom configuration, select the **Runs** tab in the collection to [view past runs](#viewing-past-runs). Select the view report icon <img alt="View report icon" src="https://assets.postman.com/postman-docs/v10/icon-view-report.jpg#icon" width="16px"> next to a run to open the collection run results. From here you can select **Run Again** to run the collection again using the same settings.

## Export collection runs

You can share collection run results with others by exporting the results from the Collection Runner.

> The option to export a collection run report is available in the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/) but not in the Postman web app.

To export a collection run, do the following:

1. Open the collection run in the __Collection Runner__. You can also access the collection run using __History__ in the sidebar if you don't have the run open.
1. Select <img alt="Full screen icon" src="https://assets.postman.com/postman-docs/icons/icon-export-v10-22.jpg#icon" width="16px"/> __Export Results__ at the top right to download the run.
1. Choose a location to save your downloaded collection run, then select **Save**.

You can import the results of a collection run that was exported to a file. Select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> __Runner__ from the Postman footer and drag the exported file into the Collection Runner.

## View run history

Each collection has a **Runs** tab you can use to view past runs, scheduled runs, and performance runs. You can also view details such as test counts and average response times.

![Past runs tab](https://assets.postman.com/postman-docs/v10/collection-run-tab-v10-22.jpg)

### View past runs

The **Past runs** tab has controls to select how many recent collection runs to view. You can filter the displayed runs by user, by run status, and by source (Collection Runner or Postman CLI).

The following are displayed for each collection run:

* A checkbox for each run and an option to select all runs. Select one or more collection runs and select **Delete** to remove them.
* The start time of the collection run.
* The run source, duration, all tests, passed tests, failed tests, skipped tests, and the average response time. Select any of these items to sort the table by that item. Select again to change the sort order.

Hover over an item to show the following controls:

* <img alt="View report icon" src="https://assets.postman.com/postman-docs/v10/icon-view-report.jpg#icon" width="16px"> **View Report** - Select to open the full results for the collection run. Learn more about [debugging run results](#debug-run-results).
* <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px"> **Share** - Select to share the results with another team member. This provides a link you can give to other team members so they can view details of this run. Note that this doesn't work in personal workspaces.

### View scheduled runs

The **Scheduled runs** tab shows all the scheduled runs for the current collection. The following are displayed for each scheduled run:

* The upcoming run's scheduled time
* The name of the scheduled run
* The environment associated with the scheduled run (if any)

Hover over an item to show the following controls:

* **View** - Select to open a page detailing the scheduled collection run's latest results.
* **The more actions icon** <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> - Select to [pause, resume, edit, or delete](/docs/collections/running-collections/scheduling-collection-runs/#pausing-or-resuming-a-scheduled-run) the schedule.

### View performance runs

The **Performance runs** tab shows past [performance runs](/docs/collections/performance-testing/performance-test-configuration/) for the collection. You can view metrics for each run, including the number of virtual users (VUs), duration, total number of requests, requests per second, average response time, and error rate.

Select the run number to view a graph and full details for the performance run. Learn more about [viewing performance metrics](/docs/collections/performance-testing/performance-test-metrics/).

![Performance runs tab](https://assets.postman.com/postman-docs/v10/performance-test-past-runs-v10-22.jpg)

## Automate collection runs

In addition to running collections manually, the Collection Runner enables you to [schedule collections](/docs/collections/running-collections/scheduling-collection-runs/) to run automatically at specified times in the Postman cloud. You can also use collection runs in conjunction with other Postman utilities to build automation into your API projects.

* [The Postman CLI](/docs/postman-cli/postman-cli-overview/) command-line interface enables you to run collections and build them into your development pipeline, responding to test outcomes to support your API performance.
* The [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/) interface also enables you to run collections from the command line.
* Adding a [monitor](/docs/monitoring-your-api/intro-monitors/) to your collection lets you schedule collection runs and stay informed of any issues.
* You can also set up a [collection webhook](/docs/collections/running-collections/collection-webhooks/) to trigger a collection run at a specific time with your own custom payload.

## Next steps

Use the Collection Runner fundamentals you've learned to extend its functionality with workflows.

* To learn how to use scripts to build workflows with conditional sequences for running the requests in your collections, visit [Building request workflows](/docs/collections/running-collections/building-workflows/).

> <img alt="Collections icon" src="https://assets.postman.com/postman-docs/Collections.png#icon" width="24px"> See how an integration test can ensure that all individual components of an API function together seamlessly. To try out this template, select [Integration testing](https://www.postman.com/templates/fe506090-ca91-4340-bea9-82d2c3d2bb9a/Integration-testing).
