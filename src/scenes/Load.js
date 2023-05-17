class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // loading bar
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, game.config.height/2, game.config.width * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });
            
            //Load images
            this.load.image("street", "././assets/images/street.png");
            this.load.image("flag", "././assets/images/flag.png");
            this.load.image("obstacle", "././assets/images/obstacle2.png");
            this.load.spritesheet("car", "././assets/images/sprite.png", {frameWidth: 39, frameHeight: 21});
            //Load Sfx
            this.load.audio("bgm", "././assets/sfx/song.mp3");
            this.load.audio("accel", "././assets/sfx/fast.mp3");
            this.load.audio("brake", "././assets/sfx/brake.mp3");
            this.load.audio("drift", "././assets/sfx/driftfx.mp3");
            this.load.audio("crash", "././assets/sfx/crash.mp3");
    }

    create() {

        this.anims.create({
            key: "lft",
            frameRate: 7,
            frames: this.anims.generateFrameNumbers("car", {start: 0, end: 0}),
            repeat: -1
          });
    
          this.anims.create({
            key: "fw",
            frameRate: 7,
            frames: this.anims.generateFrameNumbers("car", {start: 1, end: 1}),
            repeat: -1
          });
    
          this.anims.create({
            key: "rt",
            frameRate: 7,
            frames: this.anims.generateFrameNumbers("car", {start: 2, end: 2}),
            repeat: -1
          });

        // go to Title scene
        this.scene.start('menuScene');
    }
}