import { Physics, Math, GameObjects } from "phaser";
import { Bird, BirdParams } from "../objects/Bird";
import { AbstractScene } from "./AbstractScene";
import { Pipe } from "../objects/Pipe";
import { Trigger } from "../objects/Trigger";

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

  score: number = 0;
  scoreText: GameObjects.Text;

  triggers: Physics.Arcade.Group;

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
      this,
    );

    this.time.addEvent({
      delay: 1500,
      loop: true,
      callback: this.spawnPipePair,
      callbackScope: this,
    });

    this.scoreText = this.add.text(20, 30, "Score: " + this.score);
    this.scoreText.setDepth(100);

    this.triggers = this.physics.add.group({
      classType: Trigger,
      maxSize: 2,
      runChildUpdate: true,
    });

    this.physics.add.overlap(
      this.bird,
      this.triggers.getChildren(),
      (_, trigger) => {
        this.triggerPassed();

        trigger.destroy();
      },
      undefined,
      this,
    );
  }

  update(): void {
    this.bird.update();
  }

  private birdDies() {
    const dieSound = this.sound.add("die", {
      loop: false,
      volume: 0.5,
    });
    dieSound.play();

    this.physics.pause();
    this.bird.setTint(0xff0000);
    this.scene.start("GameOver");
  }

  private spawnPipePair() {
    const spawnPointX = this.scale.width + 50;
    const yPos = Math.Between(51, 90);

    const gap = 15;

    const topPipe = this.pipes.get() as Pipe;
    if (!topPipe) return;
    const topSpawn = yPos - gap;
    topPipe.spawn(spawnPointX, topSpawn);
    topPipe.setFlipY(true);

    const bottomPipe = this.pipes.get() as Pipe;
    if (!bottomPipe) return;
    bottomPipe.spawn(spawnPointX, this.scale.height);

    const trig = this.triggers.get() as Trigger;
    if (!trig) {
      console.log("Trig is null");
      return;
    }
    trig.spawn(spawnPointX, this.scale.height / 2);
    console.log("trig pos: " + trig.x + " " + trig.y);
  }

  private triggerPassed(): void {
    this.score += 1;
    this.scoreText.setText("Score: " + this.score);

    const pointSound = this.sound.add("point", {
      loop: false,
      volume: 0.5,
    });
    pointSound.play();
  }
}
