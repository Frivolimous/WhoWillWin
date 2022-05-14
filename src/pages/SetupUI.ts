import { Facade } from '..';
import { RoundData, SessionData } from '../Config';
import { StringData } from '../data/StringData';
import { JMTween } from '../JMGE/JMTween';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El, ElFactory } from '../services/ElementFactory';
import { GameController } from '../services/GameController';
import { MainUI } from './MainUI';
import { RoundUI } from './RoundUI';
import { BaseUI } from './_BaseUI';

export class SetupUI extends BaseUI {
  private title: HTMLElement;

  private leftHeader: HTMLElement;
  private nameContainer: HTMLDivElement;
  private names: IInputElement[] = [];
  private addButton: HTMLButtonElement;

  private rightHeader: HTMLElement;
  private rightContent: HTMLElement;
  private startGame: HTMLButtonElement;

  constructor() {
    super();
    this.element = El.makeDiv('setup-ui');

    this.title = El.makeText(StringData.SETUP_TITLE, 'title');
    let middle = El.makeDiv('horizontal-stack');
    let leftSection = El.makeDiv('vertical-stack');
    let rightSection = El.makeDiv('vertical-stack');
    this.nameContainer = leftSection;

    this.leftHeader = El.makeText(StringData.SETUP_PLAYER_TITLE, 'sub-title');
    this.rightHeader = El.makeText(StringData.SETUP_OPTIONS_TITLE, 'sub-title');
    this.rightContent = El.makeText(StringData.SETUP_OPTIONS_TEXT, 'setup-content');

    this.addButton = El.makeButton(StringData.BUTTON_ADD, 'info-button', () => this.addNameElement());

    this.startGame = El.makeButton(StringData.BUTTON_START, 'info-button', this.navGame);

    Facade.showHome(true);

    El.addElements(leftSection, this.leftHeader, this.addButton);
    El.addElements(rightSection, this.rightHeader, this.rightContent, this.startGame);

    El.addElements(middle, leftSection, rightSection);
    El.addElements(this.element, this.title, middle);

    leftSection.style.justifyContent = 'flex-start';
    leftSection.style.gap = '10px';

    this.loadNames();

    // this.names.forEach(el => el.element.style.transition = "transform 2s");
    // this.addButton.style.transition = 'all 2s';
  }

  public navIn() {
    animateDiv(this.title, AnimationType.GROW_IN);
    animateDiv(this.leftHeader, AnimationType.SLIDE_IN);
    let nameDelay = 100;
    this.names.forEach(name => {
      animateDiv(name.element, AnimationType.SLIDE_IN, nameDelay);
      nameDelay += 100;
    });
    animateDiv(this.addButton, AnimationType.SLIDE_IN, nameDelay);

    animateDiv(this.rightHeader, AnimationType.SLIDE_IN, 200);
    animateDiv(this.rightContent, AnimationType.SLIDE_IN, 300);
    animateDiv(this.startGame, AnimationType.SLIDE_IN, nameDelay + 100);
    // animateDiv(this.element, AnimationType.GROW_IN);
    window.addEventListener('keydown', this.onKeyDown);
  }

  public navOut() {
    // animateDiv(this.element, AnimationType.SHRINK_OUT, 200);
    // animateDiv(this.title, AnimationType.SHRINK_OUT);
    // new JMTween({}, 1000).to({}).start().onComplete(() => {
    //   this.element.parentElement.removeChild(this.element);
    // });
    El.destroy(this.element);
    window.removeEventListener('keydown', this.onKeyDown);
  }

  private navGame = () => {
    this.updatePlayers();

    if (SessionData.players.length <= 1) {
      ElFactory.makeAlert('You must have 2 or more players.');
      return;
    }

    Facade.navTo(new RoundUI());
  }

  private loadNames() {
    SessionData.players.forEach(el => {
      this.addNameElement(el.slug);
    });
    this.addNameElement();
  }

  private addNameElement = (name?: string) => {
    let last = this.names[this.names.length - 1];
    if (last && last.input.value === '') return;

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

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      let selected = document.getSelection().focusNode;
      console.log(selected);
      let index = this.names.findIndex(el => el.element === selected);
      if (index >= 0 && index < this.names.length - 1) {
        let next = this.names[index + 1];
        next.input.focus();
      } else {
        let newEl = this.addNameElement();
        if (newEl) newEl.input.focus();
      }
      console.log(index);
    }
  }
}

interface IInputElement {
  input: HTMLInputElement;
  element: HTMLDivElement;
}
