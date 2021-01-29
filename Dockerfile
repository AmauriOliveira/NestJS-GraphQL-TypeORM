FROM node:12-alpine
# alpine não server para rodar o build do nestJS
WORKDIR /home/api

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD npm run start:dev