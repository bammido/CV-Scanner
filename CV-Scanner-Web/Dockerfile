FROM node:18
WORKDIR /usr/src/cv_scanner_web

# Install dependencies
# COPY ./CV-Scanner-Web .
COPY ./CV-Scanner-Web .

RUN npm install

RUN npm run build

EXPOSE 80
CMD ["npm", "run", "preview"]