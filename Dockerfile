FROM node:8.9.3

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install

COPY ./ ./

RUN npm run build

CMD ["npm", "run", "start:server"]
