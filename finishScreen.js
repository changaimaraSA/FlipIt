var finishScreen = {};
var placeName = [
    '1st Place:',
    '2nd Place:',
    '3rd Place:',
    '4th Place:',
    '5th Place:',
    '6th Place:',
    '7th Place:',
    '8th Place:',
    '9th Place:',
    '10th Place:'
]
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
    text('click anywhere to start again',width/2,height/2+200);
    pop();
    push();
    textAlign(CENTER);
    textSize(20);
    for(var i = 0; i<appState.gameState.score.scores.length; i++){
        text(placeName[i] + appState.gameState.score.scores[i], width/2, 100 + 40 * i );
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
    appState.currentScene = 'scoreMode';
    appState.gameState.matchMaking.matchCount = 0;
    appState.gameState.matchMaking.totalTrial = 0;
    appState.gameState.score.timerValue = 0;
    clearInterval(inGameInterval);
    firstClick = true;
    console.log('reset matchCount to' + appState.gameState.matchMaking.matchCount);
    console.log('reset totalTrial to' + appState.gameState.matchMaking.totalTrial);
    console.log('reset timer to' + appState.gameState.score.timerValue);
    appState.gameState.deck = makeDeck(appState.options.numberOfCards);
    shuffle(appState.gameState.deck, true);
}
