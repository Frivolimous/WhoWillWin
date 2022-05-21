import { Facade } from '..';
import { ImageUrl } from '../data/ImageUrl';
import { StringData } from '../data/StringData';
import { El } from '../services/ElementFactory';
import { GameController } from '../services/GameController';
import { BaseUI } from './_BaseUI';

/* css used:
* main-ui
* main-logo
* bigger-text
* giant-button
*/

export class CardPreviewUI extends BaseUI {

  constructor() {
    super();
    this.element = El.makeDiv('preview-ui');
    let characterSection = El.makeDiv('preview-section-ui');
    let powerSection = El.makeDiv('preview-section-ui');
    let characters = El.makeText('Characters', 'biggest-text');
    let powers = El.makeText('Powers', 'biggest-text');
    El.addElements(this.element, characters, characterSection, powers, powerSection);

    for (let i = 0; i < StringData.CHARACTERS.length; i++) {
      if (GameController.GHMode || !GameController.testGHCharacter(i)) {
        characterSection.appendChild(this.makeCharacter(i));
      }
    }

    for (let i = 0; i < StringData.POWERS.length; i++) {
      if (GameController.GHMode || !GameController.testGHPower(i)) {
        powerSection.appendChild(this.makePower(i));
      }
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
