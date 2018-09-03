

![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Project-1-wdi - Minesweeper

For our first project, we were given four days to design and build an in-browser game using HTML, CSS and JavaScript including the jQuery library).

I initially started off with the idea to make Tetris and after several days I had made some headway into the complex maths involved in checking cells as well as the dropping blocks so I made an executive decision to switch to a Minesweeper game where I could use similar logic to create a fun game within the time limit we had been set.

###### Minesweeper - What is it?
Minesweeper is a game where the objective is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them. The board reveals clues about the number of neighbouring mines in each field with the ability to add flags to suspected areas that include mines.


<img src="https://imgur.com/P24oHfd.jpg" width="700">


###### Click functionality
With a left click you can reveal the board this also runs an algorithm to check surrounding cells for a value be it a number, or a blank. If a blank is returned then a loop will occur and check the neighbours of that square until only numbers are return. This is how the cascading of tiles appears in Minesweeper. Below I have left a snippet of the code involved in this process

```
Check Mine code
```

<img src="https://imgur.com/zoassme.gif" width="700">


###### What if you hit a mine?
The aim of the game is to avoid mines but of course if your unlucky enough to hit one then it's game over. A message will appear saying Better Luck next time in the hope to goad you to return to try your luck again.

<img src="https://imgur.com/dK9kR3f.gif" width="700">



###### What was a win
I'm proud of the cascading tiles as I thought it was quite a cool piece of code to piece together
###### What was a challenge
I'd have to say that having an idea what I wanted to do then changing was a tough decision to make but shows how I can adapt myself to the needs of the situation
###### What would I do differently
I think I'd like to try a project with a different set of challenges that are less math orientated or try and adapt the Minesweeper game to
###### What additional features would I add
I would add several new features such as the ability to record the number of clicks taken to set a high score board or to create a back to back 2-player system where players take it in turns to beat the board as fast as they can
