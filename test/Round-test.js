const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {

  it('should be a function', () => {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  const card1 = new Card(12, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()");
  const card2 = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator");
  const card3 = new Card(18, "What does the callback function for the map() method take in?", ["current element", "initializer", "boolean"], "current element");
  const card4 = new Card(25, "Arrays are specialized objects where the keys are ordered numbers.", ["true", "false"], "true");
  const cards = [card1, card2, card3, card4];
  const deck = new Deck(cards);
  const round = new Round(deck);

  it('should have a property of turns with a default value of 0', () => {
    expect(round.turns).to.equal(0);
  });

  it('should have a property of incorrectGuesses, that is an empty array by default', () => {
    expect(round.incorrectGuesses).to.be.an('array').that.is.empty;
  })

  it('should return current card in the deck', () => {
    expect(round.returnCurrentCard()).to.equal(round.deck[0]);
  })

  it('should be able to add 1 to turns every turn', () => {

  })

  it('should be able to evaluate guess', () => {

  })

  it('should be able to give feedback on guess', () => {

  })

  it('should be able to store incorrect guesses by id', () => {

  })

  it('should be able to calculate percentage of correct guesses', () => {

  })

  it('should be able to end the round, and log percentage correct', () => {
    
  })

})


//expect(deck2.countCards()).to.equal(3);