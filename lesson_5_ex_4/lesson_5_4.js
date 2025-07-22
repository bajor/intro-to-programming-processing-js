function setup() {
    createCanvas (400,400);

    stateCounter = 0;
}

function draw() {
    // dzielenie z resztą, a.k.a. modulo
    state = stateCounter % 3;

    console.log(stateCounter);
    console.log(state);
    console.log("--------");

    // green 
    if (state == 0) {
        fill(0, 255, 0); 
        rect(180, 200, 40, 40, 20, 20, 20, 20);
    }
        
    // yellow  
    if (state == 1) {
        fill(50); 
        rect(170, 150, 60, 140);
    }

    // red
    if (state == 2) {
        fill(255, 0, 0);
        rect(180, 240, 40, 40, 20, 20, 20, 20);
    }

    // yellow  
    fill(255, 251, 0); 
    rect(180, 160, 40, 40, 20, 20, 20, 20);

}

function mousePressed(){
    stateCounter++;
}
