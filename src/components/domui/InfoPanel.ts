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
    <div class="info-title">Instructions</div>
    <div class="info-subtitle">How To Play</div>`;
    this.contentElement = document.createElement('div');
    this.contentElement.classList.add('info-content');
    top.appendChild(this.contentElement);
    this.contentElement.innerHTML = 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ';
    let button = document.createElement('button');
    button.classList.add('close-button');
    this.element.appendChild(button);
    button.innerHTML = 'X';
    button.addEventListener('click', () => this.hidden = true);
    this.hidden = true;

  }

  public get hidden(): boolean {
    return this.element.style.display === 'none';
  }

  public set hidden(b: boolean) {
    if (b) {
      this.element.style.display = 'none';
    } else {
      this.element.style.removeProperty('display');
    }
  }

  public destroy = () => {
    document.body.removeChild(this.element);
  }

}
