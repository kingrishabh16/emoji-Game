import './index.css'

const WinOrLoseCard = props => {
  const {score, resetGame} = props

  const playAgainFn = () => {
    resetGame(score)
  }
  const win = score === 12
  return win ? (
    <div className="card-container">
      <div className="resultAndContainer">
        <h1 className="heading">You Won</h1>
        <p className="para">Best Score </p>
        <p>12/12</p>
        <button className="button" type="button" onClick={playAgainFn}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
        className="result-image"
      />
    </div>
  ) : (
    <div className="card-container">
      <div className="resultAndContainer">
        <h1 className="heading">You Lose</h1>
        <p className="para">Score: </p>
        <p>{score}/12</p>
        <button className="button" type="button" onClick={playAgainFn}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="result-image"
      />
    </div>
  )
}

export default WinOrLoseCard
