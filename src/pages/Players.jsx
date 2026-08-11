import players from '../data/players'

function Players() {
  return (
    <section>
      <h1>Players</h1>

      {players.map((player) => (
        <p key={player.id}>{player.name}</p>
      ))}
    </section>
  )
}

export default Players