import Phaser from 'phaser';

class Play extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  create() {
    const map = this.createMap();
    const layers = this.createLayers(map);

    const player=this.createPlayer();
    
    //making the platform as coliders
    this.physics.add.collider(player,layers.platformsColliders);
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
    const player=this.physics.add.sprite(100,250,'player');
    player.body.setGravityY(500);
    player.setCollideWorldBounds(true);
    return player;
  }
}

export default Play;