Sample app using:

- PostgreSQL Docker Node
- NodeJS Docker Node
- AngularJS Docker Node
- ASP .Net Core Web API Node 

# Using docker-compose

The system schema is presented below:

![PlantUML model](http://www.plantuml.com/plantuml/png/3Skx3G8n303GLM21kATZ2aha2zRPKUn4_WYnFLUzwjt5-gmFbSyRP-vu03X-sod9TLIGzsL9bgql1JGCcenZu11uqV7qpWAAaUGGlmjzRwUu0gOiQxjq_W40)

The commands are:
`docker-compose build` to build the images and `docker-compose up` or (`docker-compose up -d`) to create and start the containers. We can use `docker-compose start` and `docker-compose stop` to start and stop the containers.
