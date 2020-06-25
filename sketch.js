
function setup() {
  // it runs 1 time

  // create the canvas - where the game will be
  createCanvas(windowWidth, windowHeight);

  // frames per second
  frameRate(40);

  // turn on the sound
  gameSoundtrack.loop();

  // managerButton
  managerButton = new ManagerButton('Start', width/2, height/2);

  // initialScreen
  initialScreen = new InitialScreen();

  // game
  game = new Game();
  game.setUp();

  // scenes
  scenes = {
    game,
    initialScreen
  };
}


function keyPressed() {
  // it is a observable

  game.keyPressed(key);
}


function draw() {
  // it runs N times

  scenes[currentScene].draw();

  // if (currentScene === 'game') {
  //   game.draw();
  // }
}
