/*=======================================================*/
/*            [ REQUIREMENTS FOR CONFIG.TS ]             */
/*=======================================================*/

// DOTENV CONFIG
const dotenv = require("dotenv");

dotenv.config();

/*=======================================================*/
/*               [ TOOLS FOR THE PROJECT ]               */
/*=======================================================*/

//  (CHANGE IF YOU NEED OTHER MODULES)

// APP.TS TOOLS
export const LOGGER = require("morgan")("dev");
export const COOKIE_PARSER = require("cookie-parser")
export const BODY_PARSER = require("body-parser")


/*=======================================================*/
/*                 [ SHARED VARIABLES ]                  */
/*=======================================================*/

// SERVER VARIABLES
export const HOST: string = process.env.HOST || "0.0.0.0";
export const PORT: string = process.env.PORT || "8000";

// DATABASE VARIABLES
export const DB_TYPE: string = process.env.DB_TYPE || "sqlite";

// SECURITY VARIABLES
export const SALT_ROUNDS: number = parseInt(process.env.SALT_ROUNDS || "10");

export const JWT_SECRET: string = process.env.JWT_SECRET || "unsafe_secret";
export const JWT_EXPIRATION_TIME: string = process.env.JWT_EXPIRATION_TIME || "1h";

export const MIN_PASSWORD_LENGTH: number = parseInt(process.env.MIN_PASSWORD_LENGTH || "8");

/*=======================================================*/
/*                        [ APPS ]                       */
/*=======================================================*/

export const APPS = [
]

export const CONTRIB_APPS = [
    "users",
    "swagger"
]

export const DATABASE_EXCLUDE_APPS = [
    "swagger"
]