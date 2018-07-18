import { isEmail, isLength } from "validator";

export const validateFields = function (fields) {
  var fiedsValidationErrors = [];

  if(!fields.email) {
    fiedsValidationErrors.push('Email can not be empty');
  }
  
  if(fields.email && !isEmail(fields.email)) {
    fiedsValidationErrors.push('Wrong format email');
  }

  if(!fields.password) {
    fiedsValidationErrors.push('Password can not be empty');
  }

  if(fields.password && !isLength(fields.password, {min:6, max: 20})) {
    fiedsValidationErrors.push('Min length of password is 6');
  }
  
  return fiedsValidationErrors;
}