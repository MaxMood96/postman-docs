---
title: "Find and filter data in Postman Flows"
updated: 2023-08-10
---

Frequently, the need arises to check if information in a Flow has a certain value. Depending on how structured the information being returned from an API is, there are several different ways to solve for this using [FQL](../../flows-query-language/introduction-to-fql/).

## Contents

* [Contains](#contains)
* [Filter](#filter)
* [Count](#count)
* [Distinct](#distinct)

### Contains

[contains](../../flows-query-language/function-reference/#contains) is the most straightforward way to check if some quoted information contains a word or pattern (regex). Since `contains` returns either true or false, it's often used with an **If** block. The example below illustrates how information is only passed through the **If** block when the input contains the expected value.

<img src="https://assets.postman.com/postman-labs-docs/concepts/contains-example.png" alt="Contains example" fetchpriority="low" loading="lazy" />

### Filter

[filter](../../flows-query-language/function-reference/#filter) is for when there is a list of elements but only some are needed for the next block of the Flow. To use `filter`, the function looks like `$filter(list name,fn($v,$i,$a) { filter condition })` where `$v` is the values in the list, `$i` is the index (zeroth item, first item, second item, and so on), and `$a` is the entire list. Generally `$v` is the important value for filtering and the only one actually required to be used. In the example below, there is a list of companies, but only enabled companies are needed for the rest of the Flow.

<img src="https://assets.postman.com/postman-labs-docs/concepts/filter-example.png" alt="Filter example" fetchpriority="low" loading="lazy" />

### Count

[count](../../flows-query-language/function-reference/#count) returns the number of items in a list. This is commonly used because APIs will often return a list of items, especially when using APIs that are searching for something (like an email or something not unique). When this happens, there will need to be a check in the Flow to see if only a single record is returned by the API or if there is a list and further filtering is required. Another case where this function is useful is in generating a random result from a list. In the below example, the recipe API returns a list of recipes and the Flow selects a random one from the list.

<img src="https://assets.postman.com/postman-labs-docs/concepts/count-example.png" alt="Count example" fetchpriority="low" loading="lazy" />

### Distinct

[distinct](../../flows-query-language/function-reference/#distinct) returns only the unique items in a list. Sometimes, there are duplicate entries in a list of results (maybe someone signed up with two different emails) and the Flow needs to filter them out.

<img src="https://assets.postman.com/postman-labs-docs/concepts/distinct-example.png" alt="Distinct example" fetchpriority="low" loading="lazy" />
