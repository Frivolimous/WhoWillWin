import { StringData } from '../data/StringData';
import { animateDiv, AnimationType } from '../services/animateDiv';

export class InfoPanel {
  private element: HTMLDivElement;
  private contentElement: HTMLDivElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('info-panel');
    document.body.appendChild(this.element);
    let top = document.createElement('div');
    top.classList.add('top');
    this.element.appendChild(top);
    top.innerHTML = `
    <div class="info-title">${StringData.INFO_TITLE}</div>
    <div class="info-subtitle">${StringData.INFO_SUBTITLE}</div>`;
    this.contentElement = document.createElement('div');
    this.contentElement.classList.add('info-content');
    top.appendChild(this.contentElement);
    this.contentElement.innerHTML = StringData.INFO_DESCRIPTION;
    let button = document.createElement('button');
    button.classList.add('close-button');
    this.element.appendChild(button);
    button.innerHTML = 'X';
    button.addEventListener('click', () => this.hidden = true);
    this.element.style.display = 'none';
  }

  public get hidden(): boolean {
    return this.element.style.display === 'none';
  }

  public set hidden(b: boolean) {
    if (b) {
      // this.element.style.display = 'none';
      animateDiv(this.element, AnimationType.SHRINK_OUT);
    } else {
      animateDiv(this.element, AnimationType.GROW_IN);
      this.element.style.removeProperty('display');
    }
  }

  public destroy = () => {
    document.body.removeChild(this.element);
  }
}
