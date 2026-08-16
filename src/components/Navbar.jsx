import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav>
      <div className="nav-row">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          Court Legends
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-links${isOpen ? ' open' : ''}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/players" onClick={closeMenu}>
          Players
        </NavLink>
        <NavLink to="/compare" onClick={closeMenu}>
          Compare
        </NavLink>
        <NavLink to="/rivalries" onClick={closeMenu}>
          Rivalries
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar