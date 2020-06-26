
class Life {
  constructor(total, initial) {
    this.total = total;
    this.initial = initial;
    this.lives = this.initial;

    this.width = 25;
    this.height = 25;
    this.initialX = 20;
    this.y = 20;
  }

  draw() {
    for (let i=0; i < this.lives; i++) {
      const margin = i * 10;
      const position = this.initialX * (i + 1);

      image(
        lifeImage,
        position + margin, this.y,
        this.width, this.height
      );
    }
  }

  gainLife() {
    if (this.lives <= this.total) {
      this.lives++;
    }
  }

  loseLife() {
    this.lives--;
  }
}