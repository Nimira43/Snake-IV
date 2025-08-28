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

  start(x, y, colour){}
  update(){}
  draw(){}
}