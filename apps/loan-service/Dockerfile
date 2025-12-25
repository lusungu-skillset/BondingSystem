FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build loan-service

EXPOSE 3005

CMD ["node", "dist/apps/loan-service/main.js"]
