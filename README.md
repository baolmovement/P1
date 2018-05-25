# Wireframe: The Beginning
![](https://i.imgur.com/HLNAq3j.png) 
# Design & Gameplay (Snapshots) 
### "Start Page"
![](https://i.imgur.com/xiCkAY8.png)  
### "Gameplay" 
![](https://i.imgur.com/z8MzWFf.png) 
### "Game Ends" 
![](https://i.imgur.com/LIMsXeL.png)
# **Newly Weds** 
### *A game in which 2 players can work together, or against each other*  
--- 
*You can win as a team, where the low score holder will receive some words of endearment*

**or** 

*You can lose as a team, but the high score holder will receive an individual win*

--- 
# Game Instructions 
1. Read instructions on start page. 
2. Strategize, or not, with other player. 
3. Click "Start Game" button. 
4. Each player will have 5 seconds to memorize card positions on the board before they're hidden. 
5. Players will take turns, alternating between clicks. 
6. Every card has a point value (-50,-3,-2,-1,1,2,3,50) 
7. Watch out for the "Caught Cheating" card--There are two of them! 
8. Good Luck! 

--- 

# Approach 
### *Languages used: HTML, CSS, Vanilla JS, jQuery*  
HTML -- Pretty skeletal because I wanted elements to be dynamically. The longest HTML code is in the `<section class="rules></section>` because that is a static component to the design.  

CSS -- KISS: Only played around with <10 properties for the many present selectors. I didn't plan on setting CSS property values dynamically because I thought it would be distracting. 

Vanilla JS/jQuery -- I feel like I divided the JS file, evenly, between Vanilla JS and jQuery. I used jQuery selectors for shorter,cleaner code and convenience.  I fell back on Vanilla JS for more complex functions because the logic is easier to follow, even though it is a longer code. 

Major Hurdles: The most challenging code I've had to write is the start game event listener, specifically returning a shuffled deck with cards in random positions at start of game. When I began, I used Vanilla JS and non-DRY code because I thought I could follow the logic more easily--FALSE. The code got very long and exponentially added to my confusion. With help, I was able to DRY my code, which made it more legible and clear. 

