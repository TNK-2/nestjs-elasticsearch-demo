FROM nestjs/cli

COPY ./dist /app/dist

COPY ./node_modules /app/node_modules

WORKDIR /app

EXPOSE 4000

ENTRYPOINT exec node dist/main.js