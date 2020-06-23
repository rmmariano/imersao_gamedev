let scenarioImage;
let characterImage;
let gameSoundtrack;
let character;

function preload() {
  scenarioImage = loadImage('images/scenario/forest.png');
  characterImage = loadImage('images/character/running.png');
  gameSoundtrack = loadSound('songs/game_soundtrack.mp3');
}

function setup() {
  // it runs 1 time

  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  character = new Character(characterImage);
  frameRate(40);  // frame per second
  gameSoundtrack.loop();
}

function draw() {
  // it runs N times

  // circle(mouseX, mouseY, 250);

  scenario.show();
  scenario.move();
  character.show();
}

// python -m SimpleHTTPServer