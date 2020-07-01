class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(turn) {
    turn.evaluateGuess();
    turn.giveFeedback();
    if(turn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    } 
    this.turns++;
  }
    
  calculatePercentCorrect() {
    return (((this.deck.cards.length - this.incorrectGuesses.length)/this.deck.cards.length) * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return process.exit();
  }
}

module.exports = Round;