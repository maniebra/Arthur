FROM node:23-alpine

ADD package.json /app

WORKDIR /app

RUN npm i -g pnpm

RUN pnpm install

ADD * /app

CMD ["pnpm", "run", "dev"]