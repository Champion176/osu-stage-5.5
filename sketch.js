var formbg
var form,pointerimg,pointer,gameState,circle1,circle2,circle3,circle4,circle1img
var circles,welcome1
function preload()
{  
	formbg=loadImage ("js/download.jpg") 
    pointerimg=loadImage("js/pointer.png")
    circle1img=loadImage("js/osu circle.jpg")
    welcome= loadSound("js/welcome to osu.mp3")
    

}

function setup() {
	createCanvas(1200, 700);
form=new Form()
game=new Game()
game.play()
prompt("hi")
welcome.loop()

}


function draw() {
 background("yellow")
 if(gameState==1){background("orange")}
form.g1()
 form.display()


 //if (gameState==0) {
   
 //} 



 if(gameState==1&&frameCount%15==0)
 {
     game.bg()
 }
    
    
    


//console.log(gameState)









}

