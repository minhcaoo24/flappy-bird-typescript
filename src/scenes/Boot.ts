import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
        console.log('Boots loaded!');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('background-day', 'assets/background-day.png');
        this.load.image('background-night', 'assets/background-night.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
