FROM node:16-alpine3.11 as builder

# env set
ENV EVA_ENTRYPOINT=/api

WORKDIR /
COPY package.json /
RUN yarn

RUN yarn build

FROM nginx:1.21

# COPY /nginx/ /etc/nginx/

COPY  /dist/ /usr/share/nginx/html/

EXPOSE 80