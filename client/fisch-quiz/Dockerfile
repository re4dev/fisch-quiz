FROM node:20-alpine AS build

WORKDIR /app

COPY ./client/fisch-quit/package*.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]