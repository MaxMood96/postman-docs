---
title: "Capture traffic using the Postman built-in proxy"
updated: 2023-10-16
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Capture API Calls With a Proxy"
    url: "https://youtu.be/bjrCHUITZ3k"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Test Your Web Apps Using the Postman Proxy"
    url: "https://blog.postman.com/testing-web-app-using-postman-proxy/"
  - type: link
    name: "Capture Responses Using the Postman Proxy"
    url: "https://blog.postman.com/capture-responses-using-the-postman-proxy/"
  - type: link
    name: "Reverse engineering an API"
    url: "https://medium.com/better-practices/reverse-engineering-an-api-403fae885303"
---

> **Follow these steps if you're on macOS (Postman v10.17 or later) or Windows (Postman v10.18 or later).** If you're on Linux (all Postman versions), macOS (Postman v10.16 or earlier), or Windows (Postman v10.17 or earlier), go to [Capturing HTTP requests](/docs/sending-requests/capturing-request-data/capturing-http-requests/) instead. To check which version of Postman you're using, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings > About**.

If you are using APIs to build client-side applications like mobile apps, websites, or desktop applications, you may want to inspect the HTTP and HTTPS request traffic that's being sent and received in the application. Sometimes you might discover APIs that aren't even documented. You can capture network traffic, including requests, responses, and cookies, using the proxy that's built into Postman.

## Contents

