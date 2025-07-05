function setup() {
    createCanvas(400, 400);

    background(0,0,0,1);
  
    
}

function draw() {
    background(139,0,255,1);
    let c1 = color(255, 102, 0);

    fill(c1);
    
    let c2 = color(60);
    
    fill(c2);
    
    strokeWeight(10);
    stroke(255, 204, 100);
    rect(100, 150, 200, 200);
    fill(255,0, 0,125);
    rect(125,200,50,50,10,10,10,10)
    rect(225,200,50,50,10,10,10,10);
    triangle(100,150,300,150,200,50,);
    rect(175,250,50,100,10,10,0,0);
}
