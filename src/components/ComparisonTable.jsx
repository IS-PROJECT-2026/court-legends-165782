function ComparisonTable({ playerOne, playerTwo }) {
  return (
    <section className="comparison">
      <h2>
        {playerOne.name} vs {playerTwo.name}
      </h2>

      <table>
        <thead>
          <tr>
            <th>Statistic</th>
            <th>{playerOne.name}</th>
            <th>{playerTwo.name}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Grand Slam titles</td>
            <td>{playerOne.grandSlamTitles}</td>
            <td>{playerTwo.grandSlamTitles}</td>
          </tr>

          <tr>
            <td>Career titles</td>
            <td>{playerOne.careerTitles}</td>
            <td>{playerTwo.careerTitles}</td>
          </tr>

          <tr>
            <td>Highest ranking</td>
            <td>#{playerOne.highestRanking}</td>
            <td>#{playerTwo.highestRanking}</td>
          </tr>

          <tr>
            <td>Weeks at No. 1</td>
            <td>{playerOne.weeksAtNumberOne}</td>
            <td>{playerTwo.weeksAtNumberOne}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default ComparisonTable