const dotenv = require("dotenv");

// TOOLS (CHANGE IF YOU NEED OTHER MODULES)
export const LOGGER = require("morgan");
export const COOKIE_PARSER = require("cookie-parser")
export const BODY_PARSER = require("body-parser")

// LOAD .env FILE
dotenv.config();

// VARIABLES
export const HOST: string = process.env.HOST || "0.0.0.0";
export const PORT: string = process.env.PORT || "3000";