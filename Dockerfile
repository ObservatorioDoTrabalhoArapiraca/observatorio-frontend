FROM nginx:alpine

ARG FACEBOOK_URL
ARG TWITTER_URL
ARG INSTAGRAM_URL

RUN mkdir -p /usr/share/nginx/html/js

RUN echo "window.socialLinks = { \
  facebook: '${FACEBOOK_URL}', \
  twitter: '${TWITTER_URL}', \
  instagram: '${INSTAGRAM_URL}' \
};" > /usr/share/nginx/html/js/config.js

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY public /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html