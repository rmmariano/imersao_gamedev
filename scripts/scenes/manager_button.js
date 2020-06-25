
class ManagerButton {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;

    this.button = createButton(this.text);
    // create a event when the user clicks on the button,
    // the currentScene changes
    this.button.mousePressed(() => this._changeScene());
    this.button.addClass('button-initial-screen');
  }

  draw() {
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }

  _changeScene() {
    this.button.remove();
    // change the scene from [initialScreen] to 'game'
    currentScene = 'game';
  }
}
