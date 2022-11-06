import BaseScene from './BaseScene';

class CreditsScene extends BaseScene {

  constructor(config) {
    super('CreditsScene', {...config, canGoBack: true});

    this.menu = [
      {scene: null, text: 'Yay, You won!!'},
      {scene: null, text: 'Thanks for playing :)'},
      {scene: null, text: 'Now, HIRE ME!!!! '}
    ]
  }

  create() {
    super.create();
    this.createMenu(this.menu, () => {});
  }
}

export default CreditsScene;