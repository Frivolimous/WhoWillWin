import { BaseUI } from './pages/_BaseUI';
import { InfoPanel } from './components/InfoPanel';
import { RoundUI } from './pages/RoundUI';
import { FontLoader } from './services/FontLoader';
import { FontArray } from './data/Fonts';
import { EndUI } from './pages/EndUI';
import { MainUI } from './pages/MainUI';
import { ElFactory } from './services/ElementFactory';
import { SetupUI } from './pages/SetupUI';

export let interactionMode: 'desktop'|'mobile' = 'desktop';

export let Facade = new class FacadeInner {
  private static exists = false;

  public instructions: InfoPanel;

  private element: HTMLElement;
  private currentPage: BaseUI;
  private bottomBar: HTMLElement;
  private homeButton: HTMLElement;

  constructor() {
    if (FacadeInner.exists) throw new Error('Cannot instatiate more than one Facade Singleton.');
    FacadeInner.exists = true;
    try {
      document.createEvent('TouchEvent');
      interactionMode = 'mobile';
    } catch (e) {

    }
    this.element = document.getElementById('main');

    this.instructions = new InfoPanel();
    this.bottomBar = ElFactory.makeBottomBar();
    let body = document.body;
    body.appendChild(this.bottomBar);
    this.homeButton = ElFactory.makeHomeButton();
    body.appendChild(this.homeButton);

    FontLoader.load(FontArray);
    window.requestAnimationFrame(() => this.init());
  }

  public init() {
    // this.navTo(new MainUI());
    // this.navTo(new SetupUI());
    this.navTo(new RoundUI());
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

  public showInstructions() {
    this.instructions.hidden = false;
  }

  public showHome(b: boolean) {
    if (b) {
      this.homeButton.style.removeProperty('display');
    } else {
      this.homeButton.style.display = 'none';
    }
  }
}();
