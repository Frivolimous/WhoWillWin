import { Facade } from '..';
import { TimerCircle } from '../components/domui/TimerCircle';
import { RoundData, SessionData } from '../Config';
import { El } from '../services/ElementFactory';
import { GameController } from '../services/GameController';
import { MainUI } from './MainUI';
import { ScoreUI } from './ScoreUI';
import { BaseUI } from './_BaseUI';

export class RoundUI extends BaseUI {
  public timer: TimerCircle;

  private leftSection: HTMLDivElement;
  private rightSection: HTMLDivElement;
  private bottomTitle: HTMLDivElement;
  private bottomText: HTMLDivElement;

  private leftVote: HTMLButtonElement;
  private rightVote: HTMLButtonElement;
  private pauseButton: HTMLButtonElement;
  private skipButton: HTMLButtonElement;

  private paused = false;
  private winner: number;

  constructor() {
    super();
    this.element = El.makeDiv('round-ui');

    let round = ++RoundData.round;
    GameController.resetRound();
    RoundData.players[0] = GameController.selectPlayer();
    RoundData.players[1] = GameController.selectPlayer();
    RoundData.cards[0][0] = GameController.selectCharacter();
    RoundData.cards[1][0] = GameController.selectCharacter();
    RoundData.cards[0][1] = GameController.selectPower();
    RoundData.cards[1][1] = GameController.selectPower();

    let title = El.makeText(`Round ${round}`, 'title');
    let topSection = El.makeDiv('round-top');
    let bottomSection = El.makeDiv('round-bottom');
    this.leftSection = El.makeDiv('player-section');
    this.rightSection = El.makeDiv('player-section');
    let leftCards = El.makeDiv('card-section');
    let rightCards = El.makeDiv('card-section');
    this.bottomTitle = El.makeText('Who Will Win?', 'title');
    this.bottomText = El.makeText('Get ready to fight...', 'big-text');

    let leftName = El.makeText(RoundData.players[0], 'name-title');
    let rightName = El.makeText(RoundData.players[1], 'name-title');
    let leftCard1 = El.makeDiv('card');
    let leftCard2 = El.makeDiv('card');
    let rightCard1 = El.makeDiv('card');
    let rightCard2 = El.makeDiv('card');
    leftCard1.innerHTML = RoundData.cards[0][0];
    leftCard2.innerHTML = RoundData.cards[0][1];
    rightCard1.innerHTML = RoundData.cards[1][0];
    rightCard2.innerHTML = RoundData.cards[1][1];
    let vs = El.makeText('vs', 'title');

    let home = El.makeButton('Home', 'home-button', this.navHome);

    let voteContainer = El.makeDiv('vote-container');

    this.leftVote = El.makeButton(`${RoundData.players[0]} Wins`, 'vote-button', () => this.setWinner(0));
    this.rightVote = El.makeButton(`${RoundData.players[1]} Wins`, 'vote-button', () => this.setWinner(1));

    this.leftVote.style.display = 'none';
    this.rightVote.style.display = 'none';
    this.timer = new TimerCircle();
    this.skipButton = El.makeButton('skip', 'small-button', this.timer.endNow);
    this.pauseButton = El.makeButton('pause', 'small-button', this.pauseTimer);

    El.addElements(this.element, title, topSection, bottomSection, home, this.timer.element);
    El.addElements(topSection, this.leftSection, vs, this.rightSection);
    El.addElements(bottomSection, this.bottomTitle, this.bottomText, voteContainer);
    El.addElements(this.leftSection, leftName, leftCards);
    El.addElements(this.rightSection, rightName, rightCards);
    El.addElements(leftCards, leftCard1, leftCard2);
    El.addElements(rightCards, rightCard1, rightCard2);
    El.addElements(voteContainer, this.leftVote, this.rightVote);
    El.addElements(bottomSection, this.skipButton, this.pauseButton);

    this.phaseIntro();
  }

  private phaseIntro = () => {
    this.bottomTitle.innerHTML = 'Who Will Win?';
    this.bottomText.innerHTML = 'Get ready to fight...';
    this.timer.reset(10).onComplete(this.phaseLeftPlay).start();
  }

  private phaseLeftPlay = () => {
    this.bottomTitle.innerHTML = `${RoundData.players[0]}'s Turn!`;
    this.bottomText.innerHTML = `
      - Tell us about your character<br>
      - What can you do?<br>
      - What do you do?<br>
      - How do you beat your foe?`;
    this.timer.reset(15).onComplete(this.phaseRightPlay).start();
  }

  private phaseRightPlay = () => {
    this.bottomTitle.innerHTML = `${RoundData.players[1]}'s Turn!`;
    this.bottomText.innerHTML = `
      - Tell us about your character<br>
      - What can you do?<br>
      - What do you do?<br>
      - How do you respond to your foe?`;
    this.timer.reset(15).onComplete(this.phaseVote).start();
  }

  private phaseVote = () => {
    this.bottomTitle.innerHTML = `Who will win?`;
    this.bottomText.innerHTML = `Cast your vote!`;
    this.leftVote.style.removeProperty('display');
    this.rightVote.style.removeProperty('display');
    this.timer.reset(60).onComplete(this.navEnd).start();
  }

  private setWinner(player: number) {
    if (this.winner === player) return;

    this.winner = player;
    if (player === 0) {
      this.leftVote.classList.add('highlighted');
      this.rightVote.classList.remove('highlighted');
    } else {
      this.rightVote.classList.add('highlighted');
      this.leftVote.classList.remove('highlighted');
    }
  }

  private navHome = () => {
    Facade.navTo(new MainUI());
  }

  private navEnd = () => {
    RoundData.winner = this.winner || 0;
    GameController.scorePlayer(RoundData.players[RoundData.winner]);
    Facade.navTo(new ScoreUI());
  }

  private pauseTimer = () => {
    this.paused = !this.paused;

    if (this.paused) {
      this.pauseButton.innerHTML = 'resume';
      this.timer.pause();
    } else {
      this.pauseButton.innerHTML = 'pause';
      this.timer.start();
    }
  }
}
