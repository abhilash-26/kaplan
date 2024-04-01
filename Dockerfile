FROM node:latest


COPY package.json package.json 
COPY package-lock.json package-lock.json
RUN npm install
COPY index.js index.js
COPY src src

CMD [ "npm","run", "dev"]