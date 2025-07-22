// Ex 1 

// let radius = 60

// function setup() {
//     createCanvas(400, 400);
//     background(60)
// }

// function draw() {
//     fill(29,216,219);
//     radius = 60;

//     if (mouseX > 200 ) {
//         fill(29,217,79);    
//     } 

//     if (mouseY < 200) {
//         (radius=20);
//     }

//     if (mouseX > 300 && mouseY >300) {
//         rect(mouseX,mouseY,20,20);
//         fill(255,0,0);
//     }

//     if (mouseX<20 || mouseY <20) {
//         fill(0,0,0);
//     }

//     circle(mouseX,mouseY,radius);
// } 


// Ex 2 

// var x = 0
// var speed = 5


// function setup (){
//     createCanvas (400,400);
// }

// function draw(){
//     background(4,204,17);
    
//     rect(x,20,60,60,20,20,20,20);
//     fill(111,4,204);
    
//     x = x + speed;

//     if (x==width){
//         speed = speed * -1
//     }

//     rect(160,160,60,60,20,20,20);
//     fill(204,4,64);

//     if (mouseX>160 && mouseX<200 && mouseY>160 && mouseY<200){ 
//         rect(160,160,60,60,20,20,20);
//         fill(29,216,200);
//     }

//     if (mouseIsPressed && (mouseX>160 && mouseX<200 && mouseY>160 && mouseY<200)){
//         background(0);
//         fill(255,0,0);
//     }

// }



// to jest oscylator ponizej - zamiennik na ten ruchomy kwadrat , ale mi nie dziala z reszta 

// background(4,204,17);


// let x = width * sin(frameCount * 0.02) + 50;
// let y = 250;


// // line(50, y, x, y);
// rect(x, y, 50, 50, 20, 20, 20, 20);
// fill(127, 23, 234)};





// function setup() {
//     createCanvas(200, 200)
//     background(255)
//     x_pos = 0 
//     y_pos = width/2
//     switchHorizontal = true
//     switchVertical = true
//     speed = 2
//     rectSize = 20
// }

// function draw() {
//     [x_pos, switchHorizontal] = calculateNextPosition(x_pos, switchHorizontal);
//     [y_pos, switchVertical] = calculateNextPosition(y_pos, switchVertical);

//     background(255);
//     rect(x_pos, 100, rectSize, rectSize);
// }


// function calculateNextPosition(position, switchAxis) {
//     if (position> width - rectSize) {
//         switchAxis = false
//     } else if (position < 0) {
//         switchAxis = true
//     }

//     if (switchAxis){
//     	position += speed
//     } else {
// 	    position -= speed
//     }

//     return [position, switchAxis];
// }






//  EX 4 





    

function setup () {
    createCanvas (400,400);
    time = 2
    var light= false
    k = true
    var on 
    background(110)
}


  


function draw () {

    // background (123,14,15);

    


    rect   (170, 150, 60, 140 );
    fill   (245,13,0); // fill do czerwonego 
        
         

    rect (180, 240, 40, 40, 20, 20, 20, 20);
    fill   (255, 251, 0,); 

       


    rect (180, 200, 40, 40, 20, 20, 20, 20);
    fill   (120, 200, 20); 

    rect (180, 160, 40, 40, 20, 20, 20, 20);
    fill   (100, 100, 100,); // fill do kwadratu
    
}

    // if mousePressed(){
    //     background(0);
    // }
    // else {background(160)}


//             if (light) {
                
//                 background(0);}
            
//                 else { 
                
//                 background (150,10,10);}






//     mouseIsPressed() {if (on){
//         light = false ;
// }
// else  {light = true;} }
                



//         function mouseIsPressed()
//         if (k){
//             background(50) ;
// }
// else  {background(80);} 
    
     

    //  if (mouseX>180 && mouseX<220 && mouseY>240 && mouseY<260){ 
    //         circle   (200, 220, 40, );
    //         fill   (1);
    //     }







// EX 5 




// function setup() {
//     createCanvas (500,500)
//     background(0)
//     x = 1

// }

// function draw() {

//     rect (mouseX, 100, 40 ,40 )
//     fill (100,100,0)

//     if ( mouseIsPressed)
        
//     {fill(200,100,0)}}