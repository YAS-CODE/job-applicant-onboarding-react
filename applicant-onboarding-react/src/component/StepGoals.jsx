import React from 'react'
import Step from './Step'
import GoalSelect from './fields/GoalSelect'

class StepGoals extends Step {
  renderBody() {
    return <div>
      <h1>English Verbel & Written Skill Level</h1>
      <div className="row">
        <GoalSelect selected={this.props.data}/>
      </div>
    </div>
  }
}

export default StepGoals