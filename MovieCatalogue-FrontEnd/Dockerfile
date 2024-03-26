FROM node:18-alpine
WORKDIR /movie-catalogue-frontend/

COPY package.json .
RUN npm install
COPY . .

RUN npm run build
EXPOSE 8080
CMD [ "npm", "run", "preview" ]