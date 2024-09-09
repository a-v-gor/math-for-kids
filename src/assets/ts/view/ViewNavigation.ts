import returnElement from './returnElement';

export default class ViewNavigation {
  nav: HTMLElement;
  navHome: HTMLElement;
  navHelp: HTMLElement;

  constructor() {
    this.nav = returnElement({
      tag: 'nav',
      classes: ['menu'],
    });
    const navUl = returnElement({
      tag: 'ul',
      classes: ['menu__ul'],
    });
    this.navHome = <HTMLLIElement>returnElement({
      tag: 'li',
      classes: ['menu__item', 'menu__home'],
    });
    this.navHelp = <HTMLLIElement>returnElement({
      tag: 'li',
      classes: ['menu__item', 'menu__instruction'],
    });

    navUl.append(this.navHome, this.navHelp);
    this.nav.append(navUl);
  }

  returnElement() {
    return this.nav;
  }

  returnHomeButton() {
    return this.navHome;
  }

  returnHelpButton() {
    return this.navHelp;
  }
}
