FROM node:8

EXPOSE 3000

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install -g express
RUN npm install

COPY . .

RUN npm --prefix ./frontend install ./frontend
RUN npm --prefix ./frontend run build

CMD [ "npm", "start" ]