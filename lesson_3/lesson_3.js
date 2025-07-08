let radius = 100

function setup() {
    createCanvas(400, 400);
    background(60);
}

function draw() {
    fill(0);
    // noStroke
    fill(255,50);
    circle(mouseX,mouseY,radius);
    // size = sin(radius)
    // radius = radius * size
}

   
function mousePressed(){
    radius = radius/2
}

