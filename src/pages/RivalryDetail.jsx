import { Link, useParams } from 'react-router-dom'
import rivalries from '../data/rivalries'
import players from '../data/players'

function RivalryDetail() {
  const { rivalryId } = useParams()

  const rivalry = rivalries.find(
    (item) => item.id === rivalryId
  )

  if (!rivalry) {
    return (
      <div className="page">
        <h1>Rivalry not found</h1>
        <p>The rivalry you are looking for does not exist.</p>
        <Link to="/rivalries" className="back-link">
          &larr; Back to rivalries
        </Link>
      </div>
    )
  }

  const playerOne = players.find(
    (player) => player.id === rivalry.playerOneId
  )

  const playerTwo = players.find(
    (player) => player.id === rivalry.playerTwoId
  )

  return (
    <div className="page">
      <Link to="/rivalries" className="back-link">
        &larr; Back to rivalries
      </Link>

      <h1>{rivalry.title}</h1>
      <p>{rivalry.description}</p>

      <h2>Head-to-head</h2>

      <div className="h2h-panel">
        <div className="h2h-side">
          <Link to={`/players/${playerOne.id}`}>
            {playerOne.name}
          </Link>
          <p className="wins">{rivalry.headToHead.playerOne}</p>
        </div>

        <span className="h2h-vs">wins</span>

        <div className="h2h-side">
          <Link to={`/players/${playerTwo.id}`}>
            {playerTwo.name}
          </Link>
          <p className="wins">{rivalry.headToHead.playerTwo}</p>
        </div>
      </div>

      <h2>Notable meetings</h2>

      {rivalry.notableMeetings.map((meeting, index) => (
        <article key={meeting.event} className="meeting">
          <span className="meeting-tag">
            Match {String(index + 1).padStart(2, '0')}
          </span>

          <h3>{meeting.event}</h3>

          <p className="winner">Winner: {meeting.winner}</p>

          <p>{meeting.description}</p>
        </article>
      ))}
    </div>
  )
}

export default RivalryDetail