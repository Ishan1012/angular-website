import express from "express";
import cors from "cors";
import { initialArtifacts, initialCommunities } from "./initialArtifacts";

const app = express();
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.get("/api/artifacts", (req, res) => {
    res.send(initialArtifacts);
})

app.get("/api/artifacts/:artifactid", (req, res) => {
    const artifactid = req.params.artifactid;
    const item = initialArtifacts.find(artifact => artifact.id == artifactid);
    res.send(item);
})

app.get("/api/artifacts/search/:searchTerm", (req,res) => {
    const searchTerm = req.params.searchTerm;
    const artifacts = initialArtifacts.filter(artifact => artifact.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(artifacts);
})

app.get("/api/community", (req,res) => {
    res.send(initialCommunities);
})

app.get("/api/community/search/:commTrem", (req,res) => {
    const CommunityTerm = req.params.commTrem;
    const communities = initialCommunities.filter(comm => comm.description.toLowerCase().includes(CommunityTerm.toLowerCase()));
    res.send(communities);
})

app.get("/api/community/:commid", (req,res) => {
    const Communityid = req.params.commid;
    const communities = initialCommunities.filter(comm => comm.id == Communityid);
    res.send(communities);
})

const port = 9919;

app.listen(port, () => {
    console.log("Website served on http://localhost:"+port);
})