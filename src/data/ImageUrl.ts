const path = './img/';

export const ImageUrl = {
  ToJam: './img/ToJam.png',
  GameHive: './img/GH-Logo.png',
  Button1: './img/Button1.png', // 140x140
  Button2: './img/Button2.png', // 200x140
  Button3: './img/Button3.png', // 300x140
  Button4: './img/Button4.png', // 440x140
  CardBack: './img/CardBack.png', // 400x450
  CardFront: './img/CardFront.png', // 400x450
  Character1: './img/Character1.png',
  Character2: './img/Character2.png',
  Power1: './img/Power1.png',
  Power2: './img/Power2.png',
  GridBG: './img/GridBG.png',
  Logo: './img/Logo.png',
  PlayerTalk1: './img/PlayerTalk1.png',
  PlayerWait1: './img/PlayerWait1.png',
  PlayerWin1: './img/PlayerWin1.png',
  PlayerLose1: './img/PlayerLose1.png',
  PlayerNeutral1: './img/PlayerNeutral1.png',
  PlayerReady1: './img/PlayerReady1.png',
  Timer: './img/Timer.png',
  TurnHighlight: './img/TurnHighlight.png',
  Audience: './img/Audience1.png',
  PortraitLeft: './img/PortraitDebbie.png',
  PortraitRight: './img/PortraitJeremy.png',
  PortraitSmall: './img/PortraitSam.png',
  OverlayWinner: './img/ScribbleWin.png',
  OverlayLoser: './img/ScribbleLose.png',
  Divider: './img/Divider.png',
  IconHome: './img/IconHome.png',

  InfoPages: [
    './img/Logo1.png', './img/HTP_Host1.png', './img/HTP_Cards1.png', './img/HTP_Player1.png', './img/HTP_Audience1.png', './img/HTP_Winner1.png',
  ],

  Characters: [] as string[],
  Powers: [] as string[],
};

export function setupImageCards(numChars: number, numPowers: number) {
  for (let i = 1; i <= numChars; i++) {
    ImageUrl.Characters.push(`./img/cards/Character${i}.png`);
  }
  for (let i = 1; i <= numPowers; i++) {
    ImageUrl.Powers.push(`./img/cards/Power${i}.png`);
  }
}
