function setup() {
    createCanvas(200, 200)
    background(255)
    x_pos = 0 
    y_pos = width/2
    switchHorizontal = true
    switchVertical = true
    speed = 2
    rectSize = 10
}

function draw() {
    [x_pos, switchHorizontal] = calculateNextPosition(x_pos, switchHorizontal);
    [y_pos, switchVertical] = calculateNextPosition(y_pos, switchVertical);

    background(255);
    rect(x_pos, y_pos, rectSize, rectSize);
}


function calculateNextPosition(position, switchAxis) {
    if (position> width - rectSize) {
        switchAxis = false
    } else if (position < 0) {
        switchAxis = true
    }

    if (switchAxis){
    	position += speed
    } else {
	    position -= speed
    }

    return [position, switchAxis];
}

