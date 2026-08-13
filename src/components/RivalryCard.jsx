import { Link } from 'react-router-dom'

function RivalryCard({ rivalry }) {
  return (
    <article className="rivalry-card">
      <h2>{rivalry.title}</h2>

      <p>{rivalry.description}</p>

      <p>
        Head-to-head:{' '}
        {rivalry.headToHead.playerOne} -{' '}
        {rivalry.headToHead.playerTwo}
      </p>

      <Link to={`/rivalries/${rivalry.id}`}>
        View Rivalry
      </Link>
    </article>
  )
}

export default RivalryCard