import * as fs from 'fs';
import * as path from 'path';

const UPLOADS_PATH = '../../uploads';

export const saveFile = function (file) {
  var date = Date.now();
  const stream = fs.createWriteStream(path.resolve(__dirname, UPLOADS_PATH, date.toString() +'-'+ file.filename));
  file.pipe(stream);
  return stream;
}

export const validateFile = function (file) {
  var fileValidationErrors = [];
  
  if(!file) {
    fileValidationErrors.push('Avatar can not be empty');
  }

  if(file.filename && !(/\.(jpg|jpeg|png)$/i).test(file.filename)) {
    fileValidationErrors.push('Avatar must have .jpg, .jpeg, .png format');    
  }

  return fileValidationErrors;
}