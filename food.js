class Food {
  constructor(game) {
    this.x
    this.y
  }
  reset() {
    this.x = Math.floor(Math.random() * this.game.columns)
    this.y = Math.floor(Math.random() * this.game.rows)
  }
}