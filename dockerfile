FROM node:12

WORKDIR /app/ebay-ads

COPY package.json ./

RUN npm install --production[false]

COPY . .

CMD npm run start
