// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamList: [],
  }

  componentDidMount = () => {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    // console.log(teams)
    const updatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamList: updatedData})
  }

  render() {
    const {teamList} = this.state
    // console.log(teamList)
    return (
      <div className="container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="unorder-list">
          {teamList.map(eachList => (
            <TeamCard teamList={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
