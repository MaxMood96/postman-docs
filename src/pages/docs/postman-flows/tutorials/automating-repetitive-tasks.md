---
title: "Automate repetitive tasks using Postman Flows"
updated: 2023-07-27
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

You can use Postman Flows to complete repetitive tasks. Businesses often need to delete emails from multiple systems. Logging in, searching, and deleting emails from multiple locations can be time consuming. This tutorial shows you how to create a Flow that deletes an email from three locations each time you run the Flow.

For this tutorial, the locations are Stripe.com, Brevo.com, and a Postman mock server that acts as a hypothetical internal system.

You can find the complete Flow [here](https://www.postman.com/postman/workspace/devops-flows/flow/6417a7608c4c54003a4ad899).

## Prerequisites

* A Stripe account with a customer with the `test@email.com` email address.
* A Brevo account with a contact with the `test@email.com` email address.
* A Stripe secret key.
* A Brevo API key.

## Fork the collections and environment

[Fork](/docs/collaborating-in-postman/using-version-control/forking-elements/) these collections from the [DevOps Flows] workspace into your workspace:

* [Stripe API](https://www.postman.com/postman/workspace/devops-flows/collection/23919558-28c83ecb-a721-46ae-af8f-a69cddd5007b?action=share&creator=21580188)

* [Brevo](https://www.postman.com/postman/workspace/devops-flows/collection/23919558-15fcd5b7-53b7-4979-81fa-a95fc3605a2f?action=share&creator=21580188)

* [Customer-list](https://www.postman.com/postman/workspace/devops-flows/collection/23919558-e6b506da-a612-4601-8a55-d3f4a4d37a31?action=share&creator=21580188)

Fork this environment into your workspace:

* [gdpr-delete-email](https://www.postman.com/postman/workspace/devops-flows/environment/21580188-d7306a24-e742-42e2-8bfd-d122bd1e52ca)

* In the **gdpr-delete-email** environment, replace `<your-brevo-api-key>` with your Brevo API key. Replace `<your-stripe-secret-key>` with your Stripe secret key.

    ![Add API keys](https://assets.postman.com/postman-docs/v10/flows-tut-rep-update-env-v10.jpg)

## Create the Flow

1. Part one: Delete the contact from Stripe

    * Create a new Flow. Add a **String** block and enter `test@email.com`.

    * Connect a **Create Variable** block and enter `Customer Email`.

        <img src="https://assets.postman.com/postman-docs/v10/flows-tut-rep-create-variable-v10.gif" alt="Create a variable" fetchpriority="low" loading="lazy" >

    * Connect three **Send Request** blocks to the **Start** block, arranged vertically.

        ![Create three Send Request blocks](https://assets.postman.com/postman-docs/v10/flows-tut-rep-3send-requests-v10.jpg)

    * In the top **Send Request** block, select **Stripe API > Customers > Search customers**.
    * Select the **gdpr-delete-email** environment.
    * For the `email` variable, add a **Get Variable** block and select **Customer Email**.

        <img src="https://assets.postman.com/postman-docs/v10/flows-tut-rep-get-variable-v10.gif" alt="Get the variable" fetchpriority="low" loading="lazy" >

    * Create an **If** block next to the **Send Request** block. Add a **Select** block to the **If** block and change `value1` to `contacts`.

        <img src="https://assets.postman.com/postman-docs/v10/flows-tut-rep-if-block-v10-2.gif" alt="Add an If block" fetchpriority="low" loading="lazy" >

    * Connect the **Send Request** block’s **Success** output to the **If** block’s `contacts` and **Data** inputs. Next to `contacts`, select `body.data`. In the FQL window, enter `$count(contacts) > 0`.
    * Connect the **If** block’s **FALSE** output to an **Output** block.
    * Rename the **Output** block `Contact not found` and select **Boolean** from the dropdown list.
    * Connect the **If** block's **TRUE** output to a **Send Request** block. Select **Stripe API > Customers > Delete a customer**.
    * Also connect the **If** block’s **TRUE** output to the **Send Request** block’s **customer_id** input and select `body.data.0.id`.
    * Connect the **Send Request** block’s **Success** output to an **Output** block.
    * Rename the **Output** block `Contact deleted` and select **Boolean** from the dropdown list.

        ![Stripe contact deleted](https://assets.postman.com/postman-docs/v10/flows-tut-rep-stripe-deleted-v10.jpg)

1. Part two: Delete the contact from Brevo

    * In the middle **Send Request** block, select **Brevo > Contact management > Contacts > Get a contact’s details**.
    * Select the **gdpr-delete-email** environment
    * For the `email` variable, add a **Get Variable** block and select **Customer Email**.
    * Connect this block’s **Success** output to another **Send Request** block and select **Brevo > Contact management > Contacts > Delete a contact**. Also connect the middle **Send Request** block’s **Success** output to the new **Send Request** block’s **contact_id** input and select `body.id`.

        ![Add Brevo requests](https://assets.postman.com/postman-docs/v10/flows-tut-rep-brevo-requests-v10.jpg)

    * Connect the **Delete a contact** block’s **Success** output to an **Output** block. Rename the **Output** block `Contact deleted` and select **Boolean** from the dropdown list.
    * Connect an **Output** block to the **Get a contact’s details** **Send Request** block’s **Failure** output. Rename the **Output** block `Contact not found` and select **Boolean** from the dropdown list.

        ![Brevo contact deleted](https://assets.postman.com/postman-docs/v10/flows-tut-rep-brevo-deleted-v10.jpg)

1. Part three: Delete the contact from an internal system

    * In the bottom **Send Request** block, select **customer-list > customer/email**.
    * For the email variable, add a **Get Variable** block and select **Customer Email**.
    * Connect the **Success** output to a **Send Request** block and select **customer-list > customer/id**.
    * Also connect the **customer/email** **Send Request** block’s **Success** output to the **id** input and select `body.id`.
    * Connect the **customer/id** **Send Request** block’s **Success** output to an **Output** block. Rename the **Output** block `Contact deleted` and select **Boolean** from the dropdown list.
    * Connect the **customer/id** **Send Request** block’s **Failure** output to an **Output** block. Rename the **Output** block `Contact not found` and select **Boolean** from the dropdown list.

        ![Internal contact deleted](https://assets.postman.com/postman-docs/v10/flows-tut-rep-internal-deleted-v10.jpg)

## Run the Flow

Select **Run**. The Flow finds and deletes the contact with the `test@email.com` email address on Brevo, Stripe, and the internal system. When the contact is deleted, the `Contact deleted` **Output** block shows **True**. If there is no contact with that email address, the `Contact not found` **Output** block shows **False**.
