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

  // loading the iceball
  this.load.image('iceball', 'assets/weapons/iceball_001.png');

  //loading fireball
  this.load.image('fireball-1', 'assets/weapons/improved_fireball_001.png');
  this.load.image('fireball-2', 'assets/weapons/improved_fireball_002.png');
  this.load.image('fireball-3', 'assets/weapons/improved_fireball_003.png');

    //loading the player
    //this.load.image('player', 'assets/player/movements/idle01.png')

    //loading player spritsheet for animation of running and more
    this.load.spritesheet('player', 'assets/player/move_sprite_1.png', {
      frameWidth: 32, frameHeight: 38, spacing: 32
    })
    //loading enemy spritsheet for animation of running and more
    this.load.spritesheet('birdman', 'assets/enemy/enemy_sheet.png', {
      frameWidth: 32, frameHeight: 64, spacing: 32
    })

    this.load.spritesheet('snaky', 'assets/enemy/enemy_sheet_2.png', {
      frameWidth: 32, frameHeight: 64, spacing: 32
    })

    //loading spritesheet for fire iceball animation
    this.load.spritesheet('player-throw', 'assets/player/throw_attack_sheet_1.png', {
      frameWidth: 32, frameHeight: 38, spacing: 32
    })

    //loading spritesheet for hit effect on enimies
    this.load.spritesheet('hit-sheet', 'assets/weapons/hit_effect_sheet.png', {
      frameWidth: 32, frameHeight: 32
    })

    this.load.spritesheet('sword-default', 'assets/weapons/sword_sheet_1.png', {
      frameWidth: 52, frameHeight: 32, spacing: 16
    })

 
  }

  create() {
    this.scene.start('PlayScene')
  }
}

export default Preload;