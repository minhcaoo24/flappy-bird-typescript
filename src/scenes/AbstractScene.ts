import { Scene } from "phaser";
import { Background, BackgroundParams } from "../objects/Background";

export abstract class AbstractScene extends Scene {
  backgroundDay: BackgroundParams = {
    scene: this,
    x: 0,
    y: 0,
    key: "background-day",
  };
  backgroundNight: BackgroundParams = {
    scene: this,
    x: 0,
    y: 0,
    key: "background-night",
  };

  protected background: Background;
  private hour: Date;

  constructor(sceneName: string) {
    super(sceneName);
  }

  init(): void {
    this.hour = new Date();
  }

  create(): void {
    //Load backgrounds
    this.background = new Background(this.backgroundDay);
    if (this.hour.getHours() >= 18) this.switchBackground();
  }

  private switchBackground(): void {
    const newParams =
      this.background.params.key === this.backgroundDay.key
        ? this.backgroundNight
        : this.backgroundDay;

    this.background.destroy();

    this.background = new Background(newParams);
  }
}
