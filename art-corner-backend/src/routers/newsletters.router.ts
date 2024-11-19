import { Router } from "express";
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { NewslettersModel } from "../models/newsletters.model";
import { sample_newletters } from "../newsletters";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const artifactsCount = await NewslettersModel.countDocuments();
        if (artifactsCount > 0) {
            res.send("Seed is already done!");
            return;
        }

        await NewslettersModel.create(sample_newletters);
        res.send("Seed is Done!");
    }
))

router.get("/", asyncHandler(
    async (req, res) => {
        const newsletters = await NewslettersModel.find();
        res.send(newsletters);
    }
))

export default router;