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
- [ ] Install local web server - node.js - ask chat gpt for help
- [x] Create account on github.com
- [x] Install git
- [x] Config git, auth with ssh key
- [x] Clone this repo - again ask gpt for help
- [ ] Run server for with `npx live-server`
- [ ] Open browser on `127.0.0.1:8080` - check if you see our app

If you will struggle it's fine we will do it during next lesson.

---

#### LESSON 2 - 24 June 25'

DONE 1. Finishing local setup.
DONE 2. Trying up live share on codespaces.
3. Drawing shapes

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
- [ ] Your sketch runs without errors
- [ ] Code is organized and commented (if possible)
- [ ] You used color (`fill()`/`stroke()`)
- [ ] Commit your code - `git commit -m "your message"`, push to github - `git push`


#### LESSON 3 - 24 June 25'

- Try this for picking different color with RGB, change background to picked value:
https://rgbcolorpicker.com

- Variables - containers that store data values
- They can hold numbers, text, colors, or any other information  
- Your program uses them to remember and reuse values
- Scope determines where variables can be accessed in your code
- Basic JS types: numbers, strings, booleans, arrays, objects

- The `draw()` function is the main animation loop in p5.js
- It runs continuously in the background, updating your sketch frame by frame
- Each time `draw()` runs, it's like taking a new photo of your scene
- If you change values inside `draw()`, they update every frame
- Example: if you add `x = x + 10` in draw(), the object moves 10 pixels right each frame
- This creates smooth animation as values change over time
- The `setup()` function runs only once at the start, `draw()` runs forever
- Think of `draw()` as the heartbeat of your interactive sketch

Homework:

- [ ] Watch these two videos and try these things by yourself:
https://www.youtube.com/watch?v=7A5tKW9HGoM&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=8
https://www.youtube.com/watch?v=dRhXIIFp-ys&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=9
- [ ] Watch these two videos and try these things by yourself:


---

#### Notes:

[NOTES.md](NOTES.md)

---