import { StringData } from '../data/StringData';
import { JMTween } from '../JMGE/JMTween';
import { El } from '../services/ElementFactory';

export class TimerCircle {
  public element: HTMLDivElement;
  public timer: HTMLDivElement;
  public totalSeconds: number;
  public currentSeconds: number;

  private _onComplete: () => void;

  private pauseButton: HTMLButtonElement;
  private skipButton: HTMLButtonElement;

  private paused = true;
  private _canSkip: boolean;

  private cTimeout: number;

  constructor(showControls = true) {
    this.element = El.makeDiv('timer-container');
    this.timer = El.makeText('99', 'timer');
    El.addElements(this.element, this.timer);

    // this.tween = new JMTween<TimerCircle>(this, 99000).to({currentSeconds: 0})
    //   .onComplete(() => this._onComplete && this._onComplete())
    //   .onUpdate(this.onUpdate);

    if (showControls) {
      this.skipButton = El.makeButton(StringData.BUTTON_SKIP, 'small-button', this.endNow);
      this.pauseButton = El.makeButton(StringData.BUTTON_PAUSE, 'small-button', this.pauseTimer);
      El.addElements(this.element, this.skipButton, this.pauseButton);
    }
  }

  public set canSkip(b: boolean) {
    this._canSkip = b;
    if (b) {
      this.pauseButton.style.removeProperty('display');
      this.skipButton.style.removeProperty('display');
    } else {
      this.pauseButton.style.display = 'none';
      this.skipButton.style.display = 'none';
    }
  }

  public get canSkip(): boolean {
    return this._canSkip;
  }

  public destroy() {
    this.paused = true;
    this._onComplete = null;
  }

  public reset(seconds?: number) {
    if (seconds) {
      this.totalSeconds = seconds;
    }

    this.currentSeconds = this.totalSeconds;
    this.timer.innerHTML = this.currentSeconds.toString();
    // this.tween.reset();
    // this.tween.over(this.totalSeconds * 1000);
    return this as TimerCircle;
  }

  public start() {
    if (!this.paused) return;

    this.paused = false;
    this.currentSeconds++;
    this.tickTimer();
    // this.tween.start();
    this.pauseButton && (this.pauseButton.innerHTML = StringData.BUTTON_PAUSE);
    return this as TimerCircle;
  }

  public pause() {
    this.pauseButton && (this.pauseButton.innerHTML = StringData.BUTTON_RESUME);
    this.paused = true;
  }

  public onComplete(func: () => void) {
    this._onComplete = func;

    return this as TimerCircle;
  }

  public endNow = () => {
    this.paused = true;
    window.clearTimeout(this.cTimeout);
    let onComplete = this._onComplete;
    this._onComplete = null;
    onComplete && onComplete();
  }

  public pauseTimer = () => {
    if (!this._canSkip) return;

    if (this.paused) {
      this.start();
    } else {
      this.pause();
    }
  }

  private tickTimer = () => {
    if (this.paused) return;

    this.currentSeconds--;
    this.timer.innerHTML = Math.ceil(this.currentSeconds).toString();

    if (this.currentSeconds === 0) {
      this.endNow();
    } else {
      this.cTimeout = window.setTimeout(this.tickTimer, 1000);
    }
  }

  // private onUpdate = () => {
  //   this.timer.innerHTML = Math.ceil(this.currentSeconds).toString();
  // }
}
