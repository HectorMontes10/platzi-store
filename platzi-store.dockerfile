# stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm config set registry="http://registry.npmjs.org/"
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/platzi-store /usr/share/nginx/html