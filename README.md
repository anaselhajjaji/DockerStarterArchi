Sample app using:

- PostgreSQL Docker Node
- NodeJS Docker Node
- Angular web appplication (Angular CLI 6.2.1) Docker Node
- ASP .Net Core 2.1 Web API Node 
- MongoDB Node
- MongoDB Seed used to populate the MongoDB

# Using docker-compose

The system schema is presented below:

![PlantUML model](http://www.plantuml.com/plantuml/png/5Ssn3G8n30NGdYbWWRYdEgQWHBwSHHmbJcJ_2B4zH_NAjmNOiNgxtDHoMuSiRzS2pBWJEN_IMr7Mla8y3uCOKXwTs3Ya5QwLgz9JzeVdejGv84xnFUclwH9YOEYmDF_99dQS_W00)

The commands are:
`docker-compose build` to build the images and `docker-compose up` or (`docker-compose up -d`) to create and start the containers. We can use `docker-compose start` and `docker-compose stop` to start and stop the containers.

![PlantUML model](http://www.plantuml.com/plantuml/png/5Ssn3G8n30NGdYbWWRYdEgQWHBwSHHmbJcJ_2B4zH_NAjmNOiNgxtDHoMuSiRzS2pBWJEN_IMr7Mla8y3uCOKXwTs3Ya5QwLgz9JzeVdejGv84xnFUclwH9YOEYmDF_99dQS_W00)
