# LaravNg Docker Package

This is a Laravel + Angular.io + Docker package that helps you to start that kind of project.

## Why do I need this?

Laravel is a powerfull framework to create webapplications and APIs: https://laravel.com/
Angular.io is a powerfull frontend webapplication framework: https://angular.io/

Now for both, you need a webserver, for laravel a database and several other preconditions and dependencies. Wouldn't it be nice to have that in a kind of "start my dev environment" way on every device or server, and just start developing/publishing?

That's what docker does in this project:
Docker is a platform helping to develop and ship applications: https://www.docker.com/

## What do I need to know?
You should know a little bit about docker, docker-compose and obviously angular and laravel knowledge is needed to further develop your application.

## How to start

What you first need is docker. So install docker like described here: https://www.docker.com/get-started

Now you have docker installed and you can start to create a project. For this, just download/close/fork this project. Voilà, you are done!

## What now
Ok, you are not completely done. You have everything downloaded and you can just now begin to write your codes, but you cannot see anything in the browser.
For this, there is a small shell script in the root dir of the project: `build.sh`

call `$ sh build.sh`. 

The script will do the following:
- It will check if any (dev or prod) of the containers are running and end them, if necessary.
- It will start the `docker-compose` build.
- It will start the `docker-compose` up command to bring the containers up in the docker environment.
- Last but not least it will call the `prepareProject.sh` script in the laravel project (./api/). This script will wait until the database is online and then will call the artisan database migrate. You can place custom preparations here.

Now, if you go into your browser, you can call two adresses:
- `http://localhost:8800/` which will bring up the Laravel app. In this project structur, this could be for example the admin panel for the developed api.
- `http://localhost:8888/` which will bring up the frontend Angular application.

If everything is ok, you will see in the angular app, that the ApiVersion was loaded successfully from the api (that happens through a http call to `http://localhost:8800/api/info` so that means, everything works like expected).

## Project structure
- ./api/ (place of the laravel project)
    - ... see laravel documentation for subfolders.
- ./db/ (May not be there, if you never build the project. Place of the db files)
    - ... files mysql will create.
- ./docker-debug/ (place of the docker-compose.yml for the debug/dev builds.)
    - /docker-debug/docker-compose.yml (The debug docker-compose.yml)
- ./docker-prod/ (place of the docker-compose.yml for the prod builds.)
    - /docker-prod/docker-compose.yml (The debug docker-compose.yml)
- ./ngbuild/ (May not be there, if you never prod build the project. Will contain the build ng project)
- ./web/
    - ... see angular documentation for subfolders.

## Changing the App name:
To change the app name of the angular app, you can search for every occurence of `larav-ng-web` and `LaravNgWeb` in the `/web` subfolder and replace it with your wanted name.

## Developing
As this project uses dockers volume feature, you can develop the laravel and the angular project like you used to. The laravel app will be published directly and the angular cli serve command is running on the docker container. So no need to rebuild or whatever. Just if you changed something on the angular projects node_modules, you need to call `sh build.sh` again (or call `npm install whateveryouinstalled` on the running docker container).

## Done for today?
Done for today but not want to keep the containers alive? Just call `sh stop.sh`.

## Changing the running ports
Usually, this package will start the laravel app on port 8800 and the angular app on 8888. You can change that in the docker-compose files (`./docker-debug/docker-compose.yml` for dev runnings, `./docker-prod/docker-compose.yml` for prod runnings). See the port mappings in there for the `api` and the `app` services.

## Going live
You should not use the `sh build.sh` command to publish your application, because the angular application is running on the development server, which is not suggested (you may even see a warning for this, running the shell script).

To go live, you can call the `sh build.sh` script with some parameter, which one does not matter. I prefere calling it like `sh build.sh l` with `l` standing for "live". But as I said, id does not matter.
This will build the angular project properly and serve it on a nginx webserver. At that moment, obviously changing the sources will not automatically change the running ones.

## Have Fun!
Have fun starting with this! Hope it will help you starting a project with this constellation. I needed some time to get it running.

## License
Obviously you can have this codes and do with it whatever you want. It's under MIT. See the LICENSE file.
