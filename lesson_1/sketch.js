function setup() {
    createCanvas(400, 400);
    background(255);
}

function draw() {
    // nothing here – we only draw on mouse movement
}

function mouseMoved() {
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
}
