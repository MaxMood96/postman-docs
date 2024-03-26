---
title: "Host API documentation with a custom domain"
updated: 2023-01-12
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Documentation | The Exploratory"
    url: "https://youtu.be/XNVo9WkCoak"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Axis Bank shortens development pipelines using public URLs"
    url: https://www.postman.com/case-studies/axis-bank/"
---

> **[Custom documentation domains are available on Postman paid plans.](https://www.postman.com/pricing)**

You can host your [published API documentation](/docs/publishing-your-api/publishing-your-docs/) on your own custom domain instead of on `getpostman.com`. After you add and verify a custom domain, users can access your API documentation using the custom domain.

## Contents

* [Adding a custom domain](#adding-a-custom-domain)
* [Verifying your domain](#verifying-your-domain)
    * [Adding DNS records](#adding-dns-records)
    * [Completing the verification](#completing-the-verification)
* [Troubleshooting DNS issues](#troubleshooting-dns-issues)
* [Publishing documentation on your custom domain](#publishing-documentation-on-your-custom-domain)

## Adding a custom domain

Access [Team Settings](https://go.postman.co/settings/team/general) by selecting **Team** in the header, then selecting **Team Settings**.

<img alt="Team menu with Team Settings selected" src="https://assets.postman.com/postman-docs/v10/team-settings-menu-selected-v10.jpg" width="350px"/>

Select **Custom domains** to view custom domains that have been added for your team and the verification status for each domain. Select **View Details** next to a domain get the verification records needed to [verify your domain](#verifying-your-domain).

![Viewing custom domains](https://assets.postman.com/postman-docs/v10/custom-domains-view-v10-21.jpg)

To add a new domain, select **Add custom domain** and enter the URL of your domain. You can enter a subdomain (like `docs.example.com`). You can't enter your main domain (like `example.com`).

![Adding a custom domain](https://assets.postman.com/postman-docs/v10/custom-domains-add-v10-21.jpg)

Select **Proceed** to verify the custom domain.

## Verifying your domain

After you add a custom domain, Postman displays the DNS records required to verify domain ownership. To verify that you control the domain you're attempting to add, copy the provided tokens and use them to add TXT and CNAME records to your domain. After adding the TXT and CNAME records to your domain, you can complete the verification in Team Settings.

![Custom domain TXT and CNAM records](https://assets.postman.com/postman-docs/v10/custom-domains-dns-records-v10-21.jpg)

### Adding DNS records

To add DNS records to your domain, open another browser tab and sign in to your domain registrar or DNS provider. Add a TXT record and a CNAME record to your domain using the tokens provided by Postman.

* **TXT record** - Add a new TXT record to your domain. For **Name**, enter `@` to add the record to the root domain. For **Value**, use the TXT token string copied from Postman.

    ![Adding a TXT record](https://assets.postman.com/postman-docs/v10/custom-domains-add-txt.jpg)

* **CNAME record** - Add a new CNAME record to your domain. For **Name**, enter the subdomain where you want to host your public documentation (for example, `docs.example.com`). For value, enter `phs.getpostman.com`.

    ![Adding a CNAME record](https://assets.postman.com/postman-docs/v10/custom-domains-cname-record.jpg)

> The steps for adding TXT and CNAME records can vary depending on the domain registrar or DNS provider and may look different than what's shown. Check your provider's documentation if you need more help.

### Completing the verification

To complete the verification, return to Team Settings in Postman. Select the checkbox next to **The TXT and CNAME records have been added** and select **Verify Domain**. Postman displays a message confirming the domain has been verified.

![Completing domain verification](https://assets.postman.com/postman-docs/v10/custom-domains-verify-v10.jpg)

If you don't want to verify the domain at this time, select **Verify Later**. To copy the TXT and CNAME tokens again, select **View Details** next to a domain. To remove a custom domain, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to the domain.

> Postman uses Let's Encrypt as an SSL certificate provider to enable hosting public documentation on your domain. Let's Encrypt generates a certificate implicitly if your domain has no CAA records. If your domain already has CAA records, then Let's Encrypt needs an explicit CAA record to issue a certificate for that domain. To enable Let's Encrypt to issue the certificate, refer to the [Let's Encrypt documentation](https://letsencrypt.org/docs/caa/).

<!-- -->

> It may take up to 24 hours for the new DNS settings to take effect. Until then, you may get an error message when accessing your custom domain. To check the status of the DNS change, visit [whatsmydns.net](https://www.whatsmydns.net/).

## Troubleshooting DNS issues

If you get an error message when trying to add a TXT or CNAME record to your domain, check the following requirements:

* **CNAME records can't co-exist with other records for the same domain.** If you already have a record for the subdomain where you want to host your public documentation, you need to change the record type to CNAME or add a new subdomain.

* **You can't add the CNAME record to the root domain.** The TXT record `@` is used to verify the ownership of the root domain. Instead, add the CNAME record to the subdomain where you want to host your public documentation (such as `docs.example.com`) and set the value to `phs.getpostman.com`.

## Publishing documentation on your custom domain

After your custom domain is verified, you can use it to [publish your API documentation](/docs/publishing-your-api/publishing-your-docs/#making-your-documentation-public). If you have a collection that's already published, you can [edit the publication settings](/docs/publishing-your-api/publishing-your-docs/#changing-publication-settings) to use the new domain.

![Publishing on a custom domain](https://assets.postman.com/postman-docs/v10/custom-domains-publish-v10-21.jpg)
