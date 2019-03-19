
//Global variables
var cards = [{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}];

var cardsInPlay = [];

//Function definitions

//Checks if the two cards are a match, then resets the gamestate automatically
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
    var currentScore = parseInt(document.getElementById("scoreBoard").innerHTML); //Get current score
    document.getElementById("scoreBoard").innerHTML = currentScore+1; //increment the score by +1
  } else {
    alert('Sorry, try again.');
  }
  resetBoard()
  cardsInPlay = [];
}

//See the card that was selected
var flipCard = function() {
  cardId = this.getAttribute("data-id");
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute("src", cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

//Creates a fresh boardstate, with unrevealed cards
var createBoard = function() {
  for (i=0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}

//Clears all cards, then calls 'createBoard'
var resetBoard = function() {
  var cardsToDelete = document.getElementById("game-board");
  while (cardsToDelete.hasChildNodes()) {
    cardsToDelete.removeChild(cardsToDelete.childNodes[0]);
  }
  createBoard();
}


//Lines to run
createBoard();
