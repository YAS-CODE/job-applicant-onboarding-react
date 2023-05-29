import React, { Component } from 'react'
import AppStore, { Steps } from '../store/AppStore'
import '../assets/css/bootstrap.css'

const handlePrev = () => {
  AppStore.prevStep()
}

const handleNext = () => {
  AppStore.nextStep()
}

const handleSubmit = () => {
  AppStore.submit()
}

const Footer = (props) => {
  const prevButton = (props.step === Steps.PERSONAL) ? null : 
    <div className="btn btn-default" onClick={handlePrev}>Previous Step</div>
  const nextButton = (props.step === Steps.SUBMIT) ? null : 
    <div className="btn btn-default spacer-left" onClick={handleNext}>Next Step</div>
  const submitButton = (props.step !== Steps.SUBMIT) ? null :
    <div className="btn btn-default spacer-left" onClick={handleSubmit}>Submit</div>


  return <footer className="footer">
    <div className="container">
      {prevButton}
      {nextButton}
      {submitButton}
    </div>
  </footer>
}

export default Footer
