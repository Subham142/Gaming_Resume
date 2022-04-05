import Phaser from 'phaser';

class Preload extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    //since we are using the JSON file form tiled, we use this function(name,path)
    this.load.tilemapTiledJSON('map', 'assets/crystal_world_map.json');

    //we need to load the tiles that form up the map/tileset
    this.load.image('tiles-1', 'assets/main_lev_build_1.png');
    this.load.image('tiles-2', 'assets/main_lev_build_2.png');

    //loading the player
    //this.load.image('player', 'assets/player/movements/idle01.png')

    //loading player spritsheet for animation of running
    this.load.spritesheet('player', 'assets/player/move_sprite_1.png', {
      frameWidth: 32, frameHeight: 38, spacing: 32
    })
  }

  create() {
    this.scene.start('PlayScene')
  }
}

export default Preload;