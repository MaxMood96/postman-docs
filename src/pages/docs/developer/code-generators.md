---
title: "Generate client code for your API collections"
updated: 2023-10-04
---

You can generate client code for your API collections in Postman. Postman's Node.js code generator module converts a request into client code for your target language in conjunction with the [Collection SDK](/docs/developer/collection-sdk/).

The code generator takes a Collection SDK [Request object](http://www.postmanlabs.com/postman-collection/Request.html) and turns it into code to make the same request in a client app using the specified language and framework.

You can install the code generator library from [npm](https://www.npmjs.com/package/postman-code-generators) or by [cloning it from its repo](https://github.com/postmanlabs/postman-code-generators).

To get started using the code generator module, [check out the instructions for installation and usage in the project repo on GitHub](https://github.com/postmanlabs/postman-code-generators).

> You can also generate client code for a request or collection [in Postman](/docs/sending-requests/create-requests/generate-code-snippets/).

## Contents

* [Using code generation programmatically](#using-code-generation-programmatically)
* [Supported languages](#supported-languages)
* [Next steps](#next-steps)

## Using code generation programmatically

The following simplified code excerpt demonstrates using `convert` to build a client code snippet from a Request object with the Collection SDK, targeting Node.js:

```js
var codegen = require('postman-code-generators'),
  sdk = require('postman-collection'),
  request = new sdk.Request('https://www.google.com'),
  language = 'nodejs',
  variant = 'request',
  options = {
    indentCount: 3,
    indentType: 'Space',
    trimRequestBody: true,
    followRedirect: true
  };
codegen.convert(language, variant, request, options,
  function(error, snippet) {
    if (error) {
      //  handle error
    }
    //  handle snippet..
});
```

You can use the `getOptions` method to find config options for your target language:

```js
var codegen = require('postman-code-generators'),
  language = 'nodejs',
  variant = 'Request';

codegen.getOptions(language, variant, function (error, options) {
  if (error) {
    // handle error
  }
  console.log(options);
});
```

The `getLanguageList` method returns available languages your request client code can target:

```js
var codegen = require('postman-code-generators'),
  supportedCodegens = codegen.getLanguageList();
  console.log(supportedCodegens);
```

## Supported languages

The code generator module is an open-source project. If there is a language or framework you'd like to generate client code for, but it isn't currently provided, you can add it by [contributing to the project](https://github.com/postmanlabs/postman-code-generators/blob/master/CONTRIBUTING.md). This lets other users access your contribution both in the repo and in Postman itself.

## Next steps

If you're using Postman to work with client applications, you can also capture request data:

* To learn more about capturing request data, visit [Capturing HTTP requests](/docs/sending-requests/capturing-request-data/capturing-http-requests/).
