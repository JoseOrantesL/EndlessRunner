class CarEnemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, velocity){
        super(scene, game.config.width + carWidth, Phaser.Math.Between(carHeight/2, game.config.height), 'obstacle');
        this.ps = scene;

        //Physics set up
        this.ps.add.existing(this);
        this.ps.physics.add.existing(this);
        this.setScale(1.5);
        this.setVelocityX(velocity);
        this.setImmovable();
        this.body.onCollide = true;
        this.body.onWorldBounds = true; 

        //Different cars
        this.tint = Math.random() * 0xFFFFFF
        this.spawnNew = true;
    }

    update(){

        if(this.spawnNew && this.x < centerX){

            this.ps.addObstacle(this.parent, this.velocity);
            this.spawnNew = false;

        }
        //destroy obstacle if it reaches left edge of the screen

        if(this.x < -this.width){

            this.destroy();

        }

    }
}