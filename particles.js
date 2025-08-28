class Particle {
  constructor(game){
    this.game = game
    this.x = 0
    this.y = 0
    this.radius
    this.speedX = 1
    this.speedY = 1
    this.colour
    this.angle
    this.va = Math.random() * 0.2 - 0.1
    this.free = true
  }

  reset() {
    this.free = true
  }

  start(x, y, colour){
    this.free = false
    this.angle = 0
    this.x = x
    this.y = y
    this.colour = colour
    this.radius = Math.floor(Math.random() * 10 + 10)
    this.speedX = Math.random() * 30 - 15
    this.speedY = Math.random() * 5 - 2
  }

  update() {
    if (!this.free) {
      this.speedX *= 0.97
      this.speedY -= 0.03
      this.angle += this.va
      this.x += Math.sin(this.angle) * this.speedX
      this.y += this.speedY
    
      if (this.radius > 4) this.radius -= 0.1
      else this.reset()
    }
  }

  draw(){}
}