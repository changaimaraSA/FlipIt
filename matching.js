var findMatch = function(matchMaking){
  if(appState.gameState.matchMaking.matching.length >= 2){
    var firstCard = matchMaking.matching[matchMaking.matching.length-2].card;
    var secondCard = matchMaking.matching[matchMaking.matching.length-1].card;
    var firstIndex = matchMaking.matching[matchMaking.matching.length-2].index;
    var secondIndex = matchMaking.matching[matchMaking.matching.length-1].index;
    if(firstCard.face === secondCard.face && firstCard.id != secondCard.id && firstCard.matched === false && secondCard.matched === false){
      console.log('matched!');
      firstCard.matched = true;
      secondCard.matched = true;
      matchMaking.matchCount++;
      console.log('matchCount:' + matchMaking.matchCount);
      matchMaking.totalTrial++;
      matchMaking.matching = [];
    }else{
      if(firstCard.matched === false && secondCard.matched === false){
        appState.gameState.deck[firstIndex].matched = false;
        appState.gameState.deck[secondIndex].matched = false;
        setTimeout(function(){appState.gameState.deck[firstIndex].faceUp = false;
        appState.gameState.deck[secondIndex].faceUp = false;},500);
      console.log(firstIndex);
      console.log(secondIndex);
      console.log('flipped back');
      matchMaking.totalTrial++;
      matchMaking.matching = [];
      }  
    }
  }
  if(appState.gameState.matchMaking.matchCount === 8){
    appState.gameState.score.scores.push(Math.round(scoreCalc()));
    console.log('tries:'+' '+matchMaking.totalTrial+'  '+'time:'+appState.gameState.score.timerValue);
    setTimeout(function(){appState.currentScene = 'finishScreen'},1000);
  }
}