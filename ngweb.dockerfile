FROM nginx:1.10

COPY ./ngbuild /var/www/

WORKDIR /var/www/

ADD ngwebvhost.conf /etc/nginx/conf.d/default.conf 