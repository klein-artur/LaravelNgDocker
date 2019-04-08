#!/bin/bash

mkdir db

if [ -z "$1" ]
then
	echo "Dev build starting."
else
	echo "Prod build starting."
fi

sh stop.sh

if [ -z "$1" ]
then

	echo "Preparing build, setting angular for dev build."
	sed -i '' 's/\.\/node/\.\/\.\.\/node/g' dynapp-web-app/angular.json
	
	cd docker-debug
else

	echo "Preparing build, setting angular for prod build."
	sed -i '' 's/\.\/\.\.\/node/\.\/node/g' dynapp-web-app/angular.json
	
	echo "Cleaning ng build."
	rm -rf ngbuild
	
	echo "Building ng app."
	cd web
	npm install
	ng build --prod
	cd ..
	cd docker-prod
fi

echo "Building docker collection."
docker-compose build --no-cache --verbose

echo "Starting docker collection."
docker-compose up --build -d

echo "Preparing the project (May take some seconds because we need to wait until the db is fully initialized)."
docker-compose exec api sh prepareProject.sh