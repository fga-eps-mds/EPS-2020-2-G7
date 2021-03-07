FROM node:6-alpine

ENV HOME=/home/app
WORKDIR $HOME

COPY EPS-2020-2-G7/package.json ./
RUN npm install

EXPOSE 4000

CMD ["npm", "start"]
