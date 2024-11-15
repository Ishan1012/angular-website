import { Router } from "express";
import { initialArtifacts } from "../initialArtifacts";
import asyncHandler from 'express-async-handler';
import { CreateExploreModel } from "../models/createExplore.model";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const artifactsCount = await CreateExploreModel.countDocuments();
        if(artifactsCount>0){
            res.send("Seed is already done!");
            return;
        }

        await CreateExploreModel.create(initialArtifacts);
        res.send("Seed is Done!");
    }
))

router.get("/",asyncHandler(
    async (req,res) => {
        const artifacts = await CreateExploreModel.find();
        res.send(artifacts);
    }
))

router.get("/:artifactid", asyncHandler(
    async (req, res) => {
        const item = await CreateExploreModel.findById(req.params.artifactid);
        res.send(item);
    }
))

router.get("/search/:searchTerm", asyncHandler(
    async (req,res) => {
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const artifacts = await CreateExploreModel.find({title: {$regex: searchRegex}})
        res.send(artifacts);
    }
))

export default router;