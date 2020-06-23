// images
let scenarioImage;
let characterImage;
let enemyImage;

// image matrixes
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

// sounds
let gameSoundtrack;
let jumpSound;

// objects
let scenario;
let character;
let enemy;


function preload() {
  scenarioImage = loadImage('images/scenario/forest.png');
  characterImage = loadImage('images/character/running.png');
  enemyImage = loadImage('images/enemies/little_drop.png');
  gameSoundtrack = loadSound('songs/game_soundtrack.mp3');
  jumpSound = loadSound('songs/jump_sound.mp3');
}


function setup() {
  // it runs 1 time

  // create the canvas - where the game will be
  createCanvas(windowWidth, windowHeight);

  // create the objects
  scenario = new Scenario(scenarioImage, 3);
  character = new Character(
    characterMatrix, characterImage,
    0,
    110, 135,
    220, 270
  );
  enemy = new Enemy(
    enemyMatrix, enemyImage,
    width - 52,
    52, 52,
    104, 104
  );

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

  // circle(mouseX, mouseY, 250);

  scenario.show();
  scenario.move();

  character.show();
  character.applyGravity();

  enemy.show();
  enemy.move();

  if (character.isColliding(enemy)) {
    console.log('Collision');
    noLoop(); // draw() function stops running
  }
}
