FROM node:20.1-alpine3.17
WORKDIR /app
EXPOSE 7302

# Start the app
CMD [ "npm", "run", "docker" ]