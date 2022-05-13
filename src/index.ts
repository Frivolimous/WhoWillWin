import * as PIXI from 'pixi.js';
import { JMRect } from './JMGE/others/JMRect';
import { BaseUI } from './pages/_BaseUI';
import { InfoPanel } from './components/domui/InfoPanel';
import { RoundUI } from './pages/RoundUI';
import { FontLoader } from './services/FontLoader';
import { FontArray } from './data/Fonts';
import { ScoreUI } from './pages/ScoreUI';
import { EndUI } from './pages/EndUI';
import { MainUI } from './pages/MainUI';

export let interactionMode: 'desktop'|'mobile' = 'desktop';

export let Facade = new class FacadeInner {
  private static exists = false;
  public app: PIXI.Application;
  public stageBorders: JMRect;
  public innerBorders: JMRect;
  public screen: PIXI.Container;
  public border: PIXI.Graphics;

  public instructions: InfoPanel;

  private element: HTMLElement;

  private currentPage: BaseUI;

  constructor() {
    console.warn = (a: any) => {};
    if (FacadeInner.exists) throw new Error('Cannot instatiate more than one Facade Singleton.');
    FacadeInner.exists = true;
    try {
      document.createEvent('TouchEvent');
      interactionMode = 'mobile';
    } catch (e) {

    }

    // Setup PIXI
    this.element = document.getElementById('main');

    this.navTo(new MainUI());

    this.instructions = new InfoPanel();
    // FontLoader.load(FontArray).then(() => console.log('Fonts Loaded'));
    // let fonts: string[] = _.map(Fonts);

    // // load fonts then preloader!
    // // window.requestAnimationFrame(() => FontLoader.load(fonts).then(this.init));
    // window.requestAnimationFrame(() => this.init());
  }

  public navTo(nextPage: BaseUI) {
    if (this.currentPage) {
      this.currentPage.navOut();
    }

    this.element.innerHTML = '';
    this.currentPage = nextPage;
    this.element.appendChild(nextPage.element);
    nextPage.navIn();
  }

  public showInstructions() {
    this.instructions.hidden = false;
  }
}();
