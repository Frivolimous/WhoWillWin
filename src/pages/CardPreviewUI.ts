import { Facade } from '..';
import { ImageUrl } from '../data/ImageUrl';
import { StringData } from '../data/StringData';
import { JMTween } from '../JMGE/JMTween';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El, ElFactory } from '../services/ElementFactory';
import { SetupUI } from './SetupUI';
import { BaseUI } from './_BaseUI';

/* css used:
* main-ui
* main-logo
* bigger-text
* giant-button
*/

export class CardPreviewUI extends BaseUI {
  // private title: HTMLElement;
  // private content: HTMLElement;
  // private button1: HTMLElement;
  // private button2: HTMLElement;

  constructor() {
    super();
    this.element = El.makeDiv('preview-ui');
    let characterSection = El.makeDiv('preview-section-ui');
    let powerSection = El.makeDiv('preview-section-ui');
    let characters = El.makeText('Characters', 'biggest-text');
    let powers = El.makeText('Powers', 'biggest-text');
    El.addElements(this.element, characters, characterSection, powers, powerSection);

    for (let i = 0; i < StringData.CHARACTERS.length; i++) {
      characterSection.appendChild(this.makeCharacter(i));
    }

    for (let i = 0; i < StringData.POWERS.length; i++) {
      powerSection.appendChild(this.makePower(i));
    }

    Facade.showHome(true);
    Facade.showBottom(false);
    Facade.showCredits(false);
    Facade.controlBar.hidden = true;
  }

  public navIn() {
    // animateDiv(this.button2, AnimationType.BASIC_POP, 900);
  }

  public navOut() {
      this.element.parentElement.removeChild(this.element);
  }

  private makeCharacter(slug: number) {
    let card = El.makeDiv('card');
    card.innerHTML = `<img src = ${ImageUrl.Characters[slug]} class = "card-image"><div class= "card-text">${StringData.CHARACTERS[slug]}</div>`;
    return card;
  }

  private makePower(slug: number) {
    let card = El.makeDiv('card');
    card.innerHTML = `<img src = ${ImageUrl.Powers[slug]} class = "card-image"><div class= "card-text">${StringData.POWERS[slug]}</div>`;
    return card;
  }
}
