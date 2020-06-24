
class Animation {
  constructor(_matrix, _image, _x, _yVariation,_width, _height, _spriteWidth, _spriteHeight) {
    this.matrix = _matrix;
    this.image = _image;
    this.width = _width;
    this.height = _height;
    this.x = _x;
    // `_yVariation` is used to prevent the character from sticking to the bottom corner of the screen
    this._yVariation = _yVariation;
    this.y = height - this.height - this._yVariation;
    this.spriteWidth = _spriteWidth;
    this.spriteHeight = _spriteHeight;
    this.currentFrame = 0;
  }

  show() {
    // image(this.image,
    //   0, height-135, // where the image must be on the screen (x, y)
    //   110, 135, // image size on the screen
    //   this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], // (x, y) inside the image
    //   220, 270 // total size inside image size (image proportion)
    // );

    image(this.image,
      this.x, this.y, // where the image must be on the screen (x, y)
      this.width, this.height, // image size on the screen
      this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], // (x, y) inside the image
      this.spriteWidth, this.spriteHeight // total size inside image size (image proportion)
    );

    this.animate();
  }

  animate() {
    this.currentFrame++;

    if (this.currentFrame >= this.matrix.length-1) {
      this.currentFrame = 0;
    }
  }
}
