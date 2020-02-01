FROM node

RUN mkdir /iqueensu
WORKDIR /iqueensu

COPY package.json /iqueensu/
RUN yarn
RUN yarn add react-scripts -g --silent

COPY . /iqueensu/

EXPOSE 3000
