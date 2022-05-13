import { Facade } from '..';
import { TimerCircle } from '../components/domui/TimerCircle';
import { SessionData } from '../Config';
import { El } from '../services/ElementFactory';
import { GameController } from '../services/GameController';
import { MainUI } from './MainUI';
import { RoundUI } from './RoundUI';
import { BaseUI } from './_BaseUI';

export class EndUI extends BaseUI {

  constructor() {
    super();
    this.element = El.makeDiv('end-ui');

    let title = El.makeText(`Game Over`, 'title');
    let mainSection = El.makeDiv('content');
    let table = El.makeDiv('table-container');

    let home = El.makeButton('Home', 'home-button', this.navHome);

    let buttonContainer = El.makeDiv('button-box');

    let button1 = El.makeButton('Main Menu', 'info-button', this.navHome);
    let button2 = El.makeButton('Play Again!', 'info-button', this.navGame);

    El.addElements(this.element, title, mainSection, buttonContainer, home);
    El.addElements(mainSection, table);
    El.addElements(buttonContainer, button1, button2);

    let tableInner = document.createElement('table');
    tableInner.classList.add('leaderboard');
    table.appendChild(tableInner);
    let head = tableInner.createTHead();
    let row = head.insertRow();
    let th0 = document.createElement('th');
    let th1 = document.createElement('th');
    th0.appendChild(document.createTextNode('Name'));
    th1.appendChild(document.createTextNode('Score'));
    row.appendChild(th0);
    row.appendChild(th1);

    SessionData.players.forEach((el, i) => {
      let score = SessionData.players[i].score;
      row = tableInner.insertRow();
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(el.slug));
      cell = row.insertCell();
      cell.appendChild(document.createTextNode(score.toString()));
    });
  }

  private navHome = () => {
    Facade.navTo(new MainUI());
  }

  private navGame = () => {
    GameController.restartGame();
    Facade.navTo(new RoundUI());
  }
}
