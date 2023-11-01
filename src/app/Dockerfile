# Use an official Nginx runtime as a parent image
FROM nginx:latest

# Set the working directory within the container
WORKDIR /usr/share/nginx/html

# Copy the contents of your Angular app (replace 'app' with the actual directory name)
COPY ./app/ .

# Expose the port your Nginx server will run on (usually 80 by default)
EXPOSE 80

# Define the command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
