import * as fs from 'fs';
import * as path from 'path';
import uuidv4 from 'uuid/v4';
import config from '../config';

const UPLOADS_PATH = './uploads';

export const saveFile = function (file) {
  const ext = path.extname(file.filename);
  const stream = fs.createWriteStream(path.resolve(__dirname, UPLOADS_PATH, uuidv4() + ext));
  file.pipe(stream);
  return stream;
}

export const getFileUrl = function(filepath) {
  if(!filepath)
    return false;
  
  const filePath = path.basename(filepath);
  return config.appUrl + '/uploads/' + filePath;
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