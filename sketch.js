// var drawScene = {
//   "startScreen" : drawStartScreen,
//   "inGame" : drawInGame
// }
// var handlePresses = {
//   "startScreen" : mousePressedStartScreen,
//   "inGame" : mousePressedInGame
// }
var sceneMap = {
  "startScreen" : startScreen,
  "inGame" : inGame,
  "menuScreen": menuScreen
}

var numberOfCards;
var deck;
var appState = {
  options : {numberOfCards},
  gameState : {deck}
};



var canvasSize = {width : 500, height: 500};

// var currentScene = "startScreen";

function setup() {
  createCanvas(canvasSize.width, canvasSize.height);
  appState.currentScene = "menuScreen";
}

function draw() {
 if(sceneMap[appState.currentScene].firstFrame){
   sceneMap[appState.currentScene].setup(appState);
   sceneMap[appState.currentScene].firstFrame = false;
 }
 
 
  sceneMap[appState.currentScene].draw(appState);
}

function mousePressed(){
  sceneMap[appState.currentScene].mousePressed(appState);
}

// function keyPressed(){
//   sceneMap[appState.currentScene].keyPressed(appState);
// }







