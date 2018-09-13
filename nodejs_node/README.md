# NodeJS Docker Node

To build the docker image:

```bash
docker build -t my-nodejs .
```

To run the image:

```bash
docker run -p 8080:8080 --name=nodejs-node -d my-nodejs
```

Eventually, for test purposes we can think of exposing the REST API:

```bash
docker run -P --publish 127.0.0.1:8080:8080 --name=nodejs-node -d my-nodejs
```

To see the container logs:

```bash
docker logs nodejs-node
```

To remove the container:

```bash
docker rm nodejs-node -f
```

We can connect the container in a private network:

```bash
docker network create my-network
docker network connect my-network nodejs-node
```

We can inspect the container to get for example the ip address:

```bash
docker inspect nodejs-node
```
