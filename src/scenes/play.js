import Phaser from 'phaser';
import Player from '../entities/Player';
import Enemies from '../groups/Enemies';
import Collectables from '../groups/Collectables';
import EventEmitter from '../events/Emitter';

import initAnims from '../anims';

class Play extends Phaser.Scene {

  constructor(config) {
    super('PlayScene');
    this.config = config;
  }

  create({gameStatus}) {
    this.score = 0;
    this.playBgMusic();
    this.collectSound = this.sound.add('coin-pickup', {volume: 0.2});
    const map = this.createMap();
    initAnims(this.anims);
    const layers = this.createLayers(map);
    const playerZones = this.getPlayerZones(layers.playerZones);
    const player = this.createPlayer(playerZones.start);
    const enemies = this.createEnemies(layers.enemySpawns, layers.platformsColliders);
    const collectables = this.createCollectables(layers.collectables);
    this.createEnemyColliders(enemies, {
      colliders: {
        platformsColliders: layers.platformsColliders,
        player
      }
    });

    this.createPlayerColliders(player, {
      colliders: {
        platformsColliders: layers.platformsColliders,
        projectiles: enemies.getProjectiles(),
        collectables,
        traps: layers.traps
      }
    });

    this.createBG(map);
    this.createBackButton();

    this.createEndOfLevel(playerZones.end, player);
    this.setupFollowupCameraOn(player);
    if (gameStatus === 'PLAYER_LOOSE') { return; }

    this.createGameEvents();

    initAnims(this.anims);
  }

  playBgMusic() {
    if (this.sound.get('theme')) { return; }

    this.sound.add('theme', {loop: true, volume: 0.3}).play();
  }


  createMap() {
    const map = this.make.tilemap({key: `level_${this.getCurrentLevel()}`});
    map.addTilesetImage('main_lev_build_1', 'tiles-1');
    map.addTilesetImage('main_lev_build_2', 'tiles-2');
    map.addTilesetImage('bg_spikes_tileset', 'bg-spikes-tileset');
    map.addTilesetImage('lava', 'lava');
    map.addTilesetImage('arrow', 'arrow');
    map.addTilesetImage('use', 'use');
    map.addTilesetImage('cgpa', 'cgpa');
    map.addTilesetImage('gs', 'gs');
    map.addTilesetImage('gst', 'gst');
    map.addTilesetImage('gdate', 'gdate');
    map.addTilesetImage('cn', 'cn');
    map.addTilesetImage('cnt', 'cnt');
    map.addTilesetImage('ta', 'ta');
    map.addTilesetImage('tad', 'tad');
    map.addTilesetImage('project1', 'project1');
    map.addTilesetImage('mern', 'mern');
    map.addTilesetImage('otaku', 'otaku');
    map.addTilesetImage('details', 'details');
    map.addTilesetImage('phaser', 'phaser');
    map.addTilesetImage('games', 'games');
    map.addTilesetImage('list', 'list');
    map.addTilesetImage('tourch', 'tourch');
    map.addTilesetImage('manga', 'manga');
    map.addTilesetImage('skills', 'skills');
    map.addTilesetImage('info', 'info');
    map.addTilesetImage('info2', 'info2');
    map.addTilesetImage('info3', 'info3');
    map.addTilesetImage('hi', 'hi');
    map.addTilesetImage('name', 'name');
    map.addTilesetImage('resume', 'resume');
    map.addTilesetImage('space', 'space');
    map.addTilesetImage('ins', 'ins');
    map.addTilesetImage('Q', 'Q');
    map.addTilesetImage('E', 'E');
    map.addTilesetImage('jump', 'jump');
    map.addTilesetImage('traps', 'traps');
    map.addTilesetImage('myself', 'myself');
    map.addTilesetImage('school', 'school');
    map.addTilesetImage('marks', 'marks');
    map.addTilesetImage('clg', 'clg');
    map.addTilesetImage('hit', 'hit');
    return map;
  }

