import rivalries from '../data/rivalries'
import RivalryCard from '../components/RivalryCard'

function Rivalries() {
  return (
    <div className="page">
      <div className="page-head">
        <span className="eyebrow">Court history</span>
        <h1>Rivalries</h1>
        <p>
          Explore some of the defining rivalries in modern
          tennis.
        </p>
      </div>

      {rivalries.length === 0 ? (
        <div className="empty-state">
          <h2>No rivalries available</h2>

          <p>
            Rivalry information is not currently available.
          </p>
        </div>
      ) : (
        <div className="rivalry-grid">
          {rivalries.map((rivalry) => (
            <RivalryCard
              key={rivalry.id}
              rivalry={rivalry}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Rivalries