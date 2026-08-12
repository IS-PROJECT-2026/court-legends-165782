import players from '../data/players'
import PlayerCard from '../components/PlayerCard'
import { useState } from 'react'

function Players() {
  const [searchTerm, setSearchTerm] = useState('')
  const [genderFilter, setGenderFilter] = useState('all')

  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesGender =
      genderFilter === 'all' ||
      player.gender === genderFilter

    return matchesSearch && matchesGender
  })

  return (
    <section>
      <h1>Players</h1>

      <input
        type="text"
        placeholder="Search players..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <select
        value={genderFilter}
        onChange={(event) => setGenderFilter(event.target.value)}
      >
        <option value="all">All Players</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>

      <p>
        Showing {filteredPlayers.length} player
        {filteredPlayers.length !== 1 ? 's' : ''}
      </p>

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