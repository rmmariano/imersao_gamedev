
class Enemy extends Animation {
  constructor(_matrix, _image, _x, _yVariation, _width, _height, _spriteWidth, _spriteHeight, _speed, _delay) {
    super(_matrix, _image, _x, _yVariation, _width, _height, _spriteWidth, _spriteHeight);

    this.speed = _speed;
    this.delay = _delay;
    this.x = width + this.delay;
  }

  move() {
    this.x = this.x - this.speed;

    if (this.x < -this.width - this.delay) {
      this.x = width;
    }
  }
}
