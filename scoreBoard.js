var scores = [];
var inGameTime = [];
function compareNumbers(a,b){
    return b - a;
}

function sortScoreBoard(){
    scores.sort(compareNumbers);
}

function scoreCalc() {
    return (100000/timerValue)*(8/totalTrial);
}