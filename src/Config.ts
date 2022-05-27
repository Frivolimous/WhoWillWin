export const SessionData = {
  players: [] as IPlayer[],

  cardChoice: 'Random',
  gameStructure: 'Round Robin',
  gameLength: 'Play Twice',

  timing: {
    intro: 10,
    player_left: 20,
    player_right: 20,
    open: 30,
    vote: 20,
    vote2: 10,
    leaderboard: 10,
  },

  blinkTiming: {
    intro: 3,
    player_left: 3,
    player_right: 3,
    open: 3,
    vote: 5,
    vote2: 10,
    leaderboard: 3,
  },

  open_phase: true,
  prepends: false,

  characterDeck: [] as number[],
  powerDeck: [] as number[],

  plays_each: 2,
};

export const RoundData = {
  round: 0,
  players: [] as string[],
  cards: [[], []] as number[][],
  winner: null as number,
};

interface IPlayer {
  slug: string;
  score: number;
  plays: number;
}
