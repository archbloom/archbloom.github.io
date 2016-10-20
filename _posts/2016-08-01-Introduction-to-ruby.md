---
layout: post
title: Introduction To Ruby
tags: [Ruby]
description: Introduction To Ruby
---

I recently started learning Ruby. My friend once said, 'The best way to start learning is hands-on and write about it'.
But where to write, hence blog it.  

Yukihiro Matsumoto AKA Matz in mid 1990's created a scripting language and named it 'Ruby'.
It is said that  
**Ruby is "A Programmer's Best Friend".**  
Yes, I believe it.  
Features of Ruby   

* Ruby is Pure Object-Oriented programming language.  
* Ruby is interpreted language.    
* Ruby is case sensitive.  
* Ruby is a server-side scripting language.  
* Ruby is a general-purpose language.  
* Ruby has clean syntax.  
* Reading Ruby script is like reading English sentence.  


There is no need of indentation in Ruby, but you should follow the convention of two character indentation.  

Lets get started. Lets write first script, I don't know why but it is always 'Hello World'. I say go with 'world'.  
 hello_world.rb  

{% highlight ruby %}  
#!/usr/bin/ruby
def hello_world  
  puts "Hello World!"    
end      
hello_world  
{% endhighlight%}   

Run this script as :  
`$ ruby hello_world.rb`  

Output :   
``` Hello World!  ```

```
# indicates single line comment  
```  
```
=begin  
This is the   
multiline comment   
=end  
```   

Installation needed :  

* Latest version of Ruby  
* `irb`(Interactive Ruby Shell) or `pry` (same as irb)
