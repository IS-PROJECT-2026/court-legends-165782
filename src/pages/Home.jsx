import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Live on court</span>

          <h1>
            Players. Rivalries. <em>Records.</em>
          </h1>

          <p className="hero-lede">
            A courtside archive of the game's defining figures &mdash;
            career numbers, head-to-heads, and the matches that built
            their legends.
          </p>

          <div className="hero-actions">
            <Link to="/players" className="btn btn-ace">
              Browse players
            </Link>
            <Link to="/rivalries" className="btn btn-ghost">
              View rivalries
            </Link>
          </div>

          <div className="baseline" />

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="num">10</span>
              <span className="label">Players tracked</span>
            </div>
            <div className="hero-stat">
              <span className="num">70+</span>
              <span className="label">Grand Slam titles</span>
            </div>
            <div className="hero-stat">
              <span className="num">6</span>
              <span className="label">Rivalries covered</span>
            </div>
            <div className="hero-stat">
              <span className="num">1v1</span>
              <span className="label">Head-to-head compare</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home