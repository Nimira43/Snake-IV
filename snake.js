class Snake {
  constructor(game, x, y, speedX, speedY, colour, name) {
    this.game = game
    this.x = x
    this.y = y
    this.speedX = speedX
    this.speedY = speedY
    this.colour = colour
    this.width = this.game.cellSize
    this.height = this.game.cellSize
    this.moving = true
    this.score = 0
    this.length = 3
    this.segments = []
    this.readyToTurn = true
    this.name = name
  }
  
  update() {
    this.readyToTurn = true
    if (this.game.checkCollision(this, this.game.food)) {
      this.game.food.reset()
      this.score++
      this.length++
    }
    if (this.x <= 0 && this.speedX < 0 ||
        this.x >= this.game.columns - 1 && this.speedX > 0 ||
        this.y <= this.game.topMargin && this.speedY < 0 ||
        this.y >= this.game.rows - 1 && this.speedY > 0) {
      this.moving = false
    }
    if (this.moving) {
      this.x += this.speedX
      this.y += this.speedY
      this.segments.unshift({x: this.x, y: this.y})
      if (this.segments.length > this.length) {
        this.segments.pop()
      }
    }

    if (this.score >= this.game.winningScore) {
      this.game.gameUi.triggerGameOver()
    }
  }
  
  draw() {
    this.segments.forEach((segment, i)  => {
      if (i === 0) this.game.ctx.fillStyle = 'black'
      else this.game.ctx.fillStyle = this.colour
      this.game.ctx.fillRect(segment.x * this.game.cellSize, segment.y * this.game.cellSize, this.width, this.height)
    })  
  }
  
  turnUp() {
    if (this.speedY === 0 && this.readyToTurn) {
      this.speedX = 0
      this.speedY = -1
      this.moving = true
      this.readyToTurn = false
    }
  }
  
  turnDown() {
    if (this.speedY === 0 && this.readyToTurn) {
      this.speedX = 0
      this.speedY = 1
      this.moving = true
      this.readyToTurn = false
    }
  }
  
  turnLeft() {
    if (this.speedX === 0 && this.readyToTurn) {
      this.speedX = -1
      this.speedY = 0
      this.moving = true
      this.readyToTurn = false    
    }
  }

  turnRight() {
    if (this.speedX === 0 && this.readyToTurn) {
      this.speedX = 1
      this.speedY = 0
      this.moving = true
      this.readyToTurn = false    
    }
  }
}

class Keyboard1 extends Snake {
  constructor(game, x, y, speedX, speedY, colour, name) {
    super(game, x, y, speedX, speedY, colour, name)
    
    window.addEventListener('keydown', e => {
      if (e.key === 'ArrowUp') this.turnUp()
      else if (e.key === 'ArrowDown') this.turnDown()
      else if (e.key === 'ArrowLeft') this.turnLeft()
      else if (e.key === 'ArrowRight') this.turnRight()
    })
  }
}

class Keyboard2 extends Snake {
  constructor(game, x, y, speedX, speedY, colour, name) {
    super(game, x, y, speedX, speedY, colour, name)
    
    window.addEventListener('keydown', e => {
      if (e.key.toLowerCase() === 'q') this.turnUp()
      else if (e.key.toLowerCase() === 'a') this.turnDown()
      else if (e.key.toLowerCase() === 'r') this.turnLeft()
      else if (e.key.toLowerCase() === 't') this.turnRight()
    })
  }
}

class ComputerAI extends Snake {
  constructor(game, x, y, speedX, speedY, colour, name) {
    super(game, x, y, speedX, speedY, colour, name)
    this.turnTimer = 0
    this.turnInterval = Math.floor(Math.random() * this.game.columns + 1)
  }

  update() {
    super.update()
    if (this.turnTimer < this.turnInterval) {
      this.turnTimer += 1
    } else {
      this.turnTimer = 0
      this.turn()
      this.turnInterval = Math.floor(Math.random() * this.game.columns + 1)
    }
  }

  turn() {
    if (this.speedY === 0) {
      Math.random() < 0.5 ? this.turnUp() : this.turnDown()
    } else if (this.speedX === 0) {
      Math.random() < 0.5 ? this.turnLeft() : this.turnRight()
    }
  }
}