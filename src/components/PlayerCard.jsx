import { Link } from 'react-router-dom'

function PlayerCard({ player }) {
  return (
    <article className="player-card">
      <div className="media">
        <span className="tag-code">{player.countryCode}</span>
        <img src={player.image} alt={player.name} />
      </div>

      <div className="body">
        <h2>{player.name}</h2>
        <p className="style">{player.playingStyle}</p>

        <div className="quick-stat">
          <span className="n">{player.grandSlamTitles}</span>
          <span className="u">Grand Slams</span>
        </div>

        <Link to={`/players/${player.id}`} className="view-link">
          View profile
        </Link>
      </div>
    </article>
  )
}

export default PlayerCard