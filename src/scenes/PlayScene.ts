import { Physics, Math } from "phaser";
import { Bird, BirdParams } from "../objects/Bird";
import { AbstractScene } from "./AbstractScene";
import { Pipe } from "../objects/Pipe";

export class PlayScene extends AbstractScene {
  birdParams: BirdParams = {
    scene: this,
    x: 120,
    y: 260,
    key: "yellowbird-midflap",
  };
  bird: Bird;
  ground: Physics.Arcade.Image;

  pipes: Physics.Arcade.Group;

  constructor() {
    super("PlayScene");
    console.log("PlayScene loaded!");
  }

  override init(): void {
    super.init();
  }

  override create(): void {
    super.create();

    this.bird = new Bird(this.birdParams);
    this.bird.setDepth(1);

    this.ground = this.physics.add.staticImage(0, 457, "ground").setOrigin(0);
    this.physics.world.enable(this.ground);
    this.physics.add.collider(
      this.bird,
      this.ground,
      this.birdDies,
      undefined,
      this,
    );
    
    this.ground.body?.setSize(600, 70);
    this.ground.body?.setOffset(0, 56);

    this.pipes = this.physics.add.group({
      classType: Pipe,
      maxSize: 4,
      runChildUpdate: true,
    });
    this.physics.add.collider(
      this.bird,
      this.pipes.getChildren(),
      this.birdDies,
      undefined,
      this
    );

    this.time.addEvent({
      delay: 1500,
      loop: true,
      callback: this.spawnPipePair,
      callbackScope: this,
    });
  }

  update(): void {
    this.bird.update();
  }

  private birdDies() {
    this.physics.pause();
    this.bird.setTint(0xff0000);
    this.scene.start("GameOver");
  }

  private spawnPipePair() {

    const spawnPointX = this.scale.width + 50;
    const yPos = Math.Between(51, 90);

    const gap = 15;

    const topPipe = this.pipes.get() as Pipe;
    if(!topPipe) return;
    const topSpawn = yPos - gap;
    topPipe.spawn(spawnPointX, topSpawn);
    topPipe.setFlipY(true);

    const bottomPipe = this.pipes.get() as Pipe;
    if(!bottomPipe) return;
    bottomPipe.spawn(spawnPointX, this.scale.height);
  }
}
