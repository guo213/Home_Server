FROM node:16

COPY . /home/lfs

WORKDIR /home/lfs

RUN npm config set registry https://registry.npm.taobao.org/

RUN npm install -g npm@8.1.2 --force

# RUN npm install -g yrm

# RUN yrm test edunpm

# RUN yrm use edunpm


RUN npm i -g yarn --force 

RUN yarn config set registry https://registry.npm.taobao.org/

RUN yarn

RUN npm install -g @nestjs/cli

EXPOSE 3008

CMD nest start -w admin