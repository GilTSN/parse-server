# base image
FROM node

# create app directory
RUN mkdir -p /usr/src/app

# set the work directory
WORKDIR /usr/src/app

# install/update app dependencies
COPY package.json /usr/src/app
RUN npm install
RUN npm update

# bundle app source
COPY . /usr/src/app

# expose 8080 port
EXPOSE 8080

# run the app
CMD ["npm", "start"]
