---
title: "FQL function reference"
updated: 2023-04-21
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Flows Query Language (FQL) | Postman Flows"
    url:  "https://youtu.be/4KDQM8gv7PM"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Advanced FQL expressions in Postman Flows"
    url: "https://blog.postman.com/advanced-fql-expressions-in-postman-flows/"
---

All [Flows Query Language](/docs/postman-flows/flows-query-language/introduction-to-fql/) (FQL) functions are documented below.

## Contents

* [General functions](#general-functions)
* [Array functions](#array-functions)
* [Numeric functions](#numeric-functions)
* [Date and time functions](#date-and-time-functions)

## General functions

### assert

Throws an error with the message if a condition is false.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$assert($cond: bool, $msg: string) => error
</td>
</tr>
<tr>
<td>Example</td>
<td>
$assert(user.age &lt;18, "error:  user cannot vote!")
</td>
</tr>
</tbody>
</table>

### average

Returns the average value of a numeric array.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$average($array: array&lt;num&gt;) =&lt; number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$average([1,2,3,4,5]) -> 3
</td>
</tr>
</tbody>
</table>

### boolean

Casts an argument to its effective boolean value.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$boolean($arg: any) => bool
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>
$boolean(0) ->  false
$boolean(10) ->  true
$boolean("") ->  false
$boolean("abc") ->  true
</pre>
</td>
</tr>
</tbody>
</table>

### contains

Returns true if a string contains a pattern.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$contains($str: string, $pattern: string | regex) => bool
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>
$contains("hello, world", "lo") -> true
$contains("hello world", "ab") -> false
</pre>
</td>
</tr>
</tbody>
</table>

### decodeUrl

Decodes a string from a URL.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$decodeUrl($val: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$decodeUrl("https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B") -&gt; "https://mozilla.org/?x=шеллы"
</td>
</tr>
</tbody>
</table>

### decodeUrlComponent

Decodes a string from a component previously created with `encodeUrlComponent`.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$decodeUrlComponent($val: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$decodeUrlComponent("&percnt;3Fx&percnt;3Dtest") -> "?x=test"
</td>
</tr>
</tbody>
</table>

### each

Applies a function to each key/value pair of an object.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$each($obj: object, func: ($val, $key) : any)
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>"Address": {
    "Street": "Hursley Park",
    "City": "Winchester",
    "Postcode": "SO21 2JN"
}
$each(Address, fn($v, $k) {$k & ": " & $v}) ->
 [
        "Street: Hursley Park",
        "City: Winchester",
        "Postcode: SO21 2JN"
 ]</pre>
</td>
</tr>
</tbody>
</table>

### encodeUrl

Encodes a value into a URL.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$encodeUrl($val: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$encodeUrl("https://mozilla.org/?x=шеллы") -> "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
</td>
</tr>
</tbody>
</table>

### encodeUrlComponent

Encodes a value into a component for a URL.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$encodeUrlComponent($val: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$encodeUrlComponent("?x=test")  -> "%3Fx%3Dtest"
</td>
</tr>
</tbody>
</table>

### eval

Evaluates an expression.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$eval($val:string) => any
</td>
</tr>
<tr>
<td>Example</td>
<td>
$eval("[1,$string(2),3]") -> [1,"2",3]
</td>
</tr>
</tbody>
</table>

### exists

Returns true if a value is not null or undefined.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$exists($val: any) => bool
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>
$exists("hello") -> true
$exists([1,2,3]) -> true
$exists({"a" : 1, "b": 2}) -> true
$exists(null) -> false
$exists(blah) -> false
</pre>
</td>
</tr>
</tbody>
</table>

### filter

Returns an array of elements which satisfy the predicate defined in a function.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$filter($arr: array, $func: ($e, $index?: number?, $ar: array )=> boolean) => array
</td>
</tr>
<tr>
<td>Example</td>
<td>
$filter([1,2,3,4,5], fn($e){ $e>3}) -> [4, 5]
</td>
</tr>
</tbody>
</table>

### join

Joins the elements of an array into a string using the optional separator string.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$join($arr: array<string>, $separator?: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>
$join(["hello", "world"]) -> "helloworld"
$join(["hello", "world"], "-") → "hello-world"
$join([1,2,3], "..") -> "1..2..3"
</pre>
</td>
</tr>
</tbody>
</table>

### json

Converts an object to a JSON string.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$json($val:any) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$json({"a": 1, "b" : "hello"}) ->  "{"a":1,"b":"hello"}"
</td>
</tr>
</tbody>
</table>

### jsonParse

Parses a JSON string into an object.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$jsonParse($val:string) => object
</td>
</tr>
<tr>
<td>Example</td>
<td>
$jsonParse('{"one": 1, "two": [3, "four"]}') -> {"one": 1,"two": [ 3,"four"]}
</td>
</tr>
</tbody>
</table>

### keys

Returns an array of the keys in an object.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$keys($obj: object) => array<string>
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>"Product": [
    {
        "Product Name": "Bowler Hat",
        "ProductID": 858383,
        "SKU": "0406654608",
        "Description": {
            "Colour": "Purple",
            "Width": 300,
            "Height": 200,
            "Depth": 210,
            "Weight": 0.75
        },
        "Price": 34.45,
        "Quantity": 2
    }
]
$keys(Product) -> ["Product Name","ProductID","SKU","Description","Price","Quantity"]</pre>
</td>
</tr>
</tbody>
</table>

### length

Returns the length of a string.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$length($str: string) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$length("abc") -> 3
$length("") -> 0</pre>
</td>
</tr>
</tbody>
</table>

### lookup

Returns the value of a key in an object.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$lookup($obj: object, $key: string) => any
</td>
</tr>
<tr>
<td>Example</td>
<td>
($o := { "name" : "John", "email": "john@gmail.com"}; $lookup($o, "name")) -> "John"
</td>
</tr>
</tbody>
</table>

### lowercase

Returns the lowercase version of a string.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$lowercase($str: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$lowercase("Hello World") -> "hello world"
</td>
</tr>
</tbody>
</table>

### map

Maps each element of an array using a function and returns a new array with all the mapped elements.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$map($arr: array, $func: ($e, $index?: number?, $ar: array ) : array
</td>
</tr>
<tr>
<td>Example</td>
<td>
$map([1,2,3,4,5], fn($e){ $e *2}) -> [2,4,6,8,10]
</td>
</tr>
</tbody>
</table>

### max

Returns the maximum value from a numeric array.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$max($array) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$max([9,2,17,3]) -> 17
</td>
</tr>
</tbody>
</table>

### match

Returns an array of strings that match a pattern.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$match($str: string, $pattern: string | regex) => array<string>
</td>
</tr>
<tr>
<td>Example</td>
<td>
$match("ababbabbbcc",/a(b+)/) -> ["ab", "abb", "abbb"]
</td>
</tr>
</tbody>
</table>

### merge

Returns a new object with the properties of each object in an array of objects merged into it.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$merge($arr: array<object>) => object
</td>
</tr>
<tr>
<td>Example</td>
<td>
$merge([{"a":1},{"b":2}]) -> {"a": 1,"b": 2}
</td>
</tr>
</tbody>
</table>

### not

Returns true if a value is false, or false otherwise.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$not($x: any) => bool
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$not(true) -> false
$not(false) -> true
$not(null) -> true
$not(0) -> true
$not(100) -> false
$not("") -> true
$not("hello") -> false</pre>
</td>
</tr>
</tbody>
</table>

### pad

Returns a copy of a string padded to a length with $pad (if provided).

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$pad($str: string, $length: number, $pad?: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$pad("example", 5) -> "example  "
$pad("example", 5, "-") -> "example--"</pre>
</td>
</tr>
</tbody>
</table>

### partition

Partitions an array into an array of arrays of size $n.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$partition($array:any, $n: numbers) => array
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$partition([1,2,3,4,5,6,7,8,9,10], 2) -> [[1,2], [3,4], [5,6], [7,8], [9,10]]
$partition([1,2,3,4,5,6,7,8,9,10], 3) -> [[1,2,3], [4,5,6], [7,8,9], [10]]</pre>
</td>
</tr>
</tbody>
</table>

### replace

Returns a string with all occurrences of a pattern replaced by a replacement string.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$replace($str: string, $pattern: string | regex, $replacement: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$replace("Hello World", "World", "Everyone") -> "Hello Everyone"
$replace("the cat sat on the mat", "at", "it") -> "the cit sit on the mit"
</pre>
</td>
</tr>
</tbody>
</table>

### reduce

Reduces an array to some value using a function.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>$reduce(array, function [, init])</td>
</tr>
<tr>
<td>Example</td>
<td>
$reduce([1,2,3,4], fn($prev, $cur) { $prev*$cur}) ) -> 24
</td>
</tr>
</tbody>
</table>

### split

Splits a string into an array of strings using a pattern.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$split($str: string, $pattern: string | regex, $flags?: string) => array<string>
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$split("so many words", " ") -> [ "so", "many", "words" ]
$split("so many words", " ", 2) -> [ "so", "many" ]
$split("too much, punctuation. hard; to read", /[ ,.;]+/) -> ["too", "much", "punctuation", "hard", "to", "read"]</pre>
</td>
</tr>
</tbody>
</table>

### spread

Returns an array of objects with a single key/value pair, where the key is the name of the property and the value is the value of the property.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$spread($val: any) => array&lt;object&gt;
</td>
</tr>
<tr>
<td>Example</td>
<td>
$spread({ "a": 1, "b": 2}) -> [ { "a" : 1}, {"b": 2}]
</td>
</tr>
</tbody>
</table>

### string

Returns the string representation of the input value; if $prettify is true, the output string is formatted for readability.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$string($value: any, $prettify? true | false) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$string({"a": 1, "b": 2}) -> "{"a":1, "b" : 2}"
$string(5) -> "5"
$string([1,2,3]) -> ["1", "2", "3"]</pre>
</td>
</tr>
</tbody>
</table>

### substring

Returns a substring of a string starting at $start and with length $length (if provided).

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$substring($str: string, $start: number, $length?: number) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$substring("hello world", 0, 5) -> "hello"
$substring("hello world", -5, 5) -> "world"</pre>
</td>
</tr>
</tbody>
</table>

### substringAfter

Returns the substring of a string after the first occurrence of a separator.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$substringAfter($str: string, $separator: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$substringAfter("abc@gmail.com", "@") -> "gmail.com"
</td>
</tr>
</tbody>
</table>

### substringBefore

Returns the substring of a string before the first occurrence of a separator.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$substringBefore($str: string, $separator: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$substringBefore( "john@gmail.com", "@") -> "john"
</td>
</tr>
</tbody>
</table>

### sum

Returns the sum of the values of a numeric array.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$sum($array) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$sum([1,2,3,4]) -> 10
</td>
</tr>
</tbody>
</table>

### trim

Returns a copy of a string with leading and trailing whitespace removed.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$trim($str: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$trim(" Hello \n World ") -> "Hello World"
</td>
</tr>
</tbody>
</table>

### type

Returns the type of a value.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$type($val: any) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$type("hello") -> "string"
$type(1) -> "number"
$type({}) -> "object"
$type([]) -> "array"
$type(null) -> "null"</pre>
</td>
</tr>
</tbody>
</table>

### uppercase

Returns the uppercase version of a string

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$uppercase($str: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$uppercase("hello") -> "HELLO"
</td>
</tr>
</tbody>
</table>

### uuid

Returns a unique ID (UUID version 4) as a string.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$uuid => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$uuid -> "503c5a9f-b8fb-402a-b0d7-fae17490bdf6"
</td>
</tr>
</tbody>
</table>

## Array functions

### append

Returns a new array with a value appended (added) to an array.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$append($arr: array, $val: any) => array
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$append([1,2,3], [5,6]) -> [1,2,3,4,5,6]
$append([1,2,3], 5) -> [1,2,3,5]</pre>
</td>
</tr>
</tbody>
</table>

### count

Returns the number of elements in an array.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$count($array) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$count([1,2,3,4,5]) -> 5
$count([]) -> 0</pre>
</td>
</tr>
</tbody>
</table>

### distinct

Returns a new array with the distinct elements of $arr with duplicates eliminated.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$distinct($arr: array) => array
</td>
</tr>
<tr>
<td>Example</td>
<td>
$distinct(["a", "b", "b", "c"]) -> ["a", "b", "c"]
</td>
</tr>
</tbody>
</table>

### reverse

Returns a new array with the elements of an array in reverse order.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$reverse($arr: array) => array
</td>
</tr>
<tr>
<td>Example</td>
<td>
$reverse([1,2,3,4,5]) -> [5,4,3,2,1]
</td>
</tr>
</tbody>
</table>

### shuffle

Returns a new array with the elements of an array in random order.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$shuffle($arr: array) => array
</td>
</tr>
<tr>
<td>Example</td>
<td>
$shuffle([1,2,3,4]) -> [3,1,4,2]
</td>
</tr>
</tbody>
</table>

### sort

A higher-order function that sorts the elements of an array using the $swapFn function. The comparator function takes two arguments. If it returns true, the elements will be swapped.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$sort($arr: array, $swapFn: ($l, $r)) => boolean
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$sort([13,2,8,6,15], fn($l, $r) { $l > $r }) -> [2,6,8,13,15]
$sort([13,2,8,6,15], fn($l, $r) { $l < $r }) -> [15,13,8,6,2]</pre>
</td>
</tr>
</tbody>
</table>

### zip

Takes two or more arrays and convolves (zips) each value from a set of arrays.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$zip($ar1:Array, $ar2:Array, $ar3;Array, ...) => Array
</td>
</tr>
<tr>
<td>Example</td>
<td>
$zip([1,2,3],[4,5,6]) -> [[1,4],[2,5],[3,6]]
</td>
</tr>
</tbody>
</table>

## Numeric functions

### abs

Returns the absolute value of a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$abs(n:number) : number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$abs(-1) ->  1
</td>
</tr>
</tbody>
</table>

### acos

Returns the arc cosine of a number of radians. The result is between 0 and pi. The number must be between -1 and 1.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$acos($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$acos(1) -> 0
</td>
</tr>
</tbody>
</table>

### acosh

Returns the inverse hyperbolic cosine of a number, in radians. The number must be number between 1 and inf. The result is between 0 and inf.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$acosh($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$acosh(1) -> 0
</td>
</tr>
</tbody>
</table>

### asin

Returns the arc sine of a number of radians. The result is between -pi/2 and pi/2. The number must be between -1 and 1.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$asin($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$asin(1) -> 1.5707963267948966
</td>
</tr>
</tbody>
</table>

### asinh

Returns the inverse hyperbolic sine of a number, in radians. The result is between -inf and inf.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$asinh($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$asinh(1) -> 1.5707963267948966
</td>
</tr>
</tbody>
</table>

### atan

Returns the arc tangent of a number of radians. The result is between -pi/2 and pi/2.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$atan($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$atan(1) -> 0.7853981633974483
</td>
</tr>
</tbody>
</table>

### atanh

Returns the inverse hyperbolic tangent of a number, in radians. The number must be between -1 and 1. The result is between -inf and inf.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$atanh($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$atanh(1) -> inf
</td>
</tr>
</tbody>
</table>

### atan2

Returns atan(y / x), in radians. The result is between -pi and pi. The vector in the plane from the origin to point (x, y) makes this angle with the positive X axis. The signs of both inputs are known to it, so it can compute the correct quadrant for the angle. For example, atan(1) and atan2(1, 1) are both pi/4, but atan2(-1, -1) is -3*pi/4.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$atan2($x: number, $y: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$atan2(-1, -1) -> -2.356194490192345
</td>
</tr>
</tbody>
</table>

### cbrt

Returns the cube root of a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$cbrt($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$cbrt(27) -> 3
</td>
</tr>
</tbody>
</table>

### ceil

Returns the smallest integer greater than or equal to a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$ceil($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$ceil(3.4) -> 4
</td>
</tr>
</tbody>
</table>

### constant

Returns the constant value with the given name. For example: e, ln 2, log2 e, log10 e, pi or π.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$constant($name: string ) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$constant('e') -> 2.718281828459045
</td>
</tr>
</tbody>
</table>

### cos

Returns the cosine of a number of radians.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$cos($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$cos(1) -> 0.5403023058681398
</td>
</tr>
</tbody>
</table>

### cosh

Returns the hyperbolic cosine of a number of radians.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$cosh($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$cosh(1) -> 1.5430806348152437
</td>
</tr>
</tbody>
</table>

### exp

Returns e raised to the power of a number, where e = 2.718281… is the base of natural logarithms.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$exp($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$exp(16) -> 8886110.520507872
</td>
</tr>
</tbody>
</table>

### floor

Returns the largest integer less than or equal to a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$floor($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$floor(3.4) -> 3
</td>
</tr>
</tbody>
</table>

### formatBase

Converts a number to a string in the optional base number system, if a base is not supplied, base 10 is used to create the string.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$formatBase($num: number, $base?: number) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
$formatBase(100, 2) -> "1100100"
</td>
</tr>
</tbody>
</table>

### isFinite

Returns true if the value input is not infinity, and false otherwise.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$isFinite( $num: number ) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$isFinite(1) -> true
$isFinite(inf) -> false</pre>
</td>
</tr>
</tbody>
</table>

### log

Returns the natural logarithm of a number (base e).

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$log($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$log(16) -> 2.772588722239781
</td>
</tr>
</tbody>
</table>

### log10

Returns the base 10 logarithm of a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$log10($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$log10(16) -> 1.2041199826559248
</td>
</tr>
</tbody>
</table>

### log2

Returns the base 2 logarithm of a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$log2($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$log2(16) -> 4
</td>
</tr>
</tbody>
</table>

### number

Converts a value to a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$number($x: string | number | bool) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$number("-0.05") -> -0.05
$number(false) -> 0
$number(true) -> 1</pre>
</td>
</tr>
</tbody>
</table>

### power

Returns $num raised to the $exp power.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$power($num: number, $exp: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$power(2, 3) -> 8
$power(3,4) -> 81</pre>
</td>
</tr>
</tbody>
</table>

### round

Rounds a number to the optional precision number of decimal places. If precision is negative, then its value specifies which column to round to on the left side of the decimal place.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$round($num: number, $precision?: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$round(123.456) -> 123
$round(123.456, 2) -> 123.46
$round(123.456, -1) -> 120
$round(123.456, -2) -> 100
$round(125, -1) -> 120
$round(125.456,-1) -> 130</pre>
</td>
</tr>
</tbody>
</table>

### sin

Returns the sine of a number of radians.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$sin($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$sin(1) -> 0.8414709848078965
</td>
</tr>
</tbody>
</table>

### sinh

Returns the hyperbolic sine of a number of radians.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$sinh($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$sinh(1) -> 1.1752011936438014
</td>
</tr>
</tbody>
</table>

### sqrt

Returns the square root of a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$sqrt($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$sqrt(16) -> 4
</td>
</tr>
</tbody>
</table>

### tan

Returns the tangent of a number of radians.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$tan($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$tan(1) -> 1.5574077246549023
</td>
</tr>
</tbody>
</table>

### tanh

Returns the hyperbolic tangent of a number of radians.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$tanh($num: number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$tanh(1) -> 0.7615941559557649
</td>
</tr>
</tbody>
</table>

## Date and time functions

### afterDate

Returns true if $timestamp1 is after $timestamp2, false otherwise.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$afterDate($timestamp1: string |number, $timestamp2: string |number) => boolean
</td>
</tr>
<tr>
<td>Example</td>
<td>
$afterDate("2023-02-09", "2023-02-08") -> true
$afterDate("2023-02-08", "2023-02-08") -> false
</td>
</tr>
</tbody>
</table>

### beforeDate

Returns true if $timestamp1 is before $timestamp2, false otherwise.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$beforeDate($timestamp1: string |number, $timestamp2: string |number) => boolean
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$beforeDate("2023-02-07", "2023-02-08") -> true
$beforeDate("2023-02-08", "2023-02-08") -> false</pre>
</td>
</tr>
</tbody>
</table>

### dateEquals

Returns true if the two timestamps are the same, false otherwise.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$dateEquals($timestamp1: string |number, $timestamp2: string |number) => boolean
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$dateEquals("2023-02-08", "2023-02-08") -> true
$dateEquals("2023-02-08", "2023-02-07") -> false</pre>
</td>
</tr>
</tbody>
</table>

### datePlus

Adds a duration of type $units which can be one of ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"],  to a $timestamp and returns the new timestamp. If $duration is less than zero, then it will be subtracted from the $timestamp.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$datePlus($timestamp1: string |number, $duration: number, $units, ) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$datePlus("2023-02-07", 2, "days") -> 1675900800000
$datePlus("2023-02-07", 2, "months") -> 1680825600000</pre>
</td>
</tr>
</tbody>
</table>

### day

Extracts the day from a timestamp and returns it as a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$day($timestamp: string |number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$day("2023-02-08") -> 8
</td>
</tr>
</tbody>
</table>

### dayOfTheWeek

Returns the day of the week as a number [1=Monday, ... 6=Saturday, 7= Sunday].

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$dayOfTheWeek($timestamp: string |number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$dayOftheWeek("2023-02-08") -> 3
$dayOftheWeek("2023-02-07") -> 2</pre>
</td>
</tr>
</tbody>
</table>

### diffDate

Returns the difference between two timestamps in the units specified which can be one of ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"].

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$diffDate($timestamp1: string |number, $timestamp2: string |number, $units : string, ) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$diffDate("2023-02-08", "2023-01-22", "days") -> 17
$diffDate("2023-02-08", "2023-01-22","hours") -> 408</pre>
</td>
</tr>
</tbody>
</table>

### fromMillis

Converts a number of milliseconds since the epoch to a string. $picture is optional, if not provided it will default to ISO format. Picture specs are as per Unicode date format standards.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$fromMillis($val:number, $picture?: string) => string
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$fromMillis(1521801216617, "dd/M/yyyy") -> "23/3/2018"
$fromMillis(1522616700000, "E EEEE") -> "7 Sunday"</pre>
</td>
</tr>
</tbody>
</table>

### hasSameDate

Returns true if the components specified in $units of  the two timestamps are the same, false otherwise.  $units is an array with one or more strings from ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"].

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$hasSameDate($timestamp1: string |number, $timestamp2: string |number, units?: Array<string>) => boolean
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$hasSameDate("23-02-08", "2019-02-08", ["month", "day"]) -> true
$hasSameDate("2023-02-01", "2023-02-08", ["month", "year"]) -> true
$hasSameDate("23-02-01", "2023-02-08", ["month", "year"]) -> true
$hasSameDate("2023-02-01T07:15:54.730Z", "2023-02-01T14:00:22.340Z", ["year","month", "day"]) -> true</pre>
</td>
</tr>
</tbody>
</table>

### hours

Extracts the local hour component from a timestamp and returns it as a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$hours($timestamp: string |number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$hours("2023-02-08T07:56:14.747+00:00") -> 7
</td>
</tr>
</tbody>
</table>

### milliSeconds

Extracts the milliseconds from a timestamp and returns it as a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$milliSeconds($timestamp: string |number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$milliSeconds("2023-02-08T07:56:14.747+00:00") -> 747
</td>
</tr>
</tbody>
</table>

### minutes

Extracts the minutes component from a timestamp and returns it as a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$minutes($timestamp: string |number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$minutes("2023-02-08T07:56:14.747+00:00") -> 56
</td>
</tr>
</tbody>
</table>

### month

Extracts the month component from a timestamp.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$month($timestamp: string |number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$month("2023-02-08") -> 2
</td>
</tr>
</tbody>
</table>

### seconds

Extracts the local seconds component from a timestamp and returns it as a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$seconds($timestamp: string |number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$seconds("2023-02-08T07:56:14.747+00:00") -> 14
</td>
</tr>
</tbody>
</table>

### toMillis

Converts a string to a number of milliseconds since the epoch. $picture is optional, if not provided it will default to ISO format. Picture specs are as per Unicode date format standards.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$toMillis($val:string, $picture?: string) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
<pre>$toMillis("1970-01-01T00:00:00.001Z")  -> 1
$toMillis("2018-03-27", "yyyy-MM-dd") -> 1522108800000
$toMillis("21 August 2017", "dd MMMM yyyy") -> 1503273600000</pre>
</td>
</tr>
</tbody>
</table>

### year

Extracts the year component from a timestamp and returns it as a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>Syntax</td>
<td>
$year($timestamp: string |number) => number
</td>
</tr>
<tr>
<td>Example</td>
<td>
$year("2023-02-08T07:56:14.747+00:00") -> 2023
</td>
</tr>
</tbody>
</table>
