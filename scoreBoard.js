function compareNumbers(a,b){
    return b - a;
}

function sortScoreBoard(){
    appState.gameState.score.scores.sort(compareNumbers);
}

function scoreCalc() {
    return (50000/appState.gameState.score.timerValue)+((8/appState.gameState.matchMaking.totalTrial)*687.5);
}