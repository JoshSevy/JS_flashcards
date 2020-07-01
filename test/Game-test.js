const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Game', () => {

  it('should be a function', () => {
    const game = new game();

    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const game = new Game();

    expect(game).to.be.an.instanceof(Game);
  });

  it.skip('should instantiate cards for the game', () => {

  });

  it.skip('should instantiate Cards to Deck', () => {

  })

  it.skip('should instantiate a new round using the Deck instanciation', () => {

  });

  it.skip('should invoke printMessage to display message in the CLI', () => {

  });

  it.skip('invokes the printQuestion method', () => {

  });