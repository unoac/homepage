FROM node:20-alpine as build

WORKDIR /app

COPY . . 

RUN npm install  
RUN npm run build  
  
FROM ubuntu:20.04

RUN apt-get update  
RUN apt-get install nginx -y  

COPY --from=build /app/dist /var/www/html/  

EXPOSE 80  

CMD ["nginx","-g","daemon off;"]