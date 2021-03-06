import Phaser from 'phaser'

const config = {
  type: Phaser.AUTO,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
  scale: {
    mode: Phaser.Scale.CENTER_HORIZONTALLY,
  },
}

export default config
