
class Character {
  constructor(image) {
    this.image = image;
    this.matrix = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ];
    this.currentFrame = 0;
  }

  show() {
    image(this.image,
      0, height-135, // where the image must be on the screen (x, y)
      110, 135, // image size on the screen
      this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], // (x, y) inside the image
      220, 270 // total size inside image size (image proportion)
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
