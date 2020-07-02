const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  it('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should return the number of cards in deck', () => {
    const card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
    const card3 = new Card(8, "What do iterator methods take in as their first argument?", ["callback function", "current element", "an array"], "callback function");
    const card4 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], "true");
    const deck = new Deck([card1, card2, card3, card4]);
    const deck2 = new Deck([card2, card4, card1]);

    expect(deck.countCards()).to.equal(4);
    expect(deck2.countCards()).to.equal(3);
  });
});
