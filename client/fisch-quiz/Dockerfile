FROM node:20-alpine AS build

WORKDIR /app


COPY . .

RUN npm install

COPY . .

RUN npm run build


# Production image
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/package-lock.json /app/package-lock.json
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

RUN npm install

EXPOSE 80

ENV PORT 80

CMD ["npm", "start"]