var scores = [85,15,15,20,24,42];

function compareNumbers(a,b){
    return a - b;
}

function sortScoreBoard(){
    scores.sort(compareNumbers)
}

