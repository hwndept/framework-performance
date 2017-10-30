FROM node:8-alpine

WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]

ADD package.json .

RUN npm install

ADD tsconfig.json .

COPY src src
