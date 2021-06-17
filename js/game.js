class Game {

    constructor() {
    }

play()
{
    pointer= createSprite(300,300,20,20)
        pointer.addImage("pointer",pointerimg);
    console.log("play")
   
   
    circle1= createSprite(70,random(1,680),40,40)
    circle2= createSprite(70,random(1,680),40,40)
    circle3= createSprite(70,random(1,680),40,40)
    circle4= createSprite(70,random(1,680),40,40)
    //circle4= createSprite(70,random(1,680),40,40)
    //circle4= createSprite(70,random(1,680),40,40)
circle1.addImage(circle1img)
circle2.addImage(circle1img)
circle3.addImage(circle1img)
circle4.addImage(circle1img)
  
circles=[circle1,circle2,circle3,circle4]
}

bg(){
    form.hide()
    //background("orange")
    var index=0,x=0,y=0
  for (var i =0; i < 4; i++) {
index=index+1

y=y+Math.round((random(1,680)))
x=x+Math.round((random(1,1100)))
circles[index-1].x=x
circles[index-1].y=y
  }
  pointer.x=mouseX
  pointer.y=mouseY

drawSprites()

}









}






