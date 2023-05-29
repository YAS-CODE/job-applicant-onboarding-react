import React, { Component } from 'react'
import AppStore, {AppStoreClass} from '../store/AppStore'
import '../assets/css/bootstrap.css'
import '../App.css'

class Step extends Component {
  constructor(props){
    super(props)
  }

  renderBody() { return null }

  render(){
    return <div className="step-wrapper">
      <div className="container">
        {this.renderBody()}
      </div>
    </div>
  }
}

export default Step