export const SessionData = {
  players: [] as IPlayer[],

  cardChoice: 'Random',
  gameStructure: 'Round Robin',
  gameLength: 'Play Twice',

  characterDeck: [] as string[],
  powerDeck: [] as string[],
};

export const RoundData = {
  round: 0,
  players: [] as string[],
  cards: [[], []] as string[][],
  winner: null as number,
};

interface IPlayer {
  slug: string;
  score: number;
  plays: number;
}
