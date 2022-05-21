import { CardPreviewUI } from '../pages/CardPreviewUI';
import { CreditsUI } from '../pages/CreditsUI';
import { EndUI } from '../pages/EndUI';
import { MainUI } from '../pages/MainUI';
import { RoundUI } from '../pages/RoundUI';
import { SetupUI } from '../pages/SetupUI';
import { BaseUI } from '../pages/_BaseUI';

export const PageRef: IPageRef[] = [
  {
    slug: '#mainmenu',
    con: MainUI,
  },
  {
    slug: '#gamesetup',
    con: SetupUI,
  },
  {
    slug: '#gameround',
    con: RoundUI,
  },
  {
    slug: '#gameover',
    con: EndUI,
  },
  {
    slug: '#preview',
    con: CardPreviewUI,
  },
  {
    slug: '#credits',
    con: CreditsUI,
  },
];

interface IPageRef {
  slug: string;
  con: typeof BaseUI;
}
