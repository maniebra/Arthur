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
export const PORT: string = process.env.PORT || "3000";

/*=======================================================*/
/*                        [ APPS ]                       */
/*=======================================================*/

export const APPS = [
    "users"
]

export const CONTRIB_APPS = [
    "swagger"
]