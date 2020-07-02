FROM node:11-alpine

# Copy package.json and package-lock.json into container
COPY package.json package.json

COPY package-lock.json package-lock.json

# Install node modules
RUN npm install

# Mount server code into container
VOLUME [ "/server" ]

# Move to the client folder
WORKDIR /server

# Expose port 3000
EXPOSE 5000

# Start the server
CMD [ "npm", "run", "dev" ]


