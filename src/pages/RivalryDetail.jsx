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
      <main>
        <h1>Rivalry Not Found</h1>

        <p>
          The rivalry you are looking for does not exist.
        </p>

        <Link to="/rivalries">
          Back to Rivalries
        </Link>
      </main>
    )
  }

  const playerOne = players.find(
    (player) => player.id === rivalry.playerOneId
  )

  const playerTwo = players.find(
    (player) => player.id === rivalry.playerTwoId
  )

  return (
    <main>
      <Link to="/rivalries">
        ← Back to Rivalries
      </Link>

      <h1>{rivalry.title}</h1>

      <p>{rivalry.description}</p>

      <section>
        <h2>Head-to-Head</h2>

        <div>
            <Link to={`/players/${playerOne.id}`}>
                {playerOne.name}
            </Link>
            <p>{rivalry.headToHead.playerOne} wins</p>
        </div>

        <div>
            <Link to={`/players/${playerTwo.id}`}>
                {playerTwo.name}
            </Link>
            <p>{rivalry.headToHead.playerTwo} wins</p>
        </div>
      </section>

      <section>
        <h2>Notable Meetings</h2>

        {rivalry.notableMeetings.map((meeting, index) => (
            <article key={index}>
                <h3>{meeting.event}</h3>

                <p>
                    <strong>Winner:</strong> {meeting.winner}
                </p>

            <p>{meeting.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default RivalryDetail