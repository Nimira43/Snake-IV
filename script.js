class Game {
  constructor(canvas, context) {
    this.canvas = canvas
    this.ctx = context
    this.width = this.canvas.width
    this.height = this.canvas.height
  
    window.addEventListener('resize', e => {
      this.canvas.width = e.currentTarget.innerWidth
    })
  }
  resize(width, height)
}

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight;
  
  const game = new Game(canvas, ctx)

})