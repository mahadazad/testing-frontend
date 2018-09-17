FROM php:7.2.9-fpm
COPY ./php.ini /usr/local/etc/php/
RUN apt-get update && apt-get install -y libzip-dev
RUN apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ 
RUN docker-php-ext-install pdo pdo_mysql gd zip

WORKDIR /code

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
	php composer-setup.php && \
	php -r "unlink('composer-setup.php');" && \
	mv composer.phar /usr/bin/composer && \
	chmod +x /usr/bin/composer

COPY ./code /code/

EXPOSE 9000
CMD ["php-fpm"]
