import { HistoryOptions } from '../component/fields/HistorySelection'
import { GoalOptions } from '../component/fields/GoalSelect'
import { JobOptions } from '../component/fields/JobSelection'
import InformationValidator from './InformationValidator'

export const Steps = {
  PERSONAL: 0,
  IMAGE: 1,
  HISTORY: 2,
  GOALS: 3,
  JOB: 4,
  SUBMIT: 5
}

export class AppStoreClass {
  constructor(){
    this.state = {
      step: Steps.PERSONAL,
      personal: {
        email: this.getDefaultField(),
        password: this.getDefaultPasswordField(),
        firstName: this.getDefaultField(),
        lastName: this.getDefaultField(),
        dob: this.getDefaultField(),
        phoneNumber: this.getDefaultField()
      },
      image: '',
      videoInto: '',
      history: this.getDefaultHistory(),
      goal: GoalOptions ? GoalOptions.NONE : null,
      job: JobOptions ? JobOptions.NONE : null,
    }
  }

  getDefaultField(){
    return {
      value: '',
      valid: null,
      error: ''
    }
  }

  getDefaultPasswordField(){
    let field = this.getDefaultField()
    field.info = "Password strength: Weak"

    return field
  }

  getDefaultHistory(){
    return HistoryOptions ? {
        wisdomTeeth: HistoryOptions.NO,
        crowns: HistoryOptions.NO,
        looseTeeth: HistoryOptions.NO,
        decayingTeeth: HistoryOptions.NO,
      } : null
  }

  nextStep(){
    let valid = true
    switch(this.state.step){
      case Steps.PERSONAL:
        let fields = Object.keys(this.state.personal)
        fields.forEach((field) => {
          this.updatePersonalField(field, this.state.personal[field].value)
          valid = valid && this.state.personal[field].valid
        })
        break
      case Steps.IMAGE:
        valid = this.state.image !== ''
        break
      case Steps.GOALS:
        valid = this.state.goal !== GoalOptions.NONE
        break
      case Steps.JOB:
        valid = this.state.job !== JobOptions.NONE
        break      
      case Steps.HISTORY:
      default:
        valid = true
        break
    }

    if(valid || true){
      this.state.step++
      this.onUpdate()
    }
  }

  prevStep(){
    this.state.step--
    this.onUpdate()
  }

  submit(){
    alert("POST data!")
  }

  updateImage(file){
    this.state.image = file
    this.onUpdate()
  }

  updateVideoIntro(file){
    this.state.videoInto = file
    this.onUpdate()
  }

  updatePersonalField(fieldname, value){
    let field = Object.assign({}, this.state.personal[fieldname])
    field.value = value
    this.state.personal[fieldname] = InformationValidator.validateField(fieldname, field)
    
    this.onUpdate()
  }

  updateHistory(fieldname, value){
    let history = Object.assign({}, this.state.history)
    history[fieldname] = value
    this.state.history = history

    this.onUpdate()
  }

  updateGoal(value){
    this.state.goal = value
    this.onUpdate()
  }

  updateJob(value){
    debugger;
    this.state.job = value
    this.onUpdate()
  }

  updateInsurance(value){
    this.state.insurance = value
    this.onUpdate()
  }

  getState(){
    return this.state
  }

  onUpdate() {
    window.dispatchEvent(new Event('StoreUpdate'))
  }
}

let AppStore = new AppStoreClass()
export default AppStore
