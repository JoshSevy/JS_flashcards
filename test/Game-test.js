const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Game', () => {

  it('should be a function', () => {
    const game = new Game();
    expect(Game).to.be.a('function');
  });
  
  it('should be an instance of Round', () => {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create cards for the game', () => {
    const game = new Game();
    game.createCards();
    expect(game.cards).to.be.an('array').to.have.a.lengthOf(30);
  });

  it('should create Deck, Deck should have 30 cards', () => {
    const game = new Game();
    game.createCards();
    game.createDeck();
    expect(game.deck.countCards()).to.deep.equal(30);
    expect(game.deck).to.be.an.instanceof(Deck);
  });

  it('should instantiate a new round using the Deck instanciation', () => {
    const game = new Game();
    game.createCards();
    game.createDeck();
    game.createRound();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});