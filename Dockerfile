FROM node:13.10.1-alpine3.11 as build

WORKDIR /web
COPY ./web/package*.json ./
RUN npm install -g react react-dom
RUN npm install

COPY ./web .
RUN npm run build


FROM nginx:1.17.9-alpine

COPY --from=build /app/build/* /usr/share/nginx/html

CMD ["nginx" "-g" "daemon off;"]
