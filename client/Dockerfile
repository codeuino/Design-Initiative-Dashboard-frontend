FROM node:11-alpine

# Copy package.json and package-lock.json into container
COPY package.json package.json

COPY package-lock.json package-lock.json

# Install node modules
RUN npm install

# Mount client code into container
VOLUME [ "/client" ]

# Move to the client folder
WORKDIR /client

# Expose port 3000
EXPOSE 3000

# Start the server
CMD [ "npm", "start" ]


