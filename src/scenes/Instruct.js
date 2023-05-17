class Instruct extends Phaser.Scene {
    constructor() {
      super("introScene");
    }
    
    create() {
        
        let introConfig = {
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

          this.add.text(game.config.width/2 - 165,game.config.height/2 - 130, 'Use the arrow keys to move around', introConfig);
          this.add.text(game.config.width/2 - 130,game.config.height/2 - 75, 'You entered the wrong street', introConfig);
          this.add.text(game.config.width/2 - 170,game.config.height/2 - 30, 'Do your best to avoid incoming cars!', introConfig);
          this.add.text(game.config.width/2 - 65,game.config.height/2 + 15, 'Press UP to start', introConfig);
        
    }

    update(){

      if(Phaser.Input.Keyboard.JustDown(keyUP)){

        this.scene.start('playScene');

      }

    }
  }