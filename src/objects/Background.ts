import { GameObjects, Scene } from "phaser";

export interface BackgroundParams {
    scene: Scene;
    x: number;
    y: number;
    key: string | Phaser.Textures.Texture;
}

export class Background extends GameObjects.Image {
    params: BackgroundParams;

    constructor (params: BackgroundParams){
        super(params.scene, params.x, params.y, params.key);
        this.params = params;
        params.scene.add.existing(this);
        this.setOrigin(0);
        this.setDisplaySize(288, 512);
    }
}
