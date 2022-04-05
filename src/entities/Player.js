import Phaser from 'phaser';


class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    
    //adding the sprite(player imge and all) 
    scene.add.existing(this);

    //adding the functionalities of the player
    scene.physics.add.existing(this);
        
    this.init();
    }

    init() {
    this.gravity = 500;
     //left and right speed
     this.playerSpeed=200;
     //taking instru. form the user
     this.cursors= this.scene.input.keyboard.createCursorKeys();

    this.body.setGravityY(this.gravity);
    this.setCollideWorldBounds(true);
    }

    preUpdate(time, delta) {
    super.preUpdate(time, delta);
    const { left, right } = this.cursors;

    if (left.isDown) {
        this.setVelocityX(-this.playerSpeed);
    } else if (right.isDown) {
        this.setVelocityX(this.playerSpeed);
    } else {
        this.setVelocityX(0);
    }
  }
}


export default Player;