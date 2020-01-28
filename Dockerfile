FROM node

RUN mkdir /iqueensu
WORKDIR /iqueensu

COPY package.json yarn.lock /iqueensu/
RUN yarn install

COPY . /iqueensu/

EXPOSE 3000

CMD ["yarn", "run", "start"]
