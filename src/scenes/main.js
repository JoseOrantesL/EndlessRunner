/*
Name: Jose Orantes
Rocket Patrol
It took me about 25 hours to do the entire runner.
Some visual aspects that I'm proud of would be the menu screen as I chose to create an
actual png with the introduction of the game.
I used figma, a program which a friend of mine showed me the ropes around. Moreover, the 
typography that I implemented mixes well with the dynamic of my game representing the wild
streets and the experience that it is driving in my home country, El Salvador. 

I'm by no means a great artist, but I was happy with how my assets turned out, and with how accurate
in response to input my sounds are implemented in the game.
*/

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
let carVelocityMax = 20;
let velocity = 5;
let gameOver = false;