import {Component} from 'react'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, result: false, filterEmojiList: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  selectEmoji = id => {
    const {filterEmojiList} = this.state

    const checkId = eachId => eachId === id

    if (id === filterEmojiList.find(checkId)) {
      this.setState({result: true})
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        filterEmojiList: [...prevState.filterEmojiList, id],
      }))
    }
  }

  resetGame = score => {
    const {topScore} = this.state
    if (topScore < score) {
      this.setState({topScore: score})
    }
    this.setState({score: 0, result: false, filterEmojiList: []})
  }

  render() {
    const shuffledEmojisList = this.shuffledEmojisList()
    const {score, topScore, result} = this.state

    return (
      <div>
        <NavBar score={score} topScore={topScore} result={result} />

        <div className="emoji-game-container">
          {result === true || score === 12 ? (
            <div className="result-container">
              <WinOrLoseCard score={score} resetGame={this.resetGame} />
            </div>
          ) : (
            <ul>
              {shuffledEmojisList.map(eachEmoji => (
                <EmojiCard
                  detailEmoji={eachEmoji}
                  key={eachEmoji.id}
                  selectEmoji={this.selectEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
