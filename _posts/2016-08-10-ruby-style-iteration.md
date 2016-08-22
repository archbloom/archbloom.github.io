---
layout: post
title: Ruby Style Iteration
tags: [Ruby]
description: each, map, inject, collect, reduce
---  
Iterators are the methods supported by _collections_. Collections are the objects which store data. In Ruby, _Arrays_ and _Hashes_ are the collections. Iterators are used to traverse collection and get the value one after another.  
Lets go through some iterators in ruby.  

#### Ruby _each_  
The each iterator returns all the values/elements of collection.
{% highlight ruby %}    
collection.each do |element|   
  code
end  
{% endhighlight%}   
Here the collection could be _Array_ or _Hash_. _code_ will get executed for every element in the collection.  
**Example**
{% highlight ruby %}    
array = [1,2,3,4,5]
array.each do |element|   
  puts element
end  
{% endhighlight%}  
Output for the snippet:  

```     
1  
2  
3  
4  
5  
=> [1, 2, 3, 4, 5]   
```  
Ruby has some variations in _each_ :  
**Ruby _each_index_**  
This returns all the positions of the collection in order.  
{% highlight ruby %}    
collection.each_index do |index|   
  code
end  
{% endhighlight%}   
_code_ gets executed for every index in the collection.  

**Ruby _each_with_index_**  
This returns the element and its postion from the collection.  
{% highlight ruby %}    
collection.each_with_index do |element,index|   
  code
end  
{% endhighlight%}
<!-- _element_ is the element in the collection and _index_ is its index. -->

#### Ruby _map_  
Ruby _map_ is another iterator used to go through the collection. Whenever you want to alter the values of collection, _map_ is the good choice.  
{% highlight ruby %}    
collection.map do |element|   
  code
end  
{% endhighlight%}   
_code_ will get executed for every element in the collection.  
**Example**
{% highlight ruby %}    
array = [1,2,3,4,5]
array.map do |element|   
  puts element
end  
{% endhighlight%}  
Output for the snippet:  

```     
1  
2  
3  
4  
5  
=> [nil, nil, nil, nil, nil]   
```  

You might be thinking "What's the difference between _each_ and _map_, since both do the same thing?"  
Take a look at the last line of output  
For _each_ it is ``` => [1, 2, 3, 4, 5] ``` which is the original array.  
For _map_ it is ``` => [nil, nil, nil, nil, nil] ``` which is the _nil_ array of same size.     

This _map_ version does not destroy the original collection. But if you want to change the original collection itself, ruby provides you _map!_ (map bang)version.  
{% highlight ruby %}    
collection.map! do |element|   
  code
end  
{% endhighlight%}   

#### Ruby _collect_  
_collect_ and _map_, both work in similar way.    
{% highlight ruby %}    
collection.collect do |element|   
  code
end  
{% endhighlight%}  
**Example**
{% highlight ruby %}    
array = [1,2,3,4,5]
array.collect do |element|   
  puts element
end  
{% endhighlight%}  
Output for the snippet:  

```     
1  
2  
3  
4  
5  
=> [nil, nil, nil, nil, nil]   
```  
This _collect_ version does not destroy the original collection. But if you want to change the original collection itself ruby provides you _collect!_ (collect bang)version. (same as map!)  
{% highlight ruby %}    
collection.collect! do |element|   
  code
end  
{% endhighlight%}  

#### Ruby _inject_  
_inject_ is used to perform some operation on the collection with some initial value in the memory.  
{% highlight ruby %}    
collection.inject do |result,element|   
  code
end  
{% endhighlight%}   
Here 'result' has the initial as first value of the collection and element is the next value. But if you give some initial value to result as ``` collection.inject(initial_value) do ... end ``` then element will have the first value from the collection.    

#### Ruby _reduce_  
_reduce_ and _inject_ works the same way.  
{% highlight ruby %}    
collection.reduce do |result,element|   
  code
end  
{% endhighlight%}  
**Example**  
{% highlight ruby %}    
array = [1,2,3,4,5]
array.reduce do |result , element|   
  result * element
end  
{% endhighlight%}
Output for the snippet :  
```  
120  
```  
The above snippet multiplies all the elements from the _array_.  
If you replace _reduce_ with _inject_, it outputs the same.
