class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    
    create() {
      let menuConfig = {
        fontFamily: 'Poppins',
        fontSize: '90px',
        color: '#000000',
        align: 'center',
        padding: {
        top: 5,
        bottom: 5,
        },
        fixedWidth: 0
      }

      
      this.flag = this.add.tileSprite(0,0, 720, 640, 'flag').setOrigin(0,0);
      keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

      
    }

    update(){

      if(Phaser.Input.Keyboard.JustDown(keyDOWN)){

        this.scene.start("introScene");

      } else if(Phaser.Input.Keyboard.JustDown(keyUP)){

        this.scene.start("playScene");

      }
      

    }
  }