import './index.css'

const EmojiCard = props => {
  const {detailEmoji, selectEmoji} = props

  const {id, emojiUrl, emojiName} = detailEmoji

  const onClickEmoji = () => {
    selectEmoji(id)
  }
  return (
    <li className="emoji-list-container">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
