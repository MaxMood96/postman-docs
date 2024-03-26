---
title: "Creating your first MQTT request"
updated: 2023-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
---

In this example of an MQTT request, you will connect to a public broker, subscribe to topics, publish messages, and visualize the response.

## Contents

- [Create an MQTT request](#create-an-mqtt-request)
- [Connect to a broker with Postman](#connect-to-a-broker-with-postman)
- [Subscribe to topics](#subscribe-to-topics)
- [Publish messages](#publish-messages)
- [Visualize the response](#visualize-the-response)

## Create an MQTT request

In Postman, select **New > MQTT** to create a new request. (In the Postman desktop app, you can also select **⌘+N** or **Ctrl+N**, then select **MQTT**).

  <img src="https://assets.postman.com/postman-docs/v10/mqtt/mqtt-new-request-v10-1.jpg" alt="New MQTT request" width="500px"/>

## Connect to a broker with Postman

To connect to an MQTT service, you need a broker URL. This example uses the public broker `test.mosquitto.org`. You can also use any other public broker or a broker hosted on your local machine.

1. Enter `test.mosquitto.org` as the request **URL**.
1. Select **Connect** to connect to the broker.

A message in the response area indicates that you're connected to the broker.

  <img src="https://assets.postman.com/postman-docs/v10/mqtt-connected-v10-22.jpg" alt="Connect to a broker">

> If you're using the Postman web app, use the Postman desktop agent to connect to an MQTT broker. See [About the Postman Agent](https://learning.postman.com/docs/getting-started/about-postman-agent/) for more information.

## Subscribe to topics

While connected to the broker, select the **Topics** tab. This enables you to create, document, and subscribe to multiple topics.

1. In the **Topics** column, enter `my-toys` as the topic name.
1. Select **Subscribe** to subscribe to the topic.

You will see a message in the response area indicating that you're subscribed to the topic.

  <img src="https://assets.postman.com/postman-docs/v10/mqtt/mqtt-subscribed-v10.jpg" alt="Subscribe to a topic" width="500px"/>

## Publish messages

You can use the **Message** tab to compose and send messages to the broker.

1. Select the **Message** tab and enter `{"age": 2, "number of toys": 5}` as the message.
1. Enter `my-toys` as the topic name.
1. Select **Send** to publish the message.

You will see an outgoing message in the response area indicating that the message was published. Since you have already subscribed to the topic, `my-toys`, you will also see an incoming message with the same body. Go ahead and send a few more messages counting the number of toys you had growing up.

  <img src="https://assets.postman.com/postman-docs/v10/mqtt/mqtt-published-v10.jpg" alt="Subscribe to a topic" width="500px"/>

## Visualize the response

Now that you've subscribed to a topic and published a few messages, you can use the Postman Visualizer to view the messages in a more comprehensible format.

1. Switch to the **Visualization** tab in the response area. You'll see the messages for the `age` field visualized as a line chart.
1. Select the field name dropdown to select the field you want to visualize.
1. Select **+** to add more fields to the chart and view the changes in the values.
1. Select the <img alt="Chart icon" src="https://assets.postman.com/postman-docs/v10/mqtt/chart-icon-v10.jpg#icon" width="16px"> icon next to any of the field names to change the chart type.

The visualization changes in real time as you receive newer messages for the same topic.

  <img src="https://assets.postman.com/postman-docs/v10/mqtt/mqtt-visualization-v10.jpg" alt="Visualization" width="500px"/>

## Next step

Try subscribing to multiple topics at once and publishing messages to them.
