let config = {
  parent: 'myGame',
  type: Phaser.AUTO,
  width: 720,
  height: 640,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [Load, Menu, Instruct, Play, GameOver],
  physics: {
    default: 'arcade',
    debug: false
  }
}

let game = new Phaser.Game(config);

//Define keys
let keyUP, keyDOWN, keyRIGHT, keyLEFT;
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Variables
let highScore = 0;
const carHeight = 150;
const carWidth = 150;
let timer = 2500;
let clock = 1;
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let carVelocityMin = 1;
let carVelocityMax = 50;
let velocity = 5;
let gameOver = false;