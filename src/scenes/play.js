import Phaser from 'phaser';
import Player from '../entities/Player';

class Play extends Phaser.Scene {

  constructor(config) {
    super('PlayScene');
    this.config = config;
  }

  create() {
    const map = this.createMap();
    const layers = this.createLayers(map);

    const player=this.createPlayer();
    
    //making the platform as coliders
    this.createPlayerColliders(player, {
      colliders: {
        platformsColliders: layers.platformsColliders
      }
    });

    this.setupFollowupCameraOn(player);
  }

  createMap() {
    //map is preloaded
    //now we need to create it, so we call it by the key we provided and also the tiles used for the creation of the map
    const map = this.make.tilemap({key: 'map'});

    //name should be SAME AS IN THE TILED SOFTWARE  
    map.addTilesetImage('main_lev_build_1', 'tiles-1');
    return map;
  }

  createLayers(map) {
    //tileset name and layer name should be SAME AS IN THE TILED SOFTWARE  
    const tileset = map.getTileset('main_lev_build_1');
    const platformsColliders = map.createStaticLayer('platforms_colliders', tileset);
    const environment = map.createStaticLayer('environment', tileset);
    const platforms = map.createDynamicLayer('platforms', tileset);

    //METHOD-1
    //making the platrom as a collider 
    //true= set it as a colider
    // -1 = anything more than 0 is a collider object(see in the tilled JSON)
    //platforms.setCollisionByExclusion(-1,true);


    // M-2
    // make a layer and make a custom property
    
    platformsColliders.setCollisionByProperty({collides:true});

    return { environment, platforms,platformsColliders };
  }

  createPlayer(){
    return new Player(this,100,250);
   
  }


  createPlayerColliders(player, { colliders }) {
    player
      .addCollider(colliders.platformsColliders)
  }

  setupFollowupCameraOn(player) {
    const { height, width, mapOffset, zoomFactor } = this.config;
    this.physics.world.setBounds(0, 0, width + mapOffset, height + 200);
    this.cameras.main.setBounds(0, 0, width + mapOffset, height).setZoom(zoomFactor);
    this.cameras.main.startFollow(player);
  }
}

export default Play;