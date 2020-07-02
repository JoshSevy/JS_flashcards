const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let card = this.returnCurrentCard();
    let turn = new Turn(guess, card);

    turn.evaluateGuess();

    if (turn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    } 
    
    this.turns++;
    return turn.giveFeedback();
  }
    
  calculatePercentCorrect() {
    return Math.floor((((this.deck.cards.length - this.incorrectGuesses.length) / this.deck.cards.length) * 100));
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return process.exit();
  }
}

module.exports = Round;