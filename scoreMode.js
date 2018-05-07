var scoreMode = {}
var cardsPerRow;
var cardSize;

var inGameInterval;
var timerValue = 0;

scoreMode.firstFrame = true;

scoreMode.screenText = 'Score mode value both time and accuracy.'

scoreMode.setup = function(){
  cardsPerRow = getTheme(appState).cardsPerRow;
  cardSize = getTheme(appState).cardDimentions;
  appState.gameState.deck = makeDeck(appState.options.numberOfCards);
  shuffle(appState.gameState.deck, true);
}

scoreMode.draw = function(){
  background('darkorange');
  
  text('total trial:'+' '+ totalTrial,400,50);
  text(Math.floor(timerValue/10),400,400);

  drawDeck(appState.gameState.deck, 0, 0, cardLayout, appState.options.theme.layout.cardsPerRow, appState.options.theme.layout.spacing);  

  push();
  textAlign(CENTER);
  textSize(8);
  if(firstClick){
    text(scoreMode.screenText, width/2+170, height/2);
  }
  pop();

}

clickToFlip = function(mouseX, mouseY, cardsPerRow, cardSize, deckSize, cardArray, spacing){
  var cords = getCords(mouseX, mouseY, cardsPerRow, cardSize, spacing, deckSize);
  var index = cords[0] + cardsPerRow*cords[1];
  if(cardArray[index].matched === false){
    if(cardArray[index].faceUp){
      cardArray[index].faceUp = false;
    }else{
      cardArray[index].faceUp = true;
    }
  
  }else{

  }  
}

clickToIndex = function(mouseX, mouseY, cardsPerRow, cardSize, deckSize, cardArray, spacing){
  var cords = getCords(mouseX, mouseY, cardsPerRow, cardSize, spacing, deckSize);
  var index = cords[0] + cardsPerRow*cords[1];
  matching.push({card: cardArray[index], index: index});
  return index;
}


getCords = function(mouseX, mouseY, cardsPerRow, cardSize, spacing, deckSize){
  var cords = [];
  //console.log(arguments)
  for(var i = 0; i < cardsPerRow; i++){
    if(cardSize.width * i + spacing.horizontal + spacing.horizontal * i < mouseX && mouseX < cardSize.width * i + cardSize.width + spacing.horizontal + spacing.horizontal * i){
      cords.push(i);
    }
  }
  for(var j = 0; j < deckSize; j++){
    if(cardSize.height * j + spacing.vertical + spacing.vertical * j < mouseY && mouseY < cardSize.height * j + cardSize.height + spacing.vertical + spacing.vertical * j){
      cords.push(j);
    }
  }
  return cords;
}

scoreMode.mousePressed = function(){
  if(firstClick === true){
    startInGameTimer();
  }
  clickToFlip(mouseX, mouseY, appState.options.theme.layout.cardsPerRow, appState.options.theme.cards.dimensions, appState.options.numberOfCards, appState.gameState.deck, appState.options.theme.layout.spacing);
  clickToIndex(mouseX, mouseY, appState.options.theme.layout.cardsPerRow, appState.options.theme.cards.dimensions, appState.options.numberOfCards, appState.gameState.deck, appState.options.theme.layout.spacing);
  findMatch();
  firstClick = false;
}

scoreMode.keyPressed = function(){
  
}