# Court Legends

A curated tennis player showcase built with React and Vite — browse players, compare career stats, and explore rivalries.

**Live app:** https://is-project-2026.github.io/court-legends-165782/
**Repo:** https://github.com/IS-Project-2026/court-legends-165782

## What it does

- **Player catalogue** — 10 curated players (5 men, 5 women), with search by name and a gender filter
- **Player profiles** — bio, playing style, Grand Slam/career titles, ranking history, career highlights, and any tracked rivalries
- **Compare** — pick two players, see their career stats side by side (blocks comparing a player to themselves)
- **Rivalries** — head-to-head records and notable meetings between select players, linked back to their profiles
- **Responsive** — works down to mobile, including a collapsing nav menu

All data is static (no backend) — a small, hand-picked dataset rather than a full tennis database.

## Stack

React + Vite, React Router for client-side routing, plain CSS. Deployed as a static site via GitHub Pages/Actions.

## Project structure

```text
public/images/players/     player photos
src/
  components/               Navbar, Footer, PlayerCard, RivalryCard, ComparisonTable
  data/                     players.js, rivalries.js
  pages/                    Home, Players, PlayerProfile, Compare, Rivalries, RivalryDetail
  App.jsx, main.jsx, index.css
```

## Data model

**Player:** `id`, `name`, `country`, `countryCode`, `gender`, `image`, `hand`, `backhand`, `playingStyle`, `grandSlamTitles`, `careerTitles`, `highestRanking`, `currentRanking`, `weeksAtNumberOne`, `bio`, `careerHighlights[]`

**Rivalry:** `id`, `title`, `playerOneId`, `playerTwoId`, `description`, `headToHead`, `notableMeetings[]` — rivalries reference players by ID rather than duplicating player data.

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/players` | Player catalogue |
| `/players/:playerId` | Player profile |
| `/compare` | Compare two players |
| `/rivalries` | Rivalry catalogue |
| `/rivalries/:rivalryId` | Rivalry detail |

## Running locally

```bash
git clone https://github.com/IS-Project-2026/court-legends-165782.git
cd court-legends-165782
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Deployment notes

Deployed under a repo subpath, so `vite.config.js` sets `base: '/court-legends-165782/'`, and images are referenced via `import.meta.env.BASE_URL` so paths resolve correctly. A `404.html` fallback (copied from the built `index.html`) handles direct loads/refreshes of client-side routes like `/players/novak-djokovic` on GitHub Pages.

## Known limitations

- Static data only — no backend, live rankings, or real-time scores
- No user accounts, saved comparisons, or favorites
- Filtering is limited to name search + gender

## Possible next steps

More players, surface filtering (clay/grass/hard), fuller match/rivalry stats, and eventually pulling from a live tennis data source instead of static files.