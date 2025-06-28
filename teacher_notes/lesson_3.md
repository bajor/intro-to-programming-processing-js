# Lesson 3 — Teacher Notes  
*Date taught: 24 June 2025 · 90 min*

---

## 1. Goals  
By the end of the lesson students will  

| # | Goal |
|---|------|
| 1 | Pick an exact RGB colour and pass it to `background()` in p5.js |
| 2 | Declare and update variables (number, string, boolean, array, object) |
| 3 | Distinguish **global** from **local** scope |
| 4 | Describe the roles of `setup()` (runs once) and `draw()` (runs every frame) |
| 5 | Animate by changing a variable inside `draw()` |

---

## 2. Materials  
* Browser tab open at **rgbcolorpicker.com**  
* Starter p5.js sketch (`setup()` / `draw()` scaffold)  
* Whiteboard or slides with headings *Variables*, *Scope*, *setup()* vs *draw()*  

---

## 3. Lesson Flow  

| Min | Activity | Example / Notes |
|-----|----------|-----------------|
| 0-5 | **Hook** | “How many colours can your monitor show?” (~16 M) |
| 5-15 | **RGB demo** | Pick colour on rgbcolorpicker.com → `background(12,180,255);` |
| 15-30 | **Variables** | ```js\nlet r = 12;      // number\nlet name = "Sky"; // string\nlet happy = true; // boolean\nlet shades = [32,64,128]; // array\nlet person = {x:50, c:[255,0,0]}; // object\n``` |
| 30-45 | **Scope** | ```js\nlet g = "global";\nfunction say(){\n  let l = "local";\n  console.log(g, l);\n}\nsay();\nconsole.log(l); // error\n``` |
| 45-70 | **setup() vs draw()** | ```js\nlet x = 0;\nfunction setup(){createCanvas(400,200);} \nfunction draw(){\n  background(220);\n  circle(x,100,30);\n  x += 3;           // moves right\n}\n``` |
| 70-80 | **Colour + animation** | ```js\nlet r = 0;\nfunction draw(){\n  background(r,100,200);\n  r = (r + 1) % 256;\n}\n``` |
| 80-90 | **Recap / Q&A** | Quick oral quiz |

---

