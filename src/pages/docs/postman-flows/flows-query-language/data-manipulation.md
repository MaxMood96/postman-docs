---
title: "Data manipulation"
updated: 2022-11-17
---

You can use the [Flows Query Language](/docs/postman-flows/flows-query-language/introduction-to-fql/) (FQL) to perform math functions, manipulate strings and arrays, and interact with the data in your responses in several ways. Sample data and FQL examples are below.

## Contents

* [Example JSON](#example-json)
* [Sum numerical values](#sum-numerical-values)
* [Modify strings and group and sum by description](#modify-strings-and-group-and-sum-by-description)
* [Cast a string into a number](#cast-a-string-into-a-number)
* [Convert a number into a string](#convert-a-number-into-a-string)
* [Return the length of a string](#return-the-length-of-a-string)
* [Return part of a string using substring](#return-part-of-a-string-using-substring)
* [Get the string before the first occurrence of a pattern](#get-the-string-before-the-first-occurrence-of-a-pattern)
* [Get the string after the first occurrence of a pattern](#get-the-string-after-the-first-occurrence-of-a-pattern)
* [Transform a string to all uppercase](#transform-a-string-to-all-uppercase)
* [Transform a string to all lowercase](#transform-a-string-to-all-lowercase)
* [Trim a string](#trim-a-string)
* [Pad a string](#pad-a-string)
* [Split a string into an array of components](#split-a-string-into-an-array-of-components)
* [Join an array of strings into a single string](#join-an-array-of-strings-into-a-single-string)
* [Replace string with another](#replace-string-with-another)
* [Base64 encode a string](#base64-encode-a-string)
* [Base64 decode a string](#base64-decode-a-string)
* [Encode a url component](#encode-a-url-component)
* [Decode a url component](#decode-a-url-component)
* [Encode an entire url](#encode-an-entire-url)
* [Decode entire url](#decode-entire-url)
* [Append to an array](#append-to-an-array)
* [Time and date formatting](#time-and-date-formatting)

## Example JSON

The following examples use the following JSON data returned by an endpoint:

``` json
    {
        "customer_info": {
            "customer field": "Customer data",
            "unformatted_customer_field": " customer \n stuff ",
            "total_value": "281.01",
            "associated_usernames": ["user1, myuser, online_user"]
        },
        "payments": [
            {
                "invoice_number": "101301",
                "date": "2022-09-11T16:12:34.494Z",
                "description": "recurring subscription",
                "amount": 110.48
            },
            {
                "invoice_number": "101302",
                "date": "2022-09-29T14:45:13.148Z",
                "description": "one time purchase",
                "amount": 24.49
            },
            {
                "invoice_number": "101303",
                "date": "2022-10-11T16:12:34.683Z",
                "description": "recurring subscription",
                "amount": 110.48
            },
            {
                "invoice_number": "101304",
                "date": "2022-10-12T11:45:22.182Z",
                "description": "recurring subscription deluxe",
                "amount": 35.56
            }
        ]
    }

```

## Sum numerical values

### FQL

``` javascript
$sum(payments.amount)
```

### Result

``` json
"$281.01"
```

## Modify strings and group and sum by description

### FQL

``` javascript
payments.{description & ' annual cost' : amount*12}
```

### Result

``` json
[
    {"recurring subscription annual cost": 1325.76},
    {"one time purchase annual cost": 293.88},
    {"recurring subscription annual cost": 1325.76},
    {"recurring subscription deluxe annual cost": 426.72}
]
```

## Cast a string into a number

### FQL

``` javascript
$number(customer_info.total_value)
```

### Result

``` json
281.01
```

## Convert a number into a string

### FQL

``` javascript
$string(payments[0].amount)
```

### Result

``` json
"110.48"
```

## Return the length of a string

### FQL

``` javascript
$length(payments[0].description)
```

### Result

``` json
22
```

## Return part of a string using substring

The first number is optional and specifies the offset, and the second is the number of characters you are selecting. Negative numbers can also be used for the offest.

### FQL

``` javascript
$substring(payments[0].description, 3, 6)
```

### Result

``` json
"urring"
```

## Get the string before the first occurrence of a pattern

Returns the substring before the specified occurrence of `subscription` . If `subscription` is not found it returns the entire string.

### FQL

``` javascript
$substringBefore(payments[0].description, 'subscription')
```

### Result

``` json
"recurring "
```

## Get the string after the first occurrence of a pattern

### FQL

``` javascript
$substringAfter(payments[0].description, 'recurring')
```

### Result

``` json
" subscription"
```

## Transform a string to all uppercase

### FQL

``` javascript
$uppercase(payments[0].description)
```

### Result

``` json
"RECURRING SUBSCRIPTION"
```

## Transform a string to all lowercase

### FQL

``` javascript
$lowercase(customer_info.'customer field')
```

### Result

``` json
"customer data"
```

## Trim a string

Removes excess leading and trailing spaces, converts newline, carriage return, line feeds, and tabs into a single space character, and reduces consecutive spaces into a single space character.

### FQL

``` javascript
$trim(customer_info.unformatted_customer_field)
```

### Result

``` json
"customer stuff"
```

## Pad a string

If the second parameter is a positive number it pads the string with the third parameter. If the second parameter is negative it pads the front of the string with the character(s) optionally specified. (Third parameter characters will default to space if left blank.)

### FQL

``` javascript
$pad(customer_info.'customer field', 15, '#')
```

### Result

``` json
"Customer data##"
```

## Split a string into an array of components

Returns the string split on the separator specified in the second parameter and optionally limited by the third parameter. A regex can also be used instead of a string.

### FQL

``` javascript
$split(payments[1].description, " ", 2)
```

### Result

``` json
["one","time"]
```

## Join an array of strings into a single string

### FQL

``` javascript
$join(customer_info.associated_usernames)
```

### Result

``` json
"user1, myuser, online_user"
```

## Replace string with another

Finds the instances of `recurring` in the first parameter string and replaces it with renewing, limited to the first instance found (optionally specified with the `1`). Using a regex instead of `renewing` is also supported.

### FQL

``` javascript
$replace(payments[0].description,"recurring", "renewing", 1)
```

### Result

``` json
"renewing subscription"
```

## Base64 encode a string

### FQL

``` javascript
$base64encode('some data here')
```

### Result

``` json
"c29tZSBkYXRhIGhlcmU="
```

## Base64 decode a string

### FQL

``` javascript
$base64decode("c29tZSBkYXRhIGhlcmU=")
```

### Result

``` json
"some data here"
```

## Encode a url component

### FQL

``` javascript
$encodeUrlComponent("?city=melbourne")
```

### Result

``` json
"%3Fcity%3Dmelbourne
```

## Decode a url component

### FQL

``` javascript
$decodeUrlComponent("%3Fcity%3Dmelbourne")
```

### Result

``` json
"?city=melbourne"
```

## Encode an entire url

### FQL

``` javascript
$encodeUrl('https://faketranslatewebsite.com/?phrase=こんにちは')
```

### Result

``` json
"https://faketranslatewebsite.com/?phrase=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF"
```

## Decode entire url

### FQL

``` javascript
$decodeUrl("https://faketranslatewebsite.com/?phrase=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF")
```

### Result

``` json
"https://faketranslatewebsite.com/?phrase=こんにちは"
```

## Append to an array

Can combine two arrays, an array and a single value, or two strings into an array.

### FQL

``` javascript
$append([1,2,3], [4,5,6])
```

### Result

``` json
[1,2,3,4,5,6]
```
<!-- ## Time and date parsing -->
<!-- TODO: Technically this 'Time and date parsing' H2 should be an H1. Deleting for now. Maybe break this doc into two docs in the future.-->

## Get the current time in ISO 8601 format

### FQL

``` javascript
$now()
```

### Result

``` json
"2022-11-04T22:36:57.094Z"
```

## Get the current time in Unix milliseconds since the epoch

### FQL

``` javascript
$millis()
```

### Result

``` json
1667601477254
```

## Convert from a specific date format into Unix epoch time

See the formatting section below for details on date formatting.

### FQL

``` javascript
$toMillis('10/12/2018 11:39 PM', '[M]/[D]/[Y] [h]:[m] [P]')
```

### Result

``` json
1539387540000
```

## Convert from Unix epoch time into a specific date format

See the formatting section below for details on date formatting.

### FQL

``` javascript
$fromMillis(1539387540000, '[Y]-[M]-[D] [H]:[m]:[s] [z]')
```

### Result

``` json
"2018-10-12 23:39:00 GMT+00:00"
```

## Time and date formatting

| Character  | Meaning |
| ------------- | ------------- |
| Y	| year |
| M	| month as a numerical value |
| D	| day in month |
| d	| day in year |
| F	| day of week |
| W	| week in year |
| w	| week in month	|
| H	| hour (24 hours) |
| h	| hour (12 hours) |
| P	| am/pm marker |
| m	| minute |
| s	| second |
| f	| fractional seconds |
| Z	| timezone |
| z	| timezone but modified where to include a prefix as a time offset using GMT |
| C	| calendar: the name or abbreviation of a calendar name |
| E	| era: the name of a baseline for the numbering of years, for example the reign of a monarch |
