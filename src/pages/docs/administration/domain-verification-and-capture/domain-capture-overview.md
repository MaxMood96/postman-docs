---
title: "Configure domain verification and account capture in Postman"
updated: 2024-01-02
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Domain Capture: Group Your Organization’s Postman Users into a Single Team"
    url: "https://blog.postman.com/introducing-domain-capture/"
---

> **[Domain verification is available on Postman Enterprise plans. Domain capture is available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

Domain verification and capture enable you to improve your team's onboarding experience and simplify team management. With these features, Team Admins can instantly give people access to the teams and resources they need to collaborate in Postman.

[Domain verification](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/) enables Postman to trust your team and its connection to your organization. When you verify your organization's domain, Team Admins can add users to your team who verified their email addresses with the relevant domain. Users won't need to accept an invite to join your team, enabling you to instantly provide new teammates with all of the resources they’ll need. Domain verification is one of the [prerequisites for enabling domain capture](#prerequisites-for-domain-capture).

[Domain capture](/docs/administration/domain-verification-and-capture/enable-domain-capture/) consolidates all of the Postman user accounts that exist within your organization into one team. When you enable it, any accounts associated with the verified internet domain or subdomain will only be able to use Postman within your team. Moving forward, any Postman users who sign up for a new account with the relevant domain will be automatically added to your team as new members.

## Contents

* [Benefits of enabling domain capture](#benefits-of-enabling-domain-capture)

* [Prerequisites for domain capture](#prerequisites-for-domain-capture)

* [Set up domain capture](#set-up-domain-capture)

## Benefits of enabling domain capture

Domain capture benefits both administrators and developers in the following ways:

* **Administrators** - Domain capture consolidates all of the Postman user accounts within your organization into one Postman Enterprise team. This enables you to only need one dashboard to maintain compliance and security across your organization. Domain capture ensures there isn't any unauthorized usage within your organization. It also ensures that all Postman users associated with your domain are directed to your organization's official team.

* **Developers** - As users authenticate into Postman with your verified domain, domain capture automatically directs users to your organization's official team. This ensures that new teammates are instantly provided all of the resources they’ll need to be successful contributors.

## Prerequisites for domain capture

You must be a [Postman Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable domain capture for your team. In addition, your team must:

* Be on a [Postman Enterprise Ultimate](https://www.postman.com/pricing) plan.
* Use [Postman version 9 or later](/docs/administration/enterprise/managing-enterprise-deployment/).
* Have [SSO](/docs/administration/sso/admin-sso/) configured and enabled. Alternative authentication methods (Postman or Google sign in) must be turned off.
* [Add and verify a domain or subdomain](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/).

It's recommended that you enable [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/) to ease the process of onboarding new users. [Auto-Flex](/docs/administration/billing/#using-auto-flex) is also recommended to ensure your team can automatically accommodate all users that may be added to your Postman team when domain capture is enabled.

## Set up domain capture

To set up domain capture, do the following:

1. Complete the [prerequisites](#prerequisites-for-domain-capture) for enabling domain capture, including [adding and verifying a domain](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/).
1. [Enable domain capture](/docs/administration/domain-verification-and-capture/enable-domain-capture/).

For more information on domain verification and account capture, see [Domain capture FAQs](/docs/administration/domain-verification-and-capture/domain-capture-faqs/).
