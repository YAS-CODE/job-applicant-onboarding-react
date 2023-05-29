import React from 'react'
import Step from './Step'
import VideoUploader from './VideoUploader'
import AppStore from '../store/AppStore'

export default class StepImage extends Step {
  renderBody() {
    return <div>
      <h1>Select your Portfolio Intro Video</h1>
      <VideoUploader />
    </div>
  }
}
