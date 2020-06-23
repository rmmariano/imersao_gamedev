
class Enemy extends Animation {
  constructor(_matrix, _image, _x, _width, _height, _spriteWidth, _spriteHeight) {
    super(_matrix, _image, _x, _width, _height, _spriteWidth, _spriteHeight);

    this.speed = 5;
  }

  move() {
    this.x = this.x - this.speed;

    if (this.x < -this.width) {
      this.x = width;
    }
  }
}
