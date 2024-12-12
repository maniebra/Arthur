import { Request, Response } from "express";
const express = require("express");
const controller = require("./controller");

const router = express.Router();

/**
 * @swagger
 * /products/test:
 *   get:
 *     summary: Example endpoint
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get("/test", controller.sample);

module.exports = router;