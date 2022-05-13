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

  addElements(source: HTMLElement, ...children: HTMLElement[]) {
    children.forEach(child => source.appendChild(child));
  },
};
