import { Facade } from '..';
import { RoundData, SessionData } from '../Config';
import { El } from '../services/ElementFactory';
import { GameController } from '../services/GameController';
import { MainUI } from './MainUI';
import { RoundUI } from './RoundUI';
import { BaseUI } from './_BaseUI';

export class SetupUI extends BaseUI {
  private nameContainer: HTMLDivElement;
  private names: IInputElement[] = [];
  private addButton: HTMLButtonElement;

  constructor() {
    super();
    this.element = El.makeDiv('setup-ui');

    let title = El.makeText(`Game Setup`, 'title');
    let middle = El.makeDiv('horizontal-stack');
    let leftSection = El.makeDiv('vertical-stack');
    let rightSection = El.makeDiv('vertical-stack');
    this.nameContainer = leftSection;

    let leftHeader = El.makeText('Players:', 'sub-title');
    let rightHeader = El.makeText('Options:', 'sub-title');

    this.addButton = El.makeButton('Add', 'info-button', () => this.addNameElement());

    let home = El.makeButton('Home', 'home-button', this.navHome);
    let startGame = El.makeButton('Start Game!', 'info-button', this.navGame);
    El.addElements(leftSection, leftHeader, this.addButton);
    El.addElements(rightSection, rightHeader, startGame);

    El.addElements(middle, leftSection, rightSection);
    El.addElements(this.element, title, middle, home);

    leftSection.style.justifyContent = 'flex-start';
    leftSection.style.gap = '10px';

    this.loadNames();
  }

  private navHome = () => {
    Facade.navTo(new MainUI());
  }

  private navGame = () => {
    this.updatePlayers();

    Facade.navTo(new RoundUI());
  }

  private loadNames() {
    SessionData.players.forEach(el => {
      this.addNameElement(el.slug);
    });
    this.addNameElement();
  }

  private addNameElement = (name?: string) => {
    let el = this.makeNameElement();
    this.nameContainer.appendChild(el.element);
    this.nameContainer.appendChild(this.addButton);
    this.names.push(el);

    if (name) el.input.value = name;
    return el;
  }

  private removeNameElement = (el: IInputElement) => {
    if (this.names.length <= 1) return;

    this.nameContainer.removeChild(el.element);
    let i = this.names.indexOf(el);
    this.names.splice(i, 1);
  }

  private makeNameElement = () => {
    let element = El.makeDiv();
    let input = document.createElement('input');
    input.classList.add('name-element');

    let m = {input, element};

    let deleteB = El.makeButton('X', 'delete-button', () => this.removeNameElement(m));
    element.appendChild(deleteB);

    El.addElements(element, input, deleteB);

    return m;
  }

  private updatePlayers = () => {
    GameController.resetSession(this.names.map(el => el.input.value));
  }
}

interface IInputElement {
  input: HTMLInputElement;
  element: HTMLDivElement;
}
