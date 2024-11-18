import express from "express";
import { Router } from "express";
import path from 'path';

const router = Router();

router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

router.get('/uploads/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'uploads', req.params.filename);
    res.sendFile(filePath);
});