FROM node:20-alpine3.17

ENV PORT=80

WORKDIR /app/

# Install dependencies
COPY package*.json /app/
RUN npm install

COPY . /app/

EXPOSE $PORT

CMD ["node", "index.js" ]