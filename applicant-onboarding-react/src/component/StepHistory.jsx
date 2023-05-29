import React from 'react'
import Step from './Step'
import HistorySelection from './fields/HistorySelection'
import '../assets/css/bootstrap.css'

export default class StepHistory extends Step {
  renderBody() {
    const history = this.props.data

    return <div>
      <h1>Employemnt History</h1>
      <div className="row">
        <HistorySelection 
          text="Have you ever worked with this company before?" 
          selection={history.wisdomTeeth} 
          field="wisdomTeeth" 
        />
        <HistorySelection 
          text="Do you have any relative who work in this company?" 
          selection={history.crowns} 
          field="crowns" 
        />
        <HistorySelection 
          text="Do you have 6+ years of experiance in IT Industry?" 
          selection={history.looseTeeth} 
          field="looseTeeth" 
        />
        <HistorySelection 
          text="Do you have any refence for this Job?" 
          selection={history.decayingTeeth} 
          field="decayingTeeth" 
        />
      </div>
    </div>
  }
}