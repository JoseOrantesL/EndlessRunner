class GameOver extends Phaser.Scene {
    constructor() {
      super("gameOverScene");
    }
    
    create() {
        
        let overConfig = {
            fontFamily: 'Poppins',
            fontSize: '24px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
          }
          keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

          this.add.text(game.config.width/2 - 45,game.config.height/2 - 130, 'Game Over', overConfig);
          this.add.text(game.config.width/2 - 120,game.config.height/2 - 80, 'You crashed... Try Again?', overConfig);
          this.add.text(game.config.width/2 - 90,game.config.height/2 - 25, 'Press UP to Restart', overConfig);
          
          if(clock/1000 > highScore/1000){
            
            highScore = clock/1000
            this.add.text(game.config.width/2 - 140,game.config.height/2 + 20, 'New record: ' + highScore + ' miles traveled', overConfig);
          } else {

            this.add.text(game.config.width/2 - 100,game.config.height/2 + 40, 'Current best: ' + highScore/1000 + ' miles', overConfig);
          }
    }

    update(){

      if(Phaser.Input.Keyboard.JustDown(keyUP)){

        this.scene.start('playScene');

      }

    }
  }