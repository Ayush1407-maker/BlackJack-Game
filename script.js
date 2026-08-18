let Cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let CardEl = document.getElementById("cards-el");

let player = {
  Name: "Ayush",

  Chips: 150,
};

let playerData = document.getElementById("player-el");
playerData.textContent = player.Name + ": $" + player.Chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  Cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  CardEl.textContent = "Cards: ";

  for (let i = 0; i < Cards.length; i++) {
    CardEl.textContent += Cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "You can draw a new card";
  } else if (sum === 21) {
    message = "Wooh, you've got the blackjack";
    hasBlackJack = true;
  } else {
    message = "Oh! You have lost the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();

    sum += card;
    Cards.push(card);

    renderGame();
  }
}

