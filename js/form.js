class Form {

    constructor() {
      //this.input = createInput("Name");
      this.greeting = createElement('h2');
      //this.title = createElement('h2');
      this.button1 = createButton('Play');
     //this.formsprite= createButton('osu')
    
    }
    hide(){
      this.greeting.hide();
     // this.button.hide();
      //this.input.hide();
      //this.title.hide();
    //this.formsprite.hide()
    
    }
  
    display(){
      background(formbg)
      
      
      
      //this.formsprite.position(500,300,)

      //stroke("black")
      //textSize(40)
      //text("OSU",600,50)
    //  this.title.html("OSU");
     // this.title.position(880,10,50,0);
      this.button1.position(850,60)
      //this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
   
      this.button1.position(displayWidth/2 + 30, displayHeight/2);
  2
      //this.button.mousePressed(()=>{
       // this.input.hide();
        
        // player.name = this.input.value();
       // playerCount+=1;
      //player.index = playerCount;
     // player.update();
    // player.updateCount(playerCount);
       // this.greeting.html("Hello " + player.name)
      //  this.greeting.position(displayWidth/2 - 70, displayHeight/4);
     // });
  
      
      
      
      
  
  
    }
    
    g1(){
    this.button1.mousePressed(()=>{
      //game.update(0)
      this.button1.hide();
        gameState=1
      
     });}
  
  
  
  
  
  }

