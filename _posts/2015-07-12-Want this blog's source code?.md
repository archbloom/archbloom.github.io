---
layout: post
title: Want this blog's source code?
categories: [general, technical]
tags: [demo, setup]
description: How to change blog's sorce code?
---

- **dbyll** is minimalist, stylish theme for jekyll.   


- **dbyll** is brought to you by **[dbtek](http://ismaildemirbilek.com)**. Open sourced under [MIT](http://opensource.org/licenses/MIT) license.  

- Download the source code or fork it on **[Github](https://github.com/dbtek/dbyll)** .  

- Firstly, you must install [Jekyll](http://jekyllrb.com/docs/home/) and all the dependencies .  

- How to [install](http://jekyllrb.com/docs/installation/) jekyll ?   

- In your **_config.yml** file change these settings

{% highlight yaml %}  
title: your title  
author:  
  name: yourname  
  email: youremail  
  github: asd123  
  twitter: asd123  
  pinterest: asd123  
  linkedin: asd123  
  resume: asd123  
  bio: About you!  
  email_md5: md5ofemail  
{% endhighlight %}  

- If you want change the profile picture, change the path from file   
**sidebar.html**

{% highlight yaml %}
<header class="sidebar-header" role="banner">
  <a href="{{ site.BASE_PATH }}/">
    <img src="/assets/ico/qwerty.png" class="img-circle" />
  </a>
  <h3 class="title">
    <a href="{{ site.BASE_PATH }}/">{{ site.title }}</a>
  </h3>
</header>
{% endhighlight %} 

- Replace my name with yours everywhere you find.  

- Don't change anything you don't understand.