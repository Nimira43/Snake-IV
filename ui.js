class Ui {
  constructor(game) {
    this.game = game;
    this.scoreBoard1 = document.getElementById('scoreBoard1')
    this.scoreBoard2 = document.getElementById('scoreBoard2')
    this.scoreBoard3 = document.getElementById('scoreBoard3')
    this.scoreBoard4 = document.getElementById('scoreBoard4')
    this.gameMenu = document.getElementById('gameMenu')
    this.gameOverScreen = document.getElementById('gameOverScreen')
    this.startButton = document.getElementById('startButton')
    this.startButton.addEventListener('click', () => {
      this.game.start()
    })
    this.fullScreenButton = document.getElementById('fullScreenButton')
    this.fullScreenButton.addEventListener('click', () => {
      this.game.toggleFullScreen()
    })
    this.debugButton = document.getElementById('debugButton')
    this.debugButton.addEventListener('click', () => {
      this.game.debug = !this.game.debug
    })
  }

  update() {
    this.scoreBoard1.innerText = this.game.player1.name + ' - ' + this.game.player1.score 
    this.scoreBoard2.innerText = this.game.player2.name + ' - ' + this.game.player2.score 
    this.scoreBoard3.innerText = this.game.player3.name + ' - ' + this.game.player3.score 
    this.scoreBoard4.innerText = this.game.player4.name + ' - ' + this.game.player4.score 
  }

  triggerGameOver() {
    this.game.gameOver = true
    this.gameOverUi()
  }

  gameplayUi() {
    this.gameMenu.style.display = 'none'
    this.startButton.innerText = 'Restart'
    this.gameOverScreen.style.display = 'none'
  }

  gameOverUi() {
    this.gameMenu.style.display = 'block'
    this.startButton.innerText = 'Start'
    this.gameOverScreen.style.display = 'block'
  }

}