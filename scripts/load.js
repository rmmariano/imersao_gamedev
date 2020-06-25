
function preload() {
  // it runs before the game starts

  // fonts
  fontInitialScreen = loadFont('images/assets/font_initial_screen.otf');

  // images
  initialScreenImage = loadImage('images/assets/initial_screen.png');
  scenarioImage = loadImage('images/scenario/forest.png');
  gameOverImage = loadImage('images/assets/game_over.png');

  characterImage = loadImage('images/character/running.png');
  enemyImage = loadImage('images/enemies/small_drop.png');
  flyingEnemyImage = loadImage('images/enemies/flying_small_drop.png');
  bigEnemyImage = loadImage('images/enemies/troll.png');

  // sounds
  gameSoundtrack = loadSound('songs/game_soundtrack.mp3');
  jumpSound = loadSound('songs/jump_sound.mp3');
}
