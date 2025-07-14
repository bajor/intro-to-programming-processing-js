//zadanie nr 1 




// let radius = 60

// function setup() {
//     createCanvas(400, 400);
//     background(60)
// }

// function draw() {
   
    
//     fill(29,216,219);
//     radius=60
//     if (mouseX > 200 ){
//         fill(29,217,79);    
     
// } 
//     if (mouseY < 200) {
//     (radius=20);

    
// }
// if (mouseX > 300 && mouseY >300) {
//     rect(mouseX,mouseY,20,20);
//     fill(255,0,0);
// }
// if (mouseX<20 || mouseY <20){
//     fill ( 0,0,0)
// }
//     circle(mouseX,mouseY,radius);
   

// } 




// zadanie nr 2 


var x = 0
var speed = 5


function setup (){
    createCanvas (400,400);
    

}
function draw() {
    
 

    background (4,204,17)

    
    rect(x,20,60,60,20,20,20,20)
    fill(111,4,204)
    
    x=x + speed

    
    

    if (x==width){
        speed = speed * -1
    }
    rect(160,160,60,60,20,20,20)
    fill(204,4,64)
    if (mouseX>160 && mouseX<200 && mouseY>160 && mouseY<200){ 
    
        rect(160,160,60,60,20,20,20)
        fill(29,216,200)} 
        if (mouseIsPressed){
            background(0)
            fill(255,0,0);
        }
        }

        
        
       


// to jest oscylator ponizej - zamiennik na ten ruchomy kwadrat , ale mi nie dziala z reszta 


// background(4,204,17);


// let x = width * sin(frameCount * 0.02) + 50;
// let y = 250 ;


// // line(50, y, x, y);
// rect(x, y, 50,50,20,20,20,20);
// fill(127,23,234)
// }


