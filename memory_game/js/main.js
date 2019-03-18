

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log('You found a match!');
  } else {
    console.log('Sorry, try again.');
  }
}

var flipCard = function(cardId) {

  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  /*
  var cardOne = cards[0];
  var cardTwo = cards[2];
  cardsInPlay.push(cardOne);
  cardsInPlay.push(cardTwo);
  console.log("User flipped " + cardsInPlay[0]);
  console.log("User also flipped " + cardsInPlay[1]);
  */

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);
