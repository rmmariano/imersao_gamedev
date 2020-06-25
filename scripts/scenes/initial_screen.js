
class InitialScreen {
  constructor() {

  }

  draw() {
    this._backgroundImage();
    this._text();
    this._button();
  }

  _backgroundImage() {
    image(
      initialScreenImage,
      0, 0, // where the image must start to appear
      width, height // image size
    );
  }

  _text() {
    textFont(fontInitialScreen);
    textAlign(CENTER);
    textSize(50);
    text('The Adventures of', width/2, height/3);
    textSize(100);
    text('Hipsta', width/2, height/5*3);
  }

  _button() {
    managerButton.y = height/7*5;
    managerButton.draw();
  }
}
