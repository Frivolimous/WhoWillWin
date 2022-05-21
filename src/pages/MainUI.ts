import { Facade } from '..';
import { ImageUrl } from '../data/ImageUrl';
import { StringData } from '../data/StringData';
import { JMTween } from '../JMGE/JMTween';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El, ElFactory } from '../services/ElementFactory';
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
  // private button2: HTMLElement;

  constructor() {
    super();
    this.element = El.makeDiv('main-ui');

    this.title = El.makeImg(ImageUrl.Logo, 'main-logo');
    this.content = El.makeText(StringData.MAIN_CONTENT, 'bigger-text');
    // this.title = El.makeText(StringData.GAME_TITLE, 'title');

    // let buttonContainer = El.makeDiv('button-box');

    this.button1 = El.makeButton(StringData.BUTTON_NEW_GAME, 'giant-button', this.navigateStart);
    let preview = El.makeButton('See Cards', 'info-button', this.navigatePreview);
    // this.button2 = El.makeButton(StringData.BUTTON_INSTRUCTIONS, 'info-button', this.openInstructions);

    Facade.showHome(false);
    Facade.showBottom(false);
    Facade.showCredits(true);
    Facade.controlBar.hidden = true;

    // El.addElements(buttonContainer, this.button1);
    El.addElements(this.element, this.title, this.content, this.button1);
    El.addElements(preview);
  }

  public navIn() {
    animateDiv(this.title, AnimationType.BASIC_POP, 300);
    animateDiv(this.content, AnimationType.BASIC_POP, 600);
    animateDiv(this.button1, AnimationType.BASIC_POP, 900);
    Facade.popCredits(1200);
    // animateDiv(this.button2, AnimationType.BASIC_POP, 900);
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
    }
  }
}
