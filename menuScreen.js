menuScreen = {};
menuScreen.firstFrame = true;

menuScreen.setup = function(state){     
    //   button.hide();
      
}
menuScreen.draw =  function(){
    background("pink");
    textSize(32);
    text("Select your difficulty?", width/5, 100);
    menuScreen.drawOption(8, width/2 - 150, 150);
    menuScreen.drawOption(16, width/2, 150);
    menuScreen.drawOption(32, width/2 + 150, 150);
    

}

menuScreen.drawOption = function(num, x, y){
    push();
    translate(x,y);
    rect(0,0,50,50);
    textAlign(CENTER, CENTER);
    text(num, 25, 25);
    pop();
}

menuScreen.mousePressed = function(){
    if(mouseX > width/2 && mouseX < width/2 +50 && mouseY > 150 && mouseY < 200){
           numberOfCards = 16;
           currentScene = "inGame";
    } 
    if(mouseX > width/2 -150 && mouseX < width/2 -150 +50 && mouseY > 150 && mouseY < 200){
           numberOfCards = 8
           currentScene = "inGame";
    }
    if(mouseX > width/2 + 150 && mouseX < width/2 + 150 +50 && mouseY > 150 && mouseY < 200){
        numberOfCards = 32;
        currentScene = "inGame";
 }
}


   
