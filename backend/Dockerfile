FROM node:14

COPY ./package.json /clonecode/
COPY ./yarn.lock /clonecode/
WORKDIR /clonecode/
RUN yarn install

COPY . /clonecode/

CMD yarn start:dev