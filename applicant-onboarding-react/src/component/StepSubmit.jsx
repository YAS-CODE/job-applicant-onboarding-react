import React from 'react'
import Step from './Step'
import '../assets/css/bootstrap.css'
import "../../node_modules/video-react/dist/video-react.css"; // import css
    import { Player } from "video-react"

class StepSubmit extends Step {
  constructor(props){
    super(props)

    this.state = {
      file: '',
      imagePreviewUrl: ''
    }

    let reader = new FileReader()
        let file = this.props.data.videoInto
        reader.readAsDataURL(file)
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          })
        } 
    
  }
  renderBody() {
    const { personal, history, goal, job } = this.props.data
    const {imagePreviewUrl} = this.state
           


    return <div>
      <h1>Submit Information</h1>
      <dl>
        <dt>Email</dt>
        <dd>{personal.email.value}</dd>
      </dl>
      <dl>
        <dt>First Name</dt>
        <dd>{personal.firstName.value}</dd>
      </dl>
      <dl>
        <dt>Last Name</dt>
        <dd>{personal.lastName.value}</dd>
      </dl>
      <dl>
        <dt>Date of Birth</dt>
        <dd>{personal.dob.value}</dd>
      </dl>
      <dl>
        <dt>Phone Number</dt>
        <dd>{personal.phoneNumber.value}</dd>
      </dl>
      <dl>
        <dt>Have you ever worked with this company before?</dt>
        <dd>{history.wisdomTeeth}</dd>
      </dl>
      <dl>
        <dt>Do you have any relative who work in this company?</dt>
        <dd>{history.crowns}</dd>
      </dl>
      <dl>
        <dt>Do you have 6+ years of experiance in IT Industry?</dt>
        <dd>{history.looseTeeth}</dd>
      </dl>
      <dl>
        <dt>Do you have any refence for this Job?</dt>
        <dd>{history.decayingTeeth}</dd>
      </dl>
      <dl>
        <dt>Goal</dt>
        <dd>{goal}</dd>
      </dl>
      <dl>
        <dt>Doctor</dt>
        <dd>{job}</dd>
      </dl>      
      <Player
        playsInline
        src={imagePreviewUrl}
        fluid={false}
        width={480}
        height={272}
    />
      
    </div>
  }
}

export default StepSubmit