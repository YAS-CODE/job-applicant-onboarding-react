import React from 'react'
import Step from './Step'
import JobSelection from './fields/JobSelection'

class StepJob extends Step {


  renderBody() {
    return <div>
      <h1>Select Position to Apply</h1>
      <JobSelection selected={this.props.data} />
    </div>
  }
}

export default StepJob