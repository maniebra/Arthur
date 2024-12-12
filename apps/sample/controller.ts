import { Request, Response } from "express";

export function sample(req: Request, res: Response, next?: Function) {
    res.status(200).json(
        {
            "message": "Test endpoint worked successfully!"
        }
    );
}