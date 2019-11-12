---
layout: blog-page
title: The return of Trunk Based Development
hero: /assets/blog-images/nikolay-maslov-XnvLe0u9iM8-unsplash.jpg
hero_aspect: 60%
author: Dipanjan Mukherjee
author_bio: Staff Writer, Founder at Leanbase
author_thumb: /assets/blog-images/authors/dipanjan.jpg
excerpt_separator: <!--more-->
categories: [startup-advice,feature-management]
---

If you have ever had a tough time merging your feature branch in __months__ after it was created, you are not alone. A lot of people go through this. Why though? We'll take an opinionated look at feature-branch development and the alternative: master-based-development with feature flagging. See what makes each one amenable to a certain _style_ of development.

<!--more-->

# The Rise of Feature Branches

Somewhere in the last decade, git-flow and similar techniques made feature branches ubiquitous. And for good reason. If you do open-source development, the courteous, and _proper_ way to drop patches or pull-requests _is_ the feature branch.

A feature branch (rebased to current master) shows you changes alone and allows controlled review and inspection. Controlled review and inspection are important in open source. The code-review is the primary check against feature creep and inconsistent development.

This is essential because of the diversity of experience, styles and backgrounds of the open-source community.

However, outside of open-source, my personal opinion is that feature branches are detrimental to development speed.

# The Problem with Feature Branches in an Industry Setting

Industrial software is written very differently as compared to open-source. Reviews are scarce and scattered. Audits (post-merge reviews) are far more common.

Development is also fairly _spikey_, both in time and location. As folks work together on features, changes happen mostly around the same areas, to the same files and directories.

These intensive changes, where a few devs make changes to the same files or directories are exactly what makes feature-branches problematic in industrial settings.

## Merge conflicts are painful

Merging is a source of brilliant memes.

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/cFkiFMDg3iFoI" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/git-merge-cFkiFMDg3iFoI">via GIPHY</a></p>
You'd literally create a meme rather than actually diagnose and resolve the merge!

So why does this happen? Well, two reasons:

### Multiple feature branches

Say you have a feature X. X will soon have a version 2.0, so a group of devs start working on it in January. They are done by March. Only known to some, however, to fix bugs, a second branch was created in February end and merged back in. Things went fine until merge-day.

When devs start merging their branch back, on a Friday no-less, they started seeing red on their consoles.

The version control system is not able to resolve between the two sets of changes. Humans have to step in. Humans, who have forgotten all about the February affairs.

The month longs timeline is purely incidental. You could shorten this to weeks or days, and I am sure, you'll still have seen something similar at your workplace.

### Central/Common/Infrastructure pieces change frequently as well

Your app is comprised of features, but those features work off of a lot of common infra pieces, right? Complete modularity takes place in hallowed portals. Not in regular projects like the ones you and I work on. Inevitably, some logic seeps into the common "pipe" areas.

The fact is, in most software shops, these pipes are edited frequently. You have a common way to talk to an API? Well guess what, all of the methods now _require_ an additional argument. Go figure.

You can fight against these kind of changes all you want, but humans will seek the path of least resistance. They _will_ make those changes. Because they are necessary, and they are easy.

---

# Alternative? Trunk Based Development

Enter trunk based development. This is how we used to do stuff, before open-source, while writing enterprise software. Everyone works on the same branch. In agile teams, the same branch gets deployed. All changes are checked in and _continuously integrated_, on everyone's workspaces, not just in a CI Server.

Let's also look back at why you were doing feature branches in the first place. You wanted to prevent your half-baked features from going right on to production.

You can still do that, with a different, more powerful system. A [Feature Flag system]({% post_url 2019-11-06-feature-management-software %}). A feature flag system complements trunk based development very well. Essentially, you pepper your code with a bunch of conditionals, but the control of those conditionals (what path your code will take) is outside your code. The Feature Flag system will provide an admin console to manage the flags. The feature flags can additionally restrict the feature (when it is ready in its due course) to your staff (for QA) or to a subset of users (controlled rollout).

## Benefits of Trunk Based Development: The Obvious ones

No more merge conflicts. Enough said!

Continuous Integration, on everyone's workspaces. Everyone works off of the current state.

Eliminate QA handoff. Engage your product managers and QA personnel from the day _any_ code sees the light of the day. Early feedback shortens your release cycle. Your feature flag system can restrict access only to QA and PMs.

## Benefits of Trunk Based Development: Surprising ones

You'll find a marked difference in how your dev team works. 

Because they are working on master, they are less likely to leave in TODOs. The ones they most certainly would have forgotten about.

Also, they will first create a skeleton of how the code will behave when it is ready. Then they will start to flesh out the details. Often times, PMs or QA folks can use the product right at the skeleton stage.

# So, how do I switch to Trunk Based Development?

Well, it depends... 😅

First thing would be to switch slowly, you know? Start with a single feature's development.

1. Inform your colleagues. Tell them you'll be trying out trunk based development.
2. Figure out how you'll do feature flags. Something as simple as switching things on *only* if you have an environment variable setwould be great.
   Something like [Leanbase](/), would be great!
3. Start developing. Be amazed at how you stop pushing all TODOS until "later".
4. Tell all your friends.
5. Tweet this article.

Ofcourse, all of this would be super-easy if you have a small dev team and they are open to trying out new ideas. It might be harder if you have to convince a bunch of folks. It is always easier to suggest, discuss and, then agree on something. Find your partner. Who is most likely willing to try this out?

And then, send them this article. Hopefully, I'll sell them on the premise.

Cheers!