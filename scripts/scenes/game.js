
class Game {
  constructor() {
    this.index = 0;
    this.map = cartridge.map;
  }

  setUp() {
    // create the objects
    scenario = new Scenario(scenarioImage, 3);
    points = new Point();
    life = new Life(
      cartridge.settings.life.maximum,
      cartridge.settings.life.initial
    );

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
      10
    );
    const flyingEnemy = new Enemy(
      flyingEnemyMatrix, flyingEnemyImage,
      width - 52, 200,
      100, 75,
      200, 150,
      10
    );
    const bigEnemy = new Enemy(
      bigEnemyMatrix, bigEnemyImage,
      width * 2, 0,
      200, 200,
      400, 400,
      15
    );

    // add the enemies to the array
    enemies.push(enemy);
    enemies.push(bigEnemy);
    enemies.push(flyingEnemy);
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

    life.draw();

    points.show();
    points.addPoint();

    character.show();
    character.applyGravity();

    const currentLine = this.map[this.index];

    const enemy = enemies[currentLine.enemy];
    enemy.speed = currentLine.speed;

    // has already the enemy left from the screen?
    const visibleEnemy = enemy.x < -enemy.width;

    enemy.show();
    enemy.move();

    if (visibleEnemy) {
      this.index++;
      enemy.appear();

      if (this.index > this.map.length - 1) {
        this.index = 0;
      }
    }

    if (character.isColliding(enemy)) {
      life.loseLife();
      character.becomeInvincible();

      if (life.lives === 0) {
        image(gameOverImage, width/2 - 200, height/3);
        noLoop(); // draw() function stops running
      }
    }
  }
}
