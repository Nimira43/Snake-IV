class Snake {
  constructor(game, x, y) {
    this.game = game
    this.x = x
    this.y = y
  }
  draw() {
    this.game.ctx.fillRect(this.x, this.y, 50, 20)

  }
}