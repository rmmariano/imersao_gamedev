
class Point {
  constructor() {
    this.points = 0;
  }

  show() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.points), width-30, 50);
  }

  addPoint() {
    this.points = this.points + 0.2;
  }
}
