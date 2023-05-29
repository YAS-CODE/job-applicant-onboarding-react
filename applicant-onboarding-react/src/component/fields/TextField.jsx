import React, { Component } from 'react'
import AppStore from '../../store/AppStore'
import '../../assets/css/bootstrap.css'

export class TextField extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const value = e.target.value

    this.props.onUpdate(value)
  }

  render(){
    const {placeholder, className, text, field} = this.props
    const errors = field.error ? <label className="control-label" style={{marginLeft: "10px"}}>{field.error}</label> : null
    const infos = field.info ? <p>{field.info}</p> : null
    let wrapperClass = "form-group has-feedback"
    if(field.valid === true){
      wrapperClass += " has-success"
    } else if(field.valid === false){
      wrapperClass += " has-error"
    }

    return <div className="form-inline col-md-6 spacer" >
      <div className={wrapperClass}>
        <p>{text}</p>
        <input
          className="form-control"
          type={this.props.isPassword ? "password" : "text"}
          value={field.value}
          placeholder={placeholder ? placeholder : ''}
          onChange={this.handleChange}
        />
        {errors}
        {infos}
      </div>
    </div>
  }
}


export class EmailField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('email', value)
  }

  render(){
    return <TextField 
      text="Email"
      onUpdate={this.onUpdate}
      placeholder='great@jobs.com'
      field={this.props.field}
    />
  }
}


export class PasswordField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('password', value)
  }

  render(){
    return <TextField 
      text="Password"
      onUpdate={this.onUpdate}
      placeholder='party123'
      field={this.props.field}
      isPassword
    />
  }
}


export class DoBField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('dob', value)
  }

  handleChange(e){
    let value = e.target.value
    const valid = this.validate(value)

    if(value.length === 2 || value.length === 5){
      value += '/'
    } else if(value.length === 3 || value.length === 6){
      value = value.substring(0, value.length -1)
    }

    this.props.onUpdate(value)
  }

  render(){
    return <TextField 
      text="Date of birth"
      onUpdate={this.onUpdate}
      placeholder='MM/DD/YYYY'
      field={this.props.field}
    />
  }
}

export class FirstNameField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('firstName', value)
  }

  render(){
    return <TextField 
      text="First Name"
      onUpdate={this.onUpdate}
      placeholder='Yasir'
      field={this.props.field}
    />
  }
}

export class LastNameField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('lastName', value)
  }

  render(){
    return <TextField 
      text="Last Name"
      onUpdate={this.onUpdate}
      placeholder='Amin'
      field={this.props.field}
    />
  }
}

export class PhoneNumberField extends Component {
  onUpdate(value){
    AppStore.updatePersonalField('phoneNumber', value)
  }

  render(){
    return <TextField 
      text="Phone Number"
      onUpdate={this.onUpdate}
      placeholder='+92-323-4743622'
      field={this.props.field}
    />
  }
}

