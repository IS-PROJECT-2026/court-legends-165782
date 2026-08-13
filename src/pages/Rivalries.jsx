import rivalries from '../data/rivalries'
import RivalryCard from '../components/RivalryCard'

function Rivalries() {
  return (
    <main>
      <h1>Rivalries</h1>

      <p>
        Explore some of the defining rivalries in modern tennis.
      </p>

      <div className="rivalry-grid">
        {rivalries.map((rivalry) => (
          <RivalryCard
            key={rivalry.id}
            rivalry={rivalry}
          />
        ))}
      </div>
    </main>
  )
}

export default Rivalries