
class Enemy extends Animation {
  constructor(_matrix, _image, _x, _yVariation, _width, _height, _spriteWidth, _spriteHeight, _speed) {
    super(_matrix, _image, _x, _yVariation, _width, _height, _spriteWidth, _spriteHeight);

    this.speed = _speed;
    this.x = width;
  }

  move() {
    this.x = this.x - this.speed;
  }

  appear() {
    this.x = width;
  }
}
