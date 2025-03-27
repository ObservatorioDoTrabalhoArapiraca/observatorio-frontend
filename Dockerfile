# Estágio de construção
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio de produção
FROM nginx:alpine

# 1. Remova os arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

ARG FACEBOOK_URL
ARG TWITTER_URL
ARG INSTAGRAM_URL

ENV VITE_FACEBOOK_URL=${FACEBOOK_URL}
ENV VITE_TWITTER_URL=${TWITTER_URL}
ENV VITE_INSTAGRAM_URL=${INSTAGRAM_URL}

# 2. Copie todos os arquivos construídos
COPY --from=build /app/dist /usr/share/nginx/html

# 3. Substitua a configuração do Nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# 4. Garanta permissões corretas
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]