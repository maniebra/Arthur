import { Response, Request } from "express";
import { AppDataSource } from "@utils/data_source";
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
  app.use(`/${contribApp}`, require(`@contrib/${contribApp}/routes.ts`));
});

// SETUP ROUTERS FOR OUR OWN APPS
config.APPS.forEach((installedApp: string) => {
  app.use(`/${installedApp}`, require(`@apps/${installedApp}/routes.ts`));
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
