import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import artifactsRouter from './routers/artifacts.router';
import communityRouter from './routers/community.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';
import path from 'path';
import { PORT } from './constants/urls';
import feedbackRouter from './routers/feedback.router';
import newslettersRouter from './routers/newsletters.router';

dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["https://art-corner.vercel.app/"]
}));

app.use("/api/artifacts", artifactsRouter);
app.use("/api/community", communityRouter);
app.use("/api/user", userRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/newsletters", newslettersRouter);

// Serve static files from the uploads folder
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

// Example: Route to test if image is accessible
app.get('/api/uploads/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'uploads', req.params.filename);
  res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log("Website served on http://localhost:"+PORT);
})