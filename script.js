class Game {
  constructor(canvas, context) {
    this.canvas = canvas
    this.ctx = context
    this.width
    this.height
    this.cellSize = 50
    this.columns
    this.rows
    this.topMargin = 2
  
    this.eventTimer = 0
    this.eventInteval = 200
    this.eventUpdate = false

    this.gameOver = true
    this.winningScore = 2
  
    this.player1 
    this.player2
    this.player3
    this.player4
    this.food
    this.background
    this.gameObjects
    this.gameUi = new Ui(this)
    
    window.addEventListener('resize', e => {
      this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight)
    })
    this.resize(window.innerWidth, window.innerHeight)
  }

  resize(width, height) {
    this.canvas.width = width - width % this.cellSize
    this.canvas.height = height - height % this.cellSize
    this.ctx.fillStyle = '#ff4500'
    this.ctx.font = '30px Impact'
    this.ctx.textBaseline = 'top'
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.columns = Math.floor(this.width / this.cellSize)
    this.rows = Math.floor(this.height / this.cellSize)
    this.background = new Background(this)
  }

  start() {
    if (!this.gameOver) {
      this.gameUi.triggerGameOver()
    } else {
      this.gameOver = false
      this.gameUi.gameplayUi()
      this.player1 = new Keyboard1(this, 0, this.topMargin, 1, 0, '#ff4500', 'Nick')
      this.player2 = new ComputerAI(this, this.columns - 1, this.topMargin, 0, 1, '#49c0ee', 'Lenny')
      this.player3 = new ComputerAI(this, this.columns - 1, this.rows - 1, -1, 0, '#ffd700', 'Billy')
      this.player4 = new ComputerAI(this, 0, this.rows - 1, 0, -1, '#18ff45', 'Nimira')
      this.food = new Food(this)
      this.gameObjects = [this.player1, this.player2, this.player3, this.player4, this.food]
      this.ctx.clearRect(0, 0, this.width, this.height)
    }
  }

  drawGrid() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        this.ctx.strokeRect(
          x * this.cellSize,
          y * this.cellSize,
          this.cellSize,
          this.cellSize
        )
      }
    }
  }

  checkCollision(a, b) {
    return a.x === b.x && a.y === b.y
  }

  handlePeriodicEvents(deltaTime) {
    if (this.eventTimer < this.eventInteval) {
      this.eventTimer += deltaTime
      this.eventUpdate = false
    } else {
      this.eventTimer = 0
      this.eventUpdate = true
    }
  }

  render(deltaTime) {
    this.handlePeriodicEvents(deltaTime)
    if (this.eventUpdate && !this.gameOver) {
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.background.draw()
      this.drawGrid()
      this.gameObjects.forEach(object => {
        object.draw()
        object.update()
      })
      this.gameUi.update()
    }
  }
}

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight;
  
  const game = new Game(canvas, ctx)

  let lastTime = 0

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    
    game.render(deltaTime)
    requestAnimationFrame(animate)
  }
  requestAnimationFrame(animate)
})