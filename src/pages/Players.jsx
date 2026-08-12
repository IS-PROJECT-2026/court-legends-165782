import players from '../data/players'
import PlayerCard from '../components/PlayerCard'
import { useState } from 'react'

function Players() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section>
      <h1>Players</h1>

      <input
        type="text"
        placeholder="Search players..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <div className="player-grid">
        {filteredPlayers.length === 0 ? (
          <p>No players found matching "{searchTerm}".</p>
        ) : (
          <div className="player-grid">
            {filteredPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
              />
            ))}
        </div>
      )}
      </div>
    </section>
  )
}

export default Players