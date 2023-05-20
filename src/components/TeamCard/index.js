// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamList} = this.props
    const {id, name, teamImageUrl} = teamList

    return (
      <Link to={`/team-matches/${id}`}>
        <li className="list-item">
          <img src={teamImageUrl} alt={`${name}`} className="team-image" />
          <h1 className="team-name">{name}</h1>
        </li>
      </Link>
    )
  }
}

export default TeamCard
