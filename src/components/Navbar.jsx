import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Court Legends</Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="/players">Players</Link>
        <Link to="/compare">Compare</Link>
        <Link to="/rivalries">Rivalries</Link>
      </div>
    </nav>
  )
}

export default Navbar