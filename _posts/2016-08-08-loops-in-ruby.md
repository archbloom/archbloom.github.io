---
layout: post
title: Loops in Ruby
tags: [Ruby]
description: Loops in Ruby
---
Loops are used to execute same block of code again and again for certain number of times or until specific condition is met. Loops in ruby is same as other laguages, but it supports some more functionalities  

#### Ruby _for_ loop     
For loop is the most easiest looping statement in the programming. Ruby also supports *for* loop but it has little different syntax.    
{% highlight ruby %}  
#!/usr/bin/ruby
for i in 0..n do  
  code
end  
{% endhighlight%}  
Executes code _n_ times.

Range in Ruby  

+ (0..9) # => 0,1,2,3,4,5,6,7,8,9   
+ (0...9) # => 0,1,2,3,4,5,6,7,8    

#### Ruby _while_ loop   
While is the another simplest looping technique in programming. Ruby syntax for the while  
{%highlight ruby%}
#!/usr/bin/ruby
while condition  do
  code
end
{%endhighlight%}   
Executes code while condtion is _true_.

Other way to use _while_ loop  
{%highlight ruby%}
code while condition
{%endhighlight%}  
Executes code while condition is _true_.   

#### Ruby _do..while_ loop  
Ruby also supports do..while looping style, but it is little different. It uses _begin_ and _end_ code block.  

{%highlight ruby%}
begin
  code
end while condition
{%endhighlight%}  
Executes the code while condition is _true_.  

#### Ruby _until_ loop  
Until has little different behaviour. Until executes code while condition is false.  
{%highlight ruby%}
until condition do
  code
end
{%endhighlight%}  

Other way to use _untiil_ loop  
{%highlight ruby%}
code until condition
{%endhighlight%}  
Executes the code while condition is _false_.  

#### Ruby _times_ loop  
times in ruby executes code that many number of times.
{%highlight ruby%}
n.times do
  code
end
{%endhighlight%}   
Executes code _n_ times.  

#### Ruby _loop_ statement   

#### Ruby _next_
same as continue to skip the iteration###  

#### Ruby _redo_   
executes previous statement if not handeled properly script might go in infinite loop###  

#### Ruby _retry_    
