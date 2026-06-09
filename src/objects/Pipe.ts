import { Physics, Scene } from "phaser";

export class Pipe extends Physics.Arcade.Image {
    constructor(scene: Scene) {
        super(scene, 0, 0, 'pipe-green');
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

    spawn(x: number, y: number) {
        this.enableBody(true, x, y, true, true);

        this.setActive(true);
        this.setVisible(true);

        this.setVelocityX(-200);
    }

    update() {
        if (this.x < -this.width) {
            this.disableBody(true, true);
        }
    }
}