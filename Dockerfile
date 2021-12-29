FROM node:16-alpine as development

WORKDIR /app

COPY package.json ./
COPY npm-shrinkwrap.json ./
COPY .npmrc ./

RUN npm install --global npm@latest
RUN npm ci

COPY .*.js ./
COPY *config.?js ./
COPY vite.config.ts ./
COPY index.html ./
COPY public ./public
COPY src ./src

CMD [ "npm", "start"]

FROM development as builder

RUN npm run build

FROM nginx:1.21-alpine as production

COPY --from=builder /app/build /usr/share/nginx/html
