---
draft: true
layout: blog-page
title: "Setting up Growth Analytics for early stage startups"
hero: /assets/blog-images/carlos-muza-hpjSkU2UYSU-unsplash.jpg
hero_aspect: 68%
author: Dipanjan Mukherjee
author_bio: Staff Writer, Founder at Leanbase
author_thumb: /assets/blog-images/authors/dipanjan.jpg
excerpt: <p>How to setup analytics reports on Google analytics for your landing pages. How to run simple variant testing.</p>
tags: early-stage-tips
---

You have thrown together a couple of landing pages. Now you wait, wait for people to show up. But who's coming to the site? How _are_ they coming to your site? What are they _doing_ there? If you can't answer those questions, you can't know how to get _more_ people. That's what it is about, right? Getting **more** of the **correct** kind of attention?

Enter Google Analytics. <!-- more --> You probably know what it is and how it works. But here's a short summary anyway: It is a tiny bit of code injected into your site that gives you ton of information in the google analytics console.

First, create an analytics account by visiting [https://analytics.google.com/analytics/web/](https://analytics.google.com/analytics/web/). Once you are done, get your hands on the tracking code. I have no idea why, but google does not make this super simple. You have to go to 'admin' at the bottom right, then click on 'Tracking Info', and then on 'tracking code'. Phew! Just follow the video below.

<div class='embed-container'><iframe src='https://player.vimeo.com/video/369731237' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
Done? Awesome! Getting on with this. You'll read a lot about the kind of metrics you could, should and *must* track. Let's keep it simple, shall we?

# Funnels

Think of a regular funnel. You've got oil going in one end, and coming out the other. But the funnel ensures that the oil goes into the can and not all around, right? A conversion funnel is just like that. You've got traffic coming in and you want the funnel to keep your users on track until they flow out the other end. 

What's at the other end? Conversion. Conversion into a signed-up user, a paid user, a subscriber. Whatever the goal of your landing pages are.

But all of that comes later. Right now, I want you to focus on one thing, and one thing alone. The quantity and quality of oil. How much traffic are you getting?

# Traffic Metrics Overview

Let's take a glance at google analytics reports. This is what the band at the top looks like on your home view.

<div class="figure">

<img src="/assets/blog-images/ga-analytics-headband.png">

</div>

Almost all you need to know at the very beginning is right here. 

1. **Users** is the number of unique people coming across your site in the last week.
2. **Sessions** is the total number of times all those people visited your site. In the same period.
3. **Bounce Rate** is how many of those jumped right back to whatever they were doing. Equivalent of closing the window or pressing <back> on the browser. The lesser this is, the better.
4. **Session Duration** is how long (on average), people stayed on the site. This includes visiting other pages on your site, and in-general, reading content. More is good, but so is less. It is hard to say what a good session duration is.

The numbers are computed over *a period*. You decide what that period is, by using the selector at the bottom-left of the same selection.

<div class="figure">
  <img src="/assets/blog-images/ga-analytics-home-period-selector.png">
</div>

### Blocking yourself from analytics

At this stage, because the numbers are small, you'll want to remove yourself and your colleagues from google analytics reports. You don't want to skew the reports away from the true facts. Here's how to block yourself.

If on chrome, download [Block Yourself from Analytics Chrome Extenision]( https://chrome.google.com/webstore/detail/block-yourself-from-analy/fadgflmigmogfionelcpalhohefbnehm?hl=en ). Now:

1. Open your landing page / website
2. Click on the extension's icon at the right of your address bar (the place where you type in URLs)
3. Click on Block analytics for this website.

<div class="figure">
  <img src="/assets/blog-images/ga-analytics-blocker.png">
  <p class="caption">
    Blocking yourself from google analytics
  </p>
</div>



# Traffic Segmentation

As you'll soon learn, any metric is unhelpful unless you segment it across your audience. Segmenting helps you form hypotheses that you can then learn from.

So, let's start with the super-helpful segments that GA (Google Analytics) already provides.

On the left sidebar, click Acquisition and then Overview.







