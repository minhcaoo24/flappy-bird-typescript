import { Physics, Scene, Types } from "phaser";

export interface BirdParams {
  scene: Scene;
  x: number;
  y: number;
  key: string | Phaser.Textures.Texture;
}

export class Bird extends Physics.Arcade.Image {
  params: BirdParams;
  private cursor?: Types.Input.Keyboard.CursorKeys;

  constructor(params: BirdParams) {
    super(params.scene, params.x, params.y, params.key);
    this.params = params;
    this.cursor = params.scene.input.keyboard?.createCursorKeys();
    params.scene.add.existing(this);

    this.setOrigin(1);
    this.initPhysics();
  }

  update(): void {
    this.params.scene.input.on("pointerup", () => {
        this.setVelocityY(-200);
      }, this);
    if (this.cursor?.space.isDown || this.cursor?.up.isDown) {
      this.setVelocityY(-200);
    }
  }

  initPhysics(): void {
    this.scene.physics.world.enable(this);
    this.setGravityY(500);
  }
}
