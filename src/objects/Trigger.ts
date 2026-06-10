import { Physics, Scene } from "phaser";

export class Trigger extends Physics.Arcade.Image {
  constructor(scene: Scene) {
    super(scene, 0, 0, "__WHITE");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setVisible(false);

    const body = this.body as Phaser.Physics.Arcade.Body;

    body.setAllowGravity(false);
    body.setImmovable(true);
  }

  spawn(x: number, y: number) {
    this.setPosition(x, y);

    this.setActive(true);

    const body = this.body as Phaser.Physics.Arcade.Body;

    body.setVelocityX(-200);
    body.setSize(10, 200);
  }

  update() {
    if (this.x < -this.width) {
      this.disableBody(true, true);
    }
  }
}
