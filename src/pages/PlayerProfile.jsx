import { useParams, Link } from 'react-router-dom'
import players from '../data/players'
import rivalries from '../data/rivalries'

function PlayerProfile() {
  const { playerId } = useParams()

  const playerIndex = players.findIndex(
    (player) => player.id === playerId
  )

  const player = players[playerIndex]

  if (!player) {
    return (
      <div className="page">
        <div className="empty-state">
          <h1>Player not found</h1>

          <p>
            The player you are looking for does not exist.
          </p>

          <Link to="/players" className="back-link">
            &larr; Back to players
          </Link>
        </div>
      </div>
    )
  }

  const nextPlayer =
    players.length > 1
      ? players[(playerIndex + 1) % players.length]
      : null

  const [firstName, ...rest] = player.name.split(' ')
  const lastName = rest.join(' ')

  const hasCareerTitleData =
    typeof player.grandSlamTitles === 'number' &&
    typeof player.careerTitles === 'number' &&
    player.careerTitles > 0

  const titleShare = hasCareerTitleData
    ? Math.round(
        (player.grandSlamTitles / player.careerTitles) * 100
      )
    : null

  const playerRivalries = rivalries
    .filter(
      (rivalry) =>
        rivalry.playerOneId === player.id ||
        rivalry.playerTwoId === player.id
    )
    .map((rivalry) => {
      const isPlayerOne =
        rivalry.playerOneId === player.id

      const opponentId = isPlayerOne
        ? rivalry.playerTwoId
        : rivalry.playerOneId

      const opponent = players.find(
        (p) => p.id === opponentId
      )

      if (!opponent || !rivalry.headToHead) {
        return null
      }

      const selfWins = isPlayerOne
        ? rivalry.headToHead.playerOne
        : rivalry.headToHead.playerTwo

      const oppWins = isPlayerOne
        ? rivalry.headToHead.playerTwo
        : rivalry.headToHead.playerOne

      return {
        rivalry,
        opponent,
        selfWins,
        oppWins,
      }
    })
    .filter(Boolean)

  const careerHighlights = Array.isArray(
    player.careerHighlights
  )
    ? player.careerHighlights
    : []

  return (
    <>
      <section className="profile-hero">
        <div className="profile-hero-media">
          <img
            src={player.image}
            alt={`${player.name} portrait`}
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />

          <div className="profile-hero-scrim" />
        </div>

        <div className="profile-hero-content">
          <div className="profile-hero-top">
            <Link
              to="/players"
              className="hero-nav-link"
            >
              <span className="chev">&larr;</span> All players
            </Link>

            {nextPlayer && (
              <Link
                to={`/players/${nextPlayer.id}`}
                className="hero-nav-link"
              >
                Next player <span className="chev">&rarr;</span>
              </Link>
            )}
          </div>

          <div className="profile-hero-name-block">
            <span className="profile-badge">
              {player.countryCode}
            </span>

            <h1 className="profile-hero-name">
              {firstName}
              <br />
              {lastName}
            </h1>

            <p className="profile-hero-meta">
              {player.country} &middot; {player.playingStyle}
            </p>
          </div>

          <div className="profile-hero-lower">
            <div>
              <span className="stat-pill">
                Career mark
              </span>

              <div className="stat-box">
                {titleShare !== null ? (
                  <>
                    <span className="stat-box-num">
                      {titleShare}%
                    </span>

                    <span className="stat-box-label">
                      Share of career titles won at Grand Slams
                    </span>
                  </>
                ) : (
                  <span className="stat-box-label">
                    Career title data unavailable
                  </span>
                )}
              </div>
            </div>

            <div className="rivalry-panel">
              <div className="rivalry-panel-head">
                <span>Rivalries</span>
                <span>H2H</span>
              </div>

              {playerRivalries.length === 0 ? (
                <p className="rivalry-panel-empty">
                  No tracked rivalries yet.
                </p>
              ) : (
                playerRivalries.map(
                  ({
                    rivalry,
                    opponent,
                    selfWins,
                    oppWins,
                  }) => (
                    <Link
                      key={rivalry.id}
                      to={`/rivalries/${rivalry.id}`}
                      className="rivalry-row"
                    >
                      <span className="rr-code">
                        {player.countryCode}
                      </span>

                      <span className="rr-mid">
                        <span className="rr-score">
                          {selfWins} : {oppWins}
                        </span>

                        <span className="rr-opp">
                          {opponent.name}
                        </span>
                      </span>

                      <span className="rr-code">
                        {opponent.countryCode}
                      </span>
                    </Link>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="page">
        <p className="profile-bio">
          {player.bio || 'No biography available.'}
        </p>

        <h2>Career records</h2>

        <div className="stat-grid">
          <div className="stat-tile">
            <span className="n">
              {player.grandSlamTitles ?? '—'}
            </span>
            <span className="l">
              Grand Slam titles
            </span>
          </div>

          <div className="stat-tile">
            <span className="n">
              {player.careerTitles ?? '—'}
            </span>
            <span className="l">
              Career titles
            </span>
          </div>

          <div className="stat-tile">
            <span className="n">
              {player.highestRanking
                ? `#${player.highestRanking}`
                : '—'}
            </span>
            <span className="l">
              Highest ranking
            </span>
          </div>

          <div className="stat-tile">
            <span className="n">
              {player.currentRanking === null ||
              player.currentRanking === undefined
                ? 'Ret.'
                : `#${player.currentRanking}`}
            </span>
            <span className="l">
              Current ranking
            </span>
          </div>

          <div className="stat-tile">
            <span className="n">
              {player.weeksAtNumberOne ?? '—'}
            </span>
            <span className="l">
              Weeks at No. 1
            </span>
          </div>
        </div>

        <h2>Career highlights</h2>

        {careerHighlights.length === 0 ? (
          <p className="empty-state">
            No career highlights available.
          </p>
        ) : (
          <ul className="highlight-list">
            {careerHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default PlayerProfile