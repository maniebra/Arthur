import { Response, Request } from "express";
import { AppDataSource } from "@contrib/utils/database/data_source";
import "reflect-metadata";

const config = require("@settings/config.ts");

const express = require("express");
const path = require("path");

const app = express();

app.use(config.LOGGER);
app.use(config.BODY_PARSER.json());
app.use(config.BODY_PARSER.urlencoded({ extended: false }));
app.use(config.COOKIE_PARSER());
app.use(express.static(path.join(__dirname, "statics")));

// SETUP ROUTERS FOR CONTRIB APPS
config.CONTRIB_APPS.forEach((contribApp: string) => {
  const routerName = require(`@contrib/apps/${contribApp}/app.config.ts`).router_name;
  app.use(`/${routerName}`, require(`@contrib/apps/${contribApp}/routes.ts`));
});

// SETUP ROUTERS FOR OUR OWN APPS
config.APPS.forEach((installedApp: string) => {
  const routerName = require(`@apps/${installedApp}/app.config.ts`).router_name;
  app.use(`/${routerName}`, require(`@apps/${installedApp}/routes.ts`));
});

AppDataSource.initialize()
  .then(() => {
    app.listen(config.PORT, config.HOST, (err: Error) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          `Server is running on http://${config.HOST}:${config.PORT}`
        );
      }
    });
  })
  .catch((err) => {
    console.error("Database initialization failed:", err);
  });
