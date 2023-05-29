import React from 'react'
import Step from './Step'
import AppStore from '../store/AppStore'
import '../assets/css/bootstrap.css'

import {
  EmailField, 
  PasswordField, 
  DoBField, 
  FirstNameField, 
  LastNameField,
  PhoneNumberField
} from './fields/TextField'

class StepPersonal extends Step {
  constructor(props){
    super(props)

    this.renderBody = this.renderBody.bind(this)
}


  renderBody() {
    const personal = this.props.data

    return <div>
      <h1>Personal Information</h1>
      <div className="row">
        <EmailField field={personal.email} />
        <PasswordField field={personal.password} />
        <FirstNameField field={personal.firstName} />
        <LastNameField field={personal.lastName} />
        <DoBField field={personal.dob} />
        <PhoneNumberField field={personal.phoneNumber} />
      </div>
    </div>
  }
}

export default StepPersonal