  createLayers(map) {
    const tileset = map.getTileset('main_lev_build_1');
    const tileset2 = map.getTileset('main_lev_build_2');
    const tilesetBg = map.getTileset('bg_spikes_tileset');
    const lavabg = map.getTileset('lava');
    const arrowbg = map.getTileset('arrow');
    const usewbg = map.getTileset('use');
    const hibg = map.getTileset('hi');
    const resbg = map.getTileset('resume');
    const namebg = map.getTileset('name');
    const spabg = map.getTileset('space');
    const insbg = map.getTileset('ins');
    const qsbg = map.getTileset('Q');
    const ebg = map.getTileset('E');
    const jumpbg = map.getTileset('jump');
    const trapsbg = map.getTileset('traps');
    const mybg = map.getTileset('myself');

    const marksbg = map.getTileset('marks');
    const schoolbg = map.getTileset('school');
    const clgbg = map.getTileset('clg');
    const hitbg = map.getTileset('hit');

    const cgpabg = map.getTileset('cgpa');
    const gsbg = map.getTileset('gs');
    const gstbg = map.getTileset('gst');
    const gdatebg = map.getTileset('gdate');
    const cnbg = map.getTileset('cn');
    const cntbg = map.getTileset('cnt');
    const tabg = map.getTileset('ta');
    const tadbg = map.getTileset('tad');

    const proTitle = map.getTileset('project1');
    const mernbg = map.getTileset('mern');
    const otakubg = map.getTileset('otaku');
    const detailsbg = map.getTileset('details');

    const phaserbg = map.getTileset('phaser');
    const gamebg = map.getTileset('games');
    const listbg = map.getTileset('list');
    const tbg = map.getTileset('tourch');
    const mbg = map.getTileset('manga');
    
    const sbg = map.getTileset('skills');
    const infobg = map.getTileset('info');
    const info2bg = map.getTileset('info2');
    const info3bg = map.getTileset('info3');

    map.createStaticLayer('lava_layer', lavabg);
    map.createStaticLayer('text_layer', [gdatebg, cnbg, cntbg, tabg,
       tadbg, proTitle, mernbg,otakubg,detailsbg,phaserbg,
       gamebg,listbg,tbg,mbg,sbg,infobg,info2bg,info3bg,
       arrowbg,usewbg,hibg,resbg,namebg,insbg,spabg,qsbg,ebg,jumpbg,trapsbg,mybg]);
   
    map.createStaticLayer('clayer', [schoolbg,marksbg,clgbg,hitbg]);
   
   map.createStaticLayer('distance', tilesetBg).setDepth(-12);
    
    const platformsColliders = map.createStaticLayer('platforms_colliders', tileset);
    const environment = map.createStaticLayer('environment', [tileset, gstbg]).setDepth(-2);
    const platforms = map.createStaticLayer('platforms', [tileset, tileset2,gsbg]);
    const playerZones = map.getObjectLayer('player_zones');
    const enemySpawns = map.getObjectLayer('enemy_spawns');
    const collectables = map.getObjectLayer('collectables');
    const traps = map.createStaticLayer('traps', tileset);

    platformsColliders.setCollisionByProperty({collides: true});

    traps.setCollisionByExclusion(-1)

    return {
      environment,
      platforms,
      platformsColliders,
      playerZones,
      enemySpawns,
      collectables,
      traps };
  }

  createBG(map) {
    const bgObject = map.getObjectLayer('distance_bg').objects[0];
    this.spikesImage = this.add.tileSprite(bgObject.x, bgObject.y, this.config.width, bgObject.height, 'bg-spikes-dark')
      .setOrigin(0, 1)
      .setDepth(-10)
      .setScrollFactor(0, 1)

      this.skyImage = this.add.tileSprite(0, 0, this.config.width, 180, 'sky-play')
      .setOrigin(0, 0)
      .setDepth(-11)
      .setScale(1.1)
      .setScrollFactor(0, 1)
  }

