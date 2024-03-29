import { Facade } from '..';
import { StringData } from '../data/StringData';
import { JMTween } from '../JMGE/JMTween';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El, ElFactory } from '../services/ElementFactory';
import { GameController } from '../services/GameController';
import { MainUI } from './MainUI';
import { RoundUI } from './RoundUI';
import { SetupUI } from './SetupUI';
import { BaseUI } from './_BaseUI';

export class EndUI extends BaseUI {

  constructor() {
    super();
    this.element = El.makeDiv('end-ui');

    let title = El.makeText(StringData.GAME_OVER_TITLE, 'biggest-text');
    let table = El.makeDiv('table-container');

    let buttonContainer = El.makeDiv('button-box');

    let button2 = El.makeButton(StringData.BUTTON_PLAY_AGAIN, 'info-button', this.navGame);

    Facade.showHome(false);
    Facade.showBottom(false);
    Facade.showCredits(true);
    Facade.controlBar.hidden = true;

    El.addElements(this.element, title, table, buttonContainer);
    El.addElements(buttonContainer, button2);

    let tableInner = ElFactory.makeLeaderboard();
    table.appendChild(tableInner);
  }

  public navIn() {
    // animateDiv(this.element, AnimationType.GROW_IN);
  }

  public navOut() {
    El.destroy(this.element);
    // animateDiv(this.element, AnimationType.SHRINK_OUT, 200);
    // new JMTween({}, 1000).to({}).start().onComplete(() => {
    //   this.element.parentElement.removeChild(this.element);
    // });
  }

  private navHome = () => {
    Facade.navTo(new MainUI());
  }

  private navGame = () => {
    GameController.restartGame();
    Facade.navTo(new SetupUI());
  }
}
