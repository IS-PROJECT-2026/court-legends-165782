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
        <div className="empty-state">
          <h1>Rivalry not found</h1>

          <p>
            The rivalry you are looking for does not exist.
          </p>

          <Link
            to="/rivalries"
            className="back-link"
          >
            &larr; Back to rivalries
          </Link>
        </div>
      </div>
    )
  }

  const playerOne = players.find(
    (player) => player.id === rivalry.playerOneId
  )

  const playerTwo = players.find(
    (player) => player.id === rivalry.playerTwoId
  )

  const hasHeadToHead =
    rivalry.headToHead &&
    typeof rivalry.headToHead.playerOne === 'number' &&
    typeof rivalry.headToHead.playerTwo === 'number'

  const notableMeetings = Array.isArray(
    rivalry.notableMeetings
  )
    ? rivalry.notableMeetings
    : []

  if (!playerOne || !playerTwo) {
    return (
      <div className="page">
        <div className="empty-state">
          <h1>Rivalry data unavailable</h1>

          <p>
            This rivalry is missing information about one
            or more of its players.
          </p>

          <Link
            to="/rivalries"
            className="back-link"
          >
            &larr; Back to rivalries
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <Link
        to="/rivalries"
        className="back-link"
      >
        &larr; Back to rivalries
      </Link>

      <h1>{rivalry.title}</h1>

      <p>
        {rivalry.description ||
          'No description available.'}
      </p>

      <h2>Head-to-head</h2>

      {hasHeadToHead ? (
        <div className="h2h-panel">
          <div className="h2h-side">
            <Link to={`/players/${playerOne.id}`}>
              {playerOne.name}
            </Link>

            <p className="wins">
              {rivalry.headToHead.playerOne}
            </p>
          </div>

          <span className="h2h-vs">
            wins
          </span>

          <div className="h2h-side">
            <Link to={`/players/${playerTwo.id}`}>
              {playerTwo.name}
            </Link>

            <p className="wins">
              {rivalry.headToHead.playerTwo}
            </p>
          </div>
        </div>
      ) : (
        <p className="empty-state">
          Head-to-head information is currently
          unavailable.
        </p>
      )}

      <h2>Notable meetings</h2>

      {notableMeetings.length === 0 ? (
        <p className="empty-state">
          No notable meetings have been recorded
          for this rivalry yet.
        </p>
      ) : (
        notableMeetings.map((meeting, index) => (
          <article
            key={meeting.event || index}
            className="meeting"
          >
            <span className="meeting-tag">
              Match {String(index + 1).padStart(2, '0')}
            </span>

            <h3>
              {meeting.event || 'Unnamed meeting'}
            </h3>

            {meeting.winner && (
              <p className="winner">
                Winner: {meeting.winner}
              </p>
            )}

            <p>
              {meeting.description ||
                'No additional information available.'}
            </p>
          </article>
        ))
      )}
    </div>
  )
}

export default RivalryDetail