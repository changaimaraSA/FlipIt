// makeCard(face, id) - returns a single card object with the respective face and id
// makeDeck(numberOfCards) - returns an array of paired card objects
// shuffle(arrOfCards) - shuffles an array of cards in place. Nevermind. We'll just use P5's shuffle function.
// drawCard(card, x , y) - draws a  card to the canvas. Should be able to handle being faceUp or faceDown. This version should be very simple and just for the purpsoses of testing. Just show the card's face when face up.
// drawDeck(arrOfCards) - draws all the cards to the canvas.

// * id - a unique number given to every card, ranges from 0 to numberOfCards - 1
// * face - a non-unique id number that matches one other card in the deck, ranges from 0 to numberOfCards/2 - 1
// * faceUp - a boolean (true/false), whether the card is face side up
// * matched - a boolean, whether the card has been matched yet or not

var testCard = {id: 5, face: 10, faceUp: true, matched: false};
var testDeck = makeDeck(16);


function makeCard(id, face, faceUp, matched){
    if(faceUp === undefined){ faceUp = false};
    if(matched === undefined){ matched = false};
        return {id: id, face: face, faceUp: faceUp, matched: matched};
    }

function makeDeck(numberOfCards){ 
    var result = [];
    for(var i = 0, f = 0; i < numberOfCards; f++){
        result.push(makeCard(i++, f, true, false));
        result.push(makeCard(i++, f, true, false));
    }
   return result;
}

function drawCard(card, x, y, cardWidth, cardHeight, cardStroke){
push();
translate(x,y);
fill("pink")
rect(0, 0, cardWidth, cardHeight, 8);
if(card.faceUp === true){
    fill("black");
    textSize(30);
    textAlign(CENTER,CENTER);
    text(card.face, cardWidth/2, cardHeight/2);

}else if(card.faceUp === false){
    noStroke();
    fill("purple");
    rect(0, 0, cardWidth, cardHeight, 8);
}
pop();
}

// function cardLayout(id){
//     var x = id*85;
//     var y = 50;
//     return [x,y];
// }

function cardLayout(index, cardPerRow){
    var x = index % cardPerRow * 84;
    if(index % cardPerRow == 0){
         x === 0;
    }
    var y = Math.floor(index/cardPerRow) * 83;
    return [x, y];
}


function drawDeck(arrOfCards, cardPerRow){

     for(var i = 0; i < arrOfCards.length; i++){
     drawCard(arrOfCards[i], cardLayout(i, cardPerRow)[0], cardLayout(i, cardPerRow)[1], 70, 75, 70);
 }
    
}


//drawDeck([{id: 0, face: 0, faceup}....])