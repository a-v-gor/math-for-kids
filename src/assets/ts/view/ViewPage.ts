// import appPages from "./appPages";

export default abstract class ViewPage {
  body: HTMLBodyElement;
  header: HTMLElement;
  main: HTMLElement;
  footer: HTMLElement;
  pageName: string;

  constructor(
    name: string,
    header: HTMLHeadElement,
    main: HTMLElement,
    footer: HTMLElement
  ) {
    this.body = <HTMLBodyElement>document.body;
    this.header = header;
    this.main = main;
    this.footer = footer;
    this.pageName = name;
  }
  savePageToState = () => {
    // appPages[this.pageName] = this;
    console.log(this.pageName);
  };
  show() {
    this.body.append(this.header, this.main, this.footer);
  }
  hide() {
    this.body.innerHTML = '';
  }
}
