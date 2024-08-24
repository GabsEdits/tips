---
layout: post
title: Replicate the Marquee Tag with CSS
date: 2024-06-08
description: The marquee tag was a popular feature in older versions of HTML that allowed text to scroll horizontally across the screen. While the marquee tag is no longer supported in modern browsers, you can replicate its functionality using CSS animations. Learn how to create a marquee effect with CSS in this tip.
tags:
  - css
  - animation
---

The `marquee` tag was a popular feature in older versions of HTML that allowed text to scroll horizontally across the screen. While the `marquee` tag is no longer supported in modern browsers, you can replicate its functionality using CSS animations.

```css
.marquee {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation: marquee 5s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
```

In this example, we have a `p` element with the class `marquee`. The `width` property is set to `100%` to make the element take up the full width of its container. The `white-space` property is set to `nowrap` to prevent the text from wrapping to the next line. The `overflow` property is set to `hidden` to hide any text that overflows the element.

```html
<p class="marquee">This is a marquee text that scrolls from right to left.</p>
```
