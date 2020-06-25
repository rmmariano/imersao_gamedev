
class Game {
  constructor() {
    this.currentEnemy = 0;
  }

  setUp() {
    // create the objects
    scenario = new Scenario(scenarioImage, 3);
    points = new Point();
    character = new Character(
      characterMatrix, characterImage,
      0, 30,
      110, 135,
      220, 270
    );

    // create the enemies
    const enemy = new Enemy(
      enemyMatrix, enemyImage,
      width - 52, 30,
      52, 52,
      104, 104,
      10, 100
    );
    const flyingEnemy = new Enemy(
      flyingEnemyMatrix, flyingEnemyImage,
      width - 52, 200,
      100, 75,
      200, 150,
      10, 100
    );
    const bigEnemy = new Enemy(
      bigEnemyMatrix, bigEnemyImage,
      width * 2, 0,
      200, 200,
      400, 400,
      15, 100
    );

    // add the enemies to the array
    enemies.push(enemy);
    enemies.push(flyingEnemy);
    enemies.push(bigEnemy);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      character.jump();
      jumpSound.play();
    }
  }

  draw() {
    scenario.show();
    scenario.move();

    points.show();
    points.addPoint();

    character.show();
    character.applyGravity();

    const enemy = enemies[this.currentEnemy];

    // has already the enemy left from the screen?
    const visibleEnemy = enemy.x < -enemy.width;

    enemy.show();
    enemy.move();

    if (visibleEnemy) {
      this.currentEnemy++;

      if (this.currentEnemy > 2) {
        this.currentEnemy = 0;
      }

      enemy.speed = parseInt(random(10, 20));
    }

    if (character.isColliding(enemy)) {
      image(gameOverImage, width/2 - 200, height/3);
      noLoop(); // draw() function stops running
    }
  }
}
