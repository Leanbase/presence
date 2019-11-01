---
layout: docs
title: Python Server Side SDK
permalink: /docs/server-side-sdk/python/
---

This document will demonstrate how to install, configure and then use leanbase's python server SDK. You'll need to have [obtained your API Key](/docs/server-side-sdk/api-keys/) for this to work. 

## Installation

The leanbase python client is available on python's official PyPI repository. Install into your virtualenv by using 

```
pip install leanbase
```

You'll also have to ensure that this package is somehow installed on your servers as well. This is usually done via the `requirements.txt` file, or by adding it to your setup instructions, Dockerfile, etc.

## Configuration

At the initialisation or your application, the following code _MUST_ be executed exactly once. Calling configure more than once in the lifetime of the application will throw an error.

```python
import leanbase

leanbase.configure(api_key='<your api_key>')
```

You can usually achieve this by using a module level variable.

## Waiting for initialisation

At initialisation, the leanbase client sets up a connection to our APIs and then fetches the first list of feature configurations. It is usually a good idea to wait for this process to have completed before you start serving your users out of that server. You can achieve this by using the `await_initialisation()` call.

```python
import leanbase

lb.await_initialisation(timeout=0.25)
```

While the leanbase client configuration is asynchronous (new threads are created) We recommend you use this call after the configure() function to ensure the first few requests on this server do not face increased latency.

## Users

You can obtain leanbase's view of a user by using:

```python
import leanbase
... configure

leanbase.user(user_attributes)
```

`user_attributes` can be a dictionary or an object. The attributes passed in will be used for evaluations.

## Evaluate

Say you have a feature called *new_dankness_index*. The feature key is `NByQPga`. Somewhere, you will have defined the constants

```python
/* features.py */
NEW_DANKNESS_INDEX = 'NByQPga'
```

Now within your main application code, simply: 

```python
import leanbase

from . import features

if leanbase.user(user).can_access(features.NEW_DANKNESS_INDEX):
  # Use the new dankness index
else:
  # Use the old dankness index
```

Note that the evaluation only happens when you call `can_access`. So, you can also save the user to a variable and use it in a bunch of places if you want to. eg. 

```python
u = leanbase.user(user)

if u.has_access(feature_1_key):
  pass

if u.has_access(feature_2_key):
  pass
```

Leanbase will take over from here. It will gradually rollout the feature to users as configured in the console. If the feature is switched off, the information will be conveyed to the leanbase client within seconds.