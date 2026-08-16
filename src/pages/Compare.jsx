import { useState } from 'react'
import players from '../data/players'
import ComparisonTable from '../components/ComparisonTable'

function Compare() {
  const [playerOneId, setPlayerOneId] = useState('')
  const [playerTwoId, setPlayerTwoId] = useState('')

  const playerOne = players.find(
    (player) => player.id === playerOneId
  )

  const playerTwo = players.find(
    (player) => player.id === playerTwoId
  )

  const bothSelected = playerOneId !== '' && playerTwoId !== ''

  const samePlayer =
    playerOne &&
    playerTwo &&
    playerOne.id === playerTwo.id

  const invalidSelection =
    (playerOneId !== '' && !playerOne) ||
    (playerTwoId !== '' && !playerTwo)

  return (
    <div className="page">
      <div className="page-head">
        <span className="eyebrow">Head-to-head</span>
        <h1>Compare players</h1>
        <p>Select two players to compare their career records.</p>
      </div>

      <div className="comparison-selectors">
        <div>
          <label htmlFor="player-one">Player 1</label>

          <select
            id="player-one"
            value={playerOneId}
            onChange={(event) => setPlayerOneId(event.target.value)}
          >
            <option value="">Select player 1</option>

            {players.map((player) => (
              <option
                key={player.id}
                value={player.id}
              >
                {player.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="player-two">Player 2</label>

          <select
            id="player-two"
            value={playerTwoId}
            onChange={(event) => setPlayerTwoId(event.target.value)}
          >
            <option value="">Select player 2</option>

            {players.map((player) => (
              <option
                key={player.id}
                value={player.id}
              >
                {player.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {invalidSelection ? (
        <div className="empty-state">
          <h2>Unable to compare players</h2>
          <p>
            One of the selected players could not be found.
            Please select the players again.
          </p>
        </div>
      ) : !bothSelected ? (
        <div className="empty-state">
          <h2>Select two players</h2>
          <p>
            Choose a player in both selectors to see their
            career comparison.
          </p>
        </div>
      ) : samePlayer ? (
        <div className="empty-state">
          <h2>Choose different players</h2>
          <p>
            Please select two different players to compare.
          </p>
        </div>
      ) : (
        <ComparisonTable
          playerOne={playerOne}
          playerTwo={playerTwo}
        />
      )}
    </div>
  )
}

export default Compare