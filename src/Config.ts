export const SessionData = {
  players: [] as IPlayer[],

  cardChoice: 'Random',
  gameStructure: 'Round Robin',
  gameLength: 'Play Twice',

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
