var finishScreen = {};
finishScreen.firstFrame = true;
finishScreen.screenText = 'Game Finished!';

finishScreen.setup = function(){
    
}

finishScreen.draw = function(){
    sortScoreBoard();
    push();
    background('lightblue');
    textAlign(CENTER);
    textSize(40);
    text(finishScreen.screenText,width/2,50);
    textSize(35);
    text('click anywhere to start again',width/2,height/2);
    pop();
    push();
    textSize(20);
    for(var i = 0; i<scores.length; i++){
        text(i+1 + 'Place:' + scores[i],width/2,100+40*i);
    }
    pop();
}

finishScreen.mousePressed = function(){
    restart();
}

finishScreen.keyPressed = function(){
    restart();
}

function restart() {
    appState.currentScene = 'inGame';
    appState.matching.matchCount = 0;
    toatlTrial = 0;
    console.log('reset matchCount to' + appState.matching.matchCount);
    console.log('reset totalTrial to' + toatlTrial);
    appState.gameState.deck = makeDeck(appState.options.numberOfCards);
    shuffle(appState.gameState.deck, true);
}
