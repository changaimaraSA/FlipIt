var startScreen = {};

startScreen.firstFrame = true;

startScreen.screenText = 'Scene: startScreen';

startScreen.demoDeck = makeDeck(deckSize);

startScreen.setup = function(){
  shuffle(startScreen.demoDeck, true);
  console.log('shuffled');
  appState.currentScene = 'startScreen';
}

startScreen.mousePressed = function(){
  console.log("hey!");
  currentScene = 'inGame';
}

startScreen.draw = function(){
  push();
  background('lightblue');
  textSize(60);
  textAlign(CENTER);
  text(startScreen.screenText, width/2, height/2);
  drawDeck(startScreen.demoDeck,4);  
  pop();
}

startScreen.keyPressed = function(){

}