  createBackButton() {
    const btn = this.add.image(this.config.rightBottomCorner.x, this.config.rightBottomCorner.y, 'back')
      .setOrigin(1)
      .setScrollFactor(0)
      .setScale(2)
      .setInteractive()

    btn.on('pointerup', () => {
      this.scene.start('MenuScene');
    })

  }

  createGameEvents() {
    EventEmitter.on('PLAYER_LOOSE', () => {
      console.log('Helko!');
      this.scene.restart({gameStatus: 'PLAYER_LOOSE'});
    })
  }

  createCollectables(collectableLayer) {
    const collectables = new Collectables(this).setDepth(-1);
    collectables.addFromLayer(collectableLayer);

    collectables.playAnimation('diamond-shine');

    return collectables;
  }

  createPlayer(start) {
    return new Player(this, start.x, start.y);
  }

  createEnemies(spawnLayer, platformsColliders) {
    const enemies = new Enemies(this);
    const enemyTypes = enemies.getTypes();

    spawnLayer.objects.forEach((spawnPoint, i) => {
      // if (i === 1) { return; }
      const enemy = new enemyTypes[spawnPoint.type](this, spawnPoint.x, spawnPoint.y);
      enemy.setPlatformColliders(platformsColliders)
      enemies.add(enemy);
    })

    return enemies;
  }

  onPlayerCollision(enemy, player) {
    player.takesHit(enemy);
  }

  onHit(entity, source) {
    entity.takesHit(source);
  }

  onCollect(entity, collectable) {
    this.score += collectable.score;
    //this.hud.updateScoreboard(this.score);
    this.collectSound.play();
    collectable.disableBody(true, true);
  }

  createEnemyColliders(enemies, { colliders }) {
    enemies
      .addCollider(colliders.platformsColliders)
      .addCollider(colliders.player, this.onPlayerCollision)
      .addCollider(colliders.player.projectiles, this.onHit)
      .addOverlap(colliders.player.meleeWeapon, this.onHit)
  }

  createPlayerColliders(player, { colliders }) {
    player
      .addCollider(colliders.platformsColliders)
      .addCollider(colliders.projectiles, this.onHit)
      .addCollider(colliders.traps, this.onHit)
      .addOverlap(colliders.collectables, this.onCollect,this)
  }

  setupFollowupCameraOn(player) {
    const { height, width, mapOffset, zoomFactor } = this.config;
    this.physics.world.setBounds(0, 0, width + mapOffset, height + 200);
    this.cameras.main.setBounds(0, 0, width + mapOffset, height).setZoom(zoomFactor);
    this.cameras.main.startFollow(player);
  }

  getPlayerZones(playerZonesLayer) {
    const playerZones = playerZonesLayer.objects;
    return {
      start: playerZones.find(zone => zone.name === 'startZone'),
      end: playerZones.find(zone => zone.name === 'endZone')
    }
  }

  getCurrentLevel() {
    return this.registry.get('level') || 1;
  }

  createEndOfLevel(end, player) {
    const endOfLevel = this.physics.add.sprite(end.x, end.y, 'end')
      .setAlpha(0)
      .setSize(5, this.config.height)
      .setOrigin(0.5, 1);

    const eolOverlap = this.physics.add.overlap(player, endOfLevel, () => {
      eolOverlap.active = false;
      if (this.registry.get('level') === this.config.lastLevel) {
        this.scene.start('CreditsScene');
        return;
      }
         this.registry.inc('level', 1);
         this.registry.inc('unlocked-levels', 1);
      this.scene.restart({gameStatus: 'LEVEL_COMPLETED'})
    })
  }

  update() {
    this.spikesImage.tilePositionX = this.cameras.main.scrollX * 0.3;
    this.skyImage.tilePositionX = this.cameras.main.scrollX * 0.1;
  }
}

export default Play;