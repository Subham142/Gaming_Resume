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
  }

  create() {
    this.scene.start('PlayScene')
  }
}

export default Preload;