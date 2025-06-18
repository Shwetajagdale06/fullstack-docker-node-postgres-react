FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install express pg cors

EXPOSE 3000

CMD ["node", "app.js"]


