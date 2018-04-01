FROM node:9

RUN apt update && apt install -y build-essential

RUN useradd -ms /bin/bash moviesapp

WORKDIR /home/moviesapp

COPY ./Lab/ /home/moviesapp

RUN npm install

USER moviesapp:moviesapp