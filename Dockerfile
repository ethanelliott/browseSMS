# base image
FROM node:12.2.0

RUN apt-get update && apt-get install -yq

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# add app
COPY . /app

# build app
CMD npm run build
# add a new secret for the jwt
CMD npm run generate-secret
# serve that ish
CMD npm run serve
