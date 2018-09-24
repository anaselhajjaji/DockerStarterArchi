# Net Core API Docker Node

To build the docker image:

```bash
docker build -t my-netcoreapi .
```

To run the image:

```bash
docker run -p 8080:8080 --name=netcoreapi-node -d my-netcoreapi
```

Eventually, to publish the container to localhost:

```bash
docker run -P --publish 127.0.0.1:8080:8080 --name=netcoreapi-node -d my-netcoreapi
```

To see the container logs:

```bash
docker logs netcoreapi-node
```

To remove the container:

```bash
docker rm netcoreapi-node -f
```

We can connect the container in a private network:

```bash
docker network create my-network
docker network connect my-network netcoreapi-node
```

We can inspect the container to get for example the ip address:

```bash
docker inspect netcoreapi-node
```
