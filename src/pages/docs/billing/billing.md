---
title: "Manage billing"
updated: 2023-09-15
tags:
  - "pro"
warning: false
contextual_links:
  - type: section
    name: "Additional resources"
  - type: link
    name: "Postman Pricing"
    url: "https://www.postman.com/pricing/"

---

Postman provides a self-serve billing process. Refer to the following sections for guidance on managing your account, plan, and payment.

For help with any account or billing issues, go to Postman's [Support Center](https://www.postman.com/support/) and select **Submit a request**.

> Check out [Postman's Help Center](https://support.postman.com/hc/en-us) for [Postman billing and payment FAQs](https://support.postman.com/hc/en-us/categories/115000609205-Billing-and-Payment).

## Contents

* [Billing dashboard](#billing-dashboard)

    * [Viewing billing overview](#viewing-billing-overview)

    * [Managing resources](#managing-resources)

    * [Viewing account history](#viewing-account-history)

    * [Viewing past invoices](#viewing-past-invoices)

* [Payments](#payments)

    * [Managing payment methods](#managing-payment-methods)

    * [Using the Pay Now option](#using-the-pay-now-option)

    * [Paying by invoice](#paying-by-invoice)

    * [Adding custom information to invoices](#adding-custom-information-to-invoices)

    * [Failed payments](#failed-payments)

* [Team and plan changes](#team-and-plan-changes)

    * [Changing your plan](#changing-your-plan)

    * [Purchasing add-on resources](#purchasing-add-on-resources)

    * [Purchasing add-on products](#purchasing-add-on-products)

    * [Manage Enterprise solutions licenses](#manage-enterprise-solutions-licenses)

    * [Using Auto-Flex](#using-auto-flex)

        * [Billing for Auto-Flex](#billing-for-auto-flex)

* [Canceling your plan](#canceling-your-plan)

* [Next steps](#next-steps)

## Billing dashboard

The Postman [billing dashboard](http://go.postman.co/billing) enables you to manage your team's billing.

### Viewing billing overview

The billing overview is your billing dashboard's default view. You can view the details of your Postman plan, including your subscription cycle and a calculation of your expected cost upon renewal.

<img alt="Billing overview" src="https://assets.postman.com/postman-docs/billing-plan-and-payments-dash-v9.14.jpg" />

### Managing resources

Open the [**Resource usage** dashboard](http://go.postman.co/billing/add-ons/overview) to see your team's usage of resources such as mock servers and monitors, APIs created, collection runner runs, image and file storage, and other items. To open the **Resource usage** dashboard, do one of the following:

* **Free users** - In the Postman header, select the menu next to **Upgrade**.
* **Paid users** - In the Postman header, select **Team**.

> To learn more about the resources included with your Postman plan and what happens when you reach your usage limits, go to [About resource usage](/docs/billing/resource-usage/).

<img alt="Add-ons usage and purchase" src="https://assets.postman.com/postman-docs/resource-usage-9.13.jpg" />

Select **View detailed usage** next to **Monitoring Usage** to view your team's active monitors and their impact on your team's usage during the current billing period.

You can opt to allow or disallow overages for mock server and monitor usage by selecting **Pay-as-you-go** for each item. If enabled, you will be charged on a pay-as-you-go basis. If you are on a Professional plan, you can opt to enable or deactivate pay-as-you-go overages for Flows.

You can also [Purchase add-ons](#purchasing-add-on-resources).

> If your API development pipeline is dependent on Postman monitoring, deactivating overages may cause unintended consequences for your bill. To avoid fluctuating pay-as-you-go charges, consider adding [pre-paid monitoring blocks](#purchasing-add-on-resources) to your team plan.

### Viewing account history

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **History**.

<img alt="Account history view" src="https://assets.postman.com/postman-docs/billing-history-v9.1.jpg" />

Items such as updates to your Postman subscription, payment method changes, payments, and charges are all listed in chronological order.

### Viewing past invoices

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **Invoices**. You can get a copy of your past invoices by selecting the download icon <img alt="Download icon" src="https://assets.postman.com/postman-docs/icon-download-v9.jpg#icon" width="16px"/> for the specific invoice you want to retrieve.

<img alt="Invoices view" src="https://assets.postman.com/postman-docs/billing-invoices-v9.1.jpg" />

To add or edit the information on an invoice, see [adding custom information to invoices](#adding-custom-information-to-invoices).

## Payments

Postman offers various payment options dependent on your plan type.

### Managing payment methods

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **Payment methods**.

To add a new payment method, select **Add Payment Method**. Select the payment method you would like to use. Depending on your location, you can pay using credit card, [direct debit](#setting-up-direct-debit-payments), or other payment methods.

To remove a payment method, hover over the payment method in question and select **Delete Payment Method**.

To set a payment method as your primary, hover over it and select **Set as Primary**.

<img alt="Payment methods view" src="https://assets.postman.com/postman-docs/payment-methods-page.jpg" />

#### Setting up direct debit payments

> The option to pay with direct debit is only available for customers in the United States.

Postman accepts direct debit payments, in which payment funds are taken directly from a linked bank account using ACH.

To use direct debit as your payment method, do the following:

1. Select **Add payment method**, then select **ACH Direct Debit**.
1. Enter your email, your name, and either enter or search for your bank name.

    > This process will verify your bank account immediately. If you want to use a manual verification process instead, see [Verifying your bank account manually](#verifying-your-bank-account-manually).

1. To accept the Terms and Privacy Policy,  select **Agree**. You can select **Learn more** to view the whole policy.
1. Stripe, the payment service Postman uses, will open a new window where you can sign in to your bank account. Select **Continue**.
1. Select the account you want to use, then select **Link account**. After Stripe verifies the account, select **Done**. Stripe will return you to the Postman billing dashboard.
1. Select **Add account**.

After account verification, Postman will send you a confirmation email. It can take up to four days to withdraw funds from your bank account using direct debit.

> * **Direct debit payment failures** - In the event of a direct debit payment failure, Postman will email you with information about how to fix the issue. The billing dashboard will also contain this information.
> * **Direct debit disputes** - If you believe there has been an error with your direct debit payment, contact [Postman support](https://www.postman.com/support/) to resolve the issue. If you dispute the payment through your bank, Stripe removes your bank account's verified status and you won't be able to use the account for Postman payments until you [verify it](#setting-up-direct-debit-payments) again.

#### Verifying your bank account manually

You can choose to verify your bank account manually instead of using the automatic process documented in [Setting up direct debit payments](#setting-up-direct-debit-payments). This manual process may take up to two days.

To verify your bank account manually, do the following:

1. Select **Add payment method**, then select **ACH Direct Debit**.
1. Enter your email and your name, then select **Enter bank details manually instead**.
1. Enter your routing number and bank account number. Confirm your account number, then select **Continue**.

In one to two business days, Stripe will make a small test deposit into your bank account that you will use to verify your bank account and will email you with further instructions.

To verify your bank account using the test deposit, do the following:

1. After the test deposit arrives in your bank account, go back to the Postman billing dashboard. Select **Plans and payments > Payment methods**.
1. Hover over the bank account and select **Verify**.
1. Under **Enter code**, paste the six digit transaction code from the test deposit. Select **Verify**.
1. Select **Confirm** to accept the Terms and Privacy Policy.

> If you don't verify your account within ten days, Postman will delete your bank account information. If you want to add a direct debit payment method later, you will need to re-enter your bank account information.

After your bank account is verified, Postman will send you a confirmation email. It can take up to four days to withdraw funds from your bank account using direct debit.

### Using the Pay Now option

In some circumstances, including an overdue or [failed payment](#failed-payments), you may receive an invoice for your Postman payment. From the invoice, select **Pay Now** to pay immediately using your primary [payment method](#managing-payment-methods), or Apple Pay or Google Pay if supported.

### Paying by invoice

> Invoicing is available for Postman [Enterprise teams](https://www.postman.com/pricing/) only. If you are a new Enterprise customer, contact the [Postman Sales team](https://www.postman.com/pricing/get-started-postman-plans/) to get started. You will receive a response within three business days. If you are an existing Enterprise customer, submit a request to the [Postman Support team](https://support.postman.com/hc/en-us) to be invoiced instead of automatically charged.

You can pay invoices online, with ACH, or with wire transfer. Postman sends invoices to the billing email address listed in your [billing details](http://go.postman.co/settings/team/billing-details). The invoice includes offline payment instructions. View your pending payments in your [billing dashboard](http://go.postman.co/billing).

### Adding custom information to invoices

In your [billing dashboard](http://go.postman.co/billing), select **Plan and payments** on the left, then **Invoices**. Select **Edit billing information**.

Add or update your company name, billing email, address, and your VAT ID if applicable, then select **Save**. All future [invoices](https://go.postman.co/billing/invoices) will have the updated copy. To change an existing invoice, submit a request to [Postman support](https://support.postman.com/hc/en-us).

<img alt="Edit billing details" src="https://assets.postman.com/postman-docs/update-billing-details-v9.jpg" width="500px"/>

### Failed payments

If you have a payment method on file, Postman will automatically attempt three times to charge it. If this is unsuccessful, team members with the [Billing team role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) receive an email notification. Use the link in the email to access and pay for your [invoice](#using-the-pay-now-option).

If payment is unsuccessful, Postman offers a grace period of 21 days to avoid service disruption. For invoice-based teams, this means 21 days following the due date listed on the invoice.

In the event of non-payment and service deactivation, Postman sends an email notification to the billing email address listed in your [billing details](http://go.postman.co/settings/team/billing-details).

## Team and plan changes

You can change your team's plan and billing cycle in your [billing dashboard](https://go.postman.co/billing/overview).

### Changing your plan

To change your plan, billing frequency, team size, and add-ons, open your [billing dashboard](https://go.postman.co/billing/overview) and select **Edit plan** on the right.

1. You can adjust your billing frequency and plan type.
1. Select **Next** to adjust your team size and add-on seats such as Flow Editor, Postbot, and Enterprise solutions. You can opt to apply changes right away or on renewal.
1. Select **Next** to adjust your team's add-on resources, including monitoring blocks, mock server blocks, and custom domains.
1. Select **Next** then **Confirm Changes**.

Certain changes, such as switching from an annual plan to a monthly plan or plan downgrade, can only be applied to your team upon renewal. If you make adjustments to your plan that can't be applied right away, and have **Immediately** selected, you will be prompted to switch your selection to **On renewal**.

The cost of your new plan and any new seats, if applicable, are prorated based on the time left in your team's billing cycle.

> To upgrade to Postman Enterprise Ultimate, [contact Postman's sales team](mailto:sales@postman.com).

<!--
### Changing billing cycle

Monthly teams can switch to an annual plan at any time by navigating to the [billing dashboard](https://go.postman.co/billing/overview) and selecting **Edit Plan** on the right.

Select to pay **Monthly** or **Annual** and confirm your changes. Note that annual teams can only switch to a monthly plan at the end of their current billing cycle. You can find the end date of your current billing cycle under **Overview**. Postman will send an email notification about the billing cycle change to the billing email address listed in your [billing details](http://go.postman.co/settings/team/billing-details).
-->

### Purchasing add-on resources

The base number of monitoring requests, mock server calls, Flow steps, and custom domains included in your plan depends on your [plan type](https://www.postman.com/pricing). You can enable or deactivate overages for monitoring, mock server calls, and Flows by [managing your team's resources](#managing-resources). If enabled, you will be charged on a pay-as-you-go basis. If you are on a Professional plan, you can opt to enable or deactivate pay-as-you-go overages for Flows.

You can purchase more blocks of monitoring requests, mock server calls, and custom domains by navigating to your [billing dashboard](http://go.postman.co/billing), selecting **Resource usage** on the left, then **Purchase Add-ons** on the right.

Update the number of Flow Editor seats, monitoring blocks, mock server blocks, and custom domains you would like to have included in your team plan, then select **Next** to confirm your changes.

### Purchasing add-on products

> The Postbot add-on is currently available for Free, Basic and Professional plans.

If you are on a Basic or Professional plan, you can purchase Flow Editor and Postbot seats by navigating to your [billing dashboard](https://go.postman.co/billing/overview) and selecting **Edit plan** on the right.

Select **Modify Plan** under the plan type for your team. Update the number of Flow Editor and Postbot seats in the **Add-on products** section, then select **Next**. Select **Confirm Changes** to purchase more seats.

You can manage which team members consume Postbot seats from the [product access dashboard](https://go.postman.co/settings/team/products-access). Learn how to [manage your team's access to Postbot](/docs/administration/managing-your-team/manage-team-product-access/#manage-your-teams-access-to-postbot).

If you are a Free plan user, you can purchase Postbot seats by selecting **Upgrade** in the Postman header and navigating to the bundle section to add Postbot. Update the number of Postbot seats and select from Annual or Monthly payment options, then select **Next**. Enter your billing information and payment method, then select **Confirm**.

### Manage Enterprise solutions licenses

> **[Enterprise solutions are available for Enterprise Essentials plans.](https://www.postman.com/pricing)**

As a Team Admin, you can purchase Enterprise solutions licenses for your Enterprise Essentials plan by navigating to your [billing dashboard](https://go.postman.co/billing/overview) and selecting **Edit plan** on the right.

Select **Modify plan** under the plan type for your team. You can also select **Add to Plan** next to the solution you want to purchase more licenses for. Update the number of licenses in the **Solutions** section, then select **Next**. Select **Confirm Changes** to purchase more licenses.

You can manage which team members consume the Enterprise solutions licenses from the [product access dashboard](https://go.postman.co/settings/team/products-access). Learn how to [manage your team's access to Enterprise solutions](/docs/administration/managing-your-team/manage-team-product-access/#manage-your-teams-access-to-enterprise-solutions).

To learn more about the added capabilities of each solution, see [Enterprise solutions](https://www.postman.com/pricing/#enterprise-solutions).

> [Auto-Flex](#using-auto-flex) enables your team to add more Team members without having to pay upfront. Newly added members to the Team and the solutions will be billed in the next Auto-Flex cycle.

### Using Auto-Flex

[Auto-Flex](https://learning.postman.com/auto-flex-policy/) is a flexible billing feature available to Postman teams. Auto-Flex applies to both plan seats and any add-on seats such as Flow Editor, Postbot, and Enterprise solutions. With Auto-Flex enabled, your team can [invite](/docs/administration/managing-your-team/manage-team-members/#invite-users) users or provision add-on capabilities to your team members without having to pay in advance for more seats, then opt to retain or remove them before being [billed](#billing-for-auto-flex).

All [Postman Basic, Professional, and Enterprise Essentials plans](https://www.postman.com/pricing) have Auto-Flex enabled automatically.

#### Billing for Auto-Flex

Your Auto-Flex billing cycle is dependent on your team's plan:

* Monthly plans are charged for newly added users on a monthly basis.

* Annual plans are charged for newly added users on a quarterly basis.

At any time during your Auto-Flex billing cycle, your team can [invite](/docs/administration/managing-your-team/manage-team-members/#invite-users) users regardless of available seats.

Before your Auto-Flex billing cycle renews, all Billing and Admin team members receive a notification about any new users you added during that time period.

> Shortly before the applicable billing date, users with Billing or Admin roles will receive a notification that reflects the number of added users during that monthly or quarterly cycle.

You can use this reminder to make any necessary changes to your team before the end of your current Auto-Flex cycle, when you will be billed for any newly added users.

> If you have already been billed for the users you added and retained in an earlier Auto-Flex cycle, you can't remove those seats until your plan renews.

You won't be billed if the number of users has remained unchanged during your Auto-Flex cycle, or if you remove any additional users prior to Auto-Flex billing.

> If your team incurs any overages and you have an Auto-Flex bill for that cycle, your invoice will combine your overage charges with your Auto-Flex charges.

In your [billing dashboard](http://go.postman.co/billing), you can view:

* Your current number of additional team members and additional add-on seats
* How much you will be billed at the end of your cycle (unless you add or remove users in the interim)
* Additional information about your Auto-Flex and regular billing cycles

> [Contact Postman support](https://www.postman.com/support/) with any questions about Auto-Flex.

## Canceling your plan

To cancel your Postman plan, select **Cancel plan** at the bottom of your [billing dashboard](http://go.postman.co/billing).

If you have canceled your Postman plan and want to reverse this action, select **Undo cancellation** next to the cancellation notice on your [billing dashboard](http://go.postman.co/billing).

If you are on a Free plan with Postbot subscription and want to cancel your Postbot subscription, select **Remove add-on** at the bottom of [billing dashboard](http://go.postman.co/billing).

## Next steps

After learning how to navigate the billing dashboard, you can learn more about the Billing role and managing your team.

* To learn more about the Billing team role, visit [Roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).
* For information on team management, visit the [Team management overview](/docs/administration/managing-your-team/managing-your-team/).
