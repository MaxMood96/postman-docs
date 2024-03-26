---
title: "Select custom settings for API requests in Postman"
updated: 2024-02-05
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Part 1: Send a Request"
    url: "https://youtu.be/2oOSnxZ28fA"
  - type: link
    name: "How to use an API? | Intro to APIs Part 2"
    url:  "https://youtu.be/woRuedXZyi4"
---

You can configure a variety of settings for your API requests in Postman. These settings enable you to customize Postman's behavior when sending a request. For example, you can turn on SSL certificate validation or turn off URL encoding for a request.

## Contents

* [Configure custom request settings](#configure-custom-request-settings)
* [Encode your request URLs](#encode-your-request-urls)

## Configure custom request settings

To configure custom settings, select the **Settings** tab of your request, then select the toggle next to a setting to turn it on or off. Each setting provides a description of its effect when sending the request.

When you're done configuring settings, select **Send** to send the request. Learn more about [creating and sending requests in Postman](/docs/sending-requests/create-requests/request-basics/).

## Encode your request URLs

Postman parses and encodes your request's URL to maximize the chances of a successful API call. Postman encodes the characters in the URL and maps them to a representation that your API is most likely to accept. The Postman URL processor optimizes the chance of your request being effectively processed by the wide range of server implementations in use.

The processor will encode characters depending on where they occur in the URL:

| URL component | Characters to encode |
| ------------- | -------------------- |
| Path | `"` `<` `>` `` ` `` `#` `?` `{` `}` `SPACE` |
| Query | `"` `#` `&` `'` `<` `=` `>` `SPACE` |
| Userinfo | `"` `<` `>` `` ` `` `#` `?` `{` `}` `/` `:` `;` `=` `@` `[` `\` `]` `^` | `SPACE` |

The processor is turned on by default in Postman, but you can turn off encoding if you are working with an unusual server implementation. To turn this setting on or off in your request, in the **Settings** tab select **Encode URL automatically**.

> You can selectively encode parts of your URL by highlighting the text and right-clicking, then choosing **EncodeURIComponent**.
