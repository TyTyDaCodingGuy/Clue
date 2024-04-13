// An example of a card object
var card = {
    color: "red",
    name: "Card 1"
};

// An array to hold all cards
var cards = [card];

// Function to add a card to the board
function addCardToBoard(card) {
    var board = document.getElementById('board');

    var cardElement = document.createElement('div');
    cardElement.className = 'card ' + card.color;
    cardElement.innerText = card.name;

    board.appendChild(cardElement);
}

// Add all cards to the board
for (var i = 0; i < cards.length; i++) {
    addCardToBoard(cards[i]);
}
