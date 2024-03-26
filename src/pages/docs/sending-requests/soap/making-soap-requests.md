---
title: "Make HTTP calls using the SOAP protocol"
updated: 2023-6-30
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "What Is a SOAP API?"
    url: "https://blog.postman.com/soap-api-definition/"
  - type: link
    name: "Making HTTP SOAP Requests with Postman"
    url: "https://blog.postman.com/making-http-soap-requests-with-postman/"
  - type: link
    name: "How to choose between REST vs. GraphQL vs. gRPC vs. SOAP"
    url: "https://blog.postman.com/how-to-choose-between-rest-vs-graphql-vs-grpc-vs-soap/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Public SOAP APIs"
    url:  "https://www.postman.com/cs-demo/workspace/public-soap-apis/overview"
  - type: link
    name: "SOAP: Fahrenheit to Celsius conversion"
    url: "https://www.postman.com/postman/workspace/postman-team-collections/collection/1559645-468bc02d-1eb5-40d6-bf98-b4e5c6574e41?ctx=documentation"

---

Postman can make HTTP calls using Simple Object Access Protocol (SOAP), a platform-independent messaging protocol specification. In this example, the SOAP endpoint changes numeric values into their text equivalents, from `500` to `five hundred`.

> For more SOAP request examples, see the [Public SOAP APIs](https://www.postman.com/cs-demo/workspace/public-soap-apis/overview) collection.

## Contents

* [Entering your SOAP endpoint](#entering-your-soap-endpoint)
* [Adding body data](#adding-body-data)
* [Setting your request headers](#setting-your-request-headers)
* [Sending your request](#sending-your-request)

## Entering your SOAP endpoint

1. If you haven't already, [download and install the Postman desktop app](/docs/getting-started/installation/installation-and-updates/).

1. To open an HTTP request, select __New > HTTP__.

    <img alt="Create new request" src="https://assets.postman.com/postman-docs/v10/create-new-http-v10-6.jpg" width="500px"/>

1. Enter your SOAP endpoint URL in the address field. For this example, use the following endpoint URL: `https://www.dataaccess.com/webservicesserver/NumberConversion.wso`.

1. Select __POST__ from the request method dropdown list.

    ![SOAP method](https://assets.postman.com/postman-docs/v10/soap-method-v10-15.jpg)

## Adding body data

1. In the __Body__ tab, select __raw__ and choose __XML__ from the dropdown list.

    ![SOAP body type](https://assets.postman.com/postman-docs/v10/soap-body-type-v10-16.jpg)

1. Enter your XML in the text entry area. To test the number conversion SOAP API used in the previous section, enter the following XML in the text entry area:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
       <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
         <ubiNum>500</ubiNum>
       </NumberToWords>
      </soap:Body>
   </soap:Envelope>
   ```

   Your request body must include the SOAP `Envelope`, `Header`, and `Body` tags as required by the endpoint, as well as any namespaces. The data needs to include the name of the operation, together with any values you need to post to the service.

## Setting your request headers

When you select an XML body type, Postman automatically adds a content type header of `application/xml`. But depending on your service provider, you may need `text/xml` for some SOAP requests. Check with your SOAP service to decide which header is appropriate. If you need the `text/xml` header, override the default setting added by Postman.

To set request headers, do the following:

1. Open the request __Headers__. If the auto-generated headers are hidden, select **hidden** to display them.
1. Clear the `Content-Type` header, which was automatically added.
1. Add a new key-value pair, `Content-Type` and `text/xml`.
1. Add another key-value pair, `SOAPAction` and `"#MethodName"`(in this example, `"#POST"`).

   ![SOAP content type](https://assets.postman.com/postman-docs/v10/soap-header-v10-16.jpg)

## Sending your request

Select __Send__ to make your call to the SOAP service. If your call is successful, Postman displays the response in the lower tab.

![SOAP response data](https://assets.postman.com/postman-docs/v10/soap-response-data-v10.jpg)
