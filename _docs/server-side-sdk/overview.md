---
layout: docs
title: Leanbase Server Side SDKs
permalink: /docs/
---

Leanbase's Server Side SDKs let you connect your servers to leanbase and control whether users have access to a particular feature or not. 

## Reliability

Even if the connection to leanbase apis is interrupted, your application will keep serving your users.

## Performance

The connection to leanbase's server is only used to fetch the latest configuration. Once fetched (at startup or as updates are received), these configuration values are stored in-memory. Since there is no network IO while servicing server side evaluations, performance is only limited by compute power.

## SDK Choices

Leanbase at this point only supports Python. We are working on various other SDKs right now. If you want to see yours come out sooner, please drop us a line at [hi@leanbase.io](mailto:hi@leanbase.io).

- [Python SDK Reference Guide](/docs/server-side-sdk/python)

