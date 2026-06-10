import { Scene } from "phaser";
import { Background, BackgroundParams } from "../objects/Background";

export class Preloader extends Scene {
  background: Background;

  backgroundDay: BackgroundParams = {
    scene: this,
    x: 0,
    y: 0,
    key: "background-day",
  };

  constructor() {
    super("Preloader");
    console.log('Preloader loaded!');
  }

  init() {
    this.background = new Background(this.backgroundDay);
  }

  preload() {
    this.load.setPath('assets');
    this.load.image('message', 'message.png');

    /* Bird */
    this.load.image('yellowbird-midflap', 'yellowbird-midflap.png');

    /* Ground */
    this.load.image('ground', 'base.png');

    this.load.image('gameover', 'gameover.png');

    this.load.image('pipe-green', 'pipe-green.png');

    /* Sounds */
    this.load.audio('die', 'audio/die.ogg');
    this.load.audio('hit', 'audio/hit.ogg');
    this.load.audio('point', 'audio/point.ogg');
    this.load.audio('swoosh', 'audio/swoosh.ogg');
    this.load.audio('wing', 'audio/wing.ogg');
  }

  create() {
    this.scene.start("OpenScene");
  }
}
