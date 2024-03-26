---
title: "Capture traffic from a web browser using Postman Interceptor"
updated: 2023-10-16
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman Interceptor Demo"
    url: "https://youtu.be/Swjims0aOl4"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Interceptor: The Next Generation View Source for The API Economy"
    url:  "https://blog.postman.com/postman-interceptor-the-next-generation-view-source-for-the-api-economy/"
---

Postman Interceptor is a browser extension that acts as a companion to the Postman desktop app. Interceptor enables you to capture network requests and cookies directly from a web browser.

After you install the Interceptor extension, you can start an _Interceptor session_, which is a time-bound period of traffic capture. You can pause, restart, and stop an Interceptor session, then later start another one. Each session is logged in the **History** tab and displays the total session time, a traffic overview, and all traffic captured. You can also send requests and responses to a collection and save cookies to the Postman cookie jar.

> You can also use Postman Interceptor to automatically sync cookies from a web browser to the Postman cookie jar. Learn more about [syncing cookies](/docs/sending-requests/capturing-request-data/syncing-cookies/).

## Contents

* [Installing Interceptor](#installing-interceptor)
    * [Installing Interceptor Bridge](#installing-interceptor-bridge)
* [Capturing traffic with Interceptor](#capturing-traffic-with-interceptor)
    * [Starting an Interceptor session](#starting-an-interceptor-session)
    * [Viewing Interceptor results in Postman](#viewing-interceptor-results-in-postman)
    * [Saving captured requests to a collection](#saving-captured-requests-to-a-collection)

## Installing Interceptor

Use the links below to download and install the latest version of the Interceptor extension for your web browser. Interceptor is available for the following browsers:

* [Google Chrome](https://go.pstmn.io/interceptor-chrome)
* [Apple Safari](https://go.pstmn.io/interceptor-safari)
* [Mozilla Firefox](https://go.pstmn.io/interceptor-firefox)
* [Microsoft Edge](https://go.pstmn.io/interceptor-edge)

To open the Interceptor extension, select the Interceptor icon in your browser's toolbar.

### Installing Interceptor Bridge

If you're on Linux (all Postman versions), macOS (Postman v10.16 or earlier), or Windows (Postman v10.17 or earlier), you need to install Interceptor Bridge before you can capture requests and cookies. If you're on macOS (Postman v10.17.4 or later) or Windows (Postman v10.18 or later), you can skip this step. To check which version of Postman you're using, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings > About**.

To install Interceptor Bridge, select <img alt="Capture icon" src="https://assets.postman.com/postman-docs/icon-capture.jpg#icon" width="15px"> **Capture requests** in the Postman footer. Then select the **Via Interceptor** tab and select **Install Interceptor Bridge**.

## Capturing traffic with Interceptor

> You can't use Interceptor with the [Postman web app](/docs/getting-started/installation/installation-and-updates/#web-limitations). Make sure you've installed the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/).

Start an Interceptor session to capture traffic and cookies from your web browser. After you stop the session, captured traffic will automatically open in Postman. All communication between Interceptor and Postman is automatically encrypted.

### Starting an Interceptor session

> You can't have more than one proxy or Interceptor session running at the same time.

1. Open the Interceptor extension by selecting the Interceptor icon in your browser's toolbar.
1. Make sure the message **Ready to capture** appears at the bottom of the Interceptor window.

    If the message **Interceptor disconnected** appears, make sure you've [installed the Postman desktop app](/docs/getting-started/installation/installation-and-updates/) and that the Postman desktop app is open. If you're using Linux (all Postman versions), macOS (Postman v10.16 or earlier), or Windows (Postman v10.17 or earlier), make sure you've [installed Interceptor Bridge](#installing-interceptor-bridge).

1. (Optional) On the **Capture Requests** tab, use the dropdown menus to limit the requests and responses that are captured while the session is active. Postman will capture requests that match the selected criteria and will ignore requests that don't match. You can change the filters at any time during the session:

    * **Methods** - Limit captured requests to the selected methods.
    * **Domains & URL** - Limit captured requests to the domains and URLs that match the specified criteria. You can use regular expressions. Press **Enter** to apply the specified filters. To remove a filter, select the remove icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> next to the filter.

1. On the **Capture Requests** tab, select **Start Capture**.

    Interceptor starts capturing requests and cookies as you use your web browser. The Interceptor extension shows recent requests and the duration of the session.

1. When you're done capturing traffic, select **Stop Capture** to end the session.

<img alt="Interceptor extension" src="https://assets.postman.com/postman-docs/v10/interceptor-extension-v10-17a.jpg" width="462px" />

> You can also use the Interceptor extension to automatically sync cookies from your browser to the Postman cookie jar, without starting an Interceptor session. Open the Interceptor extension from your browser's toolbar and select the **Sync Cookies** tab. Enter the domains you want to sync cookies for and select **Sync Cookies**. For more information, see [Syncing cookies](/docs/sending-requests/capturing-request-data/syncing-cookies/).

### Viewing Interceptor results in Postman

When you stop a session, Postman automatically opens the results in Postman. You can also select **View in Postman**<img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> to open the session results in Postman.

To view the Interceptor session again later, select **History** in the sidebar, then select the Interceptor session. You can also select <img alt="Past sessions icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> **View Past Sessions** on the Interceptor session tab.

The **Overview** tab shows summary graphs of traffic captured in the Interceptor session. Use the dropdown menu to group requests by method, domain, or content type. The header also displays the session start time, session size, duration, and source.

You can work with the Interceptor session results in the following ways:

* To rename the Interceptor session, select the name **Interceptor debug session** and enter a new name.
* Select the **Requests** tab to view information about incoming requests and responses, or select the **Cookies** tab to view information about captured cookies.
* Use the search box to find specific requests or cookies.
* Select the sort icon <img alt="Column sort icon" src="https://assets.postman.com/postman-docs/v10/icon-column-sort.jpg#icon" width="12px"> in the column headers to sort the results in ascending or descending order.
* Use the filter icons <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px"> in the column headers to filter the list of requests. Postman shows requests that match the selected filters and hides requests that don't match.
* Select a request to view more details.
* Select a request URL to open it as a new API request in Postman.
* To delete a request or cookie, select it and select <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> **Delete**.
* To add a cookie to the [Postman cookie jar](/docs/sending-requests/response-data/cookies/), select it and select **+ Add to Cookie Jar**.

<img alt="Viewing Interceptor results" src="https://assets.postman.com/postman-docs/v10/interceptor-view-results-v10-22.jpg" />

### Saving captured requests to a collection

You can save requests captured during an Interceptor session to a collection.

1. Select **History** in the sidebar, then select the Interceptor session with the requests you want to save.
1. Select the checkbox next to the requests you want to save, or select the checkbox in the column header to select all requests.
1. Select **Save Requests**.
1. Select the collection where you want to save the requests, or select **New collection** to create a new collection.
1. Choose how to organize the requests in the collection. You can select the checkboxes to group the requests in folders organized by **Domain name**, **Endpoints**, or both.
1. Select **Save**.

<img alt="Adding captured requests to a collection" src="https://assets.postman.com/postman-docs/v10/interceptor-add-to-collection-v10-22.jpg" />
