import { Response, Request } from "express";
const config = require("@settings/config.ts");

const express = require("express");
const path = require("path");

const app = express();

app.use(config.LOGGER("dev"));
app.use(config.BODY_PARSER.json());
app.use(config.BODY_PARSER.urlencoded({ extended: false }));
app.use(config.COOKIE_PARSER());
app.use(express.static(path.join(__dirname, "statics")));


app.get("/", (req: Request, res: Response) => {
  res.send("index");
});

app.listen(config.PORT, () => {
  console.log(`Server is running on ${config.HOST}, port: ${config.PORT}`);
});

module.exports = app;
