var exampleCard = {face: 230, faceUp: true, id: 0, matched: false};
var cardArray = [
    {face: 0, faceUp: true, id: 1, matched: true, visible: true},
    {face: 0, faceUp: true, id: 2, matched: true, visible: false},
    {face: 1, faceUp: true, id: 3, matched: true, visible: true},
    {face: 1, faceUp: true, id: 4, matched: true},
    {face: 2, faceUp: true, id: 5, matched: true},
    {face: 2, faceUp: true, id: 6, matched: true},
    {face: 3, faceUp: true, id: 7, matched: true},
    {face: 3, faceUp: true, id: 8, matched: true},
    {face: 4, faceUp: true, id: 9, matched: true},
    {face: 4, faceUp: true, id: 10, matched: true},
    {face: 5, faceUp: true, id: 11, matched: true},
    {face: 5, faceUp: true, id: 12, matched: true},
    {face: 6, faceUp: true, id: 13, matched: true},
    {face: 6, faceUp: true, id: 14, matched: true}
];

function makeCardFull(face, faceUp, id, matched){
    if(faceUp === undefined){faceUp = false};
    if(matched === undefined){matched = false};

    return {face: face, faceUp: faceUp, id: id, matched: matched};
}

function makeCard(face, id){
    return {face: face, faceUp: true, id: id, matched: false};
}

function makeDeck(number){
    var result = []
    for(var i = 0; i < number; i++){
        result.push(makeCard(Math.floor(i/2), i+1));
    }
    return result;
}

function drawCard(card, x, y){    
    push();
    if(card.faceUp === false){
        // rectMode(CENTER);
        fill('red');
        rect(x,y,50,50,5);
    }else if(card.faceUp === true){
        fill('blue');
        rect(x,y,50,50,5);
        fill('yellow');
        textSize(30);
        text(card.face, x+25, y+35);
    }
    pop();
}

function drawDeck(arrayOfCards,n){
    push();
    arrayOfCards.forEach(function(currentValue, index, array){
        var Loc = cardLayout(index, n);
        drawCard(array[index],Loc[0],Loc[1]);
    });
    pop();
}

function cardLayout(index,n){    
    var yPos = 100 + Math.floor((index)/n) * 100;
    var xPos = (index+1) % n * 100;
    if((index + 1)%n === 0){
        xPos = n*100;
    }
    return [xPos, yPos];
}