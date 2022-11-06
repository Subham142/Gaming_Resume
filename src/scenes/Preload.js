import Phaser from 'phaser';

class Preload extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    //since we are using the JSON file form tiled, we use this function(name,path)
  
    this.load.tilemapTiledJSON('level_1', 'assets/crystal_world_map_level_1.json');
    this.load.tilemapTiledJSON('level_2', 'assets/crystal_world_map_level_2.json');
    this.load.tilemapTiledJSON('level_3', 'assets/crystal_world_map_level_3.json');
    this.load.tilemapTiledJSON('level_4', 'assets/crystal_world_map_level_4.json');
    this.load.tilemapTiledJSON('level_5', 'assets/crystal_world_map_level_5.json');

    this.load.image('bg-spikes-tileset', 'assets/bg_spikes_tileset.png');

    //this.load.image('menu-bg', 'assets/background01.jpg');
    this.load.image('menu-bg', 'assets/bg.jpg');

    //we need to load the tiles that form up the map/tileset
    this.load.image('tiles-1', 'assets/main_lev_build_1.png');
    this.load.image('tiles-2', 'assets/main_lev_build_2.png');

    this.load.image('bg-spikes-dark', 'assets/bg_spikes_dark.png');
    this.load.image('sky-play', 'assets/sky_play.png');

    this.load.image('arrow', 'assets/arrow.png');
    this.load.image('use', 'assets/use.png');
    this.load.image('hi', 'assets/hi.png');
    this.load.image('name', 'assets/name.png');
    this.load.image('resume', 'assets/resume.png');
    this.load.image('space', 'assets/space.png');
    this.load.image('ins', 'assets/ins.png');
    this.load.image('E', 'assets/E.png');
    this.load.image('Q', 'assets/Q.png');
    this.load.image('jump', 'assets/jump.png');
    this.load.image('traps', 'assets/traps.png');
    this.load.image('myself', 'assets/myself.png');
    this.load.image('school', 'assets/school.png');
    this.load.image('marks', 'assets/marks.png');
    this.load.image('clg', 'assets/clg.png');
    this.load.image('hit', 'assets/hit.png');

   
    this.load.image('back', 'assets/back.png');

    this.load.image('lava', 'assets/lava.png');

    this.load.image('cgpa', 'assets/cgpa.png');

    this.load.image('gs', 'assets/gs.png');
    this.load.image('gst', 'assets/gst.png');
    this.load.image('gdate', 'assets/gdate.png');

    this.load.image('cn', 'assets/cn.png');
    this.load.image('cnt', 'assets/cnt.png');
    this.load.image('ta', 'assets/ta.png');
    this.load.image('tad', 'assets/tad.png');

    this.load.image('project1', 'assets/project1.png');
    this.load.image('mern', 'assets/mern.png');
    this.load.image('otaku', 'assets/otaku.png');
    this.load.image('details', 'assets/details.png');

    this.load.image('phaser', 'assets/phaser.png');
    this.load.image('games', 'assets/games.png');
    this.load.image('list', 'assets/list.png');
    this.load.image('tourch', 'assets/tourch.png');
    this.load.image('manga', 'assets/manga.png');


    this.load.image('skills', 'assets/skills.png');
    this.load.image('info', 'assets/info.png');
    this.load.image('info2', 'assets/info2.png');
    this.load.image('info3', 'assets/info3.png');

  // loading the iceball
  this.load.image('iceball-1', 'assets/weapons/iceball_001.png');
  this.load.image('iceball-2', 'assets/weapons/iceball_002.png');

  //loading fireball
  this.load.image('fireball-1', 'assets/weapons/improved_fireball_001.png');
  this.load.image('fireball-2', 'assets/weapons/improved_fireball_002.png');
  this.load.image('fireball-3', 'assets/weapons/improved_fireball_003.png');

  //loading diamod
  this.load.image('diamond', 'assets/collectables/diamond.png');

  this.load.image('diamond-1', 'assets/collectables/diamond_big_01.png');
  this.load.image('diamond-2', 'assets/collectables/diamond_big_02.png');
  this.load.image('diamond-3', 'assets/collectables/diamond_big_03.png');
  this.load.image('diamond-4', 'assets/collectables/diamond_big_04.png');
  this.load.image('diamond-5', 'assets/collectables/diamond_big_05.png');
  this.load.image('diamond-6', 'assets/collectables/diamond_big_06.png');

    //loading the player
    //this.load.image('player', 'assets/player/movements/idle01.png')

    this.load.spritesheet('player-slide-sheet', 'assets/player/slide_sheet_2.png', {
      frameWidth: 32, frameHeight: 38, spacing: 32
    })

    
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

    this.load.audio('theme', 'assets/music/theme_music.wav');


    this.load.audio('projectile-launch', 'assets/music/projectile_launch.wav');
    this.load.audio('step', 'assets/music/step_mud.wav');
    this.load.audio('jump', 'assets/music/jump.wav');
    this.load.audio('swipe', 'assets/music/swipe.wav');
    this.load.audio('coin-pickup', 'assets/music/coin_pickup.wav');
    
    this.load.once('complete', () => {
      this.startGame();
    })
 
  }

  startGame() {
    this.registry.set('level', 1);
    this.registry.set('unlocked-levels', 1);
    this.scene.start('MenuScene')
  }
  // create() {
  //   this.scene.start('PlayScene')
  // }
}

export default Preload;