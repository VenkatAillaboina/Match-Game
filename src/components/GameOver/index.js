import './index.css'

const GameOver = props => {
  const {score, playAgainGame} = props
  const onClickReset = () => {
    playAgainGame()
  }
  return (
    <div className="game-over-bg-container">
      <img
        alt="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="trophy"
      />
      <p className="your-score"> YOUR SCORE </p>
      <p className="your-score"> {score} </p>
      <button type="button" className="reset-button" onClick={onClickReset}>
        <img
          alt="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="reset-button-image"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOver
