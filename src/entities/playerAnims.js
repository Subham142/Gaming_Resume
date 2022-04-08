// for IDLE/STANDING animation
export default anims => {
    anims.create({
      key: 'idle',
      frames: anims.generateFrameNumbers('player', {start: 0, end: 8}),
      frameRate: 8,
      repeat: -1
    })
  
    //for RUNNING animation
    anims.create({
      key: 'run',
      frames: anims.generateFrameNumbers('player', {start: 11, end: 16}),
      frameRate: 8,
      repeat: -1
    })

    //for JUMPING
    anims.create({
      key: 'jump',
      frames: anims.generateFrameNumbers('player', {start: 17, end: 23}),
      frameRate: 2,
      repeat: 1
    })
  }