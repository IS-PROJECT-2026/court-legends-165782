import { useState } from 'react'
import players from '../data/players'
import PlayerCard from '../components/PlayerCard'

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

  const hasActiveFilters =
    searchTerm.trim() !== '' || genderFilter !== 'all'

  const clearFilters = () => {
    setSearchTerm('')
    setGenderFilter('all')
  }

  return (
    <div className="page">
      <div className="page-head">
        <span className="eyebrow">The roster</span>
        <h1>Players</h1>
        <p>Search the full roster or filter by gender.</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          aria-label="Search players"
        />

        <select
          value={genderFilter}
          onChange={(event) => setGenderFilter(event.target.value)}
          aria-label="Filter players by gender"
        >
          <option value="all">All players</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>

      <p className="result-count">
        Showing {filteredPlayers.length} player
        {filteredPlayers.length !== 1 ? 's' : ''}
      </p>

      {filteredPlayers.length === 0 ? (
        <div className="empty-state">
          <h2>No players found</h2>

          {searchTerm.trim() !== '' ? (
            <p>
              No players match "{searchTerm}".
            </p>
          ) : (
            <p>
              No players match the selected filter.
            </p>
          )}

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          )}
        </div>
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
  )
}

export default Players