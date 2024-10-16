class Ui {
  constructor(game) {
    this.game = game;
    this.scoreBoard1 = document.getElementById('scoreBoard1')
    this.scoreBoard2 = document.getElementById('scoreBoard2')
    this.scoreBoard3 = document.getElementById('scoreBoard3')
    this.scoreBoard4 = document.getElementById('scoreBoard4')
  }
  update() {
    this.scoreBoard1.innerText = 'P1: ' + this.game.player1.score 
  }
}