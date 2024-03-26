---
title: "Create a form in Postman Flows"
updated: 2023-08-15
early_access: true
plan: beta
---

_Forms_ in Postman Flows enable you to seamlessly gather user input and integrate it into your API-driven applications. With forms, you can create interactive and customizable experiences by collecting data from users through a variety of question types. For example, if you have a Flow that gets the weather in a particular city, you could create a form where the user types in the name of the city. The Flow runs after the user enters the information and selects **Submit**. Users' input can then be utilized to trigger API requests, perform data manipulation, or generate dynamic outputs.

<img alt="Forms in Postman Flows" src="https://assets.postman.com/postman-docs/v10/flows-form-hero-v10.jpg" width="500px">

## Contents

* [Form components](#form-components)
* [Form workflow](#form-workflow)

## Form components

The _Form Editor_ enables you to create and design your forms. It provides an intuitive interface for adding and configuring questions and managing user input.

In forms, _questions_ represent the input fields that users will interact with. Each question can have various question types. The following question types are supported:

* **Short answer** - Creates a single-line text box for users to provide concise responses.
* **Paragraph** - Creates a multiple-line text box for users to enter longer text or descriptions.
* **Checkboxes** - Creates a list of options with checkboxes for users to select multiple choices.
* **Multiple choice** - Creates a list of options with radio buttons for users to select a single choice.
* **Dropdown** - Creates a dropdown list with options that users can select from.
* **Required** - Enables you to make certain questions mandatory, ensuring that users must provide responses before submitting the form.

## Form workflow

To create a form, select a flow, then select **Form** from the bottom of the **Flows** sidebar.

<img alt="Create a form" src="https://assets.postman.com/postman-docs/v10/flows-create-form-v10.jpg" width="500px">

Name your form, add a description, and add questions in the **Form Editor**, then select **Update & Publish**. To edit a published form, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Edit**.

<img src="https://assets.postman.com/postman-docs/v10/flows-edit-form-v10.gif" alt="Edit a form" fetchpriority="low" loading="lazy" >

You can rename, duplicate, or delete questions as needed. You can also reorder questions to enhance the user experience.

When your form is published, you can select **Preview** to view the form for testing.

When published, the form generates a **shareable link** that you can copy and distribute, enabling users to access and interact with the form.

You can view the published version of the form by selecting **View published version**, which shows the form as it appears to users.

If needed, you can select **Unpublish** to revoke public access and make further modifications before republishing.
