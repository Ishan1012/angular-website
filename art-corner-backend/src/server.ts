import express from "express";
import cors from "cors";
import { initialArtifacts, initialCommunities } from "./initialArtifacts";
import { sample_users } from "./users";
import jwt from "jsonwebtoken";

const port = 4269;

const app = express();
app.use(express.json());
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

app.post("/api/user/login", (req,res) => {
    const {email,password} = req.body;
    const user = sample_users.find(user => user.email === email && 
        user.password === password
    )

    if(user){
        res.send(generateTokenResponse(user));
    }
    else{
        res.status(400).send("Username or password is not valid");
    }
})

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    },"SomeRandomText", {
        expiresIn: "30d"
    });

    user.token = token;
    return user
}

app.listen(port, () => {
    console.log("Website served on http://localhost:"+port);
})