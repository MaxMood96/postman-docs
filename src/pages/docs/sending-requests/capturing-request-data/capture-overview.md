---
title: "Capture HTTP traffic and sync cookies in Postman"
updated: 2024-03-06
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
    name: "Capture Responses Using the Postman Proxy"
    url: "https://blog.postman.com/capture-responses-using-the-postman-proxy/"
  - type: link
    name: "Enhanced HTTP Traffic Capture and Analysis in Postman"
    url: "https://blog.postman.com/http-traffic-capture-and-analysis-in-postman/"
---

Capturing HTTP traffic is an important tool for API development and testing. Postman enables you to inspect the requests passing between client applications and your API and save them to a collection. You can use the saved requests to understand how your API is behaving and to assist with debugging.

Postman's built-in proxy and Postman Interceptor provide two ways to capture HTTP and HTTPS traffic in Postman. You can also use the proxy or Interceptor to capture and sync cookies to the Postman cookie jar.

To capture traffic, begin a proxy or Interceptor session. A session represents a specific time frame during which you want to capture traffic. For example, you can capture traffic while a client application is sending a series of requests that you want to observe or debug.

After you stop the session, you can view the captured requests in Postman. You can also use Postman's search and filtering capabilities to narrow down the requests based on the criteria you choose.

## Contents

* [The Postman proxy](#the-postman-proxy)
* [Postman Interceptor](#postman-interceptor)
* [Capture and sync cookies](#capture-and-sync-cookies)

## The Postman proxy

A proxy is an intermediary server that sits between a client application (like a mobile app) and the destination server the client is communicating with (like an API). When the Postman proxy is enabled and a client has been configured to use the proxy, a request from the client goes to Postman first. Postman then forwards the request on to the destination server.

If you start a proxy session while the proxy is enabled, Postman can capture any HTTP or HTTPS traffic passing through the proxy. You can then search or filter the requests, or save them to a collection.

To capture requests using the Postman proxy, view the instructions for your operating system and Postman version:

* If you're on macOS (Postman v10.17 or later) or Windows (Postman v10.18 or later), go to [Capture traffic using the Postman built-in proxy](/docs/sending-requests/capturing-request-data/capture-with-proxy/).

* If you're on Linux (all Postman versions), macOS (Postman v10.16 or earlier), or Windows (v10.17 or earlier), go to [Capture HTTP requests in Postman](/docs/sending-requests/capturing-request-data/capturing-http-requests/).

* To capture secure HTTPS traffic from a client device like a phone, you need to install the Postman security certificate on the device. To learn more, go to [Capture HTTPS traffic using the Postman built-in proxy](/docs/sending-requests/capturing-request-data/capturing-https-traffic/).

> To check which version of Postman you're using, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings > About**.

## Postman Interceptor

Postman Interceptor provides another way to capture requests sent between a client and a server. Interceptor uses a browser extension rather than Postman's built-in proxy. With Postman Interceptor, you can capture HTTP and HTTPS requests sent from a web browser.

Learn more about [using Postman Interceptor](/docs/sending-requests/capturing-request-data/interceptor/).

## Capture and sync cookies

Along with capturing requests, Postman can capture cookies during a proxy or Interceptor session. You can manually add any captured cookies to the [Postman cookie jar](/docs/sending-requests/response-data/cookies/) and use them when sending requests from Postman.

Postman's built-in proxy and Interceptor also support continuous cookie syncing. Once enabled, all captured cookies for the domains you specify are automatically synced to the Postman cookie jar.

Learn more about [syncing cookies](/docs/sending-requests/capturing-request-data/syncing-cookies/).
