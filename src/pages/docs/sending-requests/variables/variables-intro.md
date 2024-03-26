---
title: "Reuse data with variables and environments in Postman"
updated: 2024-02-07
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "How to Use Variables in Postman"
    url: "https://youtu.be/BKLC-_C9fxE"
  - type: link
    name: "Use Secret Variables | Postman Level Up"
    url: "https://youtu.be/n3MNxYQRd6I"
  - type: link
    name: "Intro to Postman | Chain Requests"
    url: "https://youtu.be/4fULCou_7Wc"
  - type: link
    name: "Consuming REST APIs | Postman Enterprise"
    url: "https://youtu.be/oI-GyWB_6jA"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to persist Postman variables"
    url: "https://blog.postman.com/how-to-persist-postman-variables/"
  - type: link
    name: "How to Securely Deploy Postman at Scale, Part 2: Information Management"
    url: "https://blog.postman.com/how-to-securely-deploy-postman-at-scale-part-2-information-management/"
  - type: link
    name: "Faster and easier variable management in Postman"
    url: "https://blog.postman.com/faster-and-easier-variable-management-in-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Paylocity uses variables to automate workflows"
    url: "https://www.postman.com/case-studies/paylocity/"
---

A _variable_ is a reusable value you can use in API requests and test scripts. Postman will use the variable's current value when running a request or script. You can group variables in an _environment_ to make it easier to change variable values based on your work context.

## Contents

* [Variables quick start](#variables-quick-start)
* [Create and switch environments](#create-and-switch-environments)

## Variables quick start

To create and use a variable, do the following:

1. Select the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> in the [workbench](/docs/getting-started/basics/navigating-postman/#environment-selector-and-environment-quick-look).
1. Next to **Globals**, select __Edit__ (or __Add__ if no variables have been added yet).
1. Add a variable named `my_variable` and give it an initial value of `Hello`.
1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save**, then close the **Globals** tab.
1. Open a new request tab and enter `https://postman-echo.com/get?var={{my_variable}}` as the URL. Hover over the variable name to inspect the variable's value and scope.

    <img alt="View the variable value and scope" src="https://assets.postman.com/postman-docs/v10/variable-quick-start-hover-v10-22.jpg" />

1. Select __Send__ and send the request. Inspect the response, which confirms that Postman sent the variable value to the API.
1. Change the value in the environment quick look and send the request again.

To learn more about using variables in Postman, go to [Store and reuse values using variables](/docs/sending-requests/variables/variables/).

## Create and switch environments

With environments, you can create sets of variables for the various types of work you do in Postman. For example, you might want to use different values when sending requests to a test server or a production server.

To get started, learn how to [create and switch between environments](/docs/sending-requests/variables/managing-environments/) In Postman. You can then [add and edit variables in each environment](/docs/sending-requests/variables/environment-variables/). You can also [use environments to collaborate with your team](/docs/sending-requests/variables/team-environments/) and share and manage sensitive data.
