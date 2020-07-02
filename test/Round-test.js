const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

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
  });

  it('should return current card in the deck', () => {
    expect(round.returnCurrentCard()).to.equal(round.deck.cards[0]);
  });

  it('should be able to add 1 to turns every turn', () => {
    const turn1 = new Turn('false', card4);
    const turn2 = new Turn('current element', card3);

    round.takeTurn(turn1);
    expect(round.turns).to.deep.equal(1);

    round.takeTurn(turn2);
    expect(round.turns).to.deep.equal(2);
  });

  it('should be able to evaluate guess', () => {
    const turn1 = new Turn('false', card4);
    const turn2 = new Turn('current element', card3);
    const round = new Round(deck);

    round.takeTurn(turn1.guess);
    expect(round.turns).to.deep.equal(1);
    
    round.takeTurn(turn2.guess);
    expect(round.turns).to.deep.equal(2);
    expect(turn1.evaluateGuess()).to.be.false;
    expect(turn2.evaluateGuess()).to.be.true;
  });

  it('should be able to give feedback on guess', () => {
    const turn1 = new Turn('false', card4);
    const turn2 = new Turn('current element', card3);
    const round = new Round(deck);

    round.takeTurn(turn1.guess);
    expect(round.turns).to.deep.equal(1);
    expect(turn1.giveFeedback()).to.deep.equal('incorrect!');
    expect(turn1.evaluateGuess()).to.be.false;

    round.takeTurn(turn2.guess);
    expect(round.turns).to.deep.equal(2);  
    expect(turn2.evaluateGuess()).to.be.true;
    expect(turn2.giveFeedback()).to.deep.equal('correct!');
  });

  it('should be able to store incorrect guesses by id', () => {
    const turn1 = new Turn('forEach()', card1);
    const turn2 = new Turn('the accumulator', card2);
    const round = new Round(deck);

    round.returnCurrentCard();
    round.takeTurn(turn1.guess);
    expect(round.turns).to.deep.equal(1);
    expect(turn1.evaluateGuess()).to.be.false;
    expect(turn1.giveFeedback()).to.deep.equal('incorrect!');

    round.returnCurrentCard();
    round.takeTurn(turn2.guess);
    expect(round.turns).to.deep.equal(2);
    expect(turn2.evaluateGuess()).to.be.true;
    expect(turn2.giveFeedback()).to.deep.equal('correct!');

    expect(round.incorrectGuesses).to.be.an('array').to.have.a.lengthOf(1);
  });

  it('should be able to calculate percentage of correct guesses', () => {
    const turn1 = new Turn('forEach()', card1);
    const turn2 = new Turn('the accumulator', card2);
    const turn3 = new Turn('current element', card3);
    const turn4 = new Turn('false', card4);
    const round = new Round(deck);

    round.takeTurn(turn1.guess);
    round.takeTurn(turn2.guess);
    round.takeTurn(turn3.guess);
    round.takeTurn(turn4.guess);
    expect(round.calculatePercentCorrect()).to.be.deep.equal(50);
  });

  it('should be able to end the round, and log percentage correct', () => {
    const turn1 = new Turn('forEach()', card1);
    const turn2 = new Turn('the accumulator', card2);
    const turn3 = new Turn('current element', card3);
    const turn4 = new Turn('false', card4);
    const round = new Round(deck);
    round.takeTurn(turn1.guess);
    round.takeTurn(turn2.guess);
    round.takeTurn(turn3.guess);
    round.takeTurn(turn4.guess);
    expect(round.endRound()).to.deep.equal('** Round over! ** You answered 50% of the questions correctly!');
  });
});
