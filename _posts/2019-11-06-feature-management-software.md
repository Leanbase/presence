---
layout: blog-page
title: "What is Feature Management? How does it help me?"
hero: /assets/blog-images/max-rovensky-qEEQ5wkggCE-unsplash.jpg
hero_aspect: 60%
author: Dipanjan Mukherjee
author_bio: Staff Writer, Founder at Leanbase
author_thumb: /assets/blog-images/authors/dipanjan.jpg
excerpt_separator: <!--more-->
categories: [startup-advice,feature-management]
---

Your product is a bag of features. Most work with each other and solve a pain point for your customers. However, as most literature on this will tell you, building feature after feature will not _make_ you reach goal after goal. 

So, how can you use manage features. In the development pipeline. How can you leverage them to fine-tune your growth engine?

<!--more-->

# Feature Management

It all starts with feature management. No surprises there. If you are using feature flags to turn some aspects on or off, you are doing feature management already. 

But if it were upto me, here are some of the important things that feature management could be doing for you:

## Capital

Prior to the launch of the feature, when you are making capital investments into its development, the feature manager should:

1. **Enable the feature for staff alone** 

   Forget integration environments. Do your testing on production. Cut back on surprises and on development time.

2. **Dark Launch to a small subset of features**

   See how the feature is used. Count how many support queries you get. Improve on those before launching out to all.

## Operational

During the lifetime of a feature, the feature manager should be able to:

1. **Pause a feature**

   At any time, things may go wrong. It is better to be prepared and cordon off access to the affected features rather than have all users suffer.

   However, this should still allow you to debug. So, your staff should still have access.

2. **Control access**

   Segmenting your users ruthlessly is the fastest way to learn more about them. Want to try out a new price-point? Limit access for features. Features are your currency. Use it wisely, learn more, rinse, repeat.

## Experimental

To help you learn more about the effect and utilization of a feature, your feature manager should do:

1. **Gradual rollout**

   Release to 5% of your users first. Learn whether your assumptions were correct. Release to 25%, 50%, 75% and verify that your infra can hold up. Then, release to all users together.

   All of this without any engineering involvement!

2. **Evaluate Performance**

   You work on a feature *assuming* it is going to have some effect. You should be able to verify (statistically), that the feature actually has that effect. 

   Your Feature Manager should track the performance of variants and help you choose a winner.

3. **Automatic Holdouts**
   The only way to know the long term impact of your feature is to hold back access for a small group of users and check in (months later) to see whether there are any unintended effects of the feature.

   Your feature manager should automatically do this for you.

---

Feature toggles, flags, switches used to be simple. They still are. By adding the dimension of customer segmentation, we can learn so much more about our customers and how they interact with features.

Having that kind of control in all your product team is empowering. It enables quicker feedback, builds intuition over time and helps orient new team members inculcate the data-driven culture that you always want to strive towards.

At Leanbase, we are building a feature management tool to do all of the above and more. A single, unified interface that serves as your product's control panel.

Drop us an [email](mailto:hi@leanbase.io) to learn more.