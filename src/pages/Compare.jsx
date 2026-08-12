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

  const samePlayer =
    playerOne &&
    playerTwo &&
    playerOne.id === playerTwo.id

  return (
    <main>
      <h1>Compare Players</h1>

      <p>
        Select two players to compare their career records.
      </p>

      <div className="comparison-selectors">
        <div>
          <label htmlFor="player-one">
            Player 1
          </label>

          <select
            id="player-one"
            value={playerOneId}
            onChange={(event) => setPlayerOneId(event.target.value)}
          >
            <option value="">
              Select Player 1
            </option>

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
          <label htmlFor="player-two">
            Player 2
          </label>

          <select
            id="player-two"
            value={playerTwoId}
            onChange={(event) => setPlayerTwoId(event.target.value)}
          >
            <option value="">
              Select Player 2
            </option>

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

      {!playerOne || !playerTwo ? (
        <p>
          Select two players to compare their career records.
        </p>
      ) : samePlayer ? (
        <p>
          Please select two different players to compare.
        </p>
      ) : (
        <ComparisonTable
          playerOne={playerOne}
          playerTwo={playerTwo}
        />
      )}
    </main>
  )
}

export default Compare