import React, { Component } from 'react'
import AppStore from '../../store/AppStore'
import '../../assets/css/bootstrap.css'

export const HistoryOptions = {
  YES: 'Yes',
  NO: 'No',
  UNSURE: 'Unsure'
}

export default class HistorySelection extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const {handleChange, field} = this.props
    AppStore.updateHistory(field, e.target.value)
  }

  render(){
    return <div className="col-md-6">
      <h4>{this.props.text}</h4>
      <select className="form-control" value={this.props.selection} onChange={this.handleChange}>
        <option value={HistoryOptions.YES}>{HistoryOptions.YES}</option>
        <option value={HistoryOptions.NO}>{HistoryOptions.NO}</option>
        <option value={HistoryOptions.UNSURE}>{HistoryOptions.UNSURE}</option>
      </select>
    </div>
  }
}