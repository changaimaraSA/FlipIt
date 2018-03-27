menuScreen = {};
menuScreen.firstFrame = true;

menuScreen.setup = function(){
    appState.currentScene = 'menuScreen';
}

menuScreen.draw = function(){
    background('yellow');
    textSize(32);
    text('Select your difficulty:', width/2-300, height/2 - 100);
    menuScreen.drawOption('8',width/2-55, height/2-50);
    menuScreen.drawOption('16',width/2, height/2-50);
    menuScreen.drawOption('32',width/2+55, height/2-50);
}

menuScreen.drawOption = function(num, x, y){
    push();
    translate(x,y);
    rect(0,0,50,50);
    textAlign(CENTER,CENTER);
    fill('darkgray');
    text(num, 25, 25)
    pop();
}

menuScreen.mousePressed = function(){
    if(mouseX > width/2 && mouseX < width/2 + 50 && mouseY < height/2 && mouseY > height/2 - 50){
        appState.options.numberOfCards = 16;
    }
    if(mouseX > width/2-55 && mouseX < width/2-5 && mouseY < height/2 && mouseY > height/2 - 50){
        appState.options.numberOfCards = 8;
    }
    if(mouseX > width/2+55 && mouseX < width/2+105 && mouseY < height/2 && mouseY > height/2 - 50){
        appState.options.numberOfCards = 32;
    }
    console.log(appState.options.numberOfCards);
    appState.currentScene = 'inGame';
}

menuScreen.keyPressed = function(){

}