var inGame = {}
var cardsPerRow = 4;
var cardSize = {width: 50, height: 50};

var matching = [];

inGame.firstFrame = true;

inGame.screenText = 'Scene: inGame!'

inGame.setup = function(){
  console.log('inGame setup function');
  inGame.testDeck = makeDeck(appState.options.numberOfCards);
  appState.currentScene = 'inGame';
}

inGame.draw = function(){
  push();
  background('darkorange')
  textAlign(CENTER);
  textSize(60);
  text(inGame. screenText, width/2, height/2);
  pop();

  //drawLable(mouseX, mouseY);

  drawDeck(inGame.testDeck, cardsPerRow);  
}

clickToFlip = function(mouseX, mouseY, cardsPerRow, cardSize, deckSize, cardArray){
  var cords = getCords(mouseX, mouseY, cardsPerRow, cardSize, deckSize);
  var index = cords[0] + cardsPerRow*cords[1];
  if(cardArray[index].faceUp){
    cardArray[index].faceUp = false;
  }else{
    cardArray[index].faceUp = true;
  }
}

clickToIndex = function(mouseX, mouseY, cardsPerRow, cardSize, deckSize, cardArray){
  var cords = getCords(mouseX, mouseY, cardsPerRow, cardSize, deckSize);
  var index = cords[0] + cardsPerRow*cords[1];
  console.log(index);
  matching.push(cardArray[index]);
  return index;
}


getCords = function(mouseX, mouseY, cardsPerRow, cardSize, deckSize){
  var cords = [];
  for(var i = 0; i < cardsPerRow; i++){
    if(100*i+100 < mouseX && mouseX < 100*i+100 + cardSize.width){
      cords.push(i);
    }
  }
  for(var j = 0; j < deckSize; j++){
    if(100*j+100 < mouseY && mouseY < 100*j+100 + cardSize.height){
      cords.push(j);
    }
  }
  return cords;
}

// drawLable = function (mouseX, mouseY){
//   textSize(20);
//   text(mouseX + ',' + mouseY, mouseX+ 30, mouseY);
// }

findMatch = function(){
  if(matching.length === 2){
    if(matching[0].face === matching[1].face && matching[0].id != matching[1].id){
      console.log(matching);
      console.log('matched!');

      //set two cards matched to true
      matching = [];
    }else{
      matching = [];
    }
  }
}

inGame.mousePressed = function(){
  clickToFlip(mouseX, mouseY, cardsPerRow, cardSize, appState.options.numberOfCards, inGame.testDeck);
  clickToIndex(mouseX, mouseY, cardsPerRow, cardSize, appState.options.numberOfCards, inGame.testDeck);
  findMatch();

  appState.currentScene = 'inGame2';
}

inGame.keyPressed = function(){
  
}