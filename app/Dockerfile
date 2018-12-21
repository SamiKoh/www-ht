FROM NODE:8

EXPOSE 3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm --prefix ./frontend install ./frontend
RUN npm --prefix ./frontend run build ./frontend

COPY . .

CMD [ "npm", "start" ]