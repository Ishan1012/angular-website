import { Router } from "express";
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { User, UserModel } from "../models/user.model";
import bcrypt from 'bcryptjs';

const router = Router();

router.get("/getAllUser", asyncHandler(
    async (req, res) => {
        const users = await UserModel.find();
        res.send(users);
    }
))

router.post("/login", asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if(!user) {
            res.status(400).send("Username or password is not valid");
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.send(generateTokenResponse(user));
        }
        else {
            res.status(400).send("Username or password is not valid");
        }
    }
))

router.post('/signup', asyncHandler(
    async (req, res) => {
        const { name, email, password, img } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            res.status(400)
                .send('User already exists, please login!');
            return;
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser: User = {
            id: '',
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            isAdmin: false,
            img,
        }

        const dbUser = await UserModel.create(newUser);
        res.send(generateTokenResponse(dbUser));
    }
))

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    }, "SomeRandomText", {
        expiresIn: "30d"
    });

    user.token = token;
    return user;
}

export default router;