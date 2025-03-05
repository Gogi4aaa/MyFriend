FROM node:20-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm i -g prisma
RUN npx prisma generate --schema src/prisma/schema.prisma
RUN npm install -g typescript

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/server.js"]