---
layout: post
title: React Hooks - I
categories: [technical]
tags: [react, reactHooks]
description: Introduction to 'useState'
---

I am learning ReactJs these days. The faster way to learn is to write about it.
So, I am writing about one of React hooks `useState`.

### What is useState?

`useState` is a Hook that allows you to have state variables in components.

### Import useState

To use `useState`, you have to import it from the 'react'.

```javascript
import React, { useState } from 'react';
```

### Use it

`useState` is used to have state variables. The `useState` Hook allows you to declare only one state variable (of any type) at a time, like this:

```javascript
const dataTypes = () => {
  const array_type = useState([1,2]);
  const string_type = useState('start');
}

```

`useState` takes the initial value of the state variable as an argument. From the above example `array_type` will have intial value `[1,2]` and `string_type` will have initial value `start`.

`useState` also accepts function for initial value computation if the intial value has heavy computation.

```javascript
const heavyVariable = useState( () => heavyComputation() )
```

### State Management

Using `useState` alone won’t solve anything because its argument is used the first time only, not every time the property changes. To tackle that, `useState` returns an array where the first element is the state variable and the second element is a function to update the value of the variable.

```javascript
const Counter = () => {
   const counterState = useState(0);
   const count = counterState[0]; // Contains 0, actual variable
   const setCount = counterState[1]; // It’s a function to update the count
}
```

The best way to use the `useState` is to use _array destructuring_ it as,

```javascript
const [count, setCount] = useState(0);
```

The second variable `setCount` is function which will be used to update the state of `count`.

**How?**  
We can create simple counter as `Increase` and `Decrease` the count,

```javascript
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <button onClick={() => setCount(count - 1)}>Decrease count</button>
      <p>
        <strong>{count}</strong>
      </p>
    </div>
  );
};
```

This results in,

![](/assets/media/count.gif)

### So, where can we use this `useState`?

While learning about this I created a demo app, where the app is fetching recipes from an API and listed it on the web page.

You can peak into the code here, [RecipeListing](https://github.com/archbloom/react-demo-app/blob/master/src/RecipeListing.js) and result of the code is,

![](/assets/media/recipe-list.png)
