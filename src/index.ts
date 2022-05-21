import { BaseUI } from './pages/_BaseUI';
import { RoundUI } from './pages/RoundUI';
import { FontLoader } from './services/FontLoader';
import { FontArray } from './data/Fonts';
import { EndUI } from './pages/EndUI';
import { MainUI } from './pages/MainUI';
import { ElFactory } from './services/ElementFactory';
import { SetupUI } from './pages/SetupUI';
import { BottomControls } from './components/BottomControls';
import { PageRef } from './data/PageRef';
import { setupImageCards } from './data/ImageUrl';
import { StringData } from './data/StringData';
import { animateDiv, AnimationType } from './services/animateDiv';

export let interactionMode: 'desktop'|'mobile' = 'desktop';

export let Facade = new class FacadeInner {
  private static exists = false;

  public controlBar: BottomControls;

  private element: HTMLElement;
  private currentPage: BaseUI;
  private bottomBar: HTMLElement;
  private homeButton: HTMLElement;
  private creditsButton: HTMLElement;

  constructor() {
    if (FacadeInner.exists) throw new Error('Cannot instatiate more than one Facade Singleton.');
    FacadeInner.exists = true;
    try {
      document.createEvent('TouchEvent');
      interactionMode = 'mobile';
    } catch (e) {

    }
    this.element = document.getElementById('main');

    this.bottomBar = ElFactory.makeBottomBar();
    this.controlBar = new BottomControls();
    let body = document.body;
    body.appendChild(this.bottomBar);
    this.homeButton = ElFactory.makeHomeButton();
    this.creditsButton = ElFactory.makeCreditsButton();
    body.appendChild(this.homeButton);
    body.appendChild(this.creditsButton);
    body.appendChild(this.controlBar.element);

    setupImageCards(StringData.CHARACTERS.length, StringData.POWERS.length);

    FontLoader.load(FontArray);
    window.requestAnimationFrame(() => this.init());
  }

  public init() {
    let hash = window.location.hash;
    let page = PageRef.find(el => el.slug === hash);
    if (page) {
      this.navTo(new page.con());
    } else {
      this.navTo(new MainUI());
    }
    // this.navTo(new MainUI());
    // this.navTo(new SetupUI());
    // this.navTo(new RoundUI());
    // this.navTo(new EndUI());
  }

  public navTo(nextPage: BaseUI) {
    if (this.currentPage) {
      this.currentPage.navOut();
    }

    // this.element.innerHTML = '';
    this.currentPage = nextPage;
    this.element.appendChild(nextPage.element);
    nextPage.navIn();
  }

  public showHome(b: boolean) {
    if (b) {
      this.homeButton.style.removeProperty('display');
    } else {
      this.homeButton.style.display = 'none';
    }
  }

  public showCredits(b: boolean) {
    if (b) {
      this.creditsButton.style.removeProperty('display');
    } else {
      this.creditsButton.style.display = 'none';
    }
  }

  public popCredits(delay: number = 0) {
    animateDiv(this.creditsButton, AnimationType.BASIC_POP, delay);
  }

  public showBottom(b: boolean) {
    if (b) {
      this.bottomBar.style.removeProperty('display');
    } else {
      this.bottomBar.style.display = 'none';
    }
  }
}();
