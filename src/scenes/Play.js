class Play extends Phaser.Scene {
    constructor() {

      super("playScene");

    }

    create() {
      this.bgm = this.sound.add('bgm', {volume: 0.1, loop: true});
      this.bgm.play();
      let scoreConfig = {
        fontFamily: 'Poppins',
        fontSize: '20px',
        color: '#000000',
        padding: {
        top: 5,
        bottom: 5,
        },
        fixedWidth: 0
      }

      highScore = clock;
      clock = 0;
      carVelocityMin = 1;
      carVelocityMax = 5;

      this.carSpeed = -450;
      this.carSpeedMax = -1000;

      this.street = this.add.tileSprite(0,0, 720, 640, 'street').setOrigin(0,0);

      this.player = this.physics.add.sprite(50, game.config.height/2, "car");
      this.player.body.onCollide = true;
      this.player.body.onWorldBounds = true;
      this.player.setScale(1.5);
      this.player.play("fw");
      this.player.setCollideWorldBounds(true);
      //Sfx config

      this.forward = this.sound.add('accel', {
        mute: false,
        volume: 0.1,
        rate: 1,
        loop: false
      });
      this.brake = this.sound.add('brake', {
        mute: false,
        volume: 0.1,
        rate: 1,
        loop: false
      });

      this.drift = this.sound.add('drift', {
        mute: false,
        volume: 0.1,
        rate: 1,
        loop: false
      });

      this.crash = this.sound.add('crash', {
        mute: false,
        volume: 0.1,
        rate: 1,
        loop: false
      });

      //Score / Mileage
      this.countdown = this.add.text(0,0, `Miles:${this.clock/1000}`, scoreConfig);
      this.clock = this.time.addEvent({delay: 1000, callback:this.timeRemaining, callbackScope: this, loop: true});

      //define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

      // set up cars 
      this.obstacleGroup = this.add.group({

        runChildUpdate: true    // make sure update runs on group children

      });

      // wait a few seconds before spawning cars
    
      this.time.delayedCall(timer, () => { 
        
          this.addObstacle();
          this.addObstacle();
          this.addObstacle();
          this.addObstacle();
          

      });

    }

    update() {

      this.street.tilePositionX += 4;
      if(keyLEFT.isDown) {

        this.player.x -= velocity;

      } else if (keyRIGHT.isDown){

        this.player.x += velocity;

      } else if(keyUP.isDown){

        this.player.y -= velocity;

      } else if(keyDOWN.isDown){

        this.player.y += velocity;

      } else {

        this.player.play("fw");

      }
      //Sounds to be more accurate with the time
      if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
        this.player.play("fw");
        this.forward.play();

      }
      if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
        this.player.play("rt");
        this.drift.play();

      } 
      if(Phaser.Input.Keyboard.JustDown(keyUP)){
        this.player.play("lft");
        this.drift.play();

      } 
      if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
        this.player.play("fw");
        this.brake.play();

      }

      this.physics.world.collide(this.player, this.obstacleGroup, this.collisionHappened, null, this);
      
      if(clock/1000 % 10 == 0) {
        carVelocityMin += 1;
        carVelocityMax += 4;
        
      }

    }

    
      timeRemaining(){

        clock +=1000;
        this.countdown.setText(`Miles:${clock/1000}`);

      }

      
    //create new cars and add them to existing group

    addObstacle(){
      
      let speed = Phaser.Math.Between(carVelocityMin,carVelocityMax);
      let crash = new CarEnemy(this, this.carSpeed - speed);
      this.obstacleGroup.add(crash);

  }

    collisionHappened(){
      this.crash.play();
      this.bgm.stop();
      this.player.destroy();
      this.countdown.destroy();
      this.scene.start('gameOverScene');

    }
}