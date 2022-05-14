import { Facade } from '..';
import { TimerCircle } from '../components/TimerCircle';
import { RoundData, SessionData } from '../Config';
import { StringData } from '../data/StringData';
import { JMTween } from '../JMGE/JMTween';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El, ElFactory } from '../services/ElementFactory';
import { GameController } from '../services/GameController';
import { EndUI } from './EndUI';
import { MainUI } from './MainUI';
import { BaseUI } from './_BaseUI';

export class RoundUI extends BaseUI {
  public timer: TimerCircle;

  private title: HTMLDivElement;
  private topSection: HTMLDivElement;
  private bottomSection: HTMLDivElement;
  private leftSection: HTMLDivElement;
  private rightSection: HTMLDivElement;
  private names: HTMLDivElement[] = [];
  private cards: HTMLDivElement[][] = [[], []];

  private bottomTitle: HTMLDivElement;
  private bottomText: HTMLDivElement;
  private leftVote: HTMLButtonElement;
  private rightVote: HTMLButtonElement;
  private tieVote: HTMLButtonElement;
  private vs: HTMLDivElement;

  private leaderboard: HTMLElement;
  private roundCount: HTMLDivElement;

  private canVote: boolean = false;
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

    this.title = El.makeText(`${StringData.ROUND_TITLE} ${round}`, 'title');
    this.topSection = El.makeDiv('round-top');
    this.bottomSection = El.makeDiv('round-bottom');
    this.bottomTitle = El.makeText('', 'round-title');
    this.bottomText = El.makeText('', 'round-text');
    this.roundCount = El.makeText(`Rounds: ${RoundData.round} / ${GameController.numRounds()}`, 'small-text');
    [this.leftSection, this.names[0], this.cards[0][0], this.cards[0][1]] = ElFactory.makePlayerSection(RoundData.players[0], RoundData.cards[0][0], RoundData.cards[0][1]);
    [this.rightSection, this.names[1], this.cards[1][0], this.cards[1][1]] = ElFactory.makePlayerSection(RoundData.players[1], RoundData.cards[1][0], RoundData.cards[1][1]);
    this.vs = El.makeText(StringData.ROUND_VS, 'round-vs');
    let voteContainer = El.makeDiv('vote-container');
    this.leftVote = El.makeButton(`${RoundData.players[0]} ${StringData.ROUND_WINS}`, 'vote-button', () => this.setWinner(0));
    this.rightVote = El.makeButton(`${RoundData.players[1]} ${StringData.ROUND_WINS}`, 'vote-button', () => this.setWinner(1));
    this.tieVote = El.makeButton(StringData.ROUND_TIE, 'vote-button', () => this.setWinner(-1));
    this.leftVote.style.display = 'none';
    this.rightVote.style.display = 'none';
    this.tieVote.style.display = 'none';
    this.timer = new TimerCircle();

    Facade.showHome(true);

    El.addElements(this.element, this.title, this.topSection, this.bottomSection, this.timer.element);
    El.addElements(this.bottomSection, this.bottomTitle, this.bottomText, voteContainer, this.tieVote);
    El.addElements(voteContainer, this.leftVote, this.rightVote);

