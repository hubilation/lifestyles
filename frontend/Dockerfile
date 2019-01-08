FROM node:lts as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install; \
echo install; 
COPY . ./
RUN npm run build; \
echo build; 
RUN ls

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]