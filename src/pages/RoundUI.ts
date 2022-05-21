import { Facade } from '..';
import { Avatar } from '../components/Avatar';
import { TimerCircle } from '../components/TimerCircle';
import { RoundData, SessionData } from '../Config';
import { ImageUrl } from '../data/ImageUrl';
import { StringData } from '../data/StringData';
import { JMTween } from '../JMGE/JMTween';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El, ElFactory } from '../services/ElementFactory';
import { GameController } from '../services/GameController';
import { EndUI } from './EndUI';
import { MainUI } from './MainUI';
import { BaseUI } from './_BaseUI';

/* css used:
* round-ui
* round-top
* round-bottom
* round-title
*/

export class RoundUI extends BaseUI {
  public timer: TimerCircle;

  private title: HTMLDivElement;
  private topSection: HTMLDivElement;
  private leftSection: HTMLDivElement;
  private rightSection: HTMLDivElement;
  private leftAvatar: Avatar;
  private rightAvatar: Avatar;
  private audience: HTMLImageElement;

  private names: HTMLDivElement[] = [];
  private cards: HTMLDivElement[][] = [[], []];

  private bottomTitle: HTMLDivElement;
  private bottomContent: HTMLDivElement;
  private vs: HTMLDivElement;

  private leaderboard: HTMLElement;
  private roundCount: HTMLDivElement;

  private canVote: boolean = false;
  private winner: number;

  private overlayWinner: HTMLImageElement;
  private overlayLoser: HTMLImageElement;

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

    this.title = El.makeText(`${StringData.ROUND_TITLE} ${round}`, 'biggest-text');
    this.topSection = El.makeDiv('round-top');
    let bottomSection = El.makeDiv('round-bottom');
    this.bottomTitle = El.makeText('', 'big-text');
    this.bottomTitle.style.zIndex = '1';
    this.bottomContent = El.makeText('', 'medium-text');
    this.bottomContent.style.zIndex = '1';
    [this.leftSection, this.names[0], this.cards[0][0], this.cards[0][1]] = ElFactory.makePlayerSection(RoundData.players[0]);
    [this.rightSection, this.names[1], this.cards[1][0], this.cards[1][1]] = ElFactory.makePlayerSection(RoundData.players[1]);
    this.vs = El.makeText(StringData.ROUND_VS, 'vs-text');
    this.timer = new TimerCircle();
    this.leftAvatar = new Avatar();
    this.rightAvatar = new Avatar();
    this.audience = El.makeImg(ImageUrl.Audience, 'round-audience');
    this.audience.style.display = 'none';
    this.leftAvatar.faceRight(true);
    this.rightAvatar.faceRight(false);
    this.roundCount = El.makeText(`Rounds: ${RoundData.round} / ${GameController.numRounds()}`, 'small-text');

    this.overlayWinner = El.makeImg(ImageUrl.OverlayWinner, 'winner-overlay');
    this.overlayLoser = El.makeImg(ImageUrl.OverlayLoser, 'loser-overlay');

    Facade.showHome(true);
    Facade.showBottom(false);
    Facade.showCredits(false);
    Facade.controlBar.hidden = false;
    Facade.controlBar.setNames(RoundData.players[0], RoundData.players[1]);
    Facade.controlBar.setCallbacks(this.timer.skipTimer, this.timer.pauseTimer, this.setWinner);
    Facade.controlBar.showButton('skip', false);
    Facade.controlBar.showButton('pause', false);
    Facade.controlBar.showButton('vote', false);

    El.addElements(this.element, this.title, this.topSection, this.timer.element, bottomSection);
    El.addElements(bottomSection, this.bottomTitle, this.bottomContent, this.audience);
    // El.addElements(subEl, this.topSection); //this.bottomTitle, this.audience

