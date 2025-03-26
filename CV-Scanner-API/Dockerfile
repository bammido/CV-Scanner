FROM node:18
WORKDIR /usr/src/cv_scanner_api
COPY ./CV-Scanner-API/package.json .
RUN npm i
COPY ./CV-Scanner-API .
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]