# Use an official Node.js image as a parent image
FROM node:18 AS build

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Fix permissions to avoid permission denied errors
RUN mkdir -p /app/.angular
RUN chmod -R 777 /app

# Copy the rest of your application code to the container
COPY . .

# Build Angular app
RUN npm run build -- --prod

# Use NGINX image as production server
FROM nginx:alpine

# Copy built Angular app from build stage
COPY --from=build /usr/src/app/dist/* /usr/share/nginx/html/

# Expose port
EXPOSE 80

# Command to run NGINX
CMD ["nginx", "-g", "daemon off;"]


# Expose the port your application will run on
# EXPOSE 4200

# Command to start your application
CMD ["ng", "serve", "--host", "0.0.0.0"]
