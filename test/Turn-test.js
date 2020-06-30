const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', () => {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should return guess', () => {
    const card = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method");
    const turn1 = new Turn(card.correctAnswer, card);
    const turn2 = new Turn(card.answers[1], card);

    expect(turn1.returnGuess()).to.equal("iteration method");
    expect(turn2.returnGuess()).to.equal("accessor method");
  });

  it('should return card',  () => {
    const card = new Card(10, "Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"], "find()");
    const turn = new Turn(card.correctAnswer, card);
    
    expect(turn.returnCard()).to.be.an.instanceOf(Card);

  });

  it('should check if guess is true or false', () => {
    const card = new Card(15, "The callback function for reduce() takes in an accumulator and a current element.", ["true", "false"], true);
    const turn1 = new Turn(card.correctAnswer, card);
    const turn2 = new Turn(card.answers[1], card);

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it.skip('should return "correct!"', () => {
    const card1 = new Card();
    const card2 = new Card();
    const turn1 = new Turn();
    const turn2 = new Turn();

    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.evaluateGuess()).to.equal('incorrect!');
  });


});