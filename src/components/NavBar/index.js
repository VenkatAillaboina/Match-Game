import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <nav className="navbar">
      <img
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="website-logo"
      />
      <ul className="navbar-items-container">
        <li>
          <p className="score-title">
            Score: <span className="score-time-text">{score}</span>
          </p>
        </li>
        <li className="timer-item">
          <img
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer-image"
          />
          <p className="score-time-text">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
