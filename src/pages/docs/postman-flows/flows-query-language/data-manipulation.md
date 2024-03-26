---
title: "Manipulate data in FQL"
updated: 2024-01-12
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

You can use the [Flows Query Language](/docs/postman-flows/flows-query-language/introduction-to-fql/) (FQL) to perform math functions, manipulate strings and arrays, and interact with the data in your responses in several ways. Sample data and FQL examples are below.

## Contents

* [Example JSON](#example-json)

### Working with strings

* [Insert strings then group and sum results by description](#insert-strings-then-group-and-sum-results-by-description)
* [Return the length of a string](#return-the-length-of-a-string)
* [Return part of a string](#return-part-of-a-string)
* [Convert a string into a number](#convert-a-string-into-a-number)
* [Get the string before the first occurrence of a pattern](#get-the-string-before-the-first-occurrence-of-a-pattern)
* [Get the string after the first occurrence of a pattern](#get-the-string-after-the-first-occurrence-of-a-pattern)
* [Transform a string to all uppercase](#transform-a-string-to-all-uppercase)
* [Transform a string to all lowercase](#transform-a-string-to-all-lowercase)
* [Trim a string](#trim-a-string)
* [Pad a string](#pad-a-string)
* [Split a string into an array of components](#split-a-string-into-an-array-of-components)
* [Join an array of strings into a single string](#join-an-array-of-strings-into-a-single-string)
* [Replace one string with another string](#replace-one-string-with-another-string)
* [Base64 encode a string](#base64-encode-a-string)
* [Base64 decode a string](#base64-decode-a-string)
* [Convert a string into JSON](#convert-a-string-into-json)

### Working with numbers

* [Sum numerical values](#sum-numerical-values)
* [Get the absolute difference between two numbers](#get-the-absolute-difference-between-two-numbers)
* [Round up a number](#round-up-a-number)
* [Round down a number](#round-down-a-number)
* [Raise a number to a power](#raise-a-number-to-a-power)
* [Get the square root of a number](#get-the-square-root-of-a-number)
* [Convert a number to hex or binary](#convert-a-number-to-hex-or-binary)
* [Generate a new random invoice number](#generate-a-new-random-invoice-number)
* [Convert a number into a string](#convert-a-number-into-a-string)

### Working with URLs

* [Encode a URL component](#encode-a-url-component)
* [Decode a URL component](#decode-a-url-component)
* [Encode an entire URL](#encode-an-entire-url)
* [Decode an entire URL](#decode-an-entire-url)

### Working with date and time

* [Get the current time in ISO 8601 format](#get-the-current-time-in-iso-8601-format)
* [Get the current time in Unix milliseconds since the epoch](#get-the-current-time-in-unix-milliseconds-since-the-epoch)
* [Convert from a specific date format into Unix epoch time](#convert-from-a-specific-date-format-into-unix-epoch-time)
* [Convert from Unix epoch time into a specific date format](#convert-from-unix-epoch-time-into-a-specific-date-format)
* [Get the day/month/year from a date](#get-the-daymonthyear-from-a-date)
* [Get the time from a date](#get-the-time-from-a-date)
* [Get the day of the week from a date](#get-the-day-of-the-week-from-a-date)
* [Compare two dates](#compare-two-dates)
* [Increase a date by one day](#increase-a-date-by-one-day)
* [Get the difference betwen two dates](#get-the-difference-betwen-two-dates)
* [Time and Date formatting](#time-and-date-formatting)

### Working with logic and arrays

* [Append to an array](#append-to-an-array)
* [If-then-else](#if-then-else)
* [Partition an array](#partition-an-array)
* [Perform an action on each value in an array](#perform-an-action-on-each-value-in-an-array)
* [Filter for values](#filter-for-values)
* [Collapse an array to a single value](#collapse-an-array-to-a-single-value)
* [Sort an array](#sort-an-array)

### Working with objects

* [Perform an action on each value in an object](#perform-an-action-on-each-value-in-an-object)

## Example JSON

The examples below use this JSON data:

``` json
    {
        "customer_info": {
            "customer field": "Customer data",
            "unformatted_customer_field": " customer \n stuff ",
            "total_value": "281.01",
            "associated_usernames": ["user1", "myuser", "online_user"]
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

## Insert strings then group and sum results by description

The example below gets every `description` value in the `payments` array and appends the string `annual cost`. It then gets the `amount` value below each `description` field, multiplies it by 12, and appends it to its corresponding result. The results are grouped by `description` field.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>payments.{description & " annual cost" : amount*12}</td>
</tr>
<tr>
<td>Result</td>
<td>
<pre>
[
    {"recurring subscription annual cost": 1325.76},
    {"one time purchase annual cost": 293.88},
    {"recurring subscription annual cost": 1325.76},
    {"recurring subscription deluxe annual cost": 426.72}
]
</pre>
</td>
</tr>
</tbody>
</table>

## Return the length of a string

The `$length()` function returns the length of the specified string. The example below returns the length of the string in the first `description` key-value pair in the `payments` array.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$length(payments[0].description)
</td>
</tr>
<tr>
<td>Result</td>
<td>
22
</td>
</tr>
</tbody>
</table>

## Return part of a string

The `$substring()` function returns part of a specified string. In the example below, The `3` is optional and specifies the offset, and the `6` is the number of characters you are selecting. Negative numbers can also be used for the offset.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$substring(payments[0].description, 3, 6)
</td>
</tr>
<tr>
<td>Result</td>
<td>
"urring"
</td>
</tr>
</tbody>
</table>

## Get the string before the first occurrence of a pattern

In the example below, the `$substringBefore()` function returns the substring before the specified occurrence of `subscription` . If it doesn't find `subscription`, it returns the entire string.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$substringBefore(payments[0].description, "subscription")
</td>
</tr>
<tr>
<td>Result</td>
<td>
"recurring "
</td>
</tr>
</tbody>
</table>

## Get the string after the first occurrence of a pattern

The `$substringAfter()` function finds a pattern and returns the substring immediately following the pattern. The example below returns the substring that follows `recurring` in the `description` key-value pair in the first object of the `payments` array.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$substringAfter(payments[0].description, "recurring")
</td>
</tr>
<tr>
<td>Result</td>
<td>
" subscription"
</td>
</tr>
</tbody>
</table>

## Transform a string to all uppercase

The `$uppercase()` function makes all the characters in a string uppercase.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$uppercase(payments[0].description)
</td>
</tr>
<tr>
<td>Result</td>
<td>
"RECURRING SUBSCRIPTION"
</td>
</tr>
</tbody>
</table>

## Transform a string to all lowercase

The `$lowercase()` function makes all the characters in a string lowercase.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$lowercase(customer_info."customer field")
</td>
</tr>
<tr>
<td>Result</td>
<td>
"customer data"
</td>
</tr>
</tbody>
</table>

## Trim a string

The `$trim()` function removes excess leading and trailing spaces, converts newline, carriage return, line feed, and tab characters into a single space character, and reduces consecutive spaces into a single space character.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$trim(customer_info.unformatted_customer_field)
</td>
</tr>
<tr>
<td>Result</td>
<td>
"customer stuff"
</td>
</tr>
</tbody>
</table>

## Pad a string

The `$pad()` function adds spaces or characters to a string so that the total length of the string equals the second parameter. If the second parameter is a positive number, it pads the end of the string with the third parameter. If the second parameter is negative, it pads the front of the string with the third parameter. (Third parameter characters default to spaces if left blank.)

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$pad(customer_info."customer field", 15, "#")
</td>
</tr>
<tr>
<td>Result</td>
<td>
"Customer data##"
</td>
</tr>
</tbody>
</table>

## Split a string into an array of components

The `$split()` function returns the string split on the separator specified in the second parameter and optionally limited by the third parameter. You can also use a regex instead of a string.<!-- TODO: Figure out what regex engine this uses and add some examples of it. -->

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$split(payments[1].description, " ", 2)
</td>
</tr>
<tr>
<td>Result</td>
<td>
["one","time"]
</td>
</tr>
</tbody>
</table>

## Join an array of strings into a single string

The `$join()` function creates a single string from an array of strings. The example below gets the array from the `associated_usernames` key and returns the array's values as a single string.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$join(customer_info.associated_usernames)
</td>
</tr>
<tr>
<td>Result</td>
<td>
"user1myuseronline_user"
</td>
</tr>
</tbody>
</table>

## Replace one string with another string

In the example below, the `$replace()` function finds the instances of `recurring` in the first parameter string and replaces them with `renewing`, limited to the first instance found (optionally specified with the `1`). You could also use a regex instead of `recurring`.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$replace(payments[0].description,"recurring", "renewing", 1)
</td>
</tr>
<tr>
<td>Result</td>
<td>
"renewing subscription"
</td>
</tr>
</tbody>
</table>

## Base64 encode a string

The `$base64encode()` function converts a string to base64 encoding. The example below converts the string `"some data here"` into `"c29tZSBkYXRhIGhlcmU="`.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$base64encode("some data here")
</td>
</tr>
<tr>
<td>Result</td>
<td>
"c29tZSBkYXRhIGhlcmU="
</td>
</tr>
</tbody>
</table>

## Base64 decode a string

The `$base64decode` function converts a base64-encoded string into a human-readable string. The example below converts `"c29tZSBkYXRhIGhlcmU="` into `"some data here"`.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$base64decode("c29tZSBkYXRhIGhlcmU=")
</td>
</tr>
<tr>
<td>Result</td>
<td>
"some data here"
</td>
</tr>
</tbody>
</table>

## Convert a string into JSON

The `$jsonParse()` function enables the string to be formatted into JSON so it can be queried with FQL. The example below assumes you have the string `{"Feedback Type":"Bug Report"}` stored as a variable named `input`.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$jsonParse(input)
</td>
</tr>
<tr>
<td>Result</td>
<td>
{"Feedback Type":"Bug Report"}
</td>
</tr>
</tbody>
</table>

## Convert a string into a number

You can convert a string into a number with the `$number()` function. The example below converts the string `"281.01"` in the `customer_info` object into the number `281.01`.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$number(customer_info.total_value)
</td>
</tr>
<tr>
<td>Result</td>
<td>
281.01
</td>
</tr>
</tbody>
</table>

## Sum numerical values

The `$sum()` function gets values from every instance of a key-value pair in an object or array, adds the values together, and returns the result. The example below gets every `amount` field's value in the `payments` array and returns their sum.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$sum(payments.amount)
</td>
</tr>
<tr>
<td>Result</td>
<td>
"$281.01"
</td>
</tr>
</tbody>
</table>

## Get the absolute difference between two numbers

The `$abs()` function returns the absolute difference between two numbers. Absolute difference is the distance between two values on a number line. Absolute difference is always positive.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$abs(4.56 - 6.78)
</td>
</tr>
<tr>
<td>Result</td>
<td>
2.22
</td>
</tr>
</tbody>
</table>

## Round up a number

The `$ceil()` function rounds a number up to the next whole number.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>$ceil(3.45)</td>
</tr>
<tr>
<td>Result</td>
<td>
4
</td>
</tr>
</tbody>
</table>

## Round down a number

The `floor()` function rounds a number down to the previous whole number.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$floor(3.99)
</td>
</tr>
<tr>
<td>Result</td>
<td>
3
</td>
</tr>
</tbody>
</table>

## Raise a number to a power

The `$power()` function raises the first number to the power of the second number. The example below raises 2 (the base) to the power of 3 (the exponent).

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$power(2,3)
</td>
</tr>
<tr>
<td>Result</td>
<td>
8
</td>
</tr>
</tbody>
</table>

## Get the square root of a number

The `$sqrt()` function returns the square root of a number.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>$sqrt(9)</td>
</tr>
<tr>
<td>Result</td>
<td>3</td>
</tr>
</tbody>
</table>

## Convert a number to hex or binary

The `formatBase()` function converts a number to hex or binary. The example below converts `3000` to hex. Using base 2 instead of 16 would convert `3000` to binary.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$formatBase(3000, 16)
</td>
</tr>
<tr>
<td>Result</td>
<td>
"bb8"
</td>
</tr>
</tbody>
</table>

## Generate a new random invoice number

The `$round($random())` function generates a random whole number. The example below generates a random whole number between 1 and 1000 and returns the number appended to the string "Invoice number ".

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
"Invoice number " & $round($random()*1000)
</td>
</tr>
<tr>
<td>Result</td>
<td>
"Invoice number 891"
</td>
</tr>
</tbody>
</table>

## Convert a number into a string

You can convert a number into a string with the `$string()` function. The example below gets the number value from the `amount` key in the first object in the `payments` array and converts it into the string `"110.48"`.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$string(payments[0].amount)
</td>
</tr>
<tr>
<td>Result</td>
<td>
"110.48"
</td>
</tr>
</tbody>
</table>

## Encode a URL component

The `$encodeUrlComponent()` function replaces certain characters in a URL component with their UTF-8 encoded versions. The example below replaces `?` with `%3F`, and `=` with `%3D`.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$encodeUrlComponent("?city=melbourne")
</td>
</tr>
<tr>
<td>Result</td>
<td>
"%3Fcity%3Dmelbourne"
</td>
</tr>
</tbody>
</table>

## Decode a URL component

The `$decodeUrlComponent()` function replaces UTF-8 encoded characters in a URL component with their original versions. The example below replaces `%3F` with `?`, and `$3D` with `=`.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$decodeUrlComponent("%3Fcity%3Dmelbourne")
</td>
</tr>
<tr>
<td>Result</td>
<td>
"?city=melbourne"
</td>
</tr>
</tbody>
</table>

## Encode an entire URL

The `$encodeUrl()` function replaces certain characters in a URL with UTF-8 encoded characters. The example below replaces `こんにちは` with `%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF`

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$encodeUrl("https://faketranslatewebsite.com/?phrase=こんにちは")
</td>
</tr>
<tr>
<td>Result</td>
<td>
"https://faketranslatewebsite.com/?phrase=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF"
</td>
</tr>
</tbody>
</table>

## Decode an entire URL

The `$decodeUrl()` function replaces UTF-8 encoded characters in a URL with their original versions. The example below replaces `%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF` with `こんにちは`.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$decodeUrl("https://faketranslatewebsite.com/?phrase=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF")
</td>
</tr>
<tr>
<td>Result</td>
<td>
"https://faketranslatewebsite.com/?phrase=こんにちは"
</td>
</tr>
</tbody>
</table>

## Get the current time in ISO 8601 format

The `$now()` function returns the current time in ISO 8601 format.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$now()
</td>
</tr>
<tr>
<td>Result</td>
<td>
"2022-11-04T22:36:57.094Z"
</td>
</tr>
</tbody>
</table>

## Get the current time in Unix milliseconds since the epoch

The `millis()` function returns the current time in Unix milliseconds since the epoch.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$millis()
</td>
</tr>
<tr>
<td>Result</td>
<td>
1667601477254
</td>
</tr>
</tbody>
</table>

## Convert from a specific date format into Unix epoch time

The `$toMillis()` function converts a given date format into Unix epoch time. See the formatting section below for details on date formatting.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$toMillis("10/12/2018 11:39 PM", "[M]/[D]/[Y] [h]:[m] [P]")
</td>
</tr>
<tr>
<td>Result</td>
<td>
1539387540000
</td>
</tr>
</tbody>
</table>

## Convert from Unix epoch time into a specific date format

The `$fromMillis()` function converts Unix epoch time into a different date format. See the formatting section below for details on date formatting.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$fromMillis(1539387540000, "[Y]-[M]-[D] [H]:[m]:[s] [z]")
</td>
</tr>
<tr>
<td>Result</td>
<td>
"2018-10-12 23:39:00 GMT+00:00"
</td>
</tr>
</tbody>
</table>

## Get the day/month/year from a date

The `$year()`, `$month()`, and `$day()` functions return their respective components from a year-month-day date format.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$year("2023-02-11") & "-" & $month("2023-02-11") & "-" & $day("2023-02-11")
</td>
</tr>
<tr>
<td>Result</td>
<td>
"2023-2-11"
</td>
</tr>
</tbody>
</table>

## Get the time from a date

The `$hours()`, `$minutes()`, `$seconds()`, and `$milliseconds()` functions return their respective values from a given date. The example below uses the `$now()` function for the date.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$hours($now()) & ":" & $minutes($now()) & ":" & $seconds($now()) & ":" & $milliSeconds($now())
</td>
</tr>
<tr>
<td>Result</td>
<td>
"19:23:8:143"
</td>
</tr>
</tbody>
</table>

## Get the day of the week from a date

The `$dayOfTheWeek()` function accepts a date and returns a number corresponding to a day of the week. `0` is Sunday, `1` is Monday, and so on.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$dayOfTheWeek($now())
</td>
</tr>
<tr>
<td>Result</td>
<td>
2
</td>
</tr>
</tbody>
</table>

## Compare two dates

The `$hasSameDate()` function accepts two or more dates with parameters specifying values in the dates. The function compares the values specified by the parameters and returns `true` if they are identical, or `false` if they are not.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$hasSameDate("2023-02-01", "2023-02-08", ["month", "year"])
</td>
</tr>
<tr>
<td>Result</td>
<td>
true
</td>
</tr>
</tbody>
</table>

## Increase a date by one day

The `$datePlus()` function accepts a date (formatted as `YYYY-MM-DD` or milliseconds since epoch), the number of units you want to add, and the date component you want to advance (`years`, `months`, `days`, `hours`, `minutes`, `seconds`, or `milliseconds`). The function returns the increased date as milliseconds since epoch.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$datePlus("2023-02-07", 1, "days")
</td>
</tr>
<tr>
<td>Result</td>
<td>
1675814400000
</td>
</tr>
</tbody>
</table>

## Get the difference betwen two dates

The `$diffDate()` function accepts two dates (formatted as `YYYY-MM-DD` or milliseconds since epoch) and a component of each date (`years`, `months`, `days`, `hours`, `minutes`, `seconds`, or `milliseconds`), then returns the difference between the two dates' component.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$diffDate("2023-02-08", "2023-01-22", "days")
</td>
</tr>
<tr>
<td>Result</td>
<td>
17
</td>
</tr>
</tbody>
</table>

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

## Append to an array

The `$append()` function can combine two arrays, an array and a single value, or two strings into an array.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$append([1,2,3], [4,5,6])
</td>
</tr>
<tr>
<td>Result</td>
<td>
[1,2,3,4,5,6]
</td>
</tr>
</tbody>
</table>

## If-then-else

The `$boolean` value is a true/false test. The second value is the output for true and the final value is the output for false. The example below tests if the `total_value` field's value is greater than 250. Since the value is greater than 250, the function returns "high-value customer".

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$boolean(customer_info.total_value > 250) ? "high-value customer" : "not a high-value customer"
</td>
</tr>
<tr>
<td>Result</td>
<td>
"high-value customer"
</td>
</tr>
</tbody>
</table>

## Partition an array

The `$partition()` function breaks an array up into smaller arrays and returns the smaller arrays as a list.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$partition(payments,2)
</td>
</tr>
<tr>
<td>Result</td>
<td>
<pre>
[
 [{"invoice_number": "101301","date": "2022-09-11T16:12:34.494Z","description": "recurring subscription","amount": 110.48},{"invoice_number": "101302","date": "2022-09-29T14:45:13.148Z","description": "one time purchase","amount": 24.49}],
 [{"invoice_number": "101303","date": "2022-10-11T16:12:34.683Z","description": "recurring subscription","amount": 110.48},{"invoice_number": "101304","date": "2022-10-12T11:45:22.182Z","description": "recurring subscription deluxe","amount": 35.56}]
]
</pre>
</td>
</tr>
</tbody>
</table>

## Perform an action on each value in an array

In this example, the `$map()` function gets the numerical values from the `amount` fields in the `payments` array and converts them to strings with the `$string()` function.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$map(input.payments[].amount,$string)
</td>
</tr>
<tr>
<td>Result</td>
<td>
["110.48", "24.49", "110.48", "35.56"]
</td>
</tr>
</tbody>
</table>

## Filter for values

In this example, the `$filter()` function returns values greater than 40 from `amount` fields in the `payments` array.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$filter(input.payments[].amount,fn($v,$i,$a) { $v > 40})
</td>
</tr>
<tr>
<td>Result</td>
<td>
[110.48, 110.48]
</td>
</tr>
</tbody>
</table>

## Collapse an array to a single value

The `reduce()` function applies a function to every element in the array. In this example, it adds all the elements of the array together.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$reduce(input.payments[].amount,fn($i, $j){$i + $j})
</td>
</tr>
<tr>
<td>Result</td>
<td>
281.01
</td>
</tr>
</tbody>
</table>

## Sort an array

The `$sort()` function sorts an array by the function specified where `$j` is the current item and `$i` is the next item.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$sort(input.payments[].amount,fn($i, $j){$i &lt; $j})
</td>
</tr>
<tr>
<td>Result</td>
<td>
[110.48, 110.48, 35.56, 24.49]
</td>
</tr>
</tbody>
</table>

## Perform an action on each value in an object

In this example, the `$each()` function converts every string value in an object to uppercase.

<table class="code-ref-table">
<tbody>
<tr>
<td>FQL</td>
<td>
$each({"transaction_id": "inv_80394", "description": "buying 20 units of data"},$uppercase)
</td>
</tr>
<tr>
<td>Result</td>
<td>
["INV_80394", "BUYING 20 UNITS OF DATA"]
</td>
</tr>
</tbody>
</table>
