import express from 'express';
import http from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import cors from "cors";
import dotenv from 'dotenv';
import artifactsRouter from './routers/artifacts.router';
import communityRouter from './routers/community.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';
import path from 'path';
import { PORT } from './constants/urls';
import feedbackRouter from './routers/feedback.router';
import newslettersRouter from './routers/newsletters.router';

dotenv.config();

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const io: SocketIOServer = new SocketIOServer(server);

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

// Connect to the database
dbConnect();

// Socket.io connection handling
io.on('connection', (socket: Socket) => {
  console.log('a user connected');
  // ... handle socket events
});

module.exports = app;

// server.listen(PORT, () => {
//   console.log("Website served on http://localhost:"+PORT);
// });