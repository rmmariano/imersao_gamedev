// images
let scenarioImage;
let gameOverImage;
let characterImage;
let enemyImage;
let flyingEnemyImage;
let bigEnemyImage;

// images matrixes
const characterMatrix = [
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
const enemyMatrix = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
];
const flyingEnemyMatrix = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];
const bigEnemyMatrix = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

// sounds
let gameSoundtrack;
let jumpSound;

// objects
let scenario;
let character;
let points;

// array of enemies
const enemies = [];


function preload() {
  // it runs before the game starts

  // images
  scenarioImage = loadImage('images/scenario/forest.png');
  gameOverImage = loadImage('images/assets/game-over.png');

  characterImage = loadImage('images/character/running.png');
  enemyImage = loadImage('images/enemies/small_drop.png');
  flyingEnemyImage = loadImage('images/enemies/flying_small_drop.png');
  bigEnemyImage = loadImage('images/enemies/troll.png');

  // sounds
  gameSoundtrack = loadSound('songs/game_soundtrack.mp3');
  jumpSound = loadSound('songs/jump_sound.mp3');
}


function setup() {
  // it runs 1 time

  // create the canvas - where the game will be
  createCanvas(windowWidth, windowHeight);

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
    10, 200
  );
  const flyingEnemy = new Enemy(
    flyingEnemyMatrix, flyingEnemyImage,
    width - 52, 200,
    100, 75,
    200, 150,
    10, 1500
  );
  const bigEnemy = new Enemy(
    bigEnemyMatrix, bigEnemyImage,
    width * 2, 0,
    200, 200,
    400, 400,
    10, 2500
  );

  // add the enemies to the array
  enemies.push(enemy);
  enemies.push(flyingEnemy);
  enemies.push(bigEnemy);

  // frames per second
  frameRate(40);

  // turn on the sound
  gameSoundtrack.loop();
}


function keyPressed() {
  // it is a observable

  if (key === 'ArrowUp') {
    character.jump();
    jumpSound.play();
  }
}


function draw() {
  // it runs N times

  scenario.show();
  scenario.move();

  points.show();
  points.addPoint();

  character.show();
  character.applyGravity();

  enemies.forEach(enemy => {
    enemy.show();
    enemy.move();

    if (character.isColliding(enemy)) {
      image(gameOverImage, width/2 - 200, height/3);
      noLoop(); // draw() function stops running
    }
  });
}
