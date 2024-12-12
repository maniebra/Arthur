import { Request, Response } from "express";
import * as models from './models';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('@settings/config')

export async function register(req: Request, res: Response) {
    const userData = req.body;

    const username = userData.username;
    const password = userData.password;
    const confirmPassword = userData.confirm_password;

    if (!username || !password || !confirmPassword) {
        res.status(400).json({ error: "Please fill all fields!" });
        return;
    }

    if (password !== confirmPassword) {
        res.status(400).json({ error: "Passwords do not match!" });
        return;
    }

    if (password.length < config.MIN_PASSWORD_LENGTH) {
        res.status(400).json({ error: `Password must be at least ${config.MIN_PASSWORD_LENGTH} characters long!` });
        return
    }

    if (await models.User.findOneBy({ username })) {
        res.status(400).json({ error: "User already exists!" });
        return
    }

    try {
        const salt = await bcrypt.genSalt(config.SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(password, salt);

        let user = new models.User();
        user.username = username;
        user.password = hashedPassword;

        const savedUser = await user.save();

        const token = jwt.sign(
            { id: savedUser.id, username: savedUser.username },
            config.JWT_SECRET,
            { expiresIn: config.JWT_EXPIRATION_TIME } 
        );

        res.status(200).json({ user: savedUser, token });
    } catch (error: unknown) {
        res.status(400).json({ error: "Something went wrong!" });
        console.log(error)
    }
}


export async function authenticate(req: Request, res: Response) {
    const userData = req.body;

    const username = userData.username;
    const password = userData.password;

    if (!username || !password) {
        res.status(400).json({ error: "Please fill all fields!" });
        return;
    }

    const user = await models.User.findOneBy({ username });

    if (!user) {
        res.status(400).json({ error: "User does not exist!" });
        return;
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        res.status(400).json({ error: "Invalid password!" });
        return;
    }

    const token = jwt.sign(
        { id: user.id, username: user.username },
        config.JWT_SECRET,
        { expiresIn: config.JWT_EXPIRATION_TIME }
    );

    res.status(200).json({ user, token });
}