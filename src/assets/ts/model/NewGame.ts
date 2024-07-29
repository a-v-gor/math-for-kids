export default class NewGame {
  userName: string;

  constructor(userName: string) {
    this.userName = userName;
  }

  start() {
    console.log('start new game');
  }
}
