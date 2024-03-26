---
title: "Read and write gRPC data using the Postman JSON interface"
updated: 2023-04-18
contextual_links:
  - type: section
    name: "Additional resources"
  - type: link
    name: "Protocol Buffers Language Guide"
    url: "https://developers.google.com/protocol-buffers/docs/proto3"
  - type: link
    name: "Introduction to gRPC"
    url: "https://grpc.io/docs/what-is-grpc/introduction/"
---

When sending or receiving a gRPC request or response, the messages being sent back and forth are transmitted in a format called [protobuf (protocol buffer)](https://developers.google.com/protocol-buffers). Unlike other data formats such as JSON or XML, which are text-based, protobuf uses a binary format. Binary formats aren't meant to be read by humans, so Postman provides a **JSON interface** that enables you to read and write data when using gRPC.

## JSON interface

| Protobuf type | JSON type | JSON example | Notes |
| ------------- | --------- | ------------ | ----- |
| message | object | `{ "field": 123 }` | `null` is an accepted value for all field types and treated as the default value of the corresponding field type. |
| enum | string _or_ number | `"FOO_BAR"` | Both enum names and integer values are accepted. |
| repeated V | array | `[v, ...]` | |
| map<K, V> | object | `{ "k": v }` | All keys are converted to strings. | |
| bool | boolean | `true`, `false` | |
| string | string | `"Hello World!"` | |
| bytes | base64 string _or_ array of bytes (numbers [0, 255]) | `"SGVsbG8gZ1JQQw=="` | |
| int32, sint32, uint32, fixed32, sfixed32 | number | `1`, `-10`, `0` | |
| int64, sint64, uint64, fixed64, sfixed64 | number _or_ string | `"-1152921504606847254"` | Decimal strings are used to increase compatibility with languages that lack a 64-bit integer. |
| float, double | number _or_ `"NaN"` _or_ `"Infinity"` _or_ `"-Infinity"` | `1.1`, `-10.0`, `0`, `"NaN"` | |

## Inspecting fields and types

When composing a message for a gRPC request, you input the data as JSON. Internally, that JSON represents Protocol Buffers data. For example, you can enter a base64 JSON string to represent `bytes` in Protocol Buffers.

Postman uses the [service definition you select](/docs/sending-requests/grpc/using-service-definition/) to provide rich type information as you compose your message. When you hover your mouse over various JSON fields or values, a tooltip will explain the underlying Protocol Buffers type for that JSON field or value. This can help you remember how to enter certain types of data, or to understand what's going on internally.

<img src="https://assets.postman.com/postman-docs/v10/inspecting-types-v10-22.jpg" alt="gRPC Type Inspection">
