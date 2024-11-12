import { Router } from "express";
import { initialCommunities } from "../initialArtifacts";

const router = Router();

router.get("/", (req,res) => {
    res.send(initialCommunities);
})

router.get("/search/:commTrem", (req,res) => {
    const CommunityTerm = req.params.commTrem;
    const communities = initialCommunities.filter(comm => comm.description.toLowerCase().includes(CommunityTerm.toLowerCase()));
    res.send(communities);
})

router.get("/:commid", (req,res) => {
    const Communityid = req.params.commid;
    const communities = initialCommunities.filter(comm => comm.id == Communityid);
    res.send(communities);
})

export default router;