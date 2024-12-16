import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import path from 'path';
import userRouter from './src/app/routers/user.router';
import { dbConnect } from './src/app/configs/database.config';
import communityRouter from './src/app/routers/community.router';
import artifactsRouter from './src/app/routers/artifacts.router';
import feedbackRouter from './src/app/routers/feedback.router';
import newslettersRouter from './src/app/routers/newsletters.router';
import { PORT } from './src/app/constants/urls';

dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["https://art-corner.vercel.app"]
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