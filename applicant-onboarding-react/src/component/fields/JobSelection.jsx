import React, { Component } from 'react'
import AppStore from '../../store/AppStore'
import job from '../../assets/image/star.png'

export const JobOptions = {
  NONE: 0,
  PERSON: 'Dr. Person',
  GOOD: 'Dr. Good',
  BAD: 'Dr. Bad',
  SMILES: 'Dr. Smiles',
  FROWNS: 'Dr. Frowns'
}

export default class JobSelection extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(value){
    AppStore.updateJob(value)
  }

  render(){
    const {selected} = this.props

    return <div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, JobOptions.PERSON)}>
        <img src={job} className={selected === JobOptions.PERSON ? "selected" : ""} style={{height:100, width:100}}/>
        <p>{JobOptions.PERSON}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, JobOptions.GOOD)}>
        <img src={job} className={selected === JobOptions.GOOD ? "selected" : ""} style={{height:100, width:100}}/>
        <p>{JobOptions.GOOD}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, JobOptions.BAD)}>
        <img src={job} className={selected === JobOptions.BAD ? "selected" : ""} style={{height:100, width:100}}/>
        <p>{JobOptions.BAD}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, JobOptions.SMILES)}>
        <img src={job} className={selected === JobOptions.SMILES ? "selected" : ""} style={{height:100, width:100}}/>
        <p>{JobOptions.SMILES}</p>
      </div>
      <div className="col-md-2" onClick={this.handleClick.bind(this, JobOptions.FROWNS)}>
        <img src={job} className={selected === JobOptions.FROWNS ? "selected" : ""} style={{height:100, width:100}}/>
        <p>{JobOptions.FROWNS}</p>
      </div>
    </div>
  }
}