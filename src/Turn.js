class Turn {
  constructor(guess, card){
    this.guess = guess;
    this.card = card;
    this.correct;
  }

  returnGuess() {
  return this.guess;
  }

  returnCard() {
  return this.card;
  }

  evaluateGuess() {
    if(this.guess === this.card.correctAnswer) {
      return this.correct = true;
    } else {
      return this.correct = false;
    }
// return if guess is true(correct) or false(incorrect)
}

  giveFeedback() {
    if(this.correct === true) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
// return either 'incorrect!' or 'correct!
  }
};

module.exports = Turn;