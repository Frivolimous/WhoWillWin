import { JMTween } from '../../JMGE/JMTween';
import { El } from '../../services/ElementFactory';

export class TimerCircle {
  public element: HTMLDivElement;
  public totalSeconds: number;
  public currentSeconds: number;

  private _onComplete: () => void;
  private tween: JMTween;

  constructor() {
    this.element = El.makeText('99', 'timer');
    this.tween = new JMTween<TimerCircle>(this, 99000).to({currentSeconds: 0})
      .onComplete(() => this._onComplete())
      .onUpdate(this.onUpdate);
  }

  public reset(seconds?: number) {
    if (seconds) {
      this.totalSeconds = seconds;
    }

    this.currentSeconds = this.totalSeconds;
    this.element.innerHTML = this.currentSeconds.toString();

    this.tween.reset();
    this.tween.over(this.totalSeconds * 1000);
    return this as TimerCircle;
  }

  public start() {
    this.tween.start();
    return this as TimerCircle;
  }

  public pause() {
    this.tween.stop();
  }

  public onComplete(func: () => void) {
    this._onComplete = func;

    return this as TimerCircle;
  }

  public endNow = () => {
    console.log('a');
    this.tween.stop(true);
  }

  private onUpdate = () => {
    this.element.innerHTML = Math.ceil(this.currentSeconds).toString();
  }
}
