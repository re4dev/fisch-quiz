FROM node:20-alpine AS build

WORKDIR /app

COPY ./client/fisch-quiz/package*.json .

RUN npm install

COPY . .

ENV PORT 80

EXPOSE 80

CMD ["node", "server.js"]