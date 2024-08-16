export default abstract class ViewPage {
  body: HTMLBodyElement;

  constructor() {
    this.body = <HTMLBodyElement>document.body;
  }
  clear() {
    this.body.innerHTML = '';
  }
}
