# Use a Node.js version that supports modern JavaScript syntax
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the TypeScript code
RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/index.js" ]
