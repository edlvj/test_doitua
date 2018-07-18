import { validateFile } from "./../../../services/fileupload";
import { isEmail, isLength } from "validator";

export const validateForm = function (fields) {
  var formValidationErrors = [];

  if(!fields.email) {
    formValidationErrors.push('Email can not be empty');
  }
  
  if(fields.email && !isEmail(fields.email)) {
    formValidationErrors.push('Wrong format email');
  }

  if(!fields.password) {
    formValidationErrors.push('Password can not be empty');
  }

  if(fields.password && !isLength(fields.password, {min:6, max: 20})) {
    formValidationErrors.push('Min length of password is 6');
  }
  
  return formValidationErrors;
}

export const validateFormWithFile = function (files, fields) {
  var fileValidations = validateFile(files[0]);
  var formValidations = validateForm(fields);

  return [...fileValidations, ...formValidations];
}