    this.phaseIntro();
  }

  public navIn() {
    animateDiv(this.title, AnimationType.GROW_IN);
    // animateDiv(this.element, AnimationType.GROW_IN);
  }

  public navOut() {
    this.timer.destroy();
    El.destroy(this.element);
  //   animateDiv(this.element, AnimationType.SHRINK_OUT, 200);
  //   new JMTween({}, 1000).to({}).start().onComplete(() => {
  //     this.element.parentElement.removeChild(this.element);
  //   });
  }

  private setCardFront(el: HTMLDivElement, slug: number, reverse = false, power = false) {
    if (power) {
      el.classList.remove('card-back-power');
      el.innerHTML = `<img src = ${ImageUrl.Powers[slug]} class = "card-image${reverse ? ' card-image-reverse' : ''}"><div class= "card-text">${StringData.POWERS[slug]}</div>`;
    } else {
      el.classList.remove('card-back-character');
      el.innerHTML = `<img src = ${ImageUrl.Characters[slug]} class = "card-image${reverse ? ' card-image-reverse' : ''}"><div class= "card-text">${StringData.CHARACTERS[slug]}</div>`;
    }
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
        this.setCardFront(this.cards[0][0], RoundData.cards[0][0], true, false);
        animateDiv(this.cards[0][0], AnimationType.FLIP_B);
      }));
      animateDiv(this.cards[0][1], AnimationType.GROW_IN, 2600, () => animateDiv(this.cards[0][1], AnimationType.FLIP_A, 0, () => {
        this.setCardFront(this.cards[0][1], RoundData.cards[0][1], true, true);
        animateDiv(this.cards[0][1], AnimationType.FLIP_B);
      }));
      animateDiv(this.cards[1][0], AnimationType.GROW_IN, 3000, () => animateDiv(this.cards[1][0], AnimationType.FLIP_A, 0, () => {
        this.setCardFront(this.cards[1][0], RoundData.cards[1][0], false, false);
        animateDiv(this.cards[1][0], AnimationType.FLIP_B);
      }));
      animateDiv(this.cards[1][1], AnimationType.GROW_IN, 3100, () => animateDiv(this.cards[1][1], AnimationType.FLIP_A, 0, () => {
        this.setCardFront(this.cards[1][1], RoundData.cards[1][1], false, true);
        animateDiv(this.cards[1][1], AnimationType.FLIP_B);
      }));
      animateDiv(this.names[0], AnimationType.BIG_OUT, 5000);
      animateDiv(this.names[1], AnimationType.BIG_OUT, 5000);
      this.bottomTitle.innerHTML = StringData.ROUND_INTRO_TITLE;
      animateDiv(this.bottomTitle, AnimationType.GROW_IN, 3500, () => {
        this.timer.canSkip = true;
        Facade.controlBar.showButton('skip', true);
        Facade.controlBar.showButton('pause', true);
      });
    });

    this.timer.reset(10).blinkAt(3).onComplete(this.phaseLeftPlay).start();
    Facade.controlBar.onTimerRefreshed();
    this.timer.canSkip = false;
  }

  private phaseLeftPlay = () => {
    this.bottomTitle.innerHTML = `${RoundData.players[0]}, ${StringData.ROUND_PLAY_TITLE}`;
    this.leftSection.classList.add('left-highlight');
    this.timer.reset(20).blinkAt(3).onComplete(this.phaseRightPlay).start();
    Facade.controlBar.onTimerRefreshed();
    this.timer.canSkip = true;
    this.timer.element.classList.add('timer-left');
    this.leftSection.appendChild(this.leftAvatar.element);
    this.rightSection.appendChild(this.rightAvatar.element);
    this.leftSection.appendChild(this.timer.element);
    this.rightAvatar.setState('passive');

    animateDiv(this.bottomTitle, AnimationType.BASIC_POP, 200);
    animateDiv(this.cards[0][0], AnimationType.PULSE);
    animateDiv(this.cards[0][1], AnimationType.PULSE);
  }

  private phaseRightPlay = () => {
    this.bottomTitle.innerHTML = `${RoundData.players[1]}, ${StringData.ROUND_PLAY_TITLE}`;
    this.leftSection.classList.remove('left-highlight');
    this.rightSection.classList.add('right-highlight');
    this.timer.reset(20).blinkAt(3).onComplete(this.phaseVote).start();
    Facade.controlBar.onTimerRefreshed();
    this.timer.element.classList.remove('timer-left');
    this.timer.element.classList.add('timer-right');
    this.rightSection.appendChild(this.timer.element);
    this.rightAvatar.setState('active');
    this.leftAvatar.setState('passive');

    animateDiv(this.bottomTitle, AnimationType.BASIC_POP, 200);
    animateDiv(this.cards[1][0], AnimationType.PULSE);
    animateDiv(this.cards[1][1], AnimationType.PULSE);
  }

  private phaseVote = () => {
    this.canVote = true;
    this.bottomTitle.innerHTML = StringData.ROUND_VOTE_TITLE;
    this.bottomContent.innerHTML = StringData.ROUND_VOTE_TEXT;
    this.rightSection.classList.remove('right-highlight');
    Facade.controlBar.showButton('vote', true);
    this.timer.reset(30).blinkAt(5).onComplete(this.phaseVote2).start();
    Facade.controlBar.onTimerRefreshed();
    this.timer.element.classList.remove('timer-right');
    this.element.appendChild(this.timer.element);

    this.rightAvatar.setState('ready');
    this.leftAvatar.setState('ready');

    this.audience.style.removeProperty('display');

    animateDiv(this.bottomTitle, AnimationType.BASIC_POP);
    animateDiv(this.bottomContent, AnimationType.BASIC_POP, 100);
    animateDiv(this.audience, AnimationType.SLIDE_IN);
  }

  private phaseVote2 = () => {
    this.bottomTitle.innerHTML = StringData.ROUND_VOTE_TITLE2;
    this.bottomContent.innerHTML = StringData.ROUND_VOTE_TEXT2;
    this.timer.reset(10).blinkAt(10).onComplete(this.phaseLeaderboard).start();
    Facade.controlBar.onTimerRefreshed();
  }

  private phaseLeaderboard = () => {
    this.canVote = false;
    Facade.controlBar.showButton('vote', false);
    if (!this.winner && this.winner !== 0) this.winner = -1;
    RoundData.winner = this.winner;

    this.timer.reset(10).blinkAt(3).onComplete(this.navGame).start();
    Facade.controlBar.onTimerRefreshed();

    if (this.winner === 0) {
      GameController.scorePlayer(RoundData.players[RoundData.winner]);
      this.leftAvatar.setState('win');
      this.rightAvatar.setState('lose');
      this.bottomTitle.innerHTML = `${RoundData.players[0]} Wins!`;
      this.bottomContent.innerHTML = StringData.ROUND_WINS_TEXT;
      this.leftSection.appendChild(this.overlayWinner);
      // this.rightSection.appendChild(this.overlayLoser);
    } else if (this.winner === 1) {
      GameController.scorePlayer(RoundData.players[RoundData.winner]);
      this.leftAvatar.setState('lose');
      this.rightAvatar.setState('win');
      this.bottomTitle.innerHTML = `${RoundData.players[1]} Wins!`;
      this.rightSection.appendChild(this.overlayWinner);
      // this.leftSection.appendChild(this.overlayLoser);
    } else {
      this.rightAvatar.setState('passive');
      this.leftAvatar.setState('passive');
      GameController.scorePlayer(RoundData.players[0], 0.5);
      GameController.scorePlayer(RoundData.players[1], 0.5);

      this.bottomTitle.innerHTML = StringData.ROUND_TIE_TITLE;
      this.bottomContent.innerHTML = StringData.ROUND_TIE_TEXT;
    }
  }

  private setWinner = (player: number) => {
    if (!this.canVote) return;

    if (this.winner === player) {
      this.phaseLeaderboard();
    } else {
      this.winner = player;
    }
  }

  private navGame = () => {
    if (GameController.isGameOver()) {
      Facade.navTo(new EndUI());
    } else {
      Facade.navTo(new RoundUI());
    }
  }
}
