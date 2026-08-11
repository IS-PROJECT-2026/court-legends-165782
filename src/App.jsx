import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Players from './pages/Players'
import Compare from './pages/Compare'
import Rivalries from './pages/Rivalries'
import PlayerProfile from './pages/PlayerProfile'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/rivalries" element={<Rivalries />} />
          <Route
            path="/players/:playerId"
            element={<PlayerProfile />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App