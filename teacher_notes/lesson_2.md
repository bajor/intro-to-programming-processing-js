# Lesson: Drawing Shapes in p5.js

## 1. Introduction
- What is p5.js?
- Difference between `setup()` and `draw()`
- What you'll learn today: drawing lines, rectangles, ellipses; using coordinates and colors

## 2. Coordinate System & Canvas
- `createCanvas(400, 400)`
- Origin at (0,0) — top-left
- Show example: draw a small red dot at (100, 100)

**Exercise:**  
Draw three dots at known coordinates. Ask: which is higher/lower? More left/right?

## 3. Basic Shapes
- `line(x1, y1, x2, y2)`
- `rect(x, y, w, h)`
- `ellipse(x, y, w, h)`

**In-Class Exercises:**
- Draw a smiley face (two ellipses for eyes, one ellipse for head, a `line()` for mouth)
- Draw a stick figure using `line()` and `ellipse()`
- Draw a robot: use rectangles only

## 4. Shape Styling
- `stroke()`, `noStroke()`
- `fill()`, `noFill()`

**Exercise:**
- Give the stick figure a red head and no arms (`noStroke()`, colored ellipse)
- Change fill/stroke colors and observe differences

## 5. Draw Order & Layers
- Shapes drawn later go on top
- Show layering by overlapping shapes in different order

**Exercise:**
- Draw three overlapping circles with different `fill()` colors and try changing order

## 6. Mini Project
**Goal:** Recreate a basic emoji face  
- Circle face  
- Two eyes  
- Mouth (using `arc()` or `line()`)

Help students make it personal: different eye positions, different face shapes, add accessories.

## Bonus
- Add `mouseX`, `mouseY` to move elements
- Animate something simple by changing position inside `draw()`
