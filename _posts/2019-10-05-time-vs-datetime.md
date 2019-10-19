---
layout: post
title: Dilema in using Time vs DateTime - Ruby
categories: [tip]
tags: [ruby]
description: Time vs DateTime
---

Recently I encountered a problem in my Rails application.  
I was working on time comparison for an event based system.  

So, What I wanted was, to do escalation matrix for certain events, those events are time based events hence I needed to do time comparison.  
Ruby has _Time_ and _DateTime_ module which are there for time/date calculations.  

_Time_ module is older module it will calculate time since January 1, 1970 UTC.  
On the other hand the _DateTime_ has much wider scope, it does not limit itself for specific date/time range.  
_Time_ and _DateTime_ are pretty similar and confusing at the same time.  
You can read more about this _[here](https://stackoverflow.com/a/1261435)_  


So coming to the problem, in my system I have a _created_at_ for the object and _event_time_ for the event time(at what time the event occurred).  
I have stored everything in _UTC_.  

_**to_time**_
```(ruby)
>> DateTime.parse("04/10/2019 12:04 PM").utc.to_time
# => 2019–10–04 17:34:00 +0530   
```   

_**to_datetime**_
```(ruby)
>> DateTime.parse("04/10/2019 12:04 PM").utc.to_datetime
# => Fri, 04 Oct 2019 12:04:00 +0000
```  

So you see the difference, _to_time_ gives time in your _time_zone_, _Mumbai_ in my case. But _to_datetime_ gives the time in _UTC time_.   

_to_time_ returns _Time_ object and _to_datetime_  returns the _DateTime_ object hence the outputs are different.  


#### So when to use to_time and to_datetime?  
In my case, my mistake was I was parsing the _DateTime_ object to _to_time_ which was not a good idea. And then I changed to _to_datetime_ which solved my problem.  
If you know you are using _DateTime_ you should use _to_datetime_ if needed and if you are using _Time_ you should use _to_time_ format. This will solve most of the issues.  
Common mistakes I have seen people do is they create a _Time_ object and then parse it using _to_datetime_, create a _DateTime_ object and parse it using _to_time_. This might not cause any problems in many systems knowing what is the return value.