import { Facade } from '..';
import { RoundData, SessionData } from '../Config';
import { ImageUrl } from '../data/ImageUrl';
import { StringData } from '../data/StringData';
import { JMTween } from '../JMGE/JMTween';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El, ElFactory } from '../services/ElementFactory';
import { GameController } from '../services/GameController';
import { MainUI } from './MainUI';
import { RoundUI } from './RoundUI';
import { BaseUI } from './_BaseUI';

/* css used:
* setup-ui
* setup-left
* setup-right
* setup-content

* main-logo
* giant-button
* info-button
* name-element
* delete-button
*/

export class SetupUI extends BaseUI {
  private SCROLL_SPEED = 10000;

  private leftHeader: HTMLElement;
  private leftImage: HTMLImageElement;
  private instructions: HTMLDivElement;
  private navigation: HTMLDivElement;
  private navCircles: HTMLDivElement[] = [];

  private rightHeader: HTMLElement;
  private rightContent: HTMLDivElement;
  private nameContainer: HTMLDivElement;
  private names: IInputElement[] = [];
  private addButton: HTMLButtonElement;
  private startGame: HTMLButtonElement;

  private cPage: number = 0;
  private cTimeout: number;
  private pulsing = true;

  constructor() {
    super();
    this.element = El.makeDiv('setup-ui');
    let top = El.makeDiv('setup-ui-top');
    let leftSide = El.makeDiv('setup-left');
    let rightSide = El.makeDiv('setup-right');
    let divider = El.makeImg(ImageUrl.Divider);
    divider.style.height = '85vh';
    // let centerLine = El.makeDiv('setup-line');

    this.leftImage = El.makeImg(ImageUrl.Logo, 'setup-logo');
    this.leftHeader = El.makeText(StringData.INFO_TITLE, 'biggest-text');
    this.rightHeader = El.makeText(StringData.SETUP_PLAYER_TITLE, 'biggest-text');
    this.instructions = El.makeText(StringData.SETUP_OPTIONS_TEXT, 'medium-text');
    this.instructions.style.width = '90%';
    this.navigation = El.makeDiv('setup-nav-container');
    let leftNav = El.makeButton('<', 'small-button', this.navLeft);
    let rightNav = El.makeButton('>', 'small-button', this.navRight);

    this.rightContent = El.makeDiv('setup-content');
    this.startGame = El.makeButton(StringData.BUTTON_START, 'wide-button', this.navGame);
    this.startGame.style.fontSize = '6em';
    this.addButton = El.makeButton(StringData.BUTTON_ADD, 'black-button', () => this.addNameElement());

    // private makeBottomBar = () => {
    let bottom = El.makeDiv('bottom-bar');
    // let bottomText = El.makeText(StringData.BOTTOM_DESCRIPTION, 'small-text');
    // let TOGraphic = El.makeImg(ImageUrl.ToJam, 'bottom-image');
    // let GHGraphic = El.makeImg(ImageUrl.GameHive, 'bottom-image');
    // },

    El.addElements(this.element, top, bottom);
    El.addElements(top, leftSide, divider, rightSide);
    El.addElements(bottom, this.navigation, this.startGame);
    El.addElements(leftSide, this.leftHeader, this.leftImage, this.instructions);
    El.addElements(rightSide, this.rightHeader, this.rightContent);
    El.addElements(this.rightContent, this.addButton);
    El.addElements(this.navigation, leftNav);
    for (let i = 0; i < ImageUrl.InfoPages.length; i++) {
      let circle = El.makeDiv('nav-circle');
      this.navCircles.push(circle);
      El.addElements(this.navigation, circle);
    }
    El.addElements(this.navigation, rightNav);

    this.nameContainer = this.rightContent;

    Facade.showHome(false);
    Facade.showBottom(false);
    Facade.showCredits(true);
    Facade.controlBar.hidden = true;

    this.loadNames();
    this.nextPage();
  }

  public navIn() {
    // animateDiv(this.title, AnimationType.GROW_IN);
    // animateDiv(this.leftHeader, AnimationType.SLIDE_IN);
    // let nameDelay = 100;
    // this.names.forEach(name => {
    //   animateDiv(name.element, AnimationType.SLIDE_IN, nameDelay);
    //   nameDelay += 100;
    // });
    // animateDiv(this.addButton, AnimationType.SLIDE_IN, nameDelay);

    // animateDiv(this.rightHeader, AnimationType.SLIDE_IN, 200);
    // animateDiv(this.rightContent, AnimationType.SLIDE_IN, 300);
    // animateDiv(this.startGame, AnimationType.SLIDE_IN, nameDelay + 100);
    // animateDiv(this.element, AnimationType.GROW_IN);
    window.addEventListener('keydown', this.onKeyDown);
    this.endlessPulse();
  }

  public navOut() {
    // animateDiv(this.element, AnimationType.SHRINK_OUT, 200);
    // animateDiv(this.title, AnimationType.SHRINK_OUT);
    // new JMTween({}, 1000).to({}).start().onComplete(() => {
    //   this.element.parentElement.removeChild(this.element);
    // });
    El.destroy(this.element);
    window.removeEventListener('keydown', this.onKeyDown);
    window.clearTimeout(this.cTimeout);
    this.pulsing = false;
  }

  private endlessPulse = () => {
    if (!this.pulsing) return;
    animateDiv(this.startGame, AnimationType.SMOOTH_PULSE, 0, this.endlessPulse);
  }

  private nextPage = () => {
    this.leftImage.src = ImageUrl.InfoPages[this.cPage];
    this.instructions.innerHTML = StringData.InfoPages[this.cPage];
    this.navCircles.forEach((circle, i) => {
      if (i === this.cPage) {
        circle.classList.add('highlight');
      } else {
        circle.classList.remove('highlight');
      }
    });

    this.cPage = (this.cPage + 1) % ImageUrl.InfoPages.length;
    this.cTimeout = window.setTimeout(this.nextPage, this.SCROLL_SPEED);
  }

  private navLeft = () => {
    window.clearTimeout(this.cTimeout);
    this.cPage = this.cPage - 2;
    if (this.cPage < 0) this.cPage += ImageUrl.InfoPages.length;
    this.nextPage();
  }

  private navRight = () => {
    window.clearTimeout(this.cTimeout);
    this.nextPage();
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
    if (this.names.length >= 14) return;

    let el = this.makeNameElement();
    this.nameContainer.appendChild(el.element);
    this.nameContainer.appendChild(this.addButton);
    this.names.push(el);

    if (name) el.input.value = name;
    if (this.names.length >= 14) this.addButton.style.display = 'none';
    return el;
  }

  private removeNameElement = (el: IInputElement) => {
    if (this.names.length <= 1) return;

    this.nameContainer.removeChild(el.element);
    let i = this.names.indexOf(el);
    this.names.splice(i, 1);
    this.addButton.style.removeProperty('display');
  }

  private makeNameElement = () => {
    let element = El.makeDiv();
    let input = document.createElement('input');
    input.classList.add('name-element');
    input.maxLength = 12;

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
