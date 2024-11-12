import { Router } from "express";
import { initialArtifacts } from "../initialArtifacts";

const router = Router();

router.get("/", (req, res) => {
    res.send(initialArtifacts);
})

router.get("/:artifactid", (req, res) => {
    const artifactid = req.params.artifactid;
    const item = initialArtifacts.find(artifact => artifact.id == artifactid);
    res.send(item);
})

router.get("/search/:searchTerm", (req,res) => {
    const searchTerm = req.params.searchTerm;
    const artifacts = initialArtifacts.filter(artifact => artifact.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(artifacts);
})

export default router;