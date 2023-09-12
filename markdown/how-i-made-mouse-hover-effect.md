---
title: "How I Create Mouse Hover Effects for My Websites"
date: "2023-09-12"
description: My process of creating a gradient effect that follows the mouse pointer that you are seeing right now.
---

In this blog, I will show you the journey I took to implement a gradient effect on mouse hover as you can see in this website as well as [my portfolio](https://www.ramansoni.in/).

*The final result by following this 'guide' will look like this.* 
![final result of this guide](/images/mouse-gradient/final.gif)

> Please note that a gradient effect alone appears quite simple, but if placed with visual elements like dark backgrounds and traslucent cards, it can be enhanced into effects of glow and depth.

## The Approach

My implementation of the mouse hover effect is inclined towards the classic usage of JavaScript in web design, i.e, the layout and content of page is contained in html files, the styling of this content is done using CSS files and the presentation  is controlled by JS files. 

This being said, this approach can be used in other frameworks or tech stack, in fact this website is also built with NextJS (checkout the [GitHub repo](https://github.com/RmnSoni/personal-blogs) to know more).

The approach is as follows:
1. Track your mouse movements.
2. Use DOM to link these movements with an element's transform property.
3. Use CSS to make it pretty.

## Step 1 - Using JavaScript to track mouse movement 

To get the mouse coordinates we can use event listener and capture the x and y coordinates. Please note here we get coordinates w.r.t the root element of the document. If we require coordinates w.r.t. some other element we can subtract, its location accordingly. 

The line `document.addEventListener('mousemove', moveCursor);` adds an event listener to the `document` object. It listens for the "mousemove" event, which occurs when the user moves the mouse cursor. When this event happens, it calls the `moveCursor` function.

```js
function moveCursor(event) {
	const x = event.clientX;
	const y = event.clientY;
	console.log(`X: ${x}, Y: ${y}`);
}

document.addEventListener('mousemove', moveCursor);
```

## Step 2 - Interacting with a HTML element
We can proceed by creating a div in the body of our html document and giving it a class of cursor.

```html
<body>
	<div class="cursor"></div>
	<script src="script.js"></script>
</body>
```
Now we used querySelector in the document to find the HTML element with class 'cursor'. We can give the cursor new textcontent just to verify everything.

```js 
const cursor = document.querySelector('.cursor');

function moveCursor(event) {
	const x = event.clientX;
	const y = event.clientY;
	cursor.textContent = `X: ${x}, Y: ${y}`;
} 
	
document.addEventListener('mousemove', moveCursor);
```
*The result of this step:*
![coordinates.gif](/images/mouse-gradient/coordinates.gif)

## Step 3 - Changing CSS properties in JavaScript
We can use style.transform to change the translate property within the JavaScript file. I have also added some background color to the div so that it can be visible. 

```js
function moveCursor(event) {
	const x = event.clientX;
	const y = event.clientY;
	cursor.style.transform = `translate(${x}px, ${y}px)`;
}
```
this property is equivalent to the CSS attribute shown below (with numbers instead of 'X' and 'Y').

```cs
.cursor{
	transform : translate( X px, Y px);
} 
```
*The result of this step:*
![blueBox.gif](/images/mouse-gradient/bluebox.gif)
## Step 4 - Adding some styling to this element

We need to take care of a few important points here:
1. The cursor element should be pass through, so that we can still interact with other elements on the page.
2. To make this element always visible  the position attribute must be set to fixed.
3. If you have some text or other content on the page, make sure to change the z-index accordingly, such that the cursor effect does not block the content.

Here is the CSS I used for this example.

```css
.cursor {
width: 500px; 
height: 500px;
margin: -250px 0 0 -250px;
border-radius: 50%;

background: radial-gradient(rgba(18, 103, 214, 0.7) 0, rgba(0,0,0,0) 60%);

position: fixed; /* always shows the div on screen */
pointer-events: none; /* make cursor pass through */

transition: transform 0.1s ease; /* slight animation for smoothness*/
}
```
*The final result looks like this:*

![final result](/images/mouse-gradient/final.gif)

## Summary

A short summary of the steps:
1. We tracked your mouse movements using JavaScript, capturing coordinates relative to the root element.
2. We interacted with an HTML element (the cursor div) to display these coordinates.
3. We harnessed JavaScript to change CSS properties, using style.transform to translate the div based on mouse coordinates.
4. We applied styling to make the cursor element aesthetically pleasing, ensuring it passed through other elements on the page and remained fixed for visibility.

> If you need further guidance in how to use this in some popular frameworks, please visit my [github project](https://github.com/RmnSoni/personal-blogs) where I have implementations using React-Hooks and use client directive.

I hope you find this blog useful, and implement it your own project. Feel free to give feedback or reccomendations through [LinkedIn](https://linkedin.com/in/RmnSoni).

Happy coding!!