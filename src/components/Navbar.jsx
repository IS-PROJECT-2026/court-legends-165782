import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="brand">
        Court Legends
      </NavLink>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/compare">Compare</NavLink>
        <NavLink to="/rivalries">Rivalries</NavLink>
      </div>
    </nav>
  )
}

export default Navbar