// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {competingTeamLogo} = matchData
    return (
      <li>
        <img src={competingTeamLogo} />
      </li>
    )
  }
}

export default MatchCard
