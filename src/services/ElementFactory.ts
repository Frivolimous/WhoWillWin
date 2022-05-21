import { Facade } from '..';
import { SessionData } from '../Config';
import { ImageUrl } from '../data/ImageUrl';
import { StringData } from '../data/StringData';
import { CreditsUI } from '../pages/CreditsUI';
import { MainUI } from '../pages/MainUI';
import { SetupUI } from '../pages/SetupUI';

export const El = {
  makeText: (title: string, className?: string) => {
    let el = document.createElement('div');
    if (className) el.classList.add(className);
    el.innerHTML = title;
    return el;
  },

  makeDiv: (className?: string) => {
    let el = document.createElement('div');
    if (className) el.classList.add(className);

    return el;
  },

  makeButton: (title: string, className: string, onClick: () => void) => {
    let el = document.createElement('button');
    if (className) el.classList.add(className);
    el.innerHTML = title;
    el.addEventListener('click', onClick);
    return el;
  },

  makeImg: (url: string, className?: string) => {
    let el = document.createElement('img');
    if (className) el.classList.add(className);
    el.src = url;

    return el;
  },

  addElements(source: HTMLElement, ...children: HTMLElement[]) {
    children.forEach(child => source.appendChild(child));
  },

  destroy(el: HTMLElement) {
    let parent = el.parentElement;
    if (parent) parent.removeChild(el);
  },

  destroyThese(...els: HTMLElement[]) {
    els.forEach(el => El.destroy(el));
  },
};

export const ElFactory = {
  makeAlert: (content: string) => {
    let element = document.createElement('div');
    element.classList.add('info-popup');
    element.innerHTML = content;
    document.body.appendChild(element);
    window.setTimeout(() => document.body.removeChild(element), 1500);
  },

  makeBottomBar: () => {
    let bottom = El.makeDiv('bottom-bar');
    let bottomText = El.makeText(StringData.BOTTOM_DESCRIPTION, 'small-text');
    let TOGraphic = El.makeImg(ImageUrl.ToJam, 'bottom-image');
    let GHGraphic = El.makeImg(ImageUrl.GameHive, 'bottom-image');
    El.addElements(bottom, bottomText, GHGraphic, TOGraphic);

    return bottom;
  },

  makeHomeButton: () => {
    let home = El.makeButton('', 'home-button', () => Facade.navTo(new SetupUI()));
    let img = El.makeImg(ImageUrl.IconHome);
    img.style.width = '3em';
    home.appendChild(img);

    return home;
  },

  makeCreditsButton: () => {
    let credits = El.makeButton('Credits', 'credits-button', () => Facade.navTo(new CreditsUI()));
    // let img = El.makeImg(ImageUrl.IconCredits);
    // img.style.width = '3em';
    // credits.appendChild(img);

    return credits;
  },

  makeLeaderboard: () => {
    let tableInner = document.createElement('table');
    tableInner.classList.add('leaderboard');
    let head = tableInner.createTHead();
    let row = head.insertRow();
    let th0 = document.createElement('th');
    let th1 = document.createElement('th');
    th0.appendChild(document.createTextNode(StringData.TABLE_NAME));
    th1.appendChild(document.createTextNode(StringData.TABLE_SCORE));
    row.appendChild(th0);
    row.appendChild(th1);

    SessionData.players.forEach((el, i) => {
      let score = SessionData.players[i].score;
      row = tableInner.insertRow();
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(el.slug));
      cell = row.insertCell();
      cell.appendChild(document.createTextNode(score.toString()));
    });

    return tableInner;
  },

  makePlayerSection: (name: string) => {
    let section = El.makeDiv('player-section');
    let cardSection = El.makeDiv('card-section');
    let nameTitle = El.makeText(name, 'name-title');
    let card1El = El.makeDiv('card');
    let card2El = El.makeDiv('card');
    // card1El.innerHTML = card1;
    // card2El.innerHTML = card2;
    El.addElements(cardSection, card1El, card2El);
    El.addElements(section, nameTitle, cardSection);

    return [section, nameTitle, card1El, card2El];
  },
};
