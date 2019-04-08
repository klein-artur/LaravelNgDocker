FROM node:latest

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install

ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV PATH /usr/src/app/node_modules:$PATH

RUN mkdir /usr/src/app/webapp

WORKDIR /usr/src/app/webapp

RUN npm install -g @angular/cli@7.3.6

CMD ng serve --host 0.0.0.0 --port 8888 --poll=2000