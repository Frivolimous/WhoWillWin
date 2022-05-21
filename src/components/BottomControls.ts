import { RoundData } from '../Config';
import { StringData } from '../data/StringData';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El } from '../services/ElementFactory';

export class BottomControls {
  public element: HTMLDivElement;

  private _onVote: (winner: number) => void;
  private _onSkip: () => void;
  private _onPause: () => boolean;

  private skip: HTMLButtonElement;
  private pause: HTMLButtonElement;
  private voteLeft: HTMLButtonElement;
  private voteRight: HTMLButtonElement;
  private voteTie: HTMLButtonElement;

  constructor() {
    this.element = El.makeDiv('bottom-bar');
    this.element.style.position = 'absolute';
    this.element.style.bottom = '0';

    this.skip = El.makeButton(StringData.BUTTON_SKIP, 'info-button', this.onSkip);
    this.pause = El.makeButton(StringData.BUTTON_PAUSE, 'info-button', this.onPause);
    this.voteLeft = El.makeButton(`<< ${RoundData.players[0]} ${StringData.ROUND_WINS}`, 'wide-button', () => this.onVote(0));
    this.voteRight = El.makeButton(`${RoundData.players[1]} ${StringData.ROUND_WINS} >>`, 'wide-button', () => this.onVote(1));
    this.voteTie = El.makeButton(StringData.ROUND_TIE, 'info-button', () => this.onVote(-1));
    let voteContainer = El.makeDiv('bottom-vote-container');
    El.addElements(this.element, this.pause, voteContainer, this.skip);
    El.addElements(voteContainer, this.voteLeft, this.voteTie, this.voteRight);
    document.body.appendChild(this.element);
    this.element.style.display = 'none';

    document.addEventListener('keydown', this.onKeyDown);
  }

  public get hidden(): boolean {
    return this.element.style.display === 'none';
  }

  public set hidden(b: boolean) {
    if (b) {
      this.element.style.display = 'none';
    } else {
      this.element.style.removeProperty('display');
    }
  }

  public destroy = () => {
    document.body.removeChild(this.element);
  }

  public setCallbacks(onSkip: () => void, onPause: () => boolean, onVote: (winner: number) => void) {
    this._onPause = onPause;
    this._onSkip = onSkip;
    this._onVote = onVote;
  }

  public clearCallbacks() {
    this._onPause = this.onSkip = this.onVote = null;
  }

  public setNames(player0: string, player1: string) {
    this.voteLeft.innerHTML = `<< ${player0} ${StringData.ROUND_WINS}`;
    this.voteRight.innerHTML = `${player1} ${StringData.ROUND_WINS} >>`;
  }

  public pulseVotes() {
    animateDiv(this.voteLeft, AnimationType.PULSE, 0);
    animateDiv(this.voteTie, AnimationType.PULSE, 200);
    animateDiv(this.voteRight, AnimationType.PULSE, 400);
  }

  public showButton(button: 'skip' | 'pause' | 'vote', value: boolean = true) {
    if (button === 'skip') {
      this.toggleVisible(this.skip, value);
    } else if (button === 'pause') {
      this.toggleVisible(this.pause, value);
    } else {
      this.toggleVisible(this.voteLeft, value);
      this.toggleVisible(this.voteRight, value);
      this.toggleVisible(this.voteTie, value);
      this.voteRight.classList.remove('highlighted');
      this.voteLeft.classList.remove('highlighted');
      this.voteTie.classList.remove('highlighted');
    }
  }

  public onTimerRefreshed = () => {
    this.pause.innerHTML = StringData.BUTTON_PAUSE;
  }

  private toggleVisible(el: HTMLElement, b: boolean) {
    if (b) {
      el.style.removeProperty('display');
    } else {
      el.style.display = 'none';
    }
  }

  private onSkip = () => {
    if (this.skip.style.display === 'none') return;

    this._onSkip && this._onSkip();
  }

  private onPause = () => {
    if (this.pause.style.display === 'none') return;

    if (this._onPause) {
      let paused = this._onPause();
      if (paused) {
        this.pause.innerHTML = StringData.BUTTON_RESUME;
      } else {
        this.pause.innerHTML = StringData.BUTTON_PAUSE;
      }
    }
  }

  private onVote = (player: number) => {
    if (this.voteLeft.style.display === 'none') return;

    if (player === 0) {
      this.voteLeft.classList.add('highlighted');
      this.voteRight.classList.remove('highlighted');
      this.voteTie.classList.remove('highlighted');
    } else if (player === 1) {
      this.voteRight.classList.add('highlighted');
      this.voteLeft.classList.remove('highlighted');
      this.voteTie.classList.remove('highlighted');
    } else {
      this.voteRight.classList.remove('highlighted');
      this.voteLeft.classList.remove('highlighted');
      this.voteTie.classList.add('highlighted');
    }
    if (this._onVote) {
      this._onVote(player);
    }
  }

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      this.onSkip();
    } else if (e.key === 'p') {
      this.onPause();
    } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === '1') {
      this.onVote(0);
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === '3') {
      this.onVote(1);
    } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === '2') {
      this.onVote(-1);
    }
  }
}
