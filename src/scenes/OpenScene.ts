import { GameObjects } from 'phaser'
import { AbstractScene } from "./AbstractScene";

export class OpenScene extends AbstractScene {
    messageImage: GameObjects.Image;

  constructor() {
    super('OpenScene');
    console.log("OpenScene loaded!");
  }

  override init(): void {
    super.init();

    this.messageImage = this.add.image(52, 100, 'message');
    this.messageImage.setOrigin(0);
    this.messageImage.setDepth(1);
  }

  preload(): void { }

  override create(): void {
    super.create();

    // Click chuột
    this.input.on('pointerup', () => {
        this.scene.start('PlayScene');
    }, this);

    // Nhấn Space
    this.input.keyboard?.on('keydown-SPACE', () => {
        this.scene.start('PlayScene');
    }, this);

    // Nhấn UP
    this.input.keyboard?.on('keydown-UP', () => {
        this.scene.start('PlayScene');
    }, this);
  }
}
