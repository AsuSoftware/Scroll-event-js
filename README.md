# Scroll-event-js
In this mini project i apply the scroll event, to load pages when the user scrolls down.
# How it works?
Well..when the user arrive to the bottom page, a set timeout start and loads additional data.
For this, i use:
- Scroll event
- Window inner height
- Window scrollY
- Element scroll height

# Description of the things i used for this project
The scroll event starts when the user scroll the page, after this event is fired, a variable takes the current window inner height(The height of the current window), another variable takes the element scroll height(The height of the current element).
After that, i have a condition, if the scrollY axis is equal to the height of the current element - the window height, then i call another data to add to the page.
This process is similar to the facebook app, when you go down and wait for a second to have another posts to view in the home.