    this.phaseIntro();
  }

  public navIn() {
    animateDiv(this.title, AnimationType.GROW_IN);
    // animateDiv(this.element, AnimationType.GROW_IN);
    window.addEventListener('keydown', this.onKeyDown);
  }

  public navOut() {
    this.timer.destroy();
    El.destroy(this.element);
  //   animateDiv(this.element, AnimationType.SHRINK_OUT, 200);
  //   new JMTween({}, 1000).to({}).start().onComplete(() => {
  //     this.element.parentElement.removeChild(this.element);
  //   });
    window.removeEventListener('keydown', this.onKeyDown);
  }

  private phaseIntro = () => {
    new JMTween({}, 300).to({}).start().onComplete(() => {
      El.addElements(this.topSection, this.leftSection, this.vs, this.rightSection);
      animateDiv(this.leftSection, AnimationType.GROW_IN);
      animateDiv(this.names[0], AnimationType.BIG_IN, 0);
      animateDiv(this.vs, AnimationType.GROW_IN, 1000);
      animateDiv(this.rightSection, AnimationType.GROW_IN, 1500);
      animateDiv(this.names[1], AnimationType.BIG_IN, 1500);
      this.cards[0][0].classList.add('card-back-character');
      this.cards[0][1].classList.add('card-back-power');
      this.cards[1][0].classList.add('card-back-character');
      this.cards[1][1].classList.add('card-back-power');
      animateDiv(this.cards[0][0], AnimationType.GROW_IN, 2500, () => animateDiv(this.cards[0][0], AnimationType.FLIP_A, 0, () => {
        this.cards[0][0].classList.remove('card-back-character');
        this.cards[0][0].innerHTML = RoundData.cards[0][0];
        animateDiv(this.cards[0][0], AnimationType.FLIP_B);
      }));
      animateDiv(this.cards[0][1], AnimationType.GROW_IN, 2600, () => animateDiv(this.cards[0][1], AnimationType.FLIP_A, 0, () => {
        this.cards[0][1].classList.remove('card-back-power');
        this.cards[0][1].innerHTML = RoundData.cards[0][1];
        animateDiv(this.cards[0][1], AnimationType.FLIP_B);
      }));
      animateDiv(this.cards[1][0], AnimationType.GROW_IN, 3000, () => animateDiv(this.cards[1][0], AnimationType.FLIP_A, 0, () => {
        this.cards[1][0].classList.remove('card-back-character');
        this.cards[1][0].innerHTML = RoundData.cards[1][0];
        animateDiv(this.cards[1][0], AnimationType.FLIP_B);
      }));
      animateDiv(this.cards[1][1], AnimationType.GROW_IN, 3100, () => animateDiv(this.cards[1][1], AnimationType.FLIP_A, 0, () => {
        this.cards[1][1].classList.remove('card-back-power');
        this.cards[1][1].innerHTML = RoundData.cards[1][1];
        animateDiv(this.cards[1][1], AnimationType.FLIP_B);
      }));
      animateDiv(this.names[0], AnimationType.BIG_OUT, 5000);
      animateDiv(this.names[1], AnimationType.BIG_OUT, 5000);
      this.bottomTitle.innerHTML = StringData.ROUND_INTRO_TITLE;
      this.bottomText.innerHTML = StringData.ROUND_INTRO_TEXT;
      animateDiv(this.bottomTitle, AnimationType.GROW_IN, 3500);
      animateDiv(this.bottomText, AnimationType.GROW_IN, 3800, () => this.timer.canSkip = true);
    });
    // El.addElements(this.topSection, this.leftSection, this.vs, this.rightSection);
    this.timer.reset(10).onComplete(this.phaseLeftPlay).start();
    this.timer.canSkip = false;
  }

  private phaseLeftPlay = () => {
    this.bottomTitle.innerHTML = `${RoundData.players[0]}, ${StringData.ROUND_PLAY_TITLE}`;
    this.bottomText.innerHTML = StringData.ROUND_LEFT_TEXT;
    this.leftSection.classList.add('highlighted');
    this.timer.reset(15).onComplete(this.phaseRightPlay).start();
    this.timer.canSkip = true;
    this.timer.element.style.position = 'relative';
    this.timer.element.style.top = '0px';
    this.leftSection.appendChild(this.timer.element);
    animateDiv(this.bottomTitle, AnimationType.SPIN);
    animateDiv(this.leftSection, AnimationType.PULSE);
  }

  private phaseRightPlay = () => {
    this.bottomTitle.innerHTML = `${RoundData.players[1]}, ${StringData.ROUND_PLAY_TITLE}`;
    this.bottomText.innerHTML = StringData.ROUND_RIGHT_TEXT;
    this.leftSection.classList.remove('highlighted');
    this.rightSection.classList.add('highlighted');
    this.timer.reset(15).onComplete(this.phaseVote).start();
    this.timer.element.style.position = 'relative';
    this.timer.element.style.top = '0px';
    this.rightSection.appendChild(this.timer.element);
    animateDiv(this.bottomTitle, AnimationType.SPIN);
    animateDiv(this.rightSection, AnimationType.PULSE);
  }

  private phaseVote = () => {
    this.canVote = true;
    this.bottomTitle.innerHTML = StringData.ROUND_VOTE_TITLE;
    this.bottomText.innerHTML = StringData.ROUND_VOTE_TEXT;
    this.rightSection.classList.remove('highlighted');
    this.leftVote.style.removeProperty('display');
    this.rightVote.style.removeProperty('display');
    this.tieVote.style.removeProperty('display');
    this.timer.reset(50).onComplete(this.phaseVote2).start();
    this.timer.element.style.removeProperty('position');
    this.timer.element.style.removeProperty('top');
    this.element.appendChild(this.timer.element);
    animateDiv(this.bottomTitle, AnimationType.BASIC_POP);
    animateDiv(this.bottomText, AnimationType.BASIC_POP , 200);
    animateDiv(this.leftVote, AnimationType.SLIDE_IN, 100);
    animateDiv(this.rightVote, AnimationType.SLIDE_IN, 200);
    animateDiv(this.tieVote, AnimationType.SLIDE_IN, 300);
  }

  private phaseVote2 = () => {
    this.bottomTitle.innerHTML = StringData.ROUND_VOTE_TITLE2;
    this.bottomText.innerHTML = StringData.ROUND_VOTE_TEXT2;
    this.timer.reset(10).onComplete(this.phaseLeaderboard).start();
  }

  private phaseLeaderboard = () => {
    this.canVote = false;
    if (!this.winner && this.winner !== 0) this.winner = -1;
    RoundData.winner = this.winner;

    El.destroyThese(this.leftVote, this.rightVote, this.tieVote, this.vs);
    this.timer.reset(10).onComplete(this.navGame).start();

    if (this.winner === 0) {
      GameController.scorePlayer(RoundData.players[RoundData.winner]);
      let leaderboard = this.addLeaderboard();
      leaderboard.appendChild(this.roundCount);
      El.destroyThese(this.bottomSection, this.rightSection);
      El.addElements(this.topSection, leaderboard);
    } else if (this.winner === 1) {
      GameController.scorePlayer(RoundData.players[RoundData.winner]);
      let leaderboard = this.addLeaderboard();
      leaderboard.appendChild(this.roundCount);

      El.destroyThese(this.bottomSection, this.leftSection);
      El.addElements(this.topSection, leaderboard, this.rightSection);
    } else {
      GameController.scorePlayer(RoundData.players[0], 0.5);
      GameController.scorePlayer(RoundData.players[1], 0.5);
      let leaderboard = this.addLeaderboard();
      leaderboard.appendChild(this.roundCount);

      this.bottomTitle.innerHTML = StringData.ROUND_TIE_TITLE;
      this.bottomText.innerHTML = StringData.ROUND_TIE_TEXT;
      El.destroyThese(this.leftSection, this.rightSection);
      El.addElements(this.topSection, leaderboard);
    }
  }

  private addLeaderboard() {
    this.leaderboard = El.makeDiv('table-container');
    let tableInner = ElFactory.makeLeaderboard();
    this.leaderboard.appendChild(tableInner);

    return this.leaderboard;
  }

  private setWinner(player: number) {
    if (!this.canVote) return;

    if (this.winner === player) {
      this.phaseLeaderboard();
    } else {
      this.winner = player;
      if (player === 0) {
        this.leftVote.classList.add('highlighted');
        this.rightVote.classList.remove('highlighted');
        this.tieVote.classList.remove('highlighted');
      } else if (player === 1) {
        this.rightVote.classList.add('highlighted');
        this.leftVote.classList.remove('highlighted');
        this.tieVote.classList.remove('highlighted');
      } else {
        this.rightVote.classList.remove('highlighted');
        this.leftVote.classList.remove('highlighted');
        this.tieVote.classList.add('highlighted');
      }
    }
  }

  private navGame = () => {
    if (GameController.isGameOver()) {
      Facade.navTo(new EndUI());
    } else {
      Facade.navTo(new RoundUI());
    }
  }

  private onKeyDown = (e: KeyboardEvent) => {
    console.log(e.key);
    if (e.key === 'Enter' || e.key === ' ') {
      this.timer.canSkip && this.timer.endNow();
    } else if (e.key === 'p') {
      this.timer.pauseTimer();
    } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === '1') {
      this.setWinner(0);
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === '2') {
      this.setWinner(1);
    } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === '3') {
      this.setWinner(-1);
    }
  }
}
