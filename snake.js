class Snake {
  constructor(game, x, y, speedX, speedY, colour) {
    this.game = game
    this.x = x
    this.y = y
    this.speedX = speedX
    this.speedY = speedY
    this.colour = colour
    this.width = this.game.cellSize
    this.height = this.game.cellSize
    this.moving = true
  }
  
  update() {
    if (this.x <= 0) {
      this.x += this.speedX
      this.y += this.speedY
    }
    if (moving) {
      this.x += this.speedX
      this.y += this.speedY
    }
  }
  
  draw() {
    this.game.ctx.fillStyle = this.colour
    this.game.ctx.fillRect(
      this.x * this.game.cellSize,
      this.y * this.game.cellSize,
      this.width,
      this.height
    )
  }
}

class Keyboard1 extends Snake {
  constructor(game, x, y, speedX, speedY, colour) {
    super(game, x, y, speedX, speedY, colour)
    
    window.addEventListener('keydown', e => {

    })
  }
}