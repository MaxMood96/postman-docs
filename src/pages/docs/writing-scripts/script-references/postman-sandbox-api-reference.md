---
title: "Manage API data and workflows using Postman JavaScript objects"
updated: 2020-09-04
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Use External Libraries | Postman Level Up"
    url: "https://youtu.be/515xUz1rSNQ"
  - type: link
    name: "Skip Requests | Postman Level Up"
    url: "https://youtu.be/HSWYbmlmgP0?si=XRBFkDOccqS3v3lt"
  - type: link
    name: "Data Encryption with CryptoJS"
    url: "https://youtu.be/W_Gj1Q0lEOU"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Adding External Libraries in Postman"
    url: "https://blog.postman.com/adding-external-libraries-in-postman/"
---

The Postman JavaScript API functionality enables you to programmatically access and alter request and response data and variables using the `pm` object. You can also dynamically alter execution order to build request workflows for the Collection Runner using the `postman` object.

## Contents

* [Using variables in scripts](#using-variables-in-scripts)
    * [Environment variables](#using-environment-variables-in-scripts)
    * [Collection variables](#using-collection-variables-in-scripts)
    * [Global variables](#using-global-variables-in-scripts)
    * [Data variables](#using-data-variables-in-scripts)
* [Scripting with request and response data](#scripting-with-request-and-response-data)
    * [Request data](#scripting-with-request-data)
    * [Response data](#scripting-with-response-data)
    * [Request info](#scripting-with-request-info)
    * [Cookies](#scripting-with-request-cookies)
* [Sending requests from scripts](#sending-requests-from-scripts)
* [Get the path and name of a request](#get-the-path-and-name-of-a-request)
* [Skip request execution from pre-request scripts](#skip-request-execution-from-pre-request-scripts)
* [Scripting workflows](#scripting-workflows)
* [Scripting Postman Visualizations](#scripting-postman-visualizations)
* [Building response data into Postman Visualizations](#building-response-data-into-postman-visualizations)
* [Writing test assertions](#writing-test-assertions)
* [Using external libraries](#using-external-libraries)

## Using variables in scripts

You can access and manipulate [variables](/docs/sending-requests/variables/variables/) at each scope in Postman using the `pm` API.

> You can use [dynamic variables](/docs/writing-scripts/script-references/variables-list/) to generate values when your requests run.

Postman supports a variety of variable [scopes](/docs/sending-requests/variables/variables/#variable-scopes). The `pm` object provides methods for accessing global, collection, and environment variables specifically, and `pm.variables` methods for accessing variables at different scopes and setting local variables.

* Check if there is a Postman variable in the current scope:

```js
pm.variables.has(variableName:String):function → Boolean
```

* Get the value of the Postman variable with the specified name:

```js
pm.variables.get(variableName:String):function → *
```

* Set a local variable with the specified name and value:

```js
pm.variables.set(variableName:String, variableValue:*):function
```

* Return the resolved value of a dynamic variable inside a script using the syntax `{{$variableName}}`:

```js
pm.variables.replaceIn(variableName:String):function: → *
```

For example:

```js
const stringWithVars = pm.variables.replaceIn("Hi, my name is {{$randomFirstName}}");
console.log(stringWithVars);
```

* Return an object containing all variables with their values in the current scope. Based on the order of precedence, this will contain variables from multiple scopes.

```js
pm.variables.toObject():function → Object
```

Variable scope determines the precedence Postman gives to variables when you reference them, in order of increasing precedence:

* Global
* Collection
* Environment
* Data
* Local

The variable with the closest scope overrides any others. For example, if you have variables named `score` in both the current collection and the active environment, and you call `pm.variables.get('score')`, Postman will return the current value of the environment variable. When you set a variable value using `pm.variables.set`, the value is local and will only persist for the current request or collection run.

```js
//collection var 'score' = 1
//environment var 'score' = 2

//first request run
console.log(pm.variables.get('score'));//outputs 2
console.log(pm.collectionVariables.get('score'));//outputs 1
console.log(pm.environment.get('score'));//outputs 2

//second request run
pm.variables.set('score', 3);//local var
console.log(pm.variables.get('score'));//outputs 3

//third request run
console.log(pm.variables.get('score'));//outputs 2
```

> See the [Postman Collection SDK Variables reference](https://www.postmanlabs.com/postman-collection/Variable.html) for more detail.

You can also access variables defined in the individual scopes with [pm.environment](#using-environment-variables-in-scripts), [pm.collectionVariables](#using-collection-variables-in-scripts), and [pm.globals](#using-global-variables-in-scripts).

### Using environment variables in scripts

Your scripts can use the `pm.environment` methods to access and manipulate variables in the active (currently selected) environment.

* The name of the active environment:

```js
pm.environment.name:String
```

* Check whether the environment has a variable with the specified name:

```js
pm.environment.has(variableName:String):function → Boolean
```

* Get the variable with the specified name in the active environment:

```js
pm.environment.get(variableName:String):function → *
```

* Set the variable with the specified name and value in the active environment:

```js
pm.environment.set(variableName:String, variableValue:*):function
```

* Return the resolved value of a dynamic variable inside a script using the syntax `{{$variableName}}`:

```js
pm.environment.replaceIn(variableName:String):function → *
```

For example:

```js
//environment has vars firstName and age
const stringWithVars = pm.environment.replaceIn("Hi, my name is {{firstName}} and I am {{age}}.");
console.log(stringWithVars);
```

* Return all variables with their values in the active environment in a single object:

```js
pm.environment.toObject():function → Object
```

* Remove a variable from the active environment, specifying the variable by name:

```js
pm.environment.unset(variableName:String):function
```

* Clear all variables in the active environment:

```js
pm.environment.clear():function
```

> Note that your ability to edit variables depends on your [access level](/docs/sending-requests/variables/team-environments/#manage-environment-roles) in the workspace.

### Using collection variables in scripts

Your scripts can use the `pm.collectionVariables` methods to access and manipulate variables in the collection.

* Check whether there is a variable in the collection with the specified name:

```js
pm.collectionVariables.has(variableName:String):function → Boolean
```

* Return the value of the collection variable with the specified name:

```js
pm.collectionVariables.get(variableName:String):function → *
```

* Set a collection variable with the specified name and value:

```js
pm.collectionVariables.set(variableName:String, variableValue:*):function
```

* Return the resolved value of a dynamic variable inside a script using the syntax `{{$variableName}}`:

```js
pm.collectionVariables.replaceIn(variableName:String):function → *
```

For example:

```js
//collection has vars firstName and age
const stringWithVars = pm.collectionVariables.replaceIn("Hi, my name is {{firstName}} and I am {{age}}.");
console.log(stringWithVars);
```

* Return all variables with their values in the collection in an object:

```js
pm.collectionVariables.toObject():function → Object
```

* Remove the specified variable from the collection:

```js
pm.collectionVariables.unset(variableName:String):function
```

* Clear all variables from the collection:

```js
pm.collectionVariables.clear():function
```

### Using global variables in scripts

Your scripts can use the `pm.globals` methods to access and manipulate variables at global scope within the workspace.

* Check where there is a global variable with the specified name:

```js
pm.globals.has(variableName:String):function → Boolean
```

* Return the value of the global variable with the specified name:

```js
pm.globals.get(variableName:String):function → *
```

* Set a global variable with specified name and value:

```js
pm.globals.set(variableName:String, variableValue:*):function
```

* Return the resolved value of a dynamic variable inside a script using the syntax `{{$variableName}}`:

```js
pm.globals.replaceIn(variableName:String):function → String
```

For example:

```js
//globals include vars firstName and age
const stringWithVars = pm.globals.replaceIn("Hi, my name is {{firstName}} and I am {{age}}.");
console.log(stringWithVars);
```

* Return all global variables and their values in an object:

```js
pm.globals.toObject():function → Object
```

* Remove the specified global variable:

```js
pm.globals.unset(variableName:String):function
```

* Clear all global variables in the workspace:

```js
pm.globals.clear():function
```

> Note that your ability to edit variables depends on your [access level](/docs/sending-requests/variables/team-environments/#manage-environment-roles) in the workspace.

### Using data variables in scripts

Your scripts can use the `pm.iterationData` methods to access and manipulate variables from [data files during a collection run](/docs/collections/running-collections/working-with-data-files/).

* Check whether a variable with the specified name exists in the current iteration data:

```js
pm.iterationData.has(variableName:String):function → boolean
```

* Return a variable from the iteration data with the specified name:

```js
pm.iterationData.get(variableName:String):function → *
```

* Return the iteration data variables in an object:

```js
pm.iterationData.toObject():function → Object
```

* Convert the iterationData object to JSON format:

```js
pm.iterationData.toJSON():function → *
```

* Remove the specified variable:

```js
pm.iterationData.unset(key:String):function
```

## Scripting with request and response data

A variety of methods provide access to request and response data in Postman scripts, including [pm.request](#scripting-with-request-data), [pm.response](#scripting-with-response-data), [pm.info](#scripting-with-request-info), and [pm.cookies](#scripting-with-request-cookies). Additionally you can send requests using [pm.sendRequest](#sending-requests-from-scripts).

### Scripting with request data

The `pm.request` object provides access to the data for the request the script is running within. For a **Pre-request Script** this is the request that's about to run, and for a **Test** script this is the request that has already run.

You can use the `pm.request` object pre-request scripts to alter various parts of the request configuration before it runs.

The `pm.request` object provides the following properties and methods:

* The request URL:

```js
pm.request.url:Url
```

* The [list of headers](https://www.postmanlabs.com/postman-collection/HeaderList.html) for the current request:

```js
pm.request.headers:HeaderList
```

* The HTTP request method:

```js
pm.request.method:String
```

* The data in the [request body](https://www.postmanlabs.com/postman-collection/RequestBody.html). This object is immutable and can't be modified from scripts:

```js
pm.request.body:RequestBody
```

* Add a header with the specified name and value for the current request:

```js
pm.request.headers.add(header:Header):function
```

For example:

```js
pm.request.headers.add({
  key: "client-id",
  value: "abcdef"
});
```

* Delete the request header with the specified name:

```js
pm.request.headers.remove(headerName:String):function
```

* Insert the specified header name and value (if the header doesn't exist, otherwise the already existing header will update to the new value):

```js
pm.request.headers.upsert({key: headerName:String, value: headerValue:String}):function)
```

> See the Postman [Collection SDK Request reference](https://www.postmanlabs.com/postman-collection/Request.html) for more detail.

### Scripting with response data

The `pm.response` object provides access to the data returned in the response for the current request in scripts added to the **Tests**.

The `pm.response` object provides the following properties and methods:

* The response status code:

```js
pm.response.code:Number
```

* The status text string:

```js
pm.response.status:String
```

* The [list of response headers](https://www.postmanlabs.com/postman-collection/HeaderList.html):

```js
pm.response.headers:HeaderList
```

* The time the response took to receive in milliseconds:

```js
pm.response.responseTime:Number
```

* The size of the response received:

```js
pm.response.responseSize:Number
```

* The response text:

```js
pm.response.text():Function → String
```

* The response JSON, which you can use to drill down into the properties received:

```js
pm.response.json():Function → Object
```

> See the Postman [Collection SDK Response reference](https://www.postmanlabs.com/postman-collection/Response.html) for more detail.

### Scripting with request info

The `pm.info` object provides data related to the request and the script itself, including name, request ID, and iteration count.

The `pm.info` object provides the following properties and methods:

* The event, which will be either `prerequest` or `test` depending on where the script is executing within the request:

```js
pm.info.eventName:String
```

* The value of the current [iteration](/docs/collections/running-collections/intro-to-collection-runs/):

```js
pm.info.iteration:Number
```

* The total number of iterations that are scheduled to run:

```js
pm.info.iterationCount:Number
```

* The saved name of the request running:

```js
pm.info.requestName:String
```

* A unique GUID that identifies the running request:

```js
pm.info.requestId:String
```

### Scripting with request cookies

The `pm.cookies` object provides access to the list of cookies associated with the request.

The `pm.cookies` object provides the following properties and methods:

* Check whether a particular cookie (specified by name) exists for the requested domain:

```js
pm.cookies.has(cookieName:String):Function → Boolean
```

* Get the value of the specified cookie:

```js
pm.cookies.get(cookieName:String):Function → String
```

* Get a copy of all cookies and their values in an object. Returns any cookies that are defined for the request domain and path:

```js
pm.cookies.toObject():Function → Object
```

> See the Postman [Collection SDK Cookie List reference](https://www.postmanlabs.com/postman-collection/CookieList.html) for more detail.

You can also use `pm.cookies.jar` to specify a domain for access to request cookies.

To enable programmatic access using the `pm.cookies.jar` methods, first add the cookie URL to the [allowlist](/docs/sending-requests/response-data/cookies/).

* Access the cookie jar object:

```js
pm.cookies.jar():Function → Object
```

For example:

```js
const jar = pm.cookies.jar();
//cookie methods...
```

* Set a cookie using name and value:

```js
jar.set(URL:String, cookie name:String, cookie value:String, callback(error, cookie)):Function → Object
```

* Set a cookie using [PostmanCookie](https://www.postmanlabs.com/postman-collection/Cookie.html) or a compatible object:

```js
jar.set(URL:String, { name:String, value:String, httpOnly:Bool }, callback(error, cookie)):Function → Object
```

For example:

```js
const jar = pm.cookies.jar();
jar.set("httpbin.org", "session-id", "abc123", (error, cookie) => {
  if (error) {
    console.error(`An error occurred: ${error}`);
  } else {
    console.log(`Cookie saved: ${cookie}`);
  }
});
```

* Get a cookie from the cookie jar:

```js
jar.get(URL:String, cookieName:String, callback (error, value)):Function → Object
```

* Get all the cookies from the cookie jar. The cookies are available in the callback function:

```js
jar.getAll(URL:String, callback (error, cookies)):Function
```

* Remove a cookie:

```js
jar.unset(URL:String, token:String, callback(error)):Function → Object
```

* Clear all cookies from the cookie jar:

```js
jar.clear(URL:String, callback (error)):Function → Object
```

> See the Postman [Collection SDK Cookie reference](https://www.postmanlabs.com/postman-collection/Cookie.html) for more detail.

## Sending requests from scripts

You can use the `pm.sendRequest` method to send a request asynchronously from a **Pre-request** or **Test** script. This allows you to execute logic in the background if you are carrying out computation or sending multiple requests at the same time without waiting for each to complete. You can avoid blocking issues by adding a callback function so that your code can respond when Postman receives a response. You can then carry out any additional processing you need on the response data.

You can pass the `pm.sendRequest` method a URL string, or can provide a complete request configuration in JSON including headers, method, body, [and more](http://www.postmanlabs.com/postman-collection/Request.html#~definition).

```js
// Example with a plain string URL
pm.sendRequest('https://postman-echo.com/get', (error, response) => {
  if (error) {
    console.log(error);
  } else {
  console.log(response);
  }
});

// Example with a full-fledged request
const postRequest = {
  url: 'https://postman-echo.com/post',
  method: 'POST',
  header: {
    'Content-Type': 'application/json',
    'X-Foo': 'bar'
  },
  body: {
    mode: 'raw',
    raw: JSON.stringify({ key: 'this is json' })
  }
};
pm.sendRequest(postRequest, (error, response) => {
  console.log(error ? error : response.json());
});

// Example containing a test
pm.sendRequest('https://postman-echo.com/get', (error, response) => {
  if (error) {
    console.log(error);
  }

  pm.test('response should be okay to process', () => {
    pm.expect(error).to.equal(null);
    pm.expect(response).to.have.property('code', 200);
    pm.expect(response).to.have.property('status', 'OK');
  });
});
```

See the [Request definition](http://www.postmanlabs.com/postman-collection/Request.html#~definition) and [Response structure](http://www.postmanlabs.com/postman-collection/Response.html) reference docs for more detail.

## Get the path and name of a request

The `pm.execution.location` property enables you to get the complete path of a request, including the folder and collection, in array format. For example, for a request named **R1** in folder **F1** in collection **C1**, the following test script code will return `["C1", "F1", "R1"]`:

```js
console.log(pm.execution.location);
// Returns the full path of a request in array format, for example:
// ["C1", "F1", "R1"]
```

To get the name of the current element, you can use the `pm.execution.location.current` property. For example, if you add the following code to the pre-request script of a folder named **F1**, it will return `F1`:

```js
console.log(pm.execution.location.current);
// Returns the name of the current element, for example:
// F1
```

You can use the `pm.execution.location` and `pm.execution.location.current` properties in your scripts to understand what items are being executed when a request is sent. This information enables you to implement logic and actions in your scripts tailored to the current location within your API testing or collection structure.

## Skip request execution from pre-request scripts

The `pm.execution.skipRequest` method enables you to stop the execution of a request from a [pre-request script](/docs/writing-scripts/pre-request-scripts/).

```js
pm.execution.skipRequest()
```

You can use the `pm.execution.skipRequest` method on the **Pre-request Script** tab of a request, collection, or folder. When `pm.execution.skipRequest()` is encountered, the request isn't sent. Any remaining scripts on the **Pre-request Script** tab are skipped, and no tests are executed.

For example:

```js
//Skip this request if an authentication token isn't present
if (!pm.environment.get('token')) {
    pm.execution.skipRequest()
}
```

In the [Collection Runner](/docs/collections/running-collections/running-collections-overview/), when `pm.execution.skipRequest()` is encountered, Postman skips execution of the current request (including its test scripts) and moves to the next request in order. The run results will show no response and no tests found for the request. This same behavior also applies to [Postman Flows](/docs/postman-flows/gs/flows-overview/), [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/), and [the Postman CLI](/docs/postman-cli/postman-cli-overview/).

> Using the `pm.execution.skipRequest` method isn't supported on the **Tests** tab of a request, collection, or folder and will have no effect there. You will also get the following Console error: `TypeError: pm.execution.skipRequest is not a function`.

## Scripting workflows

The `postman` object provides the `setNextRequest` method for building request workflows when you use the [collection runner](/docs/collections/running-collections/building-workflows/) or [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/).

> Note that `setNextRequest` has no effect when you run requests using **Send**; it only has an effect when you run a collection.

When you run a collection (using the collection runner or Newman), Postman will run your requests in a default order or an order you specify when you set up the run. However, you can override this execution order using `postman.setNextRequest` to specify which request to run next.

* Run the specified request after this one (the request name as defined in the collection, for example "Get customers"):

```js
postman.setNextRequest(requestName:String):Function
```

* Run the specified request after this one (the request ID returned by `pm.info.requestId`):

```js
postman.setNextRequest(requestId:String):Function
```

For example:

```js
//script in another request calls:
//pm.environment.set('next', pm.info.requestId)
postman.setNextRequest(pm.environment.get('next'));
```

## Scripting Postman Visualizations

Use `pm.visualizer.set` to specify a template to [display response data in the Postman Visualizer](/docs/sending-requests/response-data/visualizer/).

```js
pm.visualizer.set(layout:String, data:Object, options:Object):Function
```

* `layout` **required**
    * [Handlebars](https://handlebarsjs.com/) HTML template string
* `data` _optional_
    * JSON object that binds to the template and you can access it inside the template string
* `options` _optional_
    * [Options object](https://handlebarsjs.com/api-reference/compilation.html) for `Handlebars.compile()`

Example usage:

```js
var template = `<p>{{res.info}}</p>`;
pm.visualizer.set(template, {
    res: pm.response.json()
});
```

### Building response data into Postman Visualizations

Use `pm.getData` to retrieve response data inside a Postman Visualizer template string.

```js
pm.getData(callback):Function
```

The callback function accepts two parameters:

* `error`
    * Any error detail
* `data`
    * Data [passed to the template](#scripting-postman-visualizations) by `pm.visualizer.set`

Example usage:

```js
pm.getData(function (error, data) {
  var value = data.res.info;
});
```

## Writing test assertions

* `pm.test(testName:String, specFunction:Function):Function`

You can use `pm.test` to write test specifications inside either the **Pre-request** or **Tests** scripts. Tests include a name and assertion—Postman will output test results as part of the response.

The `pm.test` method returns the `pm` object, making the call chainable. The following sample test checks that a response is valid to proceed.

```js
pm.test("response should be okay to process", function () {
  pm.response.to.not.be.error;
  pm.response.to.have.jsonBody('');
  pm.response.to.not.have.jsonBody('error');
});
```

An optional `done` callback can be passed to `pm.test`, to test asynchronous functions.

```js
pm.test('async test', function (done) {
  setTimeout(() => {
    pm.expect(pm.response.code).to.equal(200);
    done();
  }, 1500);
});
```

* Get the total number of tests executed from a specific location in code:

```js
pm.test.index():Function → Number
```

The `pm.expect` method allows you to write assertions on your response data, using [ChaiJS expect BDD](https://www.chaijs.com/api/bdd/) syntax.

```js
pm.expect(assertion:*):Function → Assertion
```

You can also use `pm.response.to.have.*` and `pm.response.to.be.*` to build your assertions.

See [Test examples](/docs/writing-scripts/script-references/test-examples/) for more assertions.

## Using external libraries

```js
require(moduleName:String):function → *
```

The `require` method allows you to use the sandbox built-in library modules. The list of available libraries is listed below with links to the corresponding documentation.

* [ajv](https://www.npmjs.com/package/ajv)
* [atob](https://www.npmjs.com/package/atob)
* [btoa](https://www.npmjs.com/package/btoa)
* [chai](https://www.chaijs.com/)
* [cheerio](https://cheerio.js.org/)
* [crypto-js](https://www.npmjs.com/package/crypto-js)
* [csv-parse/lib/sync](https://csv.js.org/parse/)
* [lodash](https://lodash.com/) (The built-in `_` object v3.10.1 exists in the sandbox by default. Use `require` to load the latest version.)
* [moment](https://momentjs.com/docs/)
* [postman-collection](http://www.postmanlabs.com/postman-collection/)
* [tv4](https://github.com/geraintluff/tv4)
* [uuid](https://www.npmjs.com/package/uuid)
* [xml2js](https://www.npmjs.com/package/xml2js)

The following NodeJS modules are also available to use in the sandbox:

* [path](https://nodejs.org/api/path.html)
* [assert](https://nodejs.org/api/assert.html)
* [buffer](https://nodejs.org/api/buffer.html)
* [util](https://nodejs.org/api/util.html)
* [url](https://nodejs.org/api/url.html)
* [punycode](https://nodejs.org/api/punycode.html)
* [querystring](https://nodejs.org/api/querystring.html)
* [string-decoder](https://nodejs.org/api/string_decoder.html)
* [stream](https://nodejs.org/api/stream.html)
* [timers](https://nodejs.org/api/timers.html)
* [events](https://nodejs.org/api/events.html)

To use a library, call the `require` method, pass the module name as a parameter, and assign the return object from the method to a variable.

## Next steps

You can use tests to build Postman into your development projects in a variety of ways using [Postman utilities](/docs/developer/resources-intro/).
