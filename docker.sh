#!/bin/bash

# Start server
docker-compose up -d

#Import documents
docker-compose exec db mongoimport --db MovieDB --collection movies --file /dbs/movies.json