function setup() {
    createCanvas (400,400);

    backgroundSwitch = true;
}

function draw() {

    console.log(backgroundSwitch);

    if (backgroundSwitch == true) {
        background(255);
    } else if (backgroundSwitch == false) {
        background(0);
    }

    fill   (255, 251, 0,); 
    rect   (170, 150, 60, 140 );

    fill   (245,13,0); // fill do czerwonego 
    rect (180, 240, 40, 40, 20, 20, 20, 20);

    fill   (120, 200, 20); 
    rect (180, 200, 40, 40, 20, 20, 20, 20);

    fill   (100, 100, 100,); // fill do kwadratu
    rect (180, 160, 40, 40, 20, 20, 20, 20);


}

function mousePressed(){
    backgroundSwitch = !backgroundSwitch;
}
