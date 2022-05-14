import { Facade } from '..';
import { StringData } from '../data/StringData';
import { JMTween } from '../JMGE/JMTween';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El, ElFactory } from '../services/ElementFactory';
import { SetupUI } from './SetupUI';
import { BaseUI } from './_BaseUI';

export class MainUI extends BaseUI {
  private title: HTMLElement;
  private button1: HTMLElement;
  private button2: HTMLElement;

  constructor() {
    super();
    this.element = El.makeDiv('main-ui');

    this.title = El.makeText(StringData.GAME_TITLE, 'title');

    let buttonContainer = El.makeDiv('button-box');

    this.button1 = El.makeButton(StringData.BUTTON_NEW_GAME, 'info-button', this.navigateStart);
    this.button2 = El.makeButton(StringData.BUTTON_INSTRUCTIONS, 'info-button', this.openInstructions);

    Facade.showHome(false);

    El.addElements(buttonContainer, this.button1, this.button2);
    El.addElements(this.element, this.title, buttonContainer);
  }

  public navIn() {
    animateDiv(this.title, AnimationType.BASIC_POP, 300);
    animateDiv(this.button1, AnimationType.BASIC_POP, 600);
    animateDiv(this.button2, AnimationType.BASIC_POP, 900);
  }

  public navOut() {
    // animateDiv(this.title, AnimationType.BACK_OUT, 100);
    // animateDiv(this.button1, AnimationType.BACK_OUT, 200);
    // animateDiv(this.button2, AnimationType.BACK_OUT, 200);
    animateDiv(this.element, AnimationType.SLIDE_OUT);
    new JMTween({}, 1000).to({}).start().onComplete(() => {
      this.element.parentElement.removeChild(this.element);
    });
  }

  private navigateStart = () => {
    Facade.navTo(new SetupUI());
  }

  private openInstructions = () => {
    Facade.showInstructions();
  }
}
