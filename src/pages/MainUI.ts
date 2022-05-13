import { Facade } from '..';
import { InfoPopup } from '../components/domui/InfoPopup';
import { El } from '../services/ElementFactory';
import { SetupUI } from './SetupUI';
import { BaseUI } from './_BaseUI';

export class MainUI extends BaseUI {
  constructor() {
    super();
    this.element = El.makeDiv('main-ui');

    let title = El.makeText('Who Will Win?', 'title');

    let buttonContainer = El.makeDiv('button-box');

    let button1 = El.makeButton('New Game', 'info-button', this.navigateStart);
    let button2 = El.makeButton('Instructions', 'info-button', this.openInstructions);

    El.addElements(buttonContainer, button1, button2);
    El.addElements(this.element, title, buttonContainer);
  }

  public navIn() {

  }

  public navOut() {

  }

  public destroy() {

  }

  private navigateStart = () => {
    Facade.navTo(new SetupUI());
  }

  private openInstructions = () => {
    Facade.showInstructions();
    // new InfoPopup('Instruction!');
  }
}
