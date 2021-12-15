FROM node:16-alpine as development

WORKDIR /app

COPY package.json ./
COPY npm-shrinkwrap.json ./
COPY .npmrc ./
COPY .babelrc ./
COPY .eslintrc.js ./

RUN npm ci

COPY config ./config
COPY scripts ./scripts
COPY public ./public
COPY src ./src

CMD [ "npm", "start"]

FROM development as builder

RUN npm run build

FROM nginx:1.21-alpine as production

COPY --from=builder /app/build /usr/share/nginx/html
