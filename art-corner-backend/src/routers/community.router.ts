import { Router } from "express";
import { initialCommunities } from "../initialArtifacts";
import asyncHandler from 'express-async-handler';
import { CommunityModel } from "../models/community.model";


const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const artifactsCount = await CommunityModel.countDocuments();
        if(artifactsCount>0){
            res.send("Seed is already done!");
            return;
        }

        await CommunityModel.create(initialCommunities);
        res.send("Seed is Done!");
    }
))

router.get("/", asyncHandler(
    async (req,res) => {
        const communities = await CommunityModel.find();
        res.send(communities);
    }
))

router.get("/search/:commTrem", (req,res) => {
    const CommunityTerm = req.params.commTrem;
    const communities = initialCommunities.filter(comm => comm.description.toLowerCase().includes(CommunityTerm.toLowerCase()));
    res.send(communities);
})

router.get("/:commid", asyncHandler(
    async (req, res) => {
        const item = await CommunityModel.findById(req.params.commid);
        res.send(item);
    }
))

export default router;