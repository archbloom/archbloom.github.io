---
layout: post
title: Welcome HTTP/2
categories: [technical]
tags: [info]
description: Why HTTP/2?
---

#### What is HTTP?  
Short for *HyperText Transfer Protocol*, HTTP is the underlying protocol used by the World Wide Web. HTTP defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands. For example, when you enter a URL in your browser, this actually sends an HTTP command to the Web server directing it to fetch and transmit the requested Web page.

The other main standard that controls how the World Wide Web works is HTML, which covers how Web pages are formatted and displayed.  

#### What is HTTP/1?  


The *Hypertext Transfer Protocol (HTTP)* is a wildly successful protocol. However, the way HTTP/1.1 uses the underlying transport [RFC7230](https://tools.ietf.org/html/rfc7230) has several characteristics that have a negative overall effect on application performance today.

In particular, HTTP/1.0 allowed only one request to be outstanding at a time on a given TCP connection. HTTP/1.1 added request pipelining, but this only partially addressed request concurrency and still suffers from head-of-line blocking. Therefore, HTTP/1.0 and HTTP/1.1 clients that need to make many requests use multiple connections to a server in order to achieve concurrency and thereby reduce latency.

Furthermore, HTTP header fields are often repetitive and verbose, causing unnecessary network traffic as well as causing the initial TCP  congestion window to quickly fill. This can result in excessive latency when multiple requests are made on a new TCP connection.

HTTP/2 addresses these issues by defining an optimized mapping of HTTP's semantics to an underlying connection. Specifically, it allows interleaving of request and response messages on the same connection and uses an efficient coding for HTTP header fields. It also allows prioritization of requests, letting more important requests complete more quickly, further improving performance.

The resulting protocol is more friendly to the network because fewer TCP connections can be used in comparison to HTTP/1.x. This means less competition with other flows and longer-lived connections, which in turn lead to better utilization of available network capacity.

Finally, HTTP/2 also enables more efficient processing of messages through use of binary message framing.  

#### Overview of HTTP/2 : 



[HTTP/2](https://tools.ietf.org/html/rfc7540) provides an optimized transport for HTTP semantics. HTTP/2 supports all of the core features of HTTP/1.1 but aims to be more efficient in several ways.

The basic protocol unit in HTTP/2 is a frame. Each frame type serves a different purpose. For example, *HEADERS* and *DATA* frames form the basis of HTTP requests and responses; other frame types like *SETTINGS*, *WINDOW_UPDATE*, and *PUSH_PROMISE* are used in support of other HTTP/2 features.

Multiplexing of requests is achieved by having each HTTP request/response exchange associated with its own stream. Streams are largely independent of each other, so a blocked or stalled request or response does not prevent progress on other streams.

Flow control and prioritization ensure that it is possible to efficiently use multiplexed streams. Flow control helps to ensure that only data that can be used by a receiver is transmitted. Prioritization ensures that limited resources can be directed to the most important streams first.

HTTP/2 adds a new interaction mode whereby a server can push responses to a client. Server push allows a server to speculatively send data to a client that the server anticipates the client will need, trading off some network usage against a potential latency gain. The server does this by synthesizing a request, which it sends as a *PUSH_PROMISE* frame. The server is then able to send a response to the synthetic request on a separate stream.

Because HTTP header fields used in a connection can contain large amounts of redundant data, frames that contain them are compressed. This has especially advantageous impact upon request sizes in the common case, allowing many requests to be compressed into one packet.  


![Image](/assets/ico/http_2.png)

**You can read more about HTTP/2 [here](https://en.wikipedia.org/wiki/HTTP/2)**
