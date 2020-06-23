
class Character extends Animation {
  constructor(_matrix, _image, _x, _width, _height, _spriteWidth, _spriteHeight) {
    super(_matrix, _image, _x, _width, _height, _spriteWidth, _spriteHeight);

    this.initialY = height - this.height;
    this.y = this.initialY;

    this.jumpSpeed = 0;
    this.gravity = 3;
  }

  jump() {
    this.jumpSpeed = -30;
  }

  applyGravity(){
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;

    if (this.y > this.initialY) {
      this.y = this.initialY;
    }
  }

  isColliding(enemy) {
    const precision = 0.7;

    const collision =  collideRectRect(
      this.x, this.y,
      this.width * precision, this.height * precision, // character information
      enemy.x, enemy.y,
      enemy.width * precision, enemy.height * precision,
    );

    return collision;
  }
}
