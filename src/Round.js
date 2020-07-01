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
    //endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
  }


}

module.exports = Round;