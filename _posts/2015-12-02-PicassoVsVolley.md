---
layout: post
title: Using Picasso
categories: [project]
tags: [Android]
description: Why use Picasso? Why not Volley?
---
As a Android app developeryou must have encounter this question: What should I use Picasso or Volley?

[Picasso](http://square.github.io/picasso/) is totally focused on image loading. As a result, if you have quirks in your image loading process

[Volley](http://developer.android.com/training/volley/index.html), on the other hand, is totally focused on handling individual, small HTTP requests. So if your HTTP request handling has some quirks, Volley probably has a hook for you. If, on the other hand, you have a quirk in your image handling, the only real hook you have is ImageCache. It’s not nothing, but it’s not a lot, either.but it have more other advantages like Once you define your requests, using them from within a fragment or activity is painless. And unlike parallel AsyncTasks.

Picasso does just one thing, while Volley tries to solve a more general problem.

####Which Library Should I Use?####  
 If you have a large, stable, pre-existing project, you are probably better off using Picasso. Integration is painless, performance seems good, and if the fade-in works for you, you get some free visual fun.

On the other hand, if your app is new, or if it’s small enough that you can think about swapping out the back end completely, and it deals mostly with small HTTP payloads, Volley is worth considering. Once you define your requests, using them from within a fragment or activity is painless. And unlike parallel AsyncTasks, you don’t have to worry about too many threads.

#####What about using both?#####
If Volley’s image management causes you severe pain, then you’re probably fine using both.
