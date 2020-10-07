---
layout: post
title: React Hooks - III
categories: [technical]
tags: [react, reactHooks]
description: Introduction to 'useContext'
---

After managing state and manipulating dom, I am now moving to maintain the context.

### What is context?   
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### Why context?
Imagine you are having many components in your React application with one parent and many child components at different levels, some may be directly connected some may be not. Now, consider you want to send data from parent or any other component from the tree to one of child component. This can be achieved by passing the _props_ down to the child. This is called *prop drill*.  

You would have to pass that data through each and every component, via their props, until you reach the desired child component.  
This is not a good idea, and is prone to errors.  

Here comes the _React Context_ to save our hassle.  

The React's `useContext()` allows you to easily access data at different levels of the component tree, without having to pass data down through props.  

### Import useContext and createContext

`useContext` is not readily available as `useState` or `useEffect` directly. In order to use `useContext` you will have to create the context first.  
To create context you have to import it from the 'react'.  

```javascript
import { createContext } from 'react';
```

And to use this context in other components, you have to import `useContext` in that component from 'react'.

```javascript
import { useContext } from 'react';
```

### Use it

There are multiple components in your application and you want to show logged in user on each component.  

Create a user context in one of the components.

```javascript
export const UserContext = createContext();
```

And then create a provider for this context,

```javascript
return (
  <UserContext.Provider value={'User is logged in'}>
    <ComponentA />
    <ComponentB />
  </UserContext.Provider>
)
```

To use the context value in _CompanentA_ and _ComponentB_ you have to use this context and use can use the value set in the context.

```javascript
const value = useContext(UserContext);
```
```html
<div>The answer is {value}.</div>
```

### So, need a detailed example on how to use this `useContext`?

While learning about this I created a demo app, which uses the `createContext` and `useContext` to transfer values from one component to other.  
Check demo here, [ReactDemoApp](https://bhushanauthankar.me/react-demo-app/).  

### What does the application do?
It has a navigation bar which shows the count of the movies the system has. So, to pass the movies count from movies component to navigation bar I created a context in the _MoviesContext_ component and added _Provider_ for the same. Check code here [MoviesContext](https://github.com/archbloom/react-demo-app/blob/master/src/MoviesContext.js).  

To use this in the _Nav_ component, I have used `useContext` hook there. Check code here [Nav](https://github.com/archbloom/react-demo-app/blob/master/src/Nav.js).  

I have also added a add movie button to update the count. Check code here [AddMovie](https://github.com/archbloom/react-demo-app/blob/master/src/AddMovie.js).  

This results in,

![](/assets/media/movie-context.gif)


