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
]
const enemyMatrix = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]

// objects
let scenario;
let gameSoundtrack;
let character;
let enemy;


function preload() {
  scenarioImage = loadImage('images/scenario/forest.png');
  characterImage = loadImage('images/character/running.png');
  enemyImage = loadImage('images/enemies/little_drop.png');
  gameSoundtrack = loadSound('songs/game_soundtrack.mp3');
}


function setup() {
  // it runs 1 time

  // create the canvas - where the game will be
  createCanvas(windowWidth, windowHeight);

  // create the objects
  scenario = new Scenario(scenarioImage, 3);
  character = new Character(characterImage);
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


function draw() {
  // it runs N times

  // circle(mouseX, mouseY, 250);

  scenario.show();
  scenario.move();

  character.show();

  enemy.show();
  // enemy.move();
}
