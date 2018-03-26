var inGame ={};
inGame.firstFrame = true;
inGame.screenText = "Scene: inGame!"

inGame.setup = function (state){
    //  shuffle(testDeck, true);
    state.options.numberOfCards = 8;
    state.gameState.deck = makeDeck(numberOfCards);
    // button = createButton('BACK');
    // button.position(400, 400);
    // button.mouseReleased(goToMenuScreen); 
   }

  //  function goToMenuScreen(){
 
  //   currentScene = "menuScreen";
    
  // }

   inGame.draw = function (state) {
    background("darkred"); 
    textAlign(CENTER);
    textSize(65);
    text(inGame.screenText, width/2, height/2);
   // drawCard(testCard, 0, 0, 100, 100, 4)
   drawDeck(getDeck(state), 8);
    
  }

inGame.mousePressed= function(state){
    currentScene = "startScreen";
  }

 inGame.KeyPressed = function(state){

 } 
   
