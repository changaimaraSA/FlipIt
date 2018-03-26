var startScreen ={};


startScreen.firstFrame = true;
var img;  // Declare variable 'img'.


startScreen.dKey = false;
startScreen.screenText = "MatchGame"
startScreen.draw = function (){
    background("lightBlue");
    textAlign(CENTER);
    textSize(60);
    text(startScreen.screenText, 180, 70);
    if(startScreen.dKey === true){
      text("Well Done!", width/2, height/2 + height/3);
    }
    // startScreen.drawClickMe(350, 350);
    // startScreen.drawClickMe(350, 430);
    // if(click1 = true){
    //   startScreen.drawStart(350, 350);
    // }
    // if(click2 = true){
    //   startScreen.drawSetting(350, 430);
    // }
    
    // image(img, 0, height/2, img.width/2, img.height/2);
    // drawDeck(testDeck, 4);
    
  }
  
//   startScreen.drawClickMe = function(x, y){
//   push();
//   translate(x,y);
//   rect(0,0,100,50);
//   textAlign(CENTER, CENTER);
//   textSize(30);
//   text("cickMe", 50, 25);
//   pop();
// }

  
// startScreen.drawStart = function(x, y){
//   push();
//   translate(x,y);
//   rect(0,0,100,50);
//   textAlign(CENTER, CENTER);
//   textSize(30);
//   text("Start", 50, 25);
//   pop();
// }

// startScreen.drawSetting = function(x, y){
//   push();
//   translate(x,y);
//   rect(0,0,100,50);
//   textAlign(CENTER, CENTER);
//   textSize(30);
//   text("Setting", 50, 25);
//   pop();
// }

startScreen.mousePressed = function(){
  currentScene = "inGame";
  // if(mouseX > 350 && mouseX < 350+100 && mouseY > 350 && mouseY < 350+50){
  //   click1 = true;
  // } 
  // if(mouseX > 350 && mouseX < 350+100 && mouseY > 430 && mouseY < 430+50){
  //   click2 = true;
  // }

}

startScreen.setup = function (state){
      // shuffle(testDeck, true);
      // button = createButton('START');
      // button.position(width/3, height/2 +50);
      // button.mouseReleased(goToMenuScreen); 
      // img = loadImage("");  // Load the image
}

// function goToMenuScreen(){
 
//   currentScene = "menuScreen";
  
// }

// startScreen.mousePressed = function (){
//     currentScene = "inGame";
//   }

startScreen.keyPressed = function(){
   if(key === 'D'){
     startScreen.dKey = true;
   }
};









