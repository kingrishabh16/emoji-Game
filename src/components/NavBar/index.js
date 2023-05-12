import './index.css'

const NavBar = props => {
  const {score, topScore, result} = props
  const showHide = result || score === 12 ? 'hide' : 'show'
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="logo-para">Emoji Game</h1>
      </div>
      <p className={showHide}>Score: {score}</p>
      <p className={showHide}>Top Score: {topScore}</p>
    </div>
  )
}

export default NavBar
