import { GameObjects } from "phaser";
import { AbstractScene } from "./AbstractScene";

export class GameOver extends AbstractScene {
  gameOverImage: GameObjects.Image;

  constructor() {
    super("GameOver");
    console.log("GameOver loaded!");
  }

  override init(): void {
    super.init();
    this.gameOverImage = this.add.image(52, 250, "gameover");
    this.gameOverImage.setOrigin(0);
    this.gameOverImage.setDepth(1);
  }

  override create(): void {
    super.create();
    this.input.on("pointerup", () => {
        this.scene.start("OpenScene")
    }, this);

    // Nhấn Space
    this.input.keyboard?.on("keydown-SPACE", () => {
      this.scene.start("OpenScene");
    }, this);

    // Nhấn UP
    this.input.keyboard?.on("keydown-UP", () => {
      this.scene.start("OpenScene");
    }, this);
  }
}
