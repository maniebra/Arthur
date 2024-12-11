import { Request, Response } from "express";
const express = require("express");

const router = express.Router();

/**
 * @swagger
 * /users/test:
 *   get:
 *     summary: Example endpoint
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get("/test", (req: Request, res: Response) => {
    res.status(200).json(
        {
            "message": "users test endpoint worked successfully"
        }
    );
});

module.exports = router;