# ---- Base Node Image ----
FROM node:20-alpine

# ---- Set working directory ----
WORKDIR /usr/src/app

# ---- Copy package files ----
COPY package*.json ./

# ---- Install dependencies ----
RUN npm install

# ---- Copy rest of the source code ----
COPY . .

# ---- Build the auth-service only ----
RUN npm run build auth-service

# ---- Expose auth-service port ----
EXPOSE 3001

# ---- Start auth-service ----
CMD ["node", "dist/apps/auth-service/main.js"]
