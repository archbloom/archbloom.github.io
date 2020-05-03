---
layout: post
title: React Hooks - II
categories: [technical]
tags: [react, reactHooks]
description: Introduction to 'useEffect'
---

Previously I wrote about `useState`, now let's move to `useEffect`.

### What is useEffect?

`useEffect` is Hook that helps to control the effects of changes in functional components.

### Import useEffect

To use `useEffect`, you have to import it from the ‘react’.

```javascript
import React, { useEffect, useState } from 'react';
```

### Use it

`useEffect` can be used directly as

```javascript
useEffect(() => {}, []);
```

It accepts two arguments, first is the function of what needs to be done and second is for when the effect should get applied.
If you do not pass second argument, react will apply the `effect` on every change.
If you wish to apply this `effect` on only first load of the page, pass `[]` as second argument. This will ensure that the effect will applied on first load only i.e. only when component is loaded.

### Example

Let's try to change the page title on every change of input text. For this we will use `useState` for managing state of the `title`.  
First we will create a state for `title` using `useState`.

```javascript
const [title, setTitle] = useState('Old title');
```

Then we will use `useEffect` for change the title on the state change of `title` variable.

```javascript
useEffect(() => {
  document.title = title;
}, [title]);
```

Now, when the user change the input, the useEffect will get triggered and the header of the page will get updated.

```javascript
const setTitleValue = e => {
  setTitle(e.target.value);
}
```

The input text box,

```html
<input type='text' value={title} onChange={setTitleValue}/>
```

### Result

Whenever the input from the text box changes the title of page changes.

![](/assets/media/useeffect_1.gif)

### What is happening here?

We have created state variable title using `useState`, where `Old title` is the initial title. When the title changes from the `input` text box the state of the `title` changes and `useEffect` will keep eye on the state of the `title` and apply the effect on the change and the title will change.

### So, Where can we use this `useEffect`?

While learning about this, I created a demo app, where the app is fetching recipes from an API and listed it on the web page.

You can peak into the code here, [RecipeListing](https://github.com/archbloom/react-demo-app/blob/master/src/RecipeListing.js) and result of the code is,

![](/assets/media/recipe-list.png)
