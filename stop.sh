#!/bin/bash

echo "Stopping all possible running debug docker containers."
cd docker-debug
docker-compose down
cd ..

echo "Stopping all possible running prod docker containers."
cd docker-prod
docker-compose down
cd ..
