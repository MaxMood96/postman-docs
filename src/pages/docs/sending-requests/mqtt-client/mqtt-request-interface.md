---
title: "Using the MQTT request interface"
updated: 2023-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Navigating Postman"
    url: "https://learning.postman.com/docs/getting-started/basics/navigating-postman/"
---

MQTT requests in Postman include a variety of tools, views, and controls to help you debug and document your MQTT APIs. This topic highlights parts of the request interface and explains how to use them.

  <img src="https://assets.postman.com/postman-docs/v10/mqtt/mqtt-interface-v10.jpg" alt="MQTT interface" width="500px"/>

## Contents

- [Creating a new MQTT request](#creating-a-new-mqtt-request)
- [The MQTT request interface](#the-mqtt-request-interface)
- [The MQTT response](#the-mqtt-response)
- [Using the right sidebar](#using-the-right-sidebar)

## Creating a new MQTT request

Create a new MQTT request by selecting the **New** button in the sidebar, which brings up the **Create new** dialog. Select **MQTT** from the list to open a blank MQTT request in a new tab.

  <img src="https://assets.postman.com/postman-docs/v10/mqtt/mqtt-new-request-v10-1.jpg" alt="New MQTT request" width="500px"/>

You can also create a new MQTT request by selecting the New Tab icon <img alt="New Tab icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px"> in the tabs bar and selecting the **Request type** button next to the request name (Untitled Request) and selecting **MQTT** from the list.

  <img src="https://assets.postman.com/postman-docs/v10/mqtt/mqtt-tab-request-v10.jpg" alt="Create a MQTT request with the New Tab icon" width="200px"/>

## The MQTT request interface

In the request interface, you can add configuration to connect to an MQTT broker, subscribe to topics, and publish messages. Additionally, you can add last will details, authorization details, properties, and settings along with the request.

  <img src="https://assets.postman.com/postman-docs/v10/mqtt-interface-v10-1.jpg" alt="MQTT interface"/>

- **Enter URL** - This is where you enter the broker's address, such as `test.mosquitto.org`. Some MQTT services also require you to define a port number. You can define a port number in the URL by appending the port number to the URL. For example, `test.mosquitto.org:1883`.
    > To connect to the broker over TLS, you need to use `mqtts://` as your URL scheme. For example, `mqtts://test.mosquitto.org`.
    - **MQTT Version** - Every MQTT version has some distinctions in terms of the protocol features. Postman supports two major versions of MQTT: 3.1.1 and 5.0. Version 5.0 is selected by default.
    - **Client ID** - Client ID is an identifier differentiating each client connected to the broker. By default, Postman generates a random client ID for each request. You can override this by selecting **Client ID** and entering a custom client ID.
- **Message** - This is where you compose and publish messages to the broker. You can write your message in the text area, enter a topic name, and select **Send** to publish the message.
    - **Message type** - You can define the message type as **Text**, **JSON**, **Base64**, or **Hexadecimal** for Postman to render it correctly.
    - **More actions icon** <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> - You can add custom properties and settings to each message here. Settings include the following:
        - Topic Alias
        - Response Topic
        - Correlation Data
        - Message Expiry Interval
        - Content Type
        - Payload Format Indicator
    - **Retain** - Retain is a flag that asks the broker to retain the last message sent on the topic and send it to the new subscribers. The broker will retain the last message even if the new subscribers join the network after the message was sent from the client. You can configure the retain flag for the message by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and toggling the **Retain** switch.
    - **QoS** - Quality of Service (QoS) defines the guarantee of delivery for the message. You can configure the QoS level for the message by selecting a QoS level from the dropdown list.
    - **Add Topic** - You can define the topic name for the message. The broker uses the topic name to route the message to the appropriate subscribers.
    - **Send** - Once you have configured the payload, select **Send** to publish the message to the broker.
- **Topics** - This is where you can list and document multiple topics, and subscribe to them. You can also configure the QoS level for each topic listed.
- **Last Will** - Last Will is a message that's sent by the broker to the subscribers when the client disconnects from the broker. You can configure the Last Will message by going to the **Last Will** tab, entering the message, and configuring additional settings such as topic name, QoS level, and retain flag. You can also configure the delay interval by selecting the more actioncs icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and entering the delay interval in milliseconds.
- **Authorization** - Authorize your connection with Basic Auth. You can pass your credentials in the form of a username and password to the broker using the **Authorization** tab.
- **Properties** - You can add custom properties to your request. These properties are sent while connecting to the broker.
- **Settings** - You can configure additional settings for your request by going to the **Settings** tab. You can configure the request timeout, enable/disable SSL certificate verification, clean session, and auto reconnect.

## The MQTT response

When you connect to the broker, the response area creates a message stream showing the published and received messages to different topics in a single session (until you select **Disconnect**).

- **Messages** - The message stream shows the published and received messages in a timeline. You can expand the message to view the message details such as topic name, QoS level, retain flag, and message type. You can search for specific messages using the search bar, filter messages by received and sent, and clear the message stream using **Clear Messages**.

  <img src="https://assets.postman.com/postman-docs/v10/mqtt/mqtt-response-v10-2.jpg" alt="Response section" width="500px"/>

- **Visualization** - The **Visualization** tab shows the message stream in a graphical format, a more comprehensible way to view telemetry data. The interface is divided into multiple windows per topic you have received messages for. For JSON responses, the values for the first field are plotted on the graph. You can change the selected field, and add more fields to compare the values side by side. You can also change the visualization style from line to bar chart.

  <img src="https://assets.postman.com/postman-docs/v10/mqtt/mqtt-visualization-v10.jpg" alt="Visualization section" width="500px"/>

## Using the right sidebar

The right sidebar gives you access to more tools and information like documentation, commenting, and request details. Open a GraphQL request, and then select an option in the right sidebar:

- **Request documentation** - Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> to view the description of a request. You can add a description by selecting the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the description, then writing your content using [Postman's built-in editing tools](https://learning.postman.com/docs/publishing-your-api/authoring-your-documentation/).
- **Comments** - Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> to collaborate with your teammates as you work on an API. You can use `@` to tag others to ask a question, give feedback, and discuss your API.
- **Request information** - Select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> to view more details about a request, like the request ID and creation date.

## Next steps

- [Creating your first MQTT request](/docs/sending-requests/mqtt-client/first-mqtt-request/)