* [How the built-in proxy works](#how-the-built-in-proxy-works)
* [Using the Postman proxy](#using-the-postman-proxy)
    * [Step 1: Start a proxy session](#step-1-start-a-proxy-session)
    * [Step 2: Control the proxy session](#step-2-control-the-proxy-session)
    * [Step 3: View the proxy session results](#step-3-view-the-proxy-session-results)
    * [Step 4: Stop the proxy session](#step-4-stop-the-proxy-session)
    * [Step 5: Configure the proxy on a client device](#step-5-configure-the-proxy-on-a-client-device)

## How the built-in proxy works

The Postman desktop app has a built-in proxy that can capture HTTP and HTTPS traffic. Here's how it works:

1. The Postman desktop app listens for any calls made by a client app or device using the proxy.
1. The Postman proxy captures the request and forwards it to the server.
1. The server returns a response to the Postman proxy, where it can also be saved.
1. The response is returned back to the client.

![Postman capture proxy](https://assets.postman.com/postman-docs/proxymobile-aa.jpeg)

Similar to the [Interceptor extension](/docs/sending-requests/capturing-request-data/interceptor/), the Postman proxy intercepts and captures your requests. It can also capture responses and cookies.

Starting the Postman proxy begins a _proxy session_, which is a time-bound period of traffic capture. You can pause, restart, and stop a proxy session, then later start another one. Each session is logged in the **History** tab and displays the total session time, a traffic overview, and all traffic captured. You can also send requests and responses to a collection and [save cookies to the Postman cookie jar](/docs/sending-requests/capturing-request-data/syncing-cookies/).

## Using the Postman proxy

In the steps below, you'll use the Postman proxy to inspect HTTP and HTTPS communication going to and from your computer and phone. To get started, make sure your computer and phone are connected to the same local wireless network.

### Step 1: Start a proxy session

> You can't use the Postman proxy with the [Postman web app](/docs/getting-started/installation/installation-and-updates/#web-limitations). Make sure you've installed the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/).

1. Select <img alt="Capture icon" src="https://assets.postman.com/postman-docs/icon-capture.jpg#icon" width="15px"> **Start proxy** in the Postman footer.
1. (Optional) Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> to change the port number. By default, the port is set to `5559`. Make a note of the port number, as you will use it later when configuring clients.
1. Select **Start Proxy Session**.

The first time you start a proxy session, Postman will install the **Postman Proxy CA** certificate on your computer. If prompted, enter your computer password to install the certificate. Installing the certificate enables the Postman proxy to capture secure HTTPS traffic sent from browsers and other client apps on your computer.

<img alt="Start a proxy session" src="https://assets.postman.com/postman-docs/v10/proxy-start-session-v10-22.jpg" />

### Step 2: Control the proxy session

> You can't have more than one proxy or Interceptor session running at the same time.

When you start the proxy session, the Postman proxy begins capturing traffic sent from your computer. After you start a proxy session, you can pause, restart, or stop it. You can also select what traffic you want to capture during the session.

To control an active proxy session, select <img alt="Capture icon" src="https://assets.postman.com/postman-docs/icon-capture.jpg#icon" width="15px"> **Proxy active** in the footer to display the proxy session tab. (If the proxy session is paused, select <img alt="Capture icon" src="https://assets.postman.com/postman-docs/icon-capture.jpg#icon" width="15px"> **Start proxy** in the footer.) The proxy tab shows the total duration of the session and the size of the data captured.

With the proxy active, try opening a web browser and navigating to a website, or open an app that communicates with a server. Requests appear on the proxy session tab as they're captured.

From the proxy session tab, you can take the following actions:

* Select **Pause** to temporarily stop capturing traffic, then select **Resume** when you're ready to begin capturing traffic again. When you're finished capturing traffic, select **Stop** to end the proxy session.

* Select **Save responses for requests** to save each request's response along with the captured request.

* Select **Capture cookies** if you want to capture cookies along with requests during the proxy session.

    > You can also capture cookies and sync them to Postman without starting a proxy session. Learn more about [syncing cookies](/docs/sending-requests/capturing-request-data/syncing-cookies/).

* Select the sort icon <img alt="Column sort icon" src="https://assets.postman.com/postman-docs/v10/icon-column-sort.jpg#icon" width="12px"> in the column headers to sort the results in ascending or descending order.

* Select the filter icons <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px"> in the column headers to limit the requests and responses that are captured while the session is active. Postman will capture requests that match the selected criteria and will ignore requests that don't match. You can change the filters at any time during the session:

    * **Status** - Limit captured requests to the selected status codes.
    * **Method** - Limit captured requests to the selected methods.
    * **URL** - Limit captured requests to URLs that match the specified criteria. You can specify text that URLs must contain and can't contain, and you can use regular expressions. Press **Enter** to apply the specified filters. To remove a filter, select the remove icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> next to the filter.
    * **Type** - Limit captured requests to the selected content types.

    > In responses with a `content-type` that has images, audio, or video, the content is intercepted but not captured. The information captured is response headers, time taken, and the status code.

<img alt="Control a proxy session" src="https://assets.postman.com/postman-docs/v10/proxy-control-session-v10-22.jpg" />

### Step 3: View the proxy session results

While your proxy session is running, the proxy session tab shows captured traffic as you use a browser or apps on a client device. You can view details about each captured request including the status, method, URL, type, response size, response time, and time stamp.

You can view and work with the proxy session results while the session is active or paused, or after you stop the session.

* To rename the proxy session, select the name **Proxy debug session** and enter a new name.
* Select the **Requests** tab to view information about incoming requests and responses, or select the **Cookies** tab to view information about captured cookies.
* Use the search box to find specific requests or cookies.
* Select a request to view more details.
* Select a request URL to open it as a new API request in Postman.
* To delete a request or cookie, select it and select <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> **Delete**.
* To add a cookie to the [Postman cookie jar](/docs/sending-requests/response-data/cookies/), select it and select **+ Add to Cookie Jar**.

<img alt="View proxy session results" src="https://assets.postman.com/postman-docs/v10/proxy-view-results-v10-22.jpg" />

### Step 4: Stop the proxy session

When you're finished capturing traffic, select **Stop** to end the proxy session. To view the proxy session again later, select **History** in the sidebar, then select the proxy session. You can also select <img alt="Past sessions icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> **View Past Sessions** on the proxy session tab.

The **Overview** tab shows summary graphs of traffic captured in the proxy session. Use the dropdown menu to group requests by method, domain, content type, or status code. The header also displays the session start time, session size, duration, and source.

To filter the list of requests, use the filter icons <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px"> in the column headers. Postman shows requests that match the selected filters and hides requests that don't match.

To save captured requests to a collection, do the following:

1. Stop the proxy session if it's still active.
1. Select the checkbox next to the requests you want to save, or select the checkbox in the column header to select all requests.
1. Select **Save Requests**.
1. Select the collection where you want to save the requests, or select **New collection** to create a new collection.
1. Choose how to organize the requests in the collection. You can select the checkboxes to group the requests in folders organized by **Domain name**, **Endpoints**, or both.
1. Select **Save**.

<img alt="Save captured requests to a collection" src="https://assets.postman.com/postman-docs/v10/proxy-create-collection-v10-22.jpg" />

### Step 5: Configure the proxy on a client device

You can use the Postman proxy to capture traffic from a client device such as a phone.

1. Start a new proxy session. Select <img alt="Capture icon" src="https://assets.postman.com/postman-docs/icon-capture.jpg#icon" width="15px"> **Start proxy** in the Postman footer, then select **Start Proxy Session**.
1. Find the local IP address of the computer running the proxy:

    * On macOS, you can find your computer's IP address in **System Settings > Network**. Select a network interface, and if necessary select **Details > TCP/IP** to view your system's IP address.
    * On Windows, select **Start > Settings > Network & Internet > Wi-Fi** or **Ethernet**, and then select your connection. Your IP address is listed under **Properties**.

1. Open the wireless settings of your client device and update the configuration of the network connection to use an HTTP Proxy. For example, in iOS:

    1. Select **Settings > Wi-Fi**.
    1. Select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> next to your Wi-Fi connection.
    1. Select **Configure Proxy > Manual**.
    1. Set **Server** and **Port** to the local IP address and proxy port.
    1. Select **Save**.

1. Open a web browser or app on the device, then view captured traffic on the proxy session tab in Postman.

> To capture secure HTTPS traffic, you need to install the `postman-proxy-ca.crt` certificate on the client device. To learn how to install the certificate on your device, go to [Capturing HTTPS traffic](/docs/sending-requests/capturing-request-data/capturing-https-traffic/).

#### Configuring a proxy on other devices

The broader development community has published some useful tutorials for setting up a proxy server on various operating systems:

* [macOS](https://support.apple.com/en-gb/guide/mac-help/mchlp2591/mac)
* [Windows](https://support.microsoft.com/en-us/windows/use-a-proxy-server-in-windows-03096c53-0554-4ffe-b6ab-8b1deee8dae1#ID0EFD=Windows_10/)
* [Linux](https://www.shellhacks.com/linux-proxy-server-settings-set-proxy-command-line/)
* [Android](https://proxyway.com/guides/android-proxy-settings)
