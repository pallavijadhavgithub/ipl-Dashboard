// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    matchDetails: [],
  }

  componentDidMount = () => {
    this.getTeamsPlayersDetails()
  }

  getTeamsPlayersDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,

      latestMatchDetails: {
        result: data.latest_match_details.result,
        date: data.latest_match_details.date,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        venue: data.latest_match_details.venue,
        firstInnings: data.latest_match_details.first_innings,
        umpires: data.latest_match_details.umpires,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        secondInnings: data.latest_match_details.second_innings,
      },

      recentMatches: data.recent_matches.map(recentMatch => ({
        result: recentMatch.result,
        date: recentMatch.date,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        venue: recentMatch.venue,
        firstInnings: recentMatch.first_innings,
        umpires: recentMatch.umpires,
        id: recentMatch.id,
        manOfTheMatch: recentMatch.man_of_the_match,
        matchStatus: recentMatch.match_status,
        secondInnings: recentMatch.second_innings,
      })),
    }
    this.setState({matchDetails: formattedData})
  }

  renderRecentMatchesList = () => {
    const {matchDetails} = this.state
    const {recentMatches} = matchDetails

    return (
      <ul>
        {recentMatches.map(eachMatch => (
          <MatchCard matchData={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {matchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchDetails
    // console.log(matchDetails)

    return (
      <div className="main-container">
        <img src={teamBannerUrl} className="banner" alt="team banner" />
        <p className="para">Latest Matches</p>

        <LatestMatch latestMatchDetails={latestMatchDetails} />

        {this.renderRecentMatchesList()}
      </div>
    )
  }
}

export default TeamMatches
