import { Router } from "express";
import jwt from 'jsonwebtoken';
import { Feedback, FeedbackModel } from "../models/feedback.model";
import asyncHandler from 'express-async-handler';

const router = Router();

router.post('/post', asyncHandler(
    async (req, res) => {
        const { name, email, subject, description } = req.body;
        const user = await FeedbackModel.findOne({ email });
        if (user) {
            res.status(400)
                .send('Feedback already submitted!');
            return;
        }

        const newFeedback: Feedback = {
            id: "",
            name,
            email,
            subject,
            description
        }

        const dbFeedback = await FeedbackModel.create(newFeedback);
        res.send(generateTokenResponse(dbFeedback));
    }
))

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email: user.email, subject: user.subject
    }, "SomeRandomText");

    user.token = token;
    return user;
}

router.get("/", asyncHandler(
    async (req, res) => {
        const feedback = await FeedbackModel.find();
        res.send(feedback);
    }
))

export default router;