import { Link } from 'react-router-dom'

function PlayerCard({ player }) {
  return (
    <article className="player-card">
      <img
        src={player.image}
        alt={player.name}
      />

      <h2>{player.name}</h2>

      <p>{player.country}</p>

      <p>{player.playingStyle}</p>

      <Link to={`/players/${player.id}`}>
        View Profile
      </Link>
    </article>
  )
}

export default PlayerCard