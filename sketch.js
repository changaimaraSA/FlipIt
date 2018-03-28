var sceneMap = {
  'startScreen': startScreen,
  'inGame': inGame,
  'inGame2': inGame2,
  'menuScreen': menuScreen
}

var numberOfCards;
var deck;
var matchCount = 0;

var appState = {
  options: {numberOfCards},
  gameState: {deck},
  matching: {matchCount}
};

var canvasSize = {width : 800, height: 600};

function setup() {
  createCanvas(canvasSize.width, canvasSize.height);
  appState.currentScene = "menuScreen";
}

function draw() {
  if(sceneMap[appState.currentScene].firstFrame){
    sceneMap[appState.currentScene].setup();
    sceneMap[appState.currentScene].firstFrame = false;
  }
  
  sceneMap[appState.currentScene].draw();
}

function mousePressed(){
  sceneMap[appState.currentScene].mousePressed();
}

function keyPressed(){
  sceneMap[appState.currentScene].keyPressed();
}