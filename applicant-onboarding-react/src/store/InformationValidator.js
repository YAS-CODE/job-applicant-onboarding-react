const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^[\w!@#$%^&\*\(\)\-_=+]{10,}$/
const NAME_REGEX = /^[a-zA-Z0-9]+$/
const DOB_REGEX = /^(\d{2})\/(\d{2})\/(\d{4})$/
const PHONE_NUMBER_REGEX = /^(1[-\. ])?\(?\d{3}\)?[-\. ]?\d{3}[-\. ]?\d{4}$/

export default class InformationValidator {
  static validateField(fieldname, field){
    switch(fieldname){
      case 'email':
        return InformationValidator.validateEmail(field)
      case 'password':
        return InformationValidator.validatePassword(field)
      case 'firstName':
        return InformationValidator.validateName(field)
      case 'lastName':
        return InformationValidator.validateName(field)
      case 'dob':
        return InformationValidator.validateDoB(field)
      case 'phoneNumber':
        return InformationValidator.validatePhoneNumber(field)
      default:
        return field  
    }
  }

  static validateEmail(field){
    field.valid = EMAIL_REGEX.test(field.value)
    field.error = field.valid ? null : "Invalid email"
    
    return field
  }

  static validatePassword(field){
    if(field.value.length < 10){
      field.error = "Use atleast 10 characters"
      field.info = "Password strength: Weak"
      field.valid = false
      return field
    }
    if(!PASSWORD_REGEX.test(field.value)){
      field.error = "Use atleast 10 characters"
      field.valid = false
      field.info = "Password strength: Weak"

      return field
    }

    const hasLetter = /[a-zA-Z]+/.test(field.value)
    const hasNumber = /\d+/.test(field.value)
    const hasSymbol = /[!@#$%^&\*\(\)\-_=+]+/.test(field.value)
    if(hasLetter && hasNumber && hasSymbol){
      field.info = "Password strength: Strong"
      field.valid = true
      field.error = null
      return field
    }

    if((hasLetter && hasNumber) || (hasLetter && hasSymbol) || (hasNumber || hasSymbol)){
      field.info = "Password strength: Medium"
      field.valid = true
      field.error = null
      return field
    }

    field.valid = false
    field.error = "Try adding one number or symbol"
    field.info = "Password strength: Weak"
    
    return field
  }

  static validateName(field){
    field.valid = NAME_REGEX.test(field.value)
    field.error = field.valid ? null : "Invalid name"
    
    return field
  }

  static validateDoB(field){    
    if(!DOB_REGEX.test(field.value)){
      field.valid = false
      field.error = 'Bad date of birth'

      return field
    }

    let matches = field.value.match(DOB_REGEX)
    let dob = new Date(matches[3] + '-' + matches[1] + '-' + matches[2])
    const age = Date.now() - dob.getTime()
    const ageInYears = age / 1000 / 60 / 60 / 24 /365

    if(ageInYears < 18 || ageInYears > 116){
      field.valid = false
      field.error = 'You must be age 18 or older'

      return field
    }

    field.valid = true
    field.error = null
    return field
  }

  static validatePhoneNumber(field){
    field.valid = PHONE_NUMBER_REGEX.test(field.value)
    field.error = field.valid ? null : "Invalid phone number"
    
    return field
  }
}