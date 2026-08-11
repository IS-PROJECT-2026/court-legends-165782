import players from '../data/players'
import PlayerCard from '../components/PlayerCard'

function Players() {
  return (
    <section>
      <h1>Players</h1>

      <div className="player-grid">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
          />
        ))}
      </div>
    </section>
  )
}

export default Players