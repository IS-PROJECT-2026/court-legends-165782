import { useParams, Link } from 'react-router-dom'
import players from '../data/players'

function PlayerProfile() {
  const { playerId } = useParams()

  const player = players.find(
    (player) => player.id === playerId
  )

  if (!player) {
    return (
      <section>
        <h1>Player Not Found</h1>
        <Link to="/players">Back to Players</Link>
      </section>
    )
  }

  return (
    <section>
      <Link to="/players">← Back to Players</Link>

      <h1>{player.name}</h1>

      <p>{player.country}</p>

      <p>{player.bio}</p>

      <h2>Playing Style</h2>
      <p>{player.playingStyle}</p>

      <h2>Career Records</h2>

      <p>Grand Slam titles: {player.grandSlamTitles}</p>
      <p>Career titles: {player.careerTitles}</p>
      <p>
        Current ranking:{' '}
        {player.currentRanking === null
          ? 'Retired'
          : `#${player.currentRanking}`}
      </p>
      <p>Highest ranking: #{player.highestRanking}</p>
      <p>Weeks at No. 1: {player.weeksAtNumberOne}</p>

      <h2>Career Highlights</h2>

      <ul>
        {player.careerHighlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </section>
  )
}

export default PlayerProfile