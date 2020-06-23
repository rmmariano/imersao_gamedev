
class Enemy extends Animation {
  constructor(matrix, image, x, width, height, spriteWidth, spriteHeight) {
    super(matrix, image, x, width, height, spriteWidth, spriteHeight);

    this.speed = 5;
  }

  move() {
    this.x = this.x - this.speed;

    if (this.x < -this.width) {
      this.x = width;
    }
  }
}
