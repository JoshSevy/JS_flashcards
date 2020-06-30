class Round {
  constructor(cards) {
    this.deck = cards;
    this.turns = 0;//The turns count is updated, regardless of whether the guess is correct or incorrect
    this.incorrectGuesses = [];//Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
  }

  returnCurrentCard(){
    //The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round
  }

  takeTurn(){
    //method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
  }

  calculatePercentCorrect() {
    //method that calculates and returns the percentage of correct guesses
  }

  endRound(){
    //endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
  }


}

module.exports = Round;