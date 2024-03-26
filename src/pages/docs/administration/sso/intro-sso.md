---
title: "Intro to SSO"
updated: 2023-03-22
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman 101 for Admins | Webinar"
    url: "https://youtu.be/d6pw-0Yy5fs"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "PayPal uses SSO to onboard developers"
    url: "https://www.postman.com/case-studies/paypal/"
  - type: link
    name: "Western Governors University (WGU) uses SSO to create teams"
    url: "https://www.postman.com/case-studies/wgu/"
---

> **[SSO is available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)**

Single sign-on (SSO) services enable you to manage your team’s identity across all the SaaS products that you use.

With an SSO service, a user can access multiple applications using one set of credentials (for example, an email address and password). The SSO service authenticates the user once for all the applications the user has been given rights to and eliminates further prompts when the user switches applications during the same session.

An example of SSO is Google's sign-in implementation for products like Gmail, YouTube, and Google Drive. Any user who is signed in to one of Google's products is automatically signed in to their other products as well.

## Contents

* [What are the advantages of SSO?](#what-are-the-advantages-of-sso)
* [Prerequisites for SSO with Postman](#prerequisites-for-sso-with-postman)
* [Supported IdPs](#supported-idps)
* [SSO setup for SAML 2.0 compliant IdPs](#sso-setup-for-saml-20-compliant-idps)

## What are the advantages of SSO?

* Removes the need for users to remember and manage multiple passwords.
* Simplifies users' experience by enabling them to sign in at a single access point and work seamlessly across multiple applications.
* Increases productivity by significantly reducing the password-related support emails.
* Reduces phishing attempts that try to trick users into giving away sensitive information.

## Prerequisites for SSO with Postman

* Team’s identity provider (IdP) must support the SAML 2.0 standard.

## Supported IdPs

Professional plans:

* [Google Workspace](/docs/administration/sso/google-workspace/)

> Professional plans purchased prior to September 14, 2022 can also use SSO with Okta, OneLogin, Duo, Ping Identity, Microsoft AD FS, Microsoft Entra ID, and custom SAML.

Enterprise plans:

* [Microsoft AD FS](/docs/administration/sso/microsoft-adfs/)
* [Microsoft Entra ID](/docs/administration/sso/azure-ad/)
* [Custom SAML](/docs/administration/sso/custom-saml/)
* [Duo](/docs/administration/sso/duo/)
* [Google Workspace](/docs/administration/sso/google-workspace/)
* [Okta](/docs/administration/sso/okta/)
* [OneLogin](/docs/administration/sso/onelogin/)
* [Ping Identity](/docs/administration/sso/ping-identity/)

## SSO setup for SAML 2.0 compliant IdPs

Most SAML 2.0 compliant identity providers require the same information about the service provider for setup (Postman is the service provider). These values are specific to a Postman team and are available while [configuring SSO](/docs/administration/sso/admin-sso/).

> While configuring your IdP, make sure to set your users' email address in SAML attributes and claims. Postman expects to receive an email address from your IdP to identify each user.

<!-- -->

> If you configure SSO, Postman Password and Google Oauth 2.0 authentication methods remain enabled for your team. You can turn off these authentication methods to only allow your team to sign in using SSO.
