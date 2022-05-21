import { ImageUrl } from '../data/ImageUrl';
import { animateDiv, AnimationType } from '../services/animateDiv';
import { El } from '../services/ElementFactory';

export class Avatar {
  public element: HTMLDivElement;
  public image: HTMLImageElement;

  constructor() {
    this.element = El.makeDiv('avatar-container');
    this.image = El.makeImg(ImageUrl.PlayerTalk1, 'avatar-content');
    El.addElements(this.element, this.image);
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

  public setState(state: AvatarState) {
    switch (state) {
      case 'active': this.image.src = ImageUrl.PlayerTalk1; break;
      case 'passive': this.image.src = ImageUrl.PlayerWait1; break;
      case 'win': this.image.src = ImageUrl.PlayerWin1; break;
      case 'lose': this.image.src = ImageUrl.PlayerLose1; break;
      case 'neutral': this.image.src = ImageUrl.PlayerNeutral1; break;
      case 'ready': this.image.src = ImageUrl.PlayerReady1; break;
    }
  }

  public faceRight(b: boolean) {
    if (b) {
      this.image.style.transform = 'scaleX(-1)';
    } else {
      this.image.style.removeProperty('transform');
      this.element.classList.add('avatar-right');
    }
  }
}

type AvatarState = 'active' | 'passive' | 'win' | 'lose' | 'neutral' | 'ready';
