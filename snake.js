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
  
  turnUp() {
    this.speedX = 0
    this.speedY = -1  
  }
  
  turnDown() {
    this.speedX = 0
    this.speedY = 1
  }
  turnLeft() {
    this.speedX = -1
    this.speedY = 0
  }
  turnRight() {
    this.speedX = 1
    this.speedY = 0
  }
}

class Keyboard1 extends Snake {
  constructor(game, x, y, speedX, speedY, colour) {
    super(game, x, y, speedX, speedY, colour)
    
    window.addEventListener('keydown', e => {
      if (e.key === 'ArrowUp') this.turnUp()
      else if (e.key === 'ArrowDown') this.turnDown()
      else if (e.key === 'ArrowLeft') this.turnLeft()
      else if (e.key === 'ArrowRight') this.turnRight()
    })
  }
}