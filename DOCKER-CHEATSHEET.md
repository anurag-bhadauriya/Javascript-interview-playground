### Docker Basics

- docker version: Check Docker version
- docker info: Check Docker system information
- docker run <image-name>: Run a Docker image
- docker ps: Check running containers
- docker ps -a: Check all containers (running and stopped)
- docker stop <container-id>: Stop a running container
- docker rm <container-id>: Remove a stopped container
- docker images: Check Docker images
- docker rmi <image-id>: Remove a Docker image
- docker pull <image-name>: Pull a Docker image from a registry


### Dockerfile Commands

- FROM: Set base image
- RUN: Run commands during image build
- COPY: Copy files and directories from host to image
- ADD: Copy files and directories from host to image (can also extract tar archives and URLs)
- CMD: Set default command when container starts
- ENTRYPOINT: Set default command when container starts (can also be used for executable scripts)
- EXPOSE: Expose port(s) for networking
- ENV: Set environment variable(s)
- ARG: Define build-time variables

    ```dockerfile
    # Use an official Node.js runtime as a parent image
    FROM node:14.17.0-alpine3.13

    # Set the working directory to /app
    WORKDIR /app

    # Copy the package.json and package-lock.json files to the container
    COPY package*.json ./

    # Install dependencies
    RUN npm ci --only=production

    # Copy the rest of the application code to the container
    COPY . .

    # Expose the port that the application listens on
    EXPOSE 3000

    # Start the application
    CMD [ "npm", "start" ]
    ```

### Docker Networking

- docker network ls: List Docker networks
- docker network create <network-name>: Create a Docker network
- docker network connect <network-name> <container-name>: Connect a container to a network
- docker network disconnect <network-name> <container-name>: Disconnect a container from a network

### Docker Volumes

- docker volume ls: List Docker volumes
- docker volume create <volume-name>: Create a Docker volume
- docker run -v <volume-name>:<container-path> <image-name>: Mount a volume to a container
- docker run -v <host-path>:<container-path> <image-name>: Mount a host directory to a container


### Docker Compose

- docker-compose up: Start services defined in docker-compose.yml
- docker-compose down: Stop and remove services defined in docker-compose.yml
- docker-compose ps: List running containers for services defined in docker-compose.yml
- docker-compose logs: View logs for services defined in docker-compose.yml

#### Example docker-compose.yaml

```yaml
version: '3'

services:
  # MongoDB service
  db:
    image: mongo:4.4.4-bionic
    restart: always
    volumes:
      - db_data:/data/db
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example

  # Node.js backend service
  backend:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      DB_HOST: db
      DB_USERNAME: root
      DB_PASSWORD: example

  # Angular frontend service
  frontend:
    build: ./frontend
    ports:
      - "4200:4200"
    depends_on:
      - backend

volumes:
  db_data:

```

Explanation:

1. version: '3': This specifies the version of the Docker Compose file format.
2. services: This is a list of services that will be deployed.
3. db: This is the MongoDB service.
4. image: mongo:4.4.4-bionic: This specifies the MongoDB Docker image to use.
5. restart: always: This specifies that the container should always be restarted if it stops for any reason.
6. volumes: db_data:/data/db: This creates a volume named db_data and mounts it to the /data/db directory in the container.
7. ports: - "27017:27017": This maps the container's port 27017 to the host's port 27017.
8. environment: MONGO_INITDB_ROOT_USERNAME: root MONGO_INITDB_ROOT_PASSWORD: example: This sets the environment variables for the MongoDB container to set the root username and password.
9. backend: This is the Node.js backend service.
10. build: ./backend: This specifies the Dockerfile to use for building the backend service.
11. ports: - "3000:3000": This maps the container's port 3000 to the host's port 3000.
12. environment: DB_HOST: db DB_USERNAME: root DB_PASSWORD: example: This sets the environment variables for the backend container to connect to the MongoDB container.
13. frontend: This is the Angular frontend service.
14. build: ./frontend: This specifies the Dockerfile to use for building the frontend service.
15. ports: - "4200:4200": This maps the container's port 4200 to the host's port 4200.
16. depends_on: - backend: This specifies that the frontend service depends on the backend service, so the backend service will be started first.
17. volumes: db_data:: This defines the db_data volume that is used by the MongoDB service.