import { RoundData, SessionData } from '../Config';
import { StringData } from '../data/StringData';

export const GameController = {
  selectPlayer: () => {
    let minPlay = Math.min(...SessionData.players.map(el => el.plays));
    let pool = SessionData.players.filter(el => el.plays === minPlay && !RoundData.players.includes(el.slug));

    let index = Math.floor(Math.random() * pool.length);
    let player = pool[index];
    player.plays++;
    console.log(SessionData);
    console.log(pool, index, player);

    return player.slug;
  },

  scorePlayer: (name: string, amount: number = 1) => {
    let player = SessionData.players.find(el => el.slug === name);
    player.score += amount;
  },

  resetSession: (players: string[]) => {
    SessionData.players = players.filter(el => el !== '').map(slug => ({slug, score: 0, plays: 0}));
    SessionData.plays_each = GameController.calculatePlays(SessionData.players.length);
    console.log(SessionData.players);

    RoundData.round = 0;
    RoundData.players = [];
    RoundData.cards = [[], []];
    RoundData.winner = null;
  },

  selectCharacter: () => {
    if (SessionData.characterDeck.length === 0) {
      for (let i = 0; i < StringData.CHARACTERS.length; i++) {
        SessionData.characterDeck.push(i);
      }
      // Cards.Characters.forEach(card => SessionData.characterDeck.push(card));
    }
    let index = Math.floor(Math.random() * SessionData.characterDeck.length);
    let m = SessionData.characterDeck[index];
    SessionData.characterDeck.splice(index, 1);
    return m;
  },

  selectPower: () => {
    if (SessionData.powerDeck.length === 0) {
      for (let i = 0; i < StringData.POWERS.length; i++) {
        SessionData.powerDeck.push(i);
      }
      // Cards.Powers.forEach(card => SessionData.powerDeck.push(card));
    }
    let index = Math.floor(Math.random() * SessionData.powerDeck.length);
    let m = SessionData.powerDeck[index];
    SessionData.powerDeck.splice(index, 1);
    return m;
  },

  resetRound: () => {
    RoundData.players = [];
    RoundData.cards = [[], []];
    RoundData.winner = null;
  },

  restartGame: () => {
    GameController.resetSession(SessionData.players.map(el => el.slug));
  },

  isGameOver: () => {
    return !SessionData.players.some(el => el.plays < SessionData.plays_each);
  },

  numRounds: () => {
    return SessionData.players.length * SessionData.plays_each / 2;
  },

  calculatePlays: (numPlayers: number) => {
    if (numPlayers === 2) {
      return 3;
    // } else if (numPlayers > 5 && numPlayers % 2 === 0) {
    //   return 1;
    } else {
      return 2;
    }
  },
};

GameController.resetSession(StringData.DEFAULT_NAMES);
