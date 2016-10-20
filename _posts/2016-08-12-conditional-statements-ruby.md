---
layout: post
title: Ruby conditional statements
tags: [Ruby]
description: if..else, if, unless, case
---  
Ruby offers conditional statements which are pretty common to modern languages. Conditional statements are used when you want to execute one of many blocks of code.   

#### Ruby _if..else_  
When you want to execute one of two code blocks depending on only one condition, the _if...else_ is the good choice.  
{% highlight ruby %}    
if condition
  code block 1
else
  code block 2
end
{% endhighlight%}    
If the condition is true then 'code block 1' will get executed otherwise 'code block 2' will get executed.  
Chaining of conditions is possible with _if..elsif..else_.  
{% highlight ruby %}    
if condition1
  code block 1
elsif condition2
  code block 2
else
  code block 3
end
{% endhighlight%}  
If condition1 is false condition2 will be checked for truthness otherwise else block will be executed.  
**Example**  
{% highlight ruby %}
x = 2   
if x < 2
  puts "x is less than 2"
elsif x == 2
  puts "x is equal to 2"
else
  puts "x is greater than 2"
end
{% endhighlight%}  
Output for the snippet:  

```     
x is equal to 2   
```  

#### Ruby _if_  
When you don't have the else block what then?. Ruby has the one line solution.  
{% highlight ruby %}    
code if condition  
{% endhighlight%}  
_code_ executes only if condition is true.  
**Example**  
{% highlight ruby %}    
puts "TRUE" if true  
{% endhighlight%}  
Output for the snippet:  

```     
TRUE   
```  

#### Ruby _unless_   
_unless_ has different behavior.
{% highlight ruby %}    
unless condition
  code block 1
else
  code block 2
end
{% endhighlight%}  
If the condition is _true_ 'code block 2' gets executed.  
'code block 1' gets executed when the condition is false.  

{% highlight ruby %}    
code unless condition  
{% endhighlight%}  
_code_ gets executed when condition is false.  

#### Ruby _case_  
When you have lots of conditions to check using _if..elsif..else_ is not a good idea. In that case _case_ is good choice.  
{% highlight ruby %}    
case expression
  when expression1
    code block 1
  when expression2
    code block 2
  else
    code block 3
end
{% endhighlight%}  
When expression match expression1 'code block 1' gets executed.  
When matches with expression2 'code block 2' gets executed.   
If does not match with 'code block 3' gers executed.  
The above code is same as:   
{% highlight ruby %}    
x = 1
if x == 1
  code block 1
elsif x == 2
  code block 2
else
  code block 3
end
{% endhighlight%}  
**Example**  
{% highlight ruby %}  
number = 8  
case number
  when 1..5
    puts "Between 1 to 5"
  when 6..10
    puts "Between 6 to 10"
  else
    puts "Greater than 10"
end
{% endhighlight%}  
Output for the snippet:  

```     
Between 6 to 10    
```
