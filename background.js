class Background {
  constructor(game) {
    this.game = game
    this.x = 0;
    this.y = 0;
    this.width = this.game.cellSize * 8
    this.height = this.game.cellSize * (this.game.topMargin + 1)
    this.image = document.getElementById('forest_margin_repeat')
    this.repeats = this.game.width / this.width
  }
  draw() {
    
  }
}