import { Facade } from '..';
import { ImageUrl } from '../data/ImageUrl';
import { StringData } from '../data/StringData';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El } from '../services/ElementFactory';
import { SetupUI } from './SetupUI';
import { BaseUI } from './_BaseUI';

/* css used:
* credits-ui
* credits-middle
* credits-bottom
* credits-card
* credits-card-small
* credits-card-image
* credits-card-image-small
*/

export class CreditsUI extends BaseUI {
  private title: HTMLElement;
  private leftCard: HTMLDivElement;
  private rightCard: HTMLDivElement;
  private bottomCard: HTMLDivElement;
  private button1: HTMLElement;

  constructor() {
    super();
    this.element = El.makeDiv('credits-ui');

    this.title = El.makeText(StringData.CREDITS_TITLE, 'biggest-text');
    let middle = El.makeDiv('credits-middle');
    let bottom = El.makeDiv('credits-bottom');
    this.leftCard = El.makeDiv('credits-card');
    let leftCard = El.makeDiv('card');
    let leftImg = El.makeImg(ImageUrl.PortraitLeft, 'credits-card-image');
    let leftTitle = El.makeText(StringData.CREDITS_LEFT_TITLE, 'big-text');
    let leftContent = El.makeText(StringData.CREDITS_LEFT_CONTENT, 'medium-text');
    this.rightCard = El.makeDiv('credits-card');
    let rightCard = El.makeDiv('card');
    let rightImg = El.makeImg(ImageUrl.PortraitRight, 'credits-card-image');
    let rightTitle = El.makeText(StringData.CREDITS_RIGHT_TITLE, 'big-text');
    let rightContent = El.makeText(StringData.CREDITS_RIGHT_CONTENT, 'medium-text');
    this.bottomCard = El.makeDiv('credits-card-small');
    let bottomCard = El.makeDiv('card-small');
    let bottomImg = El.makeImg(ImageUrl.PortraitSmall, 'credits-card-image-small');
    let bottomTitle = El.makeText(StringData.CREDITS_SMALL_TITLE, 'small-text');
    let bottomContent = El.makeText(StringData.CREDITS_SMALL_CONTENT, 'tiny-text');
    let made = El.makeText(StringData.CREDITS_MADE_AT, 'medium-text');
    let gamehiveText = El.makeText(StringData.CREDITS_GH, 'medium-text');
    made.style.margin = '0.5em';
    let logo = El.makeImg(ImageUrl.ToJam, 'bottom-image');
    logo.style.marginLeft = '0.5em';
    let ghLogo = El.makeImg(ImageUrl.GameHive, 'bottom-image');
    ghLogo.style.height = '2em';
    ghLogo.style.marginLeft = '0.3em';
    ghLogo.style.transform = 'translateY(0.3em)';
    this.button1 = El.makeButton(StringData.BUTTON_BACK, 'info-button', this.navigateBack);

    Facade.showHome(false);
    Facade.showBottom(false);
    Facade.showCredits(false);
    Facade.controlBar.hidden = true;

    El.addElements(this.element, this.title, gamehiveText, middle, bottom);
    El.addElements(middle, this.leftCard, this.rightCard);
    El.addElements(bottom, this.bottomCard, this.button1, made);
    El.addElements(made, logo);
    El.addElements(gamehiveText, ghLogo);
    El.addElements(this.leftCard, leftCard, leftTitle, leftContent);
    El.addElements(leftCard, leftImg);
    El.addElements(this.rightCard, rightCard, rightTitle, rightContent);
    El.addElements(rightCard, rightImg);
    El.addElements(this.bottomCard, bottomCard, bottomTitle, bottomContent);
    El.addElements(bottomCard, bottomImg);

  }

  public navIn() {
  //   animateDiv(this.title, AnimationType.BASIC_POP, 300);
  //   animateDiv(this.content, AnimationType.BASIC_POP, 600);
  //   animateDiv(this.button1, AnimationType.BASIC_POP, 900);
    // animateDiv(this.button2, AnimationType.BASIC_POP, 900);
  }

  public navOut() {
    this.element.parentElement.removeChild(this.element);
  }

  private navigateBack = () => {
    Facade.navTo(new SetupUI());
  }
}
