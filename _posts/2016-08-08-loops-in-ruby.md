---
layout: post
title: Loops in Ruby
tags: [Ruby]
description: Loops in Ruby
---
Loops are used to execute same block of code again and again for certain number of times or until specific condition is met. Loops in ruby is same as other laguages, but it supports some more functionalities  

#### Ruby _for_ loop     
For loop is the most easiest looping statement in the programming. Ruby also supports _for_ loop, but it has little different syntax.    
{% highlight ruby %}    
for i in 0..n do   
  code
end  
{% endhighlight%}  
Executes code _n_ times.

Range in Ruby  

+ (0..9) # => 0,1,2,3,4,5,6,7,8,9   
+ (0...9) # => 0,1,2,3,4,5,6,7,8    

#### Ruby _while_ loop   
While is the another simplest looping technique in programming. Ruby syntax for the while :    
{%highlight ruby%}  
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

#### Ruby _upto_ loop  
upto is another looping technique in ruby.

{%highlight ruby%}
1.upto(n) do
  code
end
{%endhighlight%}
Executes code _n_ times.  

#### Ruby _step_ loop  
step looping technique is used to skip specific interval every time.  
For example if you want to take second element always you will put 2 instead of skip in the code snippet below. Which is equivalent to doing `i+=2`.    
{%highlight ruby%}
1.step(n,skip) do
  code
end
{%endhighlight%}

#### Ruby _loop_ loop  
Loop in ruby another looping technique.   

###### Uncondition looping with _loop_
{%highlight ruby%}
loop do
  code
end
{%endhighlight%}  
Executes code infinitely. Not very helpful, but good to have knowledge about it.  

###### Conditional looping with _loop_   
{%highlight ruby%}
loop do
  code
  break if condition
end
{%endhighlight%}  
Executes code, exits when condition is met.   

#### Ruby _break_ statement  
For terminating the _most internal_ loop ruby provides _break_.  
{%highlight ruby%}
break
{%endhighlight%}

#### Ruby _next_ statement  
Jumps to next iteration of the most internal loop. Same as `continue` in other languages.
{%highlight ruby%}
next
{%endhighlight%}

#### Ruby _redo_ statement    
Restarts this iteration of the most internal loop, without checking loop condition.  

{%highlight ruby%}
#!/usr/bin/ruby
for i in 0..5
  if i < 2 then
    puts "i is #{i}"
    redo
  end
end
{%endhighlight%}  
This will give output as and will in infinite loop.  

```    
i is 0  
i is 0  
.  
.  

```  

#### Ruby _retry_ statement    
retry appears _rescue_ clause. Retry starts execution of block from the begin.  
{%highlight ruby%}
retry
{%endhighlight%}
With _begin_, _rescue_ and _end_.  
{%highlight ruby%}
begin
  code #raise exception
rescue
  # hanles exception
  retry #restart from the beginning
end
{%endhighlight%}
