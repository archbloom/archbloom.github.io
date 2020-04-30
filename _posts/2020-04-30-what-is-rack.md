---
layout: post
title: What is Rack?
categories: [technical]
tags: [ruby, rack]
description: Rack is more than just a middleware
---
### If it is not just a middleware then what is it?

`Rack` is kind of middleware which sits between web application and the web server. Most of the time developers need not have a need to know about the `Rack` unless the developer is working on the framework. But for a developer, it is good to have a piece of knowledge about how the requests are handled and responses are returned back.

The web application doesn’t need to know how to talk to an `HTTP server`, it needs to know how to talk to `Rack`. 

`Rack` handles all of the server-specific API calls, passes on the HTTP request and all the environment parameters in a hash, and gives your application’s response back to the server.

`Rack` is nothing special on its own but it sure knows how to handle the HTTP requests and respond back. It can be simply defined in a single sentence as:    
 
> *A Rack application is any Ruby object that responds to the **call** method, takes a single hash parameter and returns an array containing the response status code, HTTP response headers and the response body as an array of strings.*  

### So, if Rack is nothing special then why should the developer know about it?
First, it helps in understanding how the framework works. But more importantly, there are useful things you can do with `Rack`. Most importantly: *middleware*.

Rack provides plethora of middleware helpers which sits between the application and Rack. These helpers can intervene in the request-response cycle and modify as per requirement. This are some features of the Rack.   

We can also create a minimalist web application with Rack.

### Simple Web App with Ruby and Rack
Let's create simple *Hello World* program with Rack.
This application will always return 200 as HTTP response and `Hello World!!` string as response body.

```ruby   
class HelloWorld
  def call(env)
    return [200, {}, ["Hello World!!"]]
  end
end
```   
Here, there is a class *HelloWorld* which has only one method, *call*. It takes *env* as parameter and returns an array.

Now, let's use Rack to convert this to a webapp.

### Using simple `.rb` file
By default, Rack is bundled with `WEBrick::HTTPServer`. Whenever you fire up the rack server it will open up WEBrick. To open up the server, we use the *Rack::Handler::WEBrick.run* method, pass it an instance of *HelloWorld* and the port to run on.   

```ruby   
#!/usr/bin/env ruby
require 'rack'
class HelloWorld
  def call(env)
    return [200, {}, ["Hello world!"]]
  end
end
Rack::Handler::WEBrick.run(
  HelloWorld.new,
  :Port => 9000
)
```   
We can run this file as `$ ruby hello_world.rb`. A WEBrick server will now be running on port 9000, and Rack will be passing requests between the HTTP server and your application.   
But this is not a Good / Ideal way to serve the application. Rack comes with feature called `Rackup`. Also, using `Rack::Handler` in this way has a some limitation. It’s not very configurable. Everything is hard-coded into the script.

### Using Rackup
`rackup` is command line tool. This command need file with extension `.ru`. By default it will search for the `config.ru` file.  

```ruby   
class HelloWorld
  def call(env)
    return [
      200,
      {'Content-Type' => 'text/html'},
      ["Hello world!"]
    ]
  end
end
run HelloWorld.new
```   

When `rackup` is fired this will by default open on port 9292. But the `rackup` command is more configurable. If the file name is not `config.ru` but it is `hello_world.ru`, rackup need the file name as an argument, and optionally a port to run on,

```shell   
$ rackup hello_world.ru -p 9000
```   

This will start listening on port 9000. For any requests this server will always return `Hello World!!`.

Rack is more than just a HTTP server communication, it is middleware and comes with a lot of built-in helpers which can be used to simplify developer's hassle to intervene in the request response life cycle.

Read more about these helpers [here](https://github.com/rack/rack#label-Convenience)

### Example
I have create a sample webapp which support *GET* and *POST* requests.   
Code can be checked out here on [GitHub/ruby_rack](https://github.com/archbloom/ruby_rack/tree/master/application).
