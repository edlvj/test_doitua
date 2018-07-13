FROM node:8.4.0

RUN apt-get -y update && apt-get install -y wget nano git build-essential openssl libssl-dev yasm pkg-config

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install
RUN npm run build

EXPOSE 4000
CMD [ "npm", "start" ]