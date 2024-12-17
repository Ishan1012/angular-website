import { Router } from "express";
import asyncHandler from 'express-async-handler';
import { CommunityModel } from "../models/community.model";


const router = Router();

router.get("/", asyncHandler(
    async (req,res) => {
        const communities = await CommunityModel.find();
        res.send(communities);
    }
))

router.get("/:commid", asyncHandler(
    async (req, res) => {
        const item = await CommunityModel.findById(req.params.commid);
        res.send(item);
    }
))

export default router;