FROM node:18-alpine as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:18-alpine


RUN apk add --no-cache nginx

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY data ./data

RUN npm ci --production

COPY --from=build /app/dist ./dist
COPY --from=build /app/data ./data
COPY nginx.conf /etc/nginx/http.d/default.conf
COPY docker-entrypoint.sh /usr/local/bin/


RUN mkdir -p /run/nginx && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 3000 3001

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["node", "dist/index.js"]

