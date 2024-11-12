import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import artifactsRouter from './routers/artifacts.router';
import communityRouter from './routers/community.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';

// dbConnect();

const port = 4269;

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.use("/api/artifacts", artifactsRouter);
app.use("/api/community", communityRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
    console.log("Website served on http://localhost:"+port);
})