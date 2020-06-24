
class Character extends Animation {
  constructor(_matrix, _image, _x, _yVariation, _width, _height, _spriteWidth, _spriteHeight) {
    super(_matrix, _image, _x, _yVariation, _width, _height, _spriteWidth, _spriteHeight);

    this._yVariation = _yVariation;

    this.initialY = height - this.height - this._yVariation;
    this.y = this.initialY;

    this.jumpSpeed = 0;
    this.gravity = 5;

    this.jumpHeight = -50;
    this.jumps = 0;
  }

  jump() {
    if (this.jumps < 2) {
      this.jumpSpeed = this.jumpHeight;
      this.jumps++;
    }
  }

  applyGravity(){
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;

    if (this.y > this.initialY) {
      // put the character on the ground
      this.y = this.initialY;
      // reset the jumps
      this.jumps = 0;
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


// https://youtu.be/IuVlkxZd4GE?t=2721