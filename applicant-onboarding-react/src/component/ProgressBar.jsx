import React, { Component } from 'react'
import '../assets/css/bootstrap.css'

const ProgressBar = (props) => {
  const style = {
    width: props.step / props.maxStep * 100 + "%"
  }

  return <div className="progress">
    <div 
      className="progress-bar" 
      role="progressbar" 
      aria-valuenow={props.step} 
      aria-valuemin="0" 
      aria-valuemax={props.maxStep} 
      style={style}
    />
  </div>
}

export default ProgressBar