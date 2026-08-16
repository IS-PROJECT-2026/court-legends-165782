import { Link } from 'react-router-dom'

function RivalryCard({ rivalry }) {
  return (
    <article className="rivalry-card">
      <h2>{rivalry.title}</h2>

      <p>{rivalry.description}</p>

      <div className="h2h">
        <span className="score">{rivalry.headToHead.playerOne}</span>
        <span className="sep">&mdash;</span>
        <span className="score">{rivalry.headToHead.playerTwo}</span>
      </div>

      <Link to={`/rivalries/${rivalry.id}`} className="view-link">
        View rivalry
      </Link>
    </article>
  )
}

export default RivalryCard