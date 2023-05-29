import React, { Component } from 'react'
import AppStore from '../../store/AppStore'
import minor from '../../assets/image/minor.png'
import major from '../../assets/image/major.png'
import moderate from '../../assets/image/moderate.png'

export const GoalOptions = {
  NONE: 0,
  MINOR: 1,
  MODERATE: 2,
  MAJOR: 3
}

export default class GoalSelection extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(value){
    AppStore.updateGoal(value)
  }

  render(){
    const selected = this.props.selected
    const classMajor = "goalImage" + (selected === GoalOptions.MAJOR ? " selected" : "")
    const classMinor = "goalImage" + (selected === GoalOptions.MINOR ? " selected" : "")
    const classModerate = "goalImage" + (selected === GoalOptions.MODERATE ? " selected" : "")
    const info = selected === GoalOptions.NONE ? <h4 className="col-md-12 spacer">Please Select a Level</h4> : null

    return <div>
      <div className="col-md-4" onClick={this.handleClick.bind(this, GoalOptions.MINOR)}>
        <img src={minor} className={classMinor}/>
        <p className="spacer">Basic{}</p>
      </div>
      <div className="col-md-4" onClick={this.handleClick.bind(this, GoalOptions.MODERATE)}>
        <img src={moderate} className={classModerate}/>
        <p className="spacer">Advance</p>
      </div>
      <div className="col-md-4" onClick={this.handleClick.bind(this, GoalOptions.MAJOR)}>
        <img src={major} className={classMajor}/>
        <p className="spacer">Fluent</p>
      </div>
      {info}
    </div>
  }
}
