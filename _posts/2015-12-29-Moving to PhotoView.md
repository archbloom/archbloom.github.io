---
layout: post
title: Moving to PhotoView
categories: [project]
tags: [Android]
description: Changed from Picasso to PhotoView?
---
It is not like you have to move from [Picasso](https://github.com/square/picasso)  to [PhotoView](https://github.com/chrisbanes/PhotoView) for image manipulation. Both libraries are for different purposes.  

Picasso is used to load image from file system or download it from internet, you can not perform operations like zooming, tapping on image. PhotoView is used for that purpose.
 Picasso caches the image. This feature is not available in PhotoView.

 Loading is faster with the help of picasso.  

   PhotoView can be used along with Picasso.
