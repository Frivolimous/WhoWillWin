import { Facade } from '..';
import { ImageUrl } from '../data/ImageUrl';
import { StringData } from '../data/StringData';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El, ElFactory } from '../services/ElementFactory';
import { GameController } from '../services/GameController';
import { CardPreviewUI } from './CardPreviewUI';
import { SetupUI } from './SetupUI';
import { BaseUI } from './_BaseUI';

/* css used:
* main-ui
* main-logo
* bigger-text
* giant-button
*/

export class MainUI extends BaseUI {
  private title: HTMLElement;
  private content: HTMLElement;
  private button1: HTMLElement;
  private gamehive: HTMLElement;
  private GTimerOn = false;
  // private button2: HTMLElement;

  constructor() {
    super();
    this.element = El.makeDiv('main-ui');

    this.title = El.makeImg(ImageUrl.Logo, 'main-logo');
    this.content = El.makeText(StringData.MAIN_CONTENT, 'bigger-text');

    this.gamehive = El.makeText(StringData.GAMEHIVE_EDITION, 'big-text');

    this.button1 = El.makeButton(StringData.BUTTON_NEW_GAME, 'giant-button', this.navigateStart);

    Facade.showHome(false);
    Facade.showBottom(false);
    Facade.showCredits(true);
    Facade.controlBar.hidden = true;

    El.addElements(this.element, this.title, this.gamehive, this.content, this.button1);
    this.gamehive.style.display = 'none';
  }

  public navIn() {
    animateDiv(this.title, AnimationType.BASIC_POP, 300);
    animateDiv(this.content, AnimationType.BASIC_POP, 600);
    animateDiv(this.button1, AnimationType.BASIC_POP, 900);
    Facade.popCredits(1200);
    window.addEventListener('keydown', this.onKeyDown);
  }

  public navOut() {
    // animateDiv(this.title, AnimationType.BACK_OUT, 100);
    // animateDiv(this.button1, AnimationType.BACK_OUT, 200);
    // animateDiv(this.button2, AnimationType.BACK_OUT, 200);
    // animateDiv(this.element, AnimationType.SLIDE_OUT);
    // new JMTween({}, 1000).to({}).start().onComplete(() => {
    this.element.parentElement.removeChild(this.element);
    // });
    window.removeEventListener('keydown', this.onKeyDown);
  }

  private navigateStart = () => {
    Facade.navTo(new SetupUI());
  }

  private navigatePreview = () => {
    Facade.navTo(new CardPreviewUI());
  }

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'c') {
      this.navigatePreview();
    } else if (e.key === 'g') {
      this.GTimerOn = true;
      window.setTimeout(() => this.GTimerOn = false, 1000);
    } else if (e.key === 'h') {
      this.enableGHMode();
    }
  }

  private enableGHMode() {
    GameController.GHMode = true;
    this.gamehive.style.removeProperty('display');
    animateDiv(this.gamehive, AnimationType.SPIN);
  }
}
