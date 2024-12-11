import { Request, Response } from "express";
const express = require("express");

const router = express.Router();

router.get("/test", (req: Request, res: Response) => {
    res.send("users");
});

module.exports = router;