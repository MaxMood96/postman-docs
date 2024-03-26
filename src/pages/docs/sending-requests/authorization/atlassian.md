---
title: "Authenticate with Atlassian S2S in Postman"
updated: 2023-11-15
---

Atlassian S2S Authentication Protocol (ASAP) is a [JSON Web Token](https://datatracker.ietf.org/doc/html/rfc7519) (JWT) bearer token that an API server can use to authenticate requests from the client.

To use ASAP, do the following:

1. In the __Authorization__ tab for a request, select __ASAP (Atlassian)__ from the __Type__ dropdown list.
1. Enter your details in the fields. You can set optional settings, but Postman will try to generate values for them if necessary.

Enter the following ASAP parameters:

* **Algorithm** - Select an asymmetric key algorithm to use to sign the JWT token. The algorithm is a header parameter. Supported algorithms include:

    * **RS** - RSA (RSASSA-PKCS1-v1_5) with SHA
    * **PS** - RSA (RSASSA-PSS) with SHA
    * **ES** - ECDSA with SHA

* **Issuer** - A claim that identifies the service that issued the JWT token, and signed the header and payload with its private key.

* **Audience** - A claim that identifies the intended recipient of the JWT token.

* **Key ID** - The identifier for the issuer's public key. This is used to verify the JWT token's signature. The key ID is a header parameter.

* **Private key** - The issuer's private key that signed the JWT token. Select **Select File** to upload a private key in PKCS #8 or Base64 DER format, or paste your key in the text area.

* Optional parameters:

    * **Subject** - A claim that identifies the user the JWT token is issued to. If the subject isn't specified, the default value is the issuer.

    * **Additional claims** - Additional claims you'd like to include in your payload, in JSON format. You can [learn more about JWT claims](https://datatracker.ietf.org/doc/html/rfc7519#section-4).

        > If you add claims already defined in this configuration, the values defined in each key-value pair will have higher priority. For example, if you specify an issuer in the **Issuer** field and also specify an issuer (`iss`) in a key-value pair, the value in the key-value pair will have higher priority.

    * **Expiry** - A claim that identifies when the JWT token expires, in seconds. The default expiration timestamp is `3600` seconds, which is equal to one hour.

For more information about ASAP, see [Atlassian S2S Authentication Protocol](https://s2sauth.bitbucket.io/).
