import { Boot } from './scenes/Boot';
import { GameOver } from './scenes/GameOver';
import { OpenScene } from './scenes/OpenScene';
import { PlayScene } from './scenes/PlayScene';
import { Preloader } from './scenes/Preloader';

import { Game, Types } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 288,
    height: 512,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade:{debug:false}
    },
    scene: [
        Boot,
        Preloader,
        OpenScene,
        PlayScene,
        GameOver
    ]
};

export default new Game(config);
