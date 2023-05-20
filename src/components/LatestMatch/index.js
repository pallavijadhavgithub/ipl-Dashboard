// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      result,
      competingTeam,
      date,
      competingTeamLogo,
      venue,
      firstInnings,
      umpires,
      id,
      manOfTheMatch,
      matchStatus,
      secondInnings,
    } = latestMatchDetails

    console.log(latestMatchDetails)

    return (
      <div className="match-container">
        <div className="first">
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img src={competingTeamLogo} />
      </div>
    )
  }
}

export default LatestMatch
