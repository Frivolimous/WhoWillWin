import { Facade } from '..';
import { TimerCircle } from '../components/domui/TimerCircle';
import { RoundData, SessionData } from '../Config';
import { El } from '../services/ElementFactory';
import { GameController } from '../services/GameController';
import { EndUI } from './EndUI';
import { MainUI } from './MainUI';
import { RoundUI } from './RoundUI';
import { BaseUI } from './_BaseUI';

export class ScoreUI extends BaseUI {
  public timer: TimerCircle;
  private pauseButton: HTMLButtonElement;
  private skipButton: HTMLButtonElement;

  private paused = false;

  constructor() {
    super();
    this.element = El.makeDiv('score-ui');

    let round = RoundData.round;
    let player = RoundData.players[RoundData.winner];

    let title = El.makeText(`Round ${round}`, 'title');
    let mainSection = El.makeDiv('content');
    let leftTitle = El.makeText('And the winner is...', 'bigger-text');
    let leftSection = El.makeDiv('left');
    let table = El.makeDiv('table-container');
    let playerSection = El.makeDiv('player-section');
    let playerName = El.makeText(player, 'name-title');
    let playerCards = El.makeDiv('card-section');
    let card1 = El.makeDiv('card');
    let card2 = El.makeDiv('card');
    card1.innerHTML = RoundData.cards[RoundData.winner][0];
    card2.innerHTML = RoundData.cards[RoundData.winner][1];

    let home = El.makeButton('Home', 'home-button', this.navHome);
    this.timer = new TimerCircle();
    this.skipButton = El.makeButton('skip', 'small-button', this.timer.endNow);
    this.pauseButton = El.makeButton('pause', 'small-button', this.pauseTimer);

    El.addElements(this.element, title, mainSection, home, this.timer.element);
    El.addElements(mainSection, leftSection, table);
    El.addElements(leftSection, leftTitle, playerSection, this.skipButton, this.pauseButton);
    El.addElements(playerSection, playerName, playerCards);
    El.addElements(playerCards, card1, card2);

    this.timer.reset(10).onComplete(this.navGame).start();

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
    if (GameController.isGameOver()) {
      Facade.navTo(new EndUI());
    } else {
      Facade.navTo(new RoundUI());
    }
  }

  private pauseTimer = () => {
    this.paused = !this.paused;

    if (this.paused) {
      this.pauseButton.innerHTML = 'resume';
      this.timer.pause();
    } else {
      this.pauseButton.innerHTML = 'pause';
      this.timer.start();
    }
  }

}
