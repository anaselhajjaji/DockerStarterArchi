# PostgreSQL Docker Node

The database will be populated using the SQL script in the file: initdb.sql

To build the docker image:

```bash
docker build -t my-postgres .
```

To run the image:

```bash
docker run -p 5432:5432 --name=postgres-node -d my-postgres
```

To see the container logs:

```bash
docker logs postgres-node
```

To remove the container:

```bash
docker rm postgres-node -f
```

The container can be connected to a private network:

```bash
docker network create my-network
docker network connect my-network postgres-node
```

We can inspect the container to get for example the ip address:

```bash
docker inspect postgres-node
```
