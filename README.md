## Where do we learn from:

https://www.youtube.com/watch?v=HerCR8bw_GE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

## We have ended at: 

**1.1**

# Lessons

#### LESSON 1 - 16 June 25'

Create local setup on your computer:
- [ ] Watch this video 

https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2

**Homework:**

As you see we are going with slightly different setup, deep diving into more processional tools from day 1.
- [x] Install Visual Studio Code
- [x] Install p5.vscode extension in Visual Studio Code
- [x] Install Live Share extension in Visual Studio Code
- [x] Install local web server - node.js - ask chat gpt for help
- [x] Create account on github.com
- [x] Install git
- [x] Config git, auth with ssh key
- [x] Clone this repo - again ask gpt for help
- [x] Run server for with `npx live-server`
- [x] Open browser on `127.0.0.1:8080` - check if you see our app

If you will struggle it's fine we will do it during next lesson.

---

#### LESSON 2 - 24 June 25'

- [x] Finishing local setup.
- [x] Trying up live share on codespaces.
- [x] Drawing shapes

**Homework**

- [ ] Learn basic shortcuts in mac to change desktops, move sth to another desktop etc - just how to do it with touchpad.

Open VsCode
- likely you are at home (cd ~) directory
- cd into our repo, so `cd repos/i` and press Tab, then enter
- now `code .` - it will open VsCode at direcotry of this repo
- run `git pull` to pull latest changes

Continue in terminal:
- `cd lesson_2`
- `npx live-server`
- Now open safari at: `http://127.0.0.1:8080`
- Now you are ready to develop. Edit just file `lesson_2.js` and see live changes in your browser. 
- Follow along this tutorial, experiment, try to copy techer
https://www.youtube.com/watch?v=c3TeLi6Ns1E&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=4
- Then move to the main homework

Pick one drawing task below using p5.js. Apply:
- At least 3 types of shapes (`rect`, `ellipse`, `line`)
- At least one `fill()` and one `stroke()`
- Attention to draw order

### Choose one option and draw:

### 🏠 Option 1: Draw a house
Use rectangles, lines, and circles to make a simple house scene.

### 🚗 Option 2: Draw a car
Use rectangles for the body and windows; circles for wheels.

### 🧍 Option 3: Draw a stick person
Use `line()` and `ellipse()` to create a simple person.

### 🌳 Option 4: Draw a nature scene
Include at least one tree, sun, and other elements of your choice.

### ✅ Submission Checklist:
- [x] Your sketch runs without errors
- [x] You used color (`fill()`/`stroke()`)
- [x] Commit your code - `git commit -m "your message"`, push to github - `git push`

---

#### LESSON 3 - variables

- [x] Try this for picking different color with RGB, change background to picked value:
https://rgbcolorpicker.com

- [x] Commenting out and comments in code

- Variables - containers that store data values
- They can hold numbers, text, colors, or any other information  
- [x] Your program uses them to remember and reuse values
- [x] Scope determines where variables can be accessed in your code
- [x] Basic JS types: numbers, strings, booleans, arrays, objects

- [x] The `draw()` function is the main animation loop in p5.js
- [x] It runs continuously in the background, updating your sketch frame by frame
- [x] Each time `draw()` runs, it's like taking a new photo of your scene
- [x] If you change values inside `draw()`, they update every frame
- [x] Example: if you add `x = x + 10` in draw(), the object moves 10 pixels right each frame
- [x] This creates smooth animation as values change over time
- [x] The `setup()` function runs only once at the start, `draw()` runs forever

**Homework:**

- [x] Read my review of your pull request on github and adjust code. After that - please respond to my coments that you have done that.
- [x] Watch these two videos and try these things by yourself:
https://www.youtube.com/watch?v=7A5tKW9HGoM&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=8
https://www.youtube.com/watch?v=dRhXIIFp-ys&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=9

All tasks relate directly to the two Coding Train videos on variables in p5.js:

- [x] **Follow-Along Sketch** – Re-watch video #8. Recreate the sketch that uses `mouseX` and `mouseY` to draw a circle that follows the cursor.
- [ ] **Make-Your-Own Variable Animation** – Using ideas from video #9, create a variable (e.g. `xPos`) that starts at 0 and increases every frame inside `draw()`. 

---

#### LESSON 4 - if statements

- [ ] Analyze homework. Show how I have done something similar, talk about functions.

Exercises during lesson:
- Draw a circle that changes color when mouseX < width / 2
- Make the circle bigger when mouseY > height / 2
- Add `else` and `else if` to divide screen into 3 horizontal zones with different background colors
- Use `&&` to trigger a change only when mouseX and mouseY are both in a region
- Use `||` to trigger a change if either X or Y is in a region

**Homework**:
- [ ] Watch these videos:
https://www.youtube.com/watch?v=1Osb_iGDdjk&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=14
https://www.youtube.com/watch?v=r2S7j54I68c&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=16

Ex 1
- [ ]Create a rectangular "button" that:
  - [ ]Changes color when clicked
  - [ ]Remains in that color even if the mouse moves away
  - [ ]Toggles color each time it's clicked (on/off behavior)
  - [ ]When done create PR
Hint: - use `function mousePressed()`

Ex 2
- [x] Draw a square that moves across the screen. <br>• When the square reaches the right edge, reset the variable so the square starts again on the left.

- Both exercises could be done in the same scirpt.
- [ ] When done create PR.

Ex 3
- [x] Use if and if else to create sketch.

---

#### LESSON 5

- Recap
- Analyze homework, create PR
- Show my solution and analyze it

**Homework**

- First correct Ex 1 from previous lesson in the PR.

- Then `git checkout main`, `git checkout -b homework_5` so - create new branch from main, do following exercises in `lesson_5` directories.

Ex 4  
- [ ] Create a "traffic light" with three vertically stacked circles (red, yellow, green).  
  - [ ] Each time you click, only one light is "on" (bright color), cycling through red → yellow → green → red...

Ex 5  
- [ ] Draw a rectangle that follows the mouse horizontally (x-axis), but stays fixed vertically (y-axis).  
  - [ ] When the mouse is pressed, the rectangle should change color.

Ex 6  
- [ ] Make a bouncing ball:  
  - [ ] Draw a circle that moves diagonally.  
  - [ ] When it hits any edge of the canvas, it should "bounce" (reverse direction on that axis).

- Try to do all exercises in one script if possible.
- [ ] When done, create a PR.
---

#### LESSON 6  - funcitons, random, map

---

#### Notes:

[NOTES.md](NOTES.md)

